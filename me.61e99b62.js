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
})({"7uKUp":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "266f263961e99b62";
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

},{}],"cPEuU":[function(require,module,exports) {
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
    scrollUpdate();
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
var playing = false;
function set_playpause(play) {
    if (audio.src != "") {
        setProgress();
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
function scrollUpdate() {
    var fade_items = document.getElementsByClassName("fade");
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
            inhtml += `<div class="colspacer fade"></div>`;
            date.innerHTML = inhtml;
        }
        var elem = null;
        if (val[SEC] == "me") {
            elem = mine;
            var inhtml = illegal.innerHTML;
            inhtml += `<div class="colspacer fade"></div>`;
            illegal.innerHTML = inhtml;
        } else if (val[SEC] == "illegal") {
            elem = illegal;
            var inhtml = mine.innerHTML;
            inhtml += `<div class="colspacer fade"></div>`;
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
function visualizationInit() {
    context.resume();
    var canvas = document.getElementById("audiocanvas");
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight;
    canvas.style.bottom = "0px";
    canvas.style.width = "100%";
    canvas.style.zIndex = "-3";
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
    if (currentPage == "music") requestAnimationFrame(renderFrame);
}
class musicRenderer extends _highwayDefault.default.Renderer {
    onEnter() {
        musicInit();
        visualizationInit();
    }
    onLeave() {
        window.onscroll = function(e) {
        };
    }
    onEnterCompleted() {
        var scrollTimer, lastScrollFireTime = 0;
        var minScrollTime = 10;
        function throttledScrollFade() {
            if (doScrollUpdate) {
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
        }
        window.onscroll = function(e) {
            throttledScrollFade();
        };
    }
    onLeaveCompleted() {
    }
}
exports.default = musicRenderer;

},{"@dogstudio/highway":"gUu7G","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["7uKUp","cPEuU"], "cPEuU", "parcelRequire28b7")

//# sourceMappingURL=me.61e99b62.js.map
