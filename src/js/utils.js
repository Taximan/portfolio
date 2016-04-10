/**
 * Genearte an random Integer in the given range
 * @param  {Number} min bottom flor
 * @param  {Number} max top flor
 * @return {Number} Random number in between min and max param.
 */
export const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


/**
 * Generate a random 16bit color
 * @return {String} Color string
 */
export const randCol = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16); 


/**
 * turns a JSON string to html appending classes "string" and "string|number|boolean"
 * for more info http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
 * @param {string} the string to format must be valid json
 * @return {string} html to output on the page 
 * 
 */
export function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

export const RAF = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// thanks: https://remysharp.com/2010/07/21/throttling-function-calls
export function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}


//thanks: http://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
export function selectElementText(el, win) {
    win = win || window;
    var doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}

// thanks: http://stackoverflow.com/questions/3169786/clear-text-selection-with-javascript
export function clearSelection () {
  if (window.getSelection) {
    if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {  // IE?
    document.selection.empty();
  }
}

// thanks: http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation
export function scrollToY(scrollTargetY, speed, easing) {
    var scrollY = window.scrollY,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            RAF(tick);
            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}


/** 
 * @param {string} s template
 * @param {Object} d object which keys will be mapped to the template
 * @return {string} rendered string
 */
export function render(s, d) {
  for (var p in d) {
    if(d.hasOwnProperty(p))
      s = s.replace(new RegExp('{{' + p + '}}', 'g'), d[p]);
  }
  return s;
}

export const HTTP = {
  /**
   * POST request 
   * @param {string} url
   * @param {object} map object to send
   * @param {function} callback
   */
  post(url, map, callback) {
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
    xhr.send(JSON.stringify(map));
    
    xhr.onreadystatechange = function () {

      if(xhr.readyState == 4 && xhr.status > 200 && xhr.status < 300) {
        callback(null, {data: xhr.responseText, code: xhr.status});
      } else if (xhr.readyState == 4 && xhr.status >= 400) {
        callback({data: xhr.responseText, code: xhr.status});
      }

    };

  },
  
  head(url, callback) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, true);
    http.onreadystatechange = function () {
        if(this.readyState == this.DONE) {
            callback(this.status != 404);
        }
    }
  }
}