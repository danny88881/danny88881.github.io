// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7asJj":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "ec6042ff2ab63698";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"10GF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
var _games = require("./games");
var _gamesDefault = parcelHelpers.interopDefault(_games);
var _music = require("./music");
var _musicDefault = parcelHelpers.interopDefault(_music);
var _art = require("./art");
var _artDefault = parcelHelpers.interopDefault(_art);
var _me = require("./me");
var _meDefault = parcelHelpers.interopDefault(_me);
var _ = require(".");
var _Default = parcelHelpers.interopDefault(_);
var _gameGallery = require("../games/GameGallery");
var _gameGalleryDefault = parcelHelpers.interopDefault(_gameGallery);
class Slide extends _highwayDefault.default.Transition {
    in({ from , to , done  }) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        _gsapDefault.default.fromTo(from, {
            opacity: '100%',
            left: '0%'
        }, {
            opacity: '0%',
            left: '-100%',
            duration: 1,
            onComplete: function() {
            }
        });
        _gsapDefault.default.fromTo(to, {
            opacity: '0%',
            left: '-100%'
        }, {
            opacity: '100%',
            left: '0%',
            duration: 1,
            onComplete: function() {
                from.remove();
                done();
            }
        });
    }
    out({ from , done  }) {
        done();
    }
}
const H = new _highwayDefault.default.Core({
    transitions: {
        default: Slide
    },
    renderers: {
        maingames: _gamesDefault.default,
        mainart: _artDefault.default,
        mainmusic: _musicDefault.default,
        mainme: _meDefault.default,
        main: _Default.default,
        maingamegallery: _gameGalleryDefault.default
    }
});
H.on('NAVIGATE_END', ({ location  })=>{
    var articleItems = document.querySelectorAll("article");
    for(var i = 0; i < articleItems.length - 1; ++i){
        console.log("Get Obliterated");
        articleItems[i].remove();
    }
    // Check Anchor
    if (location.anchor) {
        // Get element
        const el = document.querySelector(location.anchor);
        if (el) // Scroll to element
        window.scrollTo(el.offsetLeft, el.offsetTop);
    }
});
H.on('NAVIGATE_IN', ({ to , location  })=>{
});
var light_mode = false;
const themeButton = document.getElementById('color-mode');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
let body = document.body;
themeButton.onclick = ()=>{
    if (light_mode) {
        light_mode = false;
        body.classList.replace('light', 'dark');
        moon.classList.replace('other-mode', 'current-mode');
        sun.classList.replace('current-mode', 'other-mode');
    } else {
        light_mode = true;
        body.classList.replace('dark', 'light');
        moon.classList.replace('current-mode', 'other-mode');
        sun.classList.replace('other-mode', 'current-mode');
    }
};

},{"@dogstudio/highway":"gUu7G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","gsap":"2aTR0","./games":"5L9qN","./art":"68pvg","./music":"cPEuU","./me":"3Oi6G",".":"3auaO","../games/GameGallery":"c1qXW"}],"gUu7G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function t() {
}
t.prototype = {
    on: function(t, e1, r1) {
        var i1 = this.e || (this.e = {
        });
        return (i1[t] || (i1[t] = [])).push({
            fn: e1,
            ctx: r1
        }), this;
    },
    once: function(t1, e2, r2) {
        var i2 = this;
        function n1() {
            i2.off(t1, n1), e2.apply(r2, arguments);
        }
        return n1._ = e2, this.on(t1, n1, r2);
    },
    emit: function(t) {
        for(var e3 = [].slice.call(arguments, 1), r3 = ((this.e || (this.e = {
        }))[t] || []).slice(), i3 = 0, n2 = r3.length; i3 < n2; i3++)r3[i3].fn.apply(r3[i3].ctx, e3);
        return this;
    },
    off: function(t, e4) {
        var r4 = this.e || (this.e = {
        }), i4 = r4[t], n3 = [];
        if (i4 && e4) for(var o1 = 0, s1 = i4.length; o1 < s1; o1++)i4[o1].fn !== e4 && i4[o1].fn._ !== e4 && n3.push(i4[o1]);
        return n3.length ? r4[t] = n3 : delete r4[t], this;
    }
};
var e = t;
e.TinyEmitter = t;
var r = function(t2) {
    this.wrap = document.querySelector("[data-router-wrapper]"), this.properties = t2, this.Transition = t2.transition ? new t2.transition.class(this.wrap, t2.transition.name) : null;
};
r.prototype.setup = function() {
    this.onEnter && this.onEnter(), this.onEnterCompleted && this.onEnterCompleted();
}, r.prototype.add = function() {
    this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML);
}, r.prototype.update = function() {
    document.title = this.properties.page.title;
}, r.prototype.show = function(t3) {
    var e5 = this;
    return new Promise(function(r5) {
        try {
            function i5(t) {
                e5.onEnterCompleted && e5.onEnterCompleted(), r5();
            }
            return e5.update(), e5.onEnter && e5.onEnter(), Promise.resolve(e5.Transition ? Promise.resolve(e5.Transition.show(t3)).then(i5) : i5());
        } catch (t4) {
            return Promise.reject(t4);
        }
    });
}, r.prototype.hide = function(t5) {
    var e6 = this;
    return new Promise(function(r6) {
        try {
            function i6(t) {
                e6.onLeaveCompleted && e6.onLeaveCompleted(), r6();
            }
            return e6.onLeave && e6.onLeave(), Promise.resolve(e6.Transition ? Promise.resolve(e6.Transition.hide(t5)).then(i6) : i6());
        } catch (t6) {
            return Promise.reject(t6);
        }
    });
};
var i = new window.DOMParser, n = function(t7, e7) {
    this.renderers = t7, this.transitions = e7;
};
n.prototype.getOrigin = function(t8) {
    var e8 = t8.match(/(https?:\/\/[\w\-.]+)/);
    return e8 ? e8[1].replace(/https?:\/\//, "") : null;
}, n.prototype.getPathname = function(t9) {
    var e9 = t9.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
    return e9 ? e9[1] : "/";
}, n.prototype.getAnchor = function(t10) {
    var e10 = t10.match(/(#.*)$/);
    return e10 ? e10[1] : null;
}, n.prototype.getParams = function(t11) {
    var e11 = t11.match(/\?([\w_\-.=&]+)/);
    if (!e11) return null;
    for(var r7 = e11[1].split("&"), i7 = {
    }, n4 = 0; n4 < r7.length; n4++){
        var o2 = r7[n4].split("=");
        i7[o2[0]] = o2[1];
    }
    return i7;
}, n.prototype.getDOM = function(t12) {
    return "string" == typeof t12 ? i.parseFromString(t12, "text/html") : t12;
}, n.prototype.getView = function(t13) {
    return t13.querySelector("[data-router-view]");
}, n.prototype.getSlug = function(t14) {
    return t14.getAttribute("data-router-view");
}, n.prototype.getRenderer = function(t15) {
    if (!this.renderers) return Promise.resolve(r);
    if (t15 in this.renderers) {
        var e12 = this.renderers[t15];
        return "function" != typeof e12 || r.isPrototypeOf(e12) ? "function" == typeof e12.then ? Promise.resolve(e12).then(function(t16) {
            return t16.default;
        }) : Promise.resolve(e12) : Promise.resolve(e12()).then(function(t17) {
            return t17.default;
        });
    }
    return Promise.resolve(r);
}, n.prototype.getTransition = function(t18) {
    return this.transitions ? t18 in this.transitions ? {
        class: this.transitions[t18],
        name: t18
    } : "default" in this.transitions ? {
        class: this.transitions.default,
        name: "default"
    } : null : null;
}, n.prototype.getProperties = function(t19) {
    var e13 = this.getDOM(t19), r8 = this.getView(e13), i8 = this.getSlug(r8);
    return {
        page: e13,
        view: r8,
        slug: i8,
        renderer: this.getRenderer(i8, this.renderers),
        transition: this.getTransition(i8, this.transitions)
    };
}, n.prototype.getLocation = function(t20) {
    return {
        href: t20,
        anchor: this.getAnchor(t20),
        origin: this.getOrigin(t20),
        params: this.getParams(t20),
        pathname: this.getPathname(t20)
    };
};
var o = function(t21) {
    function e14(e15) {
        var r9 = this;
        void 0 === e15 && (e15 = {
        });
        var i9 = e15.renderers, o3 = e15.transitions;
        t21.call(this), this.Helpers = new n(i9, o3), this.Transitions = o3, this.Contextual = !1, this.location = this.Helpers.getLocation(window.location.href), this.properties = this.Helpers.getProperties(document.cloneNode(!0)), this.popping = !1, this.running = !1, this.trigger = null, this.cache = new Map, this.cache.set(this.location.href, this.properties), this.properties.renderer.then(function(t22) {
            r9.From = new t22(r9.properties), r9.From.setup();
        }), this._navigate = this.navigate.bind(this), window.addEventListener("popstate", this.popState.bind(this)), this.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), this.attach(this.links);
    }
    return t21 && (e14.__proto__ = t21), (e14.prototype = Object.create(t21 && t21.prototype)).constructor = e14, e14.prototype.attach = function(t23) {
        for(var e16 = 0, r10 = t23; e16 < r10.length; e16 += 1)r10[e16].addEventListener("click", this._navigate);
    }, e14.prototype.detach = function(t24) {
        for(var e17 = 0, r11 = t24; e17 < r11.length; e17 += 1)r11[e17].removeEventListener("click", this._navigate);
    }, e14.prototype.navigate = function(t25) {
        if (!t25.metaKey && !t25.ctrlKey) {
            t25.preventDefault();
            var e18 = !!t25.currentTarget.hasAttribute("data-transition") && t25.currentTarget.dataset.transition;
            this.redirect(t25.currentTarget.href, e18, t25.currentTarget);
        }
    }, e14.prototype.redirect = function(t26, e19, r12) {
        if (void 0 === e19 && (e19 = !1), void 0 === r12 && (r12 = "script"), this.trigger = r12, !this.running && t26 !== this.location.href) {
            var i10 = this.Helpers.getLocation(t26);
            this.Contextual = !1, e19 && (this.Contextual = this.Transitions.contextual[e19].prototype, this.Contextual.name = e19), i10.origin !== this.location.origin || i10.anchor && i10.pathname === this.location.pathname ? window.location.href = t26 : (this.location = i10, this.beforeFetch());
        }
    }, e14.prototype.popState = function() {
        this.trigger = "popstate", this.Contextual = !1;
        var t27 = this.Helpers.getLocation(window.location.href);
        this.location.pathname !== t27.pathname || !this.location.anchor && !t27.anchor ? (this.popping = !0, this.location = t27, this.beforeFetch()) : this.location = t27;
    }, e14.prototype.pushState = function() {
        this.popping || window.history.pushState(this.location, "", this.location.href);
    }, e14.prototype.fetch = function() {
        try {
            var t28 = this;
            return Promise.resolve(fetch(t28.location.href, {
                mode: "same-origin",
                method: "GET",
                headers: {
                    "X-Requested-With": "Highway"
                },
                credentials: "same-origin"
            })).then(function(e20) {
                if (e20.status >= 200 && e20.status < 300) return e20.text();
                window.location.href = t28.location.href;
            });
        } catch (t29) {
            return Promise.reject(t29);
        }
    }, e14.prototype.beforeFetch = function() {
        try {
            var t30 = this;
            function e21() {
                t30.afterFetch();
            }
            t30.pushState(), t30.running = !0, t30.emit("NAVIGATE_OUT", {
                from: {
                    page: t30.From.properties.page,
                    view: t30.From.properties.view
                },
                trigger: t30.trigger,
                location: t30.location
            });
            var r13 = {
                trigger: t30.trigger,
                contextual: t30.Contextual
            }, i11 = t30.cache.has(t30.location.href) ? Promise.resolve(t30.From.hide(r13)).then(function() {
                t30.properties = t30.cache.get(t30.location.href);
            }) : Promise.resolve(Promise.all([
                t30.fetch(),
                t30.From.hide(r13)
            ])).then(function(e23) {
                t30.properties = t30.Helpers.getProperties(e23[0]), t30.cache.set(t30.location.href, t30.properties);
            });
            return Promise.resolve(i11 && i11.then ? i11.then(e21) : e21());
        } catch (t31) {
            return Promise.reject(t31);
        }
    }, e14.prototype.afterFetch = function() {
        try {
            var t32 = this;
            return Promise.resolve(t32.properties.renderer).then(function(e24) {
                return t32.To = new e24(t32.properties), t32.To.add(), t32.emit("NAVIGATE_IN", {
                    to: {
                        page: t32.To.properties.page,
                        view: t32.To.wrap.lastElementChild
                    },
                    trigger: t32.trigger,
                    location: t32.location
                }), Promise.resolve(t32.To.show({
                    trigger: t32.trigger,
                    contextual: t32.Contextual
                })).then(function() {
                    t32.popping = !1, t32.running = !1, t32.detach(t32.links), t32.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), t32.attach(t32.links), t32.emit("NAVIGATE_END", {
                        to: {
                            page: t32.To.properties.page,
                            view: t32.To.wrap.lastElementChild
                        },
                        from: {
                            page: t32.From.properties.page,
                            view: t32.From.properties.view
                        },
                        trigger: t32.trigger,
                        location: t32.location
                    }), t32.From = t32.To, t32.trigger = null;
                });
            });
        } catch (t33) {
            return Promise.reject(t33);
        }
    }, e14;
}(e), s = function(t34, e25) {
    this.wrap = t34, this.name = e25;
};
s.prototype.show = function(t35) {
    var e26 = this, r14 = t35.trigger, i12 = t35.contextual, n5 = this.wrap.lastElementChild, o4 = this.wrap.firstElementChild;
    return new Promise(function(t36) {
        i12 ? (n5.setAttribute("data-transition-in", i12.name), n5.removeAttribute("data-transition-out", i12.name), i12.in && i12.in({
            to: n5,
            from: o4,
            trigger: r14,
            done: t36
        })) : (n5.setAttribute("data-transition-in", e26.name), n5.removeAttribute("data-transition-out", e26.name), e26.in && e26.in({
            to: n5,
            from: o4,
            trigger: r14,
            done: t36
        }));
    });
}, s.prototype.hide = function(t37) {
    var e27 = this, r15 = t37.trigger, i13 = t37.contextual, n6 = this.wrap.firstElementChild;
    return new Promise(function(t38) {
        i13 ? (n6.setAttribute("data-transition-out", i13.name), n6.removeAttribute("data-transition-in", i13.name), i13.out && i13.out({
            from: n6,
            trigger: r15,
            done: t38
        })) : (n6.setAttribute("data-transition-out", e27.name), n6.removeAttribute("data-transition-in", e27.name), e27.out && e27.out({
            from: n6,
            trigger: r15,
            done: t38
        }));
    });
}, console.log("Highway v2.2.0");
exports.default = {
    Core: o,
    Helpers: n,
    Renderer: r,
    Transition: s
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2aTR0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gsap", ()=>gsapWithCSS
);
parcelHelpers.export(exports, "default", ()=>gsapWithCSS
);
parcelHelpers.export(exports, "CSSPlugin", ()=>_csspluginJs.CSSPlugin
);
parcelHelpers.export(exports, "TweenMax", ()=>TweenMaxWithCSS
);
parcelHelpers.export(exports, "TweenLite", ()=>_gsapCoreJs.TweenLite
);
parcelHelpers.export(exports, "TimelineMax", ()=>_gsapCoreJs.TimelineMax
);
parcelHelpers.export(exports, "TimelineLite", ()=>_gsapCoreJs.TimelineLite
);
parcelHelpers.export(exports, "Power0", ()=>_gsapCoreJs.Power0
);
parcelHelpers.export(exports, "Power1", ()=>_gsapCoreJs.Power1
);
parcelHelpers.export(exports, "Power2", ()=>_gsapCoreJs.Power2
);
parcelHelpers.export(exports, "Power3", ()=>_gsapCoreJs.Power3
);
parcelHelpers.export(exports, "Power4", ()=>_gsapCoreJs.Power4
);
parcelHelpers.export(exports, "Linear", ()=>_gsapCoreJs.Linear
);
parcelHelpers.export(exports, "Quad", ()=>_gsapCoreJs.Quad
);
parcelHelpers.export(exports, "Cubic", ()=>_gsapCoreJs.Cubic
);
parcelHelpers.export(exports, "Quart", ()=>_gsapCoreJs.Quart
);
parcelHelpers.export(exports, "Quint", ()=>_gsapCoreJs.Quint
);
parcelHelpers.export(exports, "Strong", ()=>_gsapCoreJs.Strong
);
parcelHelpers.export(exports, "Elastic", ()=>_gsapCoreJs.Elastic
);
parcelHelpers.export(exports, "Back", ()=>_gsapCoreJs.Back
);
parcelHelpers.export(exports, "SteppedEase", ()=>_gsapCoreJs.SteppedEase
);
parcelHelpers.export(exports, "Bounce", ()=>_gsapCoreJs.Bounce
);
parcelHelpers.export(exports, "Sine", ()=>_gsapCoreJs.Sine
);
parcelHelpers.export(exports, "Expo", ()=>_gsapCoreJs.Expo
);
parcelHelpers.export(exports, "Circ", ()=>_gsapCoreJs.Circ
);
var _gsapCoreJs = require("./gsap-core.js");
var _csspluginJs = require("./CSSPlugin.js");
var gsapWithCSS = _gsapCoreJs.gsap.registerPlugin(_csspluginJs.CSSPlugin) || _gsapCoreJs.gsap, // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;

},{"./gsap-core.js":"dbpJR","./CSSPlugin.js":"fM91I","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dbpJR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GSCache", ()=>GSCache
);
parcelHelpers.export(exports, "Animation", ()=>Animation
);
parcelHelpers.export(exports, "Timeline", ()=>Timeline
);
parcelHelpers.export(exports, "Tween", ()=>Tween
);
parcelHelpers.export(exports, "PropTween", ()=>PropTween
);
parcelHelpers.export(exports, "gsap", ()=>gsap
);
parcelHelpers.export(exports, "Power0", ()=>Power0
);
parcelHelpers.export(exports, "Power1", ()=>Power1
);
parcelHelpers.export(exports, "Power2", ()=>Power2
);
parcelHelpers.export(exports, "Power3", ()=>Power3
);
parcelHelpers.export(exports, "Power4", ()=>Power4
);
parcelHelpers.export(exports, "Linear", ()=>Linear
);
parcelHelpers.export(exports, "Quad", ()=>Quad
);
parcelHelpers.export(exports, "Cubic", ()=>Cubic
);
parcelHelpers.export(exports, "Quart", ()=>Quart
);
parcelHelpers.export(exports, "Quint", ()=>Quint
);
parcelHelpers.export(exports, "Strong", ()=>Strong
);
parcelHelpers.export(exports, "Elastic", ()=>Elastic
);
parcelHelpers.export(exports, "Back", ()=>Back
);
parcelHelpers.export(exports, "SteppedEase", ()=>SteppedEase
);
parcelHelpers.export(exports, "Bounce", ()=>Bounce
);
parcelHelpers.export(exports, "Sine", ()=>Sine
);
parcelHelpers.export(exports, "Expo", ()=>Expo
);
parcelHelpers.export(exports, "Circ", ()=>Circ
);
parcelHelpers.export(exports, "TweenMax", ()=>Tween
) //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.
;
parcelHelpers.export(exports, "TweenLite", ()=>Tween
);
parcelHelpers.export(exports, "TimelineMax", ()=>Timeline
);
parcelHelpers.export(exports, "TimelineLite", ()=>Timeline
);
parcelHelpers.export(exports, "default", ()=>gsap
);
parcelHelpers.export(exports, "wrap", ()=>wrap
);
parcelHelpers.export(exports, "wrapYoyo", ()=>wrapYoyo
);
parcelHelpers.export(exports, "distribute", ()=>distribute
);
parcelHelpers.export(exports, "random", ()=>random
);
parcelHelpers.export(exports, "snap", ()=>snap
);
parcelHelpers.export(exports, "normalize", ()=>normalize
);
parcelHelpers.export(exports, "getUnit", ()=>getUnit
);
parcelHelpers.export(exports, "clamp", ()=>clamp
);
parcelHelpers.export(exports, "splitColor", ()=>splitColor
);
parcelHelpers.export(exports, "toArray", ()=>toArray
);
parcelHelpers.export(exports, "selector", ()=>selector
);
parcelHelpers.export(exports, "mapRange", ()=>mapRange
);
parcelHelpers.export(exports, "pipe", ()=>pipe
);
parcelHelpers.export(exports, "unitize", ()=>unitize
);
parcelHelpers.export(exports, "interpolate", ()=>interpolate
);
parcelHelpers.export(exports, "shuffle", ()=>shuffle
);
parcelHelpers.export(exports, "_getProperty", ()=>_getProperty
);
parcelHelpers.export(exports, "_numExp", ()=>_numExp
);
parcelHelpers.export(exports, "_numWithUnitExp", ()=>_numWithUnitExp
);
parcelHelpers.export(exports, "_isString", ()=>_isString
);
parcelHelpers.export(exports, "_isUndefined", ()=>_isUndefined
);
parcelHelpers.export(exports, "_renderComplexString", ()=>_renderComplexString
);
parcelHelpers.export(exports, "_relExp", ()=>_relExp
);
parcelHelpers.export(exports, "_setDefaults", ()=>_setDefaults
);
parcelHelpers.export(exports, "_removeLinkedListItem", ()=>_removeLinkedListItem
);
parcelHelpers.export(exports, "_forEachName", ()=>_forEachName
);
parcelHelpers.export(exports, "_sortPropTweensByPriority", ()=>_sortPropTweensByPriority
);
parcelHelpers.export(exports, "_colorStringFilter", ()=>_colorStringFilter
);
parcelHelpers.export(exports, "_replaceRandom", ()=>_replaceRandom
);
parcelHelpers.export(exports, "_checkPlugin", ()=>_checkPlugin
);
parcelHelpers.export(exports, "_plugins", ()=>_plugins
);
parcelHelpers.export(exports, "_ticker", ()=>_ticker
);
parcelHelpers.export(exports, "_config", ()=>_config
);
parcelHelpers.export(exports, "_roundModifier", ()=>_roundModifier
);
parcelHelpers.export(exports, "_round", ()=>_round
);
parcelHelpers.export(exports, "_missingPlugin", ()=>_missingPlugin
);
parcelHelpers.export(exports, "_getSetter", ()=>_getSetter
);
parcelHelpers.export(exports, "_getCache", ()=>_getCache
);
parcelHelpers.export(exports, "_colorExp", ()=>_colorExp
);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
}, _suppressOverwrites, _bigNum = 100000000, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {
}, _installScope = {
}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc() {
    return 0;
}, _reservedProps = {
}, _lazyTweens = [], _lazyLookup = {
}, _lastRenderedFrame, _plugins = {
}, _effects = {
}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {
    }).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = _harnessPlugins.length;
        while((i--) && !_harnessPlugins[i].targetTest(target));
        harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    return targets;
}, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
    return i < l;
}, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {
    };
    _lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough(p) {
    return p;
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    };
}, _merge = function _merge(base, toMerge) {
    for(var p in toMerge)base[p] = toMerge[p];
    return base;
}, _mergeDeep = function _mergeDeep1(base, toMerge) {
    for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep1(base[p] || (base[p] = {
    }), toMerge[p]) : toMerge[p]);
    return base;
}, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {
    }, p;
    for(p in obj)p in excluding || (copy[p] = obj[p]);
    return copy;
}, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) while(parent){
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
    }
    return vars;
}, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]);
    return i < 0;
}, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t)prev = prev._prev;
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) child._next._prev = child;
    else parent[lastProp] = child;
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = child._prev, next = child._next;
    if (prev) prev._next = next;
    else if (parent[firstProp] === child) parent[firstProp] = next;
    if (next) next._prev = prev;
    else if (parent[lastProp] === child) parent[lastProp] = prev;
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
}, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, _hasNoPausedAncestors = function _hasNoPausedAncestors1(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors1(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
        //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
        t = _parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
}, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);
    if (!tween._initted) return 1;
    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [
            totalTime,
            suppressEvents
        ];
        return 1;
    }
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart1(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart1(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) tween._zTime = totalTime;
}, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) return child;
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) return child;
            child = child._prev;
        }
    }
}, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 10000000000 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition1(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        return i > 1 ? _parsePosition1(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {
            };
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : value.substr(v.index + v[0].length);
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function(v) {
        return _clamp(min, max, v);
    });
}, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
}, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) accumulator = [];
    return ar.forEach(function(value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
}, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
        value
    ] : [];
}, selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {
    };
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
}, shuffle = function shuffle(a) {
    return a.sort(function() {
        return 0.5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
    if (_isFunction(v)) return v;
    var vars = _isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {
    }, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) ratioX = ratioY = ({
        center: 0.5,
        edges: 0.5,
        end: 1
    })[from] || 0;
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                _bigNum
            ])[1];
            if (!wrapAt) {
                max = -_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = Math.round(parseFloat(raw) / v) * v * p;
        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        } else snapTo = _roundModifier(snapTo.increment);
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else dx = Math.abs(snapTo[i] - x);
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
}, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 0.00001, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, pipe = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, unitize = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
    };
}, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, wrap = function wrap1(min, max, value1) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap1(0, min.length), max) : _conditionalReturn(value1, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, wrapYoyo = function wrapYoyo1(min, max, value2) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo1(0, min.length - 1), max) : _conditionalReturn(value2, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while(~(i = value.indexOf("random(", prev))){
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 0.00001);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, mapRange = function mapRange(inMin, inMax, outMin, outMax, value3) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value3, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, interpolate = function interpolate1(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = _isString(start), master = {
        }, p1, i1, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i1 = 1; i1 < l; i1++)interpolators.push(interpolate1(start[i1 - 1], start[i1])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) start = _merge(_isArray(start) ? [] : {
        }, start);
        if (!interpolators) {
            for(p1 in end)_addPropTween.call(master, start, p1, "get", end[p1]);
            func = function func(p) {
                return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], params, scope;
    if (!callback) return;
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    return params ? callback.apply(scope, params) : callback.call(scope);
}, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(false);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
}, _quickTween, _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
    var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
        this._props = [];
    } : config, //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
    }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {
        },
        register: 0
    };
    _wake();
    if (config !== Plugin) {
        if (_plugins[name]) return;
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
        _plugins[Plugin.prop = name] = Plugin;
        if (config.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }
    _addGlobal(name, Plugin);
    config.register && config.register(gsap, Plugin, PropTween);
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ _255 = 255, _colorLookup = {
    aqua: [
        0,
        _255,
        _255
    ],
    lime: [
        0,
        _255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        _255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        _255,
        _255,
        _255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        _255,
        _255,
        0
    ],
    orange: [
        _255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        _255,
        0,
        0
    ],
    pink: [
        _255,
        192,
        203
    ],
    cyan: [
        0,
        _255,
        _255
    ],
    transparent: [
        _255,
        _255,
        _255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
}, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [
        v >> 16,
        v >> 8 & _255,
        v & _255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
        if (_colorLookup[v]) a = _colorLookup[v];
        else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & _255,
                    a & _255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & _255,
                v & _255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else a = v.match(_strictNumExp) || _colorLookup.transparent;
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + 0.5);
        a[1] = ~~(s * 100 + 0.5);
        a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, _colorOrderData = function _colorOrderData(v1) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v1.split(_colorExp).forEach(function(v) {
        var a = v.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) return s;
    colors = colors.map(function(color) {
        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
    }
    if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for(; i < l; i++)result += shell[i] + colors[i];
    }
    return result + shell[l];
}, _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in _colorLookup)s += "|" + p + "\\b";
    return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ _tickerActive, _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick1 = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) for(_i = 0; _i < _listeners.length; _i++)// use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick1(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                    _win = _coreInitted = window;
                    _doc = _win.document || {
                    };
                    _globals.gsap = gsap;
                    (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                    _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {
                    });
                    _raf = _win.requestAnimationFrame;
                }
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                _tickerActive = 1;
                _tick1(2);
            }
        },
        sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback) {
            _listeners.indexOf(callback) < 0 && _listeners.push(callback);
            _wake();
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ _easeMap = {
}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {
    }, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        _parseObjectInString(split[1])
    ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase1(timeline, isYoyo) {
    var child = timeline._first, ease;
    while(child){
        if (child instanceof Timeline) _propagateYoyoEase1(child, isYoyo);
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) _propagateYoyoEase1(child.timeline, isYoyo);
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
    };
    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease)_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    });
    return ease;
}, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
}, _configElastic = function _configElastic1(type, amplitude1, period1) {
    var p1 = amplitude1 >= 1 ? amplitude1 : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period1 || (type ? 0.3 : 0.45)) / (amplitude1 < 1 ? amplitude1 : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic1(type, amplitude, period);
    };
    return ease;
}, _configBack = function _configBack1(type, overshoot1) {
    if (overshoot1 === void 0) overshoot1 = 1.70158;
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot1 + 1) * p + overshoot1) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack1(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) steps = 1;
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /*#__PURE__*/ function() {
    function Animation1(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        _tickerActive || _ticker.wake();
    }
    var _proto = Animation1.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            _addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value) {
        if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        if (this._rts === value) return this;
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
        _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return this;
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                _wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
        }
        return time;
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) delete vars[type];
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
            else self._prom = _resolve;
        });
    };
    _proto.kill = function kill() {
        _interrupt(this);
    };
    return Animation1;
}();
_setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var Timeline = /*#__PURE__*/ function(_Animation) {
    _inheritsLoose(Timeline1, _Animation);
    function Timeline1(vars, position) {
        var _this;
        if (vars === void 0) vars = {
        };
        _this = _Animation.call(this, vars) || this;
        _this.labels = {
        };
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline1.prototype;
    _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : dur;
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && _callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                    return this;
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) return this;
                     //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    _propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) tTime -= time - (time = pauseTween._start);
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && time && !suppressEvents) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    _setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) || (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation)) {
            if (_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if (_isString(child)) return this.addLabel(child, position);
            if (_isFunction(child)) child = Tween.delayedCall(0, child);
            else return this;
        }
        return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) nested = true;
        if (tweens === void 0) tweens = true;
        if (timelines === void 0) timelines = true;
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) tweens && a.push(child);
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) return animations[i];
        }
    };
    _proto2.remove = function remove(child) {
        if (_isString(child)) return this.removeLabel(child);
        if (_isFunction(child)) return this.killTweensOf(child);
        _removeLinkedListItem(this, child);
        if (child === this._recent) this._recent = this._last;
        return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts) //special case for the global timeline (or any other that has no parent or detached parent).
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") _removeFromParent(child);
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--)_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                a.push(child);
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {
        };
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
            startAt: {
                time: _parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) afterTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) beforeTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
        var child = this._first, labels = this.labels, p;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        }
        return _uncache(this);
    };
    _proto2.invalidate = function invalidate() {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate();
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) includeLabels = true;
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {
        });
        return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else prevStart = start;
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -Infinity);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline1.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                    while(child && !child._ts)child = child._next;
                    child || _ticker.sleep();
                }
            }
        }
    };
    return Timeline1;
}(Animation);
_setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while(result = _complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) color = (color + 1) % 5;
        else if (chunk.substr(-5) === "rgba(") color = 1;
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
        if (~end.indexOf("random(")) end = _replaceRandom(end);
        if (end.charAt(1) === "=") {
            pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) // to avoid isNaN, like if someone passes in a value like "!= whatever"
            end = pt;
        }
    }
    if (parsedStart !== end) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    var copy = {
    }, p;
    for(p in vars)copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    return copy;
}, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--)ptLookup[plugin._props[i]] = pt;
        }
    }
    return plugin;
}, _overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween1(tween, time) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = _copyExcluding(vars, _reservedProps);
        prevStartAt && _removeFromParent(prevStartAt.render(-1, true));
        if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate,
                onUpdateParams: onUpdateParams,
                callbackScope: callbackScope,
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
                if (dur && time <= 0) {
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                } // if (time > 0) {
            // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
            // } else if (dur && !(time < 0 && prevStartAt)) {
            // 	time && (tween._zTime = time);
            // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
            // }
            } else if (autoRevert === false) tween._startAt = 0;
        } else if (runBackwards && dur) {
            //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
            if (prevStartAt) !autoRevert && (tween._startAt = 0);
            else {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = _setDefaults({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && _isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.
                tween._zTime = time;
                if (!immediateRender) _initTween1(tween._startAt, _tinyNum); //ensures that the initial values are recorded
                else if (!time) return;
            }
        }
        tween._pt = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {
            };
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars)if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) return vars;
    copy = _merge({
    }, vars);
    for(p in propertyAliases)if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while(i--)copy[aliases[i]] = copy[p];
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else for(p in obj){
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
        });
    }
}, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = {
};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
});
var Tween = /*#__PURE__*/ function(_Animation2) {
    _inheritsLoose(Tween1, _Animation2);
    function Tween1(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {
                }
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger)if (~_staggerTweenProps.indexOf(p)) {
                        staggerVarsToMerge || (staggerVarsToMerge = {
                        });
                        staggerVarsToMerge[p] = stagger[p];
                    }
                }
                for(i = 0; i < l; i++){
                    copy = _copyExcluding(vars, _staggerPropsToSkip);
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = _easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                _inheritDefaults(_setDefaults(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a1, kf, v;
                if (_isArray(keyframes)) keyframes.forEach(function(frame) {
                    return tl.to(parsedTargets, frame, ">");
                });
                else {
                    copy = {
                    };
                    for(p in keyframes)p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    for(p in copy){
                        a1 = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a1.length; i++){
                            kf = a1[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a1[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({
                    }, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay)); //in case delay is negative
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween1.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
            //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) //could be during the repeatDelay part. No need to render and fire callbacks.
                return this;
                if (iteration !== prevIteration) {
                    timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (dur !== this._dur) // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                return this.render(totalTime, suppressEvents, force);
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) this.ratio = ratio = 1 - ratio;
            if (time && !prevTime && !suppressEvents) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate() {
        this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate();
        return _Animation2.prototype.invalidate.call(this);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) vars = "all";
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if (_isString(vars)) {
                p = {
                };
                _forEachName(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {
                };
            } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {
                };
                props = vars;
            }
            for(p in props){
                pt = curLookup && curLookup[p];
                if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                    delete curLookup[p];
                }
                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
            }
        }
        this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween1.to = function to(targets, vars) {
        return new Tween1(targets, vars, arguments[2]);
    };
    Tween1.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
    };
    Tween1.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween1(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        });
    };
    Tween1.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
    };
    Tween1.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween1(targets, vars);
    };
    Tween1.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween1;
}(Animation);
_setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) //b = beginning string
    s = data.b;
    else if (ratio === 1 && data.e) //e = ending string
    s = data.e;
    else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
        else if (!pt.dep) hasNonDependentRemaining = 1;
        pt = next;
    }
    return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
        else first = pt;
        if (pt._next = pt2) pt2._prev = pt;
        else last = pt;
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var PropTween = /*#__PURE__*/ function() {
    function PropTween1(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
    }
    var _proto4 = PropTween1.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween1;
}(); //Initialization tasks
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var _gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        args.forEach(function(config) {
            return _createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property1, unit1, uncache1) {
        _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
        var getter = _getCache(target || {
        }).get, format = unit1 ? _passThrough : _numericIfPossible;
        unit1 === "native" && (unit1 = "");
        return !target ? target : !property1 ? function(property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property1] && _plugins[property1].get || getter)(target, property1, unit1, uncache1));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return gsap.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--)setters[i](value);
            };
        }
        target = target[0] || {
        };
        var Plugin = _plugins[property], cache = _getCache(target), p2 = cache.harness && (cache.harness.aliases || {
        })[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [
                target
            ]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p2);
        return Plugin ? setter : function(value) {
            return setter(target, p2, unit ? value + unit : value, cache, 1);
        };
    },
    isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {
        });
    },
    config: function config(value) {
        return _mergeDeep(_config, value || {
        });
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {
            }, defaults), tl);
        };
        if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {
            }, this), position);
        };
    },
    registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
        return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) vars = {
        };
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
            child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
    },
    utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        selector: selector,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
        }
    }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({
}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
    return pt;
}, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) // is a plugin
                pt = _getPluginPropTween(pt, p);
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween1) {
            tween1._onInit = function(tween) {
                var temp, p;
                if (_isString(vars)) {
                    temp = {
                    };
                    _forEachName(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {
                    };
                    for(p in vars)temp[p] = modifier(vars[p]);
                    vars = temp;
                }
                _addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt;
        for(p in vars){
            pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
            pt && (pt.op = p);
            this._props.push(p);
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while(i--)this.add(target, i, target[i] || 0, value[i]);
    }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
Tween.version = Timeline.version = gsap.version = "3.9.1";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fM91I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSPlugin", ()=>CSSPlugin
);
parcelHelpers.export(exports, "default", ()=>CSSPlugin
);
parcelHelpers.export(exports, "_getBBox", ()=>_getBBox
);
parcelHelpers.export(exports, "_createElement", ()=>_createElement
);
parcelHelpers.export(exports, "checkPrefix", ()=>_checkPropPrefix
);
/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _gsapCoreJs = require("./gsap-core.js");
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _transformProps = {
}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 100000000, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, _getComputedProperty = function _getComputedProperty1(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty1(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) return property;
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while((i--) && !(_prefixes[i] + property in s));
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore() {
    if (_windowExists() && window.document) {
        _win = window;
        _doc = _win.document;
        _docElement = _doc.documentElement;
        _tempDiv = _createElement("div") || {
            style: {
            }
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        _supports3D = !!_checkPropPrefix("perspective");
        _pluginInitted = 1;
    }
}, _getBBoxHack = function _getBBoxHack1(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original
        this.getBBox = _getBBoxHack1;
    } catch (e) {
    }
    else if (this._gsapBBox) bbox = this._gsapBBox();
    if (oldParent) {
        if (oldSibling) oldParent.insertBefore(this, oldSibling);
        else oldParent.appendChild(this);
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
    }
}, _getBBox = function _getBBox(target) {
    var bounds;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style;
        if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
        if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            property = "-" + property;
            style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
        } else //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
    }
}, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new _gsapCoreJs.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit1(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit1(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return _gsapCoreJs._round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) parent = (target.ownerSVGElement || {
    }).parentNode;
    if (!parent || parent === _doc || !parent.appendChild) parent = _doc.body;
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _gsapCoreJs._ticker.time) return _gsapCoreJs._round(curValue / cache.width * amount);
    else {
        (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
        if (horizontal && toPercent) {
            cache = _gsapCoreJs._getCache(parent);
            cache.time = _gsapCoreJs._ticker.time;
            cache.width = parent[measureProperty];
        }
    }
    return _gsapCoreJs._round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) property = property.split(",")[0];
    }
    if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _gsapCoreJs._getProperty(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
    var pt = new _gsapCoreJs.PropTween(this._pt, target.style, prop, 0, 1, _gsapCoreJs._renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (end === "auto") {
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        target.style[prop] = start;
    }
    a = [
        start,
        end
    ];
    _gsapCoreJs._colorStringFilter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match(_gsapCoreJs._numWithUnitExp) || [];
    endValues = end.match(_gsapCoreJs._numWithUnitExp) || [];
    if (endValues.length) {
        while(result = _gsapCoreJs._numWithUnitExp.exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                if (relative) endValue = endValue.substr(2);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = _gsapCoreJs._numWithUnitExp.lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || _gsapCoreJs._config.units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                 //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: relative ? relative * endNum : endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    _gsapCoreJs._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
}, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if (_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new _gsapCoreJs.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ _identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], _rotationalProperties = {
}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsapCoreJs._numExp).map(_gsapCoreJs._round);
}, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _gsapCoreJs._getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag
            nextSibling = target.nextSibling;
            _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else cache.xOffset = cache.yOffset = 0;
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new _gsapCoreJs.GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) return cache;
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
        t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = _gsapCoreJs._round(Math.sqrt(a * a + b * b + c * c));
            scaleY = _gsapCoreJs._round(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _gsapCoreJs._round(scaleX);
    cache.scaleY = _gsapCoreJs._round(scaleY);
    cache.rotation = _gsapCoreJs._round(rotation) + deg;
    cache.rotationX = _gsapCoreJs._round(rotationX) + deg;
    cache.rotationY = _gsapCoreJs._round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _gsapCoreJs._config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = _gsapCoreJs.getUnit(start);
    return _gsapCoreJs._round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
    if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
    if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = _gsapCoreJs._round(a11);
        a21 = _gsapCoreJs._round(a21);
        a12 = _gsapCoreJs._round(a12);
        a22 = _gsapCoreJs._round(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = _gsapCoreJs._round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = _gsapCoreJs._round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = _gsapCoreJs._round(tx + xPercent / 100 * temp.width);
        ty = _gsapCoreJs._round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
}, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360, isString = _gsapCoreJs._isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
        }
        if (direction === "cw" && change < 0) change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
        else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
    plugin._pt = pt = new _gsapCoreJs.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source)target[p] = source[p];
    return target;
}, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({
    }, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
    }
    for(p in _transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = _gsapCoreJs.getUnit(startValue);
            endUnit = _gsapCoreJs.getUnit(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new _gsapCoreJs.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
_gsapCoreJs._forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {
        };
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
        _pluginInitted || _initCore();
        for(p in vars){
            if (p === "autoRound") continue;
            endValue = vars[p];
            if (_gsapCoreJs._plugins[p] && _gsapCoreJs._checkPlugin(p, vars, tween, index, target, targets)) continue;
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) endValue = _gsapCoreJs._replaceRandom(endValue);
            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                _gsapCoreJs._colorExp.lastIndex = 0;
                if (!_gsapCoreJs._colorExp.test(startValue)) {
                    // colors don't have units
                    startUnit = _gsapCoreJs.getUnit(startValue);
                    endUnit = _gsapCoreJs.getUnit(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    _gsapCoreJs._isString(startValue) && ~startValue.indexOf("random(") && (startValue = _gsapCoreJs._replaceRandom(startValue));
                    _gsapCoreJs.getUnit(startValue + "") || (startValue += _gsapCoreJs._config.units[p] || _gsapCoreJs.getUnit(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
                } else startValue = _get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                        startNum = 0;
                        _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = _propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new _gsapCoreJs.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new _gsapCoreJs.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in _rotationalProperties) {
                        _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
                        continue;
                    } else if (p === "smoothOrigin") {
                        _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        _addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = _gsapCoreJs.getUnit(endValue) || (p in _gsapCoreJs._config.units ? _gsapCoreJs._config.units[p] : startUnit);
                    startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                    this._pt = new _gsapCoreJs.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = _renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                    this.add(target, p, startValue || target[p], endValue, index, targets);
                    else {
                        _gsapCoreJs._missingPlugin(p, endValue);
                        continue;
                    }
                } else _tweenComplexCSSString.call(this, target, p, startValue, endValue);
                props.push(p);
            }
        }
        hasPriority && _gsapCoreJs._sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {
        }, property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_gsapCoreJs._isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _gsapCoreJs._getSetter(target, property);
    },
    core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
    }
};
_gsapCoreJs.gsap.utils.checkPrefix = _checkPropPrefix;
(function(positionAndScale, rotation, others, aliases) {
    var all = _gsapCoreJs._forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
        _transformProps[name] = 1;
    });
    _gsapCoreJs._forEachName(rotation, function(name) {
        _gsapCoreJs._config.units[name] = "deg";
        _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _gsapCoreJs._forEachName(aliases, function(name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_gsapCoreJs._forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _gsapCoreJs._config.units[name] = "px";
});
_gsapCoreJs.gsap.registerPlugin(CSSPlugin);

},{"./gsap-core.js":"dbpJR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5L9qN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
class gameRenderer extends _highwayDefault.default.Renderer {
    onEnter() {
        document.querySelector("#main-nav").classList.add('compact');
        document.body.classList.add("games");
    }
    onLeave() {
        window.onscroll = function() {
        };
        document.body.style.background = "";
        document.body.style.setProperty("--theme-1-primary", "");
        document.body.classList.remove("games");
    }
    onEnterCompleted() {
        document.body.classList.remove("games");
        document.body.classList.remove("music");
        document.body.classList.remove("art");
        document.body.classList.remove("me");
        document.body.classList.add("games");
        var scrollTimer, lastScrollFireTime = 0;
        var minScrollTime = 100;
        function scrollUpdate() {
            var scrollY = window.scrollY + 100;
            var scrollPointProfessional = document.getElementById("professional").offsetTop;
            var scrollPointIndie = document.getElementById("indie").offsetTop;
            var scrollPointGraveyard = document.getElementById("graveyard").offsetTop;
            if (scrollY >= scrollPointGraveyard) {
                //console.log("GRAVE")
                document.body.style.background = "rgb(100, 100, 100)";
                document.body.style.setProperty("--theme-1-primary", "black");
            } else if (scrollY >= scrollPointIndie) {
                //console.log("INDIE")
                document.body.style.background = "";
                document.body.style.setProperty("--theme-1-primary", "");
            } else if (scrollY >= scrollPointProfessional) {
                //console.log("PROFESSIONAL")
                document.body.style.background = "rgb(10, 10, 10)";
                document.body.style.setProperty("--theme-1-primary", "rgb(200, 200, 200)");
            } else {
                //console.log("NONE")
                document.body.style.background = "";
                document.body.style.setProperty("--theme-1-primary", "");
            //document.body.style.setProperty("--theme-2-primary", "rgb(162, 53, 53)");
            }
        }
        function throttledGameScroll() {
            var now = new Date().getTime();
            if (!scrollTimer) {
                if (now - lastScrollFireTime > 3 * minScrollTime) {
                    scrollUpdate();
                    lastScrollFireTime = now;
                }
                scrollTimer = setTimeout(function() {
                    scrollTimer = null;
                    lastScrollFireTime = new Date().getTime();
                    scrollUpdate();
                }, minScrollTime);
            }
        }
        document.getElementById("launchMinimize").onmouseup = function() {
            document.getElementById("windowThing").classList.add("closed");
            document.getElementById("launchScale").classList.add("closed");
        };
        document.getElementById("launchClose").onmouseup = function() {
            document.getElementById("windowThing").classList.add("closed");
            document.getElementById("launchScale").classList.add("closed");
        };
        document.getElementById("okbutton").onmouseup = function() {
        };
        document.getElementById("nobutton").onmouseup = function() {
            document.getElementById("windowThing").classList.add("closed");
            document.getElementById("launchScale").classList.add("closed");
        };
        document.getElementById("exe").onmouseup = function() {
            document.getElementById("windowThing").classList.remove("closed");
            document.getElementById("launchScale").classList.remove("closed");
        };
        window.onscroll = function() {
            throttledGameScroll();
        };
    }
    onLeaveCompleted() {
    }
}
exports.default = gameRenderer;

},{"@dogstudio/highway":"gUu7G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"68pvg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
var fontarr = [
    "Abril",
    "Lobster",
    "Architects",
    "VCR",
    "MajorMono"
];
var borderarr = [
    "url(./PictureFrames/frame1.webp) 158",
    "url(./PictureFrames/frame2.webp) 178",
    "url(./PictureFrames/frame3.webp) 187",
    "url(./PictureFrames/frame4.webp) 97",
    "url(./PictureFrames/frame5.webp) 190", 
];
// https://www.youtube.com/watch?v=XGioNBHrFU4 awesome vid
var canvas = null;
var particleArr = [];
var prevfontindex = 0;
const mouse = {
    x: null,
    y: null,
    radius: 150
};
class Particle {
    constructor(x, y, bx, by){
        this.x = x;
        this.y = y;
        this.size = 20;
        this.baseX = bx;
        this.baseY = by;
        this.density = Math.random() * 10 + 10;
    }
    draw(ctx) {
        var col = window.getComputedStyle(document.body, null).getPropertyValue('--theme-3-primary');
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update(ctx) {
        var dx = mouse.x - this.x;
        var dy = mouse.y - this.y;
        var len = Math.sqrt(dx * dx + dy * dy);
        var forceDirX = dx / len;
        var forceDirY = dy / len;
        var maxDist = mouse.radius;
        let force = (maxDist - len) / maxDist;
        let dirX = forceDirX * force * this.density;
        let dirY = forceDirY * force * this.density;
        let bdx = this.x - this.baseX;
        let bdy = this.y - this.baseY;
        let distFromBase = Math.sqrt(bdx * bdx + bdy * bdy);
        if (len < mouse.radius) {
            this.x -= dirX;
            this.y -= dirY;
            this.size = 25;
        } else {
            if (Math.abs(this.x - this.baseX) > 8) this.x -= bdx / 10;
            if (Math.abs(this.y - this.baseY) > 8) this.y -= bdy / 10;
        }
        this.size = canvas.width / 200 + canvas.width / 200 / Math.max(1, distFromBase * 0.01);
    }
}
var runAnim = false;
class artRenderer extends _highwayDefault.default.Renderer {
    onEnter() {
        document.querySelector("#main-nav").classList.add('compact');
        document.body.classList.add("art");
    }
    onLeave() {
        window.onmousemove = function(e) {
        };
        window.onmouseup = function(e) {
        };
        document.body.classList.remove("art");
        runAnim = false;
    }
    onEnterCompleted() {
        document.body.classList.remove("games");
        document.body.classList.remove("music");
        document.body.classList.remove("art");
        document.body.classList.remove("me");
        document.body.classList.add("art");
        runAnim = true;
        prevfontindex = 0;
        canvas = document.getElementById("arttitlecanvas");
        const ctx1 = canvas.getContext("2d");
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight;
        console.log("ART OK");
        ctx1.fillStyle = 'white';
        ctx1.font = '40px Abril';
        ctx1.fillText('ART', 0, 50);
        const data1 = ctx1.getImageData(0, 0, 100, 100);
        var xOffset1 = canvas.width * 0.1;
        var yOffset1 = -80;
        particleArr = [];
        for(let y1 = 0; y1 < data1.height; ++y1){
            for(let x = 0; x < data1.width; ++x)if (data1.data[y1 * 4 * data1.width + x * 4 + 3] > 128) {
                var xpos = x * document.body.clientWidth / 100 + xOffset1;
                var ypos = y1 * document.body.clientWidth / 100 + yOffset1;
                //console.log(Math.round(xpos / document.body.clientWidth) * (document.body.clientWidth - 100) + 50)
                var xstart = Math.round(xpos / document.body.clientWidth) * (document.body.clientWidth - 100) + 50;
                //var ystart = Math.round(ypos / window.innerHeight) * (window.innerHeight - 100) + 50;
                //console.log(document.body.clientWidth)
                particleArr.push(new Particle(xstart, ypos, xpos, ypos));
            }
        }
        function animate() {
            ctx1.clearRect(0, 0, canvas.width, canvas.height);
            for(let i = 0; i < particleArr.length; ++i){
                particleArr[i].draw(ctx1);
                particleArr[i].update(ctx1);
            }
            if (runAnim) requestAnimationFrame(animate);
        }
        animate();
        var frames = document.querySelectorAll(".galleryitem .image");
        var iframes = document.getElementById("websiteart");
        var framespans = document.querySelectorAll("#gallery span.galleryitem");
        iframes.style.borderImage = borderarr[Math.floor(Math.random() * borderarr.length)];
        for(var i1 = 0; i1 < frames.length; ++i1)if (Math.random() < 0.6) {
            frames[i1].style.borderWidth = Math.random() * 80 + 20 + "px";
            frames[i1].style.borderImage = borderarr[Math.floor(Math.random() * borderarr.length)];
        }
        for(var i1 = 0; i1 < framespans.length; ++i1)framespans[i1].style.animation = `wiggle-float-${Boolean(Math.floor(Math.random() * 2)) ? "l" : "r"} ${Math.random() * 0.4 - 0.2 + 3.2}s ease-in-out ${Math.random() * 1}s infinite`;
        function mouseMove(e) {
            mouse.x = e.pageX;
            mouse.y = e.pageY;
        }
        function randomizeFont() {
            canvas = document.getElementById("arttitlecanvas");
            if (canvas != null) {
                const ctx = canvas.getContext("2d");
                canvas.width = document.body.clientWidth;
                canvas.height = window.innerHeight;
                ctx.fillStyle = 'white';
                var rand = Math.floor(Math.random() * fontarr.length);
                if (rand == prevfontindex) {
                    rand += 1;
                    rand = rand % fontarr.length;
                }
                prevfontindex = rand;
                ctx.font = '40px ' + fontarr[rand];
                ctx.fillText('ART', 0, 50);
                const data = ctx.getImageData(0, 0, 100, 100);
                var xOffset = canvas.width * 0.1;
                var yOffset = -80;
                var newPartArr = [];
                for(let y = 0; y < data.height; ++y){
                    for(let x = 0; x < data.width; ++x)if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
                        var xpos = x * document.body.clientWidth / 100 + xOffset;
                        var ypos = y * document.body.clientWidth / 100 + yOffset;
                        if (newPartArr.length < particleArr.length) newPartArr.push(new Particle(particleArr[newPartArr.length].x, particleArr[newPartArr.length].y, xpos, ypos));
                        else particleArr.push(new Particle(xpos, ypos, xpos, ypos));
                    }
                }
                particleArr = newPartArr;
            }
        }
        window.onmousemove = function(e) {
            mouseMove(e);
        };
        window.onmouseup = function(e) {
            randomizeFont();
        };
    }
    onLeaveCompleted() {
    }
}
exports.default = artRenderer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@dogstudio/highway":"gUu7G"}],"cPEuU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
// I manually downloaded everything :-|
// NEED TO PASTE songs FOLDER INTO dist
const playpause_indicators = document.getElementsByClassName('playpause');
const audio = document.getElementById("music-player");
const control = document.getElementById("music-control");
const playpause = document.getElementById("playpause-control");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const progresscontainer = document.getElementById("progress-container");
const volume_bar = document.getElementById("volume");
const volumecontainer = document.getElementById("volume-container");
const record = document.getElementById("record");
const record_image = document.getElementById("image");
const songname = document.getElementById("song-name");
const songnote = document.getElementById("song-note");
const SRC = 0;
const IMG = 1;
const DATE = 2;
const VOL = 3;
const SEC = 4;
//sort date vertically
//sort genre horizontally
// using audacity ogg quality 3
var songs = {
    "Takoyaki - Ocean Song": [
        "Takoyaki/ocean_song_collegeJam",
        "takoyaki",
        "4/5/21",
        100,
        "games"
    ],
    "Takoyaki - Dungeon Song": [
        "Takoyaki/dungeon_song_collegeJam",
        "takoyaki",
        "4/5/21",
        100,
        "games"
    ],
    "The Game of Mao - Chillax": [
        "TheGameofMao/chillax",
        "thegameofmao",
        "8/6/19",
        100,
        "games"
    ],
    "5 minutes to save the world - 5 minutes to compose": [
        "5minutes/beepbox",
        "5minutes",
        "4/7/19",
        100,
        "games"
    ],
    "tiny people BIG GUNS - yeeee": [
        "tinypeopleBIGGUNS/yeeee",
        "tinypeopleBIGGUNS",
        "11/4/18",
        100,
        "games"
    ],
    "Finite Space - space age": [
        "Finite Space/space-age",
        "finitespace",
        "5/13/18",
        100,
        "games"
    ],
    "A Knight of Music - Song 1": [
        "AKnightOfMusic/ld-41-song-1",
        "aknightofmusic",
        "4/22/18",
        100,
        "games"
    ],
    "A Knight of Music - Song 2": [
        "AKnightOfMusic/ld-41-song-2",
        "aknightofmusic",
        "4/22/18",
        100,
        "games"
    ],
    "A Knight of Music - Song 3": [
        "AKnightOfMusic/ld-41-song-3",
        "aknightofmusic",
        "4/22/18",
        100,
        "games"
    ],
    "A Knight of Music - Song 4": [
        "AKnightOfMusic/ld-41-song-4",
        "aknightofmusic",
        "4/22/18",
        100,
        "games"
    ],
    "[ - - - ]": [
        "[ - - - ]",
        "[ - - - ]",
        "6/4/19",
        100,
        "me"
    ],
    "[intro]": [
        "[intro]",
        "unknown",
        "8/27/20",
        100,
        "me"
    ],
    "sounds of the seaside": [
        "1 - 12 - 19",
        "1-12-19",
        "1/12/19",
        100,
        "me"
    ],
    "cup noodles": [
        "1 2 3",
        "cup noodles",
        "1/20/19",
        100,
        "me"
    ],
    "smr": [
        "1-10-19",
        "smr",
        "1/11/19",
        100,
        "me"
    ],
    "31° CLOUDY feels like 22° H 31° / L 22° UV Index 1 of 10": [
        "1-13-19",
        "1-13-19",
        "1/13/19",
        100,
        "me"
    ],
    "1": [
        "1",
        "1",
        "1/8/21",
        70,
        "me"
    ],
    "3 30 20 alt": [
        "3 30 20 alt",
        "tom",
        "3/30/20",
        100,
        "me"
    ],
    "10-7-17": [
        "10-7-17",
        "10-7-17",
        "10/7/17",
        100,
        "me"
    ],
    "11-14-21guitar": [
        "11-14-21guitar",
        "11-14-21guitar",
        "11/14/21",
        100,
        "me"
    ],
    "1985": [
        "1985",
        "synth",
        "4/9/19",
        100,
        "me"
    ],
    "a week in minutes": [
        "a week in minutes",
        "unknown",
        "9/1/20",
        100,
        "me"
    ],
    "club penguin 🤤": [
        "beaches",
        "tom",
        "5/30/20",
        100,
        "me"
    ],
    //"boggers":                                                      ["boggers",                 "unknown",           "8/28/20",  90, "me"],
    "bombpopthing": [
        "bombpopthing",
        "unknown",
        "6/24/20",
        100,
        "me"
    ],
    "breathe": [
        "breathe-edit",
        "synth",
        "10/22/18",
        100,
        "me"
    ],
    "sound test": [
        "bruh",
        "soundtest",
        "5/30/20",
        100,
        "me"
    ],
    "kwk_lps": [
        "bruh2",
        "1",
        "7/17/20",
        100,
        "me"
    ],
    "days like these": [
        "days like these",
        "days like these",
        "12/2/18",
        100,
        "me"
    ],
    "earthquakes": [
        "earthquakes",
        "synth",
        "2/25/20",
        100,
        "me"
    ],
    "ending2": [
        "ending2",
        "ending2",
        "8/18/21",
        100,
        "me"
    ],
    "floppy disk": [
        "floppy disc",
        "synth",
        "4/19/19",
        100,
        "me"
    ],
    "frosty mornings": [
        "frosty mornings_alt",
        "frosty",
        "11/22/18",
        100,
        "me"
    ],
    "g1": [
        "g1",
        "g1",
        "1/22/21",
        100,
        "me"
    ],
    "heyU!": [
        "heyU!",
        "heyu",
        "10/26/18",
        100,
        "me"
    ],
    "is this music or something?": [
        "is this music or something. (shortened)",
        "isthismusic",
        "10/25/18",
        100,
        "me"
    ],
    "it rains": [
        "itrains",
        "itrains",
        "6/23/20",
        100,
        "me"
    ],
    "L8": [
        "L8",
        "l8",
        "12/8/18",
        100,
        "me"
    ],
    "minecraft 🤤": [
        "minecraft",
        "tom",
        "2/25/20",
        100,
        "me"
    ],
    "new dawn": [
        "new-dawn cut",
        "synth",
        "10/22/18",
        100,
        "me"
    ],
    "normal tuesday night": [
        "normal tuesday night (mp3cut.net)",
        "anormal",
        "10/29/18",
        100,
        "me"
    ],
    "numb": [
        "numb",
        "numb",
        "6/27/20",
        100,
        "me"
    ],
    "nvr4get": [
        "nvr4get",
        "synth",
        "4/9/19",
        100,
        "me"
    ],
    "nadnaks": [
        "skandandrakething",
        "unknown",
        "4/24/20",
        100,
        "me"
    ],
    "sky dance": [
        "sky-dance-edit",
        "synth",
        "10/22/18",
        100,
        "me"
    ],
    "spring": [
        "spring",
        "unknown",
        "3/3/20",
        100,
        "me"
    ],
    "testasd": [
        "testasd",
        "unknown",
        "4/3/20",
        100,
        "me"
    ],
    "tetrishit": [
        "tetrishit-final",
        "tetrishit",
        "6/21/20",
        100,
        "me"
    ],
    "game over": [
        "thisisntwhatiwanted",
        "synth",
        "5/30/20",
        100,
        "me"
    ],
    "waiting for the bus": [
        "waiting for the bus",
        "waitingforthe",
        "10/29/18",
        100,
        "me"
    ],
    "-waiting-": [
        "waiting",
        "waiting",
        "6/9/19",
        100,
        "me"
    ],
    "waltz of a better past": [
        "waltz of a better past",
        "waltzofa",
        "11/15/18",
        100,
        "me"
    ],
    "can’t help falling in love": [
        "1 2 3 4",
        "unme",
        "1/20/19",
        100,
        "illegal"
    ],
    "jelly filled doughnuts": [
        "awaY",
        "ghibli2",
        "4/14/19",
        100,
        "illegal"
    ],
    "b careful w/ my heart": [
        "b careful with my heart",
        "bcareful",
        "5/30/20",
        100,
        "illegal"
    ],
    "Castle In The Sky": [
        "castle in the sky",
        "ghibli",
        "1/20/19",
        100,
        "illegal"
    ],
    "dearly beloved": [
        "dearly beloved",
        "dearly beloved",
        "2/13/19",
        100,
        "illegal"
    ],
    "do i dance inside ur head": [
        "do i dance inside ur head",
        "unknown",
        "8/7/20",
        100,
        "illegal"
    ],
    "fly me to the moon": [
        "flyme",
        "ohio",
        "7/27/20",
        100,
        "illegal"
    ],
    "for the best": [
        "for the best",
        "for the best",
        "8/29/20",
        100,
        "illegal"
    ],
    "fr fr fr this time": [
        "frfrfrthistime_v2",
        "tyler",
        "1/20/22",
        100,
        "illegal"
    ],
    "hope": [
        "good byes",
        "avatar",
        "12/10/19",
        100,
        "illegal"
    ],
    "goodbye": [
        "goodbye",
        "kingdomhearts",
        "6/24/20",
        100,
        "illegal"
    ],
    "花": [
        "hana",
        "hana",
        "7/27/20",
        100,
        "illegal"
    ],
    "heard.": [
        "heard.",
        "heard",
        "4/12/19",
        100,
        "illegal"
    ],
    "how did i get here": [
        "how did i get here",
        "howdidigethere",
        "8/28/20",
        100,
        "illegal"
    ],
    "how did we get here": [
        "how did we get here again.",
        "inuyasha",
        "9/19/19",
        100,
        "illegal"
    ],
    "losing interest": [
        "interest",
        "shiloh",
        "3/24/19",
        100,
        "illegal"
    ],
    "Koreaboo": [
        "koreaboo3",
        "koreaboo",
        "6/22/20",
        100,
        "illegal"
    ],
    "luv": [
        "l u v u",
        "fallinlove",
        "12/30/19",
        100,
        "illegal"
    ],
    "listen": [
        "listen",
        "unme",
        "1/20/19",
        100,
        "illegal"
    ],
    "[ . . . ]": [
        "lmAo",
        "[ . . . ]",
        "4/14/19",
        100,
        "illegal"
    ],
    "the wisp sings": [
        "love me",
        "wisp",
        "8/30/20",
        100,
        "illegal"
    ],
    "memories of a distant past": [
        "memories of the past",
        "zelda",
        "7/25/20",
        100,
        "illegal"
    ],
    "monsters": [
        "monsters",
        "monsters",
        "1/14/20",
        100,
        "illegal"
    ],
    "procrastination": [
        "nylo_1_edit",
        "unknown",
        "9/23/20",
        100,
        "illegal"
    ],
    "hide away": [
        "nylo_3_edit195",
        "hideaway",
        "9/23/20",
        100,
        "illegal"
    ],
    "One Summers Night": [
        "one summers night",
        "ghibli",
        "1/20/19",
        100,
        "illegal"
    ],
    "hot potato": [
        "our stars",
        "hotpotato",
        "9/19/19",
        100,
        "illegal"
    ],
    "さくら色の夢": [
        "sakura colored dreams",
        "deemo",
        "6/24/20",
        100,
        "illegal"
    ],
    "2009": [
        "sundays",
        "pokemon",
        "12/10/19",
        100,
        "illegal"
    ],
    "U&ME": [
        "U&ME",
        "unme",
        "11/29/18",
        100,
        "illegal"
    ],
    "weather": [
        "weather",
        "weather",
        "2/21/20",
        100,
        "illegal"
    ],
    "where have u been": [
        "where have u been (faster)",
        "persona",
        "2/12/19",
        100,
        "illegal"
    ],
    "youth": [
        "youth",
        "youth",
        "2/20/20",
        100,
        "illegal"
    ]
};
var notes = {
    "[ - - - ]": "i wish i could find the original image i took",
    "[intro]": "to what? i don't know",
    "sounds of the seaside": "",
    "cup noodles": "",
    "1": "i wish i made this one shorter",
    "smr": "",
    "31° CLOUDY feels like 22° H 31° / L 22° UV Index 1 of 10": "",
    "3 30 20 alt": "this goes so soft",
    "10-7-17": "i made this on an iphone. it is not very good",
    "11-14-21guitar": "i've been told this sounds like keshi, whoever that is.",
    "1985": "",
    "a week in minutes": "two and one tenth to be exact",
    "club penguin 🤤": "the ninja card game thing from club pengin",
    "boggers": "can't say the p-word anymore (penis)",
    "bombpopthing": ":-|",
    "breathe": "",
    "kwk_lps": "i do not like this one",
    "days like these": "",
    "earthquakes": "",
    "ending2": "there is no ending 1.",
    "floppy disk": "",
    "frosty mornings": "",
    "g1": "this sounds so familiar, just don't know from where...",
    "heyU!": "",
    "is this music or something?": "",
    "it rains": "this one is on spotify!",
    "L8": "",
    "minecraft 🤤": "actually tho",
    "new dawn": "yeah, i also don't believe that i created this",
    "normal tuesday night": "yes, every tuesday.",
    "numb": "i do not like this one either",
    "nvr4get": "",
    "nadnaks": "A genuine™ nadnaks remix",
    "sky dance": "",
    "spring": "more of a winter guy",
    "testasd": "why bass so loud",
    "tetrishit": "is it tetris-hit or tetri-shit?",
    "game over": "",
    "waiting for the bus": "",
    "-waiting-": "everything is ok",
    "waltz of a better past": "",
    "can't help falling in love": "..",
    "jelly filled doughnuts": "delicious",
    "b careful w/ my heart": "this one is good i think",
    "Castle In The Sky": "",
    "dearly beloved": "there is another. i think this is azura from fire emblem",
    "do i dance inside ur head": "really really, gregory and the hawk is good",
    "fly me to the moon": "ohio",
    "for the best": "i like gregory and the hawk",
    "fr fr fr this time": "i can't help but ruin my favorite songs",
    "hope": "what a good show",
    "goodbye": "this is the other",
    "花": "i do like this one",
    "heard.": "",
    "how did i get here": "it go hard",
    "how did we get here": "yes, all i did was add a drum kit",
    "losing interest": "you gotta have a shiloh",
    "Koreaboo": "i-- nevermind",
    "luv": "all lofi producers gotta have this one",
    "listen": "i can't tell tbh",
    "[ . . . ]": "",
    "the wisp sings": "i do really like this one",
    "memories of a distant past": "haha, don't sue me nintendo",
    "monsters": "",
    "procrastination": "",
    "hide away": "i messed up the bass",
    "One Summers Night": "",
    "hot potato": "",
    "さくら色の夢": "deemo 😙",
    "2009": "it's a feeling y-know",
    "U&ME": "",
    "weather": "",
    "where have u been": "",
    "youth": ""
};
var songQueue = [];
var current_index = -1;
var volume = 0.4;
var max_volume = 100;
audio.addEventListener('timeupdate', (e)=>{
    const { duration , currentTime  } = e.target;
    const perc = currentTime / duration * 100;
    progress.style.width = `${perc}%`;
});
audio.addEventListener('ended', ()=>{
    loadSong(songQueue[(current_index + 1 + songQueue.length) % songQueue.length]);
});
playpause.addEventListener('click', ()=>{
    set_playpause(!playing);
});
prev.addEventListener('click', ()=>{
    if (audio.src != "") loadSong(songQueue[(current_index - 1 + songQueue.length) % songQueue.length]);
});
next.addEventListener('click', ()=>{
    if (audio.src != "") loadSong(songQueue[(current_index + 1 + songQueue.length) % songQueue.length]);
});
progresscontainer.addEventListener('click', (e)=>{
    const width = progresscontainer.clientWidth;
    const xpos = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = xpos / width * duration;
});
volumecontainer.addEventListener('click', (e)=>{
    const width = volumecontainer.clientWidth;
    const xpos = e.offsetX;
    volume = xpos / width;
    volume_bar.style.width = `${volume * 100}%`;
    audio.volume = max_volume * volume / 100;
});
function musicInit() {
    var mine_col = document.getElementById("mine_col");
    var illegal_col = document.getElementById("illegal_col");
    var date_col = document.getElementById("date_col");
    loadSongs(mine_col, illegal_col, date_col);
}
function loadSong(song) {
    context.resume();
    var current_song = song;
    current_index = songQueue.indexOf(current_song);
    audio.src = "./songs/audio/" + songs[current_song][SEC] + "/" + songs[current_song][SRC] + ".ogg";
    record_image.src = "./songs/images/" + songs[current_song][IMG] + ".webp";
    max_volume = songs[current_song][VOL];
    audio.volume = max_volume * volume / 100;
    songname.innerText = song;
    songnote.innerText = "";
    if (song in notes) songnote.innerText = notes[song];
    playing = true;
    set_playpause(playing);
}
window.loadSong = loadSong;
var playing = false;
function set_playpause(play) {
    if (audio.src != "") {
        playing = play;
        control.classList.add("touched");
        record.classList.add("touched");
        if (!playing) audio.pause();
        else audio.play();
        for(let i = 0; i < playpause_indicators.length; i++){
            const ind = playpause_indicators[i];
            if (playing) {
                ind.classList.add("play");
                control.classList.add("play");
                record.classList.add("play");
            } else {
                ind.classList.remove("play");
                control.classList.remove("play");
                record.classList.remove("play");
            }
        }
    }
}
function scrollUpdate(fade_items) {
    console.log("SCROLLUPDATE");
    for(var i = 0; i < fade_items.length; ++i){
        var rect = fade_items[i].getBoundingClientRect();
        var bottom = rect.bottom;
        var top = rect.top;
        var sc_pos_bot = bottom / window.innerHeight;
        if (sc_pos_bot > 0.86) {
            var dist = Math.abs(sc_pos_bot - 0.8);
            var n = Math.pow(1 / (dist + 1), 15);
            var perc = n;
            fade_items[i].style.opacity = `${perc * 100}%`;
            fade_items[i].style.pointerEvents = 'none';
        } else {
            fade_items[i].style.opacity = `${100}%`;
            fade_items[i].style.pointerEvents = 'all';
        }
    }
}
function dateComparison(a, b) {
    var d1 = songs[a][DATE].split('/');
    var d2 = songs[b][DATE].split('/');
    var comp_order = [
        2,
        0,
        1
    ];
    for (i of comp_order){
        if (parseInt(d1[i]) > parseInt(d2[i])) return -1;
        if (parseInt(d1[i]) < parseInt(d2[i])) return 1;
    }
    return 0;
}
var context = new AudioContext();
var src = context.createMediaElementSource(audio);
var analyser = context.createAnalyser();
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function loadSongs(mine, illegal, date) {
    var keys = Object.keys(songs);
    keys = keys.sort(dateComparison);
    songQueue = keys;
    var last_month = "-1";
    var last_year = "-1";
    for (key of keys){
        var val = songs[key];
        if (val[SEC] == "games") continue;
        var valdate = songs[key][DATE].split('/');
        var year = valdate[2];
        var month = valdate[0];
        if (year != last_year || month != last_month) {
            last_year = year;
            last_month = month;
            var inhtml = date.innerHTML;
            inhtml += `<div class="colspacer fade">${months[month - 1]}<br>20${year}<br>|</div>`;
            date.innerHTML = inhtml;
        } else {
            var inhtml = date.innerHTML;
            inhtml += `<div class="colspacer"></div>`;
            date.innerHTML = inhtml;
        }
        var elem = null;
        if (val[SEC] == "me") {
            elem = mine;
            var inhtml = illegal.innerHTML;
            inhtml += `<div class="colspacer"></div>`;
            illegal.innerHTML = inhtml;
        } else if (val[SEC] == "illegal") {
            elem = illegal;
            var inhtml = mine.innerHTML;
            inhtml += `<div class="colspacer"></div>`;
            mine.innerHTML = inhtml;
        }
        if (elem != null) {
            var inhtml = elem.innerHTML;
            inhtml += `<div onclick='loadSong("${key}")' class='song item fade' style='animation: wiggle-float-${Boolean(Math.floor(Math.random() * 2)) ? "l" : "r"} ${Math.random() * 0.4 - 0.2 + 3.2}s ease-in-out ${Math.random() * 1}s infinite; 
            background-image: url("./songs/images/${val[IMG]}.webp");'><div>${key}</div></div>`;
            elem.innerHTML = inhtml;
        }
    }
    var soundtracks = document.querySelector("#sound_tracks").children;
    for(var i = 0; i < soundtracks.length; ++i)soundtracks[i].style.animation = `wiggle-float-${Boolean(Math.floor(Math.random() * 2)) ? "l" : "r"} ${Math.random() * 0.4 - 0.2 + 3.2}s ease-in-out ${Math.random() * 1}s infinite`;
}
// I love nick https://codepen.io/nfj525/pen/rVBaab
var visLoaded = false;
function visualizationInit() {
    context.resume();
    if (visLoaded) return;
    visLoaded = true;
    var canvas = document.getElementById("audiocanvas");
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight;
    canvas.style.bottom = "0px";
    canvas.style.width = "100%";
    canvas.style.zIndex = "-3";
    canvas.style.left = "0px";
    //console.log(canvas.width);
    var ctx = canvas.getContext("2d");
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    //console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 2.5;
    var barHeight;
    var x = 0;
    function renderFrame() {
        requestAnimationFrame(renderFrame);
        x = 0;
        analyser.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = "#0000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.globalCompositeOperation = "multiply";
        for(var i = 0; i < bufferLength; i++){
            barHeight = dataArray[i];
            var r = barHeight + 25 * (i / bufferLength);
            var g = 250 * (i / bufferLength);
            var b = 50;
            var col = window.getComputedStyle(document.body, null).getPropertyValue('background-color'); //"#94949494"
            //window.getComputedStyle( document.body ,null).getPropertyValue('--theme-2-primary');
            //window.getComputedStyle( document.body ,null).getPropertyValue('background-color');
            ctx.fillStyle = col;
            ctx.globalAlpha = 0.9 * (r / 255);
            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
            x += barWidth + 1;
        }
    }
    requestAnimationFrame(renderFrame);
}
class musicRenderer extends _highwayDefault.default.Renderer {
    onEnter() {
        document.querySelector("#main-nav").classList.add('compact');
        document.body.classList.add("music");
    }
    onLeave() {
        window.onscroll = function(e) {
        };
        document.body.classList.remove("music");
    }
    onEnterCompleted() {
        document.body.classList.remove("games");
        document.body.classList.remove("music");
        document.body.classList.remove("art");
        document.body.classList.remove("me");
        document.body.classList.add("music");
        musicInit();
        visualizationInit();
        var scrollTimer, lastScrollFireTime = 0;
        var minScrollTime = 60;
        var fade_items = document.getElementsByClassName("fade");
        function throttledScrollFade() {
            var now = new Date().getTime();
            if (!scrollTimer) {
                if (now - lastScrollFireTime > 3 * minScrollTime) {
                    scrollUpdate(fade_items);
                    lastScrollFireTime = now;
                }
                scrollTimer = setTimeout(function() {
                    scrollTimer = null;
                    lastScrollFireTime = new Date().getTime();
                    scrollUpdate(fade_items);
                }, minScrollTime);
            }
        }
        throttledScrollFade(fade_items);
        window.onscroll = function(e) {
            throttledScrollFade();
        };
    }
    onLeaveCompleted() {
    }
}
exports.default = musicRenderer;

},{"@dogstudio/highway":"gUu7G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3Oi6G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
function shadowUpdate(e) {
    var shadowitems = document.body.getElementsByClassName("mouseshadow");
    for(var i = 0; i < shadowitems.length; ++i){
        var rect = shadowitems[i].getBoundingClientRect();
        var x_offset = (rect.right + rect.left) / 2 - e.pageX;
        var y_offset = (rect.bottom + rect.top) / 2 - e.pageY;
        var len = Math.pow(x_offset * x_offset + y_offset * y_offset, 0.1);
        var mov = 1 / len;
        var col1 = window.getComputedStyle(document.body, null).getPropertyValue('--theme-1-primary');
        var col2 = window.getComputedStyle(document.body, null).getPropertyValue('--theme-2-primary');
        var col3 = window.getComputedStyle(document.body, null).getPropertyValue('--theme-3-primary');
        var col4 = window.getComputedStyle(document.body, null).getPropertyValue('--theme-4-primary');
        shadowitems[i].style.textShadow = `
      ${x_offset * mov * 0.02}px ${y_offset * mov * 0.02}px ${col1},
      ${-x_offset * mov * 0.02}px ${-y_offset * mov * 0.02}px ${col2},
      ${x_offset * mov * 0.02}px ${-y_offset * mov * 0.02}px ${col3},
      ${x_offset * mov * 0.2}px ${y_offset * mov * 0.2}px ${col4}`;
    }
}
class meRenderer extends _highwayDefault.default.Renderer {
    onEnter() {
        document.querySelector("#main-nav").classList.add('compact');
        document.body.classList.add("me");
    }
    onLeave() {
        window.onmousemove = function(e) {
        };
        document.body.classList.remove("me");
    }
    onEnterCompleted() {
        document.body.classList.remove("games");
        document.body.classList.remove("music");
        document.body.classList.remove("art");
        document.body.classList.remove("me");
        document.body.classList.add("me");
        window.onmousemove = function(e) {
            shadowUpdate(e);
        };
    }
    onLeaveCompleted() {
    }
}
exports.default = meRenderer;

},{"@dogstudio/highway":"gUu7G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3auaO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
const run = ()=>{
    console.log("HEALLO!");
};
run();
function hoverMenu(toset) {
    var rot = document.getElementById(toset).getElementsByClassName("rotate")[0];
    rot.classList.add('showmenu');
}
window.hoverMenu = hoverMenu;
function stopHoverMenu(toset) {
    var rot = document.getElementById(toset).getElementsByClassName("rotate")[0];
    rot.classList.remove('showmenu');
}
window.stopHoverMenu = stopHoverMenu;
var quotes = [
    'ee oo -roddy ricch',
    'comparison is the thief of joy -theodore roosevelt',
    'the bad news is time flies. the good news is you’re the pilot. -Michael Altshuler',
    'If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely. -Roald Dahl',
    'Tell me why I never want to hear you say I want it that way -Backstreet Boys',
    'I’m nobody’s pawn, Shawn. I’m a Queen. -Burton Guster',
    'I will eat you in manageable, bite-sized pieces. -Burton Guster',
    'I’m having a clear vision on a cloudy day. -Shawn Spencer',
    'What isn’t clear is why people always say ‘goes without saying,’ yet still feel compelled to say the thing that was supposed to go without saying. Doesn’t that bother you? -Shawn Spencer',
    'Songs are like hugs that mouths give to ears! -Mabel Pines',
    'When there’s no cops around, anything’s legal! -Grunkle Stan',
    'You can’t force someone to love you the best thing you can do is strive to be someone worthy of loving -Dipper Pines',
    'I don’t need to feel like I’m waiting to be noticed. I know who I am, and I’ll know what I want if and when it ever comes along. -Fionna',
    'What you’re feeling is called infatuation. The pain is the product of you overvaluing a projected, imaginary relationship with me. -Princess Bubblegum',
    'Dude, sucking at something is the first step towards being sorta good at something. -Jake the Dog',
    'When bad things happen, I know you want to believe they are a joke, But sometimes life is scary and dark. That is why we must find the light. -BMO.',
    'The things that make me different are the things that make me me -Piglet',
    'You and I are a team. There is nothing more important than our friendship. -Mike wazowski',
    'Your time is limited, so don’t waste it living someone else’s life. -Steve Jobs',
    'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
    'Let no one ever come to you without leaving happier. -Mother Teresa',
    'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson',
    'In the end, it’s not the years in your life that count. It’s the life in your years. -Abraham Lincoln',
    'Never let the fear of striking out keep you from playing the game. -Babe Ruth',
    'Life is never fair, and perhaps it is a good thing for most of us that it is not. -Oscar Wilde',
    'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    'Life is what happens when you’re busy making other plans. -John Lennon',
    'In three words I can sum up everything I’ve learned about life: it goes on. -Robert Frost',
    'Sometimes the smallest things take up the most room in your heart. -Winnie the Pooh'
];
var quote_interval = setInterval(quote_cycle, 25);
var quote_box = document.getElementById("quote-scroll");
var initial_quote = false;
function quote_cycle() {
    var rect = quote_box.getBoundingClientRect();
    if (!initial_quote || rect.right < -10) {
        initial_quote = true;
        var randNum = Math.floor(Math.random() * quotes.length);
        var text = "return \"" + quotes[randNum].toLowerCase() + "\";";
        quote_box.innerHTML = text;
        quote_box.style.transform = "translateX(100vw)";
    } else quote_box.style.transform = "translateX(" + (rect.left - 1) + "px)";
}
quote_cycle();
class indexRenderer extends _highwayDefault.default.Renderer {
    onEnter() {
        document.querySelector("#main-nav").classList.remove('compact');
    }
    onLeave() {
    }
    onEnterCompleted() {
    }
    onLeaveCompleted() {
    }
}
exports.default = indexRenderer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@dogstudio/highway":"gUu7G"}],"c1qXW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
var process = require("process");
class gameGalleryRenderer extends _highwayDefault.default.Renderer {
    onEnter() {
    }
    onLeave() {
    }
    onEnterCompleted() {
        initGameGallery();
        const GODOT_CONFIG = {
            "args": [],
            "canvasResizePolicy": 2,
            "executable": "GameGallery",
            "experimentalVK": false,
            "fileSizes": {
                "GameGallery.pck": 8848,
                "GameGallery.wasm": 17493574
            },
            "focusCanvas": true,
            "gdnativeLibs": []
        };
        var engine = new Engine(GODOT_CONFIG);
        (function() {
            const INDETERMINATE_STATUS_STEP_MS = 100;
            var statusProgress = document.getElementById('status-progress');
            var statusProgressInner = document.getElementById('status-progress-inner');
            var statusIndeterminate = document.getElementById('status-indeterminate');
            var statusNotice = document.getElementById('status-notice');
            var initializing = true;
            var statusMode = 'hidden';
            var animationCallbacks = [];
            function animate(time) {
                animationCallbacks.forEach((callback)=>callback(time)
                );
                requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);
            function setStatusMode(mode) {
                if (statusMode === mode || !initializing) return;
                [
                    statusProgress,
                    statusIndeterminate,
                    statusNotice
                ].forEach((elem)=>{
                    elem.style.display = 'none';
                });
                animationCallbacks = animationCallbacks.filter(function(value) {
                    return value != animateStatusIndeterminate;
                });
                switch(mode){
                    case 'progress':
                        statusProgress.style.display = 'block';
                        break;
                    case 'indeterminate':
                        statusIndeterminate.style.display = 'block';
                        animationCallbacks.push(animateStatusIndeterminate);
                        break;
                    case 'notice':
                        statusNotice.style.display = 'block';
                        break;
                    case 'hidden':
                        break;
                    default:
                        throw new Error('Invalid status mode');
                }
                statusMode = mode;
            }
            function animateStatusIndeterminate(ms) {
                var i = Math.floor(ms / INDETERMINATE_STATUS_STEP_MS % 8);
                if (statusIndeterminate.children[i].style.borderTopColor == '') {
                    Array.prototype.slice.call(statusIndeterminate.children).forEach((child)=>{
                        child.style.borderTopColor = '';
                    });
                    statusIndeterminate.children[i].style.borderTopColor = '#dfdfdf';
                }
            }
            function setStatusNotice(text) {
                while(statusNotice.lastChild)statusNotice.removeChild(statusNotice.lastChild);
                var lines = text.split('\n');
                lines.forEach((line)=>{
                    statusNotice.appendChild(document.createTextNode(line));
                    statusNotice.appendChild(document.createElement('br'));
                });
            }
            function displayFailureNotice(err) {
                var msg = err.message || err;
                console.error(msg);
                setStatusNotice(msg);
                setStatusMode('notice');
                initializing = false;
            }
            if (!Engine.isWebGLAvailable()) displayFailureNotice('WebGL not available');
            else {
                setStatusMode('indeterminate');
                engine.startGame({
                    'onProgress': function(current, total) {
                        if (total > 0) {
                            statusProgressInner.style.width = current / total * 100 + '%';
                            setStatusMode('progress');
                            if (current === total) setTimeout(()=>{
                                setStatusMode('indeterminate');
                            }, 500);
                        } else setStatusMode('indeterminate');
                    }
                }).then(()=>{
                    setStatusMode('hidden');
                    initializing = false;
                }, displayFailureNotice);
            }
        })(); //]]>
    }
    onLeaveCompleted() {
    }
}
exports.default = gameGalleryRenderer;
function initGameGallery() {
    var Godot1 = function() {
        var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
        return function(Godot) {
            Godot = Godot || {
            };
            var Module = typeof Godot !== "undefined" ? Godot : {
            };
            var readyPromiseResolve, readyPromiseReject;
            Module["ready"] = new Promise(function(resolve, reject) {
                readyPromiseResolve = resolve;
                readyPromiseReject = reject;
            });
            var moduleOverrides = {
            };
            var key1;
            for(key1 in Module)if (Module.hasOwnProperty(key1)) moduleOverrides[key1] = Module[key1];
            var arguments_ = [];
            var thisProgram = "./this.program";
            var quit_ = function(status, toThrow) {
                throw toThrow;
            };
            var ENVIRONMENT_IS_WEB = typeof window === "object";
            var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
            var ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
            var scriptDirectory = "";
            function locateFile(path) {
                if (Module["locateFile"]) return Module["locateFile"](path, scriptDirectory);
                return scriptDirectory + path;
            }
            var read_, readAsync, readBinary, setWindowTitle;
            if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
                if (ENVIRONMENT_IS_WORKER) scriptDirectory = self.location.href;
                else if (typeof document !== "undefined" && document.currentScript) scriptDirectory = document.currentScript.src;
                if (_scriptDir) scriptDirectory = _scriptDir;
                if (scriptDirectory.indexOf("blob:") !== 0) scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
                else scriptDirectory = "";
                read_ = function(url) {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, false);
                    xhr.send(null);
                    return xhr.responseText;
                };
                if (ENVIRONMENT_IS_WORKER) readBinary = function(url) {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, false);
                    xhr.responseType = "arraybuffer";
                    xhr.send(null);
                    return new Uint8Array(xhr.response);
                };
                readAsync = function(url, onload, onerror) {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, true);
                    xhr.responseType = "arraybuffer";
                    xhr.onload = function() {
                        if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                            onload(xhr.response);
                            return;
                        }
                        onerror();
                    };
                    xhr.onerror = onerror;
                    xhr.send(null);
                };
                setWindowTitle = function(title) {
                    document.title = title;
                };
            }
            var out1 = Module["print"] || console.log.bind(console);
            var err1 = Module["printErr"] || console.warn.bind(console);
            for(key1 in moduleOverrides)if (moduleOverrides.hasOwnProperty(key1)) Module[key1] = moduleOverrides[key1];
            moduleOverrides = null;
            if (Module["arguments"]) arguments_ = Module["arguments"];
            if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
            if (Module["quit"]) quit_ = Module["quit"];
            function warnOnce(text) {
                if (!warnOnce.shown) warnOnce.shown = {
                };
                if (!warnOnce.shown[text]) {
                    warnOnce.shown[text] = 1;
                    err1(text);
                }
            }
            var tempRet0 = 0;
            var setTempRet0 = function(value) {
                tempRet0 = value;
            };
            var getTempRet0 = function() {
                return tempRet0;
            };
            var wasmBinary;
            if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
            var noExitRuntime = Module["noExitRuntime"] || false;
            if (typeof WebAssembly !== "object") abort("no native wasm support detected");
            function setValue(ptr, value, type, noSafe) {
                type = type || "i8";
                if (type.charAt(type.length - 1) === "*") type = "i32";
                switch(type){
                    case "i1":
                        HEAP8[ptr >> 0] = value;
                        break;
                    case "i8":
                        HEAP8[ptr >> 0] = value;
                        break;
                    case "i16":
                        HEAP16[ptr >> 1] = value;
                        break;
                    case "i32":
                        HEAP32[ptr >> 2] = value;
                        break;
                    case "i64":
                        tempI64 = [
                            value >>> 0,
                            (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                        ], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
                        break;
                    case "float":
                        HEAPF32[ptr >> 2] = value;
                        break;
                    case "double":
                        HEAPF64[ptr >> 3] = value;
                        break;
                    default:
                        abort("invalid type for setValue: " + type);
                }
            }
            function getValue(ptr, type, noSafe) {
                type = type || "i8";
                if (type.charAt(type.length - 1) === "*") type = "i32";
                switch(type){
                    case "i1":
                        return HEAP8[ptr >> 0];
                    case "i8":
                        return HEAP8[ptr >> 0];
                    case "i16":
                        return HEAP16[ptr >> 1];
                    case "i32":
                        return HEAP32[ptr >> 2];
                    case "i64":
                        return HEAP32[ptr >> 2];
                    case "float":
                        return HEAPF32[ptr >> 2];
                    case "double":
                        return HEAPF64[ptr >> 3];
                    default:
                        abort("invalid type for getValue: " + type);
                }
                return null;
            }
            var wasmMemory;
            var ABORT = false;
            var EXITSTATUS;
            function assert(condition, text) {
                if (!condition) abort("Assertion failed: " + text);
            }
            function getCFunc(ident) {
                var func = Module["_" + ident];
                assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
                return func;
            }
            function ccall(ident, returnType, argTypes, args, opts) {
                var toC = {
                    "string": function(str) {
                        var ret = 0;
                        if (str !== null && str !== undefined && str !== 0) {
                            var len = (str.length << 2) + 1;
                            ret = stackAlloc(len);
                            stringToUTF8(str, ret, len);
                        }
                        return ret;
                    },
                    "array": function(arr) {
                        var ret = stackAlloc(arr.length);
                        writeArrayToMemory(arr, ret);
                        return ret;
                    }
                };
                function convertReturnValue(ret) {
                    if (returnType === "string") return UTF8ToString(ret);
                    if (returnType === "boolean") return Boolean(ret);
                    return ret;
                }
                var func = getCFunc(ident);
                var cArgs = [];
                var stack = 0;
                if (args) for(var i = 0; i < args.length; i++){
                    var converter = toC[argTypes[i]];
                    if (converter) {
                        if (stack === 0) stack = stackSave();
                        cArgs[i] = converter(args[i]);
                    } else cArgs[i] = args[i];
                }
                var ret1 = func.apply(null, cArgs);
                ret1 = convertReturnValue(ret1);
                if (stack !== 0) stackRestore(stack);
                return ret1;
            }
            function cwrap(ident, returnType, argTypes, opts) {
                argTypes = argTypes || [];
                var numericArgs = argTypes.every(function(type) {
                    return type === "number";
                });
                var numericRet = returnType !== "string";
                if (numericRet && numericArgs && !opts) return getCFunc(ident);
                return function() {
                    return ccall(ident, returnType, argTypes, arguments, opts);
                };
            }
            var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
            function UTF8ArrayToString(heap, idx, maxBytesToRead) {
                var endIdx = idx + maxBytesToRead;
                var endPtr = idx;
                while(heap[endPtr] && !(endPtr >= endIdx))++endPtr;
                if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) return UTF8Decoder.decode(heap.subarray(idx, endPtr));
                else {
                    var str = "";
                    while(idx < endPtr){
                        var u0 = heap[idx++];
                        if (!(u0 & 128)) {
                            str += String.fromCharCode(u0);
                            continue;
                        }
                        var u1 = heap[idx++] & 63;
                        if ((u0 & 224) == 192) {
                            str += String.fromCharCode((u0 & 31) << 6 | u1);
                            continue;
                        }
                        var u2 = heap[idx++] & 63;
                        if ((u0 & 240) == 224) u0 = (u0 & 15) << 12 | u1 << 6 | u2;
                        else u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
                        if (u0 < 65536) str += String.fromCharCode(u0);
                        else {
                            var ch = u0 - 65536;
                            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
                        }
                    }
                }
                return str;
            }
            function UTF8ToString(ptr, maxBytesToRead) {
                return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
            }
            function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
                if (!(maxBytesToWrite > 0)) return 0;
                var startIdx = outIdx;
                var endIdx = outIdx + maxBytesToWrite - 1;
                for(var i = 0; i < str.length; ++i){
                    var u = str.charCodeAt(i);
                    if (u >= 55296 && u <= 57343) {
                        var u1 = str.charCodeAt(++i);
                        u = 65536 + ((u & 1023) << 10) | u1 & 1023;
                    }
                    if (u <= 127) {
                        if (outIdx >= endIdx) break;
                        heap[outIdx++] = u;
                    } else if (u <= 2047) {
                        if (outIdx + 1 >= endIdx) break;
                        heap[outIdx++] = 192 | u >> 6;
                        heap[outIdx++] = 128 | u & 63;
                    } else if (u <= 65535) {
                        if (outIdx + 2 >= endIdx) break;
                        heap[outIdx++] = 224 | u >> 12;
                        heap[outIdx++] = 128 | u >> 6 & 63;
                        heap[outIdx++] = 128 | u & 63;
                    } else {
                        if (outIdx + 3 >= endIdx) break;
                        heap[outIdx++] = 240 | u >> 18;
                        heap[outIdx++] = 128 | u >> 12 & 63;
                        heap[outIdx++] = 128 | u >> 6 & 63;
                        heap[outIdx++] = 128 | u & 63;
                    }
                }
                heap[outIdx] = 0;
                return outIdx - startIdx;
            }
            function stringToUTF8(str, outPtr, maxBytesToWrite) {
                return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
            }
            function lengthBytesUTF8(str) {
                var len = 0;
                for(var i = 0; i < str.length; ++i){
                    var u = str.charCodeAt(i);
                    if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
                    if (u <= 127) ++len;
                    else if (u <= 2047) len += 2;
                    else if (u <= 65535) len += 3;
                    else len += 4;
                }
                return len;
            }
            function allocateUTF8(str) {
                var size = lengthBytesUTF8(str) + 1;
                var ret = _malloc(size);
                if (ret) stringToUTF8Array(str, HEAP8, ret, size);
                return ret;
            }
            function allocateUTF8OnStack(str) {
                var size = lengthBytesUTF8(str) + 1;
                var ret = stackAlloc(size);
                stringToUTF8Array(str, HEAP8, ret, size);
                return ret;
            }
            function writeArrayToMemory(array, buffer) {
                HEAP8.set(array, buffer);
            }
            function writeAsciiToMemory(str, buffer, dontAddNull) {
                for(var i = 0; i < str.length; ++i)HEAP8[(buffer++) >> 0] = str.charCodeAt(i);
                if (!dontAddNull) HEAP8[buffer >> 0] = 0;
            }
            function alignUp(x, multiple) {
                if (x % multiple > 0) x += multiple - x % multiple;
                return x;
            }
            var buffer1, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
            function updateGlobalBufferAndViews(buf) {
                buffer1 = buf;
                Module["HEAP8"] = HEAP8 = new Int8Array(buf);
                Module["HEAP16"] = HEAP16 = new Int16Array(buf);
                Module["HEAP32"] = HEAP32 = new Int32Array(buf);
                Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
                Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
                Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
                Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
                Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
            }
            var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 33554432;
            var wasmTable;
            var __ATPRERUN__ = [];
            var __ATINIT__ = [];
            var __ATMAIN__ = [];
            var __ATEXIT__ = [];
            var __ATPOSTRUN__ = [];
            var runtimeInitialized = false;
            var runtimeExited = false;
            var runtimeKeepaliveCounter = 0;
            function keepRuntimeAlive() {
                return noExitRuntime || runtimeKeepaliveCounter > 0;
            }
            function preRun() {
                if (Module["preRun"]) {
                    if (typeof Module["preRun"] == "function") Module["preRun"] = [
                        Module["preRun"]
                    ];
                    while(Module["preRun"].length)addOnPreRun(Module["preRun"].shift());
                }
                callRuntimeCallbacks(__ATPRERUN__);
            }
            function initRuntime() {
                runtimeInitialized = true;
                if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
                FS.ignorePermissions = false;
                TTY.init();
                SOCKFS.root = FS.mount(SOCKFS, {
                }, null);
                callRuntimeCallbacks(__ATINIT__);
            }
            function preMain() {
                callRuntimeCallbacks(__ATMAIN__);
            }
            function exitRuntime() {
                callRuntimeCallbacks(__ATEXIT__);
                FS.quit();
                TTY.shutdown();
                runtimeExited = true;
            }
            function postRun() {
                if (Module["postRun"]) {
                    if (typeof Module["postRun"] == "function") Module["postRun"] = [
                        Module["postRun"]
                    ];
                    while(Module["postRun"].length)addOnPostRun(Module["postRun"].shift());
                }
                callRuntimeCallbacks(__ATPOSTRUN__);
            }
            function addOnPreRun(cb) {
                __ATPRERUN__.unshift(cb);
            }
            function addOnInit(cb) {
                __ATINIT__.unshift(cb);
            }
            function addOnPostRun(cb) {
                __ATPOSTRUN__.unshift(cb);
            }
            var runDependencies = 0;
            var runDependencyWatcher = null;
            var dependenciesFulfilled = null;
            function getUniqueRunDependency(id) {
                return id;
            }
            function addRunDependency(id) {
                runDependencies++;
                if (Module["monitorRunDependencies"]) Module["monitorRunDependencies"](runDependencies);
            }
            function removeRunDependency(id) {
                runDependencies--;
                if (Module["monitorRunDependencies"]) Module["monitorRunDependencies"](runDependencies);
                if (runDependencies == 0) {
                    if (runDependencyWatcher !== null) {
                        clearInterval(runDependencyWatcher);
                        runDependencyWatcher = null;
                    }
                    if (dependenciesFulfilled) {
                        var callback = dependenciesFulfilled;
                        dependenciesFulfilled = null;
                        callback();
                    }
                }
            }
            Module["preloadedImages"] = {
            };
            Module["preloadedAudios"] = {
            };
            function abort(what) {
                if (Module["onAbort"]) Module["onAbort"](what);
                what += "";
                err1(what);
                ABORT = true;
                EXITSTATUS = 1;
                what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
                var e = new WebAssembly.RuntimeError(what);
                readyPromiseReject(e);
                throw e;
            }
            var dataURIPrefix = "data:application/octet-stream;base64,";
            function isDataURI(filename) {
                return filename.startsWith(dataURIPrefix);
            }
            var wasmBinaryFile;
            wasmBinaryFile = "godot.javascript.opt.debug.wasm";
            if (!isDataURI(wasmBinaryFile)) wasmBinaryFile = locateFile(wasmBinaryFile);
            function getBinary(file) {
                try {
                    if (file == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
                    if (readBinary) return readBinary(file);
                    else throw "both async and sync fetching of the wasm failed";
                } catch (err) {
                    abort(err);
                }
            }
            function getBinaryPromise() {
                if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
                    if (typeof fetch === "function") return fetch(wasmBinaryFile, {
                        credentials: "same-origin"
                    }).then(function(response) {
                        if (!response["ok"]) throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                        return response["arrayBuffer"]();
                    }).catch(function() {
                        return getBinary(wasmBinaryFile);
                    });
                }
                return Promise.resolve().then(function() {
                    return getBinary(wasmBinaryFile);
                });
            }
            function createWasm() {
                var info = {
                    "a": asmLibraryArg
                };
                function receiveInstance(instance, module) {
                    var exports = instance.exports;
                    Module["asm"] = exports;
                    wasmMemory = Module["asm"]["dk"];
                    updateGlobalBufferAndViews(wasmMemory.buffer);
                    wasmTable = Module["asm"]["xk"];
                    addOnInit(Module["asm"]["ek"]);
                    removeRunDependency("wasm-instantiate");
                }
                addRunDependency("wasm-instantiate");
                function receiveInstantiationResult(result) {
                    receiveInstance(result["instance"]);
                }
                function instantiateArrayBuffer(receiver) {
                    return getBinaryPromise().then(function(binary) {
                        var result = WebAssembly.instantiate(binary, info);
                        return result;
                    }).then(receiver, function(reason) {
                        err1("failed to asynchronously prepare wasm: " + reason);
                        abort(reason);
                    });
                }
                function instantiateAsync() {
                    if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") return fetch(wasmBinaryFile, {
                        credentials: "same-origin"
                    }).then(function(response) {
                        var result = WebAssembly.instantiateStreaming(response, info);
                        return result.then(receiveInstantiationResult, function(reason) {
                            err1("wasm streaming compile failed: " + reason);
                            err1("falling back to ArrayBuffer instantiation");
                            return instantiateArrayBuffer(receiveInstantiationResult);
                        });
                    });
                    else return instantiateArrayBuffer(receiveInstantiationResult);
                }
                if (Module["instantiateWasm"]) try {
                    var exports1 = Module["instantiateWasm"](info, receiveInstance);
                    return exports1;
                } catch (e) {
                    err1("Module.instantiateWasm callback failed with error: " + e);
                    return false;
                }
                instantiateAsync().catch(readyPromiseReject);
                return {
                };
            }
            var tempDouble;
            var tempI64;
            function callRuntimeCallbacks(callbacks) {
                while(callbacks.length > 0){
                    var callback = callbacks.shift();
                    if (typeof callback == "function") {
                        callback(Module);
                        continue;
                    }
                    var func = callback.func;
                    if (typeof func === "number") {
                        if (callback.arg === undefined) wasmTable.get(func)();
                        else wasmTable.get(func)(callback.arg);
                    } else func(callback.arg === undefined ? null : callback.arg);
                }
            }
            function ___assert_fail(condition, filename, line, func) {
                abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [
                    filename ? UTF8ToString(filename) : "unknown filename",
                    line,
                    func ? UTF8ToString(func) : "unknown function"
                ]);
            }
            function _atexit(func, arg) {
                __ATEXIT__.unshift({
                    func: func,
                    arg: arg
                });
            }
            function ___cxa_atexit(a0, a1) {
                return _atexit(a0, a1);
            }
            var PATH = {
                splitPath: function(filename) {
                    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                    return splitPathRe.exec(filename).slice(1);
                },
                normalizeArray: function(parts, allowAboveRoot) {
                    var up = 0;
                    for(var i = parts.length - 1; i >= 0; i--){
                        var last = parts[i];
                        if (last === ".") parts.splice(i, 1);
                        else if (last === "..") {
                            parts.splice(i, 1);
                            up++;
                        } else if (up) {
                            parts.splice(i, 1);
                            up--;
                        }
                    }
                    if (allowAboveRoot) for(; up; up--)parts.unshift("..");
                    return parts;
                },
                normalize: function(path) {
                    var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
                    path = PATH.normalizeArray(path.split("/").filter(function(p) {
                        return !!p;
                    }), !isAbsolute).join("/");
                    if (!path && !isAbsolute) path = ".";
                    if (path && trailingSlash) path += "/";
                    return (isAbsolute ? "/" : "") + path;
                },
                dirname: function(path) {
                    var result = PATH.splitPath(path), root = result[0], dir = result[1];
                    if (!root && !dir) return ".";
                    if (dir) dir = dir.substr(0, dir.length - 1);
                    return root + dir;
                },
                basename: function(path) {
                    if (path === "/") return "/";
                    path = PATH.normalize(path);
                    path = path.replace(/\/$/, "");
                    var lastSlash = path.lastIndexOf("/");
                    if (lastSlash === -1) return path;
                    return path.substr(lastSlash + 1);
                },
                extname: function(path) {
                    return PATH.splitPath(path)[3];
                },
                join: function() {
                    var paths = Array.prototype.slice.call(arguments, 0);
                    return PATH.normalize(paths.join("/"));
                },
                join2: function(l, r) {
                    return PATH.normalize(l + "/" + r);
                }
            };
            function getRandomDevice() {
                if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
                    var randomBuffer = new Uint8Array(1);
                    return function() {
                        crypto.getRandomValues(randomBuffer);
                        return randomBuffer[0];
                    };
                } else return function() {
                    abort("randomDevice");
                };
            }
            var PATH_FS = {
                resolve: function() {
                    var resolvedPath = "", resolvedAbsolute = false;
                    for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
                        var path = i >= 0 ? arguments[i] : FS.cwd();
                        if (typeof path !== "string") throw new TypeError("Arguments to path.resolve must be strings");
                        else if (!path) return "";
                        resolvedPath = path + "/" + resolvedPath;
                        resolvedAbsolute = path.charAt(0) === "/";
                    }
                    resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
                        return !!p;
                    }), !resolvedAbsolute).join("/");
                    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
                },
                relative: function(from, to) {
                    from = PATH_FS.resolve(from).substr(1);
                    to = PATH_FS.resolve(to).substr(1);
                    function trim(arr) {
                        var start = 0;
                        for(; start < arr.length; start++){
                            if (arr[start] !== "") break;
                        }
                        var end = arr.length - 1;
                        for(; end >= 0; end--){
                            if (arr[end] !== "") break;
                        }
                        if (start > end) return [];
                        return arr.slice(start, end - start + 1);
                    }
                    var fromParts = trim(from.split("/"));
                    var toParts = trim(to.split("/"));
                    var length = Math.min(fromParts.length, toParts.length);
                    var samePartsLength = length;
                    for(var i = 0; i < length; i++)if (fromParts[i] !== toParts[i]) {
                        samePartsLength = i;
                        break;
                    }
                    var outputParts = [];
                    for(var i = samePartsLength; i < fromParts.length; i++)outputParts.push("..");
                    outputParts = outputParts.concat(toParts.slice(samePartsLength));
                    return outputParts.join("/");
                }
            };
            var TTY = {
                ttys: [],
                init: function() {
                },
                shutdown: function() {
                },
                register: function(dev, ops) {
                    TTY.ttys[dev] = {
                        input: [],
                        output: [],
                        ops: ops
                    };
                    FS.registerDevice(dev, TTY.stream_ops);
                },
                stream_ops: {
                    open: function(stream) {
                        var tty = TTY.ttys[stream.node.rdev];
                        if (!tty) throw new FS.ErrnoError(43);
                        stream.tty = tty;
                        stream.seekable = false;
                    },
                    close: function(stream) {
                        stream.tty.ops.flush(stream.tty);
                    },
                    flush: function(stream) {
                        stream.tty.ops.flush(stream.tty);
                    },
                    read: function(stream, buffer, offset, length, pos) {
                        if (!stream.tty || !stream.tty.ops.get_char) throw new FS.ErrnoError(60);
                        var bytesRead = 0;
                        for(var i = 0; i < length; i++){
                            var result;
                            try {
                                result = stream.tty.ops.get_char(stream.tty);
                            } catch (e) {
                                throw new FS.ErrnoError(29);
                            }
                            if (result === undefined && bytesRead === 0) throw new FS.ErrnoError(6);
                            if (result === null || result === undefined) break;
                            bytesRead++;
                            buffer[offset + i] = result;
                        }
                        if (bytesRead) stream.node.timestamp = Date.now();
                        return bytesRead;
                    },
                    write: function(stream, buffer, offset, length, pos) {
                        if (!stream.tty || !stream.tty.ops.put_char) throw new FS.ErrnoError(60);
                        try {
                            for(var i = 0; i < length; i++)stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
                        } catch (e) {
                            throw new FS.ErrnoError(29);
                        }
                        if (length) stream.node.timestamp = Date.now();
                        return i;
                    }
                },
                default_tty_ops: {
                    get_char: function(tty) {
                        if (!tty.input.length) {
                            var result = null;
                            if (typeof window != "undefined" && typeof window.prompt == "function") {
                                result = window.prompt("Input: ");
                                if (result !== null) result += "\n";
                            } else if (typeof readline == "function") {
                                result = readline();
                                if (result !== null) result += "\n";
                            }
                            if (!result) return null;
                            tty.input = intArrayFromString(result, true);
                        }
                        return tty.input.shift();
                    },
                    put_char: function(tty, val) {
                        if (val === null || val === 10) {
                            out1(UTF8ArrayToString(tty.output, 0));
                            tty.output = [];
                        } else if (val != 0) tty.output.push(val);
                    },
                    flush: function(tty) {
                        if (tty.output && tty.output.length > 0) {
                            out1(UTF8ArrayToString(tty.output, 0));
                            tty.output = [];
                        }
                    }
                },
                default_tty1_ops: {
                    put_char: function(tty, val) {
                        if (val === null || val === 10) {
                            err1(UTF8ArrayToString(tty.output, 0));
                            tty.output = [];
                        } else if (val != 0) tty.output.push(val);
                    },
                    flush: function(tty) {
                        if (tty.output && tty.output.length > 0) {
                            err1(UTF8ArrayToString(tty.output, 0));
                            tty.output = [];
                        }
                    }
                }
            };
            function zeroMemory(address, size) {
                HEAPU8.fill(0, address, address + size);
            }
            function mmapAlloc(size) {
                abort();
            }
            var MEMFS = {
                ops_table: null,
                mount: function(mount) {
                    return MEMFS.createNode(null, "/", 16895, 0);
                },
                createNode: function(parent, name, mode, dev) {
                    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) throw new FS.ErrnoError(63);
                    if (!MEMFS.ops_table) MEMFS.ops_table = {
                        dir: {
                            node: {
                                getattr: MEMFS.node_ops.getattr,
                                setattr: MEMFS.node_ops.setattr,
                                lookup: MEMFS.node_ops.lookup,
                                mknod: MEMFS.node_ops.mknod,
                                rename: MEMFS.node_ops.rename,
                                unlink: MEMFS.node_ops.unlink,
                                rmdir: MEMFS.node_ops.rmdir,
                                readdir: MEMFS.node_ops.readdir,
                                symlink: MEMFS.node_ops.symlink
                            },
                            stream: {
                                llseek: MEMFS.stream_ops.llseek
                            }
                        },
                        file: {
                            node: {
                                getattr: MEMFS.node_ops.getattr,
                                setattr: MEMFS.node_ops.setattr
                            },
                            stream: {
                                llseek: MEMFS.stream_ops.llseek,
                                read: MEMFS.stream_ops.read,
                                write: MEMFS.stream_ops.write,
                                allocate: MEMFS.stream_ops.allocate,
                                mmap: MEMFS.stream_ops.mmap,
                                msync: MEMFS.stream_ops.msync
                            }
                        },
                        link: {
                            node: {
                                getattr: MEMFS.node_ops.getattr,
                                setattr: MEMFS.node_ops.setattr,
                                readlink: MEMFS.node_ops.readlink
                            },
                            stream: {
                            }
                        },
                        chrdev: {
                            node: {
                                getattr: MEMFS.node_ops.getattr,
                                setattr: MEMFS.node_ops.setattr
                            },
                            stream: FS.chrdev_stream_ops
                        }
                    };
                    var node = FS.createNode(parent, name, mode, dev);
                    if (FS.isDir(node.mode)) {
                        node.node_ops = MEMFS.ops_table.dir.node;
                        node.stream_ops = MEMFS.ops_table.dir.stream;
                        node.contents = {
                        };
                    } else if (FS.isFile(node.mode)) {
                        node.node_ops = MEMFS.ops_table.file.node;
                        node.stream_ops = MEMFS.ops_table.file.stream;
                        node.usedBytes = 0;
                        node.contents = null;
                    } else if (FS.isLink(node.mode)) {
                        node.node_ops = MEMFS.ops_table.link.node;
                        node.stream_ops = MEMFS.ops_table.link.stream;
                    } else if (FS.isChrdev(node.mode)) {
                        node.node_ops = MEMFS.ops_table.chrdev.node;
                        node.stream_ops = MEMFS.ops_table.chrdev.stream;
                    }
                    node.timestamp = Date.now();
                    if (parent) {
                        parent.contents[name] = node;
                        parent.timestamp = node.timestamp;
                    }
                    return node;
                },
                getFileDataAsTypedArray: function(node) {
                    if (!node.contents) return new Uint8Array(0);
                    if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
                    return new Uint8Array(node.contents);
                },
                expandFileStorage: function(node, newCapacity) {
                    var prevCapacity = node.contents ? node.contents.length : 0;
                    if (prevCapacity >= newCapacity) return;
                    var CAPACITY_DOUBLING_MAX = 1048576;
                    newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
                    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
                    var oldContents = node.contents;
                    node.contents = new Uint8Array(newCapacity);
                    if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
                },
                resizeFileStorage: function(node, newSize) {
                    if (node.usedBytes == newSize) return;
                    if (newSize == 0) {
                        node.contents = null;
                        node.usedBytes = 0;
                    } else {
                        var oldContents = node.contents;
                        node.contents = new Uint8Array(newSize);
                        if (oldContents) node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
                        node.usedBytes = newSize;
                    }
                },
                node_ops: {
                    getattr: function(node) {
                        var attr = {
                        };
                        attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
                        attr.ino = node.id;
                        attr.mode = node.mode;
                        attr.nlink = 1;
                        attr.uid = 0;
                        attr.gid = 0;
                        attr.rdev = node.rdev;
                        if (FS.isDir(node.mode)) attr.size = 4096;
                        else if (FS.isFile(node.mode)) attr.size = node.usedBytes;
                        else if (FS.isLink(node.mode)) attr.size = node.link.length;
                        else attr.size = 0;
                        attr.atime = new Date(node.timestamp);
                        attr.mtime = new Date(node.timestamp);
                        attr.ctime = new Date(node.timestamp);
                        attr.blksize = 4096;
                        attr.blocks = Math.ceil(attr.size / attr.blksize);
                        return attr;
                    },
                    setattr: function(node, attr) {
                        if (attr.mode !== undefined) node.mode = attr.mode;
                        if (attr.timestamp !== undefined) node.timestamp = attr.timestamp;
                        if (attr.size !== undefined) MEMFS.resizeFileStorage(node, attr.size);
                    },
                    lookup: function(parent, name) {
                        throw FS.genericErrors[44];
                    },
                    mknod: function(parent, name, mode, dev) {
                        return MEMFS.createNode(parent, name, mode, dev);
                    },
                    rename: function(old_node, new_dir, new_name) {
                        if (FS.isDir(old_node.mode)) {
                            var new_node;
                            try {
                                new_node = FS.lookupNode(new_dir, new_name);
                            } catch (e) {
                            }
                            if (new_node) {
                                for(var i in new_node.contents)throw new FS.ErrnoError(55);
                            }
                        }
                        delete old_node.parent.contents[old_node.name];
                        old_node.parent.timestamp = Date.now();
                        old_node.name = new_name;
                        new_dir.contents[new_name] = old_node;
                        new_dir.timestamp = old_node.parent.timestamp;
                        old_node.parent = new_dir;
                    },
                    unlink: function(parent, name) {
                        delete parent.contents[name];
                        parent.timestamp = Date.now();
                    },
                    rmdir: function(parent, name) {
                        var node = FS.lookupNode(parent, name);
                        for(var i in node.contents)throw new FS.ErrnoError(55);
                        delete parent.contents[name];
                        parent.timestamp = Date.now();
                    },
                    readdir: function(node) {
                        var entries = [
                            ".",
                            ".."
                        ];
                        for(var key in node.contents){
                            if (!node.contents.hasOwnProperty(key)) continue;
                            entries.push(key);
                        }
                        return entries;
                    },
                    symlink: function(parent, newname, oldpath) {
                        var node = MEMFS.createNode(parent, newname, 41471, 0);
                        node.link = oldpath;
                        return node;
                    },
                    readlink: function(node) {
                        if (!FS.isLink(node.mode)) throw new FS.ErrnoError(28);
                        return node.link;
                    }
                },
                stream_ops: {
                    read: function(stream, buffer, offset, length, position) {
                        var contents = stream.node.contents;
                        if (position >= stream.node.usedBytes) return 0;
                        var size = Math.min(stream.node.usedBytes - position, length);
                        if (size > 8 && contents.subarray) buffer.set(contents.subarray(position, position + size), offset);
                        else for(var i = 0; i < size; i++)buffer[offset + i] = contents[position + i];
                        return size;
                    },
                    write: function(stream, buffer, offset, length, position, canOwn) {
                        if (buffer.buffer === HEAP8.buffer) canOwn = false;
                        if (!length) return 0;
                        var node = stream.node;
                        node.timestamp = Date.now();
                        if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                            if (canOwn) {
                                node.contents = buffer.subarray(offset, offset + length);
                                node.usedBytes = length;
                                return length;
                            } else if (node.usedBytes === 0 && position === 0) {
                                node.contents = buffer.slice(offset, offset + length);
                                node.usedBytes = length;
                                return length;
                            } else if (position + length <= node.usedBytes) {
                                node.contents.set(buffer.subarray(offset, offset + length), position);
                                return length;
                            }
                        }
                        MEMFS.expandFileStorage(node, position + length);
                        if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position);
                        else for(var i = 0; i < length; i++)node.contents[position + i] = buffer[offset + i];
                        node.usedBytes = Math.max(node.usedBytes, position + length);
                        return length;
                    },
                    llseek: function(stream, offset, whence) {
                        var position = offset;
                        if (whence === 1) position += stream.position;
                        else if (whence === 2) {
                            if (FS.isFile(stream.node.mode)) position += stream.node.usedBytes;
                        }
                        if (position < 0) throw new FS.ErrnoError(28);
                        return position;
                    },
                    allocate: function(stream, offset, length) {
                        MEMFS.expandFileStorage(stream.node, offset + length);
                        stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
                    },
                    mmap: function(stream, address, length, position, prot, flags) {
                        if (address !== 0) throw new FS.ErrnoError(28);
                        if (!FS.isFile(stream.node.mode)) throw new FS.ErrnoError(43);
                        var ptr;
                        var allocated;
                        var contents = stream.node.contents;
                        if (!(flags & 2) && contents.buffer === buffer1) {
                            allocated = false;
                            ptr = contents.byteOffset;
                        } else {
                            if (position > 0 || position + length < contents.length) {
                                if (contents.subarray) contents = contents.subarray(position, position + length);
                                else contents = Array.prototype.slice.call(contents, position, position + length);
                            }
                            allocated = true;
                            ptr = mmapAlloc(length);
                            if (!ptr) throw new FS.ErrnoError(48);
                            HEAP8.set(contents, ptr);
                        }
                        return {
                            ptr: ptr,
                            allocated: allocated
                        };
                    },
                    msync: function(stream, buffer, offset, length, mmapFlags) {
                        if (!FS.isFile(stream.node.mode)) throw new FS.ErrnoError(43);
                        if (mmapFlags & 2) return 0;
                        var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
                        return 0;
                    }
                }
            };
            function asyncLoad(url, onload, onerror, noRunDep) {
                var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
                readAsync(url, function(arrayBuffer) {
                    assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
                    onload(new Uint8Array(arrayBuffer));
                    if (dep) removeRunDependency(dep);
                }, function(event) {
                    if (onerror) onerror();
                    else throw 'Loading data file "' + url + '" failed.';
                });
                if (dep) addRunDependency(dep);
            }
            var IDBFS = {
                dbs: {
                },
                indexedDB: function() {
                    if (typeof indexedDB !== "undefined") return indexedDB;
                    var ret = null;
                    if (typeof window === "object") ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                    assert(ret, "IDBFS used, but indexedDB not supported");
                    return ret;
                },
                DB_VERSION: 21,
                DB_STORE_NAME: "FILE_DATA",
                mount: function(mount) {
                    return MEMFS.mount.apply(null, arguments);
                },
                syncfs: function(mount, populate, callback) {
                    IDBFS.getLocalSet(mount, function(err2, local) {
                        if (err2) return callback(err2);
                        IDBFS.getRemoteSet(mount, function(err, remote) {
                            if (err) return callback(err);
                            var src = populate ? remote : local;
                            var dst = populate ? local : remote;
                            IDBFS.reconcile(src, dst, callback);
                        });
                    });
                },
                getDB: function(name, callback) {
                    var db1 = IDBFS.dbs[name];
                    if (db1) return callback(null, db1);
                    var req;
                    try {
                        req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
                    } catch (e1) {
                        return callback(e1);
                    }
                    if (!req) return callback("Unable to connect to IndexedDB");
                    req.onupgradeneeded = function(e) {
                        var db = e.target.result;
                        var transaction = e.target.transaction;
                        var fileStore;
                        if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
                        else fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
                        if (!fileStore.indexNames.contains("timestamp")) fileStore.createIndex("timestamp", "timestamp", {
                            unique: false
                        });
                    };
                    req.onsuccess = function() {
                        db1 = req.result;
                        IDBFS.dbs[name] = db1;
                        callback(null, db1);
                    };
                    req.onerror = function(e) {
                        callback(this.error);
                        e.preventDefault();
                    };
                },
                getLocalSet: function(mount, callback) {
                    var entries = {
                    };
                    function isRealDir(p) {
                        return p !== "." && p !== "..";
                    }
                    function toAbsolute(root) {
                        return function(p) {
                            return PATH.join2(root, p);
                        };
                    }
                    var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
                    while(check.length){
                        var path = check.pop();
                        var stat;
                        try {
                            stat = FS.stat(path);
                        } catch (e) {
                            return callback(e);
                        }
                        if (FS.isDir(stat.mode)) check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
                        entries[path] = {
                            "timestamp": stat.mtime
                        };
                    }
                    return callback(null, {
                        type: "local",
                        entries: entries
                    });
                },
                getRemoteSet: function(mount, callback) {
                    var entries = {
                    };
                    IDBFS.getDB(mount.mountpoint, function(err, db) {
                        if (err) return callback(err);
                        try {
                            var transaction = db.transaction([
                                IDBFS.DB_STORE_NAME
                            ], "readonly");
                            transaction.onerror = function(e) {
                                callback(this.error);
                                e.preventDefault();
                            };
                            var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
                            var index = store.index("timestamp");
                            index.openKeyCursor().onsuccess = function(event) {
                                var cursor = event.target.result;
                                if (!cursor) return callback(null, {
                                    type: "remote",
                                    db: db,
                                    entries: entries
                                });
                                entries[cursor.primaryKey] = {
                                    "timestamp": cursor.key
                                };
                                cursor.continue();
                            };
                        } catch (e) {
                            return callback(e);
                        }
                    });
                },
                loadLocalEntry: function(path, callback) {
                    var stat, node;
                    try {
                        var lookup = FS.lookupPath(path);
                        node = lookup.node;
                        stat = FS.stat(path);
                    } catch (e) {
                        return callback(e);
                    }
                    if (FS.isDir(stat.mode)) return callback(null, {
                        "timestamp": stat.mtime,
                        "mode": stat.mode
                    });
                    else if (FS.isFile(stat.mode)) {
                        node.contents = MEMFS.getFileDataAsTypedArray(node);
                        return callback(null, {
                            "timestamp": stat.mtime,
                            "mode": stat.mode,
                            "contents": node.contents
                        });
                    } else return callback(new Error("node type not supported"));
                },
                storeLocalEntry: function(path, entry, callback) {
                    try {
                        if (FS.isDir(entry["mode"])) FS.mkdirTree(path, entry["mode"]);
                        else if (FS.isFile(entry["mode"])) FS.writeFile(path, entry["contents"], {
                            canOwn: true
                        });
                        else return callback(new Error("node type not supported"));
                        FS.chmod(path, entry["mode"]);
                        FS.utime(path, entry["timestamp"], entry["timestamp"]);
                    } catch (e) {
                        return callback(e);
                    }
                    callback(null);
                },
                removeLocalEntry: function(path, callback) {
                    try {
                        var lookup = FS.lookupPath(path);
                        var stat = FS.stat(path);
                        if (FS.isDir(stat.mode)) FS.rmdir(path);
                        else if (FS.isFile(stat.mode)) FS.unlink(path);
                    } catch (e) {
                        return callback(e);
                    }
                    callback(null);
                },
                loadRemoteEntry: function(store, path, callback) {
                    var req = store.get(path);
                    req.onsuccess = function(event) {
                        callback(null, event.target.result);
                    };
                    req.onerror = function(e) {
                        callback(this.error);
                        e.preventDefault();
                    };
                },
                storeRemoteEntry: function(store, path, entry, callback) {
                    try {
                        var req = store.put(entry, path);
                    } catch (e2) {
                        callback(e2);
                        return;
                    }
                    req.onsuccess = function() {
                        callback(null);
                    };
                    req.onerror = function(e) {
                        callback(this.error);
                        e.preventDefault();
                    };
                },
                removeRemoteEntry: function(store, path, callback) {
                    var req = store.delete(path);
                    req.onsuccess = function() {
                        callback(null);
                    };
                    req.onerror = function(e) {
                        callback(this.error);
                        e.preventDefault();
                    };
                },
                reconcile: function(src, dst, callback) {
                    var total = 0;
                    var create = [];
                    Object.keys(src.entries).forEach(function(key) {
                        var e = src.entries[key];
                        var e2 = dst.entries[key];
                        if (!e2 || e["timestamp"].getTime() != e2["timestamp"].getTime()) {
                            create.push(key);
                            total++;
                        }
                    });
                    var remove = [];
                    Object.keys(dst.entries).forEach(function(key) {
                        if (!src.entries[key]) {
                            remove.push(key);
                            total++;
                        }
                    });
                    if (!total) return callback(null);
                    var errored = false;
                    var db = src.type === "remote" ? src.db : dst.db;
                    var transaction = db.transaction([
                        IDBFS.DB_STORE_NAME
                    ], "readwrite");
                    var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
                    function done(err) {
                        if (err && !errored) {
                            errored = true;
                            return callback(err);
                        }
                    }
                    transaction.onerror = function(e) {
                        done(this.error);
                        e.preventDefault();
                    };
                    transaction.oncomplete = function(e) {
                        if (!errored) callback(null);
                    };
                    create.sort().forEach(function(path) {
                        if (dst.type === "local") IDBFS.loadRemoteEntry(store, path, function(err, entry) {
                            if (err) return done(err);
                            IDBFS.storeLocalEntry(path, entry, done);
                        });
                        else IDBFS.loadLocalEntry(path, function(err, entry) {
                            if (err) return done(err);
                            IDBFS.storeRemoteEntry(store, path, entry, done);
                        });
                    });
                    remove.sort().reverse().forEach(function(path) {
                        if (dst.type === "local") IDBFS.removeLocalEntry(path, done);
                        else IDBFS.removeRemoteEntry(store, path, done);
                    });
                }
            };
            var FS = {
                root: null,
                mounts: [],
                devices: {
                },
                streams: [],
                nextInode: 1,
                nameTable: null,
                currentPath: "/",
                initialized: false,
                ignorePermissions: true,
                trackingDelegate: {
                },
                tracking: {
                    openFlags: {
                        READ: 1,
                        WRITE: 2
                    }
                },
                ErrnoError: null,
                genericErrors: {
                },
                filesystems: null,
                syncFSRequests: 0,
                lookupPath: function(path, opts) {
                    path = PATH_FS.resolve(FS.cwd(), path);
                    opts = opts || {
                    };
                    if (!path) return {
                        path: "",
                        node: null
                    };
                    var defaults = {
                        follow_mount: true,
                        recurse_count: 0
                    };
                    for(var key in defaults)if (opts[key] === undefined) opts[key] = defaults[key];
                    if (opts.recurse_count > 8) throw new FS.ErrnoError(32);
                    var parts = PATH.normalizeArray(path.split("/").filter(function(p) {
                        return !!p;
                    }), false);
                    var current = FS.root;
                    var current_path = "/";
                    for(var i = 0; i < parts.length; i++){
                        var islast = i === parts.length - 1;
                        if (islast && opts.parent) break;
                        current = FS.lookupNode(current, parts[i]);
                        current_path = PATH.join2(current_path, parts[i]);
                        if (FS.isMountpoint(current)) {
                            if (!islast || islast && opts.follow_mount) current = current.mounted.root;
                        }
                        if (!islast || opts.follow) {
                            var count = 0;
                            while(FS.isLink(current.mode)){
                                var link = FS.readlink(current_path);
                                current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                                var lookup = FS.lookupPath(current_path, {
                                    recurse_count: opts.recurse_count
                                });
                                current = lookup.node;
                                if (count++ > 40) throw new FS.ErrnoError(32);
                            }
                        }
                    }
                    return {
                        path: current_path,
                        node: current
                    };
                },
                getPath: function(node) {
                    var path;
                    while(true){
                        if (FS.isRoot(node)) {
                            var mount = node.mount.mountpoint;
                            if (!path) return mount;
                            return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
                        }
                        path = path ? node.name + "/" + path : node.name;
                        node = node.parent;
                    }
                },
                hashName: function(parentid, name) {
                    var hash = 0;
                    for(var i = 0; i < name.length; i++)hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
                    return (parentid + hash >>> 0) % FS.nameTable.length;
                },
                hashAddNode: function(node) {
                    var hash = FS.hashName(node.parent.id, node.name);
                    node.name_next = FS.nameTable[hash];
                    FS.nameTable[hash] = node;
                },
                hashRemoveNode: function(node) {
                    var hash = FS.hashName(node.parent.id, node.name);
                    if (FS.nameTable[hash] === node) FS.nameTable[hash] = node.name_next;
                    else {
                        var current = FS.nameTable[hash];
                        while(current){
                            if (current.name_next === node) {
                                current.name_next = node.name_next;
                                break;
                            }
                            current = current.name_next;
                        }
                    }
                },
                lookupNode: function(parent, name) {
                    var errCode = FS.mayLookup(parent);
                    if (errCode) throw new FS.ErrnoError(errCode, parent);
                    var hash = FS.hashName(parent.id, name);
                    for(var node = FS.nameTable[hash]; node; node = node.name_next){
                        var nodeName = node.name;
                        if (node.parent.id === parent.id && nodeName === name) return node;
                    }
                    return FS.lookup(parent, name);
                },
                createNode: function(parent, name, mode, rdev) {
                    var node = new FS.FSNode(parent, name, mode, rdev);
                    FS.hashAddNode(node);
                    return node;
                },
                destroyNode: function(node) {
                    FS.hashRemoveNode(node);
                },
                isRoot: function(node) {
                    return node === node.parent;
                },
                isMountpoint: function(node) {
                    return !!node.mounted;
                },
                isFile: function(mode) {
                    return (mode & 61440) === 32768;
                },
                isDir: function(mode) {
                    return (mode & 61440) === 16384;
                },
                isLink: function(mode) {
                    return (mode & 61440) === 40960;
                },
                isChrdev: function(mode) {
                    return (mode & 61440) === 8192;
                },
                isBlkdev: function(mode) {
                    return (mode & 61440) === 24576;
                },
                isFIFO: function(mode) {
                    return (mode & 61440) === 4096;
                },
                isSocket: function(mode) {
                    return (mode & 49152) === 49152;
                },
                flagModes: {
                    "r": 0,
                    "r+": 2,
                    "w": 577,
                    "w+": 578,
                    "a": 1089,
                    "a+": 1090
                },
                modeStringToFlags: function(str) {
                    var flags = FS.flagModes[str];
                    if (typeof flags === "undefined") throw new Error("Unknown file open mode: " + str);
                    return flags;
                },
                flagsToPermissionString: function(flag) {
                    var perms = [
                        "r",
                        "w",
                        "rw"
                    ][flag & 3];
                    if (flag & 512) perms += "w";
                    return perms;
                },
                nodePermissions: function(node, perms) {
                    if (FS.ignorePermissions) return 0;
                    if (perms.includes("r") && !(node.mode & 292)) return 2;
                    else if (perms.includes("w") && !(node.mode & 146)) return 2;
                    else if (perms.includes("x") && !(node.mode & 73)) return 2;
                    return 0;
                },
                mayLookup: function(dir) {
                    var errCode = FS.nodePermissions(dir, "x");
                    if (errCode) return errCode;
                    if (!dir.node_ops.lookup) return 2;
                    return 0;
                },
                mayCreate: function(dir, name) {
                    try {
                        var node = FS.lookupNode(dir, name);
                        return 20;
                    } catch (e) {
                    }
                    return FS.nodePermissions(dir, "wx");
                },
                mayDelete: function(dir, name, isdir) {
                    var node;
                    try {
                        node = FS.lookupNode(dir, name);
                    } catch (e) {
                        return e.errno;
                    }
                    var errCode = FS.nodePermissions(dir, "wx");
                    if (errCode) return errCode;
                    if (isdir) {
                        if (!FS.isDir(node.mode)) return 54;
                        if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) return 10;
                    } else {
                        if (FS.isDir(node.mode)) return 31;
                    }
                    return 0;
                },
                mayOpen: function(node, flags) {
                    if (!node) return 44;
                    if (FS.isLink(node.mode)) return 32;
                    else if (FS.isDir(node.mode)) {
                        if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) return 31;
                    }
                    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
                },
                MAX_OPEN_FDS: 4096,
                nextfd: function(fd_start, fd_end) {
                    fd_start = fd_start || 0;
                    fd_end = fd_end || FS.MAX_OPEN_FDS;
                    for(var fd = fd_start; fd <= fd_end; fd++){
                        if (!FS.streams[fd]) return fd;
                    }
                    throw new FS.ErrnoError(33);
                },
                getStream: function(fd) {
                    return FS.streams[fd];
                },
                createStream: function(stream, fd_start, fd_end) {
                    if (!FS.FSStream) {
                        FS.FSStream = function() {
                        };
                        FS.FSStream.prototype = {
                            object: {
                                get: function() {
                                    return this.node;
                                },
                                set: function(val) {
                                    this.node = val;
                                }
                            },
                            isRead: {
                                get: function() {
                                    return (this.flags & 2097155) !== 1;
                                }
                            },
                            isWrite: {
                                get: function() {
                                    return (this.flags & 2097155) !== 0;
                                }
                            },
                            isAppend: {
                                get: function() {
                                    return this.flags & 1024;
                                }
                            }
                        };
                    }
                    var newStream = new FS.FSStream;
                    for(var p in stream)newStream[p] = stream[p];
                    stream = newStream;
                    var fd = FS.nextfd(fd_start, fd_end);
                    stream.fd = fd;
                    FS.streams[fd] = stream;
                    return stream;
                },
                closeStream: function(fd) {
                    FS.streams[fd] = null;
                },
                chrdev_stream_ops: {
                    open: function(stream) {
                        var device = FS.getDevice(stream.node.rdev);
                        stream.stream_ops = device.stream_ops;
                        if (stream.stream_ops.open) stream.stream_ops.open(stream);
                    },
                    llseek: function() {
                        throw new FS.ErrnoError(70);
                    }
                },
                major: function(dev) {
                    return dev >> 8;
                },
                minor: function(dev) {
                    return dev & 255;
                },
                makedev: function(ma, mi) {
                    return ma << 8 | mi;
                },
                registerDevice: function(dev, ops) {
                    FS.devices[dev] = {
                        stream_ops: ops
                    };
                },
                getDevice: function(dev) {
                    return FS.devices[dev];
                },
                getMounts: function(mount) {
                    var mounts = [];
                    var check = [
                        mount
                    ];
                    while(check.length){
                        var m = check.pop();
                        mounts.push(m);
                        check.push.apply(check, m.mounts);
                    }
                    return mounts;
                },
                syncfs: function(populate, callback) {
                    if (typeof populate === "function") {
                        callback = populate;
                        populate = false;
                    }
                    FS.syncFSRequests++;
                    if (FS.syncFSRequests > 1) err1("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                    var mounts = FS.getMounts(FS.root.mount);
                    var completed = 0;
                    function doCallback(errCode) {
                        FS.syncFSRequests--;
                        return callback(errCode);
                    }
                    function done(errCode) {
                        if (errCode) {
                            if (!done.errored) {
                                done.errored = true;
                                return doCallback(errCode);
                            }
                            return;
                        }
                        if (++completed >= mounts.length) doCallback(null);
                    }
                    mounts.forEach(function(mount) {
                        if (!mount.type.syncfs) return done(null);
                        mount.type.syncfs(mount, populate, done);
                    });
                },
                mount: function(type, opts, mountpoint) {
                    var root = mountpoint === "/";
                    var pseudo = !mountpoint;
                    var node;
                    if (root && FS.root) throw new FS.ErrnoError(10);
                    else if (!root && !pseudo) {
                        var lookup = FS.lookupPath(mountpoint, {
                            follow_mount: false
                        });
                        mountpoint = lookup.path;
                        node = lookup.node;
                        if (FS.isMountpoint(node)) throw new FS.ErrnoError(10);
                        if (!FS.isDir(node.mode)) throw new FS.ErrnoError(54);
                    }
                    var mount = {
                        type: type,
                        opts: opts,
                        mountpoint: mountpoint,
                        mounts: []
                    };
                    var mountRoot = type.mount(mount);
                    mountRoot.mount = mount;
                    mount.root = mountRoot;
                    if (root) FS.root = mountRoot;
                    else if (node) {
                        node.mounted = mount;
                        if (node.mount) node.mount.mounts.push(mount);
                    }
                    return mountRoot;
                },
                unmount: function(mountpoint) {
                    var lookup = FS.lookupPath(mountpoint, {
                        follow_mount: false
                    });
                    if (!FS.isMountpoint(lookup.node)) throw new FS.ErrnoError(28);
                    var node = lookup.node;
                    var mount = node.mounted;
                    var mounts = FS.getMounts(mount);
                    Object.keys(FS.nameTable).forEach(function(hash) {
                        var current = FS.nameTable[hash];
                        while(current){
                            var next = current.name_next;
                            if (mounts.includes(current.mount)) FS.destroyNode(current);
                            current = next;
                        }
                    });
                    node.mounted = null;
                    var idx = node.mount.mounts.indexOf(mount);
                    node.mount.mounts.splice(idx, 1);
                },
                lookup: function(parent, name) {
                    return parent.node_ops.lookup(parent, name);
                },
                mknod: function(path, mode, dev) {
                    var lookup = FS.lookupPath(path, {
                        parent: true
                    });
                    var parent = lookup.node;
                    var name = PATH.basename(path);
                    if (!name || name === "." || name === "..") throw new FS.ErrnoError(28);
                    var errCode = FS.mayCreate(parent, name);
                    if (errCode) throw new FS.ErrnoError(errCode);
                    if (!parent.node_ops.mknod) throw new FS.ErrnoError(63);
                    return parent.node_ops.mknod(parent, name, mode, dev);
                },
                create: function(path, mode) {
                    mode = mode !== undefined ? mode : 438;
                    mode &= 4095;
                    mode |= 32768;
                    return FS.mknod(path, mode, 0);
                },
                mkdir: function(path, mode) {
                    mode = mode !== undefined ? mode : 511;
                    mode &= 1023;
                    mode |= 16384;
                    return FS.mknod(path, mode, 0);
                },
                mkdirTree: function(path, mode) {
                    var dirs = path.split("/");
                    var d = "";
                    for(var i = 0; i < dirs.length; ++i){
                        if (!dirs[i]) continue;
                        d += "/" + dirs[i];
                        try {
                            FS.mkdir(d, mode);
                        } catch (e) {
                            if (e.errno != 20) throw e;
                        }
                    }
                },
                mkdev: function(path, mode, dev) {
                    if (typeof dev === "undefined") {
                        dev = mode;
                        mode = 438;
                    }
                    mode |= 8192;
                    return FS.mknod(path, mode, dev);
                },
                symlink: function(oldpath, newpath) {
                    if (!PATH_FS.resolve(oldpath)) throw new FS.ErrnoError(44);
                    var lookup = FS.lookupPath(newpath, {
                        parent: true
                    });
                    var parent = lookup.node;
                    if (!parent) throw new FS.ErrnoError(44);
                    var newname = PATH.basename(newpath);
                    var errCode = FS.mayCreate(parent, newname);
                    if (errCode) throw new FS.ErrnoError(errCode);
                    if (!parent.node_ops.symlink) throw new FS.ErrnoError(63);
                    return parent.node_ops.symlink(parent, newname, oldpath);
                },
                rename: function(old_path, new_path) {
                    var old_dirname = PATH.dirname(old_path);
                    var new_dirname = PATH.dirname(new_path);
                    var old_name = PATH.basename(old_path);
                    var new_name = PATH.basename(new_path);
                    var lookup, old_dir, new_dir;
                    lookup = FS.lookupPath(old_path, {
                        parent: true
                    });
                    old_dir = lookup.node;
                    lookup = FS.lookupPath(new_path, {
                        parent: true
                    });
                    new_dir = lookup.node;
                    if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
                    if (old_dir.mount !== new_dir.mount) throw new FS.ErrnoError(75);
                    var old_node = FS.lookupNode(old_dir, old_name);
                    var relative = PATH_FS.relative(old_path, new_dirname);
                    if (relative.charAt(0) !== ".") throw new FS.ErrnoError(28);
                    relative = PATH_FS.relative(new_path, old_dirname);
                    if (relative.charAt(0) !== ".") throw new FS.ErrnoError(55);
                    var new_node;
                    try {
                        new_node = FS.lookupNode(new_dir, new_name);
                    } catch (e) {
                    }
                    if (old_node === new_node) return;
                    var isdir = FS.isDir(old_node.mode);
                    var errCode = FS.mayDelete(old_dir, old_name, isdir);
                    if (errCode) throw new FS.ErrnoError(errCode);
                    errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
                    if (errCode) throw new FS.ErrnoError(errCode);
                    if (!old_dir.node_ops.rename) throw new FS.ErrnoError(63);
                    if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) throw new FS.ErrnoError(10);
                    if (new_dir !== old_dir) {
                        errCode = FS.nodePermissions(old_dir, "w");
                        if (errCode) throw new FS.ErrnoError(errCode);
                    }
                    try {
                        if (FS.trackingDelegate["willMovePath"]) FS.trackingDelegate["willMovePath"](old_path, new_path);
                    } catch (e3) {
                        err1("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e3.message);
                    }
                    FS.hashRemoveNode(old_node);
                    try {
                        old_dir.node_ops.rename(old_node, new_dir, new_name);
                    } catch (e4) {
                        throw e4;
                    } finally{
                        FS.hashAddNode(old_node);
                    }
                    try {
                        if (FS.trackingDelegate["onMovePath"]) FS.trackingDelegate["onMovePath"](old_path, new_path);
                    } catch (e5) {
                        err1("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e5.message);
                    }
                },
                rmdir: function(path) {
                    var lookup = FS.lookupPath(path, {
                        parent: true
                    });
                    var parent = lookup.node;
                    var name = PATH.basename(path);
                    var node = FS.lookupNode(parent, name);
                    var errCode = FS.mayDelete(parent, name, true);
                    if (errCode) throw new FS.ErrnoError(errCode);
                    if (!parent.node_ops.rmdir) throw new FS.ErrnoError(63);
                    if (FS.isMountpoint(node)) throw new FS.ErrnoError(10);
                    try {
                        if (FS.trackingDelegate["willDeletePath"]) FS.trackingDelegate["willDeletePath"](path);
                    } catch (e) {
                        err1("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
                    }
                    parent.node_ops.rmdir(parent, name);
                    FS.destroyNode(node);
                    try {
                        if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
                    } catch (e6) {
                        err1("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e6.message);
                    }
                },
                readdir: function(path) {
                    var lookup = FS.lookupPath(path, {
                        follow: true
                    });
                    var node = lookup.node;
                    if (!node.node_ops.readdir) throw new FS.ErrnoError(54);
                    return node.node_ops.readdir(node);
                },
                unlink: function(path) {
                    var lookup = FS.lookupPath(path, {
                        parent: true
                    });
                    var parent = lookup.node;
                    var name = PATH.basename(path);
                    var node = FS.lookupNode(parent, name);
                    var errCode = FS.mayDelete(parent, name, false);
                    if (errCode) throw new FS.ErrnoError(errCode);
                    if (!parent.node_ops.unlink) throw new FS.ErrnoError(63);
                    if (FS.isMountpoint(node)) throw new FS.ErrnoError(10);
                    try {
                        if (FS.trackingDelegate["willDeletePath"]) FS.trackingDelegate["willDeletePath"](path);
                    } catch (e) {
                        err1("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
                    }
                    parent.node_ops.unlink(parent, name);
                    FS.destroyNode(node);
                    try {
                        if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
                    } catch (e7) {
                        err1("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e7.message);
                    }
                },
                readlink: function(path) {
                    var lookup = FS.lookupPath(path);
                    var link = lookup.node;
                    if (!link) throw new FS.ErrnoError(44);
                    if (!link.node_ops.readlink) throw new FS.ErrnoError(28);
                    return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
                },
                stat: function(path, dontFollow) {
                    var lookup = FS.lookupPath(path, {
                        follow: !dontFollow
                    });
                    var node = lookup.node;
                    if (!node) throw new FS.ErrnoError(44);
                    if (!node.node_ops.getattr) throw new FS.ErrnoError(63);
                    return node.node_ops.getattr(node);
                },
                lstat: function(path) {
                    return FS.stat(path, true);
                },
                chmod: function(path, mode, dontFollow) {
                    var node;
                    if (typeof path === "string") {
                        var lookup = FS.lookupPath(path, {
                            follow: !dontFollow
                        });
                        node = lookup.node;
                    } else node = path;
                    if (!node.node_ops.setattr) throw new FS.ErrnoError(63);
                    node.node_ops.setattr(node, {
                        mode: mode & 4095 | node.mode & -4096,
                        timestamp: Date.now()
                    });
                },
                lchmod: function(path, mode) {
                    FS.chmod(path, mode, true);
                },
                fchmod: function(fd, mode) {
                    var stream = FS.getStream(fd);
                    if (!stream) throw new FS.ErrnoError(8);
                    FS.chmod(stream.node, mode);
                },
                chown: function(path, uid, gid, dontFollow) {
                    var node;
                    if (typeof path === "string") {
                        var lookup = FS.lookupPath(path, {
                            follow: !dontFollow
                        });
                        node = lookup.node;
                    } else node = path;
                    if (!node.node_ops.setattr) throw new FS.ErrnoError(63);
                    node.node_ops.setattr(node, {
                        timestamp: Date.now()
                    });
                },
                lchown: function(path, uid, gid) {
                    FS.chown(path, uid, gid, true);
                },
                fchown: function(fd, uid, gid) {
                    var stream = FS.getStream(fd);
                    if (!stream) throw new FS.ErrnoError(8);
                    FS.chown(stream.node, uid, gid);
                },
                truncate: function(path, len) {
                    if (len < 0) throw new FS.ErrnoError(28);
                    var node;
                    if (typeof path === "string") {
                        var lookup = FS.lookupPath(path, {
                            follow: true
                        });
                        node = lookup.node;
                    } else node = path;
                    if (!node.node_ops.setattr) throw new FS.ErrnoError(63);
                    if (FS.isDir(node.mode)) throw new FS.ErrnoError(31);
                    if (!FS.isFile(node.mode)) throw new FS.ErrnoError(28);
                    var errCode = FS.nodePermissions(node, "w");
                    if (errCode) throw new FS.ErrnoError(errCode);
                    node.node_ops.setattr(node, {
                        size: len,
                        timestamp: Date.now()
                    });
                },
                ftruncate: function(fd, len) {
                    var stream = FS.getStream(fd);
                    if (!stream) throw new FS.ErrnoError(8);
                    if ((stream.flags & 2097155) === 0) throw new FS.ErrnoError(28);
                    FS.truncate(stream.node, len);
                },
                utime: function(path, atime, mtime) {
                    var lookup = FS.lookupPath(path, {
                        follow: true
                    });
                    var node = lookup.node;
                    node.node_ops.setattr(node, {
                        timestamp: Math.max(atime, mtime)
                    });
                },
                open: function(path, flags, mode, fd_start, fd_end) {
                    if (path === "") throw new FS.ErrnoError(44);
                    flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
                    mode = typeof mode === "undefined" ? 438 : mode;
                    if (flags & 64) mode = mode & 4095 | 32768;
                    else mode = 0;
                    var node;
                    if (typeof path === "object") node = path;
                    else {
                        path = PATH.normalize(path);
                        try {
                            var lookup = FS.lookupPath(path, {
                                follow: !(flags & 131072)
                            });
                            node = lookup.node;
                        } catch (e) {
                        }
                    }
                    var created = false;
                    if (flags & 64) {
                        if (node) {
                            if (flags & 128) throw new FS.ErrnoError(20);
                        } else {
                            node = FS.mknod(path, mode, 0);
                            created = true;
                        }
                    }
                    if (!node) throw new FS.ErrnoError(44);
                    if (FS.isChrdev(node.mode)) flags &= -513;
                    if (flags & 65536 && !FS.isDir(node.mode)) throw new FS.ErrnoError(54);
                    if (!created) {
                        var errCode = FS.mayOpen(node, flags);
                        if (errCode) throw new FS.ErrnoError(errCode);
                    }
                    if (flags & 512) FS.truncate(node, 0);
                    flags &= -131713;
                    var stream = FS.createStream({
                        node: node,
                        path: FS.getPath(node),
                        flags: flags,
                        seekable: true,
                        position: 0,
                        stream_ops: node.stream_ops,
                        ungotten: [],
                        error: false
                    }, fd_start, fd_end);
                    if (stream.stream_ops.open) stream.stream_ops.open(stream);
                    if (Module["logReadFiles"] && !(flags & 1)) {
                        if (!FS.readFiles) FS.readFiles = {
                        };
                        if (!(path in FS.readFiles)) {
                            FS.readFiles[path] = 1;
                            err1("FS.trackingDelegate error on read file: " + path);
                        }
                    }
                    try {
                        if (FS.trackingDelegate["onOpenFile"]) {
                            var trackingFlags = 0;
                            if ((flags & 2097155) !== 1) trackingFlags |= FS.tracking.openFlags.READ;
                            if ((flags & 2097155) !== 0) trackingFlags |= FS.tracking.openFlags.WRITE;
                            FS.trackingDelegate["onOpenFile"](path, trackingFlags);
                        }
                    } catch (e) {
                        err1("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
                    }
                    return stream;
                },
                close: function(stream) {
                    if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
                    if (stream.getdents) stream.getdents = null;
                    try {
                        if (stream.stream_ops.close) stream.stream_ops.close(stream);
                    } catch (e) {
                        throw e;
                    } finally{
                        FS.closeStream(stream.fd);
                    }
                    stream.fd = null;
                },
                isClosed: function(stream) {
                    return stream.fd === null;
                },
                llseek: function(stream, offset, whence) {
                    if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
                    if (!stream.seekable || !stream.stream_ops.llseek) throw new FS.ErrnoError(70);
                    if (whence != 0 && whence != 1 && whence != 2) throw new FS.ErrnoError(28);
                    stream.position = stream.stream_ops.llseek(stream, offset, whence);
                    stream.ungotten = [];
                    return stream.position;
                },
                read: function(stream, buffer, offset, length, position) {
                    if (length < 0 || position < 0) throw new FS.ErrnoError(28);
                    if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
                    if ((stream.flags & 2097155) === 1) throw new FS.ErrnoError(8);
                    if (FS.isDir(stream.node.mode)) throw new FS.ErrnoError(31);
                    if (!stream.stream_ops.read) throw new FS.ErrnoError(28);
                    var seeking = typeof position !== "undefined";
                    if (!seeking) position = stream.position;
                    else if (!stream.seekable) throw new FS.ErrnoError(70);
                    var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
                    if (!seeking) stream.position += bytesRead;
                    return bytesRead;
                },
                write: function(stream, buffer, offset, length, position, canOwn) {
                    if (length < 0 || position < 0) throw new FS.ErrnoError(28);
                    if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
                    if ((stream.flags & 2097155) === 0) throw new FS.ErrnoError(8);
                    if (FS.isDir(stream.node.mode)) throw new FS.ErrnoError(31);
                    if (!stream.stream_ops.write) throw new FS.ErrnoError(28);
                    if (stream.seekable && stream.flags & 1024) FS.llseek(stream, 0, 2);
                    var seeking = typeof position !== "undefined";
                    if (!seeking) position = stream.position;
                    else if (!stream.seekable) throw new FS.ErrnoError(70);
                    var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
                    if (!seeking) stream.position += bytesWritten;
                    try {
                        if (stream.path && FS.trackingDelegate["onWriteToFile"]) FS.trackingDelegate["onWriteToFile"](stream.path);
                    } catch (e) {
                        err1("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message);
                    }
                    return bytesWritten;
                },
                allocate: function(stream, offset, length) {
                    if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
                    if (offset < 0 || length <= 0) throw new FS.ErrnoError(28);
                    if ((stream.flags & 2097155) === 0) throw new FS.ErrnoError(8);
                    if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) throw new FS.ErrnoError(43);
                    if (!stream.stream_ops.allocate) throw new FS.ErrnoError(138);
                    stream.stream_ops.allocate(stream, offset, length);
                },
                mmap: function(stream, address, length, position, prot, flags) {
                    if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
                    if ((stream.flags & 2097155) === 1) throw new FS.ErrnoError(2);
                    if (!stream.stream_ops.mmap) throw new FS.ErrnoError(43);
                    return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
                },
                msync: function(stream, buffer, offset, length, mmapFlags) {
                    if (!stream || !stream.stream_ops.msync) return 0;
                    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
                },
                munmap: function(stream) {
                    return 0;
                },
                ioctl: function(stream, cmd, arg) {
                    if (!stream.stream_ops.ioctl) throw new FS.ErrnoError(59);
                    return stream.stream_ops.ioctl(stream, cmd, arg);
                },
                readFile: function(path, opts) {
                    opts = opts || {
                    };
                    opts.flags = opts.flags || 0;
                    opts.encoding = opts.encoding || "binary";
                    if (opts.encoding !== "utf8" && opts.encoding !== "binary") throw new Error('Invalid encoding type "' + opts.encoding + '"');
                    var ret;
                    var stream = FS.open(path, opts.flags);
                    var stat = FS.stat(path);
                    var length = stat.size;
                    var buf = new Uint8Array(length);
                    FS.read(stream, buf, 0, length, 0);
                    if (opts.encoding === "utf8") ret = UTF8ArrayToString(buf, 0);
                    else if (opts.encoding === "binary") ret = buf;
                    FS.close(stream);
                    return ret;
                },
                writeFile: function(path, data, opts) {
                    opts = opts || {
                    };
                    opts.flags = opts.flags || 577;
                    var stream = FS.open(path, opts.flags, opts.mode);
                    if (typeof data === "string") {
                        var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
                        var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
                        FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
                    } else if (ArrayBuffer.isView(data)) FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
                    else throw new Error("Unsupported data type");
                    FS.close(stream);
                },
                cwd: function() {
                    return FS.currentPath;
                },
                chdir: function(path) {
                    var lookup = FS.lookupPath(path, {
                        follow: true
                    });
                    if (lookup.node === null) throw new FS.ErrnoError(44);
                    if (!FS.isDir(lookup.node.mode)) throw new FS.ErrnoError(54);
                    var errCode = FS.nodePermissions(lookup.node, "x");
                    if (errCode) throw new FS.ErrnoError(errCode);
                    FS.currentPath = lookup.path;
                },
                createDefaultDirectories: function() {
                    FS.mkdir("/tmp");
                    FS.mkdir("/home");
                    FS.mkdir("/home/web_user");
                },
                createDefaultDevices: function() {
                    FS.mkdir("/dev");
                    FS.registerDevice(FS.makedev(1, 3), {
                        read: function() {
                            return 0;
                        },
                        write: function(stream, buffer, offset, length, pos) {
                            return length;
                        }
                    });
                    FS.mkdev("/dev/null", FS.makedev(1, 3));
                    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
                    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
                    FS.mkdev("/dev/tty", FS.makedev(5, 0));
                    FS.mkdev("/dev/tty1", FS.makedev(6, 0));
                    var random_device = getRandomDevice();
                    FS.createDevice("/dev", "random", random_device);
                    FS.createDevice("/dev", "urandom", random_device);
                    FS.mkdir("/dev/shm");
                    FS.mkdir("/dev/shm/tmp");
                },
                createSpecialDirectories: function() {
                    FS.mkdir("/proc");
                    var proc_self = FS.mkdir("/proc/self");
                    FS.mkdir("/proc/self/fd");
                    FS.mount({
                        mount: function() {
                            var node = FS.createNode(proc_self, "fd", 16895, 73);
                            node.node_ops = {
                                lookup: function(parent, name) {
                                    var fd = +name;
                                    var stream = FS.getStream(fd);
                                    if (!stream) throw new FS.ErrnoError(8);
                                    var ret = {
                                        parent: null,
                                        mount: {
                                            mountpoint: "fake"
                                        },
                                        node_ops: {
                                            readlink: function() {
                                                return stream.path;
                                            }
                                        }
                                    };
                                    ret.parent = ret;
                                    return ret;
                                }
                            };
                            return node;
                        }
                    }, {
                    }, "/proc/self/fd");
                },
                createStandardStreams: function() {
                    if (Module["stdin"]) FS.createDevice("/dev", "stdin", Module["stdin"]);
                    else FS.symlink("/dev/tty", "/dev/stdin");
                    if (Module["stdout"]) FS.createDevice("/dev", "stdout", null, Module["stdout"]);
                    else FS.symlink("/dev/tty", "/dev/stdout");
                    if (Module["stderr"]) FS.createDevice("/dev", "stderr", null, Module["stderr"]);
                    else FS.symlink("/dev/tty1", "/dev/stderr");
                    var stdin = FS.open("/dev/stdin", 0);
                    var stdout = FS.open("/dev/stdout", 1);
                    var stderr = FS.open("/dev/stderr", 1);
                },
                ensureErrnoError: function() {
                    if (FS.ErrnoError) return;
                    FS.ErrnoError = function ErrnoError(errno1, node) {
                        this.node = node;
                        this.setErrno = function(errno) {
                            this.errno = errno;
                        };
                        this.setErrno(errno1);
                        this.message = "FS error";
                    };
                    FS.ErrnoError.prototype = new Error;
                    FS.ErrnoError.prototype.constructor = FS.ErrnoError;
                    [
                        44
                    ].forEach(function(code) {
                        FS.genericErrors[code] = new FS.ErrnoError(code);
                        FS.genericErrors[code].stack = "<generic error, no stack>";
                    });
                },
                staticInit: function() {
                    FS.ensureErrnoError();
                    FS.nameTable = new Array(4096);
                    FS.mount(MEMFS, {
                    }, "/");
                    FS.createDefaultDirectories();
                    FS.createDefaultDevices();
                    FS.createSpecialDirectories();
                    FS.filesystems = {
                        "MEMFS": MEMFS,
                        "IDBFS": IDBFS
                    };
                },
                init: function(input, output, error) {
                    FS.init.initialized = true;
                    FS.ensureErrnoError();
                    Module["stdin"] = input || Module["stdin"];
                    Module["stdout"] = output || Module["stdout"];
                    Module["stderr"] = error || Module["stderr"];
                    FS.createStandardStreams();
                },
                quit: function() {
                    FS.init.initialized = false;
                    var fflush = Module["_fflush"];
                    if (fflush) fflush(0);
                    for(var i = 0; i < FS.streams.length; i++){
                        var stream = FS.streams[i];
                        if (!stream) continue;
                        FS.close(stream);
                    }
                },
                getMode: function(canRead, canWrite) {
                    var mode = 0;
                    if (canRead) mode |= 365;
                    if (canWrite) mode |= 146;
                    return mode;
                },
                findObject: function(path, dontResolveLastLink) {
                    var ret = FS.analyzePath(path, dontResolveLastLink);
                    if (ret.exists) return ret.object;
                    else return null;
                },
                analyzePath: function(path, dontResolveLastLink) {
                    try {
                        var lookup = FS.lookupPath(path, {
                            follow: !dontResolveLastLink
                        });
                        path = lookup.path;
                    } catch (e) {
                    }
                    var ret = {
                        isRoot: false,
                        exists: false,
                        error: 0,
                        name: null,
                        path: null,
                        object: null,
                        parentExists: false,
                        parentPath: null,
                        parentObject: null
                    };
                    try {
                        var lookup = FS.lookupPath(path, {
                            parent: true
                        });
                        ret.parentExists = true;
                        ret.parentPath = lookup.path;
                        ret.parentObject = lookup.node;
                        ret.name = PATH.basename(path);
                        lookup = FS.lookupPath(path, {
                            follow: !dontResolveLastLink
                        });
                        ret.exists = true;
                        ret.path = lookup.path;
                        ret.object = lookup.node;
                        ret.name = lookup.node.name;
                        ret.isRoot = lookup.path === "/";
                    } catch (e8) {
                        ret.error = e8.errno;
                    }
                    return ret;
                },
                createPath: function(parent, path, canRead, canWrite) {
                    parent = typeof parent === "string" ? parent : FS.getPath(parent);
                    var parts = path.split("/").reverse();
                    while(parts.length){
                        var part = parts.pop();
                        if (!part) continue;
                        var current = PATH.join2(parent, part);
                        try {
                            FS.mkdir(current);
                        } catch (e) {
                        }
                        parent = current;
                    }
                    return current;
                },
                createFile: function(parent, name, properties, canRead, canWrite) {
                    var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
                    var mode = FS.getMode(canRead, canWrite);
                    return FS.create(path, mode);
                },
                createDataFile: function(parent, name, data, canRead, canWrite, canOwn) {
                    var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
                    var mode = FS.getMode(canRead, canWrite);
                    var node = FS.create(path, mode);
                    if (data) {
                        if (typeof data === "string") {
                            var arr = new Array(data.length);
                            for(var i = 0, len = data.length; i < len; ++i)arr[i] = data.charCodeAt(i);
                            data = arr;
                        }
                        FS.chmod(node, mode | 146);
                        var stream = FS.open(node, 577);
                        FS.write(stream, data, 0, data.length, 0, canOwn);
                        FS.close(stream);
                        FS.chmod(node, mode);
                    }
                    return node;
                },
                createDevice: function(parent, name, input, output) {
                    var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
                    var mode = FS.getMode(!!input, !!output);
                    if (!FS.createDevice.major) FS.createDevice.major = 64;
                    var dev = FS.makedev(FS.createDevice.major++, 0);
                    FS.registerDevice(dev, {
                        open: function(stream) {
                            stream.seekable = false;
                        },
                        close: function(stream) {
                            if (output && output.buffer && output.buffer.length) output(10);
                        },
                        read: function(stream, buffer, offset, length, pos) {
                            var bytesRead = 0;
                            for(var i = 0; i < length; i++){
                                var result;
                                try {
                                    result = input();
                                } catch (e) {
                                    throw new FS.ErrnoError(29);
                                }
                                if (result === undefined && bytesRead === 0) throw new FS.ErrnoError(6);
                                if (result === null || result === undefined) break;
                                bytesRead++;
                                buffer[offset + i] = result;
                            }
                            if (bytesRead) stream.node.timestamp = Date.now();
                            return bytesRead;
                        },
                        write: function(stream, buffer, offset, length, pos) {
                            for(var i = 0; i < length; i++)try {
                                output(buffer[offset + i]);
                            } catch (e) {
                                throw new FS.ErrnoError(29);
                            }
                            if (length) stream.node.timestamp = Date.now();
                            return i;
                        }
                    });
                    return FS.mkdev(path, mode, dev);
                },
                forceLoadFile: function(obj) {
                    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
                    if (typeof XMLHttpRequest !== "undefined") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                    else if (read_) try {
                        obj.contents = intArrayFromString(read_(obj.url), true);
                        obj.usedBytes = obj.contents.length;
                    } catch (e) {
                        throw new FS.ErrnoError(29);
                    }
                    else throw new Error("Cannot load without read() or XMLHttpRequest.");
                },
                createLazyFile: function(parent, name, url, canRead, canWrite) {
                    function LazyUint8Array() {
                        this.lengthKnown = false;
                        this.chunks = [];
                    }
                    LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
                        if (idx > this.length - 1 || idx < 0) return undefined;
                        var chunkOffset = idx % this.chunkSize;
                        var chunkNum = idx / this.chunkSize | 0;
                        return this.getter(chunkNum)[chunkOffset];
                    };
                    LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
                        this.getter = getter;
                    };
                    LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
                        var xhr1 = new XMLHttpRequest;
                        xhr1.open("HEAD", url, false);
                        xhr1.send(null);
                        if (!(xhr1.status >= 200 && xhr1.status < 300 || xhr1.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr1.status);
                        var datalength = Number(xhr1.getResponseHeader("Content-length"));
                        var header;
                        var hasByteServing = (header = xhr1.getResponseHeader("Accept-Ranges")) && header === "bytes";
                        var usesGzip = (header = xhr1.getResponseHeader("Content-Encoding")) && header === "gzip";
                        var chunkSize = 1048576;
                        if (!hasByteServing) chunkSize = datalength;
                        var doXHR = function(from, to) {
                            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                            if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
                            var xhr = new XMLHttpRequest;
                            xhr.open("GET", url, false);
                            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                            if (typeof Uint8Array != "undefined") xhr.responseType = "arraybuffer";
                            if (xhr.overrideMimeType) xhr.overrideMimeType("text/plain; charset=x-user-defined");
                            xhr.send(null);
                            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                            if (xhr.response !== undefined) return new Uint8Array(xhr.response || []);
                            else return intArrayFromString(xhr.responseText || "", true);
                        };
                        var lazyArray = this;
                        lazyArray.setDataGetter(function(chunkNum) {
                            var start = chunkNum * chunkSize;
                            var end = (chunkNum + 1) * chunkSize - 1;
                            end = Math.min(end, datalength - 1);
                            if (typeof lazyArray.chunks[chunkNum] === "undefined") lazyArray.chunks[chunkNum] = doXHR(start, end);
                            if (typeof lazyArray.chunks[chunkNum] === "undefined") throw new Error("doXHR failed!");
                            return lazyArray.chunks[chunkNum];
                        });
                        if (usesGzip || !datalength) {
                            chunkSize = datalength = 1;
                            datalength = this.getter(0).length;
                            chunkSize = datalength;
                            out1("LazyFiles on gzip forces download of the whole file when length is accessed");
                        }
                        this._length = datalength;
                        this._chunkSize = chunkSize;
                        this.lengthKnown = true;
                    };
                    if (typeof XMLHttpRequest !== "undefined") {
                        if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                        var lazyArray1 = new LazyUint8Array;
                        Object.defineProperties(lazyArray1, {
                            length: {
                                get: function() {
                                    if (!this.lengthKnown) this.cacheLength();
                                    return this._length;
                                }
                            },
                            chunkSize: {
                                get: function() {
                                    if (!this.lengthKnown) this.cacheLength();
                                    return this._chunkSize;
                                }
                            }
                        });
                        var properties = {
                            isDevice: false,
                            contents: lazyArray1
                        };
                    } else var properties = {
                        isDevice: false,
                        url: url
                    };
                    var node = FS.createFile(parent, name, properties, canRead, canWrite);
                    if (properties.contents) node.contents = properties.contents;
                    else if (properties.url) {
                        node.contents = null;
                        node.url = properties.url;
                    }
                    Object.defineProperties(node, {
                        usedBytes: {
                            get: function() {
                                return this.contents.length;
                            }
                        }
                    });
                    var stream_ops = {
                    };
                    var keys = Object.keys(node.stream_ops);
                    keys.forEach(function(key) {
                        var fn = node.stream_ops[key];
                        stream_ops[key] = function forceLoadLazyFile() {
                            FS.forceLoadFile(node);
                            return fn.apply(null, arguments);
                        };
                    });
                    stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
                        FS.forceLoadFile(node);
                        var contents = stream.node.contents;
                        if (position >= contents.length) return 0;
                        var size = Math.min(contents.length - position, length);
                        if (contents.slice) for(var i = 0; i < size; i++)buffer[offset + i] = contents[position + i];
                        else for(var i = 0; i < size; i++)buffer[offset + i] = contents.get(position + i);
                        return size;
                    };
                    node.stream_ops = stream_ops;
                    return node;
                },
                createPreloadedFile: function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
                    Browser.init();
                    var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
                    var dep = getUniqueRunDependency("cp " + fullname);
                    function processData(byteArray1) {
                        function finish(byteArray) {
                            if (preFinish) preFinish();
                            if (!dontCreateFile) FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
                            if (onload) onload();
                            removeRunDependency(dep);
                        }
                        var handled = false;
                        Module["preloadPlugins"].forEach(function(plugin) {
                            if (handled) return;
                            if (plugin["canHandle"](fullname)) {
                                plugin["handle"](byteArray1, fullname, finish, function() {
                                    if (onerror) onerror();
                                    removeRunDependency(dep);
                                });
                                handled = true;
                            }
                        });
                        if (!handled) finish(byteArray1);
                    }
                    addRunDependency(dep);
                    if (typeof url == "string") asyncLoad(url, function(byteArray) {
                        processData(byteArray);
                    }, onerror);
                    else processData(url);
                },
                indexedDB: function() {
                    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                },
                DB_NAME: function() {
                    return "EM_FS_" + window.location.pathname;
                },
                DB_VERSION: 20,
                DB_STORE_NAME: "FILE_DATA",
                saveFilesToDB: function(paths, onload, onerror) {
                    onload = onload || function() {
                    };
                    onerror = onerror || function() {
                    };
                    var indexedDB = FS.indexedDB();
                    try {
                        var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
                    } catch (e) {
                        return onerror(e);
                    }
                    openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
                        out1("creating db");
                        var db = openRequest.result;
                        db.createObjectStore(FS.DB_STORE_NAME);
                    };
                    openRequest.onsuccess = function openRequest_onsuccess() {
                        var db = openRequest.result;
                        var transaction = db.transaction([
                            FS.DB_STORE_NAME
                        ], "readwrite");
                        var files = transaction.objectStore(FS.DB_STORE_NAME);
                        var ok = 0, fail = 0, total = paths.length;
                        function finish() {
                            if (fail == 0) onload();
                            else onerror();
                        }
                        paths.forEach(function(path) {
                            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
                            putRequest.onsuccess = function putRequest_onsuccess() {
                                ok++;
                                if (ok + fail == total) finish();
                            };
                            putRequest.onerror = function putRequest_onerror() {
                                fail++;
                                if (ok + fail == total) finish();
                            };
                        });
                        transaction.onerror = onerror;
                    };
                    openRequest.onerror = onerror;
                },
                loadFilesFromDB: function(paths, onload, onerror) {
                    onload = onload || function() {
                    };
                    onerror = onerror || function() {
                    };
                    var indexedDB = FS.indexedDB();
                    try {
                        var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
                    } catch (e9) {
                        return onerror(e9);
                    }
                    openRequest.onupgradeneeded = onerror;
                    openRequest.onsuccess = function openRequest_onsuccess() {
                        var db = openRequest.result;
                        try {
                            var transaction = db.transaction([
                                FS.DB_STORE_NAME
                            ], "readonly");
                        } catch (e) {
                            onerror(e);
                            return;
                        }
                        var files = transaction.objectStore(FS.DB_STORE_NAME);
                        var ok = 0, fail = 0, total = paths.length;
                        function finish() {
                            if (fail == 0) onload();
                            else onerror();
                        }
                        paths.forEach(function(path) {
                            var getRequest = files.get(path);
                            getRequest.onsuccess = function getRequest_onsuccess() {
                                if (FS.analyzePath(path).exists) FS.unlink(path);
                                FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                                ok++;
                                if (ok + fail == total) finish();
                            };
                            getRequest.onerror = function getRequest_onerror() {
                                fail++;
                                if (ok + fail == total) finish();
                            };
                        });
                        transaction.onerror = onerror;
                    };
                    openRequest.onerror = onerror;
                }
            };
            var SYSCALLS = {
                mappings: {
                },
                DEFAULT_POLLMASK: 5,
                umask: 511,
                calculateAt: function(dirfd, path, allowEmpty) {
                    if (path[0] === "/") return path;
                    var dir;
                    if (dirfd === -100) dir = FS.cwd();
                    else {
                        var dirstream = FS.getStream(dirfd);
                        if (!dirstream) throw new FS.ErrnoError(8);
                        dir = dirstream.path;
                    }
                    if (path.length == 0) {
                        if (!allowEmpty) throw new FS.ErrnoError(44);
                        return dir;
                    }
                    return PATH.join2(dir, path);
                },
                doStat: function(func, path, buf) {
                    try {
                        var stat = func(path);
                    } catch (e) {
                        if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) return -54;
                        throw e;
                    }
                    HEAP32[buf >> 2] = stat.dev;
                    HEAP32[buf + 4 >> 2] = 0;
                    HEAP32[buf + 8 >> 2] = stat.ino;
                    HEAP32[buf + 12 >> 2] = stat.mode;
                    HEAP32[buf + 16 >> 2] = stat.nlink;
                    HEAP32[buf + 20 >> 2] = stat.uid;
                    HEAP32[buf + 24 >> 2] = stat.gid;
                    HEAP32[buf + 28 >> 2] = stat.rdev;
                    HEAP32[buf + 32 >> 2] = 0;
                    tempI64 = [
                        stat.size >>> 0,
                        (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                    ], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
                    HEAP32[buf + 48 >> 2] = 4096;
                    HEAP32[buf + 52 >> 2] = stat.blocks;
                    HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1000 | 0;
                    HEAP32[buf + 60 >> 2] = 0;
                    HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1000 | 0;
                    HEAP32[buf + 68 >> 2] = 0;
                    HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1000 | 0;
                    HEAP32[buf + 76 >> 2] = 0;
                    tempI64 = [
                        stat.ino >>> 0,
                        (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                    ], HEAP32[buf + 80 >> 2] = tempI64[0], HEAP32[buf + 84 >> 2] = tempI64[1];
                    return 0;
                },
                doMsync: function(addr, stream, len, flags, offset) {
                    var buffer = HEAPU8.slice(addr, addr + len);
                    FS.msync(stream, buffer, offset, len, flags);
                },
                doMkdir: function(path, mode) {
                    path = PATH.normalize(path);
                    if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
                    FS.mkdir(path, mode, 0);
                    return 0;
                },
                doMknod: function(path, mode, dev) {
                    switch(mode & 61440){
                        case 32768:
                        case 8192:
                        case 24576:
                        case 4096:
                        case 49152:
                            break;
                        default:
                            return -28;
                    }
                    FS.mknod(path, mode, dev);
                    return 0;
                },
                doReadlink: function(path, buf, bufsize) {
                    if (bufsize <= 0) return -28;
                    var ret = FS.readlink(path);
                    var len = Math.min(bufsize, lengthBytesUTF8(ret));
                    var endChar = HEAP8[buf + len];
                    stringToUTF8(ret, buf, bufsize + 1);
                    HEAP8[buf + len] = endChar;
                    return len;
                },
                doAccess: function(path, amode) {
                    if (amode & -8) return -28;
                    var node;
                    var lookup = FS.lookupPath(path, {
                        follow: true
                    });
                    node = lookup.node;
                    if (!node) return -44;
                    var perms = "";
                    if (amode & 4) perms += "r";
                    if (amode & 2) perms += "w";
                    if (amode & 1) perms += "x";
                    if (perms && FS.nodePermissions(node, perms)) return -2;
                    return 0;
                },
                doDup: function(path, flags, suggestFD) {
                    var suggest = FS.getStream(suggestFD);
                    if (suggest) FS.close(suggest);
                    return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
                },
                doReadv: function(stream, iov, iovcnt, offset) {
                    var ret = 0;
                    for(var i = 0; i < iovcnt; i++){
                        var ptr = HEAP32[iov + i * 8 >> 2];
                        var len = HEAP32[iov + (i * 8 + 4) >> 2];
                        var curr = FS.read(stream, HEAP8, ptr, len, offset);
                        if (curr < 0) return -1;
                        ret += curr;
                        if (curr < len) break;
                    }
                    return ret;
                },
                doWritev: function(stream, iov, iovcnt, offset) {
                    var ret = 0;
                    for(var i = 0; i < iovcnt; i++){
                        var ptr = HEAP32[iov + i * 8 >> 2];
                        var len = HEAP32[iov + (i * 8 + 4) >> 2];
                        var curr = FS.write(stream, HEAP8, ptr, len, offset);
                        if (curr < 0) return -1;
                        ret += curr;
                    }
                    return ret;
                },
                varargs: undefined,
                get: function() {
                    SYSCALLS.varargs += 4;
                    var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
                    return ret;
                },
                getStr: function(ptr) {
                    var ret = UTF8ToString(ptr);
                    return ret;
                },
                getStreamFromFD: function(fd) {
                    var stream = FS.getStream(fd);
                    if (!stream) throw new FS.ErrnoError(8);
                    return stream;
                },
                get64: function(low, high) {
                    return low;
                }
            };
            function ___sys__newselect(nfds, readfds, writefds, exceptfds, timeout) {
                try {
                    var total = 0;
                    var srcReadLow = readfds ? HEAP32[readfds >> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >> 2] : 0;
                    var srcWriteLow = writefds ? HEAP32[writefds >> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >> 2] : 0;
                    var srcExceptLow = exceptfds ? HEAP32[exceptfds >> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0;
                    var dstReadLow = 0, dstReadHigh = 0;
                    var dstWriteLow = 0, dstWriteHigh = 0;
                    var dstExceptLow = 0, dstExceptHigh = 0;
                    var allLow = (readfds ? HEAP32[readfds >> 2] : 0) | (writefds ? HEAP32[writefds >> 2] : 0) | (exceptfds ? HEAP32[exceptfds >> 2] : 0);
                    var allHigh = (readfds ? HEAP32[readfds + 4 >> 2] : 0) | (writefds ? HEAP32[writefds + 4 >> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0);
                    var check = function(fd, low, high, val) {
                        return fd < 32 ? low & val : high & val;
                    };
                    for(var fd1 = 0; fd1 < nfds; fd1++){
                        var mask = 1 << fd1 % 32;
                        if (!check(fd1, allLow, allHigh, mask)) continue;
                        var stream = FS.getStream(fd1);
                        if (!stream) throw new FS.ErrnoError(8);
                        var flags = SYSCALLS.DEFAULT_POLLMASK;
                        if (stream.stream_ops.poll) flags = stream.stream_ops.poll(stream);
                        if (flags & 1 && check(fd1, srcReadLow, srcReadHigh, mask)) {
                            fd1 < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
                            total++;
                        }
                        if (flags & 4 && check(fd1, srcWriteLow, srcWriteHigh, mask)) {
                            fd1 < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
                            total++;
                        }
                        if (flags & 2 && check(fd1, srcExceptLow, srcExceptHigh, mask)) {
                            fd1 < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
                            total++;
                        }
                    }
                    if (readfds) {
                        HEAP32[readfds >> 2] = dstReadLow;
                        HEAP32[readfds + 4 >> 2] = dstReadHigh;
                    }
                    if (writefds) {
                        HEAP32[writefds >> 2] = dstWriteLow;
                        HEAP32[writefds + 4 >> 2] = dstWriteHigh;
                    }
                    if (exceptfds) {
                        HEAP32[exceptfds >> 2] = dstExceptLow;
                        HEAP32[exceptfds + 4 >> 2] = dstExceptHigh;
                    }
                    return total;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            var ERRNO_CODES = {
                EPERM: 63,
                ENOENT: 44,
                ESRCH: 71,
                EINTR: 27,
                EIO: 29,
                ENXIO: 60,
                E2BIG: 1,
                ENOEXEC: 45,
                EBADF: 8,
                ECHILD: 12,
                EAGAIN: 6,
                EWOULDBLOCK: 6,
                ENOMEM: 48,
                EACCES: 2,
                EFAULT: 21,
                ENOTBLK: 105,
                EBUSY: 10,
                EEXIST: 20,
                EXDEV: 75,
                ENODEV: 43,
                ENOTDIR: 54,
                EISDIR: 31,
                EINVAL: 28,
                ENFILE: 41,
                EMFILE: 33,
                ENOTTY: 59,
                ETXTBSY: 74,
                EFBIG: 22,
                ENOSPC: 51,
                ESPIPE: 70,
                EROFS: 69,
                EMLINK: 34,
                EPIPE: 64,
                EDOM: 18,
                ERANGE: 68,
                ENOMSG: 49,
                EIDRM: 24,
                ECHRNG: 106,
                EL2NSYNC: 156,
                EL3HLT: 107,
                EL3RST: 108,
                ELNRNG: 109,
                EUNATCH: 110,
                ENOCSI: 111,
                EL2HLT: 112,
                EDEADLK: 16,
                ENOLCK: 46,
                EBADE: 113,
                EBADR: 114,
                EXFULL: 115,
                ENOANO: 104,
                EBADRQC: 103,
                EBADSLT: 102,
                EDEADLOCK: 16,
                EBFONT: 101,
                ENOSTR: 100,
                ENODATA: 116,
                ETIME: 117,
                ENOSR: 118,
                ENONET: 119,
                ENOPKG: 120,
                EREMOTE: 121,
                ENOLINK: 47,
                EADV: 122,
                ESRMNT: 123,
                ECOMM: 124,
                EPROTO: 65,
                EMULTIHOP: 36,
                EDOTDOT: 125,
                EBADMSG: 9,
                ENOTUNIQ: 126,
                EBADFD: 127,
                EREMCHG: 128,
                ELIBACC: 129,
                ELIBBAD: 130,
                ELIBSCN: 131,
                ELIBMAX: 132,
                ELIBEXEC: 133,
                ENOSYS: 52,
                ENOTEMPTY: 55,
                ENAMETOOLONG: 37,
                ELOOP: 32,
                EOPNOTSUPP: 138,
                EPFNOSUPPORT: 139,
                ECONNRESET: 15,
                ENOBUFS: 42,
                EAFNOSUPPORT: 5,
                EPROTOTYPE: 67,
                ENOTSOCK: 57,
                ENOPROTOOPT: 50,
                ESHUTDOWN: 140,
                ECONNREFUSED: 14,
                EADDRINUSE: 3,
                ECONNABORTED: 13,
                ENETUNREACH: 40,
                ENETDOWN: 38,
                ETIMEDOUT: 73,
                EHOSTDOWN: 142,
                EHOSTUNREACH: 23,
                EINPROGRESS: 26,
                EALREADY: 7,
                EDESTADDRREQ: 17,
                EMSGSIZE: 35,
                EPROTONOSUPPORT: 66,
                ESOCKTNOSUPPORT: 137,
                EADDRNOTAVAIL: 4,
                ENETRESET: 39,
                EISCONN: 30,
                ENOTCONN: 53,
                ETOOMANYREFS: 141,
                EUSERS: 136,
                EDQUOT: 19,
                ESTALE: 72,
                ENOTSUP: 138,
                ENOMEDIUM: 148,
                EILSEQ: 25,
                EOVERFLOW: 61,
                ECANCELED: 11,
                ENOTRECOVERABLE: 56,
                EOWNERDEAD: 62,
                ESTRPIPE: 135
            };
            var SOCKFS = {
                mount: function(mount) {
                    Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {
                    };
                    Module["websocket"]._callbacks = {
                    };
                    Module["websocket"]["on"] = function(event, callback) {
                        if ("function" === typeof callback) this._callbacks[event] = callback;
                        return this;
                    };
                    Module["websocket"].emit = function(event, param) {
                        if ("function" === typeof this._callbacks[event]) this._callbacks[event].call(this, param);
                    };
                    return FS.createNode(null, "/", 16895, 0);
                },
                createSocket: function(family, type, protocol) {
                    type &= -526337;
                    var streaming = type == 1;
                    if (protocol) assert(streaming == (protocol == 6));
                    var sock = {
                        family: family,
                        type: type,
                        protocol: protocol,
                        server: null,
                        error: null,
                        peers: {
                        },
                        pending: [],
                        recv_queue: [],
                        sock_ops: SOCKFS.websocket_sock_ops
                    };
                    var name = SOCKFS.nextname();
                    var node = FS.createNode(SOCKFS.root, name, 49152, 0);
                    node.sock = sock;
                    var stream = FS.createStream({
                        path: name,
                        node: node,
                        flags: 2,
                        seekable: false,
                        stream_ops: SOCKFS.stream_ops
                    });
                    sock.stream = stream;
                    return sock;
                },
                getSocket: function(fd) {
                    var stream = FS.getStream(fd);
                    if (!stream || !FS.isSocket(stream.node.mode)) return null;
                    return stream.node.sock;
                },
                stream_ops: {
                    poll: function(stream) {
                        var sock = stream.node.sock;
                        return sock.sock_ops.poll(sock);
                    },
                    ioctl: function(stream, request, varargs) {
                        var sock = stream.node.sock;
                        return sock.sock_ops.ioctl(sock, request, varargs);
                    },
                    read: function(stream, buffer, offset, length, position) {
                        var sock = stream.node.sock;
                        var msg = sock.sock_ops.recvmsg(sock, length);
                        if (!msg) return 0;
                        buffer.set(msg.buffer, offset);
                        return msg.buffer.length;
                    },
                    write: function(stream, buffer, offset, length, position) {
                        var sock = stream.node.sock;
                        return sock.sock_ops.sendmsg(sock, buffer, offset, length);
                    },
                    close: function(stream) {
                        var sock = stream.node.sock;
                        sock.sock_ops.close(sock);
                    }
                },
                nextname: function() {
                    if (!SOCKFS.nextname.current) SOCKFS.nextname.current = 0;
                    return "socket[" + SOCKFS.nextname.current++ + "]";
                },
                websocket_sock_ops: {
                    createPeer: function(sock, addr, port) {
                        var ws;
                        if (typeof addr === "object") {
                            ws = addr;
                            addr = null;
                            port = null;
                        }
                        if (ws) {
                            if (ws._socket) {
                                addr = ws._socket.remoteAddress;
                                port = ws._socket.remotePort;
                            } else {
                                var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
                                if (!result) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
                                addr = result[1];
                                port = parseInt(result[2], 10);
                            }
                        } else try {
                            var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
                            var url = "ws:#".replace("#", "//");
                            if (runtimeConfig) {
                                if ("string" === typeof Module["websocket"]["url"]) url = Module["websocket"]["url"];
                            }
                            if (url === "ws://" || url === "wss://") {
                                var parts = addr.split("/");
                                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
                            }
                            var subProtocols = "binary";
                            if (runtimeConfig) {
                                if ("string" === typeof Module["websocket"]["subprotocol"]) subProtocols = Module["websocket"]["subprotocol"];
                            }
                            var opts = undefined;
                            if (subProtocols !== "null") {
                                subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
                                opts = ENVIRONMENT_IS_NODE ? {
                                    "protocol": subProtocols.toString()
                                } : subProtocols;
                            }
                            if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
                                subProtocols = "null";
                                opts = undefined;
                            }
                            var WebSocketConstructor;
                            WebSocketConstructor = WebSocket;
                            ws = new WebSocketConstructor(url, opts);
                            ws.binaryType = "arraybuffer";
                        } catch (e) {
                            throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
                        }
                        var peer = {
                            addr: addr,
                            port: port,
                            socket: ws,
                            dgram_send_queue: []
                        };
                        SOCKFS.websocket_sock_ops.addPeer(sock, peer);
                        SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
                        if (sock.type === 2 && typeof sock.sport !== "undefined") peer.dgram_send_queue.push(new Uint8Array([
                            255,
                            255,
                            255,
                            255,
                            "p".charCodeAt(0),
                            "o".charCodeAt(0),
                            "r".charCodeAt(0),
                            "t".charCodeAt(0),
                            (sock.sport & 65280) >> 8,
                            sock.sport & 255
                        ]));
                        return peer;
                    },
                    getPeer: function(sock, addr, port) {
                        return sock.peers[addr + ":" + port];
                    },
                    addPeer: function(sock, peer) {
                        sock.peers[peer.addr + ":" + peer.port] = peer;
                    },
                    removePeer: function(sock, peer) {
                        delete sock.peers[peer.addr + ":" + peer.port];
                    },
                    handlePeerEvents: function(sock, peer) {
                        var first = true;
                        var handleOpen = function() {
                            Module["websocket"].emit("open", sock.stream.fd);
                            try {
                                var queued = peer.dgram_send_queue.shift();
                                while(queued){
                                    peer.socket.send(queued);
                                    queued = peer.dgram_send_queue.shift();
                                }
                            } catch (e) {
                                peer.socket.close();
                            }
                        };
                        function handleMessage(data) {
                            if (typeof data === "string") {
                                var encoder = new TextEncoder;
                                data = encoder.encode(data);
                            } else {
                                assert(data.byteLength !== undefined);
                                if (data.byteLength == 0) return;
                                else data = new Uint8Array(data);
                            }
                            var wasfirst = first;
                            first = false;
                            if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
                                var newport = data[8] << 8 | data[9];
                                SOCKFS.websocket_sock_ops.removePeer(sock, peer);
                                peer.port = newport;
                                SOCKFS.websocket_sock_ops.addPeer(sock, peer);
                                return;
                            }
                            sock.recv_queue.push({
                                addr: peer.addr,
                                port: peer.port,
                                data: data
                            });
                            Module["websocket"].emit("message", sock.stream.fd);
                        }
                        if (ENVIRONMENT_IS_NODE) {
                            peer.socket.on("open", handleOpen);
                            peer.socket.on("message", function(data, flags) {
                                if (!flags.binary) return;
                                handleMessage(new Uint8Array(data).buffer);
                            });
                            peer.socket.on("close", function() {
                                Module["websocket"].emit("close", sock.stream.fd);
                            });
                            peer.socket.on("error", function(error) {
                                sock.error = ERRNO_CODES.ECONNREFUSED;
                                Module["websocket"].emit("error", [
                                    sock.stream.fd,
                                    sock.error,
                                    "ECONNREFUSED: Connection refused"
                                ]);
                            });
                        } else {
                            peer.socket.onopen = handleOpen;
                            peer.socket.onclose = function() {
                                Module["websocket"].emit("close", sock.stream.fd);
                            };
                            peer.socket.onmessage = function peer_socket_onmessage(event) {
                                handleMessage(event.data);
                            };
                            peer.socket.onerror = function(error) {
                                sock.error = ERRNO_CODES.ECONNREFUSED;
                                Module["websocket"].emit("error", [
                                    sock.stream.fd,
                                    sock.error,
                                    "ECONNREFUSED: Connection refused"
                                ]);
                            };
                        }
                    },
                    poll: function(sock) {
                        if (sock.type === 1 && sock.server) return sock.pending.length ? 65 : 0;
                        var mask = 0;
                        var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
                        if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) mask |= 65;
                        if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) mask |= 4;
                        if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) mask |= 16;
                        return mask;
                    },
                    ioctl: function(sock, request, arg) {
                        switch(request){
                            case 21531:
                                var bytes = 0;
                                if (sock.recv_queue.length) bytes = sock.recv_queue[0].data.length;
                                HEAP32[arg >> 2] = bytes;
                                return 0;
                            default:
                                return ERRNO_CODES.EINVAL;
                        }
                    },
                    close: function(sock) {
                        if (sock.server) {
                            try {
                                sock.server.close();
                            } catch (e) {
                            }
                            sock.server = null;
                        }
                        var peers = Object.keys(sock.peers);
                        for(var i = 0; i < peers.length; i++){
                            var peer = sock.peers[peers[i]];
                            try {
                                peer.socket.close();
                            } catch (e) {
                            }
                            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
                        }
                        return 0;
                    },
                    bind: function(sock, addr, port) {
                        if (typeof sock.saddr !== "undefined" || typeof sock.sport !== "undefined") throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
                        sock.saddr = addr;
                        sock.sport = port;
                        if (sock.type === 2) {
                            if (sock.server) {
                                sock.server.close();
                                sock.server = null;
                            }
                            try {
                                sock.sock_ops.listen(sock, 0);
                            } catch (e) {
                                if (!(e instanceof FS.ErrnoError)) throw e;
                                if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
                            }
                        }
                    },
                    connect: function(sock, addr, port) {
                        if (sock.server) throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
                        if (typeof sock.daddr !== "undefined" && typeof sock.dport !== "undefined") {
                            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                            if (dest) {
                                if (dest.socket.readyState === dest.socket.CONNECTING) throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
                                else throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
                            }
                        }
                        var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
                        sock.daddr = peer.addr;
                        sock.dport = peer.port;
                        throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
                    },
                    listen: function(sock, backlog) {
                        if (!ENVIRONMENT_IS_NODE) throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
                    },
                    accept: function(listensock) {
                        if (!listensock.server) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
                        var newsock = listensock.pending.shift();
                        newsock.stream.flags = listensock.stream.flags;
                        return newsock;
                    },
                    getname: function(sock, peer) {
                        var addr, port;
                        if (peer) {
                            if (sock.daddr === undefined || sock.dport === undefined) throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
                            addr = sock.daddr;
                            port = sock.dport;
                        } else {
                            addr = sock.saddr || 0;
                            port = sock.sport || 0;
                        }
                        return {
                            addr: addr,
                            port: port
                        };
                    },
                    sendmsg: function(sock, buffer, offset, length, addr, port) {
                        if (sock.type === 2) {
                            if (addr === undefined || port === undefined) {
                                addr = sock.daddr;
                                port = sock.dport;
                            }
                            if (addr === undefined || port === undefined) throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
                        } else {
                            addr = sock.daddr;
                            port = sock.dport;
                        }
                        var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
                        if (sock.type === 1) {
                            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
                            else if (dest.socket.readyState === dest.socket.CONNECTING) throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                        }
                        if (ArrayBuffer.isView(buffer)) {
                            offset += buffer.byteOffset;
                            buffer = buffer.buffer;
                        }
                        var data;
                        data = buffer.slice(offset, offset + length);
                        if (sock.type === 2) {
                            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
                                if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
                                dest.dgram_send_queue.push(data);
                                return length;
                            }
                        }
                        try {
                            dest.socket.send(data);
                            return length;
                        } catch (e) {
                            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
                        }
                    },
                    recvmsg: function(sock, length) {
                        if (sock.type === 1 && sock.server) throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
                        var queued = sock.recv_queue.shift();
                        if (!queued) {
                            if (sock.type === 1) {
                                var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                                if (!dest) throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
                                else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) return null;
                                else throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                            } else throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                        }
                        var queuedLength = queued.data.byteLength || queued.data.length;
                        var queuedOffset = queued.data.byteOffset || 0;
                        var queuedBuffer = queued.data.buffer || queued.data;
                        var bytesRead = Math.min(length, queuedLength);
                        var res = {
                            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
                            addr: queued.addr,
                            port: queued.port
                        };
                        if (sock.type === 1 && bytesRead < queuedLength) {
                            var bytesRemaining = queuedLength - bytesRead;
                            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
                            sock.recv_queue.unshift(queued);
                        }
                        return res;
                    }
                }
            };
            function getSocketFromFD(fd) {
                var socket = SOCKFS.getSocket(fd);
                if (!socket) throw new FS.ErrnoError(8);
                return socket;
            }
            function setErrNo(value) {
                HEAP32[___errno_location() >> 2] = value;
                return value;
            }
            function inetPton4(str) {
                var b = str.split(".");
                for(var i = 0; i < 4; i++){
                    var tmp = Number(b[i]);
                    if (isNaN(tmp)) return null;
                    b[i] = tmp;
                }
                return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
            }
            function jstoi_q(str) {
                return parseInt(str);
            }
            function inetPton6(str) {
                var words;
                var w, offset, z;
                var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
                var parts = [];
                if (!valid6regx.test(str)) return null;
                if (str === "::") return [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                if (str.startsWith("::")) str = str.replace("::", "Z:");
                else str = str.replace("::", ":Z:");
                if (str.indexOf(".") > 0) {
                    str = str.replace(new RegExp("[.]", "g"), ":");
                    words = str.split(":");
                    words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
                    words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
                    words = words.slice(0, words.length - 2);
                } else words = str.split(":");
                offset = 0;
                z = 0;
                for(w = 0; w < words.length; w++)if (typeof words[w] === "string") {
                    if (words[w] === "Z") {
                        for(z = 0; z < 8 - words.length + 1; z++)parts[w + z] = 0;
                        offset = z - 1;
                    } else parts[w + offset] = _htons(parseInt(words[w], 16));
                } else parts[w + offset] = words[w];
                return [
                    parts[1] << 16 | parts[0],
                    parts[3] << 16 | parts[2],
                    parts[5] << 16 | parts[4],
                    parts[7] << 16 | parts[6]
                ];
            }
            function writeSockaddr(sa, family, addr, port, addrlen) {
                switch(family){
                    case 2:
                        addr = inetPton4(addr);
                        zeroMemory(sa, 16);
                        if (addrlen) HEAP32[addrlen >> 2] = 16;
                        HEAP16[sa >> 1] = family;
                        HEAP32[sa + 4 >> 2] = addr;
                        HEAP16[sa + 2 >> 1] = _htons(port);
                        break;
                    case 10:
                        addr = inetPton6(addr);
                        zeroMemory(sa, 28);
                        if (addrlen) HEAP32[addrlen >> 2] = 28;
                        HEAP32[sa >> 2] = family;
                        HEAP32[sa + 8 >> 2] = addr[0];
                        HEAP32[sa + 12 >> 2] = addr[1];
                        HEAP32[sa + 16 >> 2] = addr[2];
                        HEAP32[sa + 20 >> 2] = addr[3];
                        HEAP16[sa + 2 >> 1] = _htons(port);
                        break;
                    default:
                        return 5;
                }
                return 0;
            }
            var DNS = {
                address_map: {
                    id: 1,
                    addrs: {
                    },
                    names: {
                    }
                },
                lookup_name: function(name) {
                    var res = inetPton4(name);
                    if (res !== null) return name;
                    res = inetPton6(name);
                    if (res !== null) return name;
                    var addr;
                    if (DNS.address_map.addrs[name]) addr = DNS.address_map.addrs[name];
                    else {
                        var id = DNS.address_map.id++;
                        assert(id < 65535, "exceeded max address mappings of 65535");
                        addr = "172.29." + (id & 255) + "." + (id & 65280);
                        DNS.address_map.names[addr] = name;
                        DNS.address_map.addrs[name] = addr;
                    }
                    return addr;
                },
                lookup_addr: function(addr) {
                    if (DNS.address_map.names[addr]) return DNS.address_map.names[addr];
                    return null;
                }
            };
            function ___sys_accept4(fd, addr, addrlen, flags) {
                try {
                    var sock = getSocketFromFD(fd);
                    var newsock = sock.sock_ops.accept(sock);
                    if (addr) var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen);
                    return newsock.stream.fd;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_access(path, amode) {
                try {
                    path = SYSCALLS.getStr(path);
                    return SYSCALLS.doAccess(path, amode);
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function inetNtop4(addr) {
                return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
            }
            function inetNtop6(ints) {
                var str = "";
                var word = 0;
                var longest = 0;
                var lastzero = 0;
                var zstart = 0;
                var len = 0;
                var i = 0;
                var parts = [
                    ints[0] & 65535,
                    ints[0] >> 16,
                    ints[1] & 65535,
                    ints[1] >> 16,
                    ints[2] & 65535,
                    ints[2] >> 16,
                    ints[3] & 65535,
                    ints[3] >> 16
                ];
                var hasipv4 = true;
                var v4part = "";
                for(i = 0; i < 5; i++)if (parts[i] !== 0) {
                    hasipv4 = false;
                    break;
                }
                if (hasipv4) {
                    v4part = inetNtop4(parts[6] | parts[7] << 16);
                    if (parts[5] === -1) {
                        str = "::ffff:";
                        str += v4part;
                        return str;
                    }
                    if (parts[5] === 0) {
                        str = "::";
                        if (v4part === "0.0.0.0") v4part = "";
                        if (v4part === "0.0.0.1") v4part = "1";
                        str += v4part;
                        return str;
                    }
                }
                for(word = 0; word < 8; word++){
                    if (parts[word] === 0) {
                        if (word - lastzero > 1) len = 0;
                        lastzero = word;
                        len++;
                    }
                    if (len > longest) {
                        longest = len;
                        zstart = word - longest + 1;
                    }
                }
                for(word = 0; word < 8; word++){
                    if (longest > 1) {
                        if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
                            if (word === zstart) {
                                str += ":";
                                if (zstart === 0) str += ":";
                            }
                            continue;
                        }
                    }
                    str += Number(_ntohs(parts[word] & 65535)).toString(16);
                    str += word < 7 ? ":" : "";
                }
                return str;
            }
            function readSockaddr(sa, salen) {
                var family = HEAP16[sa >> 1];
                var port = _ntohs(HEAPU16[sa + 2 >> 1]);
                var addr;
                switch(family){
                    case 2:
                        if (salen !== 16) return {
                            errno: 28
                        };
                        addr = HEAP32[sa + 4 >> 2];
                        addr = inetNtop4(addr);
                        break;
                    case 10:
                        if (salen !== 28) return {
                            errno: 28
                        };
                        addr = [
                            HEAP32[sa + 8 >> 2],
                            HEAP32[sa + 12 >> 2],
                            HEAP32[sa + 16 >> 2],
                            HEAP32[sa + 20 >> 2]
                        ];
                        addr = inetNtop6(addr);
                        break;
                    default:
                        return {
                            errno: 5
                        };
                }
                return {
                    family: family,
                    addr: addr,
                    port: port
                };
            }
            function getSocketAddress(addrp, addrlen, allowNull) {
                if (allowNull && addrp === 0) return null;
                var info = readSockaddr(addrp, addrlen);
                if (info.errno) throw new FS.ErrnoError(info.errno);
                info.addr = DNS.lookup_addr(info.addr) || info.addr;
                return info;
            }
            function ___sys_bind(fd, addr, addrlen) {
                try {
                    var sock = getSocketFromFD(fd);
                    var info = getSocketAddress(addr, addrlen);
                    sock.sock_ops.bind(sock, info.addr, info.port);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_chdir(path) {
                try {
                    path = SYSCALLS.getStr(path);
                    FS.chdir(path);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_chmod(path, mode) {
                try {
                    path = SYSCALLS.getStr(path);
                    FS.chmod(path, mode);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_connect(fd, addr, addrlen) {
                try {
                    var sock = getSocketFromFD(fd);
                    var info = getSocketAddress(addr, addrlen);
                    sock.sock_ops.connect(sock, info.addr, info.port);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_fcntl64(fd, cmd, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var stream = SYSCALLS.getStreamFromFD(fd);
                    switch(cmd){
                        case 0:
                            var arg = SYSCALLS.get();
                            if (arg < 0) return -28;
                            var newStream;
                            newStream = FS.open(stream.path, stream.flags, 0, arg);
                            return newStream.fd;
                        case 1:
                        case 2:
                            return 0;
                        case 3:
                            return stream.flags;
                        case 4:
                            var arg = SYSCALLS.get();
                            stream.flags |= arg;
                            return 0;
                        case 12:
                            var arg = SYSCALLS.get();
                            var offset = 0;
                            HEAP16[arg + offset >> 1] = 2;
                            return 0;
                        case 13:
                        case 14:
                            return 0;
                        case 16:
                        case 8:
                            return -28;
                        case 9:
                            setErrNo(28);
                            return -1;
                        default:
                            return -28;
                    }
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_getcwd(buf, size) {
                try {
                    if (size === 0) return -28;
                    var cwd = FS.cwd();
                    var cwdLengthInBytes = lengthBytesUTF8(cwd);
                    if (size < cwdLengthInBytes + 1) return -68;
                    stringToUTF8(cwd, buf, size);
                    return buf;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_getdents64(fd, dirp, count) {
                try {
                    var stream = SYSCALLS.getStreamFromFD(fd);
                    if (!stream.getdents) stream.getdents = FS.readdir(stream.path);
                    var struct_size = 280;
                    var pos = 0;
                    var off = FS.llseek(stream, 0, 1);
                    var idx = Math.floor(off / struct_size);
                    while(idx < stream.getdents.length && pos + struct_size <= count){
                        var id;
                        var type;
                        var name = stream.getdents[idx];
                        if (name[0] === ".") {
                            id = 1;
                            type = 4;
                        } else {
                            var child = FS.lookupNode(stream.node, name);
                            id = child.id;
                            type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
                        }
                        tempI64 = [
                            id >>> 0,
                            (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                        ], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
                        tempI64 = [
                            (idx + 1) * struct_size >>> 0,
                            (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                        ], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
                        HEAP16[dirp + pos + 16 >> 1] = 280;
                        HEAP8[dirp + pos + 18 >> 0] = type;
                        stringToUTF8(name, dirp + pos + 19, 256);
                        pos += struct_size;
                        idx += 1;
                    }
                    FS.llseek(stream, idx * struct_size, 0);
                    return pos;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_getpid() {
                return 42;
            }
            function ___sys_getsockname(fd, addr, addrlen) {
                try {
                    err1("__sys_getsockname " + fd);
                    var sock = getSocketFromFD(fd);
                    var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport, addrlen);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_getsockopt(fd, level, optname, optval, optlen) {
                try {
                    var sock = getSocketFromFD(fd);
                    if (level === 1) {
                        if (optname === 4) {
                            HEAP32[optval >> 2] = sock.error;
                            HEAP32[optlen >> 2] = 4;
                            sock.error = null;
                            return 0;
                        }
                    }
                    return -50;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_ioctl(fd, op, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var stream = SYSCALLS.getStreamFromFD(fd);
                    switch(op){
                        case 21509:
                        case 21505:
                            if (!stream.tty) return -59;
                            return 0;
                        case 21510:
                        case 21511:
                        case 21512:
                        case 21506:
                        case 21507:
                        case 21508:
                            if (!stream.tty) return -59;
                            return 0;
                        case 21519:
                            if (!stream.tty) return -59;
                            var argp = SYSCALLS.get();
                            HEAP32[argp >> 2] = 0;
                            return 0;
                        case 21520:
                            if (!stream.tty) return -59;
                            return -28;
                        case 21531:
                            var argp = SYSCALLS.get();
                            return FS.ioctl(stream, op, argp);
                        case 21523:
                            if (!stream.tty) return -59;
                            return 0;
                        case 21524:
                            if (!stream.tty) return -59;
                            return 0;
                        default:
                            abort("bad ioctl syscall " + op);
                    }
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_listen(fd, backlog) {
                try {
                    var sock = getSocketFromFD(fd);
                    sock.sock_ops.listen(sock, backlog);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_lstat64(path, buf) {
                try {
                    path = SYSCALLS.getStr(path);
                    return SYSCALLS.doStat(FS.lstat, path, buf);
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_mkdir(path, mode) {
                try {
                    path = SYSCALLS.getStr(path);
                    return SYSCALLS.doMkdir(path, mode);
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_open(path, flags, varargs) {
                SYSCALLS.varargs = varargs;
                try {
                    var pathname = SYSCALLS.getStr(path);
                    var mode = varargs ? SYSCALLS.get() : 0;
                    var stream = FS.open(pathname, flags, mode);
                    return stream.fd;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_poll(fds, nfds, timeout) {
                try {
                    var nonzero = 0;
                    for(var i = 0; i < nfds; i++){
                        var pollfd = fds + 8 * i;
                        var fd = HEAP32[pollfd >> 2];
                        var events = HEAP16[pollfd + 4 >> 1];
                        var mask = 32;
                        var stream = FS.getStream(fd);
                        if (stream) {
                            mask = SYSCALLS.DEFAULT_POLLMASK;
                            if (stream.stream_ops.poll) mask = stream.stream_ops.poll(stream);
                        }
                        mask &= events | 24;
                        if (mask) nonzero++;
                        HEAP16[pollfd + 6 >> 1] = mask;
                    }
                    return nonzero;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_readlink(path, buf, bufsize) {
                try {
                    path = SYSCALLS.getStr(path);
                    return SYSCALLS.doReadlink(path, buf, bufsize);
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_recvfrom(fd, buf, len, flags, addr, addrlen) {
                try {
                    var sock = getSocketFromFD(fd);
                    var msg = sock.sock_ops.recvmsg(sock, len);
                    if (!msg) return 0;
                    if (addr) var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
                    HEAPU8.set(msg.buffer, buf);
                    return msg.buffer.byteLength;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_rename(old_path, new_path) {
                try {
                    old_path = SYSCALLS.getStr(old_path);
                    new_path = SYSCALLS.getStr(new_path);
                    FS.rename(old_path, new_path);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_rmdir(path) {
                try {
                    path = SYSCALLS.getStr(path);
                    FS.rmdir(path);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_sendto(fd, message, length, flags, addr, addr_len) {
                try {
                    var sock = getSocketFromFD(fd);
                    var dest = getSocketAddress(addr, addr_len, true);
                    if (!dest) return FS.write(sock.stream, HEAP8, message, length);
                    else return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port);
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            var ___sys_setsockopt = function(fd) {
                err1("warning: unsupported syscall: __sys_setsockopt");
                try {
                    return -50;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            };
            function ___sys_socket(domain, type, protocol) {
                try {
                    var sock = SOCKFS.createSocket(domain, type, protocol);
                    return sock.stream.fd;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_stat64(path, buf) {
                try {
                    path = SYSCALLS.getStr(path);
                    return SYSCALLS.doStat(FS.stat, path, buf);
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_statfs64(path, size, buf) {
                try {
                    path = SYSCALLS.getStr(path);
                    HEAP32[buf + 4 >> 2] = 4096;
                    HEAP32[buf + 40 >> 2] = 4096;
                    HEAP32[buf + 8 >> 2] = 1000000;
                    HEAP32[buf + 12 >> 2] = 500000;
                    HEAP32[buf + 16 >> 2] = 500000;
                    HEAP32[buf + 20 >> 2] = FS.nextInode;
                    HEAP32[buf + 24 >> 2] = 1000000;
                    HEAP32[buf + 28 >> 2] = 42;
                    HEAP32[buf + 44 >> 2] = 2;
                    HEAP32[buf + 36 >> 2] = 255;
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_symlink(target, linkpath) {
                try {
                    target = SYSCALLS.getStr(target);
                    linkpath = SYSCALLS.getStr(linkpath);
                    FS.symlink(target, linkpath);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            function ___sys_unlink(path) {
                try {
                    path = SYSCALLS.getStr(path);
                    FS.unlink(path);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return -e.errno;
                }
            }
            var ___sys_wait4 = function() {
                err1("warning: unsupported syscall: __sys_wait4");
                return -52;
            };
            function __emscripten_throw_longjmp() {
                throw "longjmp";
            }
            function _abort() {
                abort();
            }
            var _emscripten_get_now;
            _emscripten_get_now = function() {
                return performance.now();
            };
            var _emscripten_get_now_is_monotonic = true;
            function _clock_gettime(clk_id, tp) {
                var now;
                if (clk_id === 0) now = Date.now();
                else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) now = _emscripten_get_now();
                else {
                    setErrNo(28);
                    return -1;
                }
                HEAP32[tp >> 2] = now / 1000 | 0;
                HEAP32[tp + 4 >> 2] = now % 1000 * 1000000 | 0;
                return 0;
            }
            function _dlclose(handle) {
                abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
            }
            function _dlerror() {
                abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
            }
            function _dlopen(filename, flag) {
                abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
            }
            function _dlsym(handle, symbol) {
                abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
            }
            function _emscripten_set_main_loop_timing(mode, value) {
                Browser.mainLoop.timingMode = mode;
                Browser.mainLoop.timingValue = value;
                if (!Browser.mainLoop.func) return 1;
                if (!Browser.mainLoop.running) {
                    runtimeKeepalivePush();
                    Browser.mainLoop.running = true;
                }
                if (mode == 0) {
                    Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
                        var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
                        setTimeout(Browser.mainLoop.runner, timeUntilNextTick);
                    };
                    Browser.mainLoop.method = "timeout";
                } else if (mode == 1) {
                    Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
                        Browser.requestAnimationFrame(Browser.mainLoop.runner);
                    };
                    Browser.mainLoop.method = "rAF";
                } else if (mode == 2) {
                    if (typeof setImmediate === "undefined") {
                        var setImmediates = [];
                        var emscriptenMainLoopMessageId = "setimmediate";
                        var Browser_setImmediate_messageHandler = function(event) {
                            if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
                                event.stopPropagation();
                                setImmediates.shift()();
                            }
                        };
                        addEventListener("message", Browser_setImmediate_messageHandler, true);
                        setImmediate = function Browser_emulated_setImmediate(func) {
                            setImmediates.push(func);
                            if (ENVIRONMENT_IS_WORKER) {
                                if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
                                Module["setImmediates"].push(func);
                                postMessage({
                                    target: emscriptenMainLoopMessageId
                                });
                            } else postMessage(emscriptenMainLoopMessageId, "*");
                        };
                    }
                    Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
                        setImmediate(Browser.mainLoop.runner);
                    };
                    Browser.mainLoop.method = "immediate";
                }
                return 0;
            }
            function _emscripten_webgl_do_commit_frame() {
                if (!GL.currentContext || !GL.currentContext.GLctx) return -3;
                if (GL.currentContext.defaultFbo) {
                    GL.blitOffscreenFramebuffer(GL.currentContext);
                    return 0;
                }
                if (!GL.currentContext.attributes.explicitSwapControl) return -3;
                return 0;
            }
            function _emscripten_webgl_commit_frame() {
                return _emscripten_webgl_do_commit_frame();
            }
            function runtimeKeepalivePush() {
                runtimeKeepaliveCounter += 1;
            }
            function _exit(status) {
                exit(status);
            }
            function maybeExit() {
                if (!keepRuntimeAlive()) try {
                    _exit(EXITSTATUS);
                } catch (e) {
                    if (e instanceof ExitStatus) return;
                    throw e;
                }
            }
            function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
                assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
                Browser.mainLoop.func = browserIterationFunc;
                Browser.mainLoop.arg = arg;
                var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
                function checkIsRunning() {
                    if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
                        runtimeKeepalivePop();
                        maybeExit();
                        return false;
                    }
                    return true;
                }
                Browser.mainLoop.running = false;
                Browser.mainLoop.runner = function Browser_mainLoop_runner() {
                    if (ABORT) return;
                    if (Browser.mainLoop.queue.length > 0) {
                        var start = Date.now();
                        var blocker = Browser.mainLoop.queue.shift();
                        blocker.func(blocker.arg);
                        if (Browser.mainLoop.remainingBlockers) {
                            var remaining = Browser.mainLoop.remainingBlockers;
                            var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
                            if (blocker.counted) Browser.mainLoop.remainingBlockers = next;
                            else {
                                next = next + 0.5;
                                Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9;
                            }
                        }
                        console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + " ms");
                        Browser.mainLoop.updateStatus();
                        if (!checkIsRunning()) return;
                        setTimeout(Browser.mainLoop.runner, 0);
                        return;
                    }
                    if (!checkIsRunning()) return;
                    Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
                    if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
                        Browser.mainLoop.scheduler();
                        return;
                    } else if (Browser.mainLoop.timingMode == 0) Browser.mainLoop.tickStartTime = _emscripten_get_now();
                    Browser.mainLoop.runIter(browserIterationFunc);
                    if (!checkIsRunning()) return;
                    if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
                    Browser.mainLoop.scheduler();
                };
                if (!noSetTiming) {
                    if (fps && fps > 0) _emscripten_set_main_loop_timing(0, 1000 / fps);
                    else _emscripten_set_main_loop_timing(1, 1);
                    Browser.mainLoop.scheduler();
                }
                if (simulateInfiniteLoop) throw "unwind";
            }
            function callUserCallback(func, synchronous) {
                if (ABORT) return;
                if (synchronous) {
                    func();
                    return;
                }
                try {
                    func();
                } catch (e) {
                    if (e instanceof ExitStatus) return;
                    else if (e !== "unwind") {
                        if (e && typeof e === "object" && e.stack) err1("exception thrown: " + [
                            e,
                            e.stack
                        ]);
                        throw e;
                    }
                }
                maybeExit();
            }
            function safeSetTimeout(func, timeout) {
                runtimeKeepalivePush();
                return setTimeout(function() {
                    runtimeKeepalivePop();
                    callUserCallback(func);
                }, timeout);
            }
            function runtimeKeepalivePop() {
                runtimeKeepaliveCounter -= 1;
            }
            var Browser = {
                mainLoop: {
                    running: false,
                    scheduler: null,
                    method: "",
                    currentlyRunningMainloop: 0,
                    func: null,
                    arg: 0,
                    timingMode: 0,
                    timingValue: 0,
                    currentFrameNumber: 0,
                    queue: [],
                    pause: function() {
                        Browser.mainLoop.scheduler = null;
                        Browser.mainLoop.currentlyRunningMainloop++;
                    },
                    resume: function() {
                        Browser.mainLoop.currentlyRunningMainloop++;
                        var timingMode = Browser.mainLoop.timingMode;
                        var timingValue = Browser.mainLoop.timingValue;
                        var func = Browser.mainLoop.func;
                        Browser.mainLoop.func = null;
                        setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
                        _emscripten_set_main_loop_timing(timingMode, timingValue);
                        Browser.mainLoop.scheduler();
                    },
                    updateStatus: function() {
                        if (Module["setStatus"]) {
                            var message = Module["statusMessage"] || "Please wait...";
                            var remaining = Browser.mainLoop.remainingBlockers;
                            var expected = Browser.mainLoop.expectedBlockers;
                            if (remaining) {
                                if (remaining < expected) Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")");
                                else Module["setStatus"](message);
                            } else Module["setStatus"]("");
                        }
                    },
                    runIter: function(func) {
                        if (ABORT) return;
                        if (Module["preMainLoop"]) {
                            var preRet = Module["preMainLoop"]();
                            if (preRet === false) return;
                        }
                        callUserCallback(func);
                        if (Module["postMainLoop"]) Module["postMainLoop"]();
                    }
                },
                isFullscreen: false,
                pointerLock: false,
                moduleContextCreatedCallbacks: [],
                workers: [],
                init: function() {
                    if (!Module["preloadPlugins"]) Module["preloadPlugins"] = [];
                    if (Browser.initted) return;
                    Browser.initted = true;
                    try {
                        new Blob;
                        Browser.hasBlobConstructor = true;
                    } catch (e10) {
                        Browser.hasBlobConstructor = false;
                        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
                    }
                    Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
                    Browser.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
                    if (!Module.noImageDecoding && typeof Browser.URLObject === "undefined") {
                        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
                        Module.noImageDecoding = true;
                    }
                    var imagePlugin = {
                    };
                    imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
                        return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
                    };
                    imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
                        var b = null;
                        if (Browser.hasBlobConstructor) try {
                            b = new Blob([
                                byteArray
                            ], {
                                type: Browser.getMimetype(name)
                            });
                            if (b.size !== byteArray.length) b = new Blob([
                                new Uint8Array(byteArray).buffer
                            ], {
                                type: Browser.getMimetype(name)
                            });
                        } catch (e) {
                            warnOnce("Blob constructor present but fails: " + e + "; falling back to blob builder");
                        }
                        if (!b) {
                            var bb = new Browser.BlobBuilder;
                            bb.append(new Uint8Array(byteArray).buffer);
                            b = bb.getBlob();
                        }
                        var url = Browser.URLObject.createObjectURL(b);
                        var img = new Image;
                        img.onload = function img_onload() {
                            assert(img.complete, "Image " + name + " could not be decoded");
                            var canvas = document.createElement("canvas");
                            canvas.width = img.width;
                            canvas.height = img.height;
                            var ctx = canvas.getContext("2d");
                            ctx.drawImage(img, 0, 0);
                            Module["preloadedImages"][name] = canvas;
                            Browser.URLObject.revokeObjectURL(url);
                            if (onload) onload(byteArray);
                        };
                        img.onerror = function img_onerror(event) {
                            console.log("Image " + url + " could not be decoded");
                            if (onerror) onerror();
                        };
                        img.src = url;
                    };
                    Module["preloadPlugins"].push(imagePlugin);
                    var audioPlugin = {
                    };
                    audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
                        return !Module.noAudioDecoding && name.substr(-4) in {
                            ".ogg": 1,
                            ".wav": 1,
                            ".mp3": 1
                        };
                    };
                    audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
                        var done = false;
                        function finish(audio) {
                            if (done) return;
                            done = true;
                            Module["preloadedAudios"][name] = audio;
                            if (onload) onload(byteArray);
                        }
                        function fail() {
                            if (done) return;
                            done = true;
                            Module["preloadedAudios"][name] = new Audio;
                            if (onerror) onerror();
                        }
                        if (Browser.hasBlobConstructor) {
                            try {
                                var b = new Blob([
                                    byteArray
                                ], {
                                    type: Browser.getMimetype(name)
                                });
                            } catch (e) {
                                return fail();
                            }
                            var url = Browser.URLObject.createObjectURL(b);
                            var audio1 = new Audio;
                            audio1.addEventListener("canplaythrough", function() {
                                finish(audio1);
                            }, false);
                            audio1.onerror = function audio_onerror(event) {
                                if (done) return;
                                console.log("warning: browser could not fully decode audio " + name + ", trying slower base64 approach");
                                function encode64(data) {
                                    var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                                    var PAD = "=";
                                    var ret = "";
                                    var leftchar = 0;
                                    var leftbits = 0;
                                    for(var i = 0; i < data.length; i++){
                                        leftchar = leftchar << 8 | data[i];
                                        leftbits += 8;
                                        while(leftbits >= 6){
                                            var curr = leftchar >> leftbits - 6 & 63;
                                            leftbits -= 6;
                                            ret += BASE[curr];
                                        }
                                    }
                                    if (leftbits == 2) {
                                        ret += BASE[(leftchar & 3) << 4];
                                        ret += PAD + PAD;
                                    } else if (leftbits == 4) {
                                        ret += BASE[(leftchar & 15) << 2];
                                        ret += PAD;
                                    }
                                    return ret;
                                }
                                audio1.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
                                finish(audio1);
                            };
                            audio1.src = url;
                            safeSetTimeout(function() {
                                finish(audio1);
                            }, 10000);
                        } else return fail();
                    };
                    Module["preloadPlugins"].push(audioPlugin);
                    function pointerLockChange() {
                        Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"];
                    }
                    var canvas1 = Module["canvas"];
                    if (canvas1) {
                        canvas1.requestPointerLock = canvas1["requestPointerLock"] || canvas1["mozRequestPointerLock"] || canvas1["webkitRequestPointerLock"] || canvas1["msRequestPointerLock"] || function() {
                        };
                        canvas1.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function() {
                        };
                        canvas1.exitPointerLock = canvas1.exitPointerLock.bind(document);
                        document.addEventListener("pointerlockchange", pointerLockChange, false);
                        document.addEventListener("mozpointerlockchange", pointerLockChange, false);
                        document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
                        document.addEventListener("mspointerlockchange", pointerLockChange, false);
                        if (Module["elementPointerLock"]) canvas1.addEventListener("click", function(ev) {
                            if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                                Module["canvas"].requestPointerLock();
                                ev.preventDefault();
                            }
                        }, false);
                    }
                },
                createContext: function(canvas, useWebGL, setInModule, webGLContextAttributes) {
                    if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
                    var ctx;
                    var contextHandle;
                    if (useWebGL) {
                        var contextAttributes = {
                            antialias: false,
                            alpha: false,
                            majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
                        };
                        if (webGLContextAttributes) for(var attribute in webGLContextAttributes)contextAttributes[attribute] = webGLContextAttributes[attribute];
                        if (typeof GL !== "undefined") {
                            contextHandle = GL.createContext(canvas, contextAttributes);
                            if (contextHandle) ctx = GL.getContext(contextHandle).GLctx;
                        }
                    } else ctx = canvas.getContext("2d");
                    if (!ctx) return null;
                    if (setInModule) {
                        if (!useWebGL) assert(typeof GLctx1 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
                        Module.ctx = ctx;
                        if (useWebGL) GL.makeContextCurrent(contextHandle);
                        Module.useWebGL = useWebGL;
                        Browser.moduleContextCreatedCallbacks.forEach(function(callback) {
                            callback();
                        });
                        Browser.init();
                    }
                    return ctx;
                },
                destroyContext: function(canvas, useWebGL, setInModule) {
                },
                fullscreenHandlersInstalled: false,
                lockPointer: undefined,
                resizeCanvas: undefined,
                requestFullscreen: function(lockPointer, resizeCanvas) {
                    Browser.lockPointer = lockPointer;
                    Browser.resizeCanvas = resizeCanvas;
                    if (typeof Browser.lockPointer === "undefined") Browser.lockPointer = true;
                    if (typeof Browser.resizeCanvas === "undefined") Browser.resizeCanvas = false;
                    var canvas = Module["canvas"];
                    function fullscreenChange() {
                        Browser.isFullscreen = false;
                        var canvasContainer = canvas.parentNode;
                        if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
                            canvas.exitFullscreen = Browser.exitFullscreen;
                            if (Browser.lockPointer) canvas.requestPointerLock();
                            Browser.isFullscreen = true;
                            if (Browser.resizeCanvas) Browser.setFullscreenCanvasSize();
                            else Browser.updateCanvasDimensions(canvas);
                        } else {
                            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
                            canvasContainer.parentNode.removeChild(canvasContainer);
                            if (Browser.resizeCanvas) Browser.setWindowedCanvasSize();
                            else Browser.updateCanvasDimensions(canvas);
                        }
                        if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
                        if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen);
                    }
                    if (!Browser.fullscreenHandlersInstalled) {
                        Browser.fullscreenHandlersInstalled = true;
                        document.addEventListener("fullscreenchange", fullscreenChange, false);
                        document.addEventListener("mozfullscreenchange", fullscreenChange, false);
                        document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
                        document.addEventListener("MSFullscreenChange", fullscreenChange, false);
                    }
                    var canvasContainer1 = document.createElement("div");
                    canvas.parentNode.insertBefore(canvasContainer1, canvas);
                    canvasContainer1.appendChild(canvas);
                    canvasContainer1.requestFullscreen = canvasContainer1["requestFullscreen"] || canvasContainer1["mozRequestFullScreen"] || canvasContainer1["msRequestFullscreen"] || (canvasContainer1["webkitRequestFullscreen"] ? function() {
                        canvasContainer1["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
                    } : null) || (canvasContainer1["webkitRequestFullScreen"] ? function() {
                        canvasContainer1["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
                    } : null);
                    canvasContainer1.requestFullscreen();
                },
                exitFullscreen: function() {
                    if (!Browser.isFullscreen) return false;
                    var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function() {
                    };
                    CFS.apply(document, []);
                    return true;
                },
                nextRAF: 0,
                fakeRequestAnimationFrame: function(func) {
                    var now = Date.now();
                    if (Browser.nextRAF === 0) Browser.nextRAF = now + 1000 / 60;
                    else while(now + 2 >= Browser.nextRAF)Browser.nextRAF += 1000 / 60;
                    var delay = Math.max(Browser.nextRAF - now, 0);
                    setTimeout(func, delay);
                },
                requestAnimationFrame: function(func) {
                    if (typeof requestAnimationFrame === "function") {
                        requestAnimationFrame(func);
                        return;
                    }
                    var RAF = Browser.fakeRequestAnimationFrame;
                    RAF(func);
                },
                safeSetTimeout: function(func) {
                    return safeSetTimeout(func);
                },
                safeRequestAnimationFrame: function(func) {
                    runtimeKeepalivePush();
                    return Browser.requestAnimationFrame(function() {
                        runtimeKeepalivePop();
                        callUserCallback(func);
                    });
                },
                getMimetype: function(name) {
                    return ({
                        "jpg": "image/jpeg",
                        "jpeg": "image/jpeg",
                        "png": "image/png",
                        "bmp": "image/bmp",
                        "ogg": "audio/ogg",
                        "wav": "audio/wav",
                        "mp3": "audio/mpeg"
                    })[name.substr(name.lastIndexOf(".") + 1)];
                },
                getUserMedia: function(func) {
                    if (!window.getUserMedia) window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"];
                    window.getUserMedia(func);
                },
                getMovementX: function(event) {
                    return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
                },
                getMovementY: function(event) {
                    return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
                },
                getMouseWheelDelta: function(event) {
                    var delta = 0;
                    switch(event.type){
                        case "DOMMouseScroll":
                            delta = event.detail / 3;
                            break;
                        case "mousewheel":
                            delta = event.wheelDelta / 120;
                            break;
                        case "wheel":
                            delta = event.deltaY;
                            switch(event.deltaMode){
                                case 0:
                                    delta /= 100;
                                    break;
                                case 1:
                                    delta /= 3;
                                    break;
                                case 2:
                                    delta *= 80;
                                    break;
                                default:
                                    throw "unrecognized mouse wheel delta mode: " + event.deltaMode;
                            }
                            break;
                        default:
                            throw "unrecognized mouse wheel event: " + event.type;
                    }
                    return delta;
                },
                mouseX: 0,
                mouseY: 0,
                mouseMovementX: 0,
                mouseMovementY: 0,
                touches: {
                },
                lastTouches: {
                },
                calculateMouseEvent: function(event) {
                    if (Browser.pointerLock) {
                        if (event.type != "mousemove" && "mozMovementX" in event) Browser.mouseMovementX = Browser.mouseMovementY = 0;
                        else {
                            Browser.mouseMovementX = Browser.getMovementX(event);
                            Browser.mouseMovementY = Browser.getMovementY(event);
                        }
                        if (typeof SDL != "undefined") {
                            Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
                            Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
                        } else {
                            Browser.mouseX += Browser.mouseMovementX;
                            Browser.mouseY += Browser.mouseMovementY;
                        }
                    } else {
                        var rect = Module["canvas"].getBoundingClientRect();
                        var cw = Module["canvas"].width;
                        var ch = Module["canvas"].height;
                        var scrollX = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
                        var scrollY = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
                        if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
                            var touch = event.touch;
                            if (touch === undefined) return;
                            var adjustedX = touch.pageX - (scrollX + rect.left);
                            var adjustedY = touch.pageY - (scrollY + rect.top);
                            adjustedX = adjustedX * (cw / rect.width);
                            adjustedY = adjustedY * (ch / rect.height);
                            var coords = {
                                x: adjustedX,
                                y: adjustedY
                            };
                            if (event.type === "touchstart") {
                                Browser.lastTouches[touch.identifier] = coords;
                                Browser.touches[touch.identifier] = coords;
                            } else if (event.type === "touchend" || event.type === "touchmove") {
                                var last = Browser.touches[touch.identifier];
                                if (!last) last = coords;
                                Browser.lastTouches[touch.identifier] = last;
                                Browser.touches[touch.identifier] = coords;
                            }
                            return;
                        }
                        var x = event.pageX - (scrollX + rect.left);
                        var y = event.pageY - (scrollY + rect.top);
                        x = x * (cw / rect.width);
                        y = y * (ch / rect.height);
                        Browser.mouseMovementX = x - Browser.mouseX;
                        Browser.mouseMovementY = y - Browser.mouseY;
                        Browser.mouseX = x;
                        Browser.mouseY = y;
                    }
                },
                resizeListeners: [],
                updateResizeListeners: function() {
                    var canvas = Module["canvas"];
                    Browser.resizeListeners.forEach(function(listener) {
                        listener(canvas.width, canvas.height);
                    });
                },
                setCanvasSize: function(width, height, noUpdates) {
                    var canvas = Module["canvas"];
                    Browser.updateCanvasDimensions(canvas, width, height);
                    if (!noUpdates) Browser.updateResizeListeners();
                },
                windowedWidth: 0,
                windowedHeight: 0,
                setFullscreenCanvasSize: function() {
                    if (typeof SDL != "undefined") {
                        var flags = HEAPU32[SDL.screen >> 2];
                        flags = flags | 8388608;
                        HEAP32[SDL.screen >> 2] = flags;
                    }
                    Browser.updateCanvasDimensions(Module["canvas"]);
                    Browser.updateResizeListeners();
                },
                setWindowedCanvasSize: function() {
                    if (typeof SDL != "undefined") {
                        var flags = HEAPU32[SDL.screen >> 2];
                        flags = flags & -8388609;
                        HEAP32[SDL.screen >> 2] = flags;
                    }
                    Browser.updateCanvasDimensions(Module["canvas"]);
                    Browser.updateResizeListeners();
                },
                updateCanvasDimensions: function(canvas, wNative, hNative) {
                    if (wNative && hNative) {
                        canvas.widthNative = wNative;
                        canvas.heightNative = hNative;
                    } else {
                        wNative = canvas.widthNative;
                        hNative = canvas.heightNative;
                    }
                    var w = wNative;
                    var h = hNative;
                    if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
                        if (w / h < Module["forcedAspectRatio"]) w = Math.round(h * Module["forcedAspectRatio"]);
                        else h = Math.round(w / Module["forcedAspectRatio"]);
                    }
                    if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
                        var factor = Math.min(screen.width / w, screen.height / h);
                        w = Math.round(w * factor);
                        h = Math.round(h * factor);
                    }
                    if (Browser.resizeCanvas) {
                        if (canvas.width != w) canvas.width = w;
                        if (canvas.height != h) canvas.height = h;
                        if (typeof canvas.style != "undefined") {
                            canvas.style.removeProperty("width");
                            canvas.style.removeProperty("height");
                        }
                    } else {
                        if (canvas.width != wNative) canvas.width = wNative;
                        if (canvas.height != hNative) canvas.height = hNative;
                        if (typeof canvas.style != "undefined") {
                            if (w != wNative || h != hNative) {
                                canvas.style.setProperty("width", w + "px", "important");
                                canvas.style.setProperty("height", h + "px", "important");
                            } else {
                                canvas.style.removeProperty("width");
                                canvas.style.removeProperty("height");
                            }
                        }
                    }
                }
            };
            function _emscripten_cancel_main_loop() {
                Browser.mainLoop.pause();
                Browser.mainLoop.func = null;
            }
            function _emscripten_force_exit(status) {
                noExitRuntime = false;
                runtimeKeepaliveCounter = 0;
                exit(status);
            }
            function __webgl_enable_ANGLE_instanced_arrays(ctx) {
                var ext = ctx.getExtension("ANGLE_instanced_arrays");
                if (ext) {
                    ctx["vertexAttribDivisor"] = function(index, divisor) {
                        ext["vertexAttribDivisorANGLE"](index, divisor);
                    };
                    ctx["drawArraysInstanced"] = function(mode, first, count, primcount) {
                        ext["drawArraysInstancedANGLE"](mode, first, count, primcount);
                    };
                    ctx["drawElementsInstanced"] = function(mode, count, type, indices, primcount) {
                        ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
                    };
                    return 1;
                }
            }
            function __webgl_enable_OES_vertex_array_object(ctx) {
                var ext = ctx.getExtension("OES_vertex_array_object");
                if (ext) {
                    ctx["createVertexArray"] = function() {
                        return ext["createVertexArrayOES"]();
                    };
                    ctx["deleteVertexArray"] = function(vao) {
                        ext["deleteVertexArrayOES"](vao);
                    };
                    ctx["bindVertexArray"] = function(vao) {
                        ext["bindVertexArrayOES"](vao);
                    };
                    ctx["isVertexArray"] = function(vao) {
                        return ext["isVertexArrayOES"](vao);
                    };
                    return 1;
                }
            }
            function __webgl_enable_WEBGL_draw_buffers(ctx) {
                var ext = ctx.getExtension("WEBGL_draw_buffers");
                if (ext) {
                    ctx["drawBuffers"] = function(n, bufs) {
                        ext["drawBuffersWEBGL"](n, bufs);
                    };
                    return 1;
                }
            }
            function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
                return !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
            }
            function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
                return !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
            }
            function __webgl_enable_WEBGL_multi_draw(ctx) {
                return !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"));
            }
            var GL = {
                counter: 1,
                buffers: [],
                programs: [],
                framebuffers: [],
                renderbuffers: [],
                textures: [],
                shaders: [],
                vaos: [],
                contexts: [],
                offscreenCanvases: {
                },
                queries: [],
                samplers: [],
                transformFeedbacks: [],
                syncs: [],
                stringCache: {
                },
                stringiCache: {
                },
                unpackAlignment: 4,
                recordError: function recordError(errorCode) {
                    if (!GL.lastError) GL.lastError = errorCode;
                },
                getNewId: function(table) {
                    var ret = GL.counter++;
                    for(var i = table.length; i < ret; i++)table[i] = null;
                    return ret;
                },
                getSource: function(shader, count, string, length) {
                    var source = "";
                    for(var i = 0; i < count; ++i){
                        var len = length ? HEAP32[length + i * 4 >> 2] : -1;
                        source += UTF8ToString(HEAP32[string + i * 4 >> 2], len < 0 ? undefined : len);
                    }
                    return source;
                },
                createContext: function(canvas, webGLContextAttributes) {
                    if (webGLContextAttributes.renderViaOffscreenBackBuffer) webGLContextAttributes["preserveDrawingBuffer"] = true;
                    if (!canvas.getContextSafariWebGL2Fixed) {
                        canvas.getContextSafariWebGL2Fixed = canvas.getContext;
                        canvas.getContext = function(ver, attrs) {
                            var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
                            return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null;
                        };
                    }
                    var ctx = webGLContextAttributes.majorVersion > 1 ? canvas.getContext("webgl2", webGLContextAttributes) : canvas.getContext("webgl", webGLContextAttributes);
                    if (!ctx) return 0;
                    var handle = GL.registerContext(ctx, webGLContextAttributes);
                    return handle;
                },
                enableOffscreenFramebufferAttributes: function(webGLContextAttributes) {
                    webGLContextAttributes.renderViaOffscreenBackBuffer = true;
                    webGLContextAttributes.preserveDrawingBuffer = true;
                },
                createOffscreenFramebuffer: function(context) {
                    var gl = context.GLctx;
                    var fbo = gl.createFramebuffer();
                    gl.bindFramebuffer(36160, fbo);
                    context.defaultFbo = fbo;
                    context.defaultFboForbidBlitFramebuffer = false;
                    if (gl.getContextAttributes().antialias) context.defaultFboForbidBlitFramebuffer = true;
                    else {
                        var firefoxMatch = navigator.userAgent.toLowerCase().match(/firefox\/(\d\d)/);
                        if (firefoxMatch != null) {
                            var firefoxVersion = firefoxMatch[1];
                            context.defaultFboForbidBlitFramebuffer = firefoxVersion < 67;
                        }
                    }
                    context.defaultColorTarget = gl.createTexture();
                    context.defaultDepthTarget = gl.createRenderbuffer();
                    GL.resizeOffscreenFramebuffer(context);
                    gl.bindTexture(3553, context.defaultColorTarget);
                    gl.texParameteri(3553, 10241, 9728);
                    gl.texParameteri(3553, 10240, 9728);
                    gl.texParameteri(3553, 10242, 33071);
                    gl.texParameteri(3553, 10243, 33071);
                    gl.texImage2D(3553, 0, 6408, gl.canvas.width, gl.canvas.height, 0, 6408, 5121, null);
                    gl.framebufferTexture2D(36160, 36064, 3553, context.defaultColorTarget, 0);
                    gl.bindTexture(3553, null);
                    var depthTarget = gl.createRenderbuffer();
                    gl.bindRenderbuffer(36161, context.defaultDepthTarget);
                    gl.renderbufferStorage(36161, 33189, gl.canvas.width, gl.canvas.height);
                    gl.framebufferRenderbuffer(36160, 36096, 36161, context.defaultDepthTarget);
                    gl.bindRenderbuffer(36161, null);
                    var vertices = [
                        -1,
                        -1,
                        -1,
                        1,
                        1,
                        -1,
                        1,
                        1
                    ];
                    var vb = gl.createBuffer();
                    gl.bindBuffer(34962, vb);
                    gl.bufferData(34962, new Float32Array(vertices), 35044);
                    gl.bindBuffer(34962, null);
                    context.blitVB = vb;
                    var vsCode = "attribute vec2 pos;varying lowp vec2 tex;void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }";
                    var vs = gl.createShader(35633);
                    gl.shaderSource(vs, vsCode);
                    gl.compileShader(vs);
                    var fsCode = "varying lowp vec2 tex;uniform sampler2D sampler;void main() { gl_FragColor = texture2D(sampler, tex); }";
                    var fs = gl.createShader(35632);
                    gl.shaderSource(fs, fsCode);
                    gl.compileShader(fs);
                    var blitProgram = gl.createProgram();
                    gl.attachShader(blitProgram, vs);
                    gl.attachShader(blitProgram, fs);
                    gl.linkProgram(blitProgram);
                    context.blitProgram = blitProgram;
                    context.blitPosLoc = gl.getAttribLocation(blitProgram, "pos");
                    gl.useProgram(blitProgram);
                    gl.uniform1i(gl.getUniformLocation(blitProgram, "sampler"), 0);
                    gl.useProgram(null);
                    context.defaultVao = undefined;
                    if (gl.createVertexArray) {
                        context.defaultVao = gl.createVertexArray();
                        gl.bindVertexArray(context.defaultVao);
                        gl.enableVertexAttribArray(context.blitPosLoc);
                        gl.bindVertexArray(null);
                    }
                },
                resizeOffscreenFramebuffer: function(context) {
                    var gl = context.GLctx;
                    if (context.defaultColorTarget) {
                        var prevTextureBinding = gl.getParameter(32873);
                        gl.bindTexture(3553, context.defaultColorTarget);
                        gl.texImage2D(3553, 0, 6408, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, 6408, 5121, null);
                        gl.bindTexture(3553, prevTextureBinding);
                    }
                    if (context.defaultDepthTarget) {
                        var prevRenderBufferBinding = gl.getParameter(36007);
                        gl.bindRenderbuffer(36161, context.defaultDepthTarget);
                        gl.renderbufferStorage(36161, 33189, gl.drawingBufferWidth, gl.drawingBufferHeight);
                        gl.bindRenderbuffer(36161, prevRenderBufferBinding);
                    }
                },
                blitOffscreenFramebuffer: function(context) {
                    var gl = context.GLctx;
                    var prevScissorTest = gl.getParameter(3089);
                    if (prevScissorTest) gl.disable(3089);
                    var prevFbo = gl.getParameter(36006);
                    if (gl.blitFramebuffer && !context.defaultFboForbidBlitFramebuffer) {
                        gl.bindFramebuffer(36008, context.defaultFbo);
                        gl.bindFramebuffer(36009, null);
                        gl.blitFramebuffer(0, 0, gl.canvas.width, gl.canvas.height, 0, 0, gl.canvas.width, gl.canvas.height, 16384, 9728);
                    } else {
                        gl.bindFramebuffer(36160, null);
                        var prevProgram = gl.getParameter(35725);
                        gl.useProgram(context.blitProgram);
                        var prevVB = gl.getParameter(34964);
                        gl.bindBuffer(34962, context.blitVB);
                        var prevActiveTexture = gl.getParameter(34016);
                        gl.activeTexture(33984);
                        var prevTextureBinding = gl.getParameter(32873);
                        gl.bindTexture(3553, context.defaultColorTarget);
                        var prevBlend = gl.getParameter(3042);
                        if (prevBlend) gl.disable(3042);
                        var prevCullFace = gl.getParameter(2884);
                        if (prevCullFace) gl.disable(2884);
                        var prevDepthTest = gl.getParameter(2929);
                        if (prevDepthTest) gl.disable(2929);
                        var prevStencilTest = gl.getParameter(2960);
                        if (prevStencilTest) gl.disable(2960);
                        function draw() {
                            gl.vertexAttribPointer(context.blitPosLoc, 2, 5126, false, 0, 0);
                            gl.drawArrays(5, 0, 4);
                        }
                        if (context.defaultVao) {
                            var prevVAO = gl.getParameter(34229);
                            gl.bindVertexArray(context.defaultVao);
                            draw();
                            gl.bindVertexArray(prevVAO);
                        } else {
                            var prevVertexAttribPointer = {
                                buffer: gl.getVertexAttrib(context.blitPosLoc, 34975),
                                size: gl.getVertexAttrib(context.blitPosLoc, 34339),
                                stride: gl.getVertexAttrib(context.blitPosLoc, 34340),
                                type: gl.getVertexAttrib(context.blitPosLoc, 34341),
                                normalized: gl.getVertexAttrib(context.blitPosLoc, 34922),
                                pointer: gl.getVertexAttribOffset(context.blitPosLoc, 34373)
                            };
                            var maxVertexAttribs = gl.getParameter(34921);
                            var prevVertexAttribEnables = [];
                            for(var i = 0; i < maxVertexAttribs; ++i){
                                var prevEnabled = gl.getVertexAttrib(i, 34338);
                                var wantEnabled = i == context.blitPosLoc;
                                if (prevEnabled && !wantEnabled) gl.disableVertexAttribArray(i);
                                if (!prevEnabled && wantEnabled) gl.enableVertexAttribArray(i);
                                prevVertexAttribEnables[i] = prevEnabled;
                            }
                            draw();
                            for(var i = 0; i < maxVertexAttribs; ++i){
                                var prevEnabled = prevVertexAttribEnables[i];
                                var nowEnabled = i == context.blitPosLoc;
                                if (prevEnabled && !nowEnabled) gl.enableVertexAttribArray(i);
                                if (!prevEnabled && nowEnabled) gl.disableVertexAttribArray(i);
                            }
                            gl.bindBuffer(34962, prevVertexAttribPointer.buffer);
                            gl.vertexAttribPointer(context.blitPosLoc, prevVertexAttribPointer.size, prevVertexAttribPointer.type, prevVertexAttribPointer.normalized, prevVertexAttribPointer.stride, prevVertexAttribPointer.offset);
                        }
                        if (prevStencilTest) gl.enable(2960);
                        if (prevDepthTest) gl.enable(2929);
                        if (prevCullFace) gl.enable(2884);
                        if (prevBlend) gl.enable(3042);
                        gl.bindTexture(3553, prevTextureBinding);
                        gl.activeTexture(prevActiveTexture);
                        gl.bindBuffer(34962, prevVB);
                        gl.useProgram(prevProgram);
                    }
                    gl.bindFramebuffer(36160, prevFbo);
                    if (prevScissorTest) gl.enable(3089);
                },
                registerContext: function(ctx, webGLContextAttributes) {
                    var handle = GL.getNewId(GL.contexts);
                    var context = {
                        handle: handle,
                        attributes: webGLContextAttributes,
                        version: webGLContextAttributes.majorVersion,
                        GLctx: ctx
                    };
                    if (ctx.canvas) ctx.canvas.GLctxObject = context;
                    GL.contexts[handle] = context;
                    if (typeof webGLContextAttributes.enableExtensionsByDefault === "undefined" || webGLContextAttributes.enableExtensionsByDefault) GL.initExtensions(context);
                    if (webGLContextAttributes.renderViaOffscreenBackBuffer) GL.createOffscreenFramebuffer(context);
                    return handle;
                },
                makeContextCurrent: function(contextHandle) {
                    GL.currentContext = GL.contexts[contextHandle];
                    Module.ctx = GLctx1 = GL.currentContext && GL.currentContext.GLctx;
                    return !(contextHandle && !GLctx1);
                },
                getContext: function(contextHandle) {
                    return GL.contexts[contextHandle];
                },
                deleteContext: function(contextHandle) {
                    if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
                    if (typeof JSEvents === "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
                    if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
                    GL.contexts[contextHandle] = null;
                },
                initExtensions: function(context) {
                    if (!context) context = GL.currentContext;
                    if (context.initExtensionsDone) return;
                    context.initExtensionsDone = true;
                    var GLctx = context.GLctx;
                    __webgl_enable_ANGLE_instanced_arrays(GLctx);
                    __webgl_enable_OES_vertex_array_object(GLctx);
                    __webgl_enable_WEBGL_draw_buffers(GLctx);
                    __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
                    __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
                    if (context.version >= 2) GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
                    if (context.version < 2 || !GLctx.disjointTimerQueryExt) GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
                    __webgl_enable_WEBGL_multi_draw(GLctx);
                    var exts = GLctx.getSupportedExtensions() || [];
                    exts.forEach(function(ext) {
                        if (!ext.includes("lose_context") && !ext.includes("debug")) GLctx.getExtension(ext);
                    });
                }
            };
            function _emscripten_glActiveTexture(x0) {
                GLctx1["activeTexture"](x0);
            }
            function _emscripten_glAttachShader(program, shader) {
                GLctx1.attachShader(GL.programs[program], GL.shaders[shader]);
            }
            function _emscripten_glBeginQuery(target, id) {
                GLctx1["beginQuery"](target, GL.queries[id]);
            }
            function _emscripten_glBeginQueryEXT(target, id) {
                GLctx1.disjointTimerQueryExt["beginQueryEXT"](target, GL.queries[id]);
            }
            function _emscripten_glBeginTransformFeedback(x0) {
                GLctx1["beginTransformFeedback"](x0);
            }
            function _emscripten_glBindAttribLocation(program, index, name) {
                GLctx1.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
            }
            function _emscripten_glBindBuffer(target, buffer) {
                if (target == 35051) GLctx1.currentPixelPackBufferBinding = buffer;
                else if (target == 35052) GLctx1.currentPixelUnpackBufferBinding = buffer;
                GLctx1.bindBuffer(target, GL.buffers[buffer]);
            }
            function _emscripten_glBindBufferBase(target, index, buffer) {
                GLctx1["bindBufferBase"](target, index, GL.buffers[buffer]);
            }
            function _emscripten_glBindBufferRange(target, index, buffer, offset, ptrsize) {
                GLctx1["bindBufferRange"](target, index, GL.buffers[buffer], offset, ptrsize);
            }
            function _emscripten_glBindFramebuffer(target, framebuffer) {
                GLctx1.bindFramebuffer(target, framebuffer ? GL.framebuffers[framebuffer] : GL.currentContext.defaultFbo);
            }
            function _emscripten_glBindRenderbuffer(target, renderbuffer) {
                GLctx1.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
            }
            function _emscripten_glBindSampler(unit, sampler) {
                GLctx1["bindSampler"](unit, GL.samplers[sampler]);
            }
            function _emscripten_glBindTexture(target, texture) {
                GLctx1.bindTexture(target, GL.textures[texture]);
            }
            function _emscripten_glBindTransformFeedback(target, id) {
                GLctx1["bindTransformFeedback"](target, GL.transformFeedbacks[id]);
            }
            function _emscripten_glBindVertexArray(vao) {
                GLctx1["bindVertexArray"](GL.vaos[vao]);
            }
            function _emscripten_glBindVertexArrayOES(vao) {
                GLctx1["bindVertexArray"](GL.vaos[vao]);
            }
            function _emscripten_glBlendColor(x0, x1, x2, x3) {
                GLctx1["blendColor"](x0, x1, x2, x3);
            }
            function _emscripten_glBlendEquation(x0) {
                GLctx1["blendEquation"](x0);
            }
            function _emscripten_glBlendEquationSeparate(x0, x1) {
                GLctx1["blendEquationSeparate"](x0, x1);
            }
            function _emscripten_glBlendFunc(x0, x1) {
                GLctx1["blendFunc"](x0, x1);
            }
            function _emscripten_glBlendFuncSeparate(x0, x1, x2, x3) {
                GLctx1["blendFuncSeparate"](x0, x1, x2, x3);
            }
            function _emscripten_glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
                GLctx1["blitFramebuffer"](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9);
            }
            function _emscripten_glBufferData(target, size, data, usage) {
                if (GL.currentContext.version >= 2) {
                    if (data) GLctx1.bufferData(target, HEAPU8, usage, data, size);
                    else GLctx1.bufferData(target, size, usage);
                } else GLctx1.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage);
            }
            function _emscripten_glBufferSubData(target, offset, size, data) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.bufferSubData(target, offset, HEAPU8, data, size);
                    return;
                }
                GLctx1.bufferSubData(target, offset, HEAPU8.subarray(data, data + size));
            }
            function _emscripten_glCheckFramebufferStatus(x0) {
                return GLctx1["checkFramebufferStatus"](x0);
            }
            function _emscripten_glClear(x0) {
                GLctx1["clear"](x0);
            }
            function _emscripten_glClearBufferfi(x0, x1, x2, x3) {
                GLctx1["clearBufferfi"](x0, x1, x2, x3);
            }
            function _emscripten_glClearBufferfv(buffer, drawbuffer, value) {
                GLctx1["clearBufferfv"](buffer, drawbuffer, HEAPF32, value >> 2);
            }
            function _emscripten_glClearBufferiv(buffer, drawbuffer, value) {
                GLctx1["clearBufferiv"](buffer, drawbuffer, HEAP32, value >> 2);
            }
            function _emscripten_glClearBufferuiv(buffer, drawbuffer, value) {
                GLctx1["clearBufferuiv"](buffer, drawbuffer, HEAPU32, value >> 2);
            }
            function _emscripten_glClearColor(x0, x1, x2, x3) {
                GLctx1["clearColor"](x0, x1, x2, x3);
            }
            function _emscripten_glClearDepthf(x0) {
                GLctx1["clearDepth"](x0);
            }
            function _emscripten_glClearStencil(x0) {
                GLctx1["clearStencil"](x0);
            }
            function convertI32PairToI53(lo, hi) {
                return (lo >>> 0) + hi * 4294967296;
            }
            function _emscripten_glClientWaitSync(sync, flags, timeoutLo, timeoutHi) {
                return GLctx1.clientWaitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi));
            }
            function _emscripten_glColorMask(red, green, blue, alpha) {
                GLctx1.colorMask(!!red, !!green, !!blue, !!alpha);
            }
            function _emscripten_glCompileShader(shader) {
                GLctx1.compileShader(GL.shaders[shader]);
            }
            function _emscripten_glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["compressedTexImage2D"](target, level, internalFormat, width, height, border, imageSize, data);
                    else GLctx1["compressedTexImage2D"](target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
                    return;
                }
                GLctx1["compressedTexImage2D"](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray(data, data + imageSize) : null);
            }
            function _emscripten_glCompressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data) {
                if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["compressedTexImage3D"](target, level, internalFormat, width, height, depth, border, imageSize, data);
                else GLctx1["compressedTexImage3D"](target, level, internalFormat, width, height, depth, border, HEAPU8, data, imageSize);
            }
            function _emscripten_glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, imageSize, data);
                    else GLctx1["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
                    return;
                }
                GLctx1["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray(data, data + imageSize) : null);
            }
            function _emscripten_glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
                if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
                else GLctx1["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize);
            }
            function _emscripten_glCopyBufferSubData(x0, x1, x2, x3, x4) {
                GLctx1["copyBufferSubData"](x0, x1, x2, x3, x4);
            }
            function _emscripten_glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
                GLctx1["copyTexImage2D"](x0, x1, x2, x3, x4, x5, x6, x7);
            }
            function _emscripten_glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
                GLctx1["copyTexSubImage2D"](x0, x1, x2, x3, x4, x5, x6, x7);
            }
            function _emscripten_glCopyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8) {
                GLctx1["copyTexSubImage3D"](x0, x1, x2, x3, x4, x5, x6, x7, x8);
            }
            function _emscripten_glCreateProgram() {
                var id = GL.getNewId(GL.programs);
                var program = GLctx1.createProgram();
                program.name = id;
                program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
                program.uniformIdCounter = 1;
                GL.programs[id] = program;
                return id;
            }
            function _emscripten_glCreateShader(shaderType) {
                var id = GL.getNewId(GL.shaders);
                GL.shaders[id] = GLctx1.createShader(shaderType);
                return id;
            }
            function _emscripten_glCullFace(x0) {
                GLctx1["cullFace"](x0);
            }
            function _emscripten_glDeleteBuffers(n, buffers) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[buffers + i * 4 >> 2];
                    var buffer = GL.buffers[id];
                    if (!buffer) continue;
                    GLctx1.deleteBuffer(buffer);
                    buffer.name = 0;
                    GL.buffers[id] = null;
                    if (id == GLctx1.currentPixelPackBufferBinding) GLctx1.currentPixelPackBufferBinding = 0;
                    if (id == GLctx1.currentPixelUnpackBufferBinding) GLctx1.currentPixelUnpackBufferBinding = 0;
                }
            }
            function _emscripten_glDeleteFramebuffers(n, framebuffers) {
                for(var i = 0; i < n; ++i){
                    var id = HEAP32[framebuffers + i * 4 >> 2];
                    var framebuffer = GL.framebuffers[id];
                    if (!framebuffer) continue;
                    GLctx1.deleteFramebuffer(framebuffer);
                    framebuffer.name = 0;
                    GL.framebuffers[id] = null;
                }
            }
            function _emscripten_glDeleteProgram(id) {
                if (!id) return;
                var program = GL.programs[id];
                if (!program) {
                    GL.recordError(1281);
                    return;
                }
                GLctx1.deleteProgram(program);
                program.name = 0;
                GL.programs[id] = null;
            }
            function _emscripten_glDeleteQueries(n, ids) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[ids + i * 4 >> 2];
                    var query = GL.queries[id];
                    if (!query) continue;
                    GLctx1["deleteQuery"](query);
                    GL.queries[id] = null;
                }
            }
            function _emscripten_glDeleteQueriesEXT(n, ids) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[ids + i * 4 >> 2];
                    var query = GL.queries[id];
                    if (!query) continue;
                    GLctx1.disjointTimerQueryExt["deleteQueryEXT"](query);
                    GL.queries[id] = null;
                }
            }
            function _emscripten_glDeleteRenderbuffers(n, renderbuffers) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[renderbuffers + i * 4 >> 2];
                    var renderbuffer = GL.renderbuffers[id];
                    if (!renderbuffer) continue;
                    GLctx1.deleteRenderbuffer(renderbuffer);
                    renderbuffer.name = 0;
                    GL.renderbuffers[id] = null;
                }
            }
            function _emscripten_glDeleteSamplers(n, samplers) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[samplers + i * 4 >> 2];
                    var sampler = GL.samplers[id];
                    if (!sampler) continue;
                    GLctx1["deleteSampler"](sampler);
                    sampler.name = 0;
                    GL.samplers[id] = null;
                }
            }
            function _emscripten_glDeleteShader(id) {
                if (!id) return;
                var shader = GL.shaders[id];
                if (!shader) {
                    GL.recordError(1281);
                    return;
                }
                GLctx1.deleteShader(shader);
                GL.shaders[id] = null;
            }
            function _emscripten_glDeleteSync(id) {
                if (!id) return;
                var sync = GL.syncs[id];
                if (!sync) {
                    GL.recordError(1281);
                    return;
                }
                GLctx1.deleteSync(sync);
                sync.name = 0;
                GL.syncs[id] = null;
            }
            function _emscripten_glDeleteTextures(n, textures) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[textures + i * 4 >> 2];
                    var texture = GL.textures[id];
                    if (!texture) continue;
                    GLctx1.deleteTexture(texture);
                    texture.name = 0;
                    GL.textures[id] = null;
                }
            }
            function _emscripten_glDeleteTransformFeedbacks(n, ids) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[ids + i * 4 >> 2];
                    var transformFeedback = GL.transformFeedbacks[id];
                    if (!transformFeedback) continue;
                    GLctx1["deleteTransformFeedback"](transformFeedback);
                    transformFeedback.name = 0;
                    GL.transformFeedbacks[id] = null;
                }
            }
            function _emscripten_glDeleteVertexArrays(n, vaos) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[vaos + i * 4 >> 2];
                    GLctx1["deleteVertexArray"](GL.vaos[id]);
                    GL.vaos[id] = null;
                }
            }
            function _emscripten_glDeleteVertexArraysOES(n, vaos) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[vaos + i * 4 >> 2];
                    GLctx1["deleteVertexArray"](GL.vaos[id]);
                    GL.vaos[id] = null;
                }
            }
            function _emscripten_glDepthFunc(x0) {
                GLctx1["depthFunc"](x0);
            }
            function _emscripten_glDepthMask(flag) {
                GLctx1.depthMask(!!flag);
            }
            function _emscripten_glDepthRangef(x0, x1) {
                GLctx1["depthRange"](x0, x1);
            }
            function _emscripten_glDetachShader(program, shader) {
                GLctx1.detachShader(GL.programs[program], GL.shaders[shader]);
            }
            function _emscripten_glDisable(x0) {
                GLctx1["disable"](x0);
            }
            function _emscripten_glDisableVertexAttribArray(index) {
                GLctx1.disableVertexAttribArray(index);
            }
            function _emscripten_glDrawArrays(mode, first, count) {
                GLctx1.drawArrays(mode, first, count);
            }
            function _emscripten_glDrawArraysInstanced(mode, first, count, primcount) {
                GLctx1["drawArraysInstanced"](mode, first, count, primcount);
            }
            function _emscripten_glDrawArraysInstancedANGLE(mode, first, count, primcount) {
                GLctx1["drawArraysInstanced"](mode, first, count, primcount);
            }
            function _emscripten_glDrawArraysInstancedARB(mode, first, count, primcount) {
                GLctx1["drawArraysInstanced"](mode, first, count, primcount);
            }
            function _emscripten_glDrawArraysInstancedEXT(mode, first, count, primcount) {
                GLctx1["drawArraysInstanced"](mode, first, count, primcount);
            }
            function _emscripten_glDrawArraysInstancedNV(mode, first, count, primcount) {
                GLctx1["drawArraysInstanced"](mode, first, count, primcount);
            }
            var tempFixedLengthArray = [];
            function _emscripten_glDrawBuffers(n, bufs) {
                var bufArray = tempFixedLengthArray[n];
                for(var i = 0; i < n; i++)bufArray[i] = HEAP32[bufs + i * 4 >> 2];
                GLctx1["drawBuffers"](bufArray);
            }
            function _emscripten_glDrawBuffersEXT(n, bufs) {
                var bufArray = tempFixedLengthArray[n];
                for(var i = 0; i < n; i++)bufArray[i] = HEAP32[bufs + i * 4 >> 2];
                GLctx1["drawBuffers"](bufArray);
            }
            function _emscripten_glDrawBuffersWEBGL(n, bufs) {
                var bufArray = tempFixedLengthArray[n];
                for(var i = 0; i < n; i++)bufArray[i] = HEAP32[bufs + i * 4 >> 2];
                GLctx1["drawBuffers"](bufArray);
            }
            function _emscripten_glDrawElements(mode, count, type, indices) {
                GLctx1.drawElements(mode, count, type, indices);
            }
            function _emscripten_glDrawElementsInstanced(mode, count, type, indices, primcount) {
                GLctx1["drawElementsInstanced"](mode, count, type, indices, primcount);
            }
            function _emscripten_glDrawElementsInstancedANGLE(mode, count, type, indices, primcount) {
                GLctx1["drawElementsInstanced"](mode, count, type, indices, primcount);
            }
            function _emscripten_glDrawElementsInstancedARB(mode, count, type, indices, primcount) {
                GLctx1["drawElementsInstanced"](mode, count, type, indices, primcount);
            }
            function _emscripten_glDrawElementsInstancedEXT(mode, count, type, indices, primcount) {
                GLctx1["drawElementsInstanced"](mode, count, type, indices, primcount);
            }
            function _emscripten_glDrawElementsInstancedNV(mode, count, type, indices, primcount) {
                GLctx1["drawElementsInstanced"](mode, count, type, indices, primcount);
            }
            function _glDrawElements(mode, count, type, indices) {
                GLctx1.drawElements(mode, count, type, indices);
            }
            function _emscripten_glDrawRangeElements(mode, start, end, count, type, indices) {
                _glDrawElements(mode, count, type, indices);
            }
            function _emscripten_glEnable(x0) {
                GLctx1["enable"](x0);
            }
            function _emscripten_glEnableVertexAttribArray(index) {
                GLctx1.enableVertexAttribArray(index);
            }
            function _emscripten_glEndQuery(x0) {
                GLctx1["endQuery"](x0);
            }
            function _emscripten_glEndQueryEXT(target) {
                GLctx1.disjointTimerQueryExt["endQueryEXT"](target);
            }
            function _emscripten_glEndTransformFeedback() {
                GLctx1["endTransformFeedback"]();
            }
            function _emscripten_glFenceSync(condition, flags) {
                var sync = GLctx1.fenceSync(condition, flags);
                if (sync) {
                    var id = GL.getNewId(GL.syncs);
                    sync.name = id;
                    GL.syncs[id] = sync;
                    return id;
                } else return 0;
            }
            function _emscripten_glFinish() {
                GLctx1["finish"]();
            }
            function _emscripten_glFlush() {
                GLctx1["flush"]();
            }
            function _emscripten_glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
                GLctx1.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer]);
            }
            function _emscripten_glFramebufferTexture2D(target, attachment, textarget, texture, level) {
                GLctx1.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level);
            }
            function _emscripten_glFramebufferTextureLayer(target, attachment, texture, level, layer) {
                GLctx1.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
            }
            function _emscripten_glFrontFace(x0) {
                GLctx1["frontFace"](x0);
            }
            function __glGenObject(n, buffers, createFunction, objectTable) {
                for(var i = 0; i < n; i++){
                    var buffer = GLctx1[createFunction]();
                    var id = buffer && GL.getNewId(objectTable);
                    if (buffer) {
                        buffer.name = id;
                        objectTable[id] = buffer;
                    } else GL.recordError(1282);
                    HEAP32[buffers + i * 4 >> 2] = id;
                }
            }
            function _emscripten_glGenBuffers(n, buffers) {
                __glGenObject(n, buffers, "createBuffer", GL.buffers);
            }
            function _emscripten_glGenFramebuffers(n, ids) {
                __glGenObject(n, ids, "createFramebuffer", GL.framebuffers);
            }
            function _emscripten_glGenQueries(n, ids) {
                __glGenObject(n, ids, "createQuery", GL.queries);
            }
            function _emscripten_glGenQueriesEXT(n, ids) {
                for(var i = 0; i < n; i++){
                    var query = GLctx1.disjointTimerQueryExt["createQueryEXT"]();
                    if (!query) {
                        GL.recordError(1282);
                        while(i < n)HEAP32[ids + (i++) * 4 >> 2] = 0;
                        return;
                    }
                    var id = GL.getNewId(GL.queries);
                    query.name = id;
                    GL.queries[id] = query;
                    HEAP32[ids + i * 4 >> 2] = id;
                }
            }
            function _emscripten_glGenRenderbuffers(n, renderbuffers) {
                __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers);
            }
            function _emscripten_glGenSamplers(n, samplers) {
                __glGenObject(n, samplers, "createSampler", GL.samplers);
            }
            function _emscripten_glGenTextures(n, textures) {
                __glGenObject(n, textures, "createTexture", GL.textures);
            }
            function _emscripten_glGenTransformFeedbacks(n, ids) {
                __glGenObject(n, ids, "createTransformFeedback", GL.transformFeedbacks);
            }
            function _emscripten_glGenVertexArrays(n, arrays) {
                __glGenObject(n, arrays, "createVertexArray", GL.vaos);
            }
            function _emscripten_glGenVertexArraysOES(n, arrays) {
                __glGenObject(n, arrays, "createVertexArray", GL.vaos);
            }
            function _emscripten_glGenerateMipmap(x0) {
                GLctx1["generateMipmap"](x0);
            }
            function __glGetActiveAttribOrUniform(funcName, program, index, bufSize, length, size, type, name) {
                program = GL.programs[program];
                var info = GLctx1[funcName](program, index);
                if (info) {
                    var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
                    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
                    if (size) HEAP32[size >> 2] = info.size;
                    if (type) HEAP32[type >> 2] = info.type;
                }
            }
            function _emscripten_glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
                __glGetActiveAttribOrUniform("getActiveAttrib", program, index, bufSize, length, size, type, name);
            }
            function _emscripten_glGetActiveUniform(program, index, bufSize, length, size, type, name) {
                __glGetActiveAttribOrUniform("getActiveUniform", program, index, bufSize, length, size, type, name);
            }
            function _emscripten_glGetActiveUniformBlockName(program, uniformBlockIndex, bufSize, length, uniformBlockName) {
                program = GL.programs[program];
                var result = GLctx1["getActiveUniformBlockName"](program, uniformBlockIndex);
                if (!result) return;
                if (uniformBlockName && bufSize > 0) {
                    var numBytesWrittenExclNull = stringToUTF8(result, uniformBlockName, bufSize);
                    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
                } else if (length) HEAP32[length >> 2] = 0;
            }
            function _emscripten_glGetActiveUniformBlockiv(program, uniformBlockIndex, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                program = GL.programs[program];
                if (pname == 35393) {
                    var name = GLctx1["getActiveUniformBlockName"](program, uniformBlockIndex);
                    HEAP32[params >> 2] = name.length + 1;
                    return;
                }
                var result = GLctx1["getActiveUniformBlockParameter"](program, uniformBlockIndex, pname);
                if (result === null) return;
                if (pname == 35395) for(var i = 0; i < result.length; i++)HEAP32[params + i * 4 >> 2] = result[i];
                else HEAP32[params >> 2] = result;
            }
            function _emscripten_glGetActiveUniformsiv(program, uniformCount, uniformIndices, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                if (uniformCount > 0 && uniformIndices == 0) {
                    GL.recordError(1281);
                    return;
                }
                program = GL.programs[program];
                var ids = [];
                for(var i = 0; i < uniformCount; i++)ids.push(HEAP32[uniformIndices + i * 4 >> 2]);
                var result = GLctx1["getActiveUniforms"](program, ids, pname);
                if (!result) return;
                var len = result.length;
                for(var i = 0; i < len; i++)HEAP32[params + i * 4 >> 2] = result[i];
            }
            function _emscripten_glGetAttachedShaders(program, maxCount, count, shaders) {
                var result = GLctx1.getAttachedShaders(GL.programs[program]);
                var len = result.length;
                if (len > maxCount) len = maxCount;
                HEAP32[count >> 2] = len;
                for(var i = 0; i < len; ++i){
                    var id = GL.shaders.indexOf(result[i]);
                    HEAP32[shaders + i * 4 >> 2] = id;
                }
            }
            function _emscripten_glGetAttribLocation(program, name) {
                return GLctx1.getAttribLocation(GL.programs[program], UTF8ToString(name));
            }
            function writeI53ToI64(ptr, num) {
                HEAPU32[ptr >> 2] = num;
                HEAPU32[ptr + 4 >> 2] = (num - HEAPU32[ptr >> 2]) / 4294967296;
            }
            function emscriptenWebGLGet(name_, p, type) {
                if (!p) {
                    GL.recordError(1281);
                    return;
                }
                var ret = undefined;
                switch(name_){
                    case 36346:
                        ret = 1;
                        break;
                    case 36344:
                        if (type != 0 && type != 1) GL.recordError(1280);
                        return;
                    case 34814:
                    case 36345:
                        ret = 0;
                        break;
                    case 34466:
                        var formats = GLctx1.getParameter(34467);
                        ret = formats ? formats.length : 0;
                        break;
                    case 33309:
                        if (GL.currentContext.version < 2) {
                            GL.recordError(1282);
                            return;
                        }
                        var exts = GLctx1.getSupportedExtensions() || [];
                        ret = 2 * exts.length;
                        break;
                    case 33307:
                    case 33308:
                        if (GL.currentContext.version < 2) {
                            GL.recordError(1280);
                            return;
                        }
                        ret = name_ == 33307 ? 3 : 0;
                        break;
                }
                if (ret === undefined) {
                    var result = GLctx1.getParameter(name_);
                    switch(typeof result){
                        case "number":
                            ret = result;
                            break;
                        case "boolean":
                            ret = result ? 1 : 0;
                            break;
                        case "string":
                            GL.recordError(1280);
                            return;
                        case "object":
                            if (result === null) switch(name_){
                                case 34964:
                                case 35725:
                                case 34965:
                                case 36006:
                                case 36007:
                                case 32873:
                                case 34229:
                                case 36662:
                                case 36663:
                                case 35053:
                                case 35055:
                                case 36010:
                                case 35097:
                                case 35869:
                                case 32874:
                                case 36389:
                                case 35983:
                                case 35368:
                                case 34068:
                                    ret = 0;
                                    break;
                                default:
                                    GL.recordError(1280);
                                    return;
                            }
                            else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
                                for(var i = 0; i < result.length; ++i)switch(type){
                                    case 0:
                                        HEAP32[p + i * 4 >> 2] = result[i];
                                        break;
                                    case 2:
                                        HEAPF32[p + i * 4 >> 2] = result[i];
                                        break;
                                    case 4:
                                        HEAP8[p + i >> 0] = result[i] ? 1 : 0;
                                        break;
                                }
                                return;
                            } else try {
                                ret = result.name | 0;
                            } catch (e) {
                                GL.recordError(1280);
                                err1("GL_INVALID_ENUM in glGet" + type + "v: Unknown object returned from WebGL getParameter(" + name_ + ")! (error: " + e + ")");
                                return;
                            }
                            break;
                        default:
                            GL.recordError(1280);
                            err1("GL_INVALID_ENUM in glGet" + type + "v: Native code calling glGet" + type + "v(" + name_ + ") and it returns " + result + " of type " + typeof result + "!");
                            return;
                    }
                }
                switch(type){
                    case 1:
                        writeI53ToI64(p, ret);
                        break;
                    case 0:
                        HEAP32[p >> 2] = ret;
                        break;
                    case 2:
                        HEAPF32[p >> 2] = ret;
                        break;
                    case 4:
                        HEAP8[p >> 0] = ret ? 1 : 0;
                        break;
                }
            }
            function _emscripten_glGetBooleanv(name_, p) {
                emscriptenWebGLGet(name_, p, 4);
            }
            function _emscripten_glGetBufferParameteri64v(target, value, data) {
                if (!data) {
                    GL.recordError(1281);
                    return;
                }
                writeI53ToI64(data, GLctx1.getBufferParameter(target, value));
            }
            function _emscripten_glGetBufferParameteriv(target, value, data) {
                if (!data) {
                    GL.recordError(1281);
                    return;
                }
                HEAP32[data >> 2] = GLctx1.getBufferParameter(target, value);
            }
            function _emscripten_glGetError() {
                var error = GLctx1.getError() || GL.lastError;
                GL.lastError = 0;
                return error;
            }
            function _emscripten_glGetFloatv(name_, p) {
                emscriptenWebGLGet(name_, p, 2);
            }
            function _emscripten_glGetFragDataLocation(program, name) {
                return GLctx1["getFragDataLocation"](GL.programs[program], UTF8ToString(name));
            }
            function _emscripten_glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
                var result = GLctx1.getFramebufferAttachmentParameter(target, attachment, pname);
                if (result instanceof WebGLRenderbuffer || result instanceof WebGLTexture) result = result.name | 0;
                HEAP32[params >> 2] = result;
            }
            function emscriptenWebGLGetIndexed(target, index, data, type) {
                if (!data) {
                    GL.recordError(1281);
                    return;
                }
                var result = GLctx1["getIndexedParameter"](target, index);
                var ret;
                switch(typeof result){
                    case "boolean":
                        ret = result ? 1 : 0;
                        break;
                    case "number":
                        ret = result;
                        break;
                    case "object":
                        if (result === null) switch(target){
                            case 35983:
                            case 35368:
                                ret = 0;
                                break;
                            default:
                                GL.recordError(1280);
                                return;
                        }
                        else if (result instanceof WebGLBuffer) ret = result.name | 0;
                        else {
                            GL.recordError(1280);
                            return;
                        }
                        break;
                    default:
                        GL.recordError(1280);
                        return;
                }
                switch(type){
                    case 1:
                        writeI53ToI64(data, ret);
                        break;
                    case 0:
                        HEAP32[data >> 2] = ret;
                        break;
                    case 2:
                        HEAPF32[data >> 2] = ret;
                        break;
                    case 4:
                        HEAP8[data >> 0] = ret ? 1 : 0;
                        break;
                    default:
                        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + type;
                }
            }
            function _emscripten_glGetInteger64i_v(target, index, data) {
                emscriptenWebGLGetIndexed(target, index, data, 1);
            }
            function _emscripten_glGetInteger64v(name_, p) {
                emscriptenWebGLGet(name_, p, 1);
            }
            function _emscripten_glGetIntegeri_v(target, index, data) {
                emscriptenWebGLGetIndexed(target, index, data, 0);
            }
            function _emscripten_glGetIntegerv(name_, p) {
                emscriptenWebGLGet(name_, p, 0);
            }
            function _emscripten_glGetInternalformativ(target, internalformat, pname, bufSize, params) {
                if (bufSize < 0) {
                    GL.recordError(1281);
                    return;
                }
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                var ret = GLctx1["getInternalformatParameter"](target, internalformat, pname);
                if (ret === null) return;
                for(var i = 0; i < ret.length && i < bufSize; ++i)HEAP32[params + i >> 2] = ret[i];
            }
            function _emscripten_glGetProgramBinary(program, bufSize, length, binaryFormat, binary) {
                GL.recordError(1282);
            }
            function _emscripten_glGetProgramInfoLog(program, maxLength, length, infoLog) {
                var log = GLctx1.getProgramInfoLog(GL.programs[program]);
                if (log === null) log = "(unknown error)";
                var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
                if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
            }
            function _emscripten_glGetProgramiv(program, pname, p) {
                if (!p) {
                    GL.recordError(1281);
                    return;
                }
                if (program >= GL.counter) {
                    GL.recordError(1281);
                    return;
                }
                program = GL.programs[program];
                if (pname == 35716) {
                    var log = GLctx1.getProgramInfoLog(program);
                    if (log === null) log = "(unknown error)";
                    HEAP32[p >> 2] = log.length + 1;
                } else if (pname == 35719) {
                    if (!program.maxUniformLength) for(var i = 0; i < GLctx1.getProgramParameter(program, 35718); ++i)program.maxUniformLength = Math.max(program.maxUniformLength, GLctx1.getActiveUniform(program, i).name.length + 1);
                    HEAP32[p >> 2] = program.maxUniformLength;
                } else if (pname == 35722) {
                    if (!program.maxAttributeLength) for(var i = 0; i < GLctx1.getProgramParameter(program, 35721); ++i)program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx1.getActiveAttrib(program, i).name.length + 1);
                    HEAP32[p >> 2] = program.maxAttributeLength;
                } else if (pname == 35381) {
                    if (!program.maxUniformBlockNameLength) for(var i = 0; i < GLctx1.getProgramParameter(program, 35382); ++i)program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx1.getActiveUniformBlockName(program, i).length + 1);
                    HEAP32[p >> 2] = program.maxUniformBlockNameLength;
                } else HEAP32[p >> 2] = GLctx1.getProgramParameter(program, pname);
            }
            function _emscripten_glGetQueryObjecti64vEXT(id, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                var query = GL.queries[id];
                var param;
                if (GL.currentContext.version < 2) param = GLctx1.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
                else param = GLctx1["getQueryParameter"](query, pname);
                var ret;
                if (typeof param == "boolean") ret = param ? 1 : 0;
                else ret = param;
                writeI53ToI64(params, ret);
            }
            function _emscripten_glGetQueryObjectivEXT(id, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                var query = GL.queries[id];
                var param = GLctx1.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
                var ret;
                if (typeof param == "boolean") ret = param ? 1 : 0;
                else ret = param;
                HEAP32[params >> 2] = ret;
            }
            function _emscripten_glGetQueryObjectui64vEXT(id, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                var query = GL.queries[id];
                var param;
                if (GL.currentContext.version < 2) param = GLctx1.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
                else param = GLctx1["getQueryParameter"](query, pname);
                var ret;
                if (typeof param == "boolean") ret = param ? 1 : 0;
                else ret = param;
                writeI53ToI64(params, ret);
            }
            function _emscripten_glGetQueryObjectuiv(id, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                var query = GL.queries[id];
                var param = GLctx1["getQueryParameter"](query, pname);
                var ret;
                if (typeof param == "boolean") ret = param ? 1 : 0;
                else ret = param;
                HEAP32[params >> 2] = ret;
            }
            function _emscripten_glGetQueryObjectuivEXT(id, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                var query = GL.queries[id];
                var param = GLctx1.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
                var ret;
                if (typeof param == "boolean") ret = param ? 1 : 0;
                else ret = param;
                HEAP32[params >> 2] = ret;
            }
            function _emscripten_glGetQueryiv(target, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                HEAP32[params >> 2] = GLctx1["getQuery"](target, pname);
            }
            function _emscripten_glGetQueryivEXT(target, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                HEAP32[params >> 2] = GLctx1.disjointTimerQueryExt["getQueryEXT"](target, pname);
            }
            function _emscripten_glGetRenderbufferParameteriv(target, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                HEAP32[params >> 2] = GLctx1.getRenderbufferParameter(target, pname);
            }
            function _emscripten_glGetSamplerParameterfv(sampler, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                HEAPF32[params >> 2] = GLctx1["getSamplerParameter"](GL.samplers[sampler], pname);
            }
            function _emscripten_glGetSamplerParameteriv(sampler, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                HEAP32[params >> 2] = GLctx1["getSamplerParameter"](GL.samplers[sampler], pname);
            }
            function _emscripten_glGetShaderInfoLog(shader, maxLength, length, infoLog) {
                var log = GLctx1.getShaderInfoLog(GL.shaders[shader]);
                if (log === null) log = "(unknown error)";
                var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
                if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
            }
            function _emscripten_glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
                var result = GLctx1.getShaderPrecisionFormat(shaderType, precisionType);
                HEAP32[range >> 2] = result.rangeMin;
                HEAP32[range + 4 >> 2] = result.rangeMax;
                HEAP32[precision >> 2] = result.precision;
            }
            function _emscripten_glGetShaderSource(shader, bufSize, length, source) {
                var result = GLctx1.getShaderSource(GL.shaders[shader]);
                if (!result) return;
                var numBytesWrittenExclNull = bufSize > 0 && source ? stringToUTF8(result, source, bufSize) : 0;
                if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
            }
            function _emscripten_glGetShaderiv(shader, pname, p) {
                if (!p) {
                    GL.recordError(1281);
                    return;
                }
                if (pname == 35716) {
                    var log = GLctx1.getShaderInfoLog(GL.shaders[shader]);
                    if (log === null) log = "(unknown error)";
                    var logLength = log ? log.length + 1 : 0;
                    HEAP32[p >> 2] = logLength;
                } else if (pname == 35720) {
                    var source = GLctx1.getShaderSource(GL.shaders[shader]);
                    var sourceLength = source ? source.length + 1 : 0;
                    HEAP32[p >> 2] = sourceLength;
                } else HEAP32[p >> 2] = GLctx1.getShaderParameter(GL.shaders[shader], pname);
            }
            function stringToNewUTF8(jsString) {
                var length = lengthBytesUTF8(jsString) + 1;
                var cString = _malloc(length);
                stringToUTF8(jsString, cString, length);
                return cString;
            }
            function _emscripten_glGetString(name_) {
                var ret = GL.stringCache[name_];
                if (!ret) {
                    switch(name_){
                        case 7939:
                            var exts = GLctx1.getSupportedExtensions() || [];
                            exts = exts.concat(exts.map(function(e) {
                                return "GL_" + e;
                            }));
                            ret = stringToNewUTF8(exts.join(" "));
                            break;
                        case 7936:
                        case 7937:
                        case 37445:
                        case 37446:
                            var s = GLctx1.getParameter(name_);
                            if (!s) GL.recordError(1280);
                            ret = s && stringToNewUTF8(s);
                            break;
                        case 7938:
                            var glVersion = GLctx1.getParameter(7938);
                            if (GL.currentContext.version >= 2) glVersion = "OpenGL ES 3.0 (" + glVersion + ")";
                            else glVersion = "OpenGL ES 2.0 (" + glVersion + ")";
                            ret = stringToNewUTF8(glVersion);
                            break;
                        case 35724:
                            var glslVersion = GLctx1.getParameter(35724);
                            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
                            var ver_num = glslVersion.match(ver_re);
                            if (ver_num !== null) {
                                if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
                                glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")";
                            }
                            ret = stringToNewUTF8(glslVersion);
                            break;
                        default:
                            GL.recordError(1280);
                    }
                    GL.stringCache[name_] = ret;
                }
                return ret;
            }
            function _emscripten_glGetStringi(name, index) {
                if (GL.currentContext.version < 2) {
                    GL.recordError(1282);
                    return 0;
                }
                var stringiCache = GL.stringiCache[name];
                if (stringiCache) {
                    if (index < 0 || index >= stringiCache.length) {
                        GL.recordError(1281);
                        return 0;
                    }
                    return stringiCache[index];
                }
                switch(name){
                    case 7939:
                        var exts = GLctx1.getSupportedExtensions() || [];
                        exts = exts.concat(exts.map(function(e) {
                            return "GL_" + e;
                        }));
                        exts = exts.map(function(e) {
                            return stringToNewUTF8(e);
                        });
                        stringiCache = GL.stringiCache[name] = exts;
                        if (index < 0 || index >= stringiCache.length) {
                            GL.recordError(1281);
                            return 0;
                        }
                        return stringiCache[index];
                    default:
                        GL.recordError(1280);
                        return 0;
                }
            }
            function _emscripten_glGetSynciv(sync, pname, bufSize, length, values) {
                if (bufSize < 0) {
                    GL.recordError(1281);
                    return;
                }
                if (!values) {
                    GL.recordError(1281);
                    return;
                }
                var ret = GLctx1.getSyncParameter(GL.syncs[sync], pname);
                if (ret !== null) {
                    HEAP32[values >> 2] = ret;
                    if (length) HEAP32[length >> 2] = 1;
                }
            }
            function _emscripten_glGetTexParameterfv(target, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                HEAPF32[params >> 2] = GLctx1.getTexParameter(target, pname);
            }
            function _emscripten_glGetTexParameteriv(target, pname, params) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                HEAP32[params >> 2] = GLctx1.getTexParameter(target, pname);
            }
            function _emscripten_glGetTransformFeedbackVarying(program, index, bufSize, length, size, type, name) {
                program = GL.programs[program];
                var info = GLctx1["getTransformFeedbackVarying"](program, index);
                if (!info) return;
                if (name && bufSize > 0) {
                    var numBytesWrittenExclNull = stringToUTF8(info.name, name, bufSize);
                    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
                } else if (length) HEAP32[length >> 2] = 0;
                if (size) HEAP32[size >> 2] = info.size;
                if (type) HEAP32[type >> 2] = info.type;
            }
            function _emscripten_glGetUniformBlockIndex(program, uniformBlockName) {
                return GLctx1["getUniformBlockIndex"](GL.programs[program], UTF8ToString(uniformBlockName));
            }
            function _emscripten_glGetUniformIndices(program, uniformCount, uniformNames, uniformIndices) {
                if (!uniformIndices) {
                    GL.recordError(1281);
                    return;
                }
                if (uniformCount > 0 && (uniformNames == 0 || uniformIndices == 0)) {
                    GL.recordError(1281);
                    return;
                }
                program = GL.programs[program];
                var names = [];
                for(var i = 0; i < uniformCount; i++)names.push(UTF8ToString(HEAP32[uniformNames + i * 4 >> 2]));
                var result = GLctx1["getUniformIndices"](program, names);
                if (!result) return;
                var len = result.length;
                for(var i = 0; i < len; i++)HEAP32[uniformIndices + i * 4 >> 2] = result[i];
            }
            function webglGetLeftBracePos(name) {
                return name.slice(-1) == "]" && name.lastIndexOf("[");
            }
            function webglPrepareUniformLocationsBeforeFirstUse(program) {
                var uniformLocsById = program.uniformLocsById, uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, i, j;
                if (!uniformLocsById) {
                    program.uniformLocsById = uniformLocsById = {
                    };
                    program.uniformArrayNamesById = {
                    };
                    for(i = 0; i < GLctx1.getProgramParameter(program, 35718); ++i){
                        var u = GLctx1.getActiveUniform(program, i);
                        var nm = u.name;
                        var sz = u.size;
                        var lb = webglGetLeftBracePos(nm);
                        var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
                        var id = program.uniformIdCounter;
                        program.uniformIdCounter += sz;
                        uniformSizeAndIdsByName[arrayName] = [
                            sz,
                            id
                        ];
                        for(j = 0; j < sz; ++j){
                            uniformLocsById[id] = j;
                            program.uniformArrayNamesById[id++] = arrayName;
                        }
                    }
                }
            }
            function _emscripten_glGetUniformLocation(program, name) {
                name = UTF8ToString(name);
                if (program = GL.programs[program]) {
                    webglPrepareUniformLocationsBeforeFirstUse(program);
                    var uniformLocsById = program.uniformLocsById;
                    var arrayIndex = 0;
                    var uniformBaseName = name;
                    var leftBrace = webglGetLeftBracePos(name);
                    if (leftBrace > 0) {
                        arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
                        uniformBaseName = name.slice(0, leftBrace);
                    }
                    var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
                    if (sizeAndId && arrayIndex < sizeAndId[0]) {
                        arrayIndex += sizeAndId[1];
                        if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx1.getUniformLocation(program, name)) return arrayIndex;
                    }
                } else GL.recordError(1281);
                return -1;
            }
            function webglGetUniformLocation(location) {
                var p = GLctx1.currentProgram;
                if (p) {
                    var webglLoc = p.uniformLocsById[location];
                    if (typeof webglLoc === "number") p.uniformLocsById[location] = webglLoc = GLctx1.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? "[" + webglLoc + "]" : ""));
                    return webglLoc;
                } else GL.recordError(1282);
            }
            function emscriptenWebGLGetUniform(program, location, params, type) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                program = GL.programs[program];
                webglPrepareUniformLocationsBeforeFirstUse(program);
                var data = GLctx1.getUniform(program, webglGetUniformLocation(location));
                if (typeof data == "number" || typeof data == "boolean") switch(type){
                    case 0:
                        HEAP32[params >> 2] = data;
                        break;
                    case 2:
                        HEAPF32[params >> 2] = data;
                        break;
                }
                else for(var i = 0; i < data.length; i++)switch(type){
                    case 0:
                        HEAP32[params + i * 4 >> 2] = data[i];
                        break;
                    case 2:
                        HEAPF32[params + i * 4 >> 2] = data[i];
                        break;
                }
            }
            function _emscripten_glGetUniformfv(program, location, params) {
                emscriptenWebGLGetUniform(program, location, params, 2);
            }
            function _emscripten_glGetUniformiv(program, location, params) {
                emscriptenWebGLGetUniform(program, location, params, 0);
            }
            function _emscripten_glGetUniformuiv(program, location, params) {
                emscriptenWebGLGetUniform(program, location, params, 0);
            }
            function emscriptenWebGLGetVertexAttrib(index, pname, params, type) {
                if (!params) {
                    GL.recordError(1281);
                    return;
                }
                var data = GLctx1.getVertexAttrib(index, pname);
                if (pname == 34975) HEAP32[params >> 2] = data && data["name"];
                else if (typeof data == "number" || typeof data == "boolean") switch(type){
                    case 0:
                        HEAP32[params >> 2] = data;
                        break;
                    case 2:
                        HEAPF32[params >> 2] = data;
                        break;
                    case 5:
                        HEAP32[params >> 2] = Math.fround(data);
                        break;
                }
                else for(var i = 0; i < data.length; i++)switch(type){
                    case 0:
                        HEAP32[params + i * 4 >> 2] = data[i];
                        break;
                    case 2:
                        HEAPF32[params + i * 4 >> 2] = data[i];
                        break;
                    case 5:
                        HEAP32[params + i * 4 >> 2] = Math.fround(data[i]);
                        break;
                }
            }
            function _emscripten_glGetVertexAttribIiv(index, pname, params) {
                emscriptenWebGLGetVertexAttrib(index, pname, params, 0);
            }
            function _emscripten_glGetVertexAttribIuiv(index, pname, params) {
                emscriptenWebGLGetVertexAttrib(index, pname, params, 0);
            }
            function _emscripten_glGetVertexAttribPointerv(index, pname, pointer) {
                if (!pointer) {
                    GL.recordError(1281);
                    return;
                }
                HEAP32[pointer >> 2] = GLctx1.getVertexAttribOffset(index, pname);
            }
            function _emscripten_glGetVertexAttribfv(index, pname, params) {
                emscriptenWebGLGetVertexAttrib(index, pname, params, 2);
            }
            function _emscripten_glGetVertexAttribiv(index, pname, params) {
                emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
            }
            function _emscripten_glHint(x0, x1) {
                GLctx1["hint"](x0, x1);
            }
            function _emscripten_glInvalidateFramebuffer(target, numAttachments, attachments) {
                var list = tempFixedLengthArray[numAttachments];
                for(var i = 0; i < numAttachments; i++)list[i] = HEAP32[attachments + i * 4 >> 2];
                GLctx1["invalidateFramebuffer"](target, list);
            }
            function _emscripten_glInvalidateSubFramebuffer(target, numAttachments, attachments, x, y, width, height) {
                var list = tempFixedLengthArray[numAttachments];
                for(var i = 0; i < numAttachments; i++)list[i] = HEAP32[attachments + i * 4 >> 2];
                GLctx1["invalidateSubFramebuffer"](target, list, x, y, width, height);
            }
            function _emscripten_glIsBuffer(buffer) {
                var b = GL.buffers[buffer];
                if (!b) return 0;
                return GLctx1.isBuffer(b);
            }
            function _emscripten_glIsEnabled(x0) {
                return GLctx1["isEnabled"](x0);
            }
            function _emscripten_glIsFramebuffer(framebuffer) {
                var fb = GL.framebuffers[framebuffer];
                if (!fb) return 0;
                return GLctx1.isFramebuffer(fb);
            }
            function _emscripten_glIsProgram(program) {
                program = GL.programs[program];
                if (!program) return 0;
                return GLctx1.isProgram(program);
            }
            function _emscripten_glIsQuery(id) {
                var query = GL.queries[id];
                if (!query) return 0;
                return GLctx1["isQuery"](query);
            }
            function _emscripten_glIsQueryEXT(id) {
                var query = GL.queries[id];
                if (!query) return 0;
                return GLctx1.disjointTimerQueryExt["isQueryEXT"](query);
            }
            function _emscripten_glIsRenderbuffer(renderbuffer) {
                var rb = GL.renderbuffers[renderbuffer];
                if (!rb) return 0;
                return GLctx1.isRenderbuffer(rb);
            }
            function _emscripten_glIsSampler(id) {
                var sampler = GL.samplers[id];
                if (!sampler) return 0;
                return GLctx1["isSampler"](sampler);
            }
            function _emscripten_glIsShader(shader) {
                var s = GL.shaders[shader];
                if (!s) return 0;
                return GLctx1.isShader(s);
            }
            function _emscripten_glIsSync(sync) {
                return GLctx1.isSync(GL.syncs[sync]);
            }
            function _emscripten_glIsTexture(id) {
                var texture = GL.textures[id];
                if (!texture) return 0;
                return GLctx1.isTexture(texture);
            }
            function _emscripten_glIsTransformFeedback(id) {
                return GLctx1["isTransformFeedback"](GL.transformFeedbacks[id]);
            }
            function _emscripten_glIsVertexArray(array) {
                var vao = GL.vaos[array];
                if (!vao) return 0;
                return GLctx1["isVertexArray"](vao);
            }
            function _emscripten_glIsVertexArrayOES(array) {
                var vao = GL.vaos[array];
                if (!vao) return 0;
                return GLctx1["isVertexArray"](vao);
            }
            function _emscripten_glLineWidth(x0) {
                GLctx1["lineWidth"](x0);
            }
            function _emscripten_glLinkProgram(program) {
                program = GL.programs[program];
                GLctx1.linkProgram(program);
                program.uniformLocsById = 0;
                program.uniformSizeAndIdsByName = {
                };
            }
            function _emscripten_glPauseTransformFeedback() {
                GLctx1["pauseTransformFeedback"]();
            }
            function _emscripten_glPixelStorei(pname, param) {
                if (pname == 3317) GL.unpackAlignment = param;
                GLctx1.pixelStorei(pname, param);
            }
            function _emscripten_glPolygonOffset(x0, x1) {
                GLctx1["polygonOffset"](x0, x1);
            }
            function _emscripten_glProgramBinary(program, binaryFormat, binary, length) {
                GL.recordError(1280);
            }
            function _emscripten_glProgramParameteri(program, pname, value) {
                GL.recordError(1280);
            }
            function _emscripten_glQueryCounterEXT(id, target) {
                GLctx1.disjointTimerQueryExt["queryCounterEXT"](GL.queries[id], target);
            }
            function _emscripten_glReadBuffer(x0) {
                GLctx1["readBuffer"](x0);
            }
            function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
                function roundedToNextMultipleOf(x, y) {
                    return x + y - 1 & -y;
                }
                var plainRowSize = width * sizePerPixel;
                var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
                return height * alignedRowSize;
            }
            function __colorChannelsInGlTextureFormat(format) {
                var colorChannels = {
                    5: 3,
                    6: 4,
                    8: 2,
                    29502: 3,
                    29504: 4,
                    26917: 2,
                    26918: 2,
                    29846: 3,
                    29847: 4
                };
                return colorChannels[format - 6402] || 1;
            }
            function heapObjectForWebGLType(type) {
                type -= 5120;
                if (type == 0) return HEAP8;
                if (type == 1) return HEAPU8;
                if (type == 2) return HEAP16;
                if (type == 4) return HEAP32;
                if (type == 6) return HEAPF32;
                if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return HEAPU32;
                return HEAPU16;
            }
            function heapAccessShiftForWebGLHeap(heap) {
                return 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
            }
            function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
                var heap = heapObjectForWebGLType(type);
                var shift = heapAccessShiftForWebGLHeap(heap);
                var byteSize = 1 << shift;
                var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
                var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
                return heap.subarray(pixels >> shift, pixels + bytes >> shift);
            }
            function _emscripten_glReadPixels(x, y, width, height, format, type, pixels) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelPackBufferBinding) GLctx1.readPixels(x, y, width, height, format, type, pixels);
                    else {
                        var heap = heapObjectForWebGLType(type);
                        GLctx1.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                    }
                    return;
                }
                var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
                if (!pixelData) {
                    GL.recordError(1280);
                    return;
                }
                GLctx1.readPixels(x, y, width, height, format, type, pixelData);
            }
            function _emscripten_glReleaseShaderCompiler() {
            }
            function _emscripten_glRenderbufferStorage(x0, x1, x2, x3) {
                GLctx1["renderbufferStorage"](x0, x1, x2, x3);
            }
            function _emscripten_glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) {
                GLctx1["renderbufferStorageMultisample"](x0, x1, x2, x3, x4);
            }
            function _emscripten_glResumeTransformFeedback() {
                GLctx1["resumeTransformFeedback"]();
            }
            function _emscripten_glSampleCoverage(value, invert) {
                GLctx1.sampleCoverage(value, !!invert);
            }
            function _emscripten_glSamplerParameterf(sampler, pname, param) {
                GLctx1["samplerParameterf"](GL.samplers[sampler], pname, param);
            }
            function _emscripten_glSamplerParameterfv(sampler, pname, params) {
                var param = HEAPF32[params >> 2];
                GLctx1["samplerParameterf"](GL.samplers[sampler], pname, param);
            }
            function _emscripten_glSamplerParameteri(sampler, pname, param) {
                GLctx1["samplerParameteri"](GL.samplers[sampler], pname, param);
            }
            function _emscripten_glSamplerParameteriv(sampler, pname, params) {
                var param = HEAP32[params >> 2];
                GLctx1["samplerParameteri"](GL.samplers[sampler], pname, param);
            }
            function _emscripten_glScissor(x0, x1, x2, x3) {
                GLctx1["scissor"](x0, x1, x2, x3);
            }
            function _emscripten_glShaderBinary() {
                GL.recordError(1280);
            }
            function _emscripten_glShaderSource(shader, count, string, length) {
                var source = GL.getSource(shader, count, string, length);
                GLctx1.shaderSource(GL.shaders[shader], source);
            }
            function _emscripten_glStencilFunc(x0, x1, x2) {
                GLctx1["stencilFunc"](x0, x1, x2);
            }
            function _emscripten_glStencilFuncSeparate(x0, x1, x2, x3) {
                GLctx1["stencilFuncSeparate"](x0, x1, x2, x3);
            }
            function _emscripten_glStencilMask(x0) {
                GLctx1["stencilMask"](x0);
            }
            function _emscripten_glStencilMaskSeparate(x0, x1) {
                GLctx1["stencilMaskSeparate"](x0, x1);
            }
            function _emscripten_glStencilOp(x0, x1, x2) {
                GLctx1["stencilOp"](x0, x1, x2);
            }
            function _emscripten_glStencilOpSeparate(x0, x1, x2, x3) {
                GLctx1["stencilOpSeparate"](x0, x1, x2, x3);
            }
            function _emscripten_glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelUnpackBufferBinding) GLctx1.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
                    else if (pixels) {
                        var heap = heapObjectForWebGLType(type);
                        GLctx1.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                    } else GLctx1.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
                    return;
                }
                GLctx1.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
            }
            function _emscripten_glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
                if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, pixels);
                else if (pixels) {
                    var heap = heapObjectForWebGLType(type);
                    GLctx1["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                } else GLctx1["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, null);
            }
            function _emscripten_glTexParameterf(x0, x1, x2) {
                GLctx1["texParameterf"](x0, x1, x2);
            }
            function _emscripten_glTexParameterfv(target, pname, params) {
                var param = HEAPF32[params >> 2];
                GLctx1.texParameterf(target, pname, param);
            }
            function _emscripten_glTexParameteri(x0, x1, x2) {
                GLctx1["texParameteri"](x0, x1, x2);
            }
            function _emscripten_glTexParameteriv(target, pname, params) {
                var param = HEAP32[params >> 2];
                GLctx1.texParameteri(target, pname, param);
            }
            function _emscripten_glTexStorage2D(x0, x1, x2, x3, x4) {
                GLctx1["texStorage2D"](x0, x1, x2, x3, x4);
            }
            function _emscripten_glTexStorage3D(x0, x1, x2, x3, x4, x5) {
                GLctx1["texStorage3D"](x0, x1, x2, x3, x4, x5);
            }
            function _emscripten_glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelUnpackBufferBinding) GLctx1.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
                    else if (pixels) {
                        var heap = heapObjectForWebGLType(type);
                        GLctx1.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                    } else GLctx1.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
                    return;
                }
                var pixelData = null;
                if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
                GLctx1.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
            }
            function _emscripten_glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
                if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
                else if (pixels) {
                    var heap = heapObjectForWebGLType(type);
                    GLctx1["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                } else GLctx1["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
            }
            function _emscripten_glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
                program = GL.programs[program];
                var vars = [];
                for(var i = 0; i < count; i++)vars.push(UTF8ToString(HEAP32[varyings + i * 4 >> 2]));
                GLctx1["transformFeedbackVaryings"](program, vars, bufferMode);
            }
            function _emscripten_glUniform1f(location, v0) {
                GLctx1.uniform1f(webglGetUniformLocation(location), v0);
            }
            var miniTempWebGLFloatBuffers = [];
            function _emscripten_glUniform1fv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform1fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count);
                    return;
                }
                if (count <= 288) {
                    var view = miniTempWebGLFloatBuffers[count - 1];
                    for(var i = 0; i < count; ++i)view[i] = HEAPF32[value + 4 * i >> 2];
                } else var view = HEAPF32.subarray(value >> 2, value + count * 4 >> 2);
                GLctx1.uniform1fv(webglGetUniformLocation(location), view);
            }
            function _emscripten_glUniform1i(location, v0) {
                GLctx1.uniform1i(webglGetUniformLocation(location), v0);
            }
            var __miniTempWebGLIntBuffers = [];
            function _emscripten_glUniform1iv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform1iv(webglGetUniformLocation(location), HEAP32, value >> 2, count);
                    return;
                }
                if (count <= 288) {
                    var view = __miniTempWebGLIntBuffers[count - 1];
                    for(var i = 0; i < count; ++i)view[i] = HEAP32[value + 4 * i >> 2];
                } else var view = HEAP32.subarray(value >> 2, value + count * 4 >> 2);
                GLctx1.uniform1iv(webglGetUniformLocation(location), view);
            }
            function _emscripten_glUniform1ui(location, v0) {
                GLctx1.uniform1ui(webglGetUniformLocation(location), v0);
            }
            function _emscripten_glUniform1uiv(location, count, value) {
                GLctx1.uniform1uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count);
            }
            function _emscripten_glUniform2f(location, v0, v1) {
                GLctx1.uniform2f(webglGetUniformLocation(location), v0, v1);
            }
            function _emscripten_glUniform2fv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform2fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 2);
                    return;
                }
                if (count <= 144) {
                    var view = miniTempWebGLFloatBuffers[2 * count - 1];
                    for(var i = 0; i < 2 * count; i += 2){
                        view[i] = HEAPF32[value + 4 * i >> 2];
                        view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 8 >> 2);
                GLctx1.uniform2fv(webglGetUniformLocation(location), view);
            }
            function _emscripten_glUniform2i(location, v0, v1) {
                GLctx1.uniform2i(webglGetUniformLocation(location), v0, v1);
            }
            function _emscripten_glUniform2iv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform2iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 2);
                    return;
                }
                if (count <= 144) {
                    var view = __miniTempWebGLIntBuffers[2 * count - 1];
                    for(var i = 0; i < 2 * count; i += 2){
                        view[i] = HEAP32[value + 4 * i >> 2];
                        view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
                    }
                } else var view = HEAP32.subarray(value >> 2, value + count * 8 >> 2);
                GLctx1.uniform2iv(webglGetUniformLocation(location), view);
            }
            function _emscripten_glUniform2ui(location, v0, v1) {
                GLctx1.uniform2ui(webglGetUniformLocation(location), v0, v1);
            }
            function _emscripten_glUniform2uiv(location, count, value) {
                GLctx1.uniform2uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 2);
            }
            function _emscripten_glUniform3f(location, v0, v1, v2) {
                GLctx1.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
            }
            function _emscripten_glUniform3fv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform3fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 3);
                    return;
                }
                if (count <= 96) {
                    var view = miniTempWebGLFloatBuffers[3 * count - 1];
                    for(var i = 0; i < 3 * count; i += 3){
                        view[i] = HEAPF32[value + 4 * i >> 2];
                        view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                        view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 12 >> 2);
                GLctx1.uniform3fv(webglGetUniformLocation(location), view);
            }
            function _emscripten_glUniform3i(location, v0, v1, v2) {
                GLctx1.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
            }
            function _emscripten_glUniform3iv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform3iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 3);
                    return;
                }
                if (count <= 96) {
                    var view = __miniTempWebGLIntBuffers[3 * count - 1];
                    for(var i = 0; i < 3 * count; i += 3){
                        view[i] = HEAP32[value + 4 * i >> 2];
                        view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
                        view[i + 2] = HEAP32[value + (4 * i + 8) >> 2];
                    }
                } else var view = HEAP32.subarray(value >> 2, value + count * 12 >> 2);
                GLctx1.uniform3iv(webglGetUniformLocation(location), view);
            }
            function _emscripten_glUniform3ui(location, v0, v1, v2) {
                GLctx1.uniform3ui(webglGetUniformLocation(location), v0, v1, v2);
            }
            function _emscripten_glUniform3uiv(location, count, value) {
                GLctx1.uniform3uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 3);
            }
            function _emscripten_glUniform4f(location, v0, v1, v2, v3) {
                GLctx1.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
            }
            function _emscripten_glUniform4fv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform4fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 4);
                    return;
                }
                if (count <= 72) {
                    var view = miniTempWebGLFloatBuffers[4 * count - 1];
                    var heap = HEAPF32;
                    value >>= 2;
                    for(var i = 0; i < 4 * count; i += 4){
                        var dst = value + i;
                        view[i] = heap[dst];
                        view[i + 1] = heap[dst + 1];
                        view[i + 2] = heap[dst + 2];
                        view[i + 3] = heap[dst + 3];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2);
                GLctx1.uniform4fv(webglGetUniformLocation(location), view);
            }
            function _emscripten_glUniform4i(location, v0, v1, v2, v3) {
                GLctx1.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
            }
            function _emscripten_glUniform4iv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform4iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 4);
                    return;
                }
                if (count <= 72) {
                    var view = __miniTempWebGLIntBuffers[4 * count - 1];
                    for(var i = 0; i < 4 * count; i += 4){
                        view[i] = HEAP32[value + 4 * i >> 2];
                        view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
                        view[i + 2] = HEAP32[value + (4 * i + 8) >> 2];
                        view[i + 3] = HEAP32[value + (4 * i + 12) >> 2];
                    }
                } else var view = HEAP32.subarray(value >> 2, value + count * 16 >> 2);
                GLctx1.uniform4iv(webglGetUniformLocation(location), view);
            }
            function _emscripten_glUniform4ui(location, v0, v1, v2, v3) {
                GLctx1.uniform4ui(webglGetUniformLocation(location), v0, v1, v2, v3);
            }
            function _emscripten_glUniform4uiv(location, count, value) {
                GLctx1.uniform4uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 4);
            }
            function _emscripten_glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
                program = GL.programs[program];
                GLctx1["uniformBlockBinding"](program, uniformBlockIndex, uniformBlockBinding);
            }
            function _emscripten_glUniformMatrix2fv(location, count, transpose, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 4);
                    return;
                }
                if (count <= 72) {
                    var view = miniTempWebGLFloatBuffers[4 * count - 1];
                    for(var i = 0; i < 4 * count; i += 4){
                        view[i] = HEAPF32[value + 4 * i >> 2];
                        view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                        view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
                        view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2);
                GLctx1.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
            }
            function _emscripten_glUniformMatrix2x3fv(location, count, transpose, value) {
                GLctx1.uniformMatrix2x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 6);
            }
            function _emscripten_glUniformMatrix2x4fv(location, count, transpose, value) {
                GLctx1.uniformMatrix2x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 8);
            }
            function _emscripten_glUniformMatrix3fv(location, count, transpose, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 9);
                    return;
                }
                if (count <= 32) {
                    var view = miniTempWebGLFloatBuffers[9 * count - 1];
                    for(var i = 0; i < 9 * count; i += 9){
                        view[i] = HEAPF32[value + 4 * i >> 2];
                        view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                        view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
                        view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
                        view[i + 4] = HEAPF32[value + (4 * i + 16) >> 2];
                        view[i + 5] = HEAPF32[value + (4 * i + 20) >> 2];
                        view[i + 6] = HEAPF32[value + (4 * i + 24) >> 2];
                        view[i + 7] = HEAPF32[value + (4 * i + 28) >> 2];
                        view[i + 8] = HEAPF32[value + (4 * i + 32) >> 2];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 36 >> 2);
                GLctx1.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
            }
            function _emscripten_glUniformMatrix3x2fv(location, count, transpose, value) {
                GLctx1.uniformMatrix3x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 6);
            }
            function _emscripten_glUniformMatrix3x4fv(location, count, transpose, value) {
                GLctx1.uniformMatrix3x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 12);
            }
            function _emscripten_glUniformMatrix4fv(location, count, transpose, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 16);
                    return;
                }
                if (count <= 18) {
                    var view = miniTempWebGLFloatBuffers[16 * count - 1];
                    var heap = HEAPF32;
                    value >>= 2;
                    for(var i = 0; i < 16 * count; i += 16){
                        var dst = value + i;
                        view[i] = heap[dst];
                        view[i + 1] = heap[dst + 1];
                        view[i + 2] = heap[dst + 2];
                        view[i + 3] = heap[dst + 3];
                        view[i + 4] = heap[dst + 4];
                        view[i + 5] = heap[dst + 5];
                        view[i + 6] = heap[dst + 6];
                        view[i + 7] = heap[dst + 7];
                        view[i + 8] = heap[dst + 8];
                        view[i + 9] = heap[dst + 9];
                        view[i + 10] = heap[dst + 10];
                        view[i + 11] = heap[dst + 11];
                        view[i + 12] = heap[dst + 12];
                        view[i + 13] = heap[dst + 13];
                        view[i + 14] = heap[dst + 14];
                        view[i + 15] = heap[dst + 15];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 64 >> 2);
                GLctx1.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
            }
            function _emscripten_glUniformMatrix4x2fv(location, count, transpose, value) {
                GLctx1.uniformMatrix4x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 8);
            }
            function _emscripten_glUniformMatrix4x3fv(location, count, transpose, value) {
                GLctx1.uniformMatrix4x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 12);
            }
            function _emscripten_glUseProgram(program) {
                program = GL.programs[program];
                GLctx1.useProgram(program);
                GLctx1.currentProgram = program;
            }
            function _emscripten_glValidateProgram(program) {
                GLctx1.validateProgram(GL.programs[program]);
            }
            function _emscripten_glVertexAttrib1f(x0, x1) {
                GLctx1["vertexAttrib1f"](x0, x1);
            }
            function _emscripten_glVertexAttrib1fv(index, v) {
                GLctx1.vertexAttrib1f(index, HEAPF32[v >> 2]);
            }
            function _emscripten_glVertexAttrib2f(x0, x1, x2) {
                GLctx1["vertexAttrib2f"](x0, x1, x2);
            }
            function _emscripten_glVertexAttrib2fv(index, v) {
                GLctx1.vertexAttrib2f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2]);
            }
            function _emscripten_glVertexAttrib3f(x0, x1, x2, x3) {
                GLctx1["vertexAttrib3f"](x0, x1, x2, x3);
            }
            function _emscripten_glVertexAttrib3fv(index, v) {
                GLctx1.vertexAttrib3f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2]);
            }
            function _emscripten_glVertexAttrib4f(x0, x1, x2, x3, x4) {
                GLctx1["vertexAttrib4f"](x0, x1, x2, x3, x4);
            }
            function _emscripten_glVertexAttrib4fv(index, v) {
                GLctx1.vertexAttrib4f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2], HEAPF32[v + 12 >> 2]);
            }
            function _emscripten_glVertexAttribDivisor(index, divisor) {
                GLctx1["vertexAttribDivisor"](index, divisor);
            }
            function _emscripten_glVertexAttribDivisorANGLE(index, divisor) {
                GLctx1["vertexAttribDivisor"](index, divisor);
            }
            function _emscripten_glVertexAttribDivisorARB(index, divisor) {
                GLctx1["vertexAttribDivisor"](index, divisor);
            }
            function _emscripten_glVertexAttribDivisorEXT(index, divisor) {
                GLctx1["vertexAttribDivisor"](index, divisor);
            }
            function _emscripten_glVertexAttribDivisorNV(index, divisor) {
                GLctx1["vertexAttribDivisor"](index, divisor);
            }
            function _emscripten_glVertexAttribI4i(x0, x1, x2, x3, x4) {
                GLctx1["vertexAttribI4i"](x0, x1, x2, x3, x4);
            }
            function _emscripten_glVertexAttribI4iv(index, v) {
                GLctx1.vertexAttribI4i(index, HEAP32[v >> 2], HEAP32[v + 4 >> 2], HEAP32[v + 8 >> 2], HEAP32[v + 12 >> 2]);
            }
            function _emscripten_glVertexAttribI4ui(x0, x1, x2, x3, x4) {
                GLctx1["vertexAttribI4ui"](x0, x1, x2, x3, x4);
            }
            function _emscripten_glVertexAttribI4uiv(index, v) {
                GLctx1.vertexAttribI4ui(index, HEAPU32[v >> 2], HEAPU32[v + 4 >> 2], HEAPU32[v + 8 >> 2], HEAPU32[v + 12 >> 2]);
            }
            function _emscripten_glVertexAttribIPointer(index, size, type, stride, ptr) {
                GLctx1["vertexAttribIPointer"](index, size, type, stride, ptr);
            }
            function _emscripten_glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
                GLctx1.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
            }
            function _emscripten_glViewport(x0, x1, x2, x3) {
                GLctx1["viewport"](x0, x1, x2, x3);
            }
            function _emscripten_glWaitSync(sync, flags, timeoutLo, timeoutHi) {
                GLctx1.waitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi));
            }
            function _emscripten_memcpy_big(dest, src, num) {
                HEAPU8.copyWithin(dest, src, src + num);
            }
            function emscripten_realloc_buffer(size) {
                try {
                    wasmMemory.grow(size - buffer1.byteLength + 65535 >>> 16);
                    updateGlobalBufferAndViews(wasmMemory.buffer);
                    return 1;
                } catch (e) {
                }
            }
            function _emscripten_resize_heap(requestedSize) {
                var oldSize = HEAPU8.length;
                requestedSize = requestedSize >>> 0;
                var maxHeapSize = 2147483648;
                if (requestedSize > maxHeapSize) return false;
                for(var cutDown = 1; cutDown <= 4; cutDown *= 2){
                    var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
                    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
                    var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
                    var replacement = emscripten_realloc_buffer(newSize);
                    if (replacement) return true;
                }
                return false;
            }
            function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
                var browserIterationFunc = wasmTable.get(func);
                setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop);
            }
            function _emscripten_thread_sleep(msecs) {
                var start = _emscripten_get_now();
                while(_emscripten_get_now() - start < msecs);
            }
            var JSEvents = {
                inEventHandler: 0,
                removeAllEventListeners: function() {
                    for(var i = JSEvents.eventHandlers.length - 1; i >= 0; --i)JSEvents._removeHandler(i);
                    JSEvents.eventHandlers = [];
                    JSEvents.deferredCalls = [];
                },
                registerRemoveEventListeners: function() {
                    if (!JSEvents.removeEventListenersRegistered) {
                        __ATEXIT__.push(JSEvents.removeAllEventListeners);
                        JSEvents.removeEventListenersRegistered = true;
                    }
                },
                deferredCalls: [],
                deferCall: function(targetFunction, precedence, argsList) {
                    function arraysHaveEqualContent(arrA, arrB) {
                        if (arrA.length != arrB.length) return false;
                        for(var i in arrA){
                            if (arrA[i] != arrB[i]) return false;
                        }
                        return true;
                    }
                    for(var i in JSEvents.deferredCalls){
                        var call = JSEvents.deferredCalls[i];
                        if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) return;
                    }
                    JSEvents.deferredCalls.push({
                        targetFunction: targetFunction,
                        precedence: precedence,
                        argsList: argsList
                    });
                    JSEvents.deferredCalls.sort(function(x, y) {
                        return x.precedence < y.precedence;
                    });
                },
                removeDeferredCalls: function(targetFunction) {
                    for(var i = 0; i < JSEvents.deferredCalls.length; ++i)if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
                        JSEvents.deferredCalls.splice(i, 1);
                        --i;
                    }
                },
                canPerformEventHandlerRequests: function() {
                    return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
                },
                runDeferredCalls: function() {
                    if (!JSEvents.canPerformEventHandlerRequests()) return;
                    for(var i = 0; i < JSEvents.deferredCalls.length; ++i){
                        var call = JSEvents.deferredCalls[i];
                        JSEvents.deferredCalls.splice(i, 1);
                        --i;
                        call.targetFunction.apply(null, call.argsList);
                    }
                },
                eventHandlers: [],
                removeAllHandlersOnTarget: function(target, eventTypeString) {
                    for(var i = 0; i < JSEvents.eventHandlers.length; ++i)if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) JSEvents._removeHandler(i--);
                },
                _removeHandler: function(i) {
                    var h = JSEvents.eventHandlers[i];
                    h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
                    JSEvents.eventHandlers.splice(i, 1);
                },
                registerOrRemoveHandler: function(eventHandler) {
                    var jsEventHandler = function jsEventHandler(event) {
                        ++JSEvents.inEventHandler;
                        JSEvents.currentEventHandler = eventHandler;
                        JSEvents.runDeferredCalls();
                        eventHandler.handlerFunc(event);
                        JSEvents.runDeferredCalls();
                        --JSEvents.inEventHandler;
                    };
                    if (eventHandler.callbackfunc) {
                        eventHandler.eventListenerFunc = jsEventHandler;
                        eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
                        JSEvents.eventHandlers.push(eventHandler);
                        JSEvents.registerRemoveEventListeners();
                    } else {
                        for(var i = 0; i < JSEvents.eventHandlers.length; ++i)if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) JSEvents._removeHandler(i--);
                    }
                },
                getNodeNameForTarget: function(target) {
                    if (!target) return "";
                    if (target == window) return "#window";
                    if (target == screen) return "#screen";
                    return target && target.nodeName ? target.nodeName : "";
                },
                fullscreenEnabled: function() {
                    return document.fullscreenEnabled || document.webkitFullscreenEnabled;
                }
            };
            var __emscripten_webgl_power_preferences = [
                "default",
                "low-power",
                "high-performance"
            ];
            function maybeCStringToJsString(cString) {
                return cString > 2 ? UTF8ToString(cString) : cString;
            }
            var specialHTMLTargets = [
                0,
                typeof document !== "undefined" ? document : 0,
                typeof window !== "undefined" ? window : 0
            ];
            function findEventTarget(target) {
                target = maybeCStringToJsString(target);
                var domElement = specialHTMLTargets[target] || (typeof document !== "undefined" ? document.querySelector(target) : undefined);
                return domElement;
            }
            function findCanvasEventTarget(target) {
                return findEventTarget(target);
            }
            function _emscripten_webgl_do_create_context(target, attributes) {
                var a = attributes >> 2;
                var powerPreference = HEAP32[a + 6];
                var contextAttributes = {
                    "alpha": !!HEAP32[a + 0],
                    "depth": !!HEAP32[a + 1],
                    "stencil": !!HEAP32[a + 2],
                    "antialias": !!HEAP32[a + 3],
                    "premultipliedAlpha": !!HEAP32[a + 4],
                    "preserveDrawingBuffer": !!HEAP32[a + 5],
                    "powerPreference": __emscripten_webgl_power_preferences[powerPreference],
                    "failIfMajorPerformanceCaveat": !!HEAP32[a + 7],
                    majorVersion: HEAP32[a + 8],
                    minorVersion: HEAP32[a + 9],
                    enableExtensionsByDefault: HEAP32[a + 10],
                    explicitSwapControl: HEAP32[a + 11],
                    proxyContextToMainThread: HEAP32[a + 12],
                    renderViaOffscreenBackBuffer: HEAP32[a + 13]
                };
                var canvas = findCanvasEventTarget(target);
                if (!canvas) return 0;
                if (contextAttributes.explicitSwapControl && !contextAttributes.renderViaOffscreenBackBuffer) contextAttributes.renderViaOffscreenBackBuffer = true;
                var contextHandle = GL.createContext(canvas, contextAttributes);
                return contextHandle;
            }
            function _emscripten_webgl_create_context(a0, a1) {
                return _emscripten_webgl_do_create_context(a0, a1);
            }
            function _emscripten_webgl_do_get_current_context() {
                return GL.currentContext ? GL.currentContext.handle : 0;
            }
            function _emscripten_webgl_get_current_context() {
                return _emscripten_webgl_do_get_current_context();
            }
            Module["_emscripten_webgl_get_current_context"] = _emscripten_webgl_get_current_context;
            function _emscripten_webgl_make_context_current(contextHandle) {
                var success = GL.makeContextCurrent(contextHandle);
                return success ? 0 : -5;
            }
            Module["_emscripten_webgl_make_context_current"] = _emscripten_webgl_make_context_current;
            function _emscripten_webgl_destroy_context(contextHandle) {
                if (GL.currentContext == contextHandle) GL.currentContext = 0;
                GL.deleteContext(contextHandle);
            }
            function _emscripten_webgl_init_context_attributes(attributes) {
                var a = attributes >> 2;
                for(var i = 0; i < 14; ++i)HEAP32[a + i] = 0;
                HEAP32[a + 0] = HEAP32[a + 1] = HEAP32[a + 3] = HEAP32[a + 4] = HEAP32[a + 8] = HEAP32[a + 10] = 1;
            }
            var ENV = {
            };
            function getExecutableName() {
                return thisProgram || "./this.program";
            }
            function getEnvStrings() {
                if (!getEnvStrings.strings) {
                    var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
                    var env = {
                        "USER": "web_user",
                        "LOGNAME": "web_user",
                        "PATH": "/",
                        "PWD": "/",
                        "HOME": "/home/web_user",
                        "LANG": lang,
                        "_": getExecutableName()
                    };
                    for(var x in ENV)if (ENV[x] === undefined) delete env[x];
                    else env[x] = ENV[x];
                    var strings = [];
                    for(var x in env)strings.push(x + "=" + env[x]);
                    getEnvStrings.strings = strings;
                }
                return getEnvStrings.strings;
            }
            function _environ_get(__environ, environ_buf) {
                try {
                    var bufSize = 0;
                    getEnvStrings().forEach(function(string, i) {
                        var ptr = environ_buf + bufSize;
                        HEAP32[__environ + i * 4 >> 2] = ptr;
                        writeAsciiToMemory(string, ptr);
                        bufSize += string.length + 1;
                    });
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return e.errno;
                }
            }
            function _environ_sizes_get(penviron_count, penviron_buf_size) {
                try {
                    var strings = getEnvStrings();
                    HEAP32[penviron_count >> 2] = strings.length;
                    var bufSize = 0;
                    strings.forEach(function(string) {
                        bufSize += string.length + 1;
                    });
                    HEAP32[penviron_buf_size >> 2] = bufSize;
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return e.errno;
                }
            }
            function _fd_close(fd) {
                try {
                    var stream = SYSCALLS.getStreamFromFD(fd);
                    FS.close(stream);
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return e.errno;
                }
            }
            function _fd_fdstat_get(fd, pbuf) {
                try {
                    var stream = SYSCALLS.getStreamFromFD(fd);
                    var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
                    HEAP8[pbuf >> 0] = type;
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return e.errno;
                }
            }
            function _fd_read(fd, iov, iovcnt, pnum) {
                try {
                    var stream = SYSCALLS.getStreamFromFD(fd);
                    var num = SYSCALLS.doReadv(stream, iov, iovcnt);
                    HEAP32[pnum >> 2] = num;
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return e.errno;
                }
            }
            function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
                try {
                    var stream = SYSCALLS.getStreamFromFD(fd);
                    var HIGH_OFFSET = 4294967296;
                    var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
                    var DOUBLE_LIMIT = 9007199254740992;
                    if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) return -61;
                    FS.llseek(stream, offset, whence);
                    tempI64 = [
                        stream.position >>> 0,
                        (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                    ], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
                    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return e.errno;
                }
            }
            function _fd_write(fd, iov, iovcnt, pnum) {
                try {
                    var stream = SYSCALLS.getStreamFromFD(fd);
                    var num = SYSCALLS.doWritev(stream, iov, iovcnt);
                    HEAP32[pnum >> 2] = num;
                    return 0;
                } catch (e) {
                    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
                    return e.errno;
                }
            }
            var GAI_ERRNO_MESSAGES = {
            };
            function _gai_strerror(val) {
                var buflen = 256;
                if (!_gai_strerror.buffer) {
                    _gai_strerror.buffer = _malloc(buflen);
                    GAI_ERRNO_MESSAGES["0"] = "Success";
                    GAI_ERRNO_MESSAGES["-1"] = "Invalid value for 'ai_flags' field";
                    GAI_ERRNO_MESSAGES["-2"] = "NAME or SERVICE is unknown";
                    GAI_ERRNO_MESSAGES["-3"] = "Temporary failure in name resolution";
                    GAI_ERRNO_MESSAGES["-4"] = "Non-recoverable failure in name res";
                    GAI_ERRNO_MESSAGES["-6"] = "'ai_family' not supported";
                    GAI_ERRNO_MESSAGES["-7"] = "'ai_socktype' not supported";
                    GAI_ERRNO_MESSAGES["-8"] = "SERVICE not supported for 'ai_socktype'";
                    GAI_ERRNO_MESSAGES["-10"] = "Memory allocation failure";
                    GAI_ERRNO_MESSAGES["-11"] = "System error returned in 'errno'";
                    GAI_ERRNO_MESSAGES["-12"] = "Argument buffer overflow";
                }
                var msg = "Unknown error";
                if (val in GAI_ERRNO_MESSAGES) {
                    if (GAI_ERRNO_MESSAGES[val].length > buflen - 1) msg = "Message too long";
                    else msg = GAI_ERRNO_MESSAGES[val];
                }
                writeAsciiToMemory(msg, _gai_strerror.buffer);
                return _gai_strerror.buffer;
            }
            function _getTempRet0() {
                return getTempRet0();
            }
            function _getaddrinfo(node, service, hint, out) {
                var addr1 = 0;
                var port1 = 0;
                var flags = 0;
                var family1 = 0;
                var type1 = 0;
                var proto1 = 0;
                var ai1;
                function allocaddrinfo(family, type, proto, canon, addr, port) {
                    var sa, salen, ai;
                    var errno;
                    salen = family === 10 ? 28 : 16;
                    addr = family === 10 ? inetNtop6(addr) : inetNtop4(addr);
                    sa = _malloc(salen);
                    errno = writeSockaddr(sa, family, addr, port);
                    assert(!errno);
                    ai = _malloc(32);
                    HEAP32[ai + 4 >> 2] = family;
                    HEAP32[ai + 8 >> 2] = type;
                    HEAP32[ai + 12 >> 2] = proto;
                    HEAP32[ai + 24 >> 2] = canon;
                    HEAP32[ai + 20 >> 2] = sa;
                    if (family === 10) HEAP32[ai + 16 >> 2] = 28;
                    else HEAP32[ai + 16 >> 2] = 16;
                    HEAP32[ai + 28 >> 2] = 0;
                    return ai;
                }
                if (hint) {
                    flags = HEAP32[hint >> 2];
                    family1 = HEAP32[hint + 4 >> 2];
                    type1 = HEAP32[hint + 8 >> 2];
                    proto1 = HEAP32[hint + 12 >> 2];
                }
                if (type1 && !proto1) proto1 = type1 === 2 ? 17 : 6;
                if (!type1 && proto1) type1 = proto1 === 17 ? 2 : 1;
                if (proto1 === 0) proto1 = 6;
                if (type1 === 0) type1 = 1;
                if (!node && !service) return -2;
                if (flags & -1088) return -1;
                if (hint !== 0 && HEAP32[hint >> 2] & 2 && !node) return -1;
                if (flags & 32) return -2;
                if (type1 !== 0 && type1 !== 1 && type1 !== 2) return -7;
                if (family1 !== 0 && family1 !== 2 && family1 !== 10) return -6;
                if (service) {
                    service = UTF8ToString(service);
                    port1 = parseInt(service, 10);
                    if (isNaN(port1)) {
                        if (flags & 1024) return -2;
                        return -8;
                    }
                }
                if (!node) {
                    if (family1 === 0) family1 = 2;
                    if ((flags & 1) === 0) {
                        if (family1 === 2) addr1 = _htonl(2130706433);
                        else addr1 = [
                            0,
                            0,
                            0,
                            1
                        ];
                    }
                    ai1 = allocaddrinfo(family1, type1, proto1, null, addr1, port1);
                    HEAP32[out >> 2] = ai1;
                    return 0;
                }
                node = UTF8ToString(node);
                addr1 = inetPton4(node);
                if (addr1 !== null) {
                    if (family1 === 0 || family1 === 2) family1 = 2;
                    else if (family1 === 10 && flags & 8) {
                        addr1 = [
                            0,
                            0,
                            _htonl(65535),
                            addr1
                        ];
                        family1 = 10;
                    } else return -2;
                } else {
                    addr1 = inetPton6(node);
                    if (addr1 !== null) {
                        if (family1 === 0 || family1 === 10) family1 = 10;
                        else return -2;
                    }
                }
                if (addr1 != null) {
                    ai1 = allocaddrinfo(family1, type1, proto1, node, addr1, port1);
                    HEAP32[out >> 2] = ai1;
                    return 0;
                }
                if (flags & 4) return -2;
                node = DNS.lookup_name(node);
                addr1 = inetPton4(node);
                if (family1 === 0) family1 = 2;
                else if (family1 === 10) addr1 = [
                    0,
                    0,
                    _htonl(65535),
                    addr1
                ];
                ai1 = allocaddrinfo(family1, type1, proto1, null, addr1, port1);
                HEAP32[out >> 2] = ai1;
                return 0;
            }
            function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
                var info = readSockaddr(sa, salen);
                if (info.errno) return -6;
                var port = info.port;
                var addr = info.addr;
                var overflowed = false;
                if (node && nodelen) {
                    var lookup;
                    if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
                        if (flags & 8) return -2;
                    } else addr = lookup;
                    var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
                    if (numBytesWrittenExclNull + 1 >= nodelen) overflowed = true;
                }
                if (serv && servlen) {
                    port = "" + port;
                    var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
                    if (numBytesWrittenExclNull + 1 >= servlen) overflowed = true;
                }
                if (overflowed) return -12;
                return 0;
            }
            function _gettimeofday(ptr) {
                var now = Date.now();
                HEAP32[ptr >> 2] = now / 1000 | 0;
                HEAP32[ptr + 4 >> 2] = now % 1000 * 1000 | 0;
                return 0;
            }
            function _glActiveTexture(x0) {
                GLctx1["activeTexture"](x0);
            }
            function _glAttachShader(program, shader) {
                GLctx1.attachShader(GL.programs[program], GL.shaders[shader]);
            }
            function _glBeginTransformFeedback(x0) {
                GLctx1["beginTransformFeedback"](x0);
            }
            function _glBindAttribLocation(program, index, name) {
                GLctx1.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
            }
            function _glBindBuffer(target, buffer) {
                if (target == 35051) GLctx1.currentPixelPackBufferBinding = buffer;
                else if (target == 35052) GLctx1.currentPixelUnpackBufferBinding = buffer;
                GLctx1.bindBuffer(target, GL.buffers[buffer]);
            }
            function _glBindBufferBase(target, index, buffer) {
                GLctx1["bindBufferBase"](target, index, GL.buffers[buffer]);
            }
            function _glBindFramebuffer(target, framebuffer) {
                GLctx1.bindFramebuffer(target, framebuffer ? GL.framebuffers[framebuffer] : GL.currentContext.defaultFbo);
            }
            function _glBindRenderbuffer(target, renderbuffer) {
                GLctx1.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
            }
            function _glBindTexture(target, texture) {
                GLctx1.bindTexture(target, GL.textures[texture]);
            }
            function _glBindVertexArray(vao) {
                GLctx1["bindVertexArray"](GL.vaos[vao]);
            }
            function _glBlendEquation(x0) {
                GLctx1["blendEquation"](x0);
            }
            function _glBlendFunc(x0, x1) {
                GLctx1["blendFunc"](x0, x1);
            }
            function _glBlendFuncSeparate(x0, x1, x2, x3) {
                GLctx1["blendFuncSeparate"](x0, x1, x2, x3);
            }
            function _glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
                GLctx1["blitFramebuffer"](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9);
            }
            function _glBufferData(target, size, data, usage) {
                if (GL.currentContext.version >= 2) {
                    if (data) GLctx1.bufferData(target, HEAPU8, usage, data, size);
                    else GLctx1.bufferData(target, size, usage);
                } else GLctx1.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage);
            }
            function _glBufferSubData(target, offset, size, data) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.bufferSubData(target, offset, HEAPU8, data, size);
                    return;
                }
                GLctx1.bufferSubData(target, offset, HEAPU8.subarray(data, data + size));
            }
            function _glCheckFramebufferStatus(x0) {
                return GLctx1["checkFramebufferStatus"](x0);
            }
            function _glClear(x0) {
                GLctx1["clear"](x0);
            }
            function _glClearBufferfv(buffer, drawbuffer, value) {
                GLctx1["clearBufferfv"](buffer, drawbuffer, HEAPF32, value >> 2);
            }
            function _glClearColor(x0, x1, x2, x3) {
                GLctx1["clearColor"](x0, x1, x2, x3);
            }
            function _glClearDepthf(x0) {
                GLctx1["clearDepth"](x0);
            }
            function _glColorMask(red, green, blue, alpha) {
                GLctx1.colorMask(!!red, !!green, !!blue, !!alpha);
            }
            function _glCompileShader(shader) {
                GLctx1.compileShader(GL.shaders[shader]);
            }
            function _glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["compressedTexImage2D"](target, level, internalFormat, width, height, border, imageSize, data);
                    else GLctx1["compressedTexImage2D"](target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
                    return;
                }
                GLctx1["compressedTexImage2D"](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray(data, data + imageSize) : null);
            }
            function _glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, imageSize, data);
                    else GLctx1["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
                    return;
                }
                GLctx1["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray(data, data + imageSize) : null);
            }
            function _glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
                if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
                else GLctx1["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize);
            }
            function _glCopyBufferSubData(x0, x1, x2, x3, x4) {
                GLctx1["copyBufferSubData"](x0, x1, x2, x3, x4);
            }
            function _glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
                GLctx1["copyTexSubImage2D"](x0, x1, x2, x3, x4, x5, x6, x7);
            }
            function _glCreateProgram() {
                var id = GL.getNewId(GL.programs);
                var program = GLctx1.createProgram();
                program.name = id;
                program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
                program.uniformIdCounter = 1;
                GL.programs[id] = program;
                return id;
            }
            function _glCreateShader(shaderType) {
                var id = GL.getNewId(GL.shaders);
                GL.shaders[id] = GLctx1.createShader(shaderType);
                return id;
            }
            function _glCullFace(x0) {
                GLctx1["cullFace"](x0);
            }
            function _glDeleteBuffers(n, buffers) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[buffers + i * 4 >> 2];
                    var buffer = GL.buffers[id];
                    if (!buffer) continue;
                    GLctx1.deleteBuffer(buffer);
                    buffer.name = 0;
                    GL.buffers[id] = null;
                    if (id == GLctx1.currentPixelPackBufferBinding) GLctx1.currentPixelPackBufferBinding = 0;
                    if (id == GLctx1.currentPixelUnpackBufferBinding) GLctx1.currentPixelUnpackBufferBinding = 0;
                }
            }
            function _glDeleteFramebuffers(n, framebuffers) {
                for(var i = 0; i < n; ++i){
                    var id = HEAP32[framebuffers + i * 4 >> 2];
                    var framebuffer = GL.framebuffers[id];
                    if (!framebuffer) continue;
                    GLctx1.deleteFramebuffer(framebuffer);
                    framebuffer.name = 0;
                    GL.framebuffers[id] = null;
                }
            }
            function _glDeleteProgram(id) {
                if (!id) return;
                var program = GL.programs[id];
                if (!program) {
                    GL.recordError(1281);
                    return;
                }
                GLctx1.deleteProgram(program);
                program.name = 0;
                GL.programs[id] = null;
            }
            function _glDeleteRenderbuffers(n, renderbuffers) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[renderbuffers + i * 4 >> 2];
                    var renderbuffer = GL.renderbuffers[id];
                    if (!renderbuffer) continue;
                    GLctx1.deleteRenderbuffer(renderbuffer);
                    renderbuffer.name = 0;
                    GL.renderbuffers[id] = null;
                }
            }
            function _glDeleteShader(id) {
                if (!id) return;
                var shader = GL.shaders[id];
                if (!shader) {
                    GL.recordError(1281);
                    return;
                }
                GLctx1.deleteShader(shader);
                GL.shaders[id] = null;
            }
            function _glDeleteTextures(n, textures) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[textures + i * 4 >> 2];
                    var texture = GL.textures[id];
                    if (!texture) continue;
                    GLctx1.deleteTexture(texture);
                    texture.name = 0;
                    GL.textures[id] = null;
                }
            }
            function _glDeleteVertexArrays(n, vaos) {
                for(var i = 0; i < n; i++){
                    var id = HEAP32[vaos + i * 4 >> 2];
                    GLctx1["deleteVertexArray"](GL.vaos[id]);
                    GL.vaos[id] = null;
                }
            }
            function _glDepthFunc(x0) {
                GLctx1["depthFunc"](x0);
            }
            function _glDepthMask(flag) {
                GLctx1.depthMask(!!flag);
            }
            function _glDisable(x0) {
                GLctx1["disable"](x0);
            }
            function _glDisableVertexAttribArray(index) {
                GLctx1.disableVertexAttribArray(index);
            }
            function _glDrawArrays(mode, first, count) {
                GLctx1.drawArrays(mode, first, count);
            }
            function _glDrawArraysInstanced(mode, first, count, primcount) {
                GLctx1["drawArraysInstanced"](mode, first, count, primcount);
            }
            function _glDrawBuffers(n, bufs) {
                var bufArray = tempFixedLengthArray[n];
                for(var i = 0; i < n; i++)bufArray[i] = HEAP32[bufs + i * 4 >> 2];
                GLctx1["drawBuffers"](bufArray);
            }
            function _glDrawElementsInstanced(mode, count, type, indices, primcount) {
                GLctx1["drawElementsInstanced"](mode, count, type, indices, primcount);
            }
            function _glEnable(x0) {
                GLctx1["enable"](x0);
            }
            function _glEnableVertexAttribArray(index) {
                GLctx1.enableVertexAttribArray(index);
            }
            function _glEndTransformFeedback() {
                GLctx1["endTransformFeedback"]();
            }
            function _glFinish() {
                GLctx1["finish"]();
            }
            function _glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
                GLctx1.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer]);
            }
            function _glFramebufferTexture2D(target, attachment, textarget, texture, level) {
                GLctx1.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level);
            }
            function _glFramebufferTextureLayer(target, attachment, texture, level, layer) {
                GLctx1.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
            }
            function _glFrontFace(x0) {
                GLctx1["frontFace"](x0);
            }
            function _glGenBuffers(n, buffers) {
                __glGenObject(n, buffers, "createBuffer", GL.buffers);
            }
            function _glGenFramebuffers(n, ids) {
                __glGenObject(n, ids, "createFramebuffer", GL.framebuffers);
            }
            function _glGenRenderbuffers(n, renderbuffers) {
                __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers);
            }
            function _glGenTextures(n, textures) {
                __glGenObject(n, textures, "createTexture", GL.textures);
            }
            function _glGenVertexArrays(n, arrays) {
                __glGenObject(n, arrays, "createVertexArray", GL.vaos);
            }
            function _glGenerateMipmap(x0) {
                GLctx1["generateMipmap"](x0);
            }
            function _glGetError() {
                var error = GLctx1.getError() || GL.lastError;
                GL.lastError = 0;
                return error;
            }
            function _glGetFloatv(name_, p) {
                emscriptenWebGLGet(name_, p, 2);
            }
            function _glGetIntegerv(name_, p) {
                emscriptenWebGLGet(name_, p, 0);
            }
            function _glGetProgramInfoLog(program, maxLength, length, infoLog) {
                var log = GLctx1.getProgramInfoLog(GL.programs[program]);
                if (log === null) log = "(unknown error)";
                var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
                if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
            }
            function _glGetProgramiv(program, pname, p) {
                if (!p) {
                    GL.recordError(1281);
                    return;
                }
                if (program >= GL.counter) {
                    GL.recordError(1281);
                    return;
                }
                program = GL.programs[program];
                if (pname == 35716) {
                    var log = GLctx1.getProgramInfoLog(program);
                    if (log === null) log = "(unknown error)";
                    HEAP32[p >> 2] = log.length + 1;
                } else if (pname == 35719) {
                    if (!program.maxUniformLength) for(var i = 0; i < GLctx1.getProgramParameter(program, 35718); ++i)program.maxUniformLength = Math.max(program.maxUniformLength, GLctx1.getActiveUniform(program, i).name.length + 1);
                    HEAP32[p >> 2] = program.maxUniformLength;
                } else if (pname == 35722) {
                    if (!program.maxAttributeLength) for(var i = 0; i < GLctx1.getProgramParameter(program, 35721); ++i)program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx1.getActiveAttrib(program, i).name.length + 1);
                    HEAP32[p >> 2] = program.maxAttributeLength;
                } else if (pname == 35381) {
                    if (!program.maxUniformBlockNameLength) for(var i = 0; i < GLctx1.getProgramParameter(program, 35382); ++i)program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx1.getActiveUniformBlockName(program, i).length + 1);
                    HEAP32[p >> 2] = program.maxUniformBlockNameLength;
                } else HEAP32[p >> 2] = GLctx1.getProgramParameter(program, pname);
            }
            function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
                var log = GLctx1.getShaderInfoLog(GL.shaders[shader]);
                if (log === null) log = "(unknown error)";
                var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
                if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
            }
            function _glGetShaderiv(shader, pname, p) {
                if (!p) {
                    GL.recordError(1281);
                    return;
                }
                if (pname == 35716) {
                    var log = GLctx1.getShaderInfoLog(GL.shaders[shader]);
                    if (log === null) log = "(unknown error)";
                    var logLength = log ? log.length + 1 : 0;
                    HEAP32[p >> 2] = logLength;
                } else if (pname == 35720) {
                    var source = GLctx1.getShaderSource(GL.shaders[shader]);
                    var sourceLength = source ? source.length + 1 : 0;
                    HEAP32[p >> 2] = sourceLength;
                } else HEAP32[p >> 2] = GLctx1.getShaderParameter(GL.shaders[shader], pname);
            }
            function _glGetString(name_) {
                var ret = GL.stringCache[name_];
                if (!ret) {
                    switch(name_){
                        case 7939:
                            var exts = GLctx1.getSupportedExtensions() || [];
                            exts = exts.concat(exts.map(function(e) {
                                return "GL_" + e;
                            }));
                            ret = stringToNewUTF8(exts.join(" "));
                            break;
                        case 7936:
                        case 7937:
                        case 37445:
                        case 37446:
                            var s = GLctx1.getParameter(name_);
                            if (!s) GL.recordError(1280);
                            ret = s && stringToNewUTF8(s);
                            break;
                        case 7938:
                            var glVersion = GLctx1.getParameter(7938);
                            if (GL.currentContext.version >= 2) glVersion = "OpenGL ES 3.0 (" + glVersion + ")";
                            else glVersion = "OpenGL ES 2.0 (" + glVersion + ")";
                            ret = stringToNewUTF8(glVersion);
                            break;
                        case 35724:
                            var glslVersion = GLctx1.getParameter(35724);
                            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
                            var ver_num = glslVersion.match(ver_re);
                            if (ver_num !== null) {
                                if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
                                glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")";
                            }
                            ret = stringToNewUTF8(glslVersion);
                            break;
                        default:
                            GL.recordError(1280);
                    }
                    GL.stringCache[name_] = ret;
                }
                return ret;
            }
            function _glGetStringi(name, index) {
                if (GL.currentContext.version < 2) {
                    GL.recordError(1282);
                    return 0;
                }
                var stringiCache = GL.stringiCache[name];
                if (stringiCache) {
                    if (index < 0 || index >= stringiCache.length) {
                        GL.recordError(1281);
                        return 0;
                    }
                    return stringiCache[index];
                }
                switch(name){
                    case 7939:
                        var exts = GLctx1.getSupportedExtensions() || [];
                        exts = exts.concat(exts.map(function(e) {
                            return "GL_" + e;
                        }));
                        exts = exts.map(function(e) {
                            return stringToNewUTF8(e);
                        });
                        stringiCache = GL.stringiCache[name] = exts;
                        if (index < 0 || index >= stringiCache.length) {
                            GL.recordError(1281);
                            return 0;
                        }
                        return stringiCache[index];
                    default:
                        GL.recordError(1280);
                        return 0;
                }
            }
            function _glGetUniformBlockIndex(program, uniformBlockName) {
                return GLctx1["getUniformBlockIndex"](GL.programs[program], UTF8ToString(uniformBlockName));
            }
            function _glGetUniformLocation(program, name) {
                name = UTF8ToString(name);
                if (program = GL.programs[program]) {
                    webglPrepareUniformLocationsBeforeFirstUse(program);
                    var uniformLocsById = program.uniformLocsById;
                    var arrayIndex = 0;
                    var uniformBaseName = name;
                    var leftBrace = webglGetLeftBracePos(name);
                    if (leftBrace > 0) {
                        arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
                        uniformBaseName = name.slice(0, leftBrace);
                    }
                    var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
                    if (sizeAndId && arrayIndex < sizeAndId[0]) {
                        arrayIndex += sizeAndId[1];
                        if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx1.getUniformLocation(program, name)) return arrayIndex;
                    }
                } else GL.recordError(1281);
                return -1;
            }
            function _glInvalidateFramebuffer(target, numAttachments, attachments) {
                var list = tempFixedLengthArray[numAttachments];
                for(var i = 0; i < numAttachments; i++)list[i] = HEAP32[attachments + i * 4 >> 2];
                GLctx1["invalidateFramebuffer"](target, list);
            }
            function _glLinkProgram(program) {
                program = GL.programs[program];
                GLctx1.linkProgram(program);
                program.uniformLocsById = 0;
                program.uniformSizeAndIdsByName = {
                };
            }
            function _glPixelStorei(pname, param) {
                if (pname == 3317) GL.unpackAlignment = param;
                GLctx1.pixelStorei(pname, param);
            }
            function _glReadBuffer(x0) {
                GLctx1["readBuffer"](x0);
            }
            function _glReadPixels(x, y, width, height, format, type, pixels) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelPackBufferBinding) GLctx1.readPixels(x, y, width, height, format, type, pixels);
                    else {
                        var heap = heapObjectForWebGLType(type);
                        GLctx1.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                    }
                    return;
                }
                var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
                if (!pixelData) {
                    GL.recordError(1280);
                    return;
                }
                GLctx1.readPixels(x, y, width, height, format, type, pixelData);
            }
            function _glRenderbufferStorage(x0, x1, x2, x3) {
                GLctx1["renderbufferStorage"](x0, x1, x2, x3);
            }
            function _glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) {
                GLctx1["renderbufferStorageMultisample"](x0, x1, x2, x3, x4);
            }
            function _glScissor(x0, x1, x2, x3) {
                GLctx1["scissor"](x0, x1, x2, x3);
            }
            function _glShaderSource(shader, count, string, length) {
                var source = GL.getSource(shader, count, string, length);
                GLctx1.shaderSource(GL.shaders[shader], source);
            }
            function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelUnpackBufferBinding) GLctx1.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
                    else if (pixels) {
                        var heap = heapObjectForWebGLType(type);
                        GLctx1.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                    } else GLctx1.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
                    return;
                }
                GLctx1.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
            }
            function _glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
                if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, pixels);
                else if (pixels) {
                    var heap = heapObjectForWebGLType(type);
                    GLctx1["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                } else GLctx1["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, null);
            }
            function _glTexParameterf(x0, x1, x2) {
                GLctx1["texParameterf"](x0, x1, x2);
            }
            function _glTexParameteri(x0, x1, x2) {
                GLctx1["texParameteri"](x0, x1, x2);
            }
            function _glTexStorage2D(x0, x1, x2, x3, x4) {
                GLctx1["texStorage2D"](x0, x1, x2, x3, x4);
            }
            function _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
                if (GL.currentContext.version >= 2) {
                    if (GLctx1.currentPixelUnpackBufferBinding) GLctx1.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
                    else if (pixels) {
                        var heap = heapObjectForWebGLType(type);
                        GLctx1.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                    } else GLctx1.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
                    return;
                }
                var pixelData = null;
                if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
                GLctx1.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
            }
            function _glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
                if (GLctx1.currentPixelUnpackBufferBinding) GLctx1["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
                else if (pixels) {
                    var heap = heapObjectForWebGLType(type);
                    GLctx1["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
                } else GLctx1["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
            }
            function _glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
                program = GL.programs[program];
                var vars = [];
                for(var i = 0; i < count; i++)vars.push(UTF8ToString(HEAP32[varyings + i * 4 >> 2]));
                GLctx1["transformFeedbackVaryings"](program, vars, bufferMode);
            }
            function _glUniform1f(location, v0) {
                GLctx1.uniform1f(webglGetUniformLocation(location), v0);
            }
            function _glUniform1i(location, v0) {
                GLctx1.uniform1i(webglGetUniformLocation(location), v0);
            }
            function _glUniform1iv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform1iv(webglGetUniformLocation(location), HEAP32, value >> 2, count);
                    return;
                }
                if (count <= 288) {
                    var view = __miniTempWebGLIntBuffers[count - 1];
                    for(var i = 0; i < count; ++i)view[i] = HEAP32[value + 4 * i >> 2];
                } else var view = HEAP32.subarray(value >> 2, value + count * 4 >> 2);
                GLctx1.uniform1iv(webglGetUniformLocation(location), view);
            }
            function _glUniform1ui(location, v0) {
                GLctx1.uniform1ui(webglGetUniformLocation(location), v0);
            }
            function _glUniform2f(location, v0, v1) {
                GLctx1.uniform2f(webglGetUniformLocation(location), v0, v1);
            }
            function _glUniform2fv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform2fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 2);
                    return;
                }
                if (count <= 144) {
                    var view = miniTempWebGLFloatBuffers[2 * count - 1];
                    for(var i = 0; i < 2 * count; i += 2){
                        view[i] = HEAPF32[value + 4 * i >> 2];
                        view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 8 >> 2);
                GLctx1.uniform2fv(webglGetUniformLocation(location), view);
            }
            function _glUniform2i(location, v0, v1) {
                GLctx1.uniform2i(webglGetUniformLocation(location), v0, v1);
            }
            function _glUniform2iv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform2iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 2);
                    return;
                }
                if (count <= 144) {
                    var view = __miniTempWebGLIntBuffers[2 * count - 1];
                    for(var i = 0; i < 2 * count; i += 2){
                        view[i] = HEAP32[value + 4 * i >> 2];
                        view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
                    }
                } else var view = HEAP32.subarray(value >> 2, value + count * 8 >> 2);
                GLctx1.uniform2iv(webglGetUniformLocation(location), view);
            }
            function _glUniform3f(location, v0, v1, v2) {
                GLctx1.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
            }
            function _glUniform3fv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform3fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 3);
                    return;
                }
                if (count <= 96) {
                    var view = miniTempWebGLFloatBuffers[3 * count - 1];
                    for(var i = 0; i < 3 * count; i += 3){
                        view[i] = HEAPF32[value + 4 * i >> 2];
                        view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                        view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 12 >> 2);
                GLctx1.uniform3fv(webglGetUniformLocation(location), view);
            }
            function _glUniform3i(location, v0, v1, v2) {
                GLctx1.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
            }
            function _glUniform4f(location, v0, v1, v2, v3) {
                GLctx1.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
            }
            function _glUniform4fv(location, count, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniform4fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 4);
                    return;
                }
                if (count <= 72) {
                    var view = miniTempWebGLFloatBuffers[4 * count - 1];
                    var heap = HEAPF32;
                    value >>= 2;
                    for(var i = 0; i < 4 * count; i += 4){
                        var dst = value + i;
                        view[i] = heap[dst];
                        view[i + 1] = heap[dst + 1];
                        view[i + 2] = heap[dst + 2];
                        view[i + 3] = heap[dst + 3];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2);
                GLctx1.uniform4fv(webglGetUniformLocation(location), view);
            }
            function _glUniform4i(location, v0, v1, v2, v3) {
                GLctx1.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
            }
            function _glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
                program = GL.programs[program];
                GLctx1["uniformBlockBinding"](program, uniformBlockIndex, uniformBlockBinding);
            }
            function _glUniformMatrix2fv(location, count, transpose, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 4);
                    return;
                }
                if (count <= 72) {
                    var view = miniTempWebGLFloatBuffers[4 * count - 1];
                    for(var i = 0; i < 4 * count; i += 4){
                        view[i] = HEAPF32[value + 4 * i >> 2];
                        view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                        view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
                        view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2);
                GLctx1.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
            }
            function _glUniformMatrix3fv(location, count, transpose, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 9);
                    return;
                }
                if (count <= 32) {
                    var view = miniTempWebGLFloatBuffers[9 * count - 1];
                    for(var i = 0; i < 9 * count; i += 9){
                        view[i] = HEAPF32[value + 4 * i >> 2];
                        view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
                        view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
                        view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
                        view[i + 4] = HEAPF32[value + (4 * i + 16) >> 2];
                        view[i + 5] = HEAPF32[value + (4 * i + 20) >> 2];
                        view[i + 6] = HEAPF32[value + (4 * i + 24) >> 2];
                        view[i + 7] = HEAPF32[value + (4 * i + 28) >> 2];
                        view[i + 8] = HEAPF32[value + (4 * i + 32) >> 2];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 36 >> 2);
                GLctx1.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
            }
            function _glUniformMatrix4fv(location, count, transpose, value) {
                if (GL.currentContext.version >= 2) {
                    GLctx1.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 16);
                    return;
                }
                if (count <= 18) {
                    var view = miniTempWebGLFloatBuffers[16 * count - 1];
                    var heap = HEAPF32;
                    value >>= 2;
                    for(var i = 0; i < 16 * count; i += 16){
                        var dst = value + i;
                        view[i] = heap[dst];
                        view[i + 1] = heap[dst + 1];
                        view[i + 2] = heap[dst + 2];
                        view[i + 3] = heap[dst + 3];
                        view[i + 4] = heap[dst + 4];
                        view[i + 5] = heap[dst + 5];
                        view[i + 6] = heap[dst + 6];
                        view[i + 7] = heap[dst + 7];
                        view[i + 8] = heap[dst + 8];
                        view[i + 9] = heap[dst + 9];
                        view[i + 10] = heap[dst + 10];
                        view[i + 11] = heap[dst + 11];
                        view[i + 12] = heap[dst + 12];
                        view[i + 13] = heap[dst + 13];
                        view[i + 14] = heap[dst + 14];
                        view[i + 15] = heap[dst + 15];
                    }
                } else var view = HEAPF32.subarray(value >> 2, value + count * 64 >> 2);
                GLctx1.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
            }
            function _glUseProgram(program) {
                program = GL.programs[program];
                GLctx1.useProgram(program);
                GLctx1.currentProgram = program;
            }
            function _glVertexAttrib4f(x0, x1, x2, x3, x4) {
                GLctx1["vertexAttrib4f"](x0, x1, x2, x3, x4);
            }
            function _glVertexAttrib4fv(index, v) {
                GLctx1.vertexAttrib4f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2], HEAPF32[v + 12 >> 2]);
            }
            function _glVertexAttribDivisor(index, divisor) {
                GLctx1["vertexAttribDivisor"](index, divisor);
            }
            function _glVertexAttribI4ui(x0, x1, x2, x3, x4) {
                GLctx1["vertexAttribI4ui"](x0, x1, x2, x3, x4);
            }
            function _glVertexAttribIPointer(index, size, type, stride, ptr) {
                GLctx1["vertexAttribIPointer"](index, size, type, stride, ptr);
            }
            function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
                GLctx1.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
            }
            function _glViewport(x0, x1, x2, x3) {
                GLctx1["viewport"](x0, x1, x2, x3);
            }
            function _gmtime_r(time, tmPtr) {
                var date = new Date(HEAP32[time >> 2] * 1000);
                HEAP32[tmPtr >> 2] = date.getUTCSeconds();
                HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
                HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
                HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
                HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
                HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
                HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
                HEAP32[tmPtr + 36 >> 2] = 0;
                HEAP32[tmPtr + 32 >> 2] = 0;
                var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
                var yday = (date.getTime() - start) / 86400000 | 0;
                HEAP32[tmPtr + 28 >> 2] = yday;
                if (!_gmtime_r.GMTString) _gmtime_r.GMTString = allocateUTF8("GMT");
                HEAP32[tmPtr + 40 >> 2] = _gmtime_r.GMTString;
                return tmPtr;
            }
            var GodotRuntime = {
                get_func: function(ptr) {
                    return wasmTable.get(ptr);
                },
                error: function() {
                    err1.apply(null, Array.from(arguments));
                },
                print: function() {
                    out1.apply(null, Array.from(arguments));
                },
                malloc: function(p_size) {
                    return _malloc(p_size);
                },
                free: function(p_ptr) {
                    _free(p_ptr);
                },
                getHeapValue: function(p_ptr, p_type) {
                    return getValue(p_ptr, p_type);
                },
                setHeapValue: function(p_ptr, p_value, p_type) {
                    setValue(p_ptr, p_value, p_type);
                },
                heapSub: function(p_heap, p_ptr, p_len) {
                    const bytes = p_heap.BYTES_PER_ELEMENT;
                    return p_heap.subarray(p_ptr / bytes, p_ptr / bytes + p_len);
                },
                heapSlice: function(p_heap, p_ptr, p_len) {
                    const bytes = p_heap.BYTES_PER_ELEMENT;
                    return p_heap.slice(p_ptr / bytes, p_ptr / bytes + p_len);
                },
                heapCopy: function(p_dst, p_src, p_ptr) {
                    const bytes = p_src.BYTES_PER_ELEMENT;
                    return p_dst.set(p_src, p_ptr / bytes);
                },
                parseString: function(p_ptr) {
                    return UTF8ToString(p_ptr);
                },
                parseStringArray: function(p_ptr, p_size) {
                    const strings = [];
                    const ptrs = GodotRuntime.heapSub(HEAP32, p_ptr, p_size);
                    ptrs.forEach(function(ptr) {
                        strings.push(GodotRuntime.parseString(ptr));
                    });
                    return strings;
                },
                strlen: function(p_str) {
                    return lengthBytesUTF8(p_str);
                },
                allocString: function(p_str) {
                    const length = GodotRuntime.strlen(p_str) + 1;
                    const c_str = GodotRuntime.malloc(length);
                    stringToUTF8(p_str, c_str, length);
                    return c_str;
                },
                allocStringArray: function(p_strings) {
                    const size = p_strings.length;
                    const c_ptr = GodotRuntime.malloc(size * 4);
                    for(let i = 0; i < size; i++)HEAP32[(c_ptr >> 2) + i] = GodotRuntime.allocString(p_strings[i]);
                    return c_ptr;
                },
                freeStringArray: function(p_ptr, p_len) {
                    for(let i = 0; i < p_len; i++)GodotRuntime.free(HEAP32[(p_ptr >> 2) + i]);
                    GodotRuntime.free(p_ptr);
                },
                stringToHeap: function(p_str, p_ptr, p_len) {
                    return stringToUTF8Array(p_str, HEAP8, p_ptr, p_len);
                }
            };
            var GodotConfig = {
                canvas: null,
                locale: "en",
                canvas_resize_policy: 2,
                virtual_keyboard: false,
                persistent_drops: false,
                on_execute: null,
                on_exit: null,
                init_config: function(p_opts) {
                    GodotConfig.canvas_resize_policy = p_opts["canvasResizePolicy"];
                    GodotConfig.canvas = p_opts["canvas"];
                    GodotConfig.locale = p_opts["locale"] || GodotConfig.locale;
                    GodotConfig.virtual_keyboard = p_opts["virtualKeyboard"];
                    GodotConfig.persistent_drops = !!p_opts["persistentDrops"];
                    GodotConfig.on_execute = p_opts["onExecute"];
                    GodotConfig.on_exit = p_opts["onExit"];
                    if (p_opts["focusCanvas"]) GodotConfig.canvas.focus();
                },
                locate_file: function(file) {
                    return Module["locateFile"](file);
                },
                clear: function() {
                    GodotConfig.canvas = null;
                    GodotConfig.locale = "en";
                    GodotConfig.canvas_resize_policy = 2;
                    GodotConfig.virtual_keyboard = false;
                    GodotConfig.persistent_drops = false;
                    GodotConfig.on_execute = null;
                    GodotConfig.on_exit = null;
                }
            };
            var GodotFS = {
                _idbfs: false,
                _syncing: false,
                _mount_points: [],
                is_persistent: function() {
                    return GodotFS._idbfs ? 1 : 0;
                },
                init: function(persistentPaths) {
                    GodotFS._idbfs = false;
                    if (!Array.isArray(persistentPaths)) return Promise.reject(new Error("Persistent paths must be an array"));
                    if (!persistentPaths.length) return Promise.resolve();
                    GodotFS._mount_points = persistentPaths.slice();
                    function createRecursive(dir) {
                        try {
                            FS.stat(dir);
                        } catch (e) {
                            if (e.errno !== ERRNO_CODES.ENOENT) throw e;
                            FS.mkdirTree(dir);
                        }
                    }
                    GodotFS._mount_points.forEach(function(path) {
                        createRecursive(path);
                        FS.mount(IDBFS, {
                        }, path);
                    });
                    return new Promise(function(resolve, reject) {
                        FS.syncfs(true, function(err) {
                            if (err) {
                                GodotFS._mount_points = [];
                                GodotFS._idbfs = false;
                                GodotRuntime.print(`IndexedDB not available: ${err.message}`);
                            } else GodotFS._idbfs = true;
                            resolve(err);
                        });
                    });
                },
                deinit: function() {
                    GodotFS._mount_points.forEach(function(path) {
                        try {
                            FS.unmount(path);
                        } catch (e) {
                            GodotRuntime.print("Already unmounted", e);
                        }
                        if (GodotFS._idbfs && IDBFS.dbs[path]) {
                            IDBFS.dbs[path].close();
                            delete IDBFS.dbs[path];
                        }
                    });
                    GodotFS._mount_points = [];
                    GodotFS._idbfs = false;
                    GodotFS._syncing = false;
                },
                sync: function() {
                    if (GodotFS._syncing) {
                        GodotRuntime.error("Already syncing!");
                        return Promise.resolve();
                    }
                    GodotFS._syncing = true;
                    return new Promise(function(resolve, reject) {
                        FS.syncfs(false, function(error) {
                            if (error) GodotRuntime.error(`Failed to save IDB file system: ${error.message}`);
                            GodotFS._syncing = false;
                            resolve(error);
                        });
                    });
                },
                copy_to_fs: function(path, buffer) {
                    const idx = path.lastIndexOf("/");
                    let dir = "/";
                    if (idx > 0) dir = path.slice(0, idx);
                    try {
                        FS.stat(dir);
                    } catch (e) {
                        if (e.errno !== ERRNO_CODES.ENOENT) throw e;
                        FS.mkdirTree(dir);
                    }
                    FS.writeFile(path, new Uint8Array(buffer));
                }
            };
            var GodotOS = {
                request_quit: function() {
                },
                _async_cbs: [],
                _fs_sync_promise: null,
                atexit: function(p_promise_cb) {
                    GodotOS._async_cbs.push(p_promise_cb);
                },
                cleanup: function(exit_code) {
                    const cb = GodotConfig.on_exit;
                    GodotFS.deinit();
                    GodotConfig.clear();
                    if (cb) cb(exit_code);
                },
                finish_async: function(callback) {
                    GodotOS._fs_sync_promise.then(function(err) {
                        const promises = [];
                        GodotOS._async_cbs.forEach(function(cb) {
                            promises.push(new Promise(cb));
                        });
                        return Promise.all(promises);
                    }).then(function() {
                        return GodotFS.sync();
                    }).then(function(err) {
                        setTimeout(function() {
                            callback();
                        }, 0);
                    });
                }
            };
            var GodotAudio = {
                ctx: null,
                input: null,
                driver: null,
                interval: 0,
                init: function(mix_rate, latency, onstatechange, onlatencyupdate) {
                    const opts = {
                    };
                    if (mix_rate) opts["sampleRate"] = mix_rate;
                    const ctx = new (window.AudioContext || window.webkitAudioContext)(opts);
                    GodotAudio.ctx = ctx;
                    ctx.onstatechange = function() {
                        let state = 0;
                        switch(ctx.state){
                            case "suspended":
                                state = 0;
                                break;
                            case "running":
                                state = 1;
                                break;
                            case "closed":
                                state = 2;
                                break;
                        }
                        onstatechange(state);
                    };
                    ctx.onstatechange();
                    GodotAudio.interval = setInterval(function() {
                        let computed_latency = 0;
                        if (ctx.baseLatency) computed_latency += GodotAudio.ctx.baseLatency;
                        if (ctx.outputLatency) computed_latency += GodotAudio.ctx.outputLatency;
                        onlatencyupdate(computed_latency);
                    }, 1000);
                    GodotOS.atexit(GodotAudio.close_async);
                    return ctx.destination.channelCount;
                },
                create_input: function(callback) {
                    if (GodotAudio.input) return 0;
                    function gotMediaInput(stream) {
                        try {
                            GodotAudio.input = GodotAudio.ctx.createMediaStreamSource(stream);
                            callback(GodotAudio.input);
                        } catch (e) {
                            GodotRuntime.error("Failed creaating input.", e);
                        }
                    }
                    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.mediaDevices.getUserMedia({
                        "audio": true
                    }).then(gotMediaInput, function(e) {
                        GodotRuntime.error("Error getting user media.", e);
                    });
                    else {
                        if (!navigator.getUserMedia) navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                        if (!navigator.getUserMedia) {
                            GodotRuntime.error("getUserMedia not available.");
                            return 1;
                        }
                        navigator.getUserMedia({
                            "audio": true
                        }, gotMediaInput, function(e) {
                            GodotRuntime.print(e);
                        });
                    }
                    return 0;
                },
                close_async: function(resolve, reject) {
                    const ctx = GodotAudio.ctx;
                    GodotAudio.ctx = null;
                    if (!ctx) {
                        resolve();
                        return;
                    }
                    if (GodotAudio.interval) {
                        clearInterval(GodotAudio.interval);
                        GodotAudio.interval = 0;
                    }
                    if (GodotAudio.input) {
                        GodotAudio.input.disconnect();
                        GodotAudio.input = null;
                    }
                    let closed = Promise.resolve();
                    if (GodotAudio.driver) closed = GodotAudio.driver.close();
                    closed.then(function() {
                        return ctx.close();
                    }).then(function() {
                        ctx.onstatechange = null;
                        resolve();
                    }).catch(function(e) {
                        ctx.onstatechange = null;
                        GodotRuntime.error("Error closing AudioContext", e);
                        resolve();
                    });
                }
            };
            function _godot_audio_capture_start() {
                return GodotAudio.create_input(function(input) {
                    input.connect(GodotAudio.driver.get_node());
                });
            }
            function _godot_audio_capture_stop() {
                if (GodotAudio.input) {
                    const tracks = GodotAudio.input["mediaStream"]["getTracks"]();
                    for(let i = 0; i < tracks.length; i++)tracks[i]["stop"]();
                    GodotAudio.input.disconnect();
                    GodotAudio.input = null;
                }
            }
            function _godot_audio_has_script_processor() {
                return GodotAudio.ctx && GodotAudio.ctx.createScriptProcessor ? 1 : 0;
            }
            function _godot_audio_has_worklet() {
                return GodotAudio.ctx && GodotAudio.ctx.audioWorklet ? 1 : 0;
            }
            function _godot_audio_init(p_mix_rate, p_latency, p_state_change, p_latency_update) {
                const statechange = GodotRuntime.get_func(p_state_change);
                const latencyupdate = GodotRuntime.get_func(p_latency_update);
                const mix_rate = GodotRuntime.getHeapValue(p_mix_rate, "i32");
                const channels = GodotAudio.init(mix_rate, p_latency, statechange, latencyupdate);
                GodotRuntime.setHeapValue(p_mix_rate, GodotAudio.ctx.sampleRate, "i32");
                return channels;
            }
            function _godot_audio_is_available() {
                if (!(window.AudioContext || window.webkitAudioContext)) return 0;
                return 1;
            }
            function _godot_audio_resume() {
                if (GodotAudio.ctx && GodotAudio.ctx.state !== "running") GodotAudio.ctx.resume();
            }
            var GodotAudioScript = {
                script: null,
                create: function(buffer_length, channel_count) {
                    GodotAudioScript.script = GodotAudio.ctx.createScriptProcessor(buffer_length, 2, channel_count);
                    GodotAudio.driver = GodotAudioScript;
                    return GodotAudioScript.script.bufferSize;
                },
                start: function(p_in_buf, p_in_size, p_out_buf, p_out_size, onprocess) {
                    GodotAudioScript.script.onaudioprocess = function(event) {
                        const inb = GodotRuntime.heapSub(HEAPF32, p_in_buf, p_in_size);
                        const input = event.inputBuffer;
                        if (GodotAudio.input) {
                            const inlen = input.getChannelData(0).length;
                            for(let ch = 0; ch < 2; ch++){
                                const data = input.getChannelData(ch);
                                for(let s = 0; s < inlen; s++)inb[s * 2 + ch] = data[s];
                            }
                        }
                        onprocess();
                        const outb = GodotRuntime.heapSub(HEAPF32, p_out_buf, p_out_size);
                        const output = event.outputBuffer;
                        const channels = output.numberOfChannels;
                        for(let ch = 0; ch < channels; ch++){
                            const data = output.getChannelData(ch);
                            for(let sample = 0; sample < data.length; sample++)data[sample] = outb[sample * channels + ch];
                        }
                    };
                    GodotAudioScript.script.connect(GodotAudio.ctx.destination);
                },
                get_node: function() {
                    return GodotAudioScript.script;
                },
                close: function() {
                    return new Promise(function(resolve, reject) {
                        GodotAudioScript.script.disconnect();
                        GodotAudioScript.script.onaudioprocess = null;
                        GodotAudioScript.script = null;
                        resolve();
                    });
                }
            };
            function _godot_audio_script_create(buffer_length, channel_count) {
                const buf_len = GodotRuntime.getHeapValue(buffer_length, "i32");
                try {
                    const out_len = GodotAudioScript.create(buf_len, channel_count);
                    GodotRuntime.setHeapValue(buffer_length, out_len, "i32");
                } catch (e) {
                    GodotRuntime.error("Error starting AudioDriverScriptProcessor", e);
                    return 1;
                }
                return 0;
            }
            function _godot_audio_script_start(p_in_buf, p_in_size, p_out_buf, p_out_size, p_cb) {
                const onprocess = GodotRuntime.get_func(p_cb);
                GodotAudioScript.start(p_in_buf, p_in_size, p_out_buf, p_out_size, onprocess);
            }
            var GodotAudioWorklet = {
                promise: null,
                worklet: null,
                ring_buffer: null,
                create: function(channels) {
                    const path = GodotConfig.locate_file("godot.audio.worklet.js");
                    GodotAudioWorklet.promise = GodotAudio.ctx.audioWorklet.addModule(path).then(function() {
                        GodotAudioWorklet.worklet = new AudioWorkletNode(GodotAudio.ctx, "godot-processor", {
                            "outputChannelCount": [
                                channels
                            ]
                        });
                        return Promise.resolve();
                    });
                    GodotAudio.driver = GodotAudioWorklet;
                },
                start: function(in_buf, out_buf, state) {
                    GodotAudioWorklet.promise.then(function() {
                        const node = GodotAudioWorklet.worklet;
                        node.connect(GodotAudio.ctx.destination);
                        node.port.postMessage({
                            "cmd": "start",
                            "data": [
                                state,
                                in_buf,
                                out_buf
                            ]
                        });
                        node.port.onmessage = function(event) {
                            GodotRuntime.error(event.data);
                        };
                    });
                },
                start_no_threads: function(p_out_buf, p_out_size, out_callback, p_in_buf, p_in_size, in_callback) {
                    function RingBuffer() {
                        let wpos = 0;
                        let rpos = 0;
                        let pending_samples = 0;
                        const wbuf = new Float32Array(p_out_size);
                        function send(port) {
                            if (pending_samples === 0) return;
                            const buffer = GodotRuntime.heapSub(HEAPF32, p_out_buf, p_out_size);
                            const size = buffer.length;
                            const tot_sent = pending_samples;
                            out_callback(wpos, pending_samples);
                            if (wpos + pending_samples >= size) {
                                const high = size - wpos;
                                wbuf.set(buffer.subarray(wpos, size));
                                pending_samples -= high;
                                wpos = 0;
                            }
                            if (pending_samples > 0) wbuf.set(buffer.subarray(wpos, wpos + pending_samples), tot_sent - pending_samples);
                            port.postMessage({
                                "cmd": "chunk",
                                "data": wbuf.subarray(0, tot_sent)
                            });
                            wpos += pending_samples;
                            pending_samples = 0;
                        }
                        this.receive = function(recv_buf) {
                            const buffer = GodotRuntime.heapSub(HEAPF32, p_in_buf, p_in_size);
                            const from = rpos;
                            let to_write = recv_buf.length;
                            let high = 0;
                            if (rpos + to_write >= p_in_size) {
                                high = p_in_size - rpos;
                                buffer.set(recv_buf.subarray(0, high), rpos);
                                to_write -= high;
                                rpos = 0;
                            }
                            if (to_write) buffer.set(recv_buf.subarray(high, to_write), rpos);
                            in_callback(from, recv_buf.length);
                            rpos += to_write;
                        };
                        this.consumed = function(size, port) {
                            pending_samples += size;
                            send(port);
                        };
                    }
                    GodotAudioWorklet.ring_buffer = new RingBuffer;
                    GodotAudioWorklet.promise.then(function() {
                        const node = GodotAudioWorklet.worklet;
                        const buffer = GodotRuntime.heapSlice(HEAPF32, p_out_buf, p_out_size);
                        node.connect(GodotAudio.ctx.destination);
                        node.port.postMessage({
                            "cmd": "start_nothreads",
                            "data": [
                                buffer,
                                p_in_size
                            ]
                        });
                        node.port.onmessage = function(event) {
                            if (!GodotAudioWorklet.worklet) return;
                            if (event.data["cmd"] === "read") {
                                const read = event.data["data"];
                                GodotAudioWorklet.ring_buffer.consumed(read, GodotAudioWorklet.worklet.port);
                            } else if (event.data["cmd"] === "input") {
                                const buf = event.data["data"];
                                if (buf.length > p_in_size) {
                                    GodotRuntime.error("Input chunk is too big");
                                    return;
                                }
                                GodotAudioWorklet.ring_buffer.receive(buf);
                            } else GodotRuntime.error(event.data);
                        };
                    });
                },
                get_node: function() {
                    return GodotAudioWorklet.worklet;
                },
                close: function() {
                    return new Promise(function(resolve, reject) {
                        if (GodotAudioWorklet.promise === null) return;
                        GodotAudioWorklet.promise.then(function() {
                            GodotAudioWorklet.worklet.port.postMessage({
                                "cmd": "stop",
                                "data": null
                            });
                            GodotAudioWorklet.worklet.disconnect();
                            GodotAudioWorklet.worklet = null;
                            GodotAudioWorklet.promise = null;
                            resolve();
                        }).catch(function(err) {
                        });
                    });
                }
            };
            function _godot_audio_worklet_create(channels) {
                try {
                    GodotAudioWorklet.create(channels);
                } catch (e) {
                    GodotRuntime.error("Error starting AudioDriverWorklet", e);
                    return 1;
                }
                return 0;
            }
            function _godot_audio_worklet_start_no_threads(p_out_buf, p_out_size, p_out_callback, p_in_buf, p_in_size, p_in_callback) {
                const out_callback = GodotRuntime.get_func(p_out_callback);
                const in_callback = GodotRuntime.get_func(p_in_callback);
                GodotAudioWorklet.start_no_threads(p_out_buf, p_out_size, out_callback, p_in_buf, p_in_size, in_callback);
            }
            function _godot_js_config_canvas_id_get(p_ptr, p_ptr_max) {
                GodotRuntime.stringToHeap(`#${GodotConfig.canvas.id}`, p_ptr, p_ptr_max);
            }
            function _godot_js_config_locale_get(p_ptr, p_ptr_max) {
                GodotRuntime.stringToHeap(GodotConfig.locale, p_ptr, p_ptr_max);
            }
            var GodotDisplayCursor = {
                shape: "auto",
                visible: true,
                cursors: {
                },
                set_style: function(style) {
                    GodotConfig.canvas.style.cursor = style;
                },
                set_shape: function(shape) {
                    GodotDisplayCursor.shape = shape;
                    let css = shape;
                    if (shape in GodotDisplayCursor.cursors) {
                        const c = GodotDisplayCursor.cursors[shape];
                        css = `url("${c.url}") ${c.x} ${c.y}, auto`;
                    }
                    if (GodotDisplayCursor.visible) GodotDisplayCursor.set_style(css);
                },
                clear: function() {
                    GodotDisplayCursor.set_style("");
                    GodotDisplayCursor.shape = "auto";
                    GodotDisplayCursor.visible = true;
                    Object.keys(GodotDisplayCursor.cursors).forEach(function(key) {
                        URL.revokeObjectURL(GodotDisplayCursor.cursors[key]);
                        delete GodotDisplayCursor.cursors[key];
                    });
                },
                lockPointer: function() {
                    const canvas = GodotConfig.canvas;
                    if (canvas.requestPointerLock) canvas.requestPointerLock();
                },
                releasePointer: function() {
                    if (document.exitPointerLock) document.exitPointerLock();
                },
                isPointerLocked: function() {
                    return document.pointerLockElement === GodotConfig.canvas;
                }
            };
            var GodotEventListeners = {
                handlers: [],
                has: function(target, event, method, capture) {
                    return GodotEventListeners.handlers.findIndex(function(e) {
                        return e.target === target && e.event === event && e.method === method && e.capture === capture;
                    }) !== -1;
                },
                add: function(target, event, method, capture) {
                    if (GodotEventListeners.has(target, event, method, capture)) return;
                    function Handler(p_target, p_event, p_method, p_capture) {
                        this.target = p_target;
                        this.event = p_event;
                        this.method = p_method;
                        this.capture = p_capture;
                    }
                    GodotEventListeners.handlers.push(new Handler(target, event, method, capture));
                    target.addEventListener(event, method, capture);
                },
                clear: function() {
                    GodotEventListeners.handlers.forEach(function(h) {
                        h.target.removeEventListener(h.event, h.method, h.capture);
                    });
                    GodotEventListeners.handlers.length = 0;
                }
            };
            var GodotDisplayScreen = {
                desired_size: [
                    0,
                    0
                ],
                hidpi: true,
                getPixelRatio: function() {
                    return GodotDisplayScreen.hidpi ? window.devicePixelRatio || 1 : 1;
                },
                isFullscreen: function() {
                    const elem = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                    if (elem) return elem === GodotConfig.canvas;
                    return document.fullscreen || document.mozFullScreen || document.webkitIsFullscreen;
                },
                hasFullscreen: function() {
                    return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
                },
                requestFullscreen: function() {
                    if (!GodotDisplayScreen.hasFullscreen()) return 1;
                    const canvas = GodotConfig.canvas;
                    try {
                        const promise = (canvas.requestFullscreen || canvas.msRequestFullscreen || canvas.mozRequestFullScreen || canvas.mozRequestFullscreen || canvas.webkitRequestFullscreen).call(canvas);
                        if (promise) promise.catch(function() {
                        });
                    } catch (e) {
                        return 1;
                    }
                    return 0;
                },
                exitFullscreen: function() {
                    if (!GodotDisplayScreen.isFullscreen()) return 0;
                    try {
                        const promise = document.exitFullscreen();
                        if (promise) promise.catch(function() {
                        });
                    } catch (e) {
                        return 1;
                    }
                    return 0;
                },
                _updateGL: function() {
                    const gl_context_handle = _emscripten_webgl_get_current_context();
                    const gl = GL.getContext(gl_context_handle);
                    if (gl) GL.resizeOffscreenFramebuffer(gl);
                },
                updateSize: function() {
                    const isFullscreen = GodotDisplayScreen.isFullscreen();
                    const wantsFullWindow = GodotConfig.canvas_resize_policy === 2;
                    const noResize = GodotConfig.canvas_resize_policy === 0;
                    const wwidth = GodotDisplayScreen.desired_size[0];
                    const wheight = GodotDisplayScreen.desired_size[1];
                    const canvas = GodotConfig.canvas;
                    let width = wwidth;
                    let height = wheight;
                    if (noResize) {
                        if (canvas.width !== width || canvas.height !== height) {
                            GodotDisplayScreen.desired_size = [
                                canvas.width,
                                canvas.height
                            ];
                            GodotDisplayScreen._updateGL();
                            return 1;
                        }
                        return 0;
                    }
                    const scale = GodotDisplayScreen.getPixelRatio();
                    if (isFullscreen || wantsFullWindow) {
                        width = window.innerWidth * scale;
                        height = window.innerHeight * scale;
                    }
                    const csw = `${width / scale}px`;
                    const csh = `${height / scale}px`;
                    if (canvas.style.width !== csw || canvas.style.height !== csh || canvas.width !== width || canvas.height !== height) {
                        canvas.width = width;
                        canvas.height = height;
                        canvas.style.width = csw;
                        canvas.style.height = csh;
                        GodotDisplayScreen._updateGL();
                        return 1;
                    }
                    return 0;
                }
            };
            var GodotDisplayVK = {
                textinput: null,
                textarea: null,
                available: function() {
                    return GodotConfig.virtual_keyboard && "ontouchstart" in window;
                },
                init: function(input_cb) {
                    function create(what) {
                        const elem = document.createElement(what);
                        elem.style.display = "none";
                        elem.style.position = "absolute";
                        elem.style.zIndex = "-1";
                        elem.style.background = "transparent";
                        elem.style.padding = "0px";
                        elem.style.margin = "0px";
                        elem.style.overflow = "hidden";
                        elem.style.width = "0px";
                        elem.style.height = "0px";
                        elem.style.border = "0px";
                        elem.style.outline = "none";
                        elem.readonly = true;
                        elem.disabled = true;
                        GodotEventListeners.add(elem, "input", function(evt) {
                            const c_str = GodotRuntime.allocString(elem.value);
                            input_cb(c_str, elem.selectionEnd);
                            GodotRuntime.free(c_str);
                        }, false);
                        GodotEventListeners.add(elem, "blur", function(evt) {
                            elem.style.display = "none";
                            elem.readonly = true;
                            elem.disabled = true;
                        }, false);
                        GodotConfig.canvas.insertAdjacentElement("beforebegin", elem);
                        return elem;
                    }
                    GodotDisplayVK.textinput = create("input");
                    GodotDisplayVK.textarea = create("textarea");
                    GodotDisplayVK.updateSize();
                },
                show: function(text, multiline, start, end) {
                    if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) return;
                    if (GodotDisplayVK.textinput.style.display !== "" || GodotDisplayVK.textarea.style.display !== "") GodotDisplayVK.hide();
                    GodotDisplayVK.updateSize();
                    const elem = multiline ? GodotDisplayVK.textarea : GodotDisplayVK.textinput;
                    elem.readonly = false;
                    elem.disabled = false;
                    elem.value = text;
                    elem.style.display = "block";
                    elem.focus();
                    elem.setSelectionRange(start, end);
                },
                hide: function() {
                    if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) return;
                    [
                        GodotDisplayVK.textinput,
                        GodotDisplayVK.textarea
                    ].forEach(function(elem) {
                        elem.blur();
                        elem.style.display = "none";
                        elem.value = "";
                    });
                },
                updateSize: function() {
                    if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) return;
                    const rect = GodotConfig.canvas.getBoundingClientRect();
                    function update(elem) {
                        elem.style.left = `${rect.left}px`;
                        elem.style.top = `${rect.top}px`;
                        elem.style.width = `${rect.width}px`;
                        elem.style.height = `${rect.height}px`;
                    }
                    update(GodotDisplayVK.textinput);
                    update(GodotDisplayVK.textarea);
                },
                clear: function() {
                    if (GodotDisplayVK.textinput) {
                        GodotDisplayVK.textinput.remove();
                        GodotDisplayVK.textinput = null;
                    }
                    if (GodotDisplayVK.textarea) {
                        GodotDisplayVK.textarea.remove();
                        GodotDisplayVK.textarea = null;
                    }
                }
            };
            var GodotDisplay = {
                window_icon: "",
                findDPI: function() {
                    function testDPI(dpi) {
                        return window.matchMedia(`(max-resolution: ${dpi}dpi)`).matches;
                    }
                    function bisect(low, high, func) {
                        const mid = parseInt((high - low) / 2 + low, 10);
                        if (high - low <= 1) return func(high) ? high : low;
                        if (func(mid)) return bisect(low, mid, func);
                        return bisect(mid, high, func);
                    }
                    try {
                        const dpi = bisect(0, 800, testDPI);
                        return dpi >= 96 ? dpi : 96;
                    } catch (e) {
                        return 96;
                    }
                }
            };
            function _godot_js_display_alert(p_text) {
                window.alert(GodotRuntime.parseString(p_text));
            }
            function _godot_js_display_canvas_focus() {
                GodotConfig.canvas.focus();
            }
            function _godot_js_display_canvas_is_focused() {
                return document.activeElement === GodotConfig.canvas;
            }
            function _godot_js_display_clipboard_get(callback) {
                const func = GodotRuntime.get_func(callback);
                try {
                    navigator.clipboard.readText().then(function(result) {
                        const ptr = GodotRuntime.allocString(result);
                        func(ptr);
                        GodotRuntime.free(ptr);
                    }).catch(function(e) {
                    });
                } catch (e) {
                }
            }
            function _godot_js_display_clipboard_set(p_text) {
                const text = GodotRuntime.parseString(p_text);
                if (!navigator.clipboard || !navigator.clipboard.writeText) return 1;
                navigator.clipboard.writeText(text).catch(function(e) {
                    GodotRuntime.error("Setting OS clipboard is only possible from an input callback for the HTML5 plafrom. Exception:", e);
                });
                return 0;
            }
            function _godot_js_display_cursor_is_hidden() {
                return !GodotDisplayCursor.visible;
            }
            function _godot_js_display_cursor_is_locked() {
                return GodotDisplayCursor.isPointerLocked() ? 1 : 0;
            }
            function _godot_js_display_cursor_lock_set(p_lock) {
                if (p_lock) GodotDisplayCursor.lockPointer();
                else GodotDisplayCursor.releasePointer();
            }
            function _godot_js_display_cursor_set_custom_shape(p_shape, p_ptr, p_len, p_hotspot_x, p_hotspot_y) {
                const shape = GodotRuntime.parseString(p_shape);
                const old_shape = GodotDisplayCursor.cursors[shape];
                if (p_len > 0) {
                    const png = new Blob([
                        GodotRuntime.heapSlice(HEAPU8, p_ptr, p_len)
                    ], {
                        type: "image/png"
                    });
                    const url = URL.createObjectURL(png);
                    GodotDisplayCursor.cursors[shape] = {
                        url: url,
                        x: p_hotspot_x,
                        y: p_hotspot_y
                    };
                } else delete GodotDisplayCursor.cursors[shape];
                if (shape === GodotDisplayCursor.shape) GodotDisplayCursor.set_shape(GodotDisplayCursor.shape);
                if (old_shape) URL.revokeObjectURL(old_shape.url);
            }
            function _godot_js_display_cursor_set_shape(p_string) {
                GodotDisplayCursor.set_shape(GodotRuntime.parseString(p_string));
            }
            function _godot_js_display_cursor_set_visible(p_visible) {
                const visible = p_visible !== 0;
                if (visible === GodotDisplayCursor.visible) return;
                GodotDisplayCursor.visible = visible;
                if (visible) GodotDisplayCursor.set_shape(GodotDisplayCursor.shape);
                else GodotDisplayCursor.set_style("none");
            }
            function _godot_js_display_desired_size_set(width, height) {
                GodotDisplayScreen.desired_size = [
                    width,
                    height
                ];
                GodotDisplayScreen.updateSize();
            }
            function _godot_js_display_fullscreen_cb(callback) {
                const canvas = GodotConfig.canvas;
                const func = GodotRuntime.get_func(callback);
                function change_cb(evt) {
                    if (evt.target === canvas) func(GodotDisplayScreen.isFullscreen());
                }
                GodotEventListeners.add(document, "fullscreenchange", change_cb, false);
                GodotEventListeners.add(document, "mozfullscreenchange", change_cb, false);
                GodotEventListeners.add(document, "webkitfullscreenchange", change_cb, false);
            }
            function _godot_js_display_fullscreen_exit() {
                return GodotDisplayScreen.exitFullscreen();
            }
            function _godot_js_display_fullscreen_request() {
                return GodotDisplayScreen.requestFullscreen();
            }
            function _godot_js_display_glGetBufferSubData(target, offset, size, data) {
                const gl_context_handle = _emscripten_webgl_get_current_context();
                const gl = GL.getContext(gl_context_handle);
                if (gl) gl.GLctx["getBufferSubData"](target, offset, HEAPU8, data, size);
            }
            function _godot_js_display_has_webgl(p_version) {
                if (p_version !== 1 && p_version !== 2) return false;
                try {
                    return !!document.createElement("canvas").getContext(p_version === 2 ? "webgl2" : "webgl");
                } catch (e) {
                }
                return false;
            }
            function _godot_js_display_is_swap_ok_cancel() {
                const win = [
                    "Windows",
                    "Win64",
                    "Win32",
                    "WinCE"
                ];
                const plat = navigator.platform || "";
                if (win.indexOf(plat) !== -1) return 1;
                return 0;
            }
            function _godot_js_display_notification_cb(callback, p_enter, p_exit, p_in, p_out) {
                const canvas = GodotConfig.canvas;
                const func = GodotRuntime.get_func(callback);
                const notif = [
                    p_enter,
                    p_exit,
                    p_in,
                    p_out
                ];
                [
                    "mouseover",
                    "mouseleave",
                    "focus",
                    "blur"
                ].forEach(function(evt_name, idx) {
                    GodotEventListeners.add(canvas, evt_name, function() {
                        func(notif[idx]);
                    }, true);
                });
            }
            function _godot_js_display_pixel_ratio_get() {
                return GodotDisplayScreen.getPixelRatio();
            }
            function _godot_js_display_screen_dpi_get() {
                return GodotDisplay.findDPI();
            }
            function _godot_js_display_screen_size_get(width, height) {
                const scale = GodotDisplayScreen.getPixelRatio();
                GodotRuntime.setHeapValue(width, window.screen.width * scale, "i32");
                GodotRuntime.setHeapValue(height, window.screen.height * scale, "i32");
            }
            function _godot_js_display_setup_canvas(p_width, p_height, p_fullscreen, p_hidpi) {
                const canvas = GodotConfig.canvas;
                GodotEventListeners.add(canvas, "contextmenu", function(ev) {
                    ev.preventDefault();
                }, false);
                GodotEventListeners.add(canvas, "webglcontextlost", function(ev) {
                    alert("WebGL context lost, please reload the page");
                    ev.preventDefault();
                }, false);
                GodotDisplayScreen.hidpi = !!p_hidpi;
                switch(GodotConfig.canvas_resize_policy){
                    case 0:
                        GodotDisplayScreen.desired_size = [
                            canvas.width,
                            canvas.height
                        ];
                        break;
                    case 1:
                        GodotDisplayScreen.desired_size = [
                            p_width,
                            p_height
                        ];
                        break;
                    default:
                        canvas.style.position = "absolute";
                        canvas.style.top = 0;
                        canvas.style.left = 0;
                        break;
                }
                GodotDisplayScreen.updateSize();
                if (p_fullscreen) GodotDisplayScreen.requestFullscreen();
            }
            function _godot_js_display_size_update() {
                const updated = GodotDisplayScreen.updateSize();
                if (updated) GodotDisplayVK.updateSize();
                return updated;
            }
            function _godot_js_display_touchscreen_is_available() {
                return "ontouchstart" in window;
            }
            function _godot_js_display_vk_available() {
                return GodotDisplayVK.available();
            }
            function _godot_js_display_vk_cb(p_input_cb) {
                const input_cb = GodotRuntime.get_func(p_input_cb);
                if (GodotDisplayVK.available()) GodotDisplayVK.init(input_cb);
            }
            function _godot_js_display_vk_hide() {
                GodotDisplayVK.hide();
            }
            function _godot_js_display_vk_show(p_text, p_multiline, p_start, p_end) {
                const text = GodotRuntime.parseString(p_text);
                const start = p_start > 0 ? p_start : 0;
                const end = p_end > 0 ? p_end : start;
                GodotDisplayVK.show(text, p_multiline, start, end);
            }
            function _godot_js_display_window_blur_cb(callback) {
                const func = GodotRuntime.get_func(callback);
                GodotEventListeners.add(window, "blur", function() {
                    func();
                }, false);
            }
            function _godot_js_display_window_icon_set(p_ptr, p_len) {
                let link = document.getElementById("-gd-engine-icon");
                if (link === null) {
                    link = document.createElement("link");
                    link.rel = "icon";
                    link.id = "-gd-engine-icon";
                    document.head.appendChild(link);
                }
                const old_icon = GodotDisplay.window_icon;
                const png = new Blob([
                    GodotRuntime.heapSlice(HEAPU8, p_ptr, p_len)
                ], {
                    type: "image/png"
                });
                GodotDisplay.window_icon = URL.createObjectURL(png);
                link.href = GodotDisplay.window_icon;
                if (old_icon) URL.revokeObjectURL(old_icon);
            }
            function _godot_js_display_window_size_get(p_width, p_height) {
                GodotRuntime.setHeapValue(p_width, GodotConfig.canvas.width, "i32");
                GodotRuntime.setHeapValue(p_height, GodotConfig.canvas.height, "i32");
            }
            function _godot_js_display_window_title_set(p_data) {
                document.title = GodotRuntime.parseString(p_data);
            }
            function _godot_js_eval(p_js, p_use_global_ctx, p_union_ptr, p_byte_arr, p_byte_arr_write, p_callback) {
                const js_code = GodotRuntime.parseString(p_js);
                let eval_ret = null;
                try {
                    if (p_use_global_ctx) {
                        const global_eval = eval;
                        eval_ret = global_eval(js_code);
                    } else eval_ret = eval(js_code);
                } catch (e) {
                    GodotRuntime.error(e);
                }
                switch(typeof eval_ret){
                    case "boolean":
                        GodotRuntime.setHeapValue(p_union_ptr, eval_ret, "i32");
                        return 1;
                    case "number":
                        GodotRuntime.setHeapValue(p_union_ptr, eval_ret, "double");
                        return 3;
                    case "string":
                        GodotRuntime.setHeapValue(p_union_ptr, GodotRuntime.allocString(eval_ret), "*");
                        return 4;
                    case "object":
                        if (eval_ret === null) break;
                        if (ArrayBuffer.isView(eval_ret) && !(eval_ret instanceof Uint8Array)) eval_ret = new Uint8Array(eval_ret.buffer);
                        else if (eval_ret instanceof ArrayBuffer) eval_ret = new Uint8Array(eval_ret);
                        if (eval_ret instanceof Uint8Array) {
                            const func = GodotRuntime.get_func(p_callback);
                            const bytes_ptr = func(p_byte_arr, p_byte_arr_write, eval_ret.length);
                            HEAPU8.set(eval_ret, bytes_ptr);
                            return 20;
                        }
                        break;
                }
                return 0;
            }
            var IDHandler = {
                _last_id: 0,
                _references: {
                },
                get: function(p_id) {
                    return IDHandler._references[p_id];
                },
                add: function(p_data) {
                    const id = ++IDHandler._last_id;
                    IDHandler._references[id] = p_data;
                    return id;
                },
                remove: function(p_id) {
                    delete IDHandler._references[p_id];
                }
            };
            var GodotFetch = {
                onread: function(id, result) {
                    const obj = IDHandler.get(id);
                    if (!obj) return;
                    if (result.value) obj.chunks.push(result.value);
                    obj.reading = false;
                    obj.done = result.done;
                },
                onresponse: function(id, response) {
                    const obj = IDHandler.get(id);
                    if (!obj) return;
                    let chunked = false;
                    response.headers.forEach(function(value, header) {
                        const v = value.toLowerCase().trim();
                        const h = header.toLowerCase().trim();
                        if (h === "transfer-encoding" && v === "chunked") chunked = true;
                    });
                    obj.status = response.status;
                    obj.response = response;
                    obj.reader = response.body.getReader();
                    obj.chunked = chunked;
                },
                onerror: function(id, err) {
                    GodotRuntime.error(err);
                    const obj = IDHandler.get(id);
                    if (!obj) return;
                    obj.error = err;
                },
                create: function(method, url, headers, body) {
                    const obj = {
                        request: null,
                        response: null,
                        reader: null,
                        error: null,
                        done: false,
                        reading: false,
                        status: 0,
                        chunks: [],
                        bodySize: -1
                    };
                    const id = IDHandler.add(obj);
                    const init = {
                        method: method,
                        headers: headers,
                        body: body
                    };
                    obj.request = fetch(url, init);
                    obj.request.then(GodotFetch.onresponse.bind(null, id)).catch(GodotFetch.onerror.bind(null, id));
                    return id;
                },
                free: function(id) {
                    const obj = IDHandler.get(id);
                    if (!obj) return;
                    IDHandler.remove(id);
                    if (!obj.request) return;
                    obj.request.then(function(response) {
                        response.abort();
                    }).catch(function(e) {
                    });
                },
                read: function(id) {
                    const obj = IDHandler.get(id);
                    if (!obj) return;
                    if (obj.reader && !obj.reading) {
                        if (obj.done) {
                            obj.reader = null;
                            return;
                        }
                        obj.reading = true;
                        obj.reader.read().then(GodotFetch.onread.bind(null, id)).catch(GodotFetch.onerror.bind(null, id));
                    }
                }
            };
            function _godot_js_fetch_body_length_get(p_id) {
                const obj = IDHandler.get(p_id);
                if (!obj || !obj.response) return -1;
                return obj.bodySize;
            }
            function _godot_js_fetch_create(p_method, p_url, p_headers, p_headers_size, p_body, p_body_size) {
                const method = GodotRuntime.parseString(p_method);
                const url = GodotRuntime.parseString(p_url);
                const headers = GodotRuntime.parseStringArray(p_headers, p_headers_size);
                const body = p_body_size ? GodotRuntime.heapSlice(HEAP8, p_body, p_body_size) : null;
                return GodotFetch.create(method, url, headers.map(function(hv) {
                    const idx = hv.indexOf(":");
                    if (idx <= 0) return [];
                    return [
                        hv.slice(0, idx).trim(),
                        hv.slice(idx + 1).trim()
                    ];
                }).filter(function(v) {
                    return v.length === 2;
                }), body);
            }
            function _godot_js_fetch_free(id) {
                GodotFetch.free(id);
            }
            function _godot_js_fetch_http_status_get(p_id) {
                const obj = IDHandler.get(p_id);
                if (!obj || !obj.response) return 0;
                return obj.status;
            }
            function _godot_js_fetch_is_chunked(p_id) {
                const obj = IDHandler.get(p_id);
                if (!obj || !obj.response) return -1;
                return obj.chunked ? 1 : 0;
            }
            function _godot_js_fetch_read_chunk(p_id, p_buf, p_buf_size) {
                const obj = IDHandler.get(p_id);
                if (!obj || !obj.response) return 0;
                let to_read = p_buf_size;
                const chunks = obj.chunks;
                while(to_read && chunks.length){
                    const chunk = obj.chunks[0];
                    if (chunk.length > to_read) {
                        GodotRuntime.heapCopy(HEAP8, chunk.slice(0, to_read), p_buf);
                        chunks[0] = chunk.slice(to_read);
                        to_read = 0;
                    } else {
                        GodotRuntime.heapCopy(HEAP8, chunk, p_buf);
                        to_read -= chunk.length;
                        chunks.pop();
                    }
                }
                if (!chunks.length) GodotFetch.read(p_id);
                return p_buf_size - to_read;
            }
            function _godot_js_fetch_read_headers(p_id, p_parse_cb, p_ref) {
                const obj = IDHandler.get(p_id);
                if (!obj || !obj.response) return 1;
                const cb = GodotRuntime.get_func(p_parse_cb);
                const arr = [];
                obj.response.headers.forEach(function(v, h) {
                    arr.push(`${h}:${v}`);
                });
                const c_ptr = GodotRuntime.allocStringArray(arr);
                cb(arr.length, c_ptr, p_ref);
                GodotRuntime.freeStringArray(c_ptr, arr.length);
                return 0;
            }
            function _godot_js_fetch_state_get(p_id) {
                const obj = IDHandler.get(p_id);
                if (!obj) return -1;
                if (obj.error) return -1;
                if (!obj.response) return 0;
                if (obj.reader) return 1;
                if (obj.done) return 2;
                return -1;
            }
            var GodotInputGamepads = {
                samples: [],
                get_pads: function() {
                    try {
                        const pads = navigator.getGamepads();
                        if (pads) return pads;
                        return [];
                    } catch (e) {
                        return [];
                    }
                },
                get_samples: function() {
                    return GodotInputGamepads.samples;
                },
                get_sample: function(index) {
                    const samples = GodotInputGamepads.samples;
                    return index < samples.length ? samples[index] : null;
                },
                sample: function() {
                    const pads = GodotInputGamepads.get_pads();
                    const samples = [];
                    for(let i = 0; i < pads.length; i++){
                        const pad = pads[i];
                        if (!pad) {
                            samples.push(null);
                            continue;
                        }
                        const s = {
                            standard: pad.mapping === "standard",
                            buttons: [],
                            axes: [],
                            connected: pad.connected
                        };
                        for(let b = 0; b < pad.buttons.length; b++)s.buttons.push(pad.buttons[b].value);
                        for(let a = 0; a < pad.axes.length; a++)s.axes.push(pad.axes[a]);
                        samples.push(s);
                    }
                    GodotInputGamepads.samples = samples;
                },
                init: function(onchange) {
                    GodotEventListeners.samples = [];
                    function add(pad) {
                        const guid = GodotInputGamepads.get_guid(pad);
                        const c_id = GodotRuntime.allocString(pad.id);
                        const c_guid = GodotRuntime.allocString(guid);
                        onchange(pad.index, 1, c_id, c_guid);
                        GodotRuntime.free(c_id);
                        GodotRuntime.free(c_guid);
                    }
                    const pads = GodotInputGamepads.get_pads();
                    for(let i = 0; i < pads.length; i++)if (pads[i]) add(pads[i]);
                    GodotEventListeners.add(window, "gamepadconnected", function(evt) {
                        if (evt.gamepad) add(evt.gamepad);
                    }, false);
                    GodotEventListeners.add(window, "gamepaddisconnected", function(evt) {
                        if (evt.gamepad) onchange(evt.gamepad.index, 0);
                    }, false);
                },
                get_guid: function(pad) {
                    if (pad.mapping) return pad.mapping;
                    const ua = navigator.userAgent;
                    let os = "Unknown";
                    if (ua.indexOf("Android") >= 0) os = "Android";
                    else if (ua.indexOf("Linux") >= 0) os = "Linux";
                    else if (ua.indexOf("iPhone") >= 0) os = "iOS";
                    else if (ua.indexOf("Macintosh") >= 0) os = "MacOSX";
                    else if (ua.indexOf("Windows") >= 0) os = "Windows";
                    const id = pad.id;
                    const exp1 = /vendor: ([0-9a-f]{4}) product: ([0-9a-f]{4})/i;
                    const exp2 = /^([0-9a-f]+)-([0-9a-f]+)-/i;
                    let vendor = "";
                    let product = "";
                    if (exp1.test(id)) {
                        const match = exp1.exec(id);
                        vendor = match[1].padStart(4, "0");
                        product = match[2].padStart(4, "0");
                    } else if (exp2.test(id)) {
                        const match = exp2.exec(id);
                        vendor = match[1].padStart(4, "0");
                        product = match[2].padStart(4, "0");
                    }
                    if (!vendor || !product) return `${os}Unknown`;
                    return os + vendor + product;
                }
            };
            var GodotInputDragDrop = {
                promises: [],
                pending_files: [],
                add_entry: function(entry) {
                    if (entry.isDirectory) GodotInputDragDrop.add_dir(entry);
                    else if (entry.isFile) GodotInputDragDrop.add_file(entry);
                    else GodotRuntime.error("Unrecognized entry...", entry);
                },
                add_dir: function(entry) {
                    GodotInputDragDrop.promises.push(new Promise(function(resolve, reject) {
                        const reader = entry.createReader();
                        reader.readEntries(function(entries) {
                            for(let i = 0; i < entries.length; i++)GodotInputDragDrop.add_entry(entries[i]);
                            resolve();
                        });
                    }));
                },
                add_file: function(entry) {
                    GodotInputDragDrop.promises.push(new Promise(function(resolve, reject) {
                        entry.file(function(file) {
                            const reader = new FileReader;
                            reader.onload = function() {
                                const f = {
                                    "path": file.relativePath || file.webkitRelativePath,
                                    "name": file.name,
                                    "type": file.type,
                                    "size": file.size,
                                    "data": reader.result
                                };
                                if (!f["path"]) f["path"] = f["name"];
                                GodotInputDragDrop.pending_files.push(f);
                                resolve();
                            };
                            reader.onerror = function() {
                                GodotRuntime.print("Error reading file");
                                reject();
                            };
                            reader.readAsArrayBuffer(file);
                        }, function(err) {
                            GodotRuntime.print("Error!");
                            reject();
                        });
                    }));
                },
                process: function(resolve, reject) {
                    if (GodotInputDragDrop.promises.length === 0) {
                        resolve();
                        return;
                    }
                    GodotInputDragDrop.promises.pop().then(function() {
                        setTimeout(function() {
                            GodotInputDragDrop.process(resolve, reject);
                        }, 0);
                    });
                },
                _process_event: function(ev, callback) {
                    ev.preventDefault();
                    if (ev.dataTransfer.items) for(let i = 0; i < ev.dataTransfer.items.length; i++){
                        const item = ev.dataTransfer.items[i];
                        let entry = null;
                        if ("getAsEntry" in item) entry = item.getAsEntry();
                        else if ("webkitGetAsEntry" in item) entry = item.webkitGetAsEntry();
                        if (entry) GodotInputDragDrop.add_entry(entry);
                    }
                    else GodotRuntime.error("File upload not supported");
                    new Promise(GodotInputDragDrop.process).then(function() {
                        const DROP = `/tmp/drop-${parseInt(Math.random() * 1073741824, 10)}/`;
                        const drops = [];
                        const files = [];
                        FS.mkdir(DROP.slice(0, -1));
                        GodotInputDragDrop.pending_files.forEach((elem)=>{
                            const path = elem["path"];
                            GodotFS.copy_to_fs(DROP + path, elem["data"]);
                            let idx = path.indexOf("/");
                            if (idx === -1) drops.push(DROP + path);
                            else {
                                const sub = path.substr(0, idx);
                                idx = sub.indexOf("/");
                                if (idx < 0 && drops.indexOf(DROP + sub) === -1) drops.push(DROP + sub);
                            }
                            files.push(DROP + path);
                        });
                        GodotInputDragDrop.promises = [];
                        GodotInputDragDrop.pending_files = [];
                        callback(drops);
                        if (GodotConfig.persistent_drops) GodotOS.atexit(function(resolve, reject) {
                            GodotInputDragDrop.remove_drop(files, DROP);
                            resolve();
                        });
                        else GodotInputDragDrop.remove_drop(files, DROP);
                    });
                },
                remove_drop: function(files, drop_path) {
                    const dirs = [
                        drop_path.substr(0, drop_path.length - 1)
                    ];
                    files.forEach(function(file) {
                        FS.unlink(file);
                        let dir = file.replace(drop_path, "");
                        let idx = dir.lastIndexOf("/");
                        while(idx > 0){
                            dir = dir.substr(0, idx);
                            if (dirs.indexOf(drop_path + dir) === -1) dirs.push(drop_path + dir);
                            idx = dir.lastIndexOf("/");
                        }
                    });
                    dirs.sort(function(a, b) {
                        const al = (a.match(/\//g) || []).length;
                        const bl = (b.match(/\//g) || []).length;
                        if (al > bl) return -1;
                        else if (al < bl) return 1;
                        return 0;
                    }).forEach(function(dir) {
                        FS.rmdir(dir);
                    });
                },
                handler: function(callback) {
                    return function(ev) {
                        GodotInputDragDrop._process_event(ev, callback);
                    };
                }
            };
            var GodotInput = {
                getModifiers: function(evt) {
                    return evt.shiftKey + 0 + (evt.altKey + 0 << 1) + (evt.ctrlKey + 0 << 2) + (evt.metaKey + 0 << 3);
                },
                computePosition: function(evt, rect) {
                    const canvas = GodotConfig.canvas;
                    const rw = canvas.width / rect.width;
                    const rh = canvas.height / rect.height;
                    const x = (evt.clientX - rect.x) * rw;
                    const y = (evt.clientY - rect.y) * rh;
                    return [
                        x,
                        y
                    ];
                }
            };
            function _godot_js_input_drop_files_cb(callback) {
                const func = GodotRuntime.get_func(callback);
                const dropFiles = function(files) {
                    const args = files || [];
                    if (!args.length) return;
                    const argc = args.length;
                    const argv = GodotRuntime.allocStringArray(args);
                    func(argv, argc);
                    GodotRuntime.freeStringArray(argv, argc);
                };
                const canvas = GodotConfig.canvas;
                GodotEventListeners.add(canvas, "dragover", function(ev) {
                    ev.preventDefault();
                }, false);
                GodotEventListeners.add(canvas, "drop", GodotInputDragDrop.handler(dropFiles));
            }
            function _godot_js_input_gamepad_cb(change_cb) {
                const onchange = GodotRuntime.get_func(change_cb);
                GodotInputGamepads.init(onchange);
            }
            function _godot_js_input_gamepad_sample() {
                GodotInputGamepads.sample();
                return 0;
            }
            function _godot_js_input_gamepad_sample_count() {
                return GodotInputGamepads.get_samples().length;
            }
            function _godot_js_input_gamepad_sample_get(p_index, r_btns, r_btns_num, r_axes, r_axes_num, r_standard) {
                const sample = GodotInputGamepads.get_sample(p_index);
                if (!sample || !sample.connected) return 1;
                const btns = sample.buttons;
                const btns_len = btns.length < 16 ? btns.length : 16;
                for(let i = 0; i < btns_len; i++)GodotRuntime.setHeapValue(r_btns + (i << 2), btns[i], "float");
                GodotRuntime.setHeapValue(r_btns_num, btns_len, "i32");
                const axes = sample.axes;
                const axes_len = axes.length < 10 ? axes.length : 10;
                for(let i2 = 0; i2 < axes_len; i2++)GodotRuntime.setHeapValue(r_axes + (i2 << 2), axes[i2], "float");
                GodotRuntime.setHeapValue(r_axes_num, axes_len, "i32");
                const is_standard = sample.standard ? 1 : 0;
                GodotRuntime.setHeapValue(r_standard, is_standard, "i32");
                return 0;
            }
            function _godot_js_input_key_cb(callback, code, key) {
                const func = GodotRuntime.get_func(callback);
                function key_cb(pressed, evt) {
                    const modifiers = GodotInput.getModifiers(evt);
                    GodotRuntime.stringToHeap(evt.code, code, 32);
                    GodotRuntime.stringToHeap(evt.key, key, 32);
                    func(pressed, evt.repeat, modifiers);
                    evt.preventDefault();
                }
                GodotEventListeners.add(GodotConfig.canvas, "keydown", key_cb.bind(null, 1), false);
                GodotEventListeners.add(GodotConfig.canvas, "keyup", key_cb.bind(null, 0), false);
            }
            function _godot_js_input_mouse_button_cb(callback) {
                const func = GodotRuntime.get_func(callback);
                const canvas = GodotConfig.canvas;
                function button_cb(p_pressed, evt) {
                    const rect = canvas.getBoundingClientRect();
                    const pos = GodotInput.computePosition(evt, rect);
                    const modifiers = GodotInput.getModifiers(evt);
                    if (p_pressed) GodotConfig.canvas.focus();
                    if (func(p_pressed, evt.button, pos[0], pos[1], modifiers)) evt.preventDefault();
                }
                GodotEventListeners.add(canvas, "mousedown", button_cb.bind(null, 1), false);
                GodotEventListeners.add(window, "mouseup", button_cb.bind(null, 0), false);
            }
            function _godot_js_input_mouse_move_cb(callback) {
                const func = GodotRuntime.get_func(callback);
                const canvas = GodotConfig.canvas;
                function move_cb(evt) {
                    const rect = canvas.getBoundingClientRect();
                    const pos = GodotInput.computePosition(evt, rect);
                    const rw = canvas.width / rect.width;
                    const rh = canvas.height / rect.height;
                    const rel_pos_x = evt.movementX * rw;
                    const rel_pos_y = evt.movementY * rh;
                    const modifiers = GodotInput.getModifiers(evt);
                    func(pos[0], pos[1], rel_pos_x, rel_pos_y, modifiers);
                }
                GodotEventListeners.add(window, "mousemove", move_cb, false);
            }
            function _godot_js_input_mouse_wheel_cb(callback) {
                const func = GodotRuntime.get_func(callback);
                function wheel_cb(evt) {
                    if (func(evt["deltaX"] || 0, evt["deltaY"] || 0)) evt.preventDefault();
                }
                GodotEventListeners.add(GodotConfig.canvas, "wheel", wheel_cb, false);
            }
            function _godot_js_input_paste_cb(callback) {
                const func = GodotRuntime.get_func(callback);
                GodotEventListeners.add(window, "paste", function(evt) {
                    const text = evt.clipboardData.getData("text");
                    const ptr = GodotRuntime.allocString(text);
                    func(ptr);
                    GodotRuntime.free(ptr);
                }, false);
            }
            function _godot_js_input_touch_cb(callback, ids, coords) {
                const func = GodotRuntime.get_func(callback);
                const canvas = GodotConfig.canvas;
                function touch_cb(type, evt) {
                    if (type === 0) GodotConfig.canvas.focus();
                    const rect = canvas.getBoundingClientRect();
                    const touches = evt.changedTouches;
                    for(let i = 0; i < touches.length; i++){
                        const touch = touches[i];
                        const pos = GodotInput.computePosition(touch, rect);
                        GodotRuntime.setHeapValue(coords + i * 16, pos[0], "double");
                        GodotRuntime.setHeapValue(coords + (i * 2 + 1) * 8, pos[1], "double");
                        GodotRuntime.setHeapValue(ids + i * 4, touch.identifier, "i32");
                    }
                    func(type, touches.length);
                    if (evt.cancelable) evt.preventDefault();
                }
                GodotEventListeners.add(canvas, "touchstart", touch_cb.bind(null, 0), false);
                GodotEventListeners.add(canvas, "touchend", touch_cb.bind(null, 1), false);
                GodotEventListeners.add(canvas, "touchcancel", touch_cb.bind(null, 1), false);
                GodotEventListeners.add(canvas, "touchmove", touch_cb.bind(null, 2), false);
            }
            function _godot_js_os_download_buffer(p_ptr, p_size, p_name, p_mime) {
                const buf = GodotRuntime.heapSlice(HEAP8, p_ptr, p_size);
                const name = GodotRuntime.parseString(p_name);
                const mime = GodotRuntime.parseString(p_mime);
                const blob = new Blob([
                    buf
                ], {
                    type: mime
                });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = name;
                a.style.display = "none";
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            }
            function _godot_js_os_execute(p_json) {
                const json_args = GodotRuntime.parseString(p_json);
                const args = JSON.parse(json_args);
                if (GodotConfig.on_execute) {
                    GodotConfig.on_execute(args);
                    return 0;
                }
                return 1;
            }
            function _godot_js_os_finish_async(p_callback) {
                const func = GodotRuntime.get_func(p_callback);
                GodotOS.finish_async(func);
            }
            function _godot_js_os_fs_is_persistent() {
                return GodotFS.is_persistent();
            }
            function _godot_js_os_fs_sync(callback) {
                const func = GodotRuntime.get_func(callback);
                GodotOS._fs_sync_promise = GodotFS.sync();
                GodotOS._fs_sync_promise.then(function(err) {
                    func();
                });
            }
            function _godot_js_os_hw_concurrency_get() {
                return navigator.hardwareConcurrency || 1;
            }
            function _godot_js_os_request_quit_cb(p_callback) {
                GodotOS.request_quit = GodotRuntime.get_func(p_callback);
            }
            function _godot_js_os_shell_open(p_uri) {
                window.open(GodotRuntime.parseString(p_uri), "_blank");
            }
            var GodotRTCDataChannel = {
                connect: function(p_id, p_on_open, p_on_message, p_on_error, p_on_close) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    ref.binaryType = "arraybuffer";
                    ref.onopen = function(event) {
                        p_on_open();
                    };
                    ref.onclose = function(event) {
                        p_on_close();
                    };
                    ref.onerror = function(event) {
                        p_on_error();
                    };
                    ref.onmessage = function(event) {
                        let buffer;
                        let is_string = 0;
                        if (event.data instanceof ArrayBuffer) buffer = new Uint8Array(event.data);
                        else if (event.data instanceof Blob) {
                            GodotRuntime.error("Blob type not supported");
                            return;
                        } else if (typeof event.data === "string") {
                            is_string = 1;
                            const enc = new TextEncoder("utf-8");
                            buffer = new Uint8Array(enc.encode(event.data));
                        } else {
                            GodotRuntime.error("Unknown message type");
                            return;
                        }
                        const len = buffer.length * buffer.BYTES_PER_ELEMENT;
                        const out = GodotRuntime.malloc(len);
                        HEAPU8.set(buffer, out);
                        p_on_message(out, len, is_string);
                        GodotRuntime.free(out);
                    };
                },
                close: function(p_id) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    ref.onopen = null;
                    ref.onmessage = null;
                    ref.onerror = null;
                    ref.onclose = null;
                    ref.close();
                },
                get_prop: function(p_id, p_prop, p_def) {
                    const ref = IDHandler.get(p_id);
                    return ref && ref[p_prop] !== undefined ? ref[p_prop] : p_def;
                }
            };
            function _godot_js_rtc_datachannel_close(p_id) {
                const ref = IDHandler.get(p_id);
                if (!ref) return;
                GodotRTCDataChannel.close(p_id);
            }
            function _godot_js_rtc_datachannel_connect(p_id, p_ref, p_on_open, p_on_message, p_on_error, p_on_close) {
                const onopen = GodotRuntime.get_func(p_on_open).bind(null, p_ref);
                const onmessage = GodotRuntime.get_func(p_on_message).bind(null, p_ref);
                const onerror = GodotRuntime.get_func(p_on_error).bind(null, p_ref);
                const onclose = GodotRuntime.get_func(p_on_close).bind(null, p_ref);
                GodotRTCDataChannel.connect(p_id, onopen, onmessage, onerror, onclose);
            }
            function _godot_js_rtc_datachannel_destroy(p_id) {
                GodotRTCDataChannel.close(p_id);
                IDHandler.remove(p_id);
            }
            function _godot_js_rtc_datachannel_get_buffered_amount(p_id) {
                return GodotRTCDataChannel.get_prop(p_id, "bufferedAmount", 0);
            }
            function _godot_js_rtc_datachannel_id_get(p_id) {
                return GodotRTCDataChannel.get_prop(p_id, "id", 65535);
            }
            function _godot_js_rtc_datachannel_is_negotiated(p_id) {
                return GodotRTCDataChannel.get_prop(p_id, "negotiated", 65535);
            }
            function _godot_js_rtc_datachannel_is_ordered(p_id) {
                return GodotRTCDataChannel.get_prop(p_id, "ordered", true);
            }
            function _godot_js_rtc_datachannel_label_get(p_id) {
                const ref = IDHandler.get(p_id);
                if (!ref || !ref.label) return 0;
                return GodotRuntime.allocString(ref.label);
            }
            function _godot_js_rtc_datachannel_max_packet_lifetime_get(p_id) {
                const ref = IDHandler.get(p_id);
                if (!ref) return 65535;
                if (ref["maxPacketLifeTime"] !== undefined) return ref["maxPacketLifeTime"];
                else if (ref["maxRetransmitTime"] !== undefined) return ref["maxRetransmitTime"];
                return 65535;
            }
            function _godot_js_rtc_datachannel_max_retransmits_get(p_id) {
                return GodotRTCDataChannel.get_prop(p_id, "maxRetransmits", 65535);
            }
            function _godot_js_rtc_datachannel_protocol_get(p_id) {
                const ref = IDHandler.get(p_id);
                if (!ref || !ref.protocol) return 0;
                return GodotRuntime.allocString(ref.protocol);
            }
            function _godot_js_rtc_datachannel_ready_state_get(p_id) {
                const ref = IDHandler.get(p_id);
                if (!ref) return 3;
                switch(ref.readyState){
                    case "connecting":
                        return 0;
                    case "open":
                        return 1;
                    case "closing":
                        return 2;
                    case "closed":
                    default:
                        return 3;
                }
            }
            function _godot_js_rtc_datachannel_send(p_id, p_buffer, p_length, p_raw) {
                const ref = IDHandler.get(p_id);
                if (!ref) return 1;
                const bytes_array = new Uint8Array(p_length);
                for(let i = 0; i < p_length; i++)bytes_array[i] = GodotRuntime.getHeapValue(p_buffer + i, "i8");
                if (p_raw) ref.send(bytes_array.buffer);
                else {
                    const string = new TextDecoder("utf-8").decode(bytes_array);
                    ref.send(string);
                }
                return 0;
            }
            var GodotRTCPeerConnection = {
                onstatechange: function(p_id, p_conn, callback, event) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    let state;
                    switch(p_conn.iceConnectionState){
                        case "new":
                            state = 0;
                            break;
                        case "checking":
                            state = 1;
                            break;
                        case "connected":
                        case "completed":
                            state = 2;
                            break;
                        case "disconnected":
                            state = 3;
                            break;
                        case "failed":
                            state = 4;
                            break;
                        case "closed":
                        default:
                            state = 5;
                            break;
                    }
                    callback(state);
                },
                onicecandidate: function(p_id, callback, event) {
                    const ref = IDHandler.get(p_id);
                    if (!ref || !event.candidate) return;
                    const c = event.candidate;
                    const candidate_str = GodotRuntime.allocString(c.candidate);
                    const mid_str = GodotRuntime.allocString(c.sdpMid);
                    callback(mid_str, c.sdpMLineIndex, candidate_str);
                    GodotRuntime.free(candidate_str);
                    GodotRuntime.free(mid_str);
                },
                ondatachannel: function(p_id, callback, event) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    const cid = IDHandler.add(event.channel);
                    callback(cid);
                },
                onsession: function(p_id, callback, session) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    const type_str = GodotRuntime.allocString(session.type);
                    const sdp_str = GodotRuntime.allocString(session.sdp);
                    callback(type_str, sdp_str);
                    GodotRuntime.free(type_str);
                    GodotRuntime.free(sdp_str);
                },
                onerror: function(p_id, callback, error) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    GodotRuntime.error(error);
                    callback();
                }
            };
            function _godot_js_rtc_pc_close(p_id) {
                const ref = IDHandler.get(p_id);
                if (!ref) return;
                ref.close();
            }
            function _godot_js_rtc_pc_create(p_config, p_ref, p_on_state_change, p_on_candidate, p_on_datachannel) {
                const onstatechange = GodotRuntime.get_func(p_on_state_change).bind(null, p_ref);
                const oncandidate = GodotRuntime.get_func(p_on_candidate).bind(null, p_ref);
                const ondatachannel = GodotRuntime.get_func(p_on_datachannel).bind(null, p_ref);
                const config = JSON.parse(GodotRuntime.parseString(p_config));
                let conn = null;
                try {
                    conn = new RTCPeerConnection(config);
                } catch (e) {
                    GodotRuntime.error(e);
                    return 0;
                }
                const base = GodotRTCPeerConnection;
                const id = IDHandler.add(conn);
                conn.oniceconnectionstatechange = base.onstatechange.bind(null, id, conn, onstatechange);
                conn.onicecandidate = base.onicecandidate.bind(null, id, oncandidate);
                conn.ondatachannel = base.ondatachannel.bind(null, id, ondatachannel);
                return id;
            }
            function _godot_js_rtc_pc_datachannel_create(p_id, p_label, p_config) {
                try {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return 0;
                    const label = GodotRuntime.parseString(p_label);
                    const config = JSON.parse(GodotRuntime.parseString(p_config));
                    const channel = ref.createDataChannel(label, config);
                    return IDHandler.add(channel);
                } catch (e) {
                    GodotRuntime.error(e);
                    return 0;
                }
            }
            function _godot_js_rtc_pc_destroy(p_id) {
                const ref = IDHandler.get(p_id);
                if (!ref) return;
                ref.oniceconnectionstatechange = null;
                ref.onicecandidate = null;
                ref.ondatachannel = null;
                IDHandler.remove(p_id);
            }
            function _godot_js_rtc_pc_ice_candidate_add(p_id, p_mid_name, p_mline_idx, p_sdp) {
                const ref = IDHandler.get(p_id);
                if (!ref) return;
                const sdpMidName = GodotRuntime.parseString(p_mid_name);
                const sdpName = GodotRuntime.parseString(p_sdp);
                ref.addIceCandidate(new RTCIceCandidate({
                    "candidate": sdpName,
                    "sdpMid": sdpMidName,
                    "sdpMlineIndex": p_mline_idx
                }));
            }
            function _godot_js_rtc_pc_local_description_set(p_id, p_type, p_sdp, p_obj, p_on_error) {
                const ref = IDHandler.get(p_id);
                if (!ref) return;
                const type = GodotRuntime.parseString(p_type);
                const sdp = GodotRuntime.parseString(p_sdp);
                const onerror = GodotRuntime.get_func(p_on_error).bind(null, p_obj);
                ref.setLocalDescription({
                    "sdp": sdp,
                    "type": type
                }).catch(function(error) {
                    GodotRTCPeerConnection.onerror(p_id, onerror, error);
                });
            }
            function _godot_js_rtc_pc_offer_create(p_id, p_obj, p_on_session, p_on_error) {
                const ref = IDHandler.get(p_id);
                if (!ref) return;
                const onsession = GodotRuntime.get_func(p_on_session).bind(null, p_obj);
                const onerror = GodotRuntime.get_func(p_on_error).bind(null, p_obj);
                ref.createOffer().then(function(session) {
                    GodotRTCPeerConnection.onsession(p_id, onsession, session);
                }).catch(function(error) {
                    GodotRTCPeerConnection.onerror(p_id, onerror, error);
                });
            }
            function _godot_js_rtc_pc_remote_description_set(p_id, p_type, p_sdp, p_obj, p_session_created, p_on_error) {
                const ref = IDHandler.get(p_id);
                if (!ref) return;
                const type = GodotRuntime.parseString(p_type);
                const sdp = GodotRuntime.parseString(p_sdp);
                const onerror = GodotRuntime.get_func(p_on_error).bind(null, p_obj);
                const onsession = GodotRuntime.get_func(p_session_created).bind(null, p_obj);
                ref.setRemoteDescription({
                    "sdp": sdp,
                    "type": type
                }).then(function() {
                    if (type !== "offer") return Promise.resolve();
                    return ref.createAnswer().then(function(session) {
                        GodotRTCPeerConnection.onsession(p_id, onsession, session);
                    });
                }).catch(function(error) {
                    GodotRTCPeerConnection.onerror(p_id, onerror, error);
                });
            }
            var GodotWebSocket = {
                _onopen: function(p_id, callback, event) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    const c_str = GodotRuntime.allocString(ref.protocol);
                    callback(c_str);
                    GodotRuntime.free(c_str);
                },
                _onmessage: function(p_id, callback, event) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    let buffer;
                    let is_string = 0;
                    if (event.data instanceof ArrayBuffer) buffer = new Uint8Array(event.data);
                    else if (event.data instanceof Blob) {
                        GodotRuntime.error("Blob type not supported");
                        return;
                    } else if (typeof event.data === "string") {
                        is_string = 1;
                        const enc = new TextEncoder("utf-8");
                        buffer = new Uint8Array(enc.encode(event.data));
                    } else {
                        GodotRuntime.error("Unknown message type");
                        return;
                    }
                    const len = buffer.length * buffer.BYTES_PER_ELEMENT;
                    const out = GodotRuntime.malloc(len);
                    HEAPU8.set(buffer, out);
                    callback(out, len, is_string);
                    GodotRuntime.free(out);
                },
                _onerror: function(p_id, callback, event) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    callback();
                },
                _onclose: function(p_id, callback, event) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    const c_str = GodotRuntime.allocString(event.reason);
                    callback(event.code, c_str, event.wasClean ? 1 : 0);
                    GodotRuntime.free(c_str);
                },
                send: function(p_id, p_data) {
                    const ref = IDHandler.get(p_id);
                    if (!ref || ref.readyState !== ref.OPEN) return 1;
                    ref.send(p_data);
                    return 0;
                },
                bufferedAmount: function(p_id) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return 0;
                    return ref.bufferedAmount;
                },
                create: function(socket, p_on_open, p_on_message, p_on_error, p_on_close) {
                    const id = IDHandler.add(socket);
                    socket.onopen = GodotWebSocket._onopen.bind(null, id, p_on_open);
                    socket.onmessage = GodotWebSocket._onmessage.bind(null, id, p_on_message);
                    socket.onerror = GodotWebSocket._onerror.bind(null, id, p_on_error);
                    socket.onclose = GodotWebSocket._onclose.bind(null, id, p_on_close);
                    return id;
                },
                close: function(p_id, p_code, p_reason) {
                    const ref = IDHandler.get(p_id);
                    if (ref && ref.readyState < ref.CLOSING) {
                        const code = p_code;
                        const reason = GodotRuntime.parseString(p_reason);
                        ref.close(code, reason);
                    }
                },
                destroy: function(p_id) {
                    const ref = IDHandler.get(p_id);
                    if (!ref) return;
                    GodotWebSocket.close(p_id, 1001, "");
                    IDHandler.remove(p_id);
                    ref.onopen = null;
                    ref.onmessage = null;
                    ref.onerror = null;
                    ref.onclose = null;
                }
            };
            function _godot_js_websocket_buffered_amount(p_id) {
                return GodotWebSocket.bufferedAmount(p_id);
            }
            function _godot_js_websocket_close(p_id, p_code, p_reason) {
                const code = p_code;
                const reason = GodotRuntime.parseString(p_reason);
                GodotWebSocket.close(p_id, code, reason);
            }
            function _godot_js_websocket_create(p_ref, p_url, p_proto, p_on_open, p_on_message, p_on_error, p_on_close) {
                const on_open = GodotRuntime.get_func(p_on_open).bind(null, p_ref);
                const on_message = GodotRuntime.get_func(p_on_message).bind(null, p_ref);
                const on_error = GodotRuntime.get_func(p_on_error).bind(null, p_ref);
                const on_close = GodotRuntime.get_func(p_on_close).bind(null, p_ref);
                const url = GodotRuntime.parseString(p_url);
                const protos = GodotRuntime.parseString(p_proto);
                let socket = null;
                try {
                    if (protos) socket = new WebSocket(url, protos.split(","));
                    else socket = new WebSocket(url);
                } catch (e) {
                    return 0;
                }
                socket.binaryType = "arraybuffer";
                return GodotWebSocket.create(socket, on_open, on_message, on_error, on_close);
            }
            function _godot_js_websocket_destroy(p_id) {
                GodotWebSocket.destroy(p_id);
            }
            function _godot_js_websocket_send(p_id, p_buf, p_buf_len, p_raw) {
                const bytes_array = new Uint8Array(p_buf_len);
                let i = 0;
                for(i = 0; i < p_buf_len; i++)bytes_array[i] = GodotRuntime.getHeapValue(p_buf + i, "i8");
                let out = bytes_array.buffer;
                if (!p_raw) out = new TextDecoder("utf-8").decode(bytes_array);
                return GodotWebSocket.send(p_id, out);
            }
            var GodotJSWrapper = {
                proxies: null,
                MyProxy: function(val) {
                    const id = IDHandler.add(this);
                    GodotJSWrapper.proxies.set(val, id);
                    let refs = 1;
                    this.ref = function() {
                        refs++;
                    };
                    this.unref = function() {
                        refs--;
                        if (refs === 0) {
                            IDHandler.remove(id);
                            GodotJSWrapper.proxies.delete(val);
                        }
                    };
                    this.get_val = function() {
                        return val;
                    };
                    this.get_id = function() {
                        return id;
                    };
                },
                get_proxied: function(val) {
                    const id = GodotJSWrapper.proxies.get(val);
                    if (id === undefined) {
                        const proxy = new GodotJSWrapper.MyProxy(val);
                        return proxy.get_id();
                    }
                    IDHandler.get(id).ref();
                    return id;
                },
                get_proxied_value: function(id) {
                    const proxy = IDHandler.get(id);
                    if (proxy === undefined) return undefined;
                    return proxy.get_val();
                },
                variant2js: function(type, val) {
                    switch(type){
                        case 0:
                            return null;
                        case 1:
                            return !!GodotRuntime.getHeapValue(val, "i64");
                        case 2:
                            return GodotRuntime.getHeapValue(val, "i64");
                        case 3:
                            return GodotRuntime.getHeapValue(val, "double");
                        case 4:
                            return GodotRuntime.parseString(GodotRuntime.getHeapValue(val, "*"));
                        case 17:
                            return GodotJSWrapper.get_proxied_value(GodotRuntime.getHeapValue(val, "i64"));
                        default:
                            return undefined;
                    }
                },
                js2variant: function(p_val, p_exchange) {
                    if (p_val === undefined || p_val === null) return 0;
                    const type = typeof p_val;
                    if (type === "boolean") {
                        GodotRuntime.setHeapValue(p_exchange, p_val, "i64");
                        return 1;
                    } else if (type === "number") {
                        if (Number.isInteger(p_val)) {
                            GodotRuntime.setHeapValue(p_exchange, p_val, "i64");
                            return 2;
                        }
                        GodotRuntime.setHeapValue(p_exchange, p_val, "double");
                        return 3;
                    } else if (type === "string") {
                        const c_str = GodotRuntime.allocString(p_val);
                        GodotRuntime.setHeapValue(p_exchange, c_str, "*");
                        return 4;
                    }
                    const id = GodotJSWrapper.get_proxied(p_val);
                    GodotRuntime.setHeapValue(p_exchange, id, "i64");
                    return 17;
                }
            };
            function _godot_js_wrapper_create_cb(p_ref, p_func) {
                const func = GodotRuntime.get_func(p_func);
                let id = 0;
                const cb = function() {
                    if (!GodotJSWrapper.get_proxied_value(id)) return;
                    const args = Array.from(arguments);
                    func(p_ref, GodotJSWrapper.get_proxied(args), args.length);
                };
                id = GodotJSWrapper.get_proxied(cb);
                return id;
            }
            function _godot_js_wrapper_create_object(p_object, p_args, p_argc, p_convert_callback, p_exchange, p_lock, p_free_lock_callback) {
                const name = GodotRuntime.parseString(p_object);
                if (typeof window[name] === "undefined") return -1;
                const convert = GodotRuntime.get_func(p_convert_callback);
                const freeLock = GodotRuntime.get_func(p_free_lock_callback);
                const args = new Array(p_argc);
                for(let i = 0; i < p_argc; i++){
                    const type = convert(p_args, i, p_exchange, p_lock);
                    const lock = GodotRuntime.getHeapValue(p_lock, "*");
                    args[i] = GodotJSWrapper.variant2js(type, p_exchange);
                    if (lock) freeLock(p_lock, type);
                }
                try {
                    const res = new window[name](...args);
                    return GodotJSWrapper.js2variant(res, p_exchange);
                } catch (e) {
                    GodotRuntime.error(`Error calling constructor ${name} with args:`, args, "error:", e);
                    return -1;
                }
            }
            function _godot_js_wrapper_interface_get(p_name) {
                const name = GodotRuntime.parseString(p_name);
                if (typeof window[name] !== "undefined") return GodotJSWrapper.get_proxied(window[name]);
                return 0;
            }
            function _godot_js_wrapper_object_call(p_id, p_method, p_args, p_argc, p_convert_callback, p_exchange, p_lock, p_free_lock_callback) {
                const obj = GodotJSWrapper.get_proxied_value(p_id);
                if (obj === undefined) return -1;
                const method = GodotRuntime.parseString(p_method);
                const convert = GodotRuntime.get_func(p_convert_callback);
                const freeLock = GodotRuntime.get_func(p_free_lock_callback);
                const args = new Array(p_argc);
                for(let i = 0; i < p_argc; i++){
                    const type = convert(p_args, i, p_exchange, p_lock);
                    const lock = GodotRuntime.getHeapValue(p_lock, "*");
                    args[i] = GodotJSWrapper.variant2js(type, p_exchange);
                    if (lock) freeLock(p_lock, type);
                }
                try {
                    const res = obj[method](...args);
                    return GodotJSWrapper.js2variant(res, p_exchange);
                } catch (e) {
                    GodotRuntime.error(`Error calling method ${method} on:`, obj, "error:", e);
                    return -1;
                }
            }
            function _godot_js_wrapper_object_get(p_id, p_exchange, p_prop) {
                const obj = GodotJSWrapper.get_proxied_value(p_id);
                if (obj === undefined) return 0;
                if (p_prop) {
                    const prop = GodotRuntime.parseString(p_prop);
                    try {
                        return GodotJSWrapper.js2variant(obj[prop], p_exchange);
                    } catch (e) {
                        GodotRuntime.error(`Error getting variable ${prop} on object`, obj);
                        return 0;
                    }
                }
                return GodotJSWrapper.js2variant(obj, p_exchange);
            }
            function _godot_js_wrapper_object_getvar(p_id, p_type, p_exchange) {
                const obj = GodotJSWrapper.get_proxied_value(p_id);
                if (obj === undefined) return -1;
                const prop = GodotJSWrapper.variant2js(p_type, p_exchange);
                if (prop === undefined || prop === null) return -1;
                try {
                    return GodotJSWrapper.js2variant(obj[prop], p_exchange);
                } catch (e) {
                    GodotRuntime.error(`Error getting variable ${prop} on object`, obj, e);
                    return -1;
                }
            }
            function _godot_js_wrapper_object_set(p_id, p_name, p_type, p_exchange) {
                const obj = GodotJSWrapper.get_proxied_value(p_id);
                if (obj === undefined) return;
                const name = GodotRuntime.parseString(p_name);
                try {
                    obj[name] = GodotJSWrapper.variant2js(p_type, p_exchange);
                } catch (e) {
                    GodotRuntime.error(`Error setting variable ${name} on object`, obj);
                }
            }
            function _godot_js_wrapper_object_setvar(p_id, p_key_type, p_key_ex, p_val_type, p_val_ex) {
                const obj = GodotJSWrapper.get_proxied_value(p_id);
                if (obj === undefined) return -1;
                const key = GodotJSWrapper.variant2js(p_key_type, p_key_ex);
                try {
                    obj[key] = GodotJSWrapper.variant2js(p_val_type, p_val_ex);
                    return 0;
                } catch (e) {
                    GodotRuntime.error(`Error setting variable ${key} on object`, obj);
                    return -1;
                }
            }
            function _godot_js_wrapper_object_unref(p_id) {
                const proxy = IDHandler.get(p_id);
                if (proxy !== undefined) proxy.unref();
            }
            var GodotWebXR = {
                gl: null,
                texture_ids: [
                    null,
                    null
                ],
                textures: [
                    null,
                    null
                ],
                session: null,
                space: null,
                frame: null,
                pose: null,
                orig_requestAnimationFrame: null,
                requestAnimationFrame: (callback)=>{
                    if (GodotWebXR.session && GodotWebXR.space) {
                        const onFrame = function(time, frame) {
                            GodotWebXR.frame = frame;
                            GodotWebXR.pose = frame.getViewerPose(GodotWebXR.space);
                            callback(time);
                            GodotWebXR.frame = null;
                            GodotWebXR.pose = null;
                        };
                        GodotWebXR.session.requestAnimationFrame(onFrame);
                    } else GodotWebXR.orig_requestAnimationFrame(callback);
                },
                monkeyPatchRequestAnimationFrame: (enable)=>{
                    if (GodotWebXR.orig_requestAnimationFrame === null) GodotWebXR.orig_requestAnimationFrame = Browser.requestAnimationFrame;
                    Browser.requestAnimationFrame = enable ? GodotWebXR.requestAnimationFrame : GodotWebXR.orig_requestAnimationFrame;
                },
                pauseResumeMainLoop: ()=>{
                    Browser.mainLoop.pause();
                    window.setTimeout(function() {
                        Browser.mainLoop.resume();
                    }, 0);
                },
                shaderProgram: null,
                programInfo: null,
                buffer: null,
                vsSource: "\n\t\t\tconst vec2 scale = vec2(0.5, 0.5);\n\t\t\tattribute vec4 aVertexPosition;\n\n\t\t\tvarying highp vec2 vTextureCoord;\n\n\t\t\tvoid main () {\n\t\t\t\tgl_Position = aVertexPosition;\n\t\t\t\tvTextureCoord = aVertexPosition.xy * scale + scale;\n\t\t\t}\n\t\t",
                fsSource: "\n\t\t\tvarying highp vec2 vTextureCoord;\n\n\t\t\tuniform sampler2D uSampler;\n\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = texture2D(uSampler, vTextureCoord);\n\t\t\t}\n\t\t",
                initShaderProgram: (gl, vsSource, fsSource)=>{
                    const vertexShader = GodotWebXR.loadShader(gl, gl.VERTEX_SHADER, vsSource);
                    const fragmentShader = GodotWebXR.loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
                    const shaderProgram = gl.createProgram();
                    gl.attachShader(shaderProgram, vertexShader);
                    gl.attachShader(shaderProgram, fragmentShader);
                    gl.linkProgram(shaderProgram);
                    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
                        GodotRuntime.error(`Unable to initialize the shader program: ${gl.getProgramInfoLog(shaderProgram)}`);
                        return null;
                    }
                    return shaderProgram;
                },
                loadShader: (gl, type, source)=>{
                    const shader = gl.createShader(type);
                    gl.shaderSource(shader, source);
                    gl.compileShader(shader);
                    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                        GodotRuntime.error(`An error occurred compiling the shader: ${gl.getShaderInfoLog(shader)}`);
                        gl.deleteShader(shader);
                        return null;
                    }
                    return shader;
                },
                initBuffer: (gl)=>{
                    const positionBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                    const positions = [
                        -1,
                        -1,
                        1,
                        -1,
                        -1,
                        1,
                        1,
                        1
                    ];
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
                    return positionBuffer;
                },
                blitTexture: (gl, texture)=>{
                    if (GodotWebXR.shaderProgram === null) {
                        GodotWebXR.shaderProgram = GodotWebXR.initShaderProgram(gl, GodotWebXR.vsSource, GodotWebXR.fsSource);
                        GodotWebXR.programInfo = {
                            program: GodotWebXR.shaderProgram,
                            attribLocations: {
                                vertexPosition: gl.getAttribLocation(GodotWebXR.shaderProgram, "aVertexPosition")
                            },
                            uniformLocations: {
                                uSampler: gl.getUniformLocation(GodotWebXR.shaderProgram, "uSampler")
                            }
                        };
                        GodotWebXR.buffer = GodotWebXR.initBuffer(gl);
                    }
                    const orig_program = gl.getParameter(gl.CURRENT_PROGRAM);
                    gl.useProgram(GodotWebXR.shaderProgram);
                    gl.bindBuffer(gl.ARRAY_BUFFER, GodotWebXR.buffer);
                    gl.vertexAttribPointer(GodotWebXR.programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(GodotWebXR.programInfo.attribLocations.vertexPosition);
                    gl.activeTexture(gl.TEXTURE0);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.uniform1i(GodotWebXR.programInfo.uniformLocations.uSampler, 0);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                    gl.bindTexture(gl.TEXTURE_2D, null);
                    gl.disableVertexAttribArray(GodotWebXR.programInfo.attribLocations.vertexPosition);
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    gl.useProgram(orig_program);
                },
                controllers: [],
                sampleControllers: ()=>{
                    if (!GodotWebXR.session || !GodotWebXR.frame) return;
                    let other_index = 2;
                    const controllers = [];
                    GodotWebXR.session.inputSources.forEach((input_source)=>{
                        if (input_source.targetRayMode === "tracked-pointer") {
                            if (input_source.handedness === "right") controllers[1] = input_source;
                            else if (input_source.handedness === "left" || !controllers[0]) controllers[0] = input_source;
                        } else controllers[other_index++] = input_source;
                    });
                    GodotWebXR.controllers = controllers;
                },
                getControllerId: (input_source)=>GodotWebXR.controllers.indexOf(input_source)
            };
            function _godot_webxr_commit_for_eye(p_eye) {
                if (!GodotWebXR.session || !GodotWebXR.pose) return;
                const view_index = p_eye === 2 ? 1 : 0;
                const glLayer = GodotWebXR.session.renderState.baseLayer;
                const view = GodotWebXR.pose.views[view_index];
                const viewport = glLayer.getViewport(view);
                const gl = GodotWebXR.gl;
                const orig_framebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
                const orig_viewport = gl.getParameter(gl.VIEWPORT);
                gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
                gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
                GodotWebXR.blitTexture(gl, GodotWebXR.textures[view_index]);
                gl.bindFramebuffer(gl.FRAMEBUFFER, orig_framebuffer);
                gl.viewport(orig_viewport[0], orig_viewport[1], orig_viewport[2], orig_viewport[3]);
            }
            function _godot_webxr_get_bounds_geometry() {
                if (!GodotWebXR.space || !GodotWebXR.space.boundsGeometry) return 0;
                const point_count = GodotWebXR.space.boundsGeometry.length;
                if (point_count === 0) return 0;
                const buf = GodotRuntime.malloc((point_count * 3 + 1) * 4);
                GodotRuntime.setHeapValue(buf, point_count, "i32");
                for(let i = 0; i < point_count; i++){
                    const point = GodotWebXR.space.boundsGeometry[i];
                    GodotRuntime.setHeapValue(buf + (i * 3 + 1) * 4, point.x, "float");
                    GodotRuntime.setHeapValue(buf + (i * 3 + 2) * 4, point.y, "float");
                    GodotRuntime.setHeapValue(buf + (i * 3 + 3) * 4, point.z, "float");
                }
                return buf;
            }
            function _godot_webxr_get_controller_axes(p_controller) {
                if (GodotWebXR.controllers.length === 0) return 0;
                const controller = GodotWebXR.controllers[p_controller];
                if (!controller || !controller.gamepad) return 0;
                const axes_count = controller.gamepad.axes.length;
                const buf = GodotRuntime.malloc((axes_count + 1) * 4);
                GodotRuntime.setHeapValue(buf, axes_count, "i32");
                for(let i = 0; i < axes_count; i++){
                    let value = controller.gamepad.axes[i];
                    if (i === 1 || i === 3) value *= -1;
                    GodotRuntime.setHeapValue(buf + 4 + i * 4, value, "float");
                }
                return buf;
            }
            function _godot_webxr_get_controller_buttons(p_controller) {
                if (GodotWebXR.controllers.length === 0) return 0;
                const controller = GodotWebXR.controllers[p_controller];
                if (!controller || !controller.gamepad) return 0;
                const button_count = controller.gamepad.buttons.length;
                const buf = GodotRuntime.malloc((button_count + 1) * 4);
                GodotRuntime.setHeapValue(buf, button_count, "i32");
                for(let i = 0; i < button_count; i++)GodotRuntime.setHeapValue(buf + 4 + i * 4, controller.gamepad.buttons[i].value, "float");
                return buf;
            }
            function _godot_webxr_get_controller_count() {
                if (!GodotWebXR.session || !GodotWebXR.frame) return 0;
                return GodotWebXR.controllers.length;
            }
            function _godot_webxr_get_controller_transform(p_controller) {
                if (!GodotWebXR.session || !GodotWebXR.frame) return 0;
                const controller = GodotWebXR.controllers[p_controller];
                if (!controller) return 0;
                const frame = GodotWebXR.frame;
                const space = GodotWebXR.space;
                const pose = frame.getPose(controller.targetRaySpace, space);
                if (!pose) return 0;
                const matrix = pose.transform.matrix;
                const buf = GodotRuntime.malloc(64);
                for(let i = 0; i < 16; i++)GodotRuntime.setHeapValue(buf + i * 4, matrix[i], "float");
                return buf;
            }
            function _godot_webxr_get_external_texture_for_eye(p_eye) {
                if (!GodotWebXR.session) return 0;
                const view_index = p_eye === 2 ? 1 : 0;
                if (GodotWebXR.texture_ids[view_index]) return GodotWebXR.texture_ids[view_index];
                if (!GodotWebXR.pose) return 0;
                const glLayer = GodotWebXR.session.renderState.baseLayer;
                const view = GodotWebXR.pose.views[view_index];
                const viewport = glLayer.getViewport(view);
                const gl = GodotWebXR.gl;
                const texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, viewport.width, viewport.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.bindTexture(gl.TEXTURE_2D, null);
                const texture_id = GL.getNewId(GL.textures);
                GL.textures[texture_id] = texture;
                GodotWebXR.textures[view_index] = texture;
                GodotWebXR.texture_ids[view_index] = texture_id;
                return texture_id;
            }
            function _godot_webxr_get_projection_for_eye(p_eye) {
                if (!GodotWebXR.session || !GodotWebXR.pose) return 0;
                const view_index = p_eye === 2 ? 1 : 0;
                const matrix = GodotWebXR.pose.views[view_index].projectionMatrix;
                const buf = GodotRuntime.malloc(64);
                for(let i = 0; i < 16; i++)GodotRuntime.setHeapValue(buf + i * 4, matrix[i], "float");
                return buf;
            }
            function _godot_webxr_get_render_targetsize() {
                if (!GodotWebXR.session || !GodotWebXR.pose) return 0;
                const glLayer = GodotWebXR.session.renderState.baseLayer;
                const view = GodotWebXR.pose.views[0];
                const viewport = glLayer.getViewport(view);
                const buf = GodotRuntime.malloc(8);
                GodotRuntime.setHeapValue(buf + 0, viewport.width, "i32");
                GodotRuntime.setHeapValue(buf + 4, viewport.height, "i32");
                return buf;
            }
            function _godot_webxr_get_transform_for_eye(p_eye) {
                if (!GodotWebXR.session || !GodotWebXR.pose) return 0;
                const views = GodotWebXR.pose.views;
                let matrix;
                if (p_eye === 0) matrix = GodotWebXR.pose.transform.matrix;
                else matrix = views[p_eye - 1].transform.matrix;
                const buf = GodotRuntime.malloc(64);
                for(let i = 0; i < 16; i++)GodotRuntime.setHeapValue(buf + i * 4, matrix[i], "float");
                return buf;
            }
            function _godot_webxr_get_view_count() {
                if (!GodotWebXR.session || !GodotWebXR.pose) return 0;
                return GodotWebXR.pose.views.length;
            }
            function _godot_webxr_get_visibility_state() {
                if (!GodotWebXR.session || !GodotWebXR.session.visibilityState) return 0;
                return GodotRuntime.allocString(GodotWebXR.session.visibilityState);
            }
            function _godot_webxr_initialize(p_session_mode, p_required_features, p_optional_features, p_requested_reference_spaces, p_on_session_started, p_on_session_ended, p_on_session_failed, p_on_controller_changed, p_on_input_event, p_on_simple_event) {
                GodotWebXR.monkeyPatchRequestAnimationFrame(true);
                const session_mode = GodotRuntime.parseString(p_session_mode);
                const required_features = GodotRuntime.parseString(p_required_features).split(",").map((s)=>s.trim()
                ).filter((s)=>s !== ""
                );
                const optional_features = GodotRuntime.parseString(p_optional_features).split(",").map((s)=>s.trim()
                ).filter((s)=>s !== ""
                );
                const requested_reference_space_types = GodotRuntime.parseString(p_requested_reference_spaces).split(",").map((s)=>s.trim()
                );
                const onstarted = GodotRuntime.get_func(p_on_session_started);
                const onended = GodotRuntime.get_func(p_on_session_ended);
                const onfailed = GodotRuntime.get_func(p_on_session_failed);
                const oncontroller = GodotRuntime.get_func(p_on_controller_changed);
                const oninputevent = GodotRuntime.get_func(p_on_input_event);
                const onsimpleevent = GodotRuntime.get_func(p_on_simple_event);
                const session_init = {
                };
                if (required_features.length > 0) session_init["requiredFeatures"] = required_features;
                if (optional_features.length > 0) session_init["optionalFeatures"] = optional_features;
                navigator.xr.requestSession(session_mode, session_init).then(function(session) {
                    GodotWebXR.session = session;
                    session.addEventListener("end", function(evt) {
                        onended();
                    });
                    session.addEventListener("inputsourceschange", function(evt) {
                        let controller_changed = false;
                        [
                            evt.added,
                            evt.removed
                        ].forEach((lst)=>{
                            lst.forEach((input_source)=>{
                                if (input_source.targetRayMode === "tracked-pointer") controller_changed = true;
                            });
                        });
                        if (controller_changed) oncontroller();
                    });
                    [
                        "selectstart",
                        "select",
                        "selectend",
                        "squeezestart",
                        "squeeze",
                        "squeezeend"
                    ].forEach((input_event)=>{
                        session.addEventListener(input_event, function(evt) {
                            const c_str = GodotRuntime.allocString(input_event);
                            oninputevent(c_str, GodotWebXR.getControllerId(evt.inputSource));
                            GodotRuntime.free(c_str);
                        });
                    });
                    session.addEventListener("visibilitychange", function(evt) {
                        const c_str = GodotRuntime.allocString("visibility_state_changed");
                        onsimpleevent(c_str);
                        GodotRuntime.free(c_str);
                    });
                    const gl_context_handle = _emscripten_webgl_get_current_context();
                    const gl = GL.getContext(gl_context_handle).GLctx;
                    GodotWebXR.gl = gl;
                    gl.makeXRCompatible().then(function() {
                        session.updateRenderState({
                            baseLayer: new XRWebGLLayer(session, gl)
                        });
                        function onReferenceSpaceSuccess(reference_space, reference_space_type) {
                            GodotWebXR.space = reference_space;
                            reference_space.onreset = function(evt) {
                                const c_str = GodotRuntime.allocString("reference_space_reset");
                                onsimpleevent(c_str);
                                GodotRuntime.free(c_str);
                            };
                            GodotWebXR.pauseResumeMainLoop();
                            window.setTimeout(function() {
                                const c_str = GodotRuntime.allocString(reference_space_type);
                                onstarted(c_str);
                                GodotRuntime.free(c_str);
                            }, 0);
                        }
                        function requestReferenceSpace() {
                            const reference_space_type = requested_reference_space_types.shift();
                            session.requestReferenceSpace(reference_space_type).then((refSpace)=>{
                                onReferenceSpaceSuccess(refSpace, reference_space_type);
                            }).catch(()=>{
                                if (requested_reference_space_types.length === 0) {
                                    const c_str = GodotRuntime.allocString("Unable to get any of the requested reference space types");
                                    onfailed(c_str);
                                    GodotRuntime.free(c_str);
                                } else requestReferenceSpace();
                            });
                        }
                        requestReferenceSpace();
                    }).catch(function(error) {
                        const c_str = GodotRuntime.allocString(`Unable to make WebGL context compatible with WebXR: ${error}`);
                        onfailed(c_str);
                        GodotRuntime.free(c_str);
                    });
                }).catch(function(error) {
                    const c_str = GodotRuntime.allocString(`Unable to start session: ${error}`);
                    onfailed(c_str);
                    GodotRuntime.free(c_str);
                });
            }
            function _godot_webxr_is_controller_connected(p_controller) {
                if (!GodotWebXR.session || !GodotWebXR.frame) return false;
                return !!GodotWebXR.controllers[p_controller];
            }
            function _godot_webxr_is_session_supported(p_session_mode, p_callback) {
                const session_mode = GodotRuntime.parseString(p_session_mode);
                const cb = GodotRuntime.get_func(p_callback);
                if (navigator.xr) navigator.xr.isSessionSupported(session_mode).then(function(supported) {
                    const c_str = GodotRuntime.allocString(session_mode);
                    cb(c_str, supported ? 1 : 0);
                    GodotRuntime.free(c_str);
                });
                else {
                    const c_str = GodotRuntime.allocString(session_mode);
                    cb(c_str, 0);
                    GodotRuntime.free(c_str);
                }
            }
            function _godot_webxr_is_supported() {
                return !!navigator.xr;
            }
            function _godot_webxr_sample_controller_data() {
                GodotWebXR.sampleControllers();
            }
            function _godot_webxr_uninitialize() {
                if (GodotWebXR.session) GodotWebXR.session.end().catch((e)=>{
                });
                const gl = GodotWebXR.gl;
                for(let i = 0; i < GodotWebXR.textures.length; i++){
                    const texture = GodotWebXR.textures[i];
                    if (texture !== null) gl.deleteTexture(texture);
                    GodotWebXR.textures[i] = null;
                    const texture_id = GodotWebXR.texture_ids[i];
                    if (texture_id !== null) GL.textures[texture_id] = null;
                    GodotWebXR.texture_ids[i] = null;
                }
                GodotWebXR.session = null;
                GodotWebXR.space = null;
                GodotWebXR.frame = null;
                GodotWebXR.pose = null;
                GodotWebXR.monkeyPatchRequestAnimationFrame(false);
                GodotWebXR.pauseResumeMainLoop();
            }
            function _kill(pid, sig) {
                setErrNo(ERRNO_CODES.EPERM);
                return -1;
            }
            function _tzset() {
                if (_tzset.called) return;
                _tzset.called = true;
                var currentYear = (new Date).getFullYear();
                var winter = new Date(currentYear, 0, 1);
                var summer = new Date(currentYear, 6, 1);
                var winterOffset = winter.getTimezoneOffset();
                var summerOffset = summer.getTimezoneOffset();
                var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
                HEAP32[__get_timezone() >> 2] = stdTimezoneOffset * 60;
                HEAP32[__get_daylight() >> 2] = Number(winterOffset != summerOffset);
                function extractZone(date) {
                    var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                    return match ? match[1] : "GMT";
                }
                var winterName = extractZone(winter);
                var summerName = extractZone(summer);
                var winterNamePtr = allocateUTF8(winterName);
                var summerNamePtr = allocateUTF8(summerName);
                if (summerOffset < winterOffset) {
                    HEAP32[__get_tzname() >> 2] = winterNamePtr;
                    HEAP32[__get_tzname() + 4 >> 2] = summerNamePtr;
                } else {
                    HEAP32[__get_tzname() >> 2] = summerNamePtr;
                    HEAP32[__get_tzname() + 4 >> 2] = winterNamePtr;
                }
            }
            function _localtime_r(time, tmPtr) {
                _tzset();
                var date = new Date(HEAP32[time >> 2] * 1000);
                HEAP32[tmPtr >> 2] = date.getSeconds();
                HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
                HEAP32[tmPtr + 8 >> 2] = date.getHours();
                HEAP32[tmPtr + 12 >> 2] = date.getDate();
                HEAP32[tmPtr + 16 >> 2] = date.getMonth();
                HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
                HEAP32[tmPtr + 24 >> 2] = date.getDay();
                var start = new Date(date.getFullYear(), 0, 1);
                var yday = (date.getTime() - start.getTime()) / 86400000 | 0;
                HEAP32[tmPtr + 28 >> 2] = yday;
                HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
                var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
                var winterOffset = start.getTimezoneOffset();
                var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
                HEAP32[tmPtr + 32 >> 2] = dst;
                var zonePtr = HEAP32[__get_tzname() + (dst ? 4 : 0) >> 2];
                HEAP32[tmPtr + 40 >> 2] = zonePtr;
                return tmPtr;
            }
            function _setTempRet0(val) {
                setTempRet0(val);
            }
            var __sigalrm_handler = 0;
            function ___sigaction(sig, act, oldact) {
                if (sig == 14) {
                    __sigalrm_handler = HEAP32[act >> 2];
                    return 0;
                }
                return 0;
            }
            function _sigaction(a0, a1, a2) {
                return ___sigaction(a0, a1, a2);
            }
            function __isLeapYear(year) {
                return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
            }
            function __arraySum(array, index) {
                var sum = 0;
                for(var i = 0; i <= index; sum += array[i++]);
                return sum;
            }
            var __MONTH_DAYS_LEAP = [
                31,
                29,
                31,
                30,
                31,
                30,
                31,
                31,
                30,
                31,
                30,
                31
            ];
            var __MONTH_DAYS_REGULAR = [
                31,
                28,
                31,
                30,
                31,
                30,
                31,
                31,
                30,
                31,
                30,
                31
            ];
            function __addDays(date, days) {
                var newDate = new Date(date.getTime());
                while(days > 0){
                    var leap = __isLeapYear(newDate.getFullYear());
                    var currentMonth = newDate.getMonth();
                    var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
                    if (days > daysInCurrentMonth - newDate.getDate()) {
                        days -= daysInCurrentMonth - newDate.getDate() + 1;
                        newDate.setDate(1);
                        if (currentMonth < 11) newDate.setMonth(currentMonth + 1);
                        else {
                            newDate.setMonth(0);
                            newDate.setFullYear(newDate.getFullYear() + 1);
                        }
                    } else {
                        newDate.setDate(newDate.getDate() + days);
                        return newDate;
                    }
                }
                return newDate;
            }
            function _strftime(s, maxsize, format, tm) {
                var tm_zone = HEAP32[tm + 40 >> 2];
                var date1 = {
                    tm_sec: HEAP32[tm >> 2],
                    tm_min: HEAP32[tm + 4 >> 2],
                    tm_hour: HEAP32[tm + 8 >> 2],
                    tm_mday: HEAP32[tm + 12 >> 2],
                    tm_mon: HEAP32[tm + 16 >> 2],
                    tm_year: HEAP32[tm + 20 >> 2],
                    tm_wday: HEAP32[tm + 24 >> 2],
                    tm_yday: HEAP32[tm + 28 >> 2],
                    tm_isdst: HEAP32[tm + 32 >> 2],
                    tm_gmtoff: HEAP32[tm + 36 >> 2],
                    tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
                };
                var pattern = UTF8ToString(format);
                var EXPANSION_RULES_1 = {
                    "%c": "%a %b %d %H:%M:%S %Y",
                    "%D": "%m/%d/%y",
                    "%F": "%Y-%m-%d",
                    "%h": "%b",
                    "%r": "%I:%M:%S %p",
                    "%R": "%H:%M",
                    "%T": "%H:%M:%S",
                    "%x": "%m/%d/%y",
                    "%X": "%H:%M:%S",
                    "%Ec": "%c",
                    "%EC": "%C",
                    "%Ex": "%m/%d/%y",
                    "%EX": "%H:%M:%S",
                    "%Ey": "%y",
                    "%EY": "%Y",
                    "%Od": "%d",
                    "%Oe": "%e",
                    "%OH": "%H",
                    "%OI": "%I",
                    "%Om": "%m",
                    "%OM": "%M",
                    "%OS": "%S",
                    "%Ou": "%u",
                    "%OU": "%U",
                    "%OV": "%V",
                    "%Ow": "%w",
                    "%OW": "%W",
                    "%Oy": "%y"
                };
                for(var rule in EXPANSION_RULES_1)pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
                var WEEKDAYS = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ];
                var MONTHS = [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ];
                function leadingSomething(value, digits, character) {
                    var str = typeof value === "number" ? value.toString() : value || "";
                    while(str.length < digits)str = character[0] + str;
                    return str;
                }
                function leadingNulls(value, digits) {
                    return leadingSomething(value, digits, "0");
                }
                function compareByDay(date1, date2) {
                    function sgn(value) {
                        return value < 0 ? -1 : value > 0 ? 1 : 0;
                    }
                    var compare;
                    if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
                        if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) compare = sgn(date1.getDate() - date2.getDate());
                    }
                    return compare;
                }
                function getFirstWeekStartDate(janFourth) {
                    switch(janFourth.getDay()){
                        case 0:
                            return new Date(janFourth.getFullYear() - 1, 11, 29);
                        case 1:
                            return janFourth;
                        case 2:
                            return new Date(janFourth.getFullYear(), 0, 3);
                        case 3:
                            return new Date(janFourth.getFullYear(), 0, 2);
                        case 4:
                            return new Date(janFourth.getFullYear(), 0, 1);
                        case 5:
                            return new Date(janFourth.getFullYear() - 1, 11, 31);
                        case 6:
                            return new Date(janFourth.getFullYear() - 1, 11, 30);
                    }
                }
                function getWeekBasedYear(date) {
                    var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
                    var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
                    var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
                    var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
                    var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
                    if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
                        if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) return thisDate.getFullYear() + 1;
                        else return thisDate.getFullYear();
                    } else return thisDate.getFullYear() - 1;
                }
                var EXPANSION_RULES_2 = {
                    "%a": function(date) {
                        return WEEKDAYS[date.tm_wday].substring(0, 3);
                    },
                    "%A": function(date) {
                        return WEEKDAYS[date.tm_wday];
                    },
                    "%b": function(date) {
                        return MONTHS[date.tm_mon].substring(0, 3);
                    },
                    "%B": function(date) {
                        return MONTHS[date.tm_mon];
                    },
                    "%C": function(date) {
                        var year = date.tm_year + 1900;
                        return leadingNulls(year / 100 | 0, 2);
                    },
                    "%d": function(date) {
                        return leadingNulls(date.tm_mday, 2);
                    },
                    "%e": function(date) {
                        return leadingSomething(date.tm_mday, 2, " ");
                    },
                    "%g": function(date) {
                        return getWeekBasedYear(date).toString().substring(2);
                    },
                    "%G": function(date) {
                        return getWeekBasedYear(date);
                    },
                    "%H": function(date) {
                        return leadingNulls(date.tm_hour, 2);
                    },
                    "%I": function(date) {
                        var twelveHour = date.tm_hour;
                        if (twelveHour == 0) twelveHour = 12;
                        else if (twelveHour > 12) twelveHour -= 12;
                        return leadingNulls(twelveHour, 2);
                    },
                    "%j": function(date) {
                        return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3);
                    },
                    "%m": function(date) {
                        return leadingNulls(date.tm_mon + 1, 2);
                    },
                    "%M": function(date) {
                        return leadingNulls(date.tm_min, 2);
                    },
                    "%n": function() {
                        return "\n";
                    },
                    "%p": function(date) {
                        if (date.tm_hour >= 0 && date.tm_hour < 12) return "AM";
                        else return "PM";
                    },
                    "%S": function(date) {
                        return leadingNulls(date.tm_sec, 2);
                    },
                    "%t": function() {
                        return "\t";
                    },
                    "%u": function(date) {
                        return date.tm_wday || 7;
                    },
                    "%U": function(date) {
                        var janFirst = new Date(date.tm_year + 1900, 0, 1);
                        var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
                        var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
                        if (compareByDay(firstSunday, endDate) < 0) {
                            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
                            var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
                            var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
                            return leadingNulls(Math.ceil(days / 7), 2);
                        }
                        return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
                    },
                    "%V": function(date) {
                        var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
                        var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
                        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
                        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
                        var endDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
                        if (compareByDay(endDate, firstWeekStartThisYear) < 0) return "53";
                        if (compareByDay(firstWeekStartNextYear, endDate) <= 0) return "01";
                        var daysDifference;
                        if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate();
                        else daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate();
                        return leadingNulls(Math.ceil(daysDifference / 7), 2);
                    },
                    "%w": function(date) {
                        return date.tm_wday;
                    },
                    "%W": function(date) {
                        var janFirst = new Date(date.tm_year, 0, 1);
                        var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
                        var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
                        if (compareByDay(firstMonday, endDate) < 0) {
                            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
                            var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
                            var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
                            return leadingNulls(Math.ceil(days / 7), 2);
                        }
                        return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
                    },
                    "%y": function(date) {
                        return (date.tm_year + 1900).toString().substring(2);
                    },
                    "%Y": function(date) {
                        return date.tm_year + 1900;
                    },
                    "%z": function(date) {
                        var off = date.tm_gmtoff;
                        var ahead = off >= 0;
                        off = Math.abs(off) / 60;
                        off = off / 60 * 100 + off % 60;
                        return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
                    },
                    "%Z": function(date) {
                        return date.tm_zone;
                    },
                    "%%": function() {
                        return "%";
                    }
                };
                for(var rule in EXPANSION_RULES_2)if (pattern.includes(rule)) pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date1));
                var bytes = intArrayFromString(pattern, false);
                if (bytes.length > maxsize) return 0;
                writeArrayToMemory(bytes, s);
                return bytes.length - 1;
            }
            function _strftime_l(s, maxsize, format, tm) {
                return _strftime(s, maxsize, format, tm);
            }
            function _time(ptr) {
                var ret = Date.now() / 1000 | 0;
                if (ptr) HEAP32[ptr >> 2] = ret;
                return ret;
            }
            var FSNode = function(parent, name, mode, rdev) {
                if (!parent) parent = this;
                this.parent = parent;
                this.mount = parent.mount;
                this.mounted = null;
                this.id = FS.nextInode++;
                this.name = name;
                this.mode = mode;
                this.node_ops = {
                };
                this.stream_ops = {
                };
                this.rdev = rdev;
            };
            var readMode = 365;
            var writeMode = 146;
            Object.defineProperties(FSNode.prototype, {
                read: {
                    get: function() {
                        return (this.mode & readMode) === readMode;
                    },
                    set: function(val) {
                        val ? this.mode |= readMode : this.mode &= ~readMode;
                    }
                },
                write: {
                    get: function() {
                        return (this.mode & writeMode) === writeMode;
                    },
                    set: function(val) {
                        val ? this.mode |= writeMode : this.mode &= ~writeMode;
                    }
                },
                isFolder: {
                    get: function() {
                        return FS.isDir(this.mode);
                    }
                },
                isDevice: {
                    get: function() {
                        return FS.isChrdev(this.mode);
                    }
                }
            });
            FS.FSNode = FSNode;
            FS.staticInit();
            Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) {
                Browser.requestFullscreen(lockPointer, resizeCanvas);
            };
            Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
                Browser.requestAnimationFrame(func);
            };
            Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
                Browser.setCanvasSize(width, height, noUpdates);
            };
            Module["pauseMainLoop"] = function Module_pauseMainLoop() {
                Browser.mainLoop.pause();
            };
            Module["resumeMainLoop"] = function Module_resumeMainLoop() {
                Browser.mainLoop.resume();
            };
            Module["getUserMedia"] = function Module_getUserMedia() {
                Browser.getUserMedia();
            };
            Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
                return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes);
            };
            var GLctx1;
            for(var i1 = 0; i1 < 32; ++i1)tempFixedLengthArray.push(new Array(i1));
            var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
            for(var i1 = 0; i1 < 288; ++i1)miniTempWebGLFloatBuffers[i1] = miniTempWebGLFloatBuffersStorage.subarray(0, i1 + 1);
            var __miniTempWebGLIntBuffersStorage = new Int32Array(288);
            for(var i1 = 0; i1 < 288; ++i1)__miniTempWebGLIntBuffers[i1] = __miniTempWebGLIntBuffersStorage.subarray(0, i1 + 1);
            Module["request_quit"] = function() {
                GodotOS.request_quit();
            };
            Module["onExit"] = GodotOS.cleanup;
            GodotOS._fs_sync_promise = Promise.resolve();
            Module["initConfig"] = GodotConfig.init_config;
            Module["initFS"] = GodotFS.init;
            Module["copyToFS"] = GodotFS.copy_to_fs;
            GodotOS.atexit(function(resolve, reject) {
                GodotDisplayCursor.clear();
                resolve();
            });
            GodotOS.atexit(function(resolve, reject) {
                GodotEventListeners.clear();
                resolve();
            });
            GodotOS.atexit(function(resolve, reject) {
                GodotDisplayVK.clear();
                resolve();
            });
            GodotJSWrapper.proxies = new Map;
            function intArrayFromString(stringy, dontAddNull, length) {
                var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
                var u8array = new Array(len);
                var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
                if (dontAddNull) u8array.length = numBytesWritten;
                return u8array;
            }
            var asmLibraryArg = {
                "a": ___assert_fail,
                "m": ___cxa_atexit,
                "$j": ___sys__newselect,
                "Oj": ___sys_accept4,
                "Sj": ___sys_access,
                "Rj": ___sys_bind,
                "ak": ___sys_chdir,
                "_j": ___sys_chmod,
                "Qj": ___sys_connect,
                "Ka": ___sys_fcntl64,
                "Yj": ___sys_getcwd,
                "Uj": ___sys_getdents64,
                "Vj": ___sys_getpid,
                "Lj": ___sys_getsockname,
                "Nj": ___sys_getsockopt,
                "Nb": ___sys_ioctl,
                "Pj": ___sys_listen,
                "Wj": ___sys_lstat64,
                "Hj": ___sys_mkdir,
                "Ob": ___sys_open,
                "Zj": ___sys_poll,
                "Ej": ___sys_readlink,
                "Jj": ___sys_recvfrom,
                "Ij": ___sys_rename,
                "Gj": ___sys_rmdir,
                "Kj": ___sys_sendto,
                "Mj": ___sys_setsockopt,
                "Pb": ___sys_socket,
                "Xj": ___sys_stat64,
                "Tj": ___sys_statfs64,
                "Fj": ___sys_symlink,
                "ck": ___sys_unlink,
                "bk": ___sys_wait4,
                "Aj": __emscripten_throw_longjmp,
                "oa": _abort,
                "Ja": _clock_gettime,
                "zj": _dlclose,
                "Va": _dlerror,
                "Kb": _dlopen,
                "yj": _dlsym,
                "Jb": _emscripten_cancel_main_loop,
                "xj": _emscripten_force_exit,
                "wj": _emscripten_glActiveTexture,
                "vj": _emscripten_glAttachShader,
                "uj": _emscripten_glBeginQuery,
                "tj": _emscripten_glBeginQueryEXT,
                "sj": _emscripten_glBeginTransformFeedback,
                "rj": _emscripten_glBindAttribLocation,
                "qj": _emscripten_glBindBuffer,
                "pj": _emscripten_glBindBufferBase,
                "oj": _emscripten_glBindBufferRange,
                "nj": _emscripten_glBindFramebuffer,
                "mj": _emscripten_glBindRenderbuffer,
                "lj": _emscripten_glBindSampler,
                "kj": _emscripten_glBindTexture,
                "jj": _emscripten_glBindTransformFeedback,
                "ij": _emscripten_glBindVertexArray,
                "hj": _emscripten_glBindVertexArrayOES,
                "gj": _emscripten_glBlendColor,
                "fj": _emscripten_glBlendEquation,
                "ej": _emscripten_glBlendEquationSeparate,
                "dj": _emscripten_glBlendFunc,
                "cj": _emscripten_glBlendFuncSeparate,
                "bj": _emscripten_glBlitFramebuffer,
                "aj": _emscripten_glBufferData,
                "$i": _emscripten_glBufferSubData,
                "_i": _emscripten_glCheckFramebufferStatus,
                "Zi": _emscripten_glClear,
                "Yi": _emscripten_glClearBufferfi,
                "Xi": _emscripten_glClearBufferfv,
                "Wi": _emscripten_glClearBufferiv,
                "Vi": _emscripten_glClearBufferuiv,
                "Ui": _emscripten_glClearColor,
                "Ti": _emscripten_glClearDepthf,
                "Si": _emscripten_glClearStencil,
                "Ri": _emscripten_glClientWaitSync,
                "Qi": _emscripten_glColorMask,
                "Pi": _emscripten_glCompileShader,
                "Oi": _emscripten_glCompressedTexImage2D,
                "Ni": _emscripten_glCompressedTexImage3D,
                "Mi": _emscripten_glCompressedTexSubImage2D,
                "Li": _emscripten_glCompressedTexSubImage3D,
                "Ki": _emscripten_glCopyBufferSubData,
                "Ji": _emscripten_glCopyTexImage2D,
                "Ii": _emscripten_glCopyTexSubImage2D,
                "Hi": _emscripten_glCopyTexSubImage3D,
                "Gi": _emscripten_glCreateProgram,
                "Fi": _emscripten_glCreateShader,
                "Ei": _emscripten_glCullFace,
                "Di": _emscripten_glDeleteBuffers,
                "Ci": _emscripten_glDeleteFramebuffers,
                "Bi": _emscripten_glDeleteProgram,
                "Ai": _emscripten_glDeleteQueries,
                "zi": _emscripten_glDeleteQueriesEXT,
                "yi": _emscripten_glDeleteRenderbuffers,
                "xi": _emscripten_glDeleteSamplers,
                "wi": _emscripten_glDeleteShader,
                "vi": _emscripten_glDeleteSync,
                "ui": _emscripten_glDeleteTextures,
                "ti": _emscripten_glDeleteTransformFeedbacks,
                "si": _emscripten_glDeleteVertexArrays,
                "ri": _emscripten_glDeleteVertexArraysOES,
                "qi": _emscripten_glDepthFunc,
                "pi": _emscripten_glDepthMask,
                "oi": _emscripten_glDepthRangef,
                "ni": _emscripten_glDetachShader,
                "mi": _emscripten_glDisable,
                "li": _emscripten_glDisableVertexAttribArray,
                "ki": _emscripten_glDrawArrays,
                "ji": _emscripten_glDrawArraysInstanced,
                "ii": _emscripten_glDrawArraysInstancedANGLE,
                "hi": _emscripten_glDrawArraysInstancedARB,
                "gi": _emscripten_glDrawArraysInstancedEXT,
                "fi": _emscripten_glDrawArraysInstancedNV,
                "ei": _emscripten_glDrawBuffers,
                "di": _emscripten_glDrawBuffersEXT,
                "ci": _emscripten_glDrawBuffersWEBGL,
                "bi": _emscripten_glDrawElements,
                "ai": _emscripten_glDrawElementsInstanced,
                "$h": _emscripten_glDrawElementsInstancedANGLE,
                "_h": _emscripten_glDrawElementsInstancedARB,
                "Zh": _emscripten_glDrawElementsInstancedEXT,
                "Yh": _emscripten_glDrawElementsInstancedNV,
                "Xh": _emscripten_glDrawRangeElements,
                "Wh": _emscripten_glEnable,
                "Vh": _emscripten_glEnableVertexAttribArray,
                "Uh": _emscripten_glEndQuery,
                "Th": _emscripten_glEndQueryEXT,
                "Sh": _emscripten_glEndTransformFeedback,
                "Rh": _emscripten_glFenceSync,
                "Qh": _emscripten_glFinish,
                "Ph": _emscripten_glFlush,
                "Oh": _emscripten_glFramebufferRenderbuffer,
                "Nh": _emscripten_glFramebufferTexture2D,
                "Mh": _emscripten_glFramebufferTextureLayer,
                "Lh": _emscripten_glFrontFace,
                "Kh": _emscripten_glGenBuffers,
                "Jh": _emscripten_glGenFramebuffers,
                "Ih": _emscripten_glGenQueries,
                "Hh": _emscripten_glGenQueriesEXT,
                "Gh": _emscripten_glGenRenderbuffers,
                "Fh": _emscripten_glGenSamplers,
                "Eh": _emscripten_glGenTextures,
                "Dh": _emscripten_glGenTransformFeedbacks,
                "Ch": _emscripten_glGenVertexArrays,
                "Bh": _emscripten_glGenVertexArraysOES,
                "Ah": _emscripten_glGenerateMipmap,
                "zh": _emscripten_glGetActiveAttrib,
                "yh": _emscripten_glGetActiveUniform,
                "xh": _emscripten_glGetActiveUniformBlockName,
                "wh": _emscripten_glGetActiveUniformBlockiv,
                "vh": _emscripten_glGetActiveUniformsiv,
                "uh": _emscripten_glGetAttachedShaders,
                "th": _emscripten_glGetAttribLocation,
                "sh": _emscripten_glGetBooleanv,
                "rh": _emscripten_glGetBufferParameteri64v,
                "qh": _emscripten_glGetBufferParameteriv,
                "ph": _emscripten_glGetError,
                "oh": _emscripten_glGetFloatv,
                "nh": _emscripten_glGetFragDataLocation,
                "mh": _emscripten_glGetFramebufferAttachmentParameteriv,
                "lh": _emscripten_glGetInteger64i_v,
                "kh": _emscripten_glGetInteger64v,
                "jh": _emscripten_glGetIntegeri_v,
                "ih": _emscripten_glGetIntegerv,
                "hh": _emscripten_glGetInternalformativ,
                "gh": _emscripten_glGetProgramBinary,
                "fh": _emscripten_glGetProgramInfoLog,
                "eh": _emscripten_glGetProgramiv,
                "dh": _emscripten_glGetQueryObjecti64vEXT,
                "ch": _emscripten_glGetQueryObjectivEXT,
                "bh": _emscripten_glGetQueryObjectui64vEXT,
                "ah": _emscripten_glGetQueryObjectuiv,
                "$g": _emscripten_glGetQueryObjectuivEXT,
                "_g": _emscripten_glGetQueryiv,
                "Zg": _emscripten_glGetQueryivEXT,
                "Yg": _emscripten_glGetRenderbufferParameteriv,
                "Xg": _emscripten_glGetSamplerParameterfv,
                "Wg": _emscripten_glGetSamplerParameteriv,
                "Vg": _emscripten_glGetShaderInfoLog,
                "Ug": _emscripten_glGetShaderPrecisionFormat,
                "Tg": _emscripten_glGetShaderSource,
                "Sg": _emscripten_glGetShaderiv,
                "Rg": _emscripten_glGetString,
                "Qg": _emscripten_glGetStringi,
                "Pg": _emscripten_glGetSynciv,
                "Og": _emscripten_glGetTexParameterfv,
                "Ng": _emscripten_glGetTexParameteriv,
                "Mg": _emscripten_glGetTransformFeedbackVarying,
                "Lg": _emscripten_glGetUniformBlockIndex,
                "Kg": _emscripten_glGetUniformIndices,
                "Jg": _emscripten_glGetUniformLocation,
                "Ig": _emscripten_glGetUniformfv,
                "Hg": _emscripten_glGetUniformiv,
                "Gg": _emscripten_glGetUniformuiv,
                "Fg": _emscripten_glGetVertexAttribIiv,
                "Eg": _emscripten_glGetVertexAttribIuiv,
                "Dg": _emscripten_glGetVertexAttribPointerv,
                "Cg": _emscripten_glGetVertexAttribfv,
                "Bg": _emscripten_glGetVertexAttribiv,
                "Ag": _emscripten_glHint,
                "zg": _emscripten_glInvalidateFramebuffer,
                "yg": _emscripten_glInvalidateSubFramebuffer,
                "xg": _emscripten_glIsBuffer,
                "wg": _emscripten_glIsEnabled,
                "vg": _emscripten_glIsFramebuffer,
                "ug": _emscripten_glIsProgram,
                "tg": _emscripten_glIsQuery,
                "sg": _emscripten_glIsQueryEXT,
                "rg": _emscripten_glIsRenderbuffer,
                "qg": _emscripten_glIsSampler,
                "pg": _emscripten_glIsShader,
                "og": _emscripten_glIsSync,
                "ng": _emscripten_glIsTexture,
                "mg": _emscripten_glIsTransformFeedback,
                "lg": _emscripten_glIsVertexArray,
                "kg": _emscripten_glIsVertexArrayOES,
                "jg": _emscripten_glLineWidth,
                "ig": _emscripten_glLinkProgram,
                "hg": _emscripten_glPauseTransformFeedback,
                "gg": _emscripten_glPixelStorei,
                "fg": _emscripten_glPolygonOffset,
                "eg": _emscripten_glProgramBinary,
                "dg": _emscripten_glProgramParameteri,
                "cg": _emscripten_glQueryCounterEXT,
                "bg": _emscripten_glReadBuffer,
                "ag": _emscripten_glReadPixels,
                "$f": _emscripten_glReleaseShaderCompiler,
                "_f": _emscripten_glRenderbufferStorage,
                "Zf": _emscripten_glRenderbufferStorageMultisample,
                "Yf": _emscripten_glResumeTransformFeedback,
                "Xf": _emscripten_glSampleCoverage,
                "Wf": _emscripten_glSamplerParameterf,
                "Vf": _emscripten_glSamplerParameterfv,
                "Uf": _emscripten_glSamplerParameteri,
                "Tf": _emscripten_glSamplerParameteriv,
                "Sf": _emscripten_glScissor,
                "Rf": _emscripten_glShaderBinary,
                "Qf": _emscripten_glShaderSource,
                "Pf": _emscripten_glStencilFunc,
                "Of": _emscripten_glStencilFuncSeparate,
                "Nf": _emscripten_glStencilMask,
                "Mf": _emscripten_glStencilMaskSeparate,
                "Lf": _emscripten_glStencilOp,
                "Kf": _emscripten_glStencilOpSeparate,
                "Jf": _emscripten_glTexImage2D,
                "If": _emscripten_glTexImage3D,
                "Hf": _emscripten_glTexParameterf,
                "Gf": _emscripten_glTexParameterfv,
                "Ff": _emscripten_glTexParameteri,
                "Ef": _emscripten_glTexParameteriv,
                "Df": _emscripten_glTexStorage2D,
                "Cf": _emscripten_glTexStorage3D,
                "Bf": _emscripten_glTexSubImage2D,
                "Af": _emscripten_glTexSubImage3D,
                "zf": _emscripten_glTransformFeedbackVaryings,
                "yf": _emscripten_glUniform1f,
                "xf": _emscripten_glUniform1fv,
                "wf": _emscripten_glUniform1i,
                "vf": _emscripten_glUniform1iv,
                "uf": _emscripten_glUniform1ui,
                "tf": _emscripten_glUniform1uiv,
                "sf": _emscripten_glUniform2f,
                "rf": _emscripten_glUniform2fv,
                "qf": _emscripten_glUniform2i,
                "pf": _emscripten_glUniform2iv,
                "of": _emscripten_glUniform2ui,
                "nf": _emscripten_glUniform2uiv,
                "mf": _emscripten_glUniform3f,
                "lf": _emscripten_glUniform3fv,
                "kf": _emscripten_glUniform3i,
                "jf": _emscripten_glUniform3iv,
                "hf": _emscripten_glUniform3ui,
                "gf": _emscripten_glUniform3uiv,
                "ff": _emscripten_glUniform4f,
                "ef": _emscripten_glUniform4fv,
                "df": _emscripten_glUniform4i,
                "cf": _emscripten_glUniform4iv,
                "bf": _emscripten_glUniform4ui,
                "af": _emscripten_glUniform4uiv,
                "$e": _emscripten_glUniformBlockBinding,
                "_e": _emscripten_glUniformMatrix2fv,
                "Ze": _emscripten_glUniformMatrix2x3fv,
                "Ye": _emscripten_glUniformMatrix2x4fv,
                "Xe": _emscripten_glUniformMatrix3fv,
                "We": _emscripten_glUniformMatrix3x2fv,
                "Ve": _emscripten_glUniformMatrix3x4fv,
                "Ue": _emscripten_glUniformMatrix4fv,
                "Te": _emscripten_glUniformMatrix4x2fv,
                "Se": _emscripten_glUniformMatrix4x3fv,
                "Re": _emscripten_glUseProgram,
                "Qe": _emscripten_glValidateProgram,
                "Pe": _emscripten_glVertexAttrib1f,
                "Oe": _emscripten_glVertexAttrib1fv,
                "Ne": _emscripten_glVertexAttrib2f,
                "Me": _emscripten_glVertexAttrib2fv,
                "Le": _emscripten_glVertexAttrib3f,
                "Ke": _emscripten_glVertexAttrib3fv,
                "Je": _emscripten_glVertexAttrib4f,
                "Ie": _emscripten_glVertexAttrib4fv,
                "He": _emscripten_glVertexAttribDivisor,
                "Ge": _emscripten_glVertexAttribDivisorANGLE,
                "Fe": _emscripten_glVertexAttribDivisorARB,
                "Ee": _emscripten_glVertexAttribDivisorEXT,
                "De": _emscripten_glVertexAttribDivisorNV,
                "Ce": _emscripten_glVertexAttribI4i,
                "Be": _emscripten_glVertexAttribI4iv,
                "Ae": _emscripten_glVertexAttribI4ui,
                "ze": _emscripten_glVertexAttribI4uiv,
                "ye": _emscripten_glVertexAttribIPointer,
                "xe": _emscripten_glVertexAttribPointer,
                "we": _emscripten_glViewport,
                "ve": _emscripten_glWaitSync,
                "ue": _emscripten_memcpy_big,
                "hb": _emscripten_resize_heap,
                "Ib": _emscripten_set_main_loop,
                "te": _emscripten_thread_sleep,
                "Hb": _emscripten_webgl_commit_frame,
                "se": _emscripten_webgl_create_context,
                "re": _emscripten_webgl_destroy_context,
                "qe": _emscripten_webgl_init_context_attributes,
                "pe": _emscripten_webgl_make_context_current,
                "Dj": _environ_get,
                "Cj": _environ_sizes_get,
                "Aa": _fd_close,
                "Bj": _fd_fdstat_get,
                "Mb": _fd_read,
                "Tb": _fd_seek,
                "Lb": _fd_write,
                "gb": _gai_strerror,
                "l": _getTempRet0,
                "fb": _getaddrinfo,
                "oe": _getnameinfo,
                "Gb": _gettimeofday,
                "d": _glActiveTexture,
                "Ua": _glAttachShader,
                "eb": _glBeginTransformFeedback,
                "Fb": _glBindAttribLocation,
                "c": _glBindBuffer,
                "R": _glBindBufferBase,
                "f": _glBindFramebuffer,
                "ea": _glBindRenderbuffer,
                "b": _glBindTexture,
                "o": _glBindVertexArray,
                "F": _glBlendEquation,
                "T": _glBlendFunc,
                "z": _glBlendFuncSeparate,
                "ka": _glBlitFramebuffer,
                "s": _glBufferData,
                "N": _glBufferSubData,
                "M": _glCheckFramebufferStatus,
                "L": _glClear,
                "ra": _glClearBufferfv,
                "Q": _glClearColor,
                "da": _glClearDepthf,
                "P": _glColorMask,
                "Ta": _glCompileShader,
                "Eb": _glCompressedTexImage2D,
                "ne": _glCompressedTexSubImage2D,
                "Db": _glCompressedTexSubImage3D,
                "me": _glCopyBufferSubData,
                "db": _glCopyTexSubImage2D,
                "Cb": _glCreateProgram,
                "Sa": _glCreateShader,
                "va": _glCullFace,
                "O": _glDeleteBuffers,
                "I": _glDeleteFramebuffers,
                "S": _glDeleteProgram,
                "X": _glDeleteRenderbuffers,
                "K": _glDeleteShader,
                "E": _glDeleteTextures,
                "ga": _glDeleteVertexArrays,
                "aa": _glDepthFunc,
                "J": _glDepthMask,
                "j": _glDisable,
                "r": _glDisableVertexAttribArray,
                "D": _glDrawArrays,
                "za": _glDrawArraysInstanced,
                "Ia": _glDrawBuffers,
                "$": _glDrawElements,
                "qa": _glDrawElementsInstanced,
                "w": _glEnable,
                "k": _glEnableVertexAttribArray,
                "cb": _glEndTransformFeedback,
                "le": _glFinish,
                "ca": _glFramebufferRenderbuffer,
                "y": _glFramebufferTexture2D,
                "ke": _glFramebufferTextureLayer,
                "Bb": _glFrontFace,
                "C": _glGenBuffers,
                "G": _glGenFramebuffers,
                "ja": _glGenRenderbuffers,
                "x": _glGenTextures,
                "Y": _glGenVertexArrays,
                "W": _glGenerateMipmap,
                "Ab": _glGetError,
                "zb": _glGetFloatv,
                "ba": _glGetIntegerv,
                "yb": _glGetProgramInfoLog,
                "Ra": _glGetProgramiv,
                "Qa": _glGetShaderInfoLog,
                "ua": _glGetShaderiv,
                "Pa": _glGetString,
                "je": _glGetStringi,
                "ie": _glGetUniformBlockIndex,
                "ya": _glGetUniformLocation,
                "he": _glInvalidateFramebuffer,
                "xb": _glLinkProgram,
                "na": _glPixelStorei,
                "ia": _glReadBuffer,
                "bb": _glReadPixels,
                "ha": _glRenderbufferStorage,
                "Ha": _glRenderbufferStorageMultisample,
                "V": _glScissor,
                "Oa": _glShaderSource,
                "u": _glTexImage2D,
                "Ga": _glTexImage3D,
                "h": _glTexParameterf,
                "e": _glTexParameteri,
                "ge": _glTexStorage2D,
                "Fa": _glTexSubImage2D,
                "Na": _glTexSubImage3D,
                "fe": _glTransformFeedbackVaryings,
                "g": _glUniform1f,
                "v": _glUniform1i,
                "ab": _glUniform1iv,
                "wb": _glUniform1ui,
                "$a": _glUniform2f,
                "p": _glUniform2fv,
                "Ea": _glUniform2i,
                "ma": _glUniform2iv,
                "_a": _glUniform3f,
                "_": _glUniform3fv,
                "Da": _glUniform3i,
                "xa": _glUniform4f,
                "A": _glUniform4fv,
                "Ca": _glUniform4i,
                "ee": _glUniformBlockBinding,
                "vb": _glUniformMatrix2fv,
                "ub": _glUniformMatrix3fv,
                "q": _glUniformMatrix4fv,
                "fa": _glUseProgram,
                "B": _glVertexAttrib4f,
                "U": _glVertexAttrib4fv,
                "H": _glVertexAttribDivisor,
                "de": _glVertexAttribI4ui,
                "Ba": _glVertexAttribIPointer,
                "i": _glVertexAttribPointer,
                "t": _glViewport,
                "tb": _gmtime_r,
                "ce": _godot_audio_capture_start,
                "be": _godot_audio_capture_stop,
                "ae": _godot_audio_has_script_processor,
                "$d": _godot_audio_has_worklet,
                "_d": _godot_audio_init,
                "Zd": _godot_audio_is_available,
                "Yd": _godot_audio_resume,
                "Xd": _godot_audio_script_create,
                "Wd": _godot_audio_script_start,
                "Vd": _godot_audio_worklet_create,
                "Ud": _godot_audio_worklet_start_no_threads,
                "Td": _godot_js_config_canvas_id_get,
                "Sd": _godot_js_config_locale_get,
                "Rd": _godot_js_display_alert,
                "Qd": _godot_js_display_canvas_focus,
                "Pd": _godot_js_display_canvas_is_focused,
                "Od": _godot_js_display_clipboard_get,
                "Nd": _godot_js_display_clipboard_set,
                "Md": _godot_js_display_cursor_is_hidden,
                "Ld": _godot_js_display_cursor_is_locked,
                "Za": _godot_js_display_cursor_lock_set,
                "sb": _godot_js_display_cursor_set_custom_shape,
                "Kd": _godot_js_display_cursor_set_shape,
                "Ya": _godot_js_display_cursor_set_visible,
                "Jd": _godot_js_display_desired_size_set,
                "Id": _godot_js_display_fullscreen_cb,
                "Hd": _godot_js_display_fullscreen_exit,
                "Gd": _godot_js_display_fullscreen_request,
                "Fd": _godot_js_display_glGetBufferSubData,
                "rb": _godot_js_display_has_webgl,
                "Ed": _godot_js_display_is_swap_ok_cancel,
                "Dd": _godot_js_display_notification_cb,
                "Cd": _godot_js_display_pixel_ratio_get,
                "Bd": _godot_js_display_screen_dpi_get,
                "Ad": _godot_js_display_screen_size_get,
                "zd": _godot_js_display_setup_canvas,
                "yd": _godot_js_display_size_update,
                "xd": _godot_js_display_touchscreen_is_available,
                "wd": _godot_js_display_vk_available,
                "vd": _godot_js_display_vk_cb,
                "ud": _godot_js_display_vk_hide,
                "td": _godot_js_display_vk_show,
                "sd": _godot_js_display_window_blur_cb,
                "rd": _godot_js_display_window_icon_set,
                "qd": _godot_js_display_window_size_get,
                "pd": _godot_js_display_window_title_set,
                "od": _godot_js_eval,
                "nd": _godot_js_fetch_body_length_get,
                "md": _godot_js_fetch_create,
                "qb": _godot_js_fetch_free,
                "ld": _godot_js_fetch_http_status_get,
                "kd": _godot_js_fetch_is_chunked,
                "jd": _godot_js_fetch_read_chunk,
                "id": _godot_js_fetch_read_headers,
                "Xa": _godot_js_fetch_state_get,
                "hd": _godot_js_input_drop_files_cb,
                "gd": _godot_js_input_gamepad_cb,
                "fd": _godot_js_input_gamepad_sample,
                "ed": _godot_js_input_gamepad_sample_count,
                "dd": _godot_js_input_gamepad_sample_get,
                "cd": _godot_js_input_key_cb,
                "bd": _godot_js_input_mouse_button_cb,
                "ad": _godot_js_input_mouse_move_cb,
                "$c": _godot_js_input_mouse_wheel_cb,
                "_c": _godot_js_input_paste_cb,
                "Zc": _godot_js_input_touch_cb,
                "Yc": _godot_js_os_download_buffer,
                "Xc": _godot_js_os_execute,
                "Wc": _godot_js_os_finish_async,
                "Vc": _godot_js_os_fs_is_persistent,
                "Uc": _godot_js_os_fs_sync,
                "Tc": _godot_js_os_hw_concurrency_get,
                "Sc": _godot_js_os_request_quit_cb,
                "Rc": _godot_js_os_shell_open,
                "Qc": _godot_js_rtc_datachannel_close,
                "Pc": _godot_js_rtc_datachannel_connect,
                "Oc": _godot_js_rtc_datachannel_destroy,
                "Nc": _godot_js_rtc_datachannel_get_buffered_amount,
                "Mc": _godot_js_rtc_datachannel_id_get,
                "Lc": _godot_js_rtc_datachannel_is_negotiated,
                "Kc": _godot_js_rtc_datachannel_is_ordered,
                "Jc": _godot_js_rtc_datachannel_label_get,
                "Ic": _godot_js_rtc_datachannel_max_packet_lifetime_get,
                "Hc": _godot_js_rtc_datachannel_max_retransmits_get,
                "Gc": _godot_js_rtc_datachannel_protocol_get,
                "Fc": _godot_js_rtc_datachannel_ready_state_get,
                "Ec": _godot_js_rtc_datachannel_send,
                "Dc": _godot_js_rtc_pc_close,
                "Cc": _godot_js_rtc_pc_create,
                "Bc": _godot_js_rtc_pc_datachannel_create,
                "pb": _godot_js_rtc_pc_destroy,
                "Ac": _godot_js_rtc_pc_ice_candidate_add,
                "zc": _godot_js_rtc_pc_local_description_set,
                "yc": _godot_js_rtc_pc_offer_create,
                "xc": _godot_js_rtc_pc_remote_description_set,
                "ob": _godot_js_websocket_buffered_amount,
                "wc": _godot_js_websocket_close,
                "vc": _godot_js_websocket_create,
                "nb": _godot_js_websocket_destroy,
                "uc": _godot_js_websocket_send,
                "tc": _godot_js_wrapper_create_cb,
                "sc": _godot_js_wrapper_create_object,
                "rc": _godot_js_wrapper_interface_get,
                "qc": _godot_js_wrapper_object_call,
                "pc": _godot_js_wrapper_object_get,
                "mb": _godot_js_wrapper_object_getvar,
                "oc": _godot_js_wrapper_object_set,
                "nc": _godot_js_wrapper_object_setvar,
                "mc": _godot_js_wrapper_object_unref,
                "lc": _godot_webxr_commit_for_eye,
                "kc": _godot_webxr_get_bounds_geometry,
                "jc": _godot_webxr_get_controller_axes,
                "ic": _godot_webxr_get_controller_buttons,
                "hc": _godot_webxr_get_controller_count,
                "gc": _godot_webxr_get_controller_transform,
                "fc": _godot_webxr_get_external_texture_for_eye,
                "ec": _godot_webxr_get_projection_for_eye,
                "dc": _godot_webxr_get_render_targetsize,
                "cc": _godot_webxr_get_transform_for_eye,
                "bc": _godot_webxr_get_view_count,
                "ac": _godot_webxr_get_visibility_state,
                "$b": _godot_webxr_initialize,
                "lb": _godot_webxr_is_controller_connected,
                "_b": _godot_webxr_is_session_supported,
                "Zb": _godot_webxr_is_supported,
                "kb": _godot_webxr_sample_controller_data,
                "Yb": _godot_webxr_uninitialize,
                "pa": invoke_ii,
                "la": invoke_iii,
                "Xb": invoke_iiii,
                "jb": invoke_iiiii,
                "Wb": invoke_iiiiii,
                "Vb": invoke_iiiiiii,
                "Sb": invoke_iij,
                "Z": invoke_vi,
                "ta": invoke_vii,
                "wa": invoke_viii,
                "sa": invoke_viiii,
                "Ma": invoke_viiiiiii,
                "Ub": _kill,
                "Wa": _localtime_r,
                "n": _setTempRet0,
                "Rb": _sigaction,
                "ib": _strftime,
                "Qb": _strftime_l,
                "La": _time
            };
            var asm = createWasm();
            var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
                return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["ek"]).apply(null, arguments);
            };
            var _free = Module["_free"] = function() {
                return (_free = Module["_free"] = Module["asm"]["fk"]).apply(null, arguments);
            };
            var __Z13godot_js_mainiPPc = Module["__Z13godot_js_mainiPPc"] = function() {
                return (__Z13godot_js_mainiPPc = Module["__Z13godot_js_mainiPPc"] = Module["asm"]["gk"]).apply(null, arguments);
            };
            var _main = Module["_main"] = function() {
                return (_main = Module["_main"] = Module["asm"]["hk"]).apply(null, arguments);
            };
            var _malloc = Module["_malloc"] = function() {
                return (_malloc = Module["_malloc"] = Module["asm"]["ik"]).apply(null, arguments);
            };
            var _htonl = Module["_htonl"] = function() {
                return (_htonl = Module["_htonl"] = Module["asm"]["jk"]).apply(null, arguments);
            };
            var _htons = Module["_htons"] = function() {
                return (_htons = Module["_htons"] = Module["asm"]["kk"]).apply(null, arguments);
            };
            var _ntohs = Module["_ntohs"] = function() {
                return (_ntohs = Module["_ntohs"] = Module["asm"]["lk"]).apply(null, arguments);
            };
            var ___errno_location = Module["___errno_location"] = function() {
                return (___errno_location = Module["___errno_location"] = Module["asm"]["mk"]).apply(null, arguments);
            };
            var __emwebxr_on_input_event = Module["__emwebxr_on_input_event"] = function() {
                return (__emwebxr_on_input_event = Module["__emwebxr_on_input_event"] = Module["asm"]["nk"]).apply(null, arguments);
            };
            var __emwebxr_on_simple_event = Module["__emwebxr_on_simple_event"] = function() {
                return (__emwebxr_on_simple_event = Module["__emwebxr_on_simple_event"] = Module["asm"]["ok"]).apply(null, arguments);
            };
            var _fflush = Module["_fflush"] = function() {
                return (_fflush = Module["_fflush"] = Module["asm"]["pk"]).apply(null, arguments);
            };
            var __get_tzname = Module["__get_tzname"] = function() {
                return (__get_tzname = Module["__get_tzname"] = Module["asm"]["qk"]).apply(null, arguments);
            };
            var __get_daylight = Module["__get_daylight"] = function() {
                return (__get_daylight = Module["__get_daylight"] = Module["asm"]["rk"]).apply(null, arguments);
            };
            var __get_timezone = Module["__get_timezone"] = function() {
                return (__get_timezone = Module["__get_timezone"] = Module["asm"]["sk"]).apply(null, arguments);
            };
            var stackSave = Module["stackSave"] = function() {
                return (stackSave = Module["stackSave"] = Module["asm"]["tk"]).apply(null, arguments);
            };
            var stackRestore = Module["stackRestore"] = function() {
                return (stackRestore = Module["stackRestore"] = Module["asm"]["uk"]).apply(null, arguments);
            };
            var stackAlloc = Module["stackAlloc"] = function() {
                return (stackAlloc = Module["stackAlloc"] = Module["asm"]["vk"]).apply(null, arguments);
            };
            var _setThrew = Module["_setThrew"] = function() {
                return (_setThrew = Module["_setThrew"] = Module["asm"]["wk"]).apply(null, arguments);
            };
            var dynCall_iij = Module["dynCall_iij"] = function() {
                return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["yk"]).apply(null, arguments);
            };
            function invoke_vii(index, a1, a2) {
                var sp = stackSave();
                try {
                    wasmTable.get(index)(a1, a2);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_vi(index, a1) {
                var sp = stackSave();
                try {
                    wasmTable.get(index)(a1);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_viii(index, a1, a2, a3) {
                var sp = stackSave();
                try {
                    wasmTable.get(index)(a1, a2, a3);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_ii(index, a1) {
                var sp = stackSave();
                try {
                    return wasmTable.get(index)(a1);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_iii(index, a1, a2) {
                var sp = stackSave();
                try {
                    return wasmTable.get(index)(a1, a2);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_iiiii(index, a1, a2, a3, a4) {
                var sp = stackSave();
                try {
                    return wasmTable.get(index)(a1, a2, a3, a4);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
                var sp = stackSave();
                try {
                    return wasmTable.get(index)(a1, a2, a3, a4, a5);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_viiii(index, a1, a2, a3, a4) {
                var sp = stackSave();
                try {
                    wasmTable.get(index)(a1, a2, a3, a4);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_iiii(index, a1, a2, a3) {
                var sp = stackSave();
                try {
                    return wasmTable.get(index)(a1, a2, a3);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
                var sp = stackSave();
                try {
                    wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
                var sp = stackSave();
                try {
                    return wasmTable.get(index)(a1, a2, a3, a4, a5, a6);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            function invoke_iij(index, a1, a2, a3) {
                var sp = stackSave();
                try {
                    return dynCall_iij(index, a1, a2, a3);
                } catch (e) {
                    stackRestore(sp);
                    if (e !== e + 0 && e !== "longjmp") throw e;
                    _setThrew(1, 0);
                }
            }
            Module["cwrap"] = cwrap;
            Module["callMain"] = callMain;
            var calledRun;
            function ExitStatus(status) {
                this.name = "ExitStatus";
                this.message = "Program terminated with exit(" + status + ")";
                this.status = status;
            }
            var calledMain = false;
            dependenciesFulfilled = function runCaller() {
                if (!calledRun) run();
                if (!calledRun) dependenciesFulfilled = runCaller;
            };
            function callMain(args) {
                var entryFunction = Module["_main"];
                args = args || [];
                var argc = args.length + 1;
                var argv = stackAlloc((argc + 1) * 4);
                HEAP32[argv >> 2] = allocateUTF8OnStack(thisProgram);
                for(var i = 1; i < argc; i++)HEAP32[(argv >> 2) + i] = allocateUTF8OnStack(args[i - 1]);
                HEAP32[(argv >> 2) + argc] = 0;
                try {
                    var ret = entryFunction(argc, argv);
                    exit(ret, true);
                } catch (e) {
                    if (e instanceof ExitStatus || e == "unwind") return;
                    var toLog = e;
                    if (e && typeof e === "object" && e.stack) toLog = [
                        e,
                        e.stack
                    ];
                    err1("exception thrown: " + toLog);
                    quit_(1, e);
                } finally{
                    calledMain = true;
                }
            }
            function run(args) {
                args = args || arguments_;
                if (runDependencies > 0) return;
                preRun();
                if (runDependencies > 0) return;
                function doRun() {
                    if (calledRun) return;
                    calledRun = true;
                    Module["calledRun"] = true;
                    if (ABORT) return;
                    initRuntime();
                    preMain();
                    readyPromiseResolve(Module);
                    if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
                    if (shouldRunNow) callMain(args);
                    postRun();
                }
                if (Module["setStatus"]) {
                    Module["setStatus"]("Running...");
                    setTimeout(function() {
                        setTimeout(function() {
                            Module["setStatus"]("");
                        }, 1);
                        doRun();
                    }, 1);
                } else doRun();
            }
            Module["run"] = run;
            function exit(status, implicit) {
                EXITSTATUS = status;
                if (keepRuntimeAlive()) ;
                else {
                    exitRuntime();
                    if (Module["onExit"]) Module["onExit"](status);
                    ABORT = true;
                }
                quit_(status, new ExitStatus(status));
            }
            if (Module["preInit"]) {
                if (typeof Module["preInit"] == "function") Module["preInit"] = [
                    Module["preInit"]
                ];
                while(Module["preInit"].length > 0)Module["preInit"].pop()();
            }
            var shouldRunNow = false;
            if (Module["noInitialRun"]) shouldRunNow = false;
            run();
            return Godot.ready;
        };
    }();
    if (typeof exports === 'object' && typeof module === 'object') module.exports = Godot1;
    else if (typeof define === 'function' && define['amd']) define([], function() {
        return Godot1;
    });
    else if (typeof exports === 'object') exports["Godot"] = Godot1;
    const Preloader = /** @constructor */ function() {
        function getTrackedResponse(response, load_status) {
            function onloadprogress(reader, controller) {
                return reader.read().then(function(result) {
                    if (load_status.done) return Promise.resolve();
                    if (result.value) {
                        controller.enqueue(result.value);
                        load_status.loaded += result.value.length;
                    }
                    if (!result.done) return onloadprogress(reader, controller);
                    load_status.done = true;
                    return Promise.resolve();
                });
            }
            const reader1 = response.body.getReader();
            return new Response(new ReadableStream({
                start: function(controller) {
                    onloadprogress(reader1, controller).then(function() {
                        controller.close();
                    });
                }
            }), {
                headers: response.headers
            });
        }
        function loadFetch(file, tracker, fileSize, raw) {
            tracker[file] = {
                total: fileSize || 0,
                loaded: 0,
                done: false
            };
            return fetch(file).then(function(response) {
                if (!response.ok) return Promise.reject(new Error(`Failed loading file '${file}'`));
                const tr = getTrackedResponse(response, tracker[file]);
                if (raw) return Promise.resolve(tr);
                return tr.arrayBuffer();
            });
        }
        function retry(func, attempts = 1) {
            function onerror(err) {
                if (attempts <= 1) return Promise.reject(err);
                return new Promise(function(resolve, reject) {
                    setTimeout(function() {
                        retry(func, attempts - 1).then(resolve).catch(reject);
                    }, 1000);
                });
            }
            return func().catch(onerror);
        }
        const DOWNLOAD_ATTEMPTS_MAX = 4;
        const loadingFiles = {
        };
        const lastProgress = {
            loaded: 0,
            total: 0
        };
        let progressFunc = null;
        const animateProgress = function() {
            let loaded = 0;
            let total = 0;
            let totalIsValid = true;
            let progressIsFinal = true;
            Object.keys(loadingFiles).forEach(function(file) {
                const stat = loadingFiles[file];
                if (!stat.done) progressIsFinal = false;
                if (!totalIsValid || stat.total === 0) {
                    totalIsValid = false;
                    total = 0;
                } else total += stat.total;
                loaded += stat.loaded;
            });
            if (loaded !== lastProgress.loaded || total !== lastProgress.total) {
                lastProgress.loaded = loaded;
                lastProgress.total = total;
                if (typeof progressFunc === 'function') progressFunc(loaded, total);
            }
            if (!progressIsFinal) requestAnimationFrame(animateProgress);
        };
        this.animateProgress = animateProgress;
        this.setProgressFunc = function(callback) {
            progressFunc = callback;
        };
        this.loadPromise = function(file, fileSize, raw = false) {
            return retry(loadFetch.bind(null, file, loadingFiles, fileSize, raw), DOWNLOAD_ATTEMPTS_MAX);
        };
        this.preloadedFiles = [];
        this.preload = function(pathOrBuffer, destPath, fileSize) {
            let buffer = null;
            if (typeof pathOrBuffer === 'string') {
                const me = this;
                return this.loadPromise(pathOrBuffer, fileSize).then(function(buf) {
                    me.preloadedFiles.push({
                        path: destPath || pathOrBuffer,
                        buffer: buf
                    });
                    return Promise.resolve();
                });
            } else if (pathOrBuffer instanceof ArrayBuffer) buffer = new Uint8Array(pathOrBuffer);
            else if (ArrayBuffer.isView(pathOrBuffer)) buffer = new Uint8Array(pathOrBuffer.buffer);
            if (buffer) {
                this.preloadedFiles.push({
                    path: destPath,
                    buffer: pathOrBuffer
                });
                return Promise.resolve();
            }
            return Promise.reject(new Error('Invalid object for preloading'));
        };
    };
    /**
 * An object used to configure the Engine instance based on godot export options, and to override those in custom HTML
 * templates if needed.
 *
 * @header Engine configuration
 * @summary The Engine configuration object. This is just a typedef, create it like a regular object, e.g.:
 *
 * ``const MyConfig = { executable: 'godot', unloadAfterInit: false }``
 *
 * @typedef {Object} EngineConfig
 */ const EngineConfig = {
    }; // eslint-disable-line no-unused-vars
    /**
 * @struct
 * @constructor
 * @ignore
 */ const InternalConfig = function(initConfig) {
        const cfg = /** @lends {InternalConfig.prototype} */ {
            /**
		 * Whether the unload the engine automatically after the instance is initialized.
		 *
		 * @memberof EngineConfig
		 * @default
		 * @type {boolean}
		 */ unloadAfterInit: true,
            /**
		 * The HTML DOM Canvas object to use.
		 *
		 * By default, the first canvas element in the document will be used is none is specified.
		 *
		 * @memberof EngineConfig
		 * @default
		 * @type {?HTMLCanvasElement}
		 */ canvas: null,
            /**
		 * The name of the WASM file without the extension. (Set by Godot Editor export process).
		 *
		 * @memberof EngineConfig
		 * @default
		 * @type {string}
		 */ executable: '',
            /**
		 * An alternative name for the game pck to load. The executable name is used otherwise.
		 *
		 * @memberof EngineConfig
		 * @default
		 * @type {?string}
		 */ mainPack: null,
            /**
		 * Specify a language code to select the proper localization for the game.
		 *
		 * The browser locale will be used if none is specified. See complete list of
		 * :ref:`supported locales <doc_locales>`.
		 *
		 * @memberof EngineConfig
		 * @type {?string}
		 * @default
		 */ locale: null,
            /**
		 * The canvas resize policy determines how the canvas should be resized by Godot.
		 *
		 * ``0`` means Godot won't do any resizing. This is useful if you want to control the canvas size from
		 * javascript code in your template.
		 *
		 * ``1`` means Godot will resize the canvas on start, and when changing window size via engine functions.
		 *
		 * ``2`` means Godot will adapt the canvas size to match the whole browser window.
		 *
		 * @memberof EngineConfig
		 * @type {number}
		 * @default
		 */ canvasResizePolicy: 2,
            /**
		 * The arguments to be passed as command line arguments on startup.
		 *
		 * See :ref:`command line tutorial <doc_command_line_tutorial>`.
		 *
		 * **Note**: :js:meth:`startGame <Engine.prototype.startGame>` will always add the ``--main-pack`` argument.
		 *
		 * @memberof EngineConfig
		 * @type {Array<string>}
		 * @default
		 */ args: [],
            /**
		 * When enabled, the game canvas will automatically grab the focus when the engine starts.
		 *
		 * @memberof EngineConfig
		 * @type {boolean}
		 * @default
		 */ focusCanvas: true,
            /**
		 * When enabled, this will turn on experimental virtual keyboard support on mobile.
		 *
		 * @memberof EngineConfig
		 * @type {boolean}
		 * @default
		 */ experimentalVK: false,
            /**
		 * @ignore
		 * @type {Array.<string>}
		 */ persistentPaths: [
                '/userfs'
            ],
            /**
		 * @ignore
		 * @type {boolean}
		 */ persistentDrops: false,
            /**
		 * @ignore
		 * @type {Array.<string>}
		 */ gdnativeLibs: [],
            /**
		 * @ignore
		 * @type {Array.<string>}
		 */ fileSizes: [],
            /**
		 * A callback function for handling Godot's ``OS.execute`` calls.
		 *
		 * This is for example used in the Web Editor template to switch between project manager and editor, and for running the game.
		 *
		 * @callback EngineConfig.onExecute
		 * @param {string} path The path that Godot's wants executed.
		 * @param {Array.<string>} args The arguments of the "command" to execute.
		 */ /**
		 * @ignore
		 * @type {?function(string, Array.<string>)}
		 */ onExecute: null,
            /**
		 * A callback function for being notified when the Godot instance quits.
		 *
		 * **Note**: This function will not be called if the engine crashes or become unresponsive.
		 *
		 * @callback EngineConfig.onExit
		 * @param {number} status_code The status code returned by Godot on exit.
		 */ /**
		 * @ignore
		 * @type {?function(number)}
		 */ onExit: null,
            /**
		 * A callback function for displaying download progress.
		 *
		 * The function is called once per frame while downloading files, so the usage of ``requestAnimationFrame()``
		 * is not necessary.
		 *
		 * If the callback function receives a total amount of bytes as 0, this means that it is impossible to calculate.
		 * Possible reasons include:
		 *
		 * -  Files are delivered with server-side chunked compression
		 * -  Files are delivered with server-side compression on Chromium
		 * -  Not all file downloads have started yet (usually on servers without multi-threading)
		 *
		 * @callback EngineConfig.onProgress
		 * @param {number} current The current amount of downloaded bytes so far.
		 * @param {number} total The total amount of bytes to be downloaded.
		 */ /**
		 * @ignore
		 * @type {?function(number, number)}
		 */ onProgress: null,
            /**
		 * A callback function for handling the standard output stream. This method should usually only be used in debug pages.
		 *
		 * By default, ``console.log()`` is used.
		 *
		 * @callback EngineConfig.onPrint
		 * @param {...*} [var_args] A variadic number of arguments to be printed.
		 */ /**
		 * @ignore
		 * @type {?function(...*)}
		 */ onPrint: function() {
                console.log.apply(console, Array.from(arguments)); // eslint-disable-line no-console
            },
            /**
		 * A callback function for handling the standard error stream. This method should usually only be used in debug pages.
		 *
		 * By default, ``console.error()`` is used.
		 *
		 * @callback EngineConfig.onPrintError
		 * @param {...*} [var_args] A variadic number of arguments to be printed as errors.
		*/ /**
		 * @ignore
		 * @type {?function(...*)}
		 */ onPrintError: function(var_args) {
                console.error.apply(console, Array.from(arguments)); // eslint-disable-line no-console
            }
        };
        /**
	 * @ignore
	 * @struct
	 * @constructor
	 * @param {EngineConfig} opts
	 */ function Config(opts) {
            this.update(opts);
        }
        Config.prototype = cfg;
        /**
	 * @ignore
	 * @param {EngineConfig} opts
	 */ Config.prototype.update = function(opts) {
            const config = opts || {
            };
            function parse(key, def) {
                if (typeof config[key] === 'undefined') return def;
                return config[key];
            }
            // Module config
            this.unloadAfterInit = parse('unloadAfterInit', this.unloadAfterInit);
            this.onPrintError = parse('onPrintError', this.onPrintError);
            this.onPrint = parse('onPrint', this.onPrint);
            this.onProgress = parse('onProgress', this.onProgress);
            // Godot config
            this.canvas = document.getElementById("canvas"); //parse('canvas', this.canvas);
            this.executable = parse('executable', this.executable);
            this.mainPack = parse('mainPack', this.mainPack);
            this.locale = parse('locale', this.locale);
            this.canvasResizePolicy = parse('canvasResizePolicy', this.canvasResizePolicy);
            this.persistentPaths = parse('persistentPaths', this.persistentPaths);
            this.persistentDrops = parse('persistentDrops', this.persistentDrops);
            this.experimentalVK = parse('experimentalVK', this.experimentalVK);
            this.focusCanvas = parse('focusCanvas', this.focusCanvas);
            this.gdnativeLibs = parse('gdnativeLibs', this.gdnativeLibs);
            this.fileSizes = parse('fileSizes', this.fileSizes);
            this.args = parse('args', this.args);
            this.onExecute = parse('onExecute', this.onExecute);
            this.onExit = parse('onExit', this.onExit);
        };
        /**
	 * @ignore
	 * @param {string} loadPath
	 * @param {Response} response
	 */ Config.prototype.getModuleConfig = function(loadPath, response) {
            let r = response;
            return {
                'print': this.onPrint,
                'printErr': this.onPrintError,
                'thisProgram': this.executable,
                'noExitRuntime': true,
                'dynamicLibraries': [
                    `${loadPath}.side.wasm`
                ],
                'instantiateWasm': function(imports, onSuccess) {
                    function done(result) {
                        onSuccess(result['instance'], result['module']);
                    }
                    if (typeof WebAssembly.instantiateStreaming !== 'undefined') WebAssembly.instantiateStreaming(Promise.resolve(r), imports).then(done);
                    else r.arrayBuffer().then(function(buffer) {
                        WebAssembly.instantiate(buffer, imports).then(done);
                    });
                    r = null;
                    return {
                    };
                },
                'locateFile': function(path) {
                    if (path.endsWith('.worker.js')) return `${loadPath}.worker.js`;
                    else if (path.endsWith('.audio.worklet.js')) return `${loadPath}.audio.worklet.js`;
                    else if (path.endsWith('.js')) return `${loadPath}.js`;
                    else if (path.endsWith('.side.wasm')) return `${loadPath}.side.wasm`;
                    else if (path.endsWith('.wasm')) return `${loadPath}.wasm`;
                    return path;
                }
            };
        };
        /**
	 * @ignore
	 * @param {function()} cleanup
	 */ Config.prototype.getGodotConfig = function(cleanup) {
            // Try to find a canvas
            if (!(this.canvas instanceof HTMLCanvasElement)) {
                const nodes = document.getElementById("canvas");
                console.log(nodes);
                if (nodes.length && nodes[0] instanceof HTMLCanvasElement) this.canvas = nodes[0];
                if (!this.canvas) throw new Error('No canvas found in page');
            }
            // Canvas can grab focus on click, or key events won't work.
            if (this.canvas.tabIndex < 0) this.canvas.tabIndex = 0;
            // Browser locale, or custom one if defined.
            let locale = this.locale;
            if (!locale) {
                locale = navigator.languages ? navigator.languages[0] : navigator.language;
                locale = locale.split('.')[0];
            }
            const onExit = this.onExit;
            // Godot configuration.
            return {
                'canvas': this.canvas,
                'canvasResizePolicy': this.canvasResizePolicy,
                'locale': locale,
                'persistentDrops': this.persistentDrops,
                'virtualKeyboard': this.experimentalVK,
                'focusCanvas': this.focusCanvas,
                'onExecute': this.onExecute,
                'onExit': function(p_code) {
                    cleanup(); // We always need to call the cleanup callback to free memory.
                    if (typeof onExit === 'function') onExit(p_code);
                }
            };
        };
        return new Config(initConfig);
    };
    /**
 * Projects exported for the Web expose the :js:class:`Engine` class to the JavaScript environment, that allows
 * fine control over the engine's start-up process.
 *
 * This API is built in an asynchronous manner and requires basic understanding
 * of `Promises <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises>`__.
 *
 * @module Engine
 * @header HTML5 shell class reference
 */ const Engine1 = function() {
        const preloader = new Preloader();
        let loadPromise = null;
        let loadPath = '';
        let initPromise = null;
        /**
	 * @classdesc The ``Engine`` class provides methods for loading and starting exported projects on the Web. For default export
	 * settings, this is already part of the exported HTML page. To understand practical use of the ``Engine`` class,
	 * see :ref:`Custom HTML page for Web export <doc_customizing_html5_shell>`.
	 *
	 * @description Create a new Engine instance with the given configuration.
	 *
	 * @global
	 * @constructor
	 * @param {EngineConfig} initConfig The initial config for this instance.
	 */ function Engine(initConfig) {
            this.config = new InternalConfig(initConfig);
            this.rtenv = null;
        }
        /**
	 * Load the engine from the specified base path.
	 *
	 * @param {string} basePath Base path of the engine to load.
	 * @param {number=} [size=0] The file size if known.
	 * @returns {Promise} A Promise that resolves once the engine is loaded.
	 *
	 * @function Engine.load
	 */ Engine.load = function(basePath, size) {
            if (loadPromise == null) {
                loadPath = basePath;
                loadPromise = preloader.loadPromise(`${loadPath}.wasm`, size, true);
                requestAnimationFrame(preloader.animateProgress);
            }
            return loadPromise;
        };
        /**
	 * Unload the engine to free memory.
	 *
	 * This method will be called automatically depending on the configuration. See :js:attr:`unloadAfterInit`.
	 *
	 * @function Engine.unload
	 */ Engine.unload = function() {
            loadPromise = null;
        };
        /**
	 * Check whether WebGL is available. Optionally, specify a particular version of WebGL to check for.
	 *
	 * @param {number=} [majorVersion=1] The major WebGL version to check for.
	 * @returns {boolean} If the given major version of WebGL is available.
	 * @function Engine.isWebGLAvailable
	 */ Engine.isWebGLAvailable = function(majorVersion = 1) {
            try {
                return !!document.createElement('canvas').getContext([
                    'webgl',
                    'webgl2'
                ][majorVersion - 1]);
            } catch (e) {
            }
            return false;
        };
        /**
	 * Safe Engine constructor, creates a new prototype for every new instance to avoid prototype pollution.
	 * @ignore
	 * @constructor
	 */ function SafeEngine(initConfig) {
            const proto = /** @lends Engine.prototype */ {
                /**
			 * Initialize the engine instance. Optionally, pass the base path to the engine to load it,
			 * if it hasn't been loaded yet. See :js:meth:`Engine.load`.
			 *
			 * @param {string=} basePath Base path of the engine to load.
			 * @return {Promise} A ``Promise`` that resolves once the engine is loaded and initialized.
			 */ init: function(basePath) {
                    if (initPromise) return initPromise;
                    if (loadPromise == null) {
                        if (!basePath) {
                            initPromise = Promise.reject(new Error('A base path must be provided when calling `init` and the engine is not loaded.'));
                            return initPromise;
                        }
                        Engine.load(basePath, this.config.fileSizes[`${basePath}.wasm`]);
                    }
                    const me = this;
                    function doInit(promise) {
                        // Care! Promise chaining is bogus with old emscripten versions.
                        // This caused a regression with the Mono build (which uses an older emscripten version).
                        // Make sure to test that when refactoring.
                        return new Promise(function(resolve, reject) {
                            promise.then(function(response) {
                                const cloned = new Response(response.clone().body, {
                                    'headers': [
                                        [
                                            'content-type',
                                            'application/wasm'
                                        ]
                                    ]
                                });
                                Godot1(me.config.getModuleConfig(loadPath, cloned)).then(function(module) {
                                    const paths = me.config.persistentPaths;
                                    module['initFS'](paths).then(function(err) {
                                        me.rtenv = module;
                                        if (me.config.unloadAfterInit) Engine.unload();
                                        resolve();
                                    });
                                });
                            });
                        });
                    }
                    preloader.setProgressFunc(this.config.onProgress);
                    initPromise = doInit(loadPromise);
                    return initPromise;
                },
                /**
			 * Load a file so it is available in the instance's file system once it runs. Must be called **before** starting the
			 * instance.
			 *
			 * If not provided, the ``path`` is derived from the URL of the loaded file.
			 *
			 * @param {string|ArrayBuffer} file The file to preload.
			 *
			 * If a ``string`` the file will be loaded from that path.
			 *
			 * If an ``ArrayBuffer`` or a view on one, the buffer will used as the content of the file.
			 *
			 * @param {string=} path Path by which the file will be accessible. Required, if ``file`` is not a string.
			 *
			 * @returns {Promise} A Promise that resolves once the file is loaded.
			 */ preloadFile: function(file, path) {
                    return preloader.preload(file, path, this.config.fileSizes[file]);
                },
                /**
			 * Start the engine instance using the given override configuration (if any).
			 * :js:meth:`startGame <Engine.prototype.startGame>` can be used in typical cases instead.
			 *
			 * This will initialize the instance if it is not initialized. For manual initialization, see :js:meth:`init <Engine.prototype.init>`.
			 * The engine must be loaded beforehand.
			 *
			 * Fails if a canvas cannot be found on the page, or not specified in the configuration.
			 *
			 * @param {EngineConfig} override An optional configuration override.
			 * @return {Promise} Promise that resolves once the engine started.
			 */ start: function(override) {
                    this.config.update(override);
                    const me = this;
                    return me.init().then(function() {
                        if (!me.rtenv) return Promise.reject(new Error('The engine must be initialized before it can be started'));
                        let config = {
                        };
                        try {
                            config = me.config.getGodotConfig(function() {
                                me.rtenv = null;
                            });
                        } catch (e) {
                            return Promise.reject(e);
                        }
                        // Godot configuration.
                        me.rtenv['initConfig'](config);
                        // Preload GDNative libraries.
                        const libs = [];
                        me.config.gdnativeLibs.forEach(function(lib) {
                            libs.push(me.rtenv['loadDynamicLibrary'](lib, {
                                'loadAsync': true
                            }));
                        });
                        return Promise.all(libs).then(function() {
                            return new Promise(function(resolve, reject) {
                                preloader.preloadedFiles.forEach(function(file) {
                                    me.rtenv['copyToFS'](file.path, file.buffer);
                                });
                                preloader.preloadedFiles.length = 0; // Clear memory
                                me.rtenv['callMain'](me.config.args);
                                initPromise = null;
                                resolve();
                            });
                        });
                    });
                },
                /**
			 * Start the game instance using the given configuration override (if any).
			 *
			 * This will initialize the instance if it is not initialized. For manual initialization, see :js:meth:`init <Engine.prototype.init>`.
			 *
			 * This will load the engine if it is not loaded, and preload the main pck.
			 *
			 * This method expects the initial config (or the override) to have both the :js:attr:`executable` and :js:attr:`mainPack`
			 * properties set (normally done by the editor during export).
			 *
			 * @param {EngineConfig} override An optional configuration override.
			 * @return {Promise} Promise that resolves once the game started.
			 */ startGame: function(override) {
                    this.config.update(override);
                    // Add main-pack argument.
                    const exe = this.config.executable;
                    const pack = this.config.mainPack || `${exe}.pck`;
                    this.config.args = [
                        '--main-pack',
                        pack
                    ].concat(this.config.args);
                    // Start and init with execName as loadPath if not inited.
                    const me = this;
                    return Promise.all([
                        this.init(exe),
                        this.preloadFile(pack, pack), 
                    ]).then(function() {
                        return me.start.apply(me);
                    });
                },
                /**
			 * Create a file at the specified ``path`` with the passed as ``buffer`` in the instance's file system.
			 *
			 * @param {string} path The location where the file will be created.
			 * @param {ArrayBuffer} buffer The content of the file.
			 */ copyToFS: function(path, buffer) {
                    if (this.rtenv == null) throw new Error('Engine must be inited before copying files');
                    this.rtenv['copyToFS'](path, buffer);
                },
                /**
			 * Request that the current instance quit.
			 *
			 * This is akin the user pressing the close button in the window manager, and will
			 * have no effect if the engine has crashed, or is stuck in a loop.
			 *
			 */ requestQuit: function() {
                    if (this.rtenv) this.rtenv['request_quit']();
                }
            };
            Engine.prototype = proto;
            // Closure compiler exported instance methods.
            Engine.prototype['init'] = Engine.prototype.init;
            Engine.prototype['preloadFile'] = Engine.prototype.preloadFile;
            Engine.prototype['start'] = Engine.prototype.start;
            Engine.prototype['startGame'] = Engine.prototype.startGame;
            Engine.prototype['copyToFS'] = Engine.prototype.copyToFS;
            Engine.prototype['requestQuit'] = Engine.prototype.requestQuit;
            // Also expose static methods as instance methods
            Engine.prototype['load'] = Engine.load;
            Engine.prototype['unload'] = Engine.unload;
            Engine.prototype['isWebGLAvailable'] = Engine.isWebGLAvailable;
            return new Engine(initConfig);
        }
        // Closure compiler exported static methods.
        SafeEngine['load'] = Engine.load;
        SafeEngine['unload'] = Engine.unload;
        SafeEngine['isWebGLAvailable'] = Engine.isWebGLAvailable;
        return SafeEngine;
    }();
    if (typeof window !== 'undefined') window['Engine'] = Engine1;
}

},{"process":"lDnB8","@dogstudio/highway":"gUu7G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lDnB8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}]},["7asJj","10GF3"], "10GF3", "parcelRequire28b7")

//# sourceMappingURL=index.2ab63698.js.map
