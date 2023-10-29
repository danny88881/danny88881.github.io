var Godot = (()=>{
    var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
    return function(Godot) {
        Godot = Godot || {};
        function GROWABLE_HEAP_I8() {
            if (wasmMemory.buffer != buffer) updateGlobalBufferAndViews(wasmMemory.buffer);
            return HEAP8;
        }
        function GROWABLE_HEAP_U8() {
            if (wasmMemory.buffer != buffer) updateGlobalBufferAndViews(wasmMemory.buffer);
            return HEAPU8;
        }
        function GROWABLE_HEAP_I16() {
            if (wasmMemory.buffer != buffer) updateGlobalBufferAndViews(wasmMemory.buffer);
            return HEAP16;
        }
        function GROWABLE_HEAP_U16() {
            if (wasmMemory.buffer != buffer) updateGlobalBufferAndViews(wasmMemory.buffer);
            return HEAPU16;
        }
        function GROWABLE_HEAP_I32() {
            if (wasmMemory.buffer != buffer) updateGlobalBufferAndViews(wasmMemory.buffer);
            return HEAP32;
        }
        function GROWABLE_HEAP_U32() {
            if (wasmMemory.buffer != buffer) updateGlobalBufferAndViews(wasmMemory.buffer);
            return HEAPU32;
        }
        function GROWABLE_HEAP_F32() {
            if (wasmMemory.buffer != buffer) updateGlobalBufferAndViews(wasmMemory.buffer);
            return HEAPF32;
        }
        function GROWABLE_HEAP_F64() {
            if (wasmMemory.buffer != buffer) updateGlobalBufferAndViews(wasmMemory.buffer);
            return HEAPF64;
        }
        var Module = typeof Godot != "undefined" ? Godot : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise(function(resolve1, reject1) {
            readyPromiseResolve = resolve1;
            readyPromiseReject = reject1;
        });
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status1, toThrow1)=>{
            throw toThrow1;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var ENVIRONMENT_IS_PTHREAD = Module["ENVIRONMENT_IS_PTHREAD"] || false;
        var scriptDirectory = "";
        function locateFile(path1) {
            if (Module["locateFile"]) return Module["locateFile"](path1, scriptDirectory);
            return scriptDirectory + path1;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            if (ENVIRONMENT_IS_WORKER) scriptDirectory = self.location.href;
            else if (typeof document != "undefined" && document.currentScript) scriptDirectory = document.currentScript.src;
            if (_scriptDir) scriptDirectory = _scriptDir;
            if (scriptDirectory.indexOf("blob:") !== 0) scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
            else scriptDirectory = "";
            read_ = (url1)=>{
                var xhr1 = new XMLHttpRequest;
                xhr1.open("GET", url1, false);
                xhr1.send(null);
                return xhr1.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) readBinary = (url1)=>{
                var xhr1 = new XMLHttpRequest;
                xhr1.open("GET", url1, false);
                xhr1.responseType = "arraybuffer";
                xhr1.send(null);
                return new Uint8Array(xhr1.response);
            };
            readAsync = (url1, onload1, onerror1)=>{
                var xhr1 = new XMLHttpRequest;
                xhr1.open("GET", url1, true);
                xhr1.responseType = "arraybuffer";
                xhr1.onload = ()=>{
                    if (xhr1.status == 200 || xhr1.status == 0 && xhr1.response) {
                        onload1(xhr1.response);
                        return;
                    }
                    onerror1();
                };
                xhr1.onerror = onerror1;
                xhr1.send(null);
            };
            setWindowTitle = (title1)=>document.title = title1;
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.warn.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"]) arguments_ = Module["arguments"];
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        if (Module["quit"]) quit_ = Module["quit"];
        function warnOnce(text1) {
            if (!warnOnce.shown) warnOnce.shown = {};
            if (!warnOnce.shown[text1]) {
                warnOnce.shown[text1] = 1;
                err(text1);
            }
        }
        var tempRet0 = 0;
        var setTempRet0 = (value1)=>{
            tempRet0 = value1;
        };
        var getTempRet0 = ()=>tempRet0;
        var Atomics_load = Atomics.load;
        var Atomics_store = Atomics.store;
        var Atomics_compareExchange = Atomics.compareExchange;
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        var noExitRuntime = Module["noExitRuntime"] || false;
        if (typeof WebAssembly != "object") abort("no native wasm support detected");
        var wasmMemory;
        var wasmModule;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition1, text1) {
            if (!condition1) abort(text1);
        }
        function getCFunc(ident1) {
            var func1 = Module["_" + ident1];
            return func1;
        }
        function ccall(ident1, returnType1, argTypes1, args1, opts1) {
            var toC1 = {
                "string": function(str1) {
                    var ret1 = 0;
                    if (str1 !== null && str1 !== undefined && str1 !== 0) {
                        var len1 = (str1.length << 2) + 1;
                        ret1 = stackAlloc(len1);
                        stringToUTF8(str1, ret1, len1);
                    }
                    return ret1;
                },
                "array": function(arr1) {
                    var ret1 = stackAlloc(arr1.length);
                    writeArrayToMemory(arr1, ret1);
                    return ret1;
                }
            };
            function convertReturnValue1(ret1) {
                if (returnType1 === "string") return UTF8ToString(ret1);
                if (returnType1 === "boolean") return Boolean(ret1);
                return ret1;
            }
            var func1 = getCFunc(ident1);
            var cArgs1 = [];
            var stack1 = 0;
            if (args1) for(var i1 = 0; i1 < args1.length; i1++){
                var converter1 = toC1[argTypes1[i1]];
                if (converter1) {
                    if (stack1 === 0) stack1 = stackSave();
                    cArgs1[i1] = converter1(args1[i1]);
                } else cArgs1[i1] = args1[i1];
            }
            var ret1 = func1.apply(null, cArgs1);
            function onDone1(ret1) {
                if (stack1 !== 0) stackRestore(stack1);
                return convertReturnValue1(ret1);
            }
            ret1 = onDone1(ret1);
            return ret1;
        }
        function cwrap(ident1, returnType1, argTypes1, opts1) {
            argTypes1 = argTypes1 || [];
            var numericArgs1 = argTypes1.every(function(type1) {
                return type1 === "number";
            });
            var numericRet1 = returnType1 !== "string";
            if (numericRet1 && numericArgs1 && !opts1) return getCFunc(ident1);
            return function() {
                return ccall(ident1, returnType1, argTypes1, arguments, opts1);
            };
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
        function UTF8ArrayToString(heapOrArray1, idx1, maxBytesToRead1) {
            var endIdx1 = idx1 + maxBytesToRead1;
            var endPtr1 = idx1;
            while(heapOrArray1[endPtr1] && !(endPtr1 >= endIdx1))++endPtr1;
            if (endPtr1 - idx1 > 16 && heapOrArray1.buffer && UTF8Decoder) return UTF8Decoder.decode(heapOrArray1.buffer instanceof SharedArrayBuffer ? heapOrArray1.slice(idx1, endPtr1) : heapOrArray1.subarray(idx1, endPtr1));
            else {
                var str1 = "";
                while(idx1 < endPtr1){
                    var u01 = heapOrArray1[idx1++];
                    if (!(u01 & 128)) {
                        str1 += String.fromCharCode(u01);
                        continue;
                    }
                    var u11 = heapOrArray1[idx1++] & 63;
                    if ((u01 & 224) == 192) {
                        str1 += String.fromCharCode((u01 & 31) << 6 | u11);
                        continue;
                    }
                    var u21 = heapOrArray1[idx1++] & 63;
                    if ((u01 & 240) == 224) u01 = (u01 & 15) << 12 | u11 << 6 | u21;
                    else u01 = (u01 & 7) << 18 | u11 << 12 | u21 << 6 | heapOrArray1[idx1++] & 63;
                    if (u01 < 65536) str1 += String.fromCharCode(u01);
                    else {
                        var ch1 = u01 - 65536;
                        str1 += String.fromCharCode(55296 | ch1 >> 10, 56320 | ch1 & 1023);
                    }
                }
            }
            return str1;
        }
        function UTF8ToString(ptr1, maxBytesToRead1) {
            return ptr1 ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr1, maxBytesToRead1) : "";
        }
        function stringToUTF8Array(str1, heap1, outIdx1, maxBytesToWrite1) {
            if (!(maxBytesToWrite1 > 0)) return 0;
            var startIdx1 = outIdx1;
            var endIdx1 = outIdx1 + maxBytesToWrite1 - 1;
            for(var i1 = 0; i1 < str1.length; ++i1){
                var u3 = str1.charCodeAt(i1);
                if (u3 >= 55296 && u3 <= 57343) {
                    var u11 = str1.charCodeAt(++i1);
                    u3 = 65536 + ((u3 & 1023) << 10) | u11 & 1023;
                }
                if (u3 <= 127) {
                    if (outIdx1 >= endIdx1) break;
                    heap1[outIdx1++] = u3;
                } else if (u3 <= 2047) {
                    if (outIdx1 + 1 >= endIdx1) break;
                    heap1[outIdx1++] = 192 | u3 >> 6;
                    heap1[outIdx1++] = 128 | u3 & 63;
                } else if (u3 <= 65535) {
                    if (outIdx1 + 2 >= endIdx1) break;
                    heap1[outIdx1++] = 224 | u3 >> 12;
                    heap1[outIdx1++] = 128 | u3 >> 6 & 63;
                    heap1[outIdx1++] = 128 | u3 & 63;
                } else {
                    if (outIdx1 + 3 >= endIdx1) break;
                    heap1[outIdx1++] = 240 | u3 >> 18;
                    heap1[outIdx1++] = 128 | u3 >> 12 & 63;
                    heap1[outIdx1++] = 128 | u3 >> 6 & 63;
                    heap1[outIdx1++] = 128 | u3 & 63;
                }
            }
            heap1[outIdx1] = 0;
            return outIdx1 - startIdx1;
        }
        function stringToUTF8(str1, outPtr1, maxBytesToWrite1) {
            return stringToUTF8Array(str1, GROWABLE_HEAP_U8(), outPtr1, maxBytesToWrite1);
        }
        function lengthBytesUTF8(str1) {
            var len1 = 0;
            for(var i1 = 0; i1 < str1.length; ++i1){
                var u3 = str1.charCodeAt(i1);
                if (u3 >= 55296 && u3 <= 57343) u3 = 65536 + ((u3 & 1023) << 10) | str1.charCodeAt(++i1) & 1023;
                if (u3 <= 127) ++len1;
                else if (u3 <= 2047) len1 += 2;
                else if (u3 <= 65535) len1 += 3;
                else len1 += 4;
            }
            return len1;
        }
        function allocateUTF8(str1) {
            var size1 = lengthBytesUTF8(str1) + 1;
            var ret1 = _malloc(size1);
            if (ret1) stringToUTF8Array(str1, GROWABLE_HEAP_I8(), ret1, size1);
            return ret1;
        }
        function allocateUTF8OnStack(str1) {
            var size1 = lengthBytesUTF8(str1) + 1;
            var ret1 = stackAlloc(size1);
            stringToUTF8Array(str1, GROWABLE_HEAP_I8(), ret1, size1);
            return ret1;
        }
        function writeArrayToMemory(array1, buffer1) {
            GROWABLE_HEAP_I8().set(array1, buffer1);
        }
        function writeAsciiToMemory(str1, buffer1, dontAddNull1) {
            for(var i1 = 0; i1 < str1.length; ++i1)GROWABLE_HEAP_I8()[buffer1++ >> 0] = str1.charCodeAt(i1);
            if (!dontAddNull1) GROWABLE_HEAP_I8()[buffer1 >> 0] = 0;
        }
        var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        if (ENVIRONMENT_IS_PTHREAD) buffer = Module["buffer"];
        function updateGlobalBufferAndViews(buf1) {
            buffer = buf1;
            Module["HEAP8"] = HEAP8 = new Int8Array(buf1);
            Module["HEAP16"] = HEAP16 = new Int16Array(buf1);
            Module["HEAP32"] = HEAP32 = new Int32Array(buf1);
            Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf1);
            Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf1);
            Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf1);
            Module["HEAPF32"] = HEAPF32 = new Float32Array(buf1);
            Module["HEAPF64"] = HEAPF64 = new Float64Array(buf1);
        }
        var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 33554432;
        if (ENVIRONMENT_IS_PTHREAD) {
            wasmMemory = Module["wasmMemory"];
            buffer = Module["buffer"];
        } else if (Module["wasmMemory"]) wasmMemory = Module["wasmMemory"];
        else {
            wasmMemory = new WebAssembly.Memory({
                "initial": INITIAL_MEMORY / 65536,
                "maximum": 32768,
                "shared": true
            });
            if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
                err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
                if (ENVIRONMENT_IS_NODE) console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)");
                throw Error("bad memory");
            }
        }
        if (wasmMemory) buffer = wasmMemory.buffer;
        INITIAL_MEMORY = buffer.byteLength;
        updateGlobalBufferAndViews(buffer);
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
            if (ENVIRONMENT_IS_PTHREAD) return;
            if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
            FS.ignorePermissions = false;
            TTY.init();
            SOCKFS.root = FS.mount(SOCKFS, {}, null);
            callRuntimeCallbacks(__ATINIT__);
        }
        function preMain() {
            if (ENVIRONMENT_IS_PTHREAD) return;
            callRuntimeCallbacks(__ATMAIN__);
        }
        function exitRuntime() {
            if (ENVIRONMENT_IS_PTHREAD) return;
            ___funcs_on_exit();
            callRuntimeCallbacks(__ATEXIT__);
            FS.quit();
            TTY.shutdown();
            IDBFS.quit();
            PThread.terminateAllThreads();
            runtimeExited = true;
        }
        function postRun() {
            if (ENVIRONMENT_IS_PTHREAD) return;
            if (Module["postRun"]) {
                if (typeof Module["postRun"] == "function") Module["postRun"] = [
                    Module["postRun"]
                ];
                while(Module["postRun"].length)addOnPostRun(Module["postRun"].shift());
            }
            callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb1) {
            __ATPRERUN__.unshift(cb1);
        }
        function addOnInit(cb1) {
            __ATINIT__.unshift(cb1);
        }
        function addOnPostRun(cb1) {
            __ATPOSTRUN__.unshift(cb1);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function getUniqueRunDependency(id1) {
            return id1;
        }
        function addRunDependency(id1) {
            runDependencies++;
            if (Module["monitorRunDependencies"]) Module["monitorRunDependencies"](runDependencies);
        }
        function removeRunDependency(id1) {
            runDependencies--;
            if (Module["monitorRunDependencies"]) Module["monitorRunDependencies"](runDependencies);
            if (runDependencies == 0) {
                if (runDependencyWatcher !== null) {
                    clearInterval(runDependencyWatcher);
                    runDependencyWatcher = null;
                }
                if (dependenciesFulfilled) {
                    var callback1 = dependenciesFulfilled;
                    dependenciesFulfilled = null;
                    callback1();
                }
            }
        }
        function abort(what1) {
            if (ENVIRONMENT_IS_PTHREAD) postMessage({
                "cmd": "onAbort",
                "arg": what1
            });
            else if (Module["onAbort"]) Module["onAbort"](what1);
            what1 = "Aborted(" + what1 + ")";
            err(what1);
            ABORT = true;
            EXITSTATUS = 1;
            what1 += ". Build with -sASSERTIONS for more info.";
            var e1 = new WebAssembly.RuntimeError(what1);
            readyPromiseReject(e1);
            throw e1;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename1) {
            return filename1.startsWith(dataURIPrefix);
        }
        var wasmBinaryFile;
        wasmBinaryFile = "godot.javascript.opt.threads.wasm";
        if (!isDataURI(wasmBinaryFile)) wasmBinaryFile = locateFile(wasmBinaryFile);
        function getBinary(file1) {
            try {
                if (file1 == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
                if (readBinary) return readBinary(file1);
                else throw "both async and sync fetching of the wasm failed";
            } catch (err1) {
                abort(err1);
            }
        }
        function getBinaryPromise() {
            if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
                if (typeof fetch == "function") return fetch(wasmBinaryFile, {
                    credentials: "same-origin"
                }).then(function(response1) {
                    if (!response1["ok"]) throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                    return response1["arrayBuffer"]();
                }).catch(function() {
                    return getBinary(wasmBinaryFile);
                });
            }
            return Promise.resolve().then(function() {
                return getBinary(wasmBinaryFile);
            });
        }
        function createWasm() {
            var info1 = {
                "a": asmLibraryArg
            };
            function receiveInstance1(instance1, module1) {
                var exports1 = instance1.exports;
                Module["asm"] = exports1;
                registerTLSInit(Module["asm"]["di"]);
                wasmTable = Module["asm"]["hi"];
                addOnInit(Module["asm"]["Rh"]);
                wasmModule = module1;
                if (!ENVIRONMENT_IS_PTHREAD) {
                    var numWorkersToLoad1 = PThread.unusedWorkers.length;
                    PThread.unusedWorkers.forEach(function(w1) {
                        PThread.loadWasmModuleToWorker(w1, function() {
                            if (!--numWorkersToLoad1) removeRunDependency("wasm-instantiate");
                        });
                    });
                }
            }
            if (!ENVIRONMENT_IS_PTHREAD) addRunDependency("wasm-instantiate");
            function receiveInstantiationResult1(result1) {
                receiveInstance1(result1["instance"], result1["module"]);
            }
            function instantiateArrayBuffer1(receiver1) {
                return getBinaryPromise().then(function(binary1) {
                    return WebAssembly.instantiate(binary1, info1);
                }).then(function(instance1) {
                    return instance1;
                }).then(receiver1, function(reason1) {
                    err("failed to asynchronously prepare wasm: " + reason1);
                    abort(reason1);
                });
            }
            function instantiateAsync1() {
                if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && typeof fetch == "function") return fetch(wasmBinaryFile, {
                    credentials: "same-origin"
                }).then(function(response1) {
                    var result1 = WebAssembly.instantiateStreaming(response1, info1);
                    return result1.then(receiveInstantiationResult1, function(reason1) {
                        err("wasm streaming compile failed: " + reason1);
                        err("falling back to ArrayBuffer instantiation");
                        return instantiateArrayBuffer1(receiveInstantiationResult1);
                    });
                });
                else return instantiateArrayBuffer1(receiveInstantiationResult1);
            }
            if (Module["instantiateWasm"]) try {
                var exports1 = Module["instantiateWasm"](info1, receiveInstance1);
                return exports1;
            } catch (e1) {
                err("Module.instantiateWasm callback failed with error: " + e1);
                return false;
            }
            instantiateAsync1().catch(readyPromiseReject);
            return {};
        }
        var tempDouble;
        var tempI64;
        var ASM_CONSTS = {};
        function killThread(pthread_ptr1) {
            var pthread1 = PThread.pthreads[pthread_ptr1];
            delete PThread.pthreads[pthread_ptr1];
            pthread1.worker.terminate();
            __emscripten_thread_free_data(pthread_ptr1);
            PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread1.worker), 1);
            pthread1.worker.pthread = undefined;
        }
        function cancelThread(pthread_ptr1) {
            var pthread1 = PThread.pthreads[pthread_ptr1];
            pthread1.worker.postMessage({
                "cmd": "cancel"
            });
        }
        function cleanupThread(pthread_ptr1) {
            var pthread1 = PThread.pthreads[pthread_ptr1];
            assert(pthread1);
            var worker1 = pthread1.worker;
            PThread.returnWorkerToPool(worker1);
        }
        function zeroMemory(address1, size1) {
            GROWABLE_HEAP_U8().fill(0, address1, address1 + size1);
        }
        function spawnThread(threadParams1) {
            var worker1 = PThread.getNewWorker();
            if (!worker1) return 6;
            PThread.runningWorkers.push(worker1);
            var pthread1 = PThread.pthreads[threadParams1.pthread_ptr] = {
                worker: worker1,
                threadInfoStruct: threadParams1.pthread_ptr
            };
            worker1.pthread = pthread1;
            var msg1 = {
                "cmd": "run",
                "start_routine": threadParams1.startRoutine,
                "arg": threadParams1.arg,
                "threadInfoStruct": threadParams1.pthread_ptr
            };
            worker1.runPthread = ()=>{
                msg1.time = performance.now();
                worker1.postMessage(msg1, threadParams1.transferList);
            };
            if (worker1.loaded) {
                worker1.runPthread();
                delete worker1.runPthread;
            }
            return 0;
        }
        function _exit(status1) {
            exit(status1);
        }
        function handleException(e1) {
            if (e1 instanceof ExitStatus || e1 == "unwind") return EXITSTATUS;
            quit_(1, e1);
        }
        var PThread = {
            unusedWorkers: [],
            runningWorkers: [],
            tlsInitFunctions: [],
            init: function() {
                if (ENVIRONMENT_IS_PTHREAD) PThread.initWorker();
                else PThread.initMainThread();
            },
            initMainThread: function() {
                var pthreadPoolSize1 = 8;
                for(var i1 = 0; i1 < pthreadPoolSize1; ++i1)PThread.allocateUnusedWorker();
            },
            initWorker: function() {
                noExitRuntime = false;
            },
            pthreads: {},
            setExitStatus: function(status1) {
                EXITSTATUS = status1;
            },
            terminateAllThreads: function() {
                for(var t1 in PThread.pthreads){
                    var pthread1 = PThread.pthreads[t1];
                    if (pthread1 && pthread1.worker) PThread.returnWorkerToPool(pthread1.worker);
                }
                for(var i1 = 0; i1 < PThread.unusedWorkers.length; ++i1){
                    var worker1 = PThread.unusedWorkers[i1];
                    worker1.terminate();
                }
                PThread.unusedWorkers = [];
            },
            returnWorkerToPool: function(worker1) {
                var pthread_ptr1 = worker1.pthread.threadInfoStruct;
                delete PThread.pthreads[pthread_ptr1];
                PThread.unusedWorkers.push(worker1);
                PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker1), 1);
                worker1.pthread = undefined;
                __emscripten_thread_free_data(pthread_ptr1);
            },
            receiveObjectTransfer: function(data1) {},
            threadInitTLS: function() {
                for(var i1 in PThread.tlsInitFunctions)if (PThread.tlsInitFunctions.hasOwnProperty(i1)) PThread.tlsInitFunctions[i1]();
            },
            loadWasmModuleToWorker: function(worker1, onFinishedLoading1) {
                worker1.onmessage = (e1)=>{
                    var d1 = e1["data"];
                    var cmd1 = d1["cmd"];
                    if (worker1.pthread) PThread.currentProxiedOperationCallerThread = worker1.pthread.threadInfoStruct;
                    if (d1["targetThread"] && d1["targetThread"] != _pthread_self()) {
                        var thread1 = PThread.pthreads[d1.targetThread];
                        if (thread1) thread1.worker.postMessage(d1, d1["transferList"]);
                        else err('Internal error! Worker sent a message "' + cmd1 + '" to target pthread ' + d1["targetThread"] + ", but that thread no longer exists!");
                        PThread.currentProxiedOperationCallerThread = undefined;
                        return;
                    }
                    if (cmd1 === "processProxyingQueue") executeNotifiedProxyingQueue(d1["queue"]);
                    else if (cmd1 === "spawnThread") spawnThread(d1);
                    else if (cmd1 === "cleanupThread") cleanupThread(d1["thread"]);
                    else if (cmd1 === "killThread") killThread(d1["thread"]);
                    else if (cmd1 === "cancelThread") cancelThread(d1["thread"]);
                    else if (cmd1 === "loaded") {
                        worker1.loaded = true;
                        if (onFinishedLoading1) onFinishedLoading1(worker1);
                        if (worker1.runPthread) {
                            worker1.runPthread();
                            delete worker1.runPthread;
                        }
                    } else if (cmd1 === "print") out("Thread " + d1["threadId"] + ": " + d1["text"]);
                    else if (cmd1 === "printErr") err("Thread " + d1["threadId"] + ": " + d1["text"]);
                    else if (cmd1 === "alert") alert("Thread " + d1["threadId"] + ": " + d1["text"]);
                    else if (d1.target === "setimmediate") worker1.postMessage(d1);
                    else if (cmd1 === "onAbort") {
                        if (Module["onAbort"]) Module["onAbort"](d1["arg"]);
                    } else if (cmd1) err("worker sent an unknown command " + cmd1);
                    PThread.currentProxiedOperationCallerThread = undefined;
                };
                worker1.onerror = (e1)=>{
                    var message1 = "worker sent an error!";
                    err(message1 + " " + e1.filename + ":" + e1.lineno + ": " + e1.message);
                    throw e1;
                };
                worker1.postMessage({
                    "cmd": "load",
                    "urlOrBlob": Module["mainScriptUrlOrBlob"] || _scriptDir,
                    "wasmMemory": wasmMemory,
                    "wasmModule": wasmModule
                });
            },
            allocateUnusedWorker: function() {
                var pthreadMainJs1 = locateFile("godot.javascript.opt.threads.worker.js");
                PThread.unusedWorkers.push(new Worker(pthreadMainJs1));
            },
            getNewWorker: function() {
                if (PThread.unusedWorkers.length == 0) {
                    PThread.allocateUnusedWorker();
                    PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
                }
                return PThread.unusedWorkers.pop();
            }
        };
        Module["PThread"] = PThread;
        function callRuntimeCallbacks(callbacks1) {
            while(callbacks1.length > 0){
                var callback1 = callbacks1.shift();
                if (typeof callback1 == "function") {
                    callback1(Module);
                    continue;
                }
                var func1 = callback1.func;
                if (typeof func1 == "number") {
                    if (callback1.arg === undefined) getWasmTableEntry(func1)();
                    else getWasmTableEntry(func1)(callback1.arg);
                } else func1(callback1.arg === undefined ? null : callback1.arg);
            }
        }
        function withStackSave(f1) {
            var stack1 = stackSave();
            var ret1 = f1();
            stackRestore(stack1);
            return ret1;
        }
        function establishStackSpace() {
            var pthread_ptr1 = _pthread_self();
            var stackTop1 = GROWABLE_HEAP_I32()[pthread_ptr1 + 44 >> 2];
            var stackSize1 = GROWABLE_HEAP_I32()[pthread_ptr1 + 48 >> 2];
            var stackMax1 = stackTop1 - stackSize1;
            _emscripten_stack_set_limits(stackTop1, stackMax1);
            stackRestore(stackTop1);
        }
        Module["establishStackSpace"] = establishStackSpace;
        function exitOnMainThread(returnCode1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(1, 0, returnCode1);
            try {
                _exit(returnCode1);
            } catch (e1) {
                handleException(e1);
            }
        }
        function getValue(ptr1, type1 = "i8") {
            if (type1.endsWith("*")) type1 = "i32";
            switch(type1){
                case "i1":
                    return GROWABLE_HEAP_I8()[ptr1 >> 0];
                case "i8":
                    return GROWABLE_HEAP_I8()[ptr1 >> 0];
                case "i16":
                    return GROWABLE_HEAP_I16()[ptr1 >> 1];
                case "i32":
                    return GROWABLE_HEAP_I32()[ptr1 >> 2];
                case "i64":
                    return GROWABLE_HEAP_I32()[ptr1 >> 2];
                case "float":
                    return GROWABLE_HEAP_F32()[ptr1 >> 2];
                case "double":
                    return Number(GROWABLE_HEAP_F64()[ptr1 >> 3]);
                default:
                    abort("invalid type for getValue: " + type1);
            }
            return null;
        }
        function getWasmTableEntry(funcPtr1) {
            return wasmTable.get(funcPtr1);
        }
        function invokeEntryPoint(ptr1, arg1) {
            var result1 = getWasmTableEntry(ptr1)(arg1);
            if (keepRuntimeAlive()) PThread.setExitStatus(result1);
            else __emscripten_thread_exit(result1);
        }
        Module["invokeEntryPoint"] = invokeEntryPoint;
        function registerTLSInit(tlsInitFunc1) {
            PThread.tlsInitFunctions.push(tlsInitFunc1);
        }
        function setValue(ptr1, value1, type1 = "i8") {
            if (type1.endsWith("*")) type1 = "i32";
            switch(type1){
                case "i1":
                    GROWABLE_HEAP_I8()[ptr1 >> 0] = value1;
                    break;
                case "i8":
                    GROWABLE_HEAP_I8()[ptr1 >> 0] = value1;
                    break;
                case "i16":
                    GROWABLE_HEAP_I16()[ptr1 >> 1] = value1;
                    break;
                case "i32":
                    GROWABLE_HEAP_I32()[ptr1 >> 2] = value1;
                    break;
                case "i64":
                    tempI64 = [
                        value1 >>> 0,
                        (tempDouble = value1, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                    ], GROWABLE_HEAP_I32()[ptr1 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[ptr1 + 4 >> 2] = tempI64[1];
                    break;
                case "float":
                    GROWABLE_HEAP_F32()[ptr1 >> 2] = value1;
                    break;
                case "double":
                    GROWABLE_HEAP_F64()[ptr1 >> 3] = value1;
                    break;
                default:
                    abort("invalid type for setValue: " + type1);
            }
        }
        function ___call_sighandler(fp1, sig1) {
            getWasmTableEntry(fp1)(sig1);
        }
        function ___emscripten_init_main_thread_js(tb1) {
            __emscripten_thread_init(tb1, !ENVIRONMENT_IS_WORKER, 1, !ENVIRONMENT_IS_WEB);
            PThread.threadInitTLS();
        }
        function ___emscripten_thread_cleanup(thread1) {
            if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread1);
            else postMessage({
                "cmd": "cleanupThread",
                "thread": thread1
            });
        }
        function pthreadCreateProxied(pthread_ptr1, attr1, start_routine1, arg1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(2, 1, pthread_ptr1, attr1, start_routine1, arg1);
            return ___pthread_create_js(pthread_ptr1, attr1, start_routine1, arg1);
        }
        function ___pthread_create_js(pthread_ptr1, attr1, start_routine1, arg1) {
            if (typeof SharedArrayBuffer == "undefined") {
                err("Current environment does not support SharedArrayBuffer, pthreads are not available!");
                return 6;
            }
            var transferList1 = [];
            var error1 = 0;
            if (ENVIRONMENT_IS_PTHREAD && (transferList1.length === 0 || error1)) return pthreadCreateProxied(pthread_ptr1, attr1, start_routine1, arg1);
            if (error1) return error1;
            var threadParams1 = {
                startRoutine: start_routine1,
                pthread_ptr: pthread_ptr1,
                arg: arg1,
                transferList: transferList1
            };
            if (ENVIRONMENT_IS_PTHREAD) {
                threadParams1.cmd = "spawnThread";
                postMessage(threadParams1, transferList1);
                return 0;
            }
            return spawnThread(threadParams1);
        }
        var PATH = {
            isAbs: (path1)=>path1.charAt(0) === "/",
            splitPath: (filename1)=>{
                var splitPathRe1 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                return splitPathRe1.exec(filename1).slice(1);
            },
            normalizeArray: (parts1, allowAboveRoot1)=>{
                var up1 = 0;
                for(var i1 = parts1.length - 1; i1 >= 0; i1--){
                    var last1 = parts1[i1];
                    if (last1 === ".") parts1.splice(i1, 1);
                    else if (last1 === "..") {
                        parts1.splice(i1, 1);
                        up1++;
                    } else if (up1) {
                        parts1.splice(i1, 1);
                        up1--;
                    }
                }
                if (allowAboveRoot1) for(; up1; up1--)parts1.unshift("..");
                return parts1;
            },
            normalize: (path1)=>{
                var isAbsolute1 = PATH.isAbs(path1), trailingSlash1 = path1.substr(-1) === "/";
                path1 = PATH.normalizeArray(path1.split("/").filter((p1)=>!!p1), !isAbsolute1).join("/");
                if (!path1 && !isAbsolute1) path1 = ".";
                if (path1 && trailingSlash1) path1 += "/";
                return (isAbsolute1 ? "/" : "") + path1;
            },
            dirname: (path1)=>{
                var result1 = PATH.splitPath(path1), root1 = result1[0], dir1 = result1[1];
                if (!root1 && !dir1) return ".";
                if (dir1) dir1 = dir1.substr(0, dir1.length - 1);
                return root1 + dir1;
            },
            basename: (path1)=>{
                if (path1 === "/") return "/";
                path1 = PATH.normalize(path1);
                path1 = path1.replace(/\/$/, "");
                var lastSlash1 = path1.lastIndexOf("/");
                if (lastSlash1 === -1) return path1;
                return path1.substr(lastSlash1 + 1);
            },
            join: function() {
                var paths1 = Array.prototype.slice.call(arguments, 0);
                return PATH.normalize(paths1.join("/"));
            },
            join2: (l1, r1)=>{
                return PATH.normalize(l1 + "/" + r1);
            }
        };
        function getRandomDevice() {
            if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
                var randomBuffer1 = new Uint8Array(1);
                return function() {
                    crypto.getRandomValues(randomBuffer1);
                    return randomBuffer1[0];
                };
            } else return function() {
                abort("randomDevice");
            };
        }
        var PATH_FS = {
            resolve: function() {
                var resolvedPath1 = "", resolvedAbsolute1 = false;
                for(var i1 = arguments.length - 1; i1 >= -1 && !resolvedAbsolute1; i1--){
                    var path1 = i1 >= 0 ? arguments[i1] : FS.cwd();
                    if (typeof path1 != "string") throw new TypeError("Arguments to path.resolve must be strings");
                    else if (!path1) return "";
                    resolvedPath1 = path1 + "/" + resolvedPath1;
                    resolvedAbsolute1 = PATH.isAbs(path1);
                }
                resolvedPath1 = PATH.normalizeArray(resolvedPath1.split("/").filter((p1)=>!!p1), !resolvedAbsolute1).join("/");
                return (resolvedAbsolute1 ? "/" : "") + resolvedPath1 || ".";
            },
            relative: (from1, to1)=>{
                from1 = PATH_FS.resolve(from1).substr(1);
                to1 = PATH_FS.resolve(to1).substr(1);
                function trim1(arr1) {
                    var start1 = 0;
                    for(; start1 < arr1.length; start1++){
                        if (arr1[start1] !== "") break;
                    }
                    var end1 = arr1.length - 1;
                    for(; end1 >= 0; end1--){
                        if (arr1[end1] !== "") break;
                    }
                    if (start1 > end1) return [];
                    return arr1.slice(start1, end1 - start1 + 1);
                }
                var fromParts1 = trim1(from1.split("/"));
                var toParts1 = trim1(to1.split("/"));
                var length1 = Math.min(fromParts1.length, toParts1.length);
                var samePartsLength1 = length1;
                for(var i1 = 0; i1 < length1; i1++)if (fromParts1[i1] !== toParts1[i1]) {
                    samePartsLength1 = i1;
                    break;
                }
                var outputParts1 = [];
                for(var i1 = samePartsLength1; i1 < fromParts1.length; i1++)outputParts1.push("..");
                outputParts1 = outputParts1.concat(toParts1.slice(samePartsLength1));
                return outputParts1.join("/");
            }
        };
        var TTY = {
            ttys: [],
            init: function() {},
            shutdown: function() {},
            register: function(dev1, ops1) {
                TTY.ttys[dev1] = {
                    input: [],
                    output: [],
                    ops: ops1
                };
                FS.registerDevice(dev1, TTY.stream_ops);
            },
            stream_ops: {
                open: function(stream1) {
                    var tty1 = TTY.ttys[stream1.node.rdev];
                    if (!tty1) throw new FS.ErrnoError(43);
                    stream1.tty = tty1;
                    stream1.seekable = false;
                },
                close: function(stream1) {
                    stream1.tty.ops.flush(stream1.tty);
                },
                flush: function(stream1) {
                    stream1.tty.ops.flush(stream1.tty);
                },
                read: function(stream1, buffer1, offset1, length1, pos1) {
                    if (!stream1.tty || !stream1.tty.ops.get_char) throw new FS.ErrnoError(60);
                    var bytesRead1 = 0;
                    for(var i1 = 0; i1 < length1; i1++){
                        var result1;
                        try {
                            result1 = stream1.tty.ops.get_char(stream1.tty);
                        } catch (e1) {
                            throw new FS.ErrnoError(29);
                        }
                        if (result1 === undefined && bytesRead1 === 0) throw new FS.ErrnoError(6);
                        if (result1 === null || result1 === undefined) break;
                        bytesRead1++;
                        buffer1[offset1 + i1] = result1;
                    }
                    if (bytesRead1) stream1.node.timestamp = Date.now();
                    return bytesRead1;
                },
                write: function(stream1, buffer1, offset1, length1, pos1) {
                    if (!stream1.tty || !stream1.tty.ops.put_char) throw new FS.ErrnoError(60);
                    try {
                        for(var i1 = 0; i1 < length1; i1++)stream1.tty.ops.put_char(stream1.tty, buffer1[offset1 + i1]);
                    } catch (e1) {
                        throw new FS.ErrnoError(29);
                    }
                    if (length1) stream1.node.timestamp = Date.now();
                    return i1;
                }
            },
            default_tty_ops: {
                get_char: function(tty1) {
                    if (!tty1.input.length) {
                        var result1 = null;
                        if (typeof window != "undefined" && typeof window.prompt == "function") {
                            result1 = window.prompt("Input: ");
                            if (result1 !== null) result1 += "\n";
                        } else if (typeof readline == "function") {
                            result1 = readline();
                            if (result1 !== null) result1 += "\n";
                        }
                        if (!result1) return null;
                        tty1.input = intArrayFromString(result1, true);
                    }
                    return tty1.input.shift();
                },
                put_char: function(tty1, val1) {
                    if (val1 === null || val1 === 10) {
                        out(UTF8ArrayToString(tty1.output, 0));
                        tty1.output = [];
                    } else if (val1 != 0) tty1.output.push(val1);
                },
                flush: function(tty1) {
                    if (tty1.output && tty1.output.length > 0) {
                        out(UTF8ArrayToString(tty1.output, 0));
                        tty1.output = [];
                    }
                }
            },
            default_tty1_ops: {
                put_char: function(tty1, val1) {
                    if (val1 === null || val1 === 10) {
                        err(UTF8ArrayToString(tty1.output, 0));
                        tty1.output = [];
                    } else if (val1 != 0) tty1.output.push(val1);
                },
                flush: function(tty1) {
                    if (tty1.output && tty1.output.length > 0) {
                        err(UTF8ArrayToString(tty1.output, 0));
                        tty1.output = [];
                    }
                }
            }
        };
        function mmapAlloc(size1) {
            abort();
        }
        var MEMFS = {
            ops_table: null,
            mount: function(mount1) {
                return MEMFS.createNode(null, "/", 16895, 0);
            },
            createNode: function(parent1, name1, mode1, dev1) {
                if (FS.isBlkdev(mode1) || FS.isFIFO(mode1)) throw new FS.ErrnoError(63);
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
                        stream: {}
                    },
                    chrdev: {
                        node: {
                            getattr: MEMFS.node_ops.getattr,
                            setattr: MEMFS.node_ops.setattr
                        },
                        stream: FS.chrdev_stream_ops
                    }
                };
                var node1 = FS.createNode(parent1, name1, mode1, dev1);
                if (FS.isDir(node1.mode)) {
                    node1.node_ops = MEMFS.ops_table.dir.node;
                    node1.stream_ops = MEMFS.ops_table.dir.stream;
                    node1.contents = {};
                } else if (FS.isFile(node1.mode)) {
                    node1.node_ops = MEMFS.ops_table.file.node;
                    node1.stream_ops = MEMFS.ops_table.file.stream;
                    node1.usedBytes = 0;
                    node1.contents = null;
                } else if (FS.isLink(node1.mode)) {
                    node1.node_ops = MEMFS.ops_table.link.node;
                    node1.stream_ops = MEMFS.ops_table.link.stream;
                } else if (FS.isChrdev(node1.mode)) {
                    node1.node_ops = MEMFS.ops_table.chrdev.node;
                    node1.stream_ops = MEMFS.ops_table.chrdev.stream;
                }
                node1.timestamp = Date.now();
                if (parent1) {
                    parent1.contents[name1] = node1;
                    parent1.timestamp = node1.timestamp;
                }
                return node1;
            },
            getFileDataAsTypedArray: function(node1) {
                if (!node1.contents) return new Uint8Array(0);
                if (node1.contents.subarray) return node1.contents.subarray(0, node1.usedBytes);
                return new Uint8Array(node1.contents);
            },
            expandFileStorage: function(node1, newCapacity1) {
                var prevCapacity1 = node1.contents ? node1.contents.length : 0;
                if (prevCapacity1 >= newCapacity1) return;
                var CAPACITY_DOUBLING_MAX1 = 1048576;
                newCapacity1 = Math.max(newCapacity1, prevCapacity1 * (prevCapacity1 < CAPACITY_DOUBLING_MAX1 ? 2 : 1.125) >>> 0);
                if (prevCapacity1 != 0) newCapacity1 = Math.max(newCapacity1, 256);
                var oldContents1 = node1.contents;
                node1.contents = new Uint8Array(newCapacity1);
                if (node1.usedBytes > 0) node1.contents.set(oldContents1.subarray(0, node1.usedBytes), 0);
            },
            resizeFileStorage: function(node1, newSize1) {
                if (node1.usedBytes == newSize1) return;
                if (newSize1 == 0) {
                    node1.contents = null;
                    node1.usedBytes = 0;
                } else {
                    var oldContents1 = node1.contents;
                    node1.contents = new Uint8Array(newSize1);
                    if (oldContents1) node1.contents.set(oldContents1.subarray(0, Math.min(newSize1, node1.usedBytes)));
                    node1.usedBytes = newSize1;
                }
            },
            node_ops: {
                getattr: function(node1) {
                    var attr1 = {};
                    attr1.dev = FS.isChrdev(node1.mode) ? node1.id : 1;
                    attr1.ino = node1.id;
                    attr1.mode = node1.mode;
                    attr1.nlink = 1;
                    attr1.uid = 0;
                    attr1.gid = 0;
                    attr1.rdev = node1.rdev;
                    if (FS.isDir(node1.mode)) attr1.size = 4096;
                    else if (FS.isFile(node1.mode)) attr1.size = node1.usedBytes;
                    else if (FS.isLink(node1.mode)) attr1.size = node1.link.length;
                    else attr1.size = 0;
                    attr1.atime = new Date(node1.timestamp);
                    attr1.mtime = new Date(node1.timestamp);
                    attr1.ctime = new Date(node1.timestamp);
                    attr1.blksize = 4096;
                    attr1.blocks = Math.ceil(attr1.size / attr1.blksize);
                    return attr1;
                },
                setattr: function(node1, attr1) {
                    if (attr1.mode !== undefined) node1.mode = attr1.mode;
                    if (attr1.timestamp !== undefined) node1.timestamp = attr1.timestamp;
                    if (attr1.size !== undefined) MEMFS.resizeFileStorage(node1, attr1.size);
                },
                lookup: function(parent1, name1) {
                    throw FS.genericErrors[44];
                },
                mknod: function(parent1, name1, mode1, dev1) {
                    return MEMFS.createNode(parent1, name1, mode1, dev1);
                },
                rename: function(old_node1, new_dir1, new_name1) {
                    if (FS.isDir(old_node1.mode)) {
                        var new_node1;
                        try {
                            new_node1 = FS.lookupNode(new_dir1, new_name1);
                        } catch (e1) {}
                        if (new_node1) {
                            for(var i1 in new_node1.contents)throw new FS.ErrnoError(55);
                        }
                    }
                    delete old_node1.parent.contents[old_node1.name];
                    old_node1.parent.timestamp = Date.now();
                    old_node1.name = new_name1;
                    new_dir1.contents[new_name1] = old_node1;
                    new_dir1.timestamp = old_node1.parent.timestamp;
                    old_node1.parent = new_dir1;
                },
                unlink: function(parent1, name1) {
                    delete parent1.contents[name1];
                    parent1.timestamp = Date.now();
                },
                rmdir: function(parent1, name1) {
                    var node1 = FS.lookupNode(parent1, name1);
                    for(var i1 in node1.contents)throw new FS.ErrnoError(55);
                    delete parent1.contents[name1];
                    parent1.timestamp = Date.now();
                },
                readdir: function(node1) {
                    var entries1 = [
                        ".",
                        ".."
                    ];
                    for(var key1 in node1.contents){
                        if (!node1.contents.hasOwnProperty(key1)) continue;
                        entries1.push(key1);
                    }
                    return entries1;
                },
                symlink: function(parent1, newname1, oldpath1) {
                    var node1 = MEMFS.createNode(parent1, newname1, 41471, 0);
                    node1.link = oldpath1;
                    return node1;
                },
                readlink: function(node1) {
                    if (!FS.isLink(node1.mode)) throw new FS.ErrnoError(28);
                    return node1.link;
                }
            },
            stream_ops: {
                read: function(stream1, buffer1, offset1, length1, position1) {
                    var contents1 = stream1.node.contents;
                    if (position1 >= stream1.node.usedBytes) return 0;
                    var size1 = Math.min(stream1.node.usedBytes - position1, length1);
                    if (size1 > 8 && contents1.subarray) buffer1.set(contents1.subarray(position1, position1 + size1), offset1);
                    else for(var i1 = 0; i1 < size1; i1++)buffer1[offset1 + i1] = contents1[position1 + i1];
                    return size1;
                },
                write: function(stream1, buffer1, offset1, length1, position1, canOwn1) {
                    if (buffer1.buffer === GROWABLE_HEAP_I8().buffer) canOwn1 = false;
                    if (!length1) return 0;
                    var node1 = stream1.node;
                    node1.timestamp = Date.now();
                    if (buffer1.subarray && (!node1.contents || node1.contents.subarray)) {
                        if (canOwn1) {
                            node1.contents = buffer1.subarray(offset1, offset1 + length1);
                            node1.usedBytes = length1;
                            return length1;
                        } else if (node1.usedBytes === 0 && position1 === 0) {
                            node1.contents = buffer1.slice(offset1, offset1 + length1);
                            node1.usedBytes = length1;
                            return length1;
                        } else if (position1 + length1 <= node1.usedBytes) {
                            node1.contents.set(buffer1.subarray(offset1, offset1 + length1), position1);
                            return length1;
                        }
                    }
                    MEMFS.expandFileStorage(node1, position1 + length1);
                    if (node1.contents.subarray && buffer1.subarray) node1.contents.set(buffer1.subarray(offset1, offset1 + length1), position1);
                    else for(var i1 = 0; i1 < length1; i1++)node1.contents[position1 + i1] = buffer1[offset1 + i1];
                    node1.usedBytes = Math.max(node1.usedBytes, position1 + length1);
                    return length1;
                },
                llseek: function(stream1, offset1, whence1) {
                    var position1 = offset1;
                    if (whence1 === 1) position1 += stream1.position;
                    else if (whence1 === 2) {
                        if (FS.isFile(stream1.node.mode)) position1 += stream1.node.usedBytes;
                    }
                    if (position1 < 0) throw new FS.ErrnoError(28);
                    return position1;
                },
                allocate: function(stream1, offset1, length1) {
                    MEMFS.expandFileStorage(stream1.node, offset1 + length1);
                    stream1.node.usedBytes = Math.max(stream1.node.usedBytes, offset1 + length1);
                },
                mmap: function(stream1, length1, position1, prot1, flags1) {
                    if (!FS.isFile(stream1.node.mode)) throw new FS.ErrnoError(43);
                    var ptr1;
                    var allocated1;
                    var contents1 = stream1.node.contents;
                    if (!(flags1 & 2) && contents1.buffer === buffer) {
                        allocated1 = false;
                        ptr1 = contents1.byteOffset;
                    } else {
                        if (position1 > 0 || position1 + length1 < contents1.length) {
                            if (contents1.subarray) contents1 = contents1.subarray(position1, position1 + length1);
                            else contents1 = Array.prototype.slice.call(contents1, position1, position1 + length1);
                        }
                        allocated1 = true;
                        ptr1 = mmapAlloc(length1);
                        if (!ptr1) throw new FS.ErrnoError(48);
                        GROWABLE_HEAP_I8().set(contents1, ptr1);
                    }
                    return {
                        ptr: ptr1,
                        allocated: allocated1
                    };
                },
                msync: function(stream1, buffer1, offset1, length1, mmapFlags1) {
                    if (!FS.isFile(stream1.node.mode)) throw new FS.ErrnoError(43);
                    if (mmapFlags1 & 2) return 0;
                    var bytesWritten1 = MEMFS.stream_ops.write(stream1, buffer1, 0, length1, offset1, false);
                    return 0;
                }
            }
        };
        function asyncLoad(url1, onload1, onerror1, noRunDep1) {
            var dep1 = !noRunDep1 ? getUniqueRunDependency("al " + url1) : "";
            readAsync(url1, function(arrayBuffer1) {
                assert(arrayBuffer1, 'Loading data file "' + url1 + '" failed (no arrayBuffer).');
                onload1(new Uint8Array(arrayBuffer1));
                if (dep1) removeRunDependency(dep1);
            }, function(event1) {
                if (onerror1) onerror1();
                else throw 'Loading data file "' + url1 + '" failed.';
            });
            if (dep1) addRunDependency(dep1);
        }
        var IDBFS = {
            dbs: {},
            indexedDB: ()=>{
                if (typeof indexedDB != "undefined") return indexedDB;
                var ret1 = null;
                if (typeof window == "object") ret1 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                assert(ret1, "IDBFS used, but indexedDB not supported");
                return ret1;
            },
            DB_VERSION: 21,
            DB_STORE_NAME: "FILE_DATA",
            mount: function(mount1) {
                return MEMFS.mount.apply(null, arguments);
            },
            syncfs: (mount1, populate1, callback1)=>{
                IDBFS.getLocalSet(mount1, (err1, local1)=>{
                    if (err1) return callback1(err1);
                    IDBFS.getRemoteSet(mount1, (err1, remote1)=>{
                        if (err1) return callback1(err1);
                        var src1 = populate1 ? remote1 : local1;
                        var dst1 = populate1 ? local1 : remote1;
                        IDBFS.reconcile(src1, dst1, callback1);
                    });
                });
            },
            quit: ()=>{
                Object.values(IDBFS.dbs).forEach((value1)=>value1.close());
                IDBFS.dbs = {};
            },
            getDB: (name1, callback1)=>{
                var db1 = IDBFS.dbs[name1];
                if (db1) return callback1(null, db1);
                var req1;
                try {
                    req1 = IDBFS.indexedDB().open(name1, IDBFS.DB_VERSION);
                } catch (e1) {
                    return callback1(e1);
                }
                if (!req1) return callback1("Unable to connect to IndexedDB");
                req1.onupgradeneeded = (e1)=>{
                    var db1 = e1.target.result;
                    var transaction1 = e1.target.transaction;
                    var fileStore1;
                    if (db1.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) fileStore1 = transaction1.objectStore(IDBFS.DB_STORE_NAME);
                    else fileStore1 = db1.createObjectStore(IDBFS.DB_STORE_NAME);
                    if (!fileStore1.indexNames.contains("timestamp")) fileStore1.createIndex("timestamp", "timestamp", {
                        unique: false
                    });
                };
                req1.onsuccess = ()=>{
                    db1 = req1.result;
                    IDBFS.dbs[name1] = db1;
                    callback1(null, db1);
                };
                req1.onerror = (e1)=>{
                    callback1(this.error);
                    e1.preventDefault();
                };
            },
            getLocalSet: (mount1, callback1)=>{
                var entries1 = {};
                function isRealDir1(p1) {
                    return p1 !== "." && p1 !== "..";
                }
                function toAbsolute1(root1) {
                    return (p1)=>{
                        return PATH.join2(root1, p1);
                    };
                }
                var check1 = FS.readdir(mount1.mountpoint).filter(isRealDir1).map(toAbsolute1(mount1.mountpoint));
                while(check1.length){
                    var path1 = check1.pop();
                    var stat1;
                    try {
                        stat1 = FS.stat(path1);
                    } catch (e1) {
                        return callback1(e1);
                    }
                    if (FS.isDir(stat1.mode)) check1.push.apply(check1, FS.readdir(path1).filter(isRealDir1).map(toAbsolute1(path1)));
                    entries1[path1] = {
                        "timestamp": stat1.mtime
                    };
                }
                return callback1(null, {
                    type: "local",
                    entries: entries1
                });
            },
            getRemoteSet: (mount1, callback1)=>{
                var entries1 = {};
                IDBFS.getDB(mount1.mountpoint, (err1, db1)=>{
                    if (err1) return callback1(err1);
                    try {
                        var transaction1 = db1.transaction([
                            IDBFS.DB_STORE_NAME
                        ], "readonly");
                        transaction1.onerror = (e1)=>{
                            callback1(this.error);
                            e1.preventDefault();
                        };
                        var store1 = transaction1.objectStore(IDBFS.DB_STORE_NAME);
                        var index1 = store1.index("timestamp");
                        index1.openKeyCursor().onsuccess = (event1)=>{
                            var cursor1 = event1.target.result;
                            if (!cursor1) return callback1(null, {
                                type: "remote",
                                db: db1,
                                entries: entries1
                            });
                            entries1[cursor1.primaryKey] = {
                                "timestamp": cursor1.key
                            };
                            cursor1.continue();
                        };
                    } catch (e1) {
                        return callback1(e1);
                    }
                });
            },
            loadLocalEntry: (path1, callback1)=>{
                var stat1, node1;
                try {
                    var lookup1 = FS.lookupPath(path1);
                    node1 = lookup1.node;
                    stat1 = FS.stat(path1);
                } catch (e1) {
                    return callback1(e1);
                }
                if (FS.isDir(stat1.mode)) return callback1(null, {
                    "timestamp": stat1.mtime,
                    "mode": stat1.mode
                });
                else if (FS.isFile(stat1.mode)) {
                    node1.contents = MEMFS.getFileDataAsTypedArray(node1);
                    return callback1(null, {
                        "timestamp": stat1.mtime,
                        "mode": stat1.mode,
                        "contents": node1.contents
                    });
                } else return callback1(new Error("node type not supported"));
            },
            storeLocalEntry: (path1, entry1, callback1)=>{
                try {
                    if (FS.isDir(entry1["mode"])) FS.mkdirTree(path1, entry1["mode"]);
                    else if (FS.isFile(entry1["mode"])) FS.writeFile(path1, entry1["contents"], {
                        canOwn: true
                    });
                    else return callback1(new Error("node type not supported"));
                    FS.chmod(path1, entry1["mode"]);
                    FS.utime(path1, entry1["timestamp"], entry1["timestamp"]);
                } catch (e1) {
                    return callback1(e1);
                }
                callback1(null);
            },
            removeLocalEntry: (path1, callback1)=>{
                try {
                    var stat1 = FS.stat(path1);
                    if (FS.isDir(stat1.mode)) FS.rmdir(path1);
                    else if (FS.isFile(stat1.mode)) FS.unlink(path1);
                } catch (e1) {
                    return callback1(e1);
                }
                callback1(null);
            },
            loadRemoteEntry: (store1, path1, callback1)=>{
                var req1 = store1.get(path1);
                req1.onsuccess = (event1)=>{
                    callback1(null, event1.target.result);
                };
                req1.onerror = (e1)=>{
                    callback1(this.error);
                    e1.preventDefault();
                };
            },
            storeRemoteEntry: (store1, path1, entry1, callback1)=>{
                try {
                    var req1 = store1.put(entry1, path1);
                } catch (e1) {
                    callback1(e1);
                    return;
                }
                req1.onsuccess = ()=>{
                    callback1(null);
                };
                req1.onerror = (e1)=>{
                    callback1(this.error);
                    e1.preventDefault();
                };
            },
            removeRemoteEntry: (store1, path1, callback1)=>{
                var req1 = store1.delete(path1);
                req1.onsuccess = ()=>{
                    callback1(null);
                };
                req1.onerror = (e1)=>{
                    callback1(this.error);
                    e1.preventDefault();
                };
            },
            reconcile: (src1, dst1, callback1)=>{
                var total1 = 0;
                var create1 = [];
                Object.keys(src1.entries).forEach(function(key1) {
                    var e1 = src1.entries[key1];
                    var e21 = dst1.entries[key1];
                    if (!e21 || e1["timestamp"].getTime() != e21["timestamp"].getTime()) {
                        create1.push(key1);
                        total1++;
                    }
                });
                var remove1 = [];
                Object.keys(dst1.entries).forEach(function(key1) {
                    if (!src1.entries[key1]) {
                        remove1.push(key1);
                        total1++;
                    }
                });
                if (!total1) return callback1(null);
                var errored1 = false;
                var db1 = src1.type === "remote" ? src1.db : dst1.db;
                var transaction1 = db1.transaction([
                    IDBFS.DB_STORE_NAME
                ], "readwrite");
                var store1 = transaction1.objectStore(IDBFS.DB_STORE_NAME);
                function done1(err1) {
                    if (err1 && !errored1) {
                        errored1 = true;
                        return callback1(err1);
                    }
                }
                transaction1.onerror = (e1)=>{
                    done1(this.error);
                    e1.preventDefault();
                };
                transaction1.oncomplete = (e1)=>{
                    if (!errored1) callback1(null);
                };
                create1.sort().forEach((path1)=>{
                    if (dst1.type === "local") IDBFS.loadRemoteEntry(store1, path1, (err1, entry1)=>{
                        if (err1) return done1(err1);
                        IDBFS.storeLocalEntry(path1, entry1, done1);
                    });
                    else IDBFS.loadLocalEntry(path1, (err1, entry1)=>{
                        if (err1) return done1(err1);
                        IDBFS.storeRemoteEntry(store1, path1, entry1, done1);
                    });
                });
                remove1.sort().reverse().forEach((path1)=>{
                    if (dst1.type === "local") IDBFS.removeLocalEntry(path1, done1);
                    else IDBFS.removeRemoteEntry(store1, path1, done1);
                });
            }
        };
        var FS = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: "/",
            initialized: false,
            ignorePermissions: true,
            ErrnoError: null,
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            lookupPath: (path1, opts1 = {})=>{
                path1 = PATH_FS.resolve(FS.cwd(), path1);
                if (!path1) return {
                    path: "",
                    node: null
                };
                var defaults1 = {
                    follow_mount: true,
                    recurse_count: 0
                };
                opts1 = Object.assign(defaults1, opts1);
                if (opts1.recurse_count > 8) throw new FS.ErrnoError(32);
                var parts1 = PATH.normalizeArray(path1.split("/").filter((p1)=>!!p1), false);
                var current1 = FS.root;
                var current_path1 = "/";
                for(var i1 = 0; i1 < parts1.length; i1++){
                    var islast1 = i1 === parts1.length - 1;
                    if (islast1 && opts1.parent) break;
                    current1 = FS.lookupNode(current1, parts1[i1]);
                    current_path1 = PATH.join2(current_path1, parts1[i1]);
                    if (FS.isMountpoint(current1)) {
                        if (!islast1 || islast1 && opts1.follow_mount) current1 = current1.mounted.root;
                    }
                    if (!islast1 || opts1.follow) {
                        var count1 = 0;
                        while(FS.isLink(current1.mode)){
                            var link1 = FS.readlink(current_path1);
                            current_path1 = PATH_FS.resolve(PATH.dirname(current_path1), link1);
                            var lookup1 = FS.lookupPath(current_path1, {
                                recurse_count: opts1.recurse_count + 1
                            });
                            current1 = lookup1.node;
                            if (count1++ > 40) throw new FS.ErrnoError(32);
                        }
                    }
                }
                return {
                    path: current_path1,
                    node: current1
                };
            },
            getPath: (node1)=>{
                var path1;
                while(true){
                    if (FS.isRoot(node1)) {
                        var mount1 = node1.mount.mountpoint;
                        if (!path1) return mount1;
                        return mount1[mount1.length - 1] !== "/" ? mount1 + "/" + path1 : mount1 + path1;
                    }
                    path1 = path1 ? node1.name + "/" + path1 : node1.name;
                    node1 = node1.parent;
                }
            },
            hashName: (parentid1, name1)=>{
                var hash1 = 0;
                for(var i1 = 0; i1 < name1.length; i1++)hash1 = (hash1 << 5) - hash1 + name1.charCodeAt(i1) | 0;
                return (parentid1 + hash1 >>> 0) % FS.nameTable.length;
            },
            hashAddNode: (node1)=>{
                var hash1 = FS.hashName(node1.parent.id, node1.name);
                node1.name_next = FS.nameTable[hash1];
                FS.nameTable[hash1] = node1;
            },
            hashRemoveNode: (node1)=>{
                var hash1 = FS.hashName(node1.parent.id, node1.name);
                if (FS.nameTable[hash1] === node1) FS.nameTable[hash1] = node1.name_next;
                else {
                    var current1 = FS.nameTable[hash1];
                    while(current1){
                        if (current1.name_next === node1) {
                            current1.name_next = node1.name_next;
                            break;
                        }
                        current1 = current1.name_next;
                    }
                }
            },
            lookupNode: (parent1, name1)=>{
                var errCode1 = FS.mayLookup(parent1);
                if (errCode1) throw new FS.ErrnoError(errCode1, parent1);
                var hash1 = FS.hashName(parent1.id, name1);
                for(var node1 = FS.nameTable[hash1]; node1; node1 = node1.name_next){
                    var nodeName1 = node1.name;
                    if (node1.parent.id === parent1.id && nodeName1 === name1) return node1;
                }
                return FS.lookup(parent1, name1);
            },
            createNode: (parent1, name1, mode1, rdev1)=>{
                var node1 = new FS.FSNode(parent1, name1, mode1, rdev1);
                FS.hashAddNode(node1);
                return node1;
            },
            destroyNode: (node1)=>{
                FS.hashRemoveNode(node1);
            },
            isRoot: (node1)=>{
                return node1 === node1.parent;
            },
            isMountpoint: (node1)=>{
                return !!node1.mounted;
            },
            isFile: (mode1)=>{
                return (mode1 & 61440) === 32768;
            },
            isDir: (mode1)=>{
                return (mode1 & 61440) === 16384;
            },
            isLink: (mode1)=>{
                return (mode1 & 61440) === 40960;
            },
            isChrdev: (mode1)=>{
                return (mode1 & 61440) === 8192;
            },
            isBlkdev: (mode1)=>{
                return (mode1 & 61440) === 24576;
            },
            isFIFO: (mode1)=>{
                return (mode1 & 61440) === 4096;
            },
            isSocket: (mode1)=>{
                return (mode1 & 49152) === 49152;
            },
            flagModes: {
                "r": 0,
                "r+": 2,
                "w": 577,
                "w+": 578,
                "a": 1089,
                "a+": 1090
            },
            modeStringToFlags: (str1)=>{
                var flags1 = FS.flagModes[str1];
                if (typeof flags1 == "undefined") throw new Error("Unknown file open mode: " + str1);
                return flags1;
            },
            flagsToPermissionString: (flag1)=>{
                var perms1 = [
                    "r",
                    "w",
                    "rw"
                ][flag1 & 3];
                if (flag1 & 512) perms1 += "w";
                return perms1;
            },
            nodePermissions: (node1, perms1)=>{
                if (FS.ignorePermissions) return 0;
                if (perms1.includes("r") && !(node1.mode & 292)) return 2;
                else if (perms1.includes("w") && !(node1.mode & 146)) return 2;
                else if (perms1.includes("x") && !(node1.mode & 73)) return 2;
                return 0;
            },
            mayLookup: (dir1)=>{
                var errCode1 = FS.nodePermissions(dir1, "x");
                if (errCode1) return errCode1;
                if (!dir1.node_ops.lookup) return 2;
                return 0;
            },
            mayCreate: (dir1, name1)=>{
                try {
                    var node1 = FS.lookupNode(dir1, name1);
                    return 20;
                } catch (e1) {}
                return FS.nodePermissions(dir1, "wx");
            },
            mayDelete: (dir1, name1, isdir1)=>{
                var node1;
                try {
                    node1 = FS.lookupNode(dir1, name1);
                } catch (e1) {
                    return e1.errno;
                }
                var errCode1 = FS.nodePermissions(dir1, "wx");
                if (errCode1) return errCode1;
                if (isdir1) {
                    if (!FS.isDir(node1.mode)) return 54;
                    if (FS.isRoot(node1) || FS.getPath(node1) === FS.cwd()) return 10;
                } else {
                    if (FS.isDir(node1.mode)) return 31;
                }
                return 0;
            },
            mayOpen: (node1, flags1)=>{
                if (!node1) return 44;
                if (FS.isLink(node1.mode)) return 32;
                else if (FS.isDir(node1.mode)) {
                    if (FS.flagsToPermissionString(flags1) !== "r" || flags1 & 512) return 31;
                }
                return FS.nodePermissions(node1, FS.flagsToPermissionString(flags1));
            },
            MAX_OPEN_FDS: 4096,
            nextfd: (fd_start1 = 0, fd_end1 = FS.MAX_OPEN_FDS)=>{
                for(var fd1 = fd_start1; fd1 <= fd_end1; fd1++){
                    if (!FS.streams[fd1]) return fd1;
                }
                throw new FS.ErrnoError(33);
            },
            getStream: (fd1)=>FS.streams[fd1],
            createStream: (stream1, fd_start1, fd_end1)=>{
                if (!FS.FSStream) {
                    FS.FSStream = function() {
                        this.shared = {};
                    };
                    FS.FSStream.prototype = {};
                    Object.defineProperties(FS.FSStream.prototype, {
                        object: {
                            get: function() {
                                return this.node;
                            },
                            set: function(val1) {
                                this.node = val1;
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
                        },
                        flags: {
                            get: function() {
                                return this.shared.flags;
                            },
                            set: function(val1) {
                                this.shared.flags = val1;
                            }
                        },
                        position: {
                            get: function() {
                                return this.shared.position;
                            },
                            set: function(val1) {
                                this.shared.position = val1;
                            }
                        }
                    });
                }
                stream1 = Object.assign(new FS.FSStream, stream1);
                var fd1 = FS.nextfd(fd_start1, fd_end1);
                stream1.fd = fd1;
                FS.streams[fd1] = stream1;
                return stream1;
            },
            closeStream: (fd1)=>{
                FS.streams[fd1] = null;
            },
            chrdev_stream_ops: {
                open: (stream1)=>{
                    var device1 = FS.getDevice(stream1.node.rdev);
                    stream1.stream_ops = device1.stream_ops;
                    if (stream1.stream_ops.open) stream1.stream_ops.open(stream1);
                },
                llseek: ()=>{
                    throw new FS.ErrnoError(70);
                }
            },
            major: (dev1)=>dev1 >> 8,
            minor: (dev1)=>dev1 & 255,
            makedev: (ma1, mi1)=>ma1 << 8 | mi1,
            registerDevice: (dev1, ops1)=>{
                FS.devices[dev1] = {
                    stream_ops: ops1
                };
            },
            getDevice: (dev1)=>FS.devices[dev1],
            getMounts: (mount1)=>{
                var mounts1 = [];
                var check1 = [
                    mount1
                ];
                while(check1.length){
                    var m1 = check1.pop();
                    mounts1.push(m1);
                    check1.push.apply(check1, m1.mounts);
                }
                return mounts1;
            },
            syncfs: (populate1, callback1)=>{
                if (typeof populate1 == "function") {
                    callback1 = populate1;
                    populate1 = false;
                }
                FS.syncFSRequests++;
                if (FS.syncFSRequests > 1) err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                var mounts1 = FS.getMounts(FS.root.mount);
                var completed1 = 0;
                function doCallback1(errCode1) {
                    FS.syncFSRequests--;
                    return callback1(errCode1);
                }
                function done1(errCode1) {
                    if (errCode1) {
                        if (!done1.errored) {
                            done1.errored = true;
                            return doCallback1(errCode1);
                        }
                        return;
                    }
                    if (++completed1 >= mounts1.length) doCallback1(null);
                }
                mounts1.forEach((mount1)=>{
                    if (!mount1.type.syncfs) return done1(null);
                    mount1.type.syncfs(mount1, populate1, done1);
                });
            },
            mount: (type1, opts1, mountpoint1)=>{
                var root1 = mountpoint1 === "/";
                var pseudo1 = !mountpoint1;
                var node1;
                if (root1 && FS.root) throw new FS.ErrnoError(10);
                else if (!root1 && !pseudo1) {
                    var lookup1 = FS.lookupPath(mountpoint1, {
                        follow_mount: false
                    });
                    mountpoint1 = lookup1.path;
                    node1 = lookup1.node;
                    if (FS.isMountpoint(node1)) throw new FS.ErrnoError(10);
                    if (!FS.isDir(node1.mode)) throw new FS.ErrnoError(54);
                }
                var mount1 = {
                    type: type1,
                    opts: opts1,
                    mountpoint: mountpoint1,
                    mounts: []
                };
                var mountRoot1 = type1.mount(mount1);
                mountRoot1.mount = mount1;
                mount1.root = mountRoot1;
                if (root1) FS.root = mountRoot1;
                else if (node1) {
                    node1.mounted = mount1;
                    if (node1.mount) node1.mount.mounts.push(mount1);
                }
                return mountRoot1;
            },
            unmount: (mountpoint1)=>{
                var lookup1 = FS.lookupPath(mountpoint1, {
                    follow_mount: false
                });
                if (!FS.isMountpoint(lookup1.node)) throw new FS.ErrnoError(28);
                var node1 = lookup1.node;
                var mount1 = node1.mounted;
                var mounts1 = FS.getMounts(mount1);
                Object.keys(FS.nameTable).forEach((hash1)=>{
                    var current1 = FS.nameTable[hash1];
                    while(current1){
                        var next1 = current1.name_next;
                        if (mounts1.includes(current1.mount)) FS.destroyNode(current1);
                        current1 = next1;
                    }
                });
                node1.mounted = null;
                var idx1 = node1.mount.mounts.indexOf(mount1);
                node1.mount.mounts.splice(idx1, 1);
            },
            lookup: (parent1, name1)=>{
                return parent1.node_ops.lookup(parent1, name1);
            },
            mknod: (path1, mode1, dev1)=>{
                var lookup1 = FS.lookupPath(path1, {
                    parent: true
                });
                var parent1 = lookup1.node;
                var name1 = PATH.basename(path1);
                if (!name1 || name1 === "." || name1 === "..") throw new FS.ErrnoError(28);
                var errCode1 = FS.mayCreate(parent1, name1);
                if (errCode1) throw new FS.ErrnoError(errCode1);
                if (!parent1.node_ops.mknod) throw new FS.ErrnoError(63);
                return parent1.node_ops.mknod(parent1, name1, mode1, dev1);
            },
            create: (path1, mode1)=>{
                mode1 = mode1 !== undefined ? mode1 : 438;
                mode1 &= 4095;
                mode1 |= 32768;
                return FS.mknod(path1, mode1, 0);
            },
            mkdir: (path1, mode1)=>{
                mode1 = mode1 !== undefined ? mode1 : 511;
                mode1 &= 1023;
                mode1 |= 16384;
                return FS.mknod(path1, mode1, 0);
            },
            mkdirTree: (path1, mode1)=>{
                var dirs1 = path1.split("/");
                var d1 = "";
                for(var i1 = 0; i1 < dirs1.length; ++i1){
                    if (!dirs1[i1]) continue;
                    d1 += "/" + dirs1[i1];
                    try {
                        FS.mkdir(d1, mode1);
                    } catch (e1) {
                        if (e1.errno != 20) throw e1;
                    }
                }
            },
            mkdev: (path1, mode1, dev1)=>{
                if (typeof dev1 == "undefined") {
                    dev1 = mode1;
                    mode1 = 438;
                }
                mode1 |= 8192;
                return FS.mknod(path1, mode1, dev1);
            },
            symlink: (oldpath1, newpath1)=>{
                if (!PATH_FS.resolve(oldpath1)) throw new FS.ErrnoError(44);
                var lookup1 = FS.lookupPath(newpath1, {
                    parent: true
                });
                var parent1 = lookup1.node;
                if (!parent1) throw new FS.ErrnoError(44);
                var newname1 = PATH.basename(newpath1);
                var errCode1 = FS.mayCreate(parent1, newname1);
                if (errCode1) throw new FS.ErrnoError(errCode1);
                if (!parent1.node_ops.symlink) throw new FS.ErrnoError(63);
                return parent1.node_ops.symlink(parent1, newname1, oldpath1);
            },
            rename: (old_path1, new_path1)=>{
                var old_dirname1 = PATH.dirname(old_path1);
                var new_dirname1 = PATH.dirname(new_path1);
                var old_name1 = PATH.basename(old_path1);
                var new_name1 = PATH.basename(new_path1);
                var lookup1, old_dir1, new_dir1;
                lookup1 = FS.lookupPath(old_path1, {
                    parent: true
                });
                old_dir1 = lookup1.node;
                lookup1 = FS.lookupPath(new_path1, {
                    parent: true
                });
                new_dir1 = lookup1.node;
                if (!old_dir1 || !new_dir1) throw new FS.ErrnoError(44);
                if (old_dir1.mount !== new_dir1.mount) throw new FS.ErrnoError(75);
                var old_node1 = FS.lookupNode(old_dir1, old_name1);
                var relative1 = PATH_FS.relative(old_path1, new_dirname1);
                if (relative1.charAt(0) !== ".") throw new FS.ErrnoError(28);
                relative1 = PATH_FS.relative(new_path1, old_dirname1);
                if (relative1.charAt(0) !== ".") throw new FS.ErrnoError(55);
                var new_node1;
                try {
                    new_node1 = FS.lookupNode(new_dir1, new_name1);
                } catch (e1) {}
                if (old_node1 === new_node1) return;
                var isdir1 = FS.isDir(old_node1.mode);
                var errCode1 = FS.mayDelete(old_dir1, old_name1, isdir1);
                if (errCode1) throw new FS.ErrnoError(errCode1);
                errCode1 = new_node1 ? FS.mayDelete(new_dir1, new_name1, isdir1) : FS.mayCreate(new_dir1, new_name1);
                if (errCode1) throw new FS.ErrnoError(errCode1);
                if (!old_dir1.node_ops.rename) throw new FS.ErrnoError(63);
                if (FS.isMountpoint(old_node1) || new_node1 && FS.isMountpoint(new_node1)) throw new FS.ErrnoError(10);
                if (new_dir1 !== old_dir1) {
                    errCode1 = FS.nodePermissions(old_dir1, "w");
                    if (errCode1) throw new FS.ErrnoError(errCode1);
                }
                FS.hashRemoveNode(old_node1);
                try {
                    old_dir1.node_ops.rename(old_node1, new_dir1, new_name1);
                } catch (e1) {
                    throw e1;
                } finally{
                    FS.hashAddNode(old_node1);
                }
            },
            rmdir: (path1)=>{
                var lookup1 = FS.lookupPath(path1, {
                    parent: true
                });
                var parent1 = lookup1.node;
                var name1 = PATH.basename(path1);
                var node1 = FS.lookupNode(parent1, name1);
                var errCode1 = FS.mayDelete(parent1, name1, true);
                if (errCode1) throw new FS.ErrnoError(errCode1);
                if (!parent1.node_ops.rmdir) throw new FS.ErrnoError(63);
                if (FS.isMountpoint(node1)) throw new FS.ErrnoError(10);
                parent1.node_ops.rmdir(parent1, name1);
                FS.destroyNode(node1);
            },
            readdir: (path1)=>{
                var lookup1 = FS.lookupPath(path1, {
                    follow: true
                });
                var node1 = lookup1.node;
                if (!node1.node_ops.readdir) throw new FS.ErrnoError(54);
                return node1.node_ops.readdir(node1);
            },
            unlink: (path1)=>{
                var lookup1 = FS.lookupPath(path1, {
                    parent: true
                });
                var parent1 = lookup1.node;
                if (!parent1) throw new FS.ErrnoError(44);
                var name1 = PATH.basename(path1);
                var node1 = FS.lookupNode(parent1, name1);
                var errCode1 = FS.mayDelete(parent1, name1, false);
                if (errCode1) throw new FS.ErrnoError(errCode1);
                if (!parent1.node_ops.unlink) throw new FS.ErrnoError(63);
                if (FS.isMountpoint(node1)) throw new FS.ErrnoError(10);
                parent1.node_ops.unlink(parent1, name1);
                FS.destroyNode(node1);
            },
            readlink: (path1)=>{
                var lookup1 = FS.lookupPath(path1);
                var link1 = lookup1.node;
                if (!link1) throw new FS.ErrnoError(44);
                if (!link1.node_ops.readlink) throw new FS.ErrnoError(28);
                return PATH_FS.resolve(FS.getPath(link1.parent), link1.node_ops.readlink(link1));
            },
            stat: (path1, dontFollow1)=>{
                var lookup1 = FS.lookupPath(path1, {
                    follow: !dontFollow1
                });
                var node1 = lookup1.node;
                if (!node1) throw new FS.ErrnoError(44);
                if (!node1.node_ops.getattr) throw new FS.ErrnoError(63);
                return node1.node_ops.getattr(node1);
            },
            lstat: (path1)=>{
                return FS.stat(path1, true);
            },
            chmod: (path1, mode1, dontFollow1)=>{
                var node1;
                if (typeof path1 == "string") {
                    var lookup1 = FS.lookupPath(path1, {
                        follow: !dontFollow1
                    });
                    node1 = lookup1.node;
                } else node1 = path1;
                if (!node1.node_ops.setattr) throw new FS.ErrnoError(63);
                node1.node_ops.setattr(node1, {
                    mode: mode1 & 4095 | node1.mode & -4096,
                    timestamp: Date.now()
                });
            },
            lchmod: (path1, mode1)=>{
                FS.chmod(path1, mode1, true);
            },
            fchmod: (fd1, mode1)=>{
                var stream1 = FS.getStream(fd1);
                if (!stream1) throw new FS.ErrnoError(8);
                FS.chmod(stream1.node, mode1);
            },
            chown: (path1, uid1, gid1, dontFollow1)=>{
                var node1;
                if (typeof path1 == "string") {
                    var lookup1 = FS.lookupPath(path1, {
                        follow: !dontFollow1
                    });
                    node1 = lookup1.node;
                } else node1 = path1;
                if (!node1.node_ops.setattr) throw new FS.ErrnoError(63);
                node1.node_ops.setattr(node1, {
                    timestamp: Date.now()
                });
            },
            lchown: (path1, uid1, gid1)=>{
                FS.chown(path1, uid1, gid1, true);
            },
            fchown: (fd1, uid1, gid1)=>{
                var stream1 = FS.getStream(fd1);
                if (!stream1) throw new FS.ErrnoError(8);
                FS.chown(stream1.node, uid1, gid1);
            },
            truncate: (path1, len1)=>{
                if (len1 < 0) throw new FS.ErrnoError(28);
                var node1;
                if (typeof path1 == "string") {
                    var lookup1 = FS.lookupPath(path1, {
                        follow: true
                    });
                    node1 = lookup1.node;
                } else node1 = path1;
                if (!node1.node_ops.setattr) throw new FS.ErrnoError(63);
                if (FS.isDir(node1.mode)) throw new FS.ErrnoError(31);
                if (!FS.isFile(node1.mode)) throw new FS.ErrnoError(28);
                var errCode1 = FS.nodePermissions(node1, "w");
                if (errCode1) throw new FS.ErrnoError(errCode1);
                node1.node_ops.setattr(node1, {
                    size: len1,
                    timestamp: Date.now()
                });
            },
            ftruncate: (fd1, len1)=>{
                var stream1 = FS.getStream(fd1);
                if (!stream1) throw new FS.ErrnoError(8);
                if ((stream1.flags & 2097155) === 0) throw new FS.ErrnoError(28);
                FS.truncate(stream1.node, len1);
            },
            utime: (path1, atime1, mtime1)=>{
                var lookup1 = FS.lookupPath(path1, {
                    follow: true
                });
                var node1 = lookup1.node;
                node1.node_ops.setattr(node1, {
                    timestamp: Math.max(atime1, mtime1)
                });
            },
            open: (path1, flags1, mode1)=>{
                if (path1 === "") throw new FS.ErrnoError(44);
                flags1 = typeof flags1 == "string" ? FS.modeStringToFlags(flags1) : flags1;
                mode1 = typeof mode1 == "undefined" ? 438 : mode1;
                if (flags1 & 64) mode1 = mode1 & 4095 | 32768;
                else mode1 = 0;
                var node1;
                if (typeof path1 == "object") node1 = path1;
                else {
                    path1 = PATH.normalize(path1);
                    try {
                        var lookup1 = FS.lookupPath(path1, {
                            follow: !(flags1 & 131072)
                        });
                        node1 = lookup1.node;
                    } catch (e1) {}
                }
                var created1 = false;
                if (flags1 & 64) {
                    if (node1) {
                        if (flags1 & 128) throw new FS.ErrnoError(20);
                    } else {
                        node1 = FS.mknod(path1, mode1, 0);
                        created1 = true;
                    }
                }
                if (!node1) throw new FS.ErrnoError(44);
                if (FS.isChrdev(node1.mode)) flags1 &= -513;
                if (flags1 & 65536 && !FS.isDir(node1.mode)) throw new FS.ErrnoError(54);
                if (!created1) {
                    var errCode1 = FS.mayOpen(node1, flags1);
                    if (errCode1) throw new FS.ErrnoError(errCode1);
                }
                if (flags1 & 512 && !created1) FS.truncate(node1, 0);
                flags1 &= -131713;
                var stream1 = FS.createStream({
                    node: node1,
                    path: FS.getPath(node1),
                    flags: flags1,
                    seekable: true,
                    position: 0,
                    stream_ops: node1.stream_ops,
                    ungotten: [],
                    error: false
                });
                if (stream1.stream_ops.open) stream1.stream_ops.open(stream1);
                if (Module["logReadFiles"] && !(flags1 & 1)) {
                    if (!FS.readFiles) FS.readFiles = {};
                    if (!(path1 in FS.readFiles)) FS.readFiles[path1] = 1;
                }
                return stream1;
            },
            close: (stream1)=>{
                if (FS.isClosed(stream1)) throw new FS.ErrnoError(8);
                if (stream1.getdents) stream1.getdents = null;
                try {
                    if (stream1.stream_ops.close) stream1.stream_ops.close(stream1);
                } catch (e1) {
                    throw e1;
                } finally{
                    FS.closeStream(stream1.fd);
                }
                stream1.fd = null;
            },
            isClosed: (stream1)=>{
                return stream1.fd === null;
            },
            llseek: (stream1, offset1, whence1)=>{
                if (FS.isClosed(stream1)) throw new FS.ErrnoError(8);
                if (!stream1.seekable || !stream1.stream_ops.llseek) throw new FS.ErrnoError(70);
                if (whence1 != 0 && whence1 != 1 && whence1 != 2) throw new FS.ErrnoError(28);
                stream1.position = stream1.stream_ops.llseek(stream1, offset1, whence1);
                stream1.ungotten = [];
                return stream1.position;
            },
            read: (stream1, buffer1, offset1, length1, position1)=>{
                if (length1 < 0 || position1 < 0) throw new FS.ErrnoError(28);
                if (FS.isClosed(stream1)) throw new FS.ErrnoError(8);
                if ((stream1.flags & 2097155) === 1) throw new FS.ErrnoError(8);
                if (FS.isDir(stream1.node.mode)) throw new FS.ErrnoError(31);
                if (!stream1.stream_ops.read) throw new FS.ErrnoError(28);
                var seeking1 = typeof position1 != "undefined";
                if (!seeking1) position1 = stream1.position;
                else if (!stream1.seekable) throw new FS.ErrnoError(70);
                var bytesRead1 = stream1.stream_ops.read(stream1, buffer1, offset1, length1, position1);
                if (!seeking1) stream1.position += bytesRead1;
                return bytesRead1;
            },
            write: (stream1, buffer1, offset1, length1, position1, canOwn1)=>{
                if (length1 < 0 || position1 < 0) throw new FS.ErrnoError(28);
                if (FS.isClosed(stream1)) throw new FS.ErrnoError(8);
                if ((stream1.flags & 2097155) === 0) throw new FS.ErrnoError(8);
                if (FS.isDir(stream1.node.mode)) throw new FS.ErrnoError(31);
                if (!stream1.stream_ops.write) throw new FS.ErrnoError(28);
                if (stream1.seekable && stream1.flags & 1024) FS.llseek(stream1, 0, 2);
                var seeking1 = typeof position1 != "undefined";
                if (!seeking1) position1 = stream1.position;
                else if (!stream1.seekable) throw new FS.ErrnoError(70);
                var bytesWritten1 = stream1.stream_ops.write(stream1, buffer1, offset1, length1, position1, canOwn1);
                if (!seeking1) stream1.position += bytesWritten1;
                return bytesWritten1;
            },
            allocate: (stream1, offset1, length1)=>{
                if (FS.isClosed(stream1)) throw new FS.ErrnoError(8);
                if (offset1 < 0 || length1 <= 0) throw new FS.ErrnoError(28);
                if ((stream1.flags & 2097155) === 0) throw new FS.ErrnoError(8);
                if (!FS.isFile(stream1.node.mode) && !FS.isDir(stream1.node.mode)) throw new FS.ErrnoError(43);
                if (!stream1.stream_ops.allocate) throw new FS.ErrnoError(138);
                stream1.stream_ops.allocate(stream1, offset1, length1);
            },
            mmap: (stream1, length1, position1, prot1, flags1)=>{
                if ((prot1 & 2) !== 0 && (flags1 & 2) === 0 && (stream1.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
                if ((stream1.flags & 2097155) === 1) throw new FS.ErrnoError(2);
                if (!stream1.stream_ops.mmap) throw new FS.ErrnoError(43);
                return stream1.stream_ops.mmap(stream1, length1, position1, prot1, flags1);
            },
            msync: (stream1, buffer1, offset1, length1, mmapFlags1)=>{
                if (!stream1 || !stream1.stream_ops.msync) return 0;
                return stream1.stream_ops.msync(stream1, buffer1, offset1, length1, mmapFlags1);
            },
            munmap: (stream1)=>0,
            ioctl: (stream1, cmd1, arg1)=>{
                if (!stream1.stream_ops.ioctl) throw new FS.ErrnoError(59);
                return stream1.stream_ops.ioctl(stream1, cmd1, arg1);
            },
            readFile: (path1, opts1 = {})=>{
                opts1.flags = opts1.flags || 0;
                opts1.encoding = opts1.encoding || "binary";
                if (opts1.encoding !== "utf8" && opts1.encoding !== "binary") throw new Error('Invalid encoding type "' + opts1.encoding + '"');
                var ret1;
                var stream1 = FS.open(path1, opts1.flags);
                var stat1 = FS.stat(path1);
                var length1 = stat1.size;
                var buf1 = new Uint8Array(length1);
                FS.read(stream1, buf1, 0, length1, 0);
                if (opts1.encoding === "utf8") ret1 = UTF8ArrayToString(buf1, 0);
                else if (opts1.encoding === "binary") ret1 = buf1;
                FS.close(stream1);
                return ret1;
            },
            writeFile: (path1, data1, opts1 = {})=>{
                opts1.flags = opts1.flags || 577;
                var stream1 = FS.open(path1, opts1.flags, opts1.mode);
                if (typeof data1 == "string") {
                    var buf1 = new Uint8Array(lengthBytesUTF8(data1) + 1);
                    var actualNumBytes1 = stringToUTF8Array(data1, buf1, 0, buf1.length);
                    FS.write(stream1, buf1, 0, actualNumBytes1, undefined, opts1.canOwn);
                } else if (ArrayBuffer.isView(data1)) FS.write(stream1, data1, 0, data1.byteLength, undefined, opts1.canOwn);
                else throw new Error("Unsupported data type");
                FS.close(stream1);
            },
            cwd: ()=>FS.currentPath,
            chdir: (path1)=>{
                var lookup1 = FS.lookupPath(path1, {
                    follow: true
                });
                if (lookup1.node === null) throw new FS.ErrnoError(44);
                if (!FS.isDir(lookup1.node.mode)) throw new FS.ErrnoError(54);
                var errCode1 = FS.nodePermissions(lookup1.node, "x");
                if (errCode1) throw new FS.ErrnoError(errCode1);
                FS.currentPath = lookup1.path;
            },
            createDefaultDirectories: ()=>{
                FS.mkdir("/tmp");
                FS.mkdir("/home");
                FS.mkdir("/home/web_user");
            },
            createDefaultDevices: ()=>{
                FS.mkdir("/dev");
                FS.registerDevice(FS.makedev(1, 3), {
                    read: ()=>0,
                    write: (stream1, buffer1, offset1, length1, pos1)=>length1
                });
                FS.mkdev("/dev/null", FS.makedev(1, 3));
                TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
                TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
                FS.mkdev("/dev/tty", FS.makedev(5, 0));
                FS.mkdev("/dev/tty1", FS.makedev(6, 0));
                var random_device1 = getRandomDevice();
                FS.createDevice("/dev", "random", random_device1);
                FS.createDevice("/dev", "urandom", random_device1);
                FS.mkdir("/dev/shm");
                FS.mkdir("/dev/shm/tmp");
            },
            createSpecialDirectories: ()=>{
                FS.mkdir("/proc");
                var proc_self1 = FS.mkdir("/proc/self");
                FS.mkdir("/proc/self/fd");
                FS.mount({
                    mount: ()=>{
                        var node1 = FS.createNode(proc_self1, "fd", 16895, 73);
                        node1.node_ops = {
                            lookup: (parent1, name1)=>{
                                var fd1 = +name1;
                                var stream1 = FS.getStream(fd1);
                                if (!stream1) throw new FS.ErrnoError(8);
                                var ret1 = {
                                    parent: null,
                                    mount: {
                                        mountpoint: "fake"
                                    },
                                    node_ops: {
                                        readlink: ()=>stream1.path
                                    }
                                };
                                ret1.parent = ret1;
                                return ret1;
                            }
                        };
                        return node1;
                    }
                }, {}, "/proc/self/fd");
            },
            createStandardStreams: ()=>{
                if (Module["stdin"]) FS.createDevice("/dev", "stdin", Module["stdin"]);
                else FS.symlink("/dev/tty", "/dev/stdin");
                if (Module["stdout"]) FS.createDevice("/dev", "stdout", null, Module["stdout"]);
                else FS.symlink("/dev/tty", "/dev/stdout");
                if (Module["stderr"]) FS.createDevice("/dev", "stderr", null, Module["stderr"]);
                else FS.symlink("/dev/tty1", "/dev/stderr");
                var stdin1 = FS.open("/dev/stdin", 0);
                var stdout1 = FS.open("/dev/stdout", 1);
                var stderr1 = FS.open("/dev/stderr", 1);
            },
            ensureErrnoError: ()=>{
                if (FS.ErrnoError) return;
                FS.ErrnoError = function ErrnoError1(errno1, node1) {
                    this.node = node1;
                    this.setErrno = function(errno1) {
                        this.errno = errno1;
                    };
                    this.setErrno(errno1);
                    this.message = "FS error";
                };
                FS.ErrnoError.prototype = new Error;
                FS.ErrnoError.prototype.constructor = FS.ErrnoError;
                [
                    44
                ].forEach((code1)=>{
                    FS.genericErrors[code1] = new FS.ErrnoError(code1);
                    FS.genericErrors[code1].stack = "<generic error, no stack>";
                });
            },
            staticInit: ()=>{
                FS.ensureErrnoError();
                FS.nameTable = new Array(4096);
                FS.mount(MEMFS, {}, "/");
                FS.createDefaultDirectories();
                FS.createDefaultDevices();
                FS.createSpecialDirectories();
                FS.filesystems = {
                    "MEMFS": MEMFS,
                    "IDBFS": IDBFS
                };
            },
            init: (input1, output1, error1)=>{
                FS.init.initialized = true;
                FS.ensureErrnoError();
                Module["stdin"] = input1 || Module["stdin"];
                Module["stdout"] = output1 || Module["stdout"];
                Module["stderr"] = error1 || Module["stderr"];
                FS.createStandardStreams();
            },
            quit: ()=>{
                FS.init.initialized = false;
                _fflush(0);
                for(var i1 = 0; i1 < FS.streams.length; i1++){
                    var stream1 = FS.streams[i1];
                    if (!stream1) continue;
                    FS.close(stream1);
                }
            },
            getMode: (canRead1, canWrite1)=>{
                var mode1 = 0;
                if (canRead1) mode1 |= 365;
                if (canWrite1) mode1 |= 146;
                return mode1;
            },
            findObject: (path1, dontResolveLastLink1)=>{
                var ret1 = FS.analyzePath(path1, dontResolveLastLink1);
                if (ret1.exists) return ret1.object;
                else return null;
            },
            analyzePath: (path1, dontResolveLastLink1)=>{
                try {
                    var lookup1 = FS.lookupPath(path1, {
                        follow: !dontResolveLastLink1
                    });
                    path1 = lookup1.path;
                } catch (e1) {}
                var ret1 = {
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
                    var lookup1 = FS.lookupPath(path1, {
                        parent: true
                    });
                    ret1.parentExists = true;
                    ret1.parentPath = lookup1.path;
                    ret1.parentObject = lookup1.node;
                    ret1.name = PATH.basename(path1);
                    lookup1 = FS.lookupPath(path1, {
                        follow: !dontResolveLastLink1
                    });
                    ret1.exists = true;
                    ret1.path = lookup1.path;
                    ret1.object = lookup1.node;
                    ret1.name = lookup1.node.name;
                    ret1.isRoot = lookup1.path === "/";
                } catch (e1) {
                    ret1.error = e1.errno;
                }
                return ret1;
            },
            createPath: (parent1, path1, canRead1, canWrite1)=>{
                parent1 = typeof parent1 == "string" ? parent1 : FS.getPath(parent1);
                var parts1 = path1.split("/").reverse();
                while(parts1.length){
                    var part1 = parts1.pop();
                    if (!part1) continue;
                    var current1 = PATH.join2(parent1, part1);
                    try {
                        FS.mkdir(current1);
                    } catch (e1) {}
                    parent1 = current1;
                }
                return current1;
            },
            createFile: (parent1, name1, properties1, canRead1, canWrite1)=>{
                var path1 = PATH.join2(typeof parent1 == "string" ? parent1 : FS.getPath(parent1), name1);
                var mode1 = FS.getMode(canRead1, canWrite1);
                return FS.create(path1, mode1);
            },
            createDataFile: (parent1, name1, data1, canRead1, canWrite1, canOwn1)=>{
                var path1 = name1;
                if (parent1) {
                    parent1 = typeof parent1 == "string" ? parent1 : FS.getPath(parent1);
                    path1 = name1 ? PATH.join2(parent1, name1) : parent1;
                }
                var mode1 = FS.getMode(canRead1, canWrite1);
                var node1 = FS.create(path1, mode1);
                if (data1) {
                    if (typeof data1 == "string") {
                        var arr1 = new Array(data1.length);
                        for(var i1 = 0, len1 = data1.length; i1 < len1; ++i1)arr1[i1] = data1.charCodeAt(i1);
                        data1 = arr1;
                    }
                    FS.chmod(node1, mode1 | 146);
                    var stream1 = FS.open(node1, 577);
                    FS.write(stream1, data1, 0, data1.length, 0, canOwn1);
                    FS.close(stream1);
                    FS.chmod(node1, mode1);
                }
                return node1;
            },
            createDevice: (parent1, name1, input1, output1)=>{
                var path1 = PATH.join2(typeof parent1 == "string" ? parent1 : FS.getPath(parent1), name1);
                var mode1 = FS.getMode(!!input1, !!output1);
                if (!FS.createDevice.major) FS.createDevice.major = 64;
                var dev1 = FS.makedev(FS.createDevice.major++, 0);
                FS.registerDevice(dev1, {
                    open: (stream1)=>{
                        stream1.seekable = false;
                    },
                    close: (stream1)=>{
                        if (output1 && output1.buffer && output1.buffer.length) output1(10);
                    },
                    read: (stream1, buffer1, offset1, length1, pos1)=>{
                        var bytesRead1 = 0;
                        for(var i1 = 0; i1 < length1; i1++){
                            var result1;
                            try {
                                result1 = input1();
                            } catch (e1) {
                                throw new FS.ErrnoError(29);
                            }
                            if (result1 === undefined && bytesRead1 === 0) throw new FS.ErrnoError(6);
                            if (result1 === null || result1 === undefined) break;
                            bytesRead1++;
                            buffer1[offset1 + i1] = result1;
                        }
                        if (bytesRead1) stream1.node.timestamp = Date.now();
                        return bytesRead1;
                    },
                    write: (stream1, buffer1, offset1, length1, pos1)=>{
                        for(var i1 = 0; i1 < length1; i1++)try {
                            output1(buffer1[offset1 + i1]);
                        } catch (e1) {
                            throw new FS.ErrnoError(29);
                        }
                        if (length1) stream1.node.timestamp = Date.now();
                        return i1;
                    }
                });
                return FS.mkdev(path1, mode1, dev1);
            },
            forceLoadFile: (obj1)=>{
                if (obj1.isDevice || obj1.isFolder || obj1.link || obj1.contents) return true;
                if (typeof XMLHttpRequest != "undefined") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                else if (read_) try {
                    obj1.contents = intArrayFromString(read_(obj1.url), true);
                    obj1.usedBytes = obj1.contents.length;
                } catch (e1) {
                    throw new FS.ErrnoError(29);
                }
                else throw new Error("Cannot load without read() or XMLHttpRequest.");
            },
            createLazyFile: (parent1, name1, url1, canRead1, canWrite1)=>{
                function LazyUint8Array1() {
                    this.lengthKnown = false;
                    this.chunks = [];
                }
                LazyUint8Array1.prototype.get = function LazyUint8Array_get1(idx1) {
                    if (idx1 > this.length - 1 || idx1 < 0) return undefined;
                    var chunkOffset1 = idx1 % this.chunkSize;
                    var chunkNum1 = idx1 / this.chunkSize | 0;
                    return this.getter(chunkNum1)[chunkOffset1];
                };
                LazyUint8Array1.prototype.setDataGetter = function LazyUint8Array_setDataGetter1(getter1) {
                    this.getter = getter1;
                };
                LazyUint8Array1.prototype.cacheLength = function LazyUint8Array_cacheLength1() {
                    var xhr1 = new XMLHttpRequest;
                    xhr1.open("HEAD", url1, false);
                    xhr1.send(null);
                    if (!(xhr1.status >= 200 && xhr1.status < 300 || xhr1.status === 304)) throw new Error("Couldn't load " + url1 + ". Status: " + xhr1.status);
                    var datalength1 = Number(xhr1.getResponseHeader("Content-length"));
                    var header1;
                    var hasByteServing1 = (header1 = xhr1.getResponseHeader("Accept-Ranges")) && header1 === "bytes";
                    var usesGzip1 = (header1 = xhr1.getResponseHeader("Content-Encoding")) && header1 === "gzip";
                    var chunkSize1 = 1048576;
                    if (!hasByteServing1) chunkSize1 = datalength1;
                    var doXHR1 = (from1, to1)=>{
                        if (from1 > to1) throw new Error("invalid range (" + from1 + ", " + to1 + ") or no bytes requested!");
                        if (to1 > datalength1 - 1) throw new Error("only " + datalength1 + " bytes available! programmer error!");
                        var xhr1 = new XMLHttpRequest;
                        xhr1.open("GET", url1, false);
                        if (datalength1 !== chunkSize1) xhr1.setRequestHeader("Range", "bytes=" + from1 + "-" + to1);
                        xhr1.responseType = "arraybuffer";
                        if (xhr1.overrideMimeType) xhr1.overrideMimeType("text/plain; charset=x-user-defined");
                        xhr1.send(null);
                        if (!(xhr1.status >= 200 && xhr1.status < 300 || xhr1.status === 304)) throw new Error("Couldn't load " + url1 + ". Status: " + xhr1.status);
                        if (xhr1.response !== undefined) return new Uint8Array(xhr1.response || []);
                        else return intArrayFromString(xhr1.responseText || "", true);
                    };
                    var lazyArray1 = this;
                    lazyArray1.setDataGetter((chunkNum1)=>{
                        var start1 = chunkNum1 * chunkSize1;
                        var end1 = (chunkNum1 + 1) * chunkSize1 - 1;
                        end1 = Math.min(end1, datalength1 - 1);
                        if (typeof lazyArray1.chunks[chunkNum1] == "undefined") lazyArray1.chunks[chunkNum1] = doXHR1(start1, end1);
                        if (typeof lazyArray1.chunks[chunkNum1] == "undefined") throw new Error("doXHR failed!");
                        return lazyArray1.chunks[chunkNum1];
                    });
                    if (usesGzip1 || !datalength1) {
                        chunkSize1 = datalength1 = 1;
                        datalength1 = this.getter(0).length;
                        chunkSize1 = datalength1;
                        out("LazyFiles on gzip forces download of the whole file when length is accessed");
                    }
                    this._length = datalength1;
                    this._chunkSize = chunkSize1;
                    this.lengthKnown = true;
                };
                if (typeof XMLHttpRequest != "undefined") {
                    if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    var lazyArray1 = new LazyUint8Array1;
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
                    var properties1 = {
                        isDevice: false,
                        contents: lazyArray1
                    };
                } else var properties1 = {
                    isDevice: false,
                    url: url1
                };
                var node1 = FS.createFile(parent1, name1, properties1, canRead1, canWrite1);
                if (properties1.contents) node1.contents = properties1.contents;
                else if (properties1.url) {
                    node1.contents = null;
                    node1.url = properties1.url;
                }
                Object.defineProperties(node1, {
                    usedBytes: {
                        get: function() {
                            return this.contents.length;
                        }
                    }
                });
                var stream_ops1 = {};
                var keys1 = Object.keys(node1.stream_ops);
                keys1.forEach((key1)=>{
                    var fn1 = node1.stream_ops[key1];
                    stream_ops1[key1] = function forceLoadLazyFile1() {
                        FS.forceLoadFile(node1);
                        return fn1.apply(null, arguments);
                    };
                });
                function writeChunks1(stream1, buffer1, offset1, length1, position1) {
                    var contents1 = stream1.node.contents;
                    if (position1 >= contents1.length) return 0;
                    var size1 = Math.min(contents1.length - position1, length1);
                    if (contents1.slice) for(var i1 = 0; i1 < size1; i1++)buffer1[offset1 + i1] = contents1[position1 + i1];
                    else for(var i1 = 0; i1 < size1; i1++)buffer1[offset1 + i1] = contents1.get(position1 + i1);
                    return size1;
                }
                stream_ops1.read = (stream1, buffer1, offset1, length1, position1)=>{
                    FS.forceLoadFile(node1);
                    return writeChunks1(stream1, buffer1, offset1, length1, position1);
                };
                stream_ops1.mmap = (stream1, length1, position1, prot1, flags1)=>{
                    FS.forceLoadFile(node1);
                    var ptr1 = mmapAlloc(length1);
                    if (!ptr1) throw new FS.ErrnoError(48);
                    writeChunks1(stream1, GROWABLE_HEAP_I8(), ptr1, length1, position1);
                    return {
                        ptr: ptr1,
                        allocated: true
                    };
                };
                node1.stream_ops = stream_ops1;
                return node1;
            },
            createPreloadedFile: (parent1, name1, url1, canRead1, canWrite1, onload1, onerror1, dontCreateFile1, canOwn1, preFinish1)=>{
                var fullname1 = name1 ? PATH_FS.resolve(PATH.join2(parent1, name1)) : parent1;
                var dep1 = getUniqueRunDependency("cp " + fullname1);
                function processData1(byteArray1) {
                    function finish1(byteArray1) {
                        if (preFinish1) preFinish1();
                        if (!dontCreateFile1) FS.createDataFile(parent1, name1, byteArray1, canRead1, canWrite1, canOwn1);
                        if (onload1) onload1();
                        removeRunDependency(dep1);
                    }
                    if (Browser.handledByPreloadPlugin(byteArray1, fullname1, finish1, ()=>{
                        if (onerror1) onerror1();
                        removeRunDependency(dep1);
                    })) return;
                    finish1(byteArray1);
                }
                addRunDependency(dep1);
                if (typeof url1 == "string") asyncLoad(url1, (byteArray1)=>processData1(byteArray1), onerror1);
                else processData1(url1);
            },
            indexedDB: ()=>{
                return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            },
            DB_NAME: ()=>{
                return "EM_FS_" + window.location.pathname;
            },
            DB_VERSION: 20,
            DB_STORE_NAME: "FILE_DATA",
            saveFilesToDB: (paths1, onload1, onerror1)=>{
                onload1 = onload1 || (()=>{});
                onerror1 = onerror1 || (()=>{});
                var indexedDB1 = FS.indexedDB();
                try {
                    var openRequest1 = indexedDB1.open(FS.DB_NAME(), FS.DB_VERSION);
                } catch (e1) {
                    return onerror1(e1);
                }
                openRequest1.onupgradeneeded = ()=>{
                    out("creating db");
                    var db1 = openRequest1.result;
                    db1.createObjectStore(FS.DB_STORE_NAME);
                };
                openRequest1.onsuccess = ()=>{
                    var db1 = openRequest1.result;
                    var transaction1 = db1.transaction([
                        FS.DB_STORE_NAME
                    ], "readwrite");
                    var files1 = transaction1.objectStore(FS.DB_STORE_NAME);
                    var ok1 = 0, fail1 = 0, total1 = paths1.length;
                    function finish1() {
                        if (fail1 == 0) onload1();
                        else onerror1();
                    }
                    paths1.forEach((path1)=>{
                        var putRequest1 = files1.put(FS.analyzePath(path1).object.contents, path1);
                        putRequest1.onsuccess = ()=>{
                            ok1++;
                            if (ok1 + fail1 == total1) finish1();
                        };
                        putRequest1.onerror = ()=>{
                            fail1++;
                            if (ok1 + fail1 == total1) finish1();
                        };
                    });
                    transaction1.onerror = onerror1;
                };
                openRequest1.onerror = onerror1;
            },
            loadFilesFromDB: (paths1, onload1, onerror1)=>{
                onload1 = onload1 || (()=>{});
                onerror1 = onerror1 || (()=>{});
                var indexedDB1 = FS.indexedDB();
                try {
                    var openRequest1 = indexedDB1.open(FS.DB_NAME(), FS.DB_VERSION);
                } catch (e1) {
                    return onerror1(e1);
                }
                openRequest1.onupgradeneeded = onerror1;
                openRequest1.onsuccess = ()=>{
                    var db1 = openRequest1.result;
                    try {
                        var transaction1 = db1.transaction([
                            FS.DB_STORE_NAME
                        ], "readonly");
                    } catch (e1) {
                        onerror1(e1);
                        return;
                    }
                    var files1 = transaction1.objectStore(FS.DB_STORE_NAME);
                    var ok1 = 0, fail1 = 0, total1 = paths1.length;
                    function finish1() {
                        if (fail1 == 0) onload1();
                        else onerror1();
                    }
                    paths1.forEach((path1)=>{
                        var getRequest1 = files1.get(path1);
                        getRequest1.onsuccess = ()=>{
                            if (FS.analyzePath(path1).exists) FS.unlink(path1);
                            FS.createDataFile(PATH.dirname(path1), PATH.basename(path1), getRequest1.result, true, true, true);
                            ok1++;
                            if (ok1 + fail1 == total1) finish1();
                        };
                        getRequest1.onerror = ()=>{
                            fail1++;
                            if (ok1 + fail1 == total1) finish1();
                        };
                    });
                    transaction1.onerror = onerror1;
                };
                openRequest1.onerror = onerror1;
            }
        };
        var SYSCALLS = {
            DEFAULT_POLLMASK: 5,
            calculateAt: function(dirfd1, path1, allowEmpty1) {
                if (PATH.isAbs(path1)) return path1;
                var dir1;
                if (dirfd1 === -100) dir1 = FS.cwd();
                else {
                    var dirstream1 = FS.getStream(dirfd1);
                    if (!dirstream1) throw new FS.ErrnoError(8);
                    dir1 = dirstream1.path;
                }
                if (path1.length == 0) {
                    if (!allowEmpty1) throw new FS.ErrnoError(44);
                    return dir1;
                }
                return PATH.join2(dir1, path1);
            },
            doStat: function(func1, path1, buf1) {
                try {
                    var stat1 = func1(path1);
                } catch (e1) {
                    if (e1 && e1.node && PATH.normalize(path1) !== PATH.normalize(FS.getPath(e1.node))) return -54;
                    throw e1;
                }
                GROWABLE_HEAP_I32()[buf1 >> 2] = stat1.dev;
                GROWABLE_HEAP_I32()[buf1 + 4 >> 2] = 0;
                GROWABLE_HEAP_I32()[buf1 + 8 >> 2] = stat1.ino;
                GROWABLE_HEAP_I32()[buf1 + 12 >> 2] = stat1.mode;
                GROWABLE_HEAP_I32()[buf1 + 16 >> 2] = stat1.nlink;
                GROWABLE_HEAP_I32()[buf1 + 20 >> 2] = stat1.uid;
                GROWABLE_HEAP_I32()[buf1 + 24 >> 2] = stat1.gid;
                GROWABLE_HEAP_I32()[buf1 + 28 >> 2] = stat1.rdev;
                GROWABLE_HEAP_I32()[buf1 + 32 >> 2] = 0;
                tempI64 = [
                    stat1.size >>> 0,
                    (tempDouble = stat1.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                ], GROWABLE_HEAP_I32()[buf1 + 40 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf1 + 44 >> 2] = tempI64[1];
                GROWABLE_HEAP_I32()[buf1 + 48 >> 2] = 4096;
                GROWABLE_HEAP_I32()[buf1 + 52 >> 2] = stat1.blocks;
                GROWABLE_HEAP_I32()[buf1 + 56 >> 2] = stat1.atime.getTime() / 1e3 | 0;
                GROWABLE_HEAP_I32()[buf1 + 60 >> 2] = 0;
                GROWABLE_HEAP_I32()[buf1 + 64 >> 2] = stat1.mtime.getTime() / 1e3 | 0;
                GROWABLE_HEAP_I32()[buf1 + 68 >> 2] = 0;
                GROWABLE_HEAP_I32()[buf1 + 72 >> 2] = stat1.ctime.getTime() / 1e3 | 0;
                GROWABLE_HEAP_I32()[buf1 + 76 >> 2] = 0;
                tempI64 = [
                    stat1.ino >>> 0,
                    (tempDouble = stat1.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                ], GROWABLE_HEAP_I32()[buf1 + 80 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf1 + 84 >> 2] = tempI64[1];
                return 0;
            },
            doMsync: function(addr1, stream1, len1, flags1, offset1) {
                var buffer1 = GROWABLE_HEAP_U8().slice(addr1, addr1 + len1);
                FS.msync(stream1, buffer1, offset1, len1, flags1);
            },
            varargs: undefined,
            get: function() {
                SYSCALLS.varargs += 4;
                var ret1 = GROWABLE_HEAP_I32()[SYSCALLS.varargs - 4 >> 2];
                return ret1;
            },
            getStr: function(ptr1) {
                var ret1 = UTF8ToString(ptr1);
                return ret1;
            },
            getStreamFromFD: function(fd1) {
                var stream1 = FS.getStream(fd1);
                if (!stream1) throw new FS.ErrnoError(8);
                return stream1;
            }
        };
        function ___syscall__newselect(nfds1, readfds1, writefds1, exceptfds1, timeout1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(3, 1, nfds1, readfds1, writefds1, exceptfds1, timeout1);
            try {
                var total1 = 0;
                var srcReadLow1 = readfds1 ? GROWABLE_HEAP_I32()[readfds1 >> 2] : 0, srcReadHigh1 = readfds1 ? GROWABLE_HEAP_I32()[readfds1 + 4 >> 2] : 0;
                var srcWriteLow1 = writefds1 ? GROWABLE_HEAP_I32()[writefds1 >> 2] : 0, srcWriteHigh1 = writefds1 ? GROWABLE_HEAP_I32()[writefds1 + 4 >> 2] : 0;
                var srcExceptLow1 = exceptfds1 ? GROWABLE_HEAP_I32()[exceptfds1 >> 2] : 0, srcExceptHigh1 = exceptfds1 ? GROWABLE_HEAP_I32()[exceptfds1 + 4 >> 2] : 0;
                var dstReadLow1 = 0, dstReadHigh1 = 0;
                var dstWriteLow1 = 0, dstWriteHigh1 = 0;
                var dstExceptLow1 = 0, dstExceptHigh1 = 0;
                var allLow1 = (readfds1 ? GROWABLE_HEAP_I32()[readfds1 >> 2] : 0) | (writefds1 ? GROWABLE_HEAP_I32()[writefds1 >> 2] : 0) | (exceptfds1 ? GROWABLE_HEAP_I32()[exceptfds1 >> 2] : 0);
                var allHigh1 = (readfds1 ? GROWABLE_HEAP_I32()[readfds1 + 4 >> 2] : 0) | (writefds1 ? GROWABLE_HEAP_I32()[writefds1 + 4 >> 2] : 0) | (exceptfds1 ? GROWABLE_HEAP_I32()[exceptfds1 + 4 >> 2] : 0);
                var check1 = function(fd1, low1, high1, val1) {
                    return fd1 < 32 ? low1 & val1 : high1 & val1;
                };
                for(var fd1 = 0; fd1 < nfds1; fd1++){
                    var mask1 = 1 << fd1 % 32;
                    if (!check1(fd1, allLow1, allHigh1, mask1)) continue;
                    var stream1 = FS.getStream(fd1);
                    if (!stream1) throw new FS.ErrnoError(8);
                    var flags1 = SYSCALLS.DEFAULT_POLLMASK;
                    if (stream1.stream_ops.poll) flags1 = stream1.stream_ops.poll(stream1);
                    if (flags1 & 1 && check1(fd1, srcReadLow1, srcReadHigh1, mask1)) {
                        fd1 < 32 ? dstReadLow1 = dstReadLow1 | mask1 : dstReadHigh1 = dstReadHigh1 | mask1;
                        total1++;
                    }
                    if (flags1 & 4 && check1(fd1, srcWriteLow1, srcWriteHigh1, mask1)) {
                        fd1 < 32 ? dstWriteLow1 = dstWriteLow1 | mask1 : dstWriteHigh1 = dstWriteHigh1 | mask1;
                        total1++;
                    }
                    if (flags1 & 2 && check1(fd1, srcExceptLow1, srcExceptHigh1, mask1)) {
                        fd1 < 32 ? dstExceptLow1 = dstExceptLow1 | mask1 : dstExceptHigh1 = dstExceptHigh1 | mask1;
                        total1++;
                    }
                }
                if (readfds1) {
                    GROWABLE_HEAP_I32()[readfds1 >> 2] = dstReadLow1;
                    GROWABLE_HEAP_I32()[readfds1 + 4 >> 2] = dstReadHigh1;
                }
                if (writefds1) {
                    GROWABLE_HEAP_I32()[writefds1 >> 2] = dstWriteLow1;
                    GROWABLE_HEAP_I32()[writefds1 + 4 >> 2] = dstWriteHigh1;
                }
                if (exceptfds1) {
                    GROWABLE_HEAP_I32()[exceptfds1 >> 2] = dstExceptLow1;
                    GROWABLE_HEAP_I32()[exceptfds1 + 4 >> 2] = dstExceptHigh1;
                }
                return total1;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        var SOCKFS = {
            mount: function(mount1) {
                Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
                Module["websocket"]._callbacks = {};
                Module["websocket"]["on"] = function(event1, callback1) {
                    if ("function" === typeof callback1) this._callbacks[event1] = callback1;
                    return this;
                };
                Module["websocket"].emit = function(event1, param1) {
                    if ("function" === typeof this._callbacks[event1]) this._callbacks[event1].call(this, param1);
                };
                return FS.createNode(null, "/", 16895, 0);
            },
            createSocket: function(family1, type1, protocol1) {
                type1 &= -526337;
                var streaming1 = type1 == 1;
                if (streaming1 && protocol1 && protocol1 != 6) throw new FS.ErrnoError(66);
                var sock1 = {
                    family: family1,
                    type: type1,
                    protocol: protocol1,
                    server: null,
                    error: null,
                    peers: {},
                    pending: [],
                    recv_queue: [],
                    sock_ops: SOCKFS.websocket_sock_ops
                };
                var name1 = SOCKFS.nextname();
                var node1 = FS.createNode(SOCKFS.root, name1, 49152, 0);
                node1.sock = sock1;
                var stream1 = FS.createStream({
                    path: name1,
                    node: node1,
                    flags: 2,
                    seekable: false,
                    stream_ops: SOCKFS.stream_ops
                });
                sock1.stream = stream1;
                return sock1;
            },
            getSocket: function(fd1) {
                var stream1 = FS.getStream(fd1);
                if (!stream1 || !FS.isSocket(stream1.node.mode)) return null;
                return stream1.node.sock;
            },
            stream_ops: {
                poll: function(stream1) {
                    var sock1 = stream1.node.sock;
                    return sock1.sock_ops.poll(sock1);
                },
                ioctl: function(stream1, request1, varargs1) {
                    var sock1 = stream1.node.sock;
                    return sock1.sock_ops.ioctl(sock1, request1, varargs1);
                },
                read: function(stream1, buffer1, offset1, length1, position1) {
                    var sock1 = stream1.node.sock;
                    var msg1 = sock1.sock_ops.recvmsg(sock1, length1);
                    if (!msg1) return 0;
                    buffer1.set(msg1.buffer, offset1);
                    return msg1.buffer.length;
                },
                write: function(stream1, buffer1, offset1, length1, position1) {
                    var sock1 = stream1.node.sock;
                    return sock1.sock_ops.sendmsg(sock1, buffer1, offset1, length1);
                },
                close: function(stream1) {
                    var sock1 = stream1.node.sock;
                    sock1.sock_ops.close(sock1);
                }
            },
            nextname: function() {
                if (!SOCKFS.nextname.current) SOCKFS.nextname.current = 0;
                return "socket[" + SOCKFS.nextname.current++ + "]";
            },
            websocket_sock_ops: {
                createPeer: function(sock1, addr1, port1) {
                    var ws1;
                    if (typeof addr1 == "object") {
                        ws1 = addr1;
                        addr1 = null;
                        port1 = null;
                    }
                    if (ws1) {
                        if (ws1._socket) {
                            addr1 = ws1._socket.remoteAddress;
                            port1 = ws1._socket.remotePort;
                        } else {
                            var result1 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws1.url);
                            if (!result1) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
                            addr1 = result1[1];
                            port1 = parseInt(result1[2], 10);
                        }
                    } else try {
                        var runtimeConfig1 = Module["websocket"] && "object" === typeof Module["websocket"];
                        var url1 = "ws:#".replace("#", "//");
                        if (runtimeConfig1) {
                            if ("string" === typeof Module["websocket"]["url"]) url1 = Module["websocket"]["url"];
                        }
                        if (url1 === "ws://" || url1 === "wss://") {
                            var parts1 = addr1.split("/");
                            url1 = url1 + parts1[0] + ":" + port1 + "/" + parts1.slice(1).join("/");
                        }
                        var subProtocols1 = "binary";
                        if (runtimeConfig1) {
                            if ("string" === typeof Module["websocket"]["subprotocol"]) subProtocols1 = Module["websocket"]["subprotocol"];
                        }
                        var opts1 = undefined;
                        if (subProtocols1 !== "null") {
                            subProtocols1 = subProtocols1.replace(/^ +| +$/g, "").split(/ *, */);
                            opts1 = subProtocols1;
                        }
                        if (runtimeConfig1 && null === Module["websocket"]["subprotocol"]) {
                            subProtocols1 = "null";
                            opts1 = undefined;
                        }
                        var WebSocketConstructor1;
                        WebSocketConstructor1 = WebSocket;
                        ws1 = new WebSocketConstructor1(url1, opts1);
                        ws1.binaryType = "arraybuffer";
                    } catch (e1) {
                        throw new FS.ErrnoError(23);
                    }
                    var peer1 = {
                        addr: addr1,
                        port: port1,
                        socket: ws1,
                        dgram_send_queue: []
                    };
                    SOCKFS.websocket_sock_ops.addPeer(sock1, peer1);
                    SOCKFS.websocket_sock_ops.handlePeerEvents(sock1, peer1);
                    if (sock1.type === 2 && typeof sock1.sport != "undefined") peer1.dgram_send_queue.push(new Uint8Array([
                        255,
                        255,
                        255,
                        255,
                        "p".charCodeAt(0),
                        "o".charCodeAt(0),
                        "r".charCodeAt(0),
                        "t".charCodeAt(0),
                        (sock1.sport & 65280) >> 8,
                        sock1.sport & 255
                    ]));
                    return peer1;
                },
                getPeer: function(sock1, addr1, port1) {
                    return sock1.peers[addr1 + ":" + port1];
                },
                addPeer: function(sock1, peer1) {
                    sock1.peers[peer1.addr + ":" + peer1.port] = peer1;
                },
                removePeer: function(sock1, peer1) {
                    delete sock1.peers[peer1.addr + ":" + peer1.port];
                },
                handlePeerEvents: function(sock1, peer1) {
                    var first1 = true;
                    var handleOpen1 = function() {
                        Module["websocket"].emit("open", sock1.stream.fd);
                        try {
                            var queued1 = peer1.dgram_send_queue.shift();
                            while(queued1){
                                peer1.socket.send(queued1);
                                queued1 = peer1.dgram_send_queue.shift();
                            }
                        } catch (e1) {
                            peer1.socket.close();
                        }
                    };
                    function handleMessage1(data1) {
                        if (typeof data1 == "string") {
                            var encoder1 = new TextEncoder;
                            data1 = encoder1.encode(data1);
                        } else {
                            assert(data1.byteLength !== undefined);
                            if (data1.byteLength == 0) return;
                            else data1 = new Uint8Array(data1);
                        }
                        var wasfirst1 = first1;
                        first1 = false;
                        if (wasfirst1 && data1.length === 10 && data1[0] === 255 && data1[1] === 255 && data1[2] === 255 && data1[3] === 255 && data1[4] === "p".charCodeAt(0) && data1[5] === "o".charCodeAt(0) && data1[6] === "r".charCodeAt(0) && data1[7] === "t".charCodeAt(0)) {
                            var newport1 = data1[8] << 8 | data1[9];
                            SOCKFS.websocket_sock_ops.removePeer(sock1, peer1);
                            peer1.port = newport1;
                            SOCKFS.websocket_sock_ops.addPeer(sock1, peer1);
                            return;
                        }
                        sock1.recv_queue.push({
                            addr: peer1.addr,
                            port: peer1.port,
                            data: data1
                        });
                        Module["websocket"].emit("message", sock1.stream.fd);
                    }
                    if (ENVIRONMENT_IS_NODE) {
                        peer1.socket.on("open", handleOpen1);
                        peer1.socket.on("message", function(data1, isBinary1) {
                            if (!isBinary1) return;
                            handleMessage1(new Uint8Array(data1).buffer);
                        });
                        peer1.socket.on("close", function() {
                            Module["websocket"].emit("close", sock1.stream.fd);
                        });
                        peer1.socket.on("error", function(error1) {
                            sock1.error = 14;
                            Module["websocket"].emit("error", [
                                sock1.stream.fd,
                                sock1.error,
                                "ECONNREFUSED: Connection refused"
                            ]);
                        });
                    } else {
                        peer1.socket.onopen = handleOpen1;
                        peer1.socket.onclose = function() {
                            Module["websocket"].emit("close", sock1.stream.fd);
                        };
                        peer1.socket.onmessage = function peer_socket_onmessage1(event1) {
                            handleMessage1(event1.data);
                        };
                        peer1.socket.onerror = function(error1) {
                            sock1.error = 14;
                            Module["websocket"].emit("error", [
                                sock1.stream.fd,
                                sock1.error,
                                "ECONNREFUSED: Connection refused"
                            ]);
                        };
                    }
                },
                poll: function(sock1) {
                    if (sock1.type === 1 && sock1.server) return sock1.pending.length ? 65 : 0;
                    var mask1 = 0;
                    var dest1 = sock1.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock1, sock1.daddr, sock1.dport) : null;
                    if (sock1.recv_queue.length || !dest1 || dest1 && dest1.socket.readyState === dest1.socket.CLOSING || dest1 && dest1.socket.readyState === dest1.socket.CLOSED) mask1 |= 65;
                    if (!dest1 || dest1 && dest1.socket.readyState === dest1.socket.OPEN) mask1 |= 4;
                    if (dest1 && dest1.socket.readyState === dest1.socket.CLOSING || dest1 && dest1.socket.readyState === dest1.socket.CLOSED) mask1 |= 16;
                    return mask1;
                },
                ioctl: function(sock1, request1, arg1) {
                    switch(request1){
                        case 21531:
                            var bytes1 = 0;
                            if (sock1.recv_queue.length) bytes1 = sock1.recv_queue[0].data.length;
                            GROWABLE_HEAP_I32()[arg1 >> 2] = bytes1;
                            return 0;
                        default:
                            return 28;
                    }
                },
                close: function(sock1) {
                    if (sock1.server) {
                        try {
                            sock1.server.close();
                        } catch (e1) {}
                        sock1.server = null;
                    }
                    var peers1 = Object.keys(sock1.peers);
                    for(var i1 = 0; i1 < peers1.length; i1++){
                        var peer1 = sock1.peers[peers1[i1]];
                        try {
                            peer1.socket.close();
                        } catch (e1) {}
                        SOCKFS.websocket_sock_ops.removePeer(sock1, peer1);
                    }
                    return 0;
                },
                bind: function(sock1, addr1, port1) {
                    if (typeof sock1.saddr != "undefined" || typeof sock1.sport != "undefined") throw new FS.ErrnoError(28);
                    sock1.saddr = addr1;
                    sock1.sport = port1;
                    if (sock1.type === 2) {
                        if (sock1.server) {
                            sock1.server.close();
                            sock1.server = null;
                        }
                        try {
                            sock1.sock_ops.listen(sock1, 0);
                        } catch (e1) {
                            if (!(e1 instanceof FS.ErrnoError)) throw e1;
                            if (e1.errno !== 138) throw e1;
                        }
                    }
                },
                connect: function(sock1, addr1, port1) {
                    if (sock1.server) throw new FS.ErrnoError(138);
                    if (typeof sock1.daddr != "undefined" && typeof sock1.dport != "undefined") {
                        var dest1 = SOCKFS.websocket_sock_ops.getPeer(sock1, sock1.daddr, sock1.dport);
                        if (dest1) {
                            if (dest1.socket.readyState === dest1.socket.CONNECTING) throw new FS.ErrnoError(7);
                            else throw new FS.ErrnoError(30);
                        }
                    }
                    var peer1 = SOCKFS.websocket_sock_ops.createPeer(sock1, addr1, port1);
                    sock1.daddr = peer1.addr;
                    sock1.dport = peer1.port;
                    throw new FS.ErrnoError(26);
                },
                listen: function(sock1, backlog1) {
                    if (!ENVIRONMENT_IS_NODE) throw new FS.ErrnoError(138);
                },
                accept: function(listensock1) {
                    if (!listensock1.server || !listensock1.pending.length) throw new FS.ErrnoError(28);
                    var newsock1 = listensock1.pending.shift();
                    newsock1.stream.flags = listensock1.stream.flags;
                    return newsock1;
                },
                getname: function(sock1, peer1) {
                    var addr1, port1;
                    if (peer1) {
                        if (sock1.daddr === undefined || sock1.dport === undefined) throw new FS.ErrnoError(53);
                        addr1 = sock1.daddr;
                        port1 = sock1.dport;
                    } else {
                        addr1 = sock1.saddr || 0;
                        port1 = sock1.sport || 0;
                    }
                    return {
                        addr: addr1,
                        port: port1
                    };
                },
                sendmsg: function(sock1, buffer1, offset1, length1, addr1, port1) {
                    if (sock1.type === 2) {
                        if (addr1 === undefined || port1 === undefined) {
                            addr1 = sock1.daddr;
                            port1 = sock1.dport;
                        }
                        if (addr1 === undefined || port1 === undefined) throw new FS.ErrnoError(17);
                    } else {
                        addr1 = sock1.daddr;
                        port1 = sock1.dport;
                    }
                    var dest1 = SOCKFS.websocket_sock_ops.getPeer(sock1, addr1, port1);
                    if (sock1.type === 1) {
                        if (!dest1 || dest1.socket.readyState === dest1.socket.CLOSING || dest1.socket.readyState === dest1.socket.CLOSED) throw new FS.ErrnoError(53);
                        else if (dest1.socket.readyState === dest1.socket.CONNECTING) throw new FS.ErrnoError(6);
                    }
                    if (ArrayBuffer.isView(buffer1)) {
                        offset1 += buffer1.byteOffset;
                        buffer1 = buffer1.buffer;
                    }
                    var data1;
                    if (buffer1 instanceof SharedArrayBuffer) data1 = new Uint8Array(new Uint8Array(buffer1.slice(offset1, offset1 + length1))).buffer;
                    else data1 = buffer1.slice(offset1, offset1 + length1);
                    if (sock1.type === 2) {
                        if (!dest1 || dest1.socket.readyState !== dest1.socket.OPEN) {
                            if (!dest1 || dest1.socket.readyState === dest1.socket.CLOSING || dest1.socket.readyState === dest1.socket.CLOSED) dest1 = SOCKFS.websocket_sock_ops.createPeer(sock1, addr1, port1);
                            dest1.dgram_send_queue.push(data1);
                            return length1;
                        }
                    }
                    try {
                        dest1.socket.send(data1);
                        return length1;
                    } catch (e1) {
                        throw new FS.ErrnoError(28);
                    }
                },
                recvmsg: function(sock1, length1) {
                    if (sock1.type === 1 && sock1.server) throw new FS.ErrnoError(53);
                    var queued1 = sock1.recv_queue.shift();
                    if (!queued1) {
                        if (sock1.type === 1) {
                            var dest1 = SOCKFS.websocket_sock_ops.getPeer(sock1, sock1.daddr, sock1.dport);
                            if (!dest1) throw new FS.ErrnoError(53);
                            else if (dest1.socket.readyState === dest1.socket.CLOSING || dest1.socket.readyState === dest1.socket.CLOSED) return null;
                            else throw new FS.ErrnoError(6);
                        } else throw new FS.ErrnoError(6);
                    }
                    var queuedLength1 = queued1.data.byteLength || queued1.data.length;
                    var queuedOffset1 = queued1.data.byteOffset || 0;
                    var queuedBuffer1 = queued1.data.buffer || queued1.data;
                    var bytesRead1 = Math.min(length1, queuedLength1);
                    var res1 = {
                        buffer: new Uint8Array(queuedBuffer1, queuedOffset1, bytesRead1),
                        addr: queued1.addr,
                        port: queued1.port
                    };
                    if (sock1.type === 1 && bytesRead1 < queuedLength1) {
                        var bytesRemaining1 = queuedLength1 - bytesRead1;
                        queued1.data = new Uint8Array(queuedBuffer1, queuedOffset1 + bytesRead1, bytesRemaining1);
                        sock1.recv_queue.unshift(queued1);
                    }
                    return res1;
                }
            }
        };
        function getSocketFromFD(fd1) {
            var socket1 = SOCKFS.getSocket(fd1);
            if (!socket1) throw new FS.ErrnoError(8);
            return socket1;
        }
        function setErrNo(value1) {
            GROWABLE_HEAP_I32()[___errno_location() >> 2] = value1;
            return value1;
        }
        function inetPton4(str1) {
            var b1 = str1.split(".");
            for(var i1 = 0; i1 < 4; i1++){
                var tmp1 = Number(b1[i1]);
                if (isNaN(tmp1)) return null;
                b1[i1] = tmp1;
            }
            return (b1[0] | b1[1] << 8 | b1[2] << 16 | b1[3] << 24) >>> 0;
        }
        function jstoi_q(str1) {
            return parseInt(str1);
        }
        function inetPton6(str1) {
            var words1;
            var w1, offset1, z1;
            var valid6regx1 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
            var parts1 = [];
            if (!valid6regx1.test(str1)) return null;
            if (str1 === "::") return [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            if (str1.startsWith("::")) str1 = str1.replace("::", "Z:");
            else str1 = str1.replace("::", ":Z:");
            if (str1.indexOf(".") > 0) {
                str1 = str1.replace(new RegExp("[.]", "g"), ":");
                words1 = str1.split(":");
                words1[words1.length - 4] = jstoi_q(words1[words1.length - 4]) + jstoi_q(words1[words1.length - 3]) * 256;
                words1[words1.length - 3] = jstoi_q(words1[words1.length - 2]) + jstoi_q(words1[words1.length - 1]) * 256;
                words1 = words1.slice(0, words1.length - 2);
            } else words1 = str1.split(":");
            offset1 = 0;
            z1 = 0;
            for(w1 = 0; w1 < words1.length; w1++)if (typeof words1[w1] == "string") {
                if (words1[w1] === "Z") {
                    for(z1 = 0; z1 < 8 - words1.length + 1; z1++)parts1[w1 + z1] = 0;
                    offset1 = z1 - 1;
                } else parts1[w1 + offset1] = _htons(parseInt(words1[w1], 16));
            } else parts1[w1 + offset1] = words1[w1];
            return [
                parts1[1] << 16 | parts1[0],
                parts1[3] << 16 | parts1[2],
                parts1[5] << 16 | parts1[4],
                parts1[7] << 16 | parts1[6]
            ];
        }
        function writeSockaddr(sa1, family1, addr1, port1, addrlen1) {
            switch(family1){
                case 2:
                    addr1 = inetPton4(addr1);
                    zeroMemory(sa1, 16);
                    if (addrlen1) GROWABLE_HEAP_I32()[addrlen1 >> 2] = 16;
                    GROWABLE_HEAP_I16()[sa1 >> 1] = family1;
                    GROWABLE_HEAP_I32()[sa1 + 4 >> 2] = addr1;
                    GROWABLE_HEAP_I16()[sa1 + 2 >> 1] = _htons(port1);
                    break;
                case 10:
                    addr1 = inetPton6(addr1);
                    zeroMemory(sa1, 28);
                    if (addrlen1) GROWABLE_HEAP_I32()[addrlen1 >> 2] = 28;
                    GROWABLE_HEAP_I32()[sa1 >> 2] = family1;
                    GROWABLE_HEAP_I32()[sa1 + 8 >> 2] = addr1[0];
                    GROWABLE_HEAP_I32()[sa1 + 12 >> 2] = addr1[1];
                    GROWABLE_HEAP_I32()[sa1 + 16 >> 2] = addr1[2];
                    GROWABLE_HEAP_I32()[sa1 + 20 >> 2] = addr1[3];
                    GROWABLE_HEAP_I16()[sa1 + 2 >> 1] = _htons(port1);
                    break;
                default:
                    return 5;
            }
            return 0;
        }
        var DNS = {
            address_map: {
                id: 1,
                addrs: {},
                names: {}
            },
            lookup_name: function(name1) {
                var res1 = inetPton4(name1);
                if (res1 !== null) return name1;
                res1 = inetPton6(name1);
                if (res1 !== null) return name1;
                var addr1;
                if (DNS.address_map.addrs[name1]) addr1 = DNS.address_map.addrs[name1];
                else {
                    var id1 = DNS.address_map.id++;
                    assert(id1 < 65535, "exceeded max address mappings of 65535");
                    addr1 = "172.29." + (id1 & 255) + "." + (id1 & 65280);
                    DNS.address_map.names[addr1] = name1;
                    DNS.address_map.addrs[name1] = addr1;
                }
                return addr1;
            },
            lookup_addr: function(addr1) {
                if (DNS.address_map.names[addr1]) return DNS.address_map.names[addr1];
                return null;
            }
        };
        function ___syscall_accept4(fd1, addr1, addrlen1, flags1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(4, 1, fd1, addr1, addrlen1, flags1);
            try {
                var sock1 = getSocketFromFD(fd1);
                var newsock1 = sock1.sock_ops.accept(sock1);
                if (addr1) var errno1 = writeSockaddr(addr1, newsock1.family, DNS.lookup_name(newsock1.daddr), newsock1.dport, addrlen1);
                return newsock1.stream.fd;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function inetNtop4(addr1) {
            return (addr1 & 255) + "." + (addr1 >> 8 & 255) + "." + (addr1 >> 16 & 255) + "." + (addr1 >> 24 & 255);
        }
        function inetNtop6(ints1) {
            var str1 = "";
            var word1 = 0;
            var longest1 = 0;
            var lastzero1 = 0;
            var zstart1 = 0;
            var len1 = 0;
            var i1 = 0;
            var parts1 = [
                ints1[0] & 65535,
                ints1[0] >> 16,
                ints1[1] & 65535,
                ints1[1] >> 16,
                ints1[2] & 65535,
                ints1[2] >> 16,
                ints1[3] & 65535,
                ints1[3] >> 16
            ];
            var hasipv41 = true;
            var v4part1 = "";
            for(i1 = 0; i1 < 5; i1++)if (parts1[i1] !== 0) {
                hasipv41 = false;
                break;
            }
            if (hasipv41) {
                v4part1 = inetNtop4(parts1[6] | parts1[7] << 16);
                if (parts1[5] === -1) {
                    str1 = "::ffff:";
                    str1 += v4part1;
                    return str1;
                }
                if (parts1[5] === 0) {
                    str1 = "::";
                    if (v4part1 === "0.0.0.0") v4part1 = "";
                    if (v4part1 === "0.0.0.1") v4part1 = "1";
                    str1 += v4part1;
                    return str1;
                }
            }
            for(word1 = 0; word1 < 8; word1++){
                if (parts1[word1] === 0) {
                    if (word1 - lastzero1 > 1) len1 = 0;
                    lastzero1 = word1;
                    len1++;
                }
                if (len1 > longest1) {
                    longest1 = len1;
                    zstart1 = word1 - longest1 + 1;
                }
            }
            for(word1 = 0; word1 < 8; word1++){
                if (longest1 > 1) {
                    if (parts1[word1] === 0 && word1 >= zstart1 && word1 < zstart1 + longest1) {
                        if (word1 === zstart1) {
                            str1 += ":";
                            if (zstart1 === 0) str1 += ":";
                        }
                        continue;
                    }
                }
                str1 += Number(_ntohs(parts1[word1] & 65535)).toString(16);
                str1 += word1 < 7 ? ":" : "";
            }
            return str1;
        }
        function readSockaddr(sa1, salen1) {
            var family1 = GROWABLE_HEAP_I16()[sa1 >> 1];
            var port1 = _ntohs(GROWABLE_HEAP_U16()[sa1 + 2 >> 1]);
            var addr1;
            switch(family1){
                case 2:
                    if (salen1 !== 16) return {
                        errno: 28
                    };
                    addr1 = GROWABLE_HEAP_I32()[sa1 + 4 >> 2];
                    addr1 = inetNtop4(addr1);
                    break;
                case 10:
                    if (salen1 !== 28) return {
                        errno: 28
                    };
                    addr1 = [
                        GROWABLE_HEAP_I32()[sa1 + 8 >> 2],
                        GROWABLE_HEAP_I32()[sa1 + 12 >> 2],
                        GROWABLE_HEAP_I32()[sa1 + 16 >> 2],
                        GROWABLE_HEAP_I32()[sa1 + 20 >> 2]
                    ];
                    addr1 = inetNtop6(addr1);
                    break;
                default:
                    return {
                        errno: 5
                    };
            }
            return {
                family: family1,
                addr: addr1,
                port: port1
            };
        }
        function getSocketAddress(addrp1, addrlen1, allowNull1) {
            if (allowNull1 && addrp1 === 0) return null;
            var info1 = readSockaddr(addrp1, addrlen1);
            if (info1.errno) throw new FS.ErrnoError(info1.errno);
            info1.addr = DNS.lookup_addr(info1.addr) || info1.addr;
            return info1;
        }
        function ___syscall_bind(fd1, addr1, addrlen1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(5, 1, fd1, addr1, addrlen1);
            try {
                var sock1 = getSocketFromFD(fd1);
                var info1 = getSocketAddress(addr1, addrlen1);
                sock1.sock_ops.bind(sock1, info1.addr, info1.port);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_chdir(path1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(6, 1, path1);
            try {
                path1 = SYSCALLS.getStr(path1);
                FS.chdir(path1);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_chmod(path1, mode1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(7, 1, path1, mode1);
            try {
                path1 = SYSCALLS.getStr(path1);
                FS.chmod(path1, mode1);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_connect(fd1, addr1, addrlen1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(8, 1, fd1, addr1, addrlen1);
            try {
                var sock1 = getSocketFromFD(fd1);
                var info1 = getSocketAddress(addr1, addrlen1);
                sock1.sock_ops.connect(sock1, info1.addr, info1.port);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_faccessat(dirfd1, path1, amode1, flags1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(9, 1, dirfd1, path1, amode1, flags1);
            try {
                path1 = SYSCALLS.getStr(path1);
                path1 = SYSCALLS.calculateAt(dirfd1, path1);
                if (amode1 & -8) return -28;
                var lookup1 = FS.lookupPath(path1, {
                    follow: true
                });
                var node1 = lookup1.node;
                if (!node1) return -44;
                var perms1 = "";
                if (amode1 & 4) perms1 += "r";
                if (amode1 & 2) perms1 += "w";
                if (amode1 & 1) perms1 += "x";
                if (perms1 && FS.nodePermissions(node1, perms1)) return -2;
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_fcntl64(fd1, cmd1, varargs1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(10, 1, fd1, cmd1, varargs1);
            SYSCALLS.varargs = varargs1;
            try {
                var stream1 = SYSCALLS.getStreamFromFD(fd1);
                switch(cmd1){
                    case 0:
                        var arg1 = SYSCALLS.get();
                        if (arg1 < 0) return -28;
                        var newStream1;
                        newStream1 = FS.createStream(stream1, arg1);
                        return newStream1.fd;
                    case 1:
                    case 2:
                        return 0;
                    case 3:
                        return stream1.flags;
                    case 4:
                        var arg1 = SYSCALLS.get();
                        stream1.flags |= arg1;
                        return 0;
                    case 5:
                        var arg1 = SYSCALLS.get();
                        var offset1 = 0;
                        GROWABLE_HEAP_I16()[arg1 + offset1 >> 1] = 2;
                        return 0;
                    case 6:
                    case 7:
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
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_getcwd(buf1, size1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(11, 1, buf1, size1);
            try {
                if (size1 === 0) return -28;
                var cwd1 = FS.cwd();
                var cwdLengthInBytes1 = lengthBytesUTF8(cwd1) + 1;
                if (size1 < cwdLengthInBytes1) return -68;
                stringToUTF8(cwd1, buf1, size1);
                return cwdLengthInBytes1;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_getdents64(fd1, dirp1, count1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(12, 1, fd1, dirp1, count1);
            try {
                var stream1 = SYSCALLS.getStreamFromFD(fd1);
                if (!stream1.getdents) stream1.getdents = FS.readdir(stream1.path);
                var struct_size1 = 280;
                var pos1 = 0;
                var off1 = FS.llseek(stream1, 0, 1);
                var idx1 = Math.floor(off1 / struct_size1);
                while(idx1 < stream1.getdents.length && pos1 + struct_size1 <= count1){
                    var id1;
                    var type1;
                    var name1 = stream1.getdents[idx1];
                    if (name1 === ".") {
                        id1 = stream1.node.id;
                        type1 = 4;
                    } else if (name1 === "..") {
                        var lookup1 = FS.lookupPath(stream1.path, {
                            parent: true
                        });
                        id1 = lookup1.node.id;
                        type1 = 4;
                    } else {
                        var child1 = FS.lookupNode(stream1.node, name1);
                        id1 = child1.id;
                        type1 = FS.isChrdev(child1.mode) ? 2 : FS.isDir(child1.mode) ? 4 : FS.isLink(child1.mode) ? 10 : 8;
                    }
                    tempI64 = [
                        id1 >>> 0,
                        (tempDouble = id1, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                    ], GROWABLE_HEAP_I32()[dirp1 + pos1 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[dirp1 + pos1 + 4 >> 2] = tempI64[1];
                    tempI64 = [
                        (idx1 + 1) * struct_size1 >>> 0,
                        (tempDouble = (idx1 + 1) * struct_size1, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                    ], GROWABLE_HEAP_I32()[dirp1 + pos1 + 8 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[dirp1 + pos1 + 12 >> 2] = tempI64[1];
                    GROWABLE_HEAP_I16()[dirp1 + pos1 + 16 >> 1] = 280;
                    GROWABLE_HEAP_I8()[dirp1 + pos1 + 18 >> 0] = type1;
                    stringToUTF8(name1, dirp1 + pos1 + 19, 256);
                    pos1 += struct_size1;
                    idx1 += 1;
                }
                FS.llseek(stream1, idx1 * struct_size1, 0);
                return pos1;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_getsockname(fd1, addr1, addrlen1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(13, 1, fd1, addr1, addrlen1);
            try {
                err("__syscall_getsockname " + fd1);
                var sock1 = getSocketFromFD(fd1);
                var errno1 = writeSockaddr(addr1, sock1.family, DNS.lookup_name(sock1.saddr || "0.0.0.0"), sock1.sport, addrlen1);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_getsockopt(fd1, level1, optname1, optval1, optlen1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(14, 1, fd1, level1, optname1, optval1, optlen1);
            try {
                var sock1 = getSocketFromFD(fd1);
                if (level1 === 1) {
                    if (optname1 === 4) {
                        GROWABLE_HEAP_I32()[optval1 >> 2] = sock1.error;
                        GROWABLE_HEAP_I32()[optlen1 >> 2] = 4;
                        sock1.error = null;
                        return 0;
                    }
                }
                return -50;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_ioctl(fd1, op1, varargs1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(15, 1, fd1, op1, varargs1);
            SYSCALLS.varargs = varargs1;
            try {
                var stream1 = SYSCALLS.getStreamFromFD(fd1);
                switch(op1){
                    case 21509:
                    case 21505:
                        if (!stream1.tty) return -59;
                        return 0;
                    case 21510:
                    case 21511:
                    case 21512:
                    case 21506:
                    case 21507:
                    case 21508:
                        if (!stream1.tty) return -59;
                        return 0;
                    case 21519:
                        if (!stream1.tty) return -59;
                        var argp1 = SYSCALLS.get();
                        GROWABLE_HEAP_I32()[argp1 >> 2] = 0;
                        return 0;
                    case 21520:
                        if (!stream1.tty) return -59;
                        return -28;
                    case 21531:
                        var argp1 = SYSCALLS.get();
                        return FS.ioctl(stream1, op1, argp1);
                    case 21523:
                        if (!stream1.tty) return -59;
                        return 0;
                    case 21524:
                        if (!stream1.tty) return -59;
                        return 0;
                    default:
                        abort("bad ioctl syscall " + op1);
                }
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_listen(fd1, backlog1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(16, 1, fd1, backlog1);
            try {
                var sock1 = getSocketFromFD(fd1);
                sock1.sock_ops.listen(sock1, backlog1);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_lstat64(path1, buf1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(17, 1, path1, buf1);
            try {
                path1 = SYSCALLS.getStr(path1);
                return SYSCALLS.doStat(FS.lstat, path1, buf1);
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_mkdirat(dirfd1, path1, mode1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(18, 1, dirfd1, path1, mode1);
            try {
                path1 = SYSCALLS.getStr(path1);
                path1 = SYSCALLS.calculateAt(dirfd1, path1);
                path1 = PATH.normalize(path1);
                if (path1[path1.length - 1] === "/") path1 = path1.substr(0, path1.length - 1);
                FS.mkdir(path1, mode1, 0);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_newfstatat(dirfd1, path1, buf1, flags1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(19, 1, dirfd1, path1, buf1, flags1);
            try {
                path1 = SYSCALLS.getStr(path1);
                var nofollow1 = flags1 & 256;
                var allowEmpty1 = flags1 & 4096;
                flags1 = flags1 & -4353;
                path1 = SYSCALLS.calculateAt(dirfd1, path1, allowEmpty1);
                return SYSCALLS.doStat(nofollow1 ? FS.lstat : FS.stat, path1, buf1);
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_openat(dirfd1, path1, flags1, varargs1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(20, 1, dirfd1, path1, flags1, varargs1);
            SYSCALLS.varargs = varargs1;
            try {
                path1 = SYSCALLS.getStr(path1);
                path1 = SYSCALLS.calculateAt(dirfd1, path1);
                var mode1 = varargs1 ? SYSCALLS.get() : 0;
                return FS.open(path1, flags1, mode1).fd;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_poll(fds1, nfds1, timeout1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(21, 1, fds1, nfds1, timeout1);
            try {
                var nonzero1 = 0;
                for(var i1 = 0; i1 < nfds1; i1++){
                    var pollfd1 = fds1 + 8 * i1;
                    var fd1 = GROWABLE_HEAP_I32()[pollfd1 >> 2];
                    var events1 = GROWABLE_HEAP_I16()[pollfd1 + 4 >> 1];
                    var mask1 = 32;
                    var stream1 = FS.getStream(fd1);
                    if (stream1) {
                        mask1 = SYSCALLS.DEFAULT_POLLMASK;
                        if (stream1.stream_ops.poll) mask1 = stream1.stream_ops.poll(stream1);
                    }
                    mask1 &= events1 | 24;
                    if (mask1) nonzero1++;
                    GROWABLE_HEAP_I16()[pollfd1 + 6 >> 1] = mask1;
                }
                return nonzero1;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_readlinkat(dirfd1, path1, buf1, bufsize1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(22, 1, dirfd1, path1, buf1, bufsize1);
            try {
                path1 = SYSCALLS.getStr(path1);
                path1 = SYSCALLS.calculateAt(dirfd1, path1);
                if (bufsize1 <= 0) return -28;
                var ret1 = FS.readlink(path1);
                var len1 = Math.min(bufsize1, lengthBytesUTF8(ret1));
                var endChar1 = GROWABLE_HEAP_I8()[buf1 + len1];
                stringToUTF8(ret1, buf1, bufsize1 + 1);
                GROWABLE_HEAP_I8()[buf1 + len1] = endChar1;
                return len1;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_recvfrom(fd1, buf1, len1, flags1, addr1, addrlen1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(23, 1, fd1, buf1, len1, flags1, addr1, addrlen1);
            try {
                var sock1 = getSocketFromFD(fd1);
                var msg1 = sock1.sock_ops.recvmsg(sock1, len1);
                if (!msg1) return 0;
                if (addr1) var errno1 = writeSockaddr(addr1, sock1.family, DNS.lookup_name(msg1.addr), msg1.port, addrlen1);
                GROWABLE_HEAP_U8().set(msg1.buffer, buf1);
                return msg1.buffer.byteLength;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_renameat(olddirfd1, oldpath1, newdirfd1, newpath1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(24, 1, olddirfd1, oldpath1, newdirfd1, newpath1);
            try {
                oldpath1 = SYSCALLS.getStr(oldpath1);
                newpath1 = SYSCALLS.getStr(newpath1);
                oldpath1 = SYSCALLS.calculateAt(olddirfd1, oldpath1);
                newpath1 = SYSCALLS.calculateAt(newdirfd1, newpath1);
                FS.rename(oldpath1, newpath1);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_rmdir(path1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(25, 1, path1);
            try {
                path1 = SYSCALLS.getStr(path1);
                FS.rmdir(path1);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_sendto(fd1, message1, length1, flags1, addr1, addr_len1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(26, 1, fd1, message1, length1, flags1, addr1, addr_len1);
            try {
                var sock1 = getSocketFromFD(fd1);
                var dest1 = getSocketAddress(addr1, addr_len1, true);
                if (!dest1) return FS.write(sock1.stream, GROWABLE_HEAP_I8(), message1, length1);
                else return sock1.sock_ops.sendmsg(sock1, GROWABLE_HEAP_I8(), message1, length1, dest1.addr, dest1.port);
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_socket(domain1, type1, protocol1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(27, 1, domain1, type1, protocol1);
            try {
                var sock1 = SOCKFS.createSocket(domain1, type1, protocol1);
                return sock1.stream.fd;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_stat64(path1, buf1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(28, 1, path1, buf1);
            try {
                path1 = SYSCALLS.getStr(path1);
                return SYSCALLS.doStat(FS.stat, path1, buf1);
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_statfs64(path1, size1, buf1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(29, 1, path1, size1, buf1);
            try {
                path1 = SYSCALLS.getStr(path1);
                GROWABLE_HEAP_I32()[buf1 + 4 >> 2] = 4096;
                GROWABLE_HEAP_I32()[buf1 + 40 >> 2] = 4096;
                GROWABLE_HEAP_I32()[buf1 + 8 >> 2] = 1e6;
                GROWABLE_HEAP_I32()[buf1 + 12 >> 2] = 5e5;
                GROWABLE_HEAP_I32()[buf1 + 16 >> 2] = 5e5;
                GROWABLE_HEAP_I32()[buf1 + 20 >> 2] = FS.nextInode;
                GROWABLE_HEAP_I32()[buf1 + 24 >> 2] = 1e6;
                GROWABLE_HEAP_I32()[buf1 + 28 >> 2] = 42;
                GROWABLE_HEAP_I32()[buf1 + 44 >> 2] = 2;
                GROWABLE_HEAP_I32()[buf1 + 36 >> 2] = 255;
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_symlink(target1, linkpath1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(30, 1, target1, linkpath1);
            try {
                target1 = SYSCALLS.getStr(target1);
                linkpath1 = SYSCALLS.getStr(linkpath1);
                FS.symlink(target1, linkpath1);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function ___syscall_unlinkat(dirfd1, path1, flags1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(31, 1, dirfd1, path1, flags1);
            try {
                path1 = SYSCALLS.getStr(path1);
                path1 = SYSCALLS.calculateAt(dirfd1, path1);
                if (flags1 === 0) FS.unlink(path1);
                else if (flags1 === 512) FS.rmdir(path1);
                else abort("Invalid flags passed to unlinkat");
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return -e1.errno;
            }
        }
        function __dlinit(main_dso_handle1) {}
        var dlopenMissingError = "To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking";
        function __dlopen_js(filename1, flag1) {
            abort(dlopenMissingError);
        }
        function __dlsym_js(handle1, symbol1) {
            abort(dlopenMissingError);
        }
        function __emscripten_date_now() {
            return Date.now();
        }
        function __emscripten_default_pthread_stack_size() {
            return 2097152;
        }
        var nowIsMonotonic = true;
        function __emscripten_get_now_is_monotonic() {
            return nowIsMonotonic;
        }
        function executeNotifiedProxyingQueue(queue1) {
            Atomics.store(GROWABLE_HEAP_I32(), queue1 >> 2, 1);
            if (_pthread_self()) __emscripten_proxy_execute_task_queue(queue1);
            Atomics.compareExchange(GROWABLE_HEAP_I32(), queue1 >> 2, 1, 0);
        }
        Module["executeNotifiedProxyingQueue"] = executeNotifiedProxyingQueue;
        function __emscripten_notify_task_queue(targetThreadId1, currThreadId1, mainThreadId1, queue1) {
            if (targetThreadId1 == currThreadId1) setTimeout(()=>executeNotifiedProxyingQueue(queue1));
            else if (ENVIRONMENT_IS_PTHREAD) postMessage({
                "targetThread": targetThreadId1,
                "cmd": "processProxyingQueue",
                "queue": queue1
            });
            else {
                var pthread1 = PThread.pthreads[targetThreadId1];
                var worker1 = pthread1 && pthread1.worker;
                if (!worker1) return;
                worker1.postMessage({
                    "cmd": "processProxyingQueue",
                    "queue": queue1
                });
            }
            return 1;
        }
        function __emscripten_proxied_gl_context_activated_from_main_browser_thread(contextHandle1) {
            GLctx = Module.ctx = GL.currentContext = contextHandle1;
            GL.currentContextIsProxied = true;
        }
        function __emscripten_set_offscreencanvas_size(target1, width1, height1) {
            return -1;
        }
        function __emscripten_throw_longjmp() {
            throw Infinity;
        }
        function __gmtime_js(time1, tmPtr1) {
            var date3 = new Date(GROWABLE_HEAP_I32()[time1 >> 2] * 1e3);
            GROWABLE_HEAP_I32()[tmPtr1 >> 2] = date3.getUTCSeconds();
            GROWABLE_HEAP_I32()[tmPtr1 + 4 >> 2] = date3.getUTCMinutes();
            GROWABLE_HEAP_I32()[tmPtr1 + 8 >> 2] = date3.getUTCHours();
            GROWABLE_HEAP_I32()[tmPtr1 + 12 >> 2] = date3.getUTCDate();
            GROWABLE_HEAP_I32()[tmPtr1 + 16 >> 2] = date3.getUTCMonth();
            GROWABLE_HEAP_I32()[tmPtr1 + 20 >> 2] = date3.getUTCFullYear() - 1900;
            GROWABLE_HEAP_I32()[tmPtr1 + 24 >> 2] = date3.getUTCDay();
            var start1 = Date.UTC(date3.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
            var yday1 = (date3.getTime() - start1) / 86400000 | 0;
            GROWABLE_HEAP_I32()[tmPtr1 + 28 >> 2] = yday1;
        }
        function __localtime_js(time1, tmPtr1) {
            var date3 = new Date(GROWABLE_HEAP_I32()[time1 >> 2] * 1e3);
            GROWABLE_HEAP_I32()[tmPtr1 >> 2] = date3.getSeconds();
            GROWABLE_HEAP_I32()[tmPtr1 + 4 >> 2] = date3.getMinutes();
            GROWABLE_HEAP_I32()[tmPtr1 + 8 >> 2] = date3.getHours();
            GROWABLE_HEAP_I32()[tmPtr1 + 12 >> 2] = date3.getDate();
            GROWABLE_HEAP_I32()[tmPtr1 + 16 >> 2] = date3.getMonth();
            GROWABLE_HEAP_I32()[tmPtr1 + 20 >> 2] = date3.getFullYear() - 1900;
            GROWABLE_HEAP_I32()[tmPtr1 + 24 >> 2] = date3.getDay();
            var start1 = new Date(date3.getFullYear(), 0, 1);
            var yday1 = (date3.getTime() - start1.getTime()) / 86400000 | 0;
            GROWABLE_HEAP_I32()[tmPtr1 + 28 >> 2] = yday1;
            GROWABLE_HEAP_I32()[tmPtr1 + 36 >> 2] = -(date3.getTimezoneOffset() * 60);
            var summerOffset1 = new Date(date3.getFullYear(), 6, 1).getTimezoneOffset();
            var winterOffset1 = start1.getTimezoneOffset();
            var dst1 = (summerOffset1 != winterOffset1 && date3.getTimezoneOffset() == Math.min(winterOffset1, summerOffset1)) | 0;
            GROWABLE_HEAP_I32()[tmPtr1 + 32 >> 2] = dst1;
        }
        function _tzset_impl(timezone1, daylight1, tzname1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(32, 1, timezone1, daylight1, tzname1);
            var currentYear1 = (new Date).getFullYear();
            var winter1 = new Date(currentYear1, 0, 1);
            var summer1 = new Date(currentYear1, 6, 1);
            var winterOffset1 = winter1.getTimezoneOffset();
            var summerOffset1 = summer1.getTimezoneOffset();
            var stdTimezoneOffset1 = Math.max(winterOffset1, summerOffset1);
            GROWABLE_HEAP_I32()[timezone1 >> 2] = stdTimezoneOffset1 * 60;
            GROWABLE_HEAP_I32()[daylight1 >> 2] = Number(winterOffset1 != summerOffset1);
            function extractZone1(date3) {
                var match1 = date3.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                return match1 ? match1[1] : "GMT";
            }
            var winterName1 = extractZone1(winter1);
            var summerName1 = extractZone1(summer1);
            var winterNamePtr1 = allocateUTF8(winterName1);
            var summerNamePtr1 = allocateUTF8(summerName1);
            if (summerOffset1 < winterOffset1) {
                GROWABLE_HEAP_U32()[tzname1 >> 2] = winterNamePtr1;
                GROWABLE_HEAP_U32()[tzname1 + 4 >> 2] = summerNamePtr1;
            } else {
                GROWABLE_HEAP_U32()[tzname1 >> 2] = summerNamePtr1;
                GROWABLE_HEAP_U32()[tzname1 + 4 >> 2] = winterNamePtr1;
            }
        }
        function __tzset_js(timezone1, daylight1, tzname1) {
            if (__tzset_js.called) return;
            __tzset_js.called = true;
            _tzset_impl(timezone1, daylight1, tzname1);
        }
        function _abort() {
            abort("");
        }
        function _emscripten_set_main_loop_timing(mode1, value1) {
            Browser.mainLoop.timingMode = mode1;
            Browser.mainLoop.timingValue = value1;
            if (!Browser.mainLoop.func) return 1;
            if (!Browser.mainLoop.running) {
                runtimeKeepalivePush();
                Browser.mainLoop.running = true;
            }
            if (mode1 == 0) {
                Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout1() {
                    var timeUntilNextTick1 = Math.max(0, Browser.mainLoop.tickStartTime + value1 - _emscripten_get_now()) | 0;
                    setTimeout(Browser.mainLoop.runner, timeUntilNextTick1);
                };
                Browser.mainLoop.method = "timeout";
            } else if (mode1 == 1) {
                Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF1() {
                    Browser.requestAnimationFrame(Browser.mainLoop.runner);
                };
                Browser.mainLoop.method = "rAF";
            } else if (mode1 == 2) {
                if (typeof setImmediate == "undefined") {
                    var setImmediates1 = [];
                    var emscriptenMainLoopMessageId1 = "setimmediate";
                    var Browser_setImmediate_messageHandler1 = function(event1) {
                        if (event1.data === emscriptenMainLoopMessageId1 || event1.data.target === emscriptenMainLoopMessageId1) {
                            event1.stopPropagation();
                            setImmediates1.shift()();
                        }
                    };
                    addEventListener("message", Browser_setImmediate_messageHandler1, true);
                    setImmediate = function Browser_emulated_setImmediate1(func1) {
                        setImmediates1.push(func1);
                        if (ENVIRONMENT_IS_WORKER) {
                            if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
                            Module["setImmediates"].push(func1);
                            postMessage({
                                target: emscriptenMainLoopMessageId1
                            });
                        } else postMessage(emscriptenMainLoopMessageId1, "*");
                    };
                }
                Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate1() {
                    setImmediate(Browser.mainLoop.runner);
                };
                Browser.mainLoop.method = "immediate";
            }
            return 0;
        }
        var _emscripten_get_now;
        if (ENVIRONMENT_IS_PTHREAD) _emscripten_get_now = ()=>performance.now() - Module["__performance_now_clock_drift"];
        else _emscripten_get_now = ()=>performance.now();
        function runtimeKeepalivePush() {
            runtimeKeepaliveCounter += 1;
        }
        function maybeExit() {
            if (!keepRuntimeAlive()) try {
                if (ENVIRONMENT_IS_PTHREAD) __emscripten_thread_exit(EXITSTATUS);
                else _exit(EXITSTATUS);
            } catch (e1) {
                handleException(e1);
            }
        }
        function setMainLoop(browserIterationFunc1, fps1, simulateInfiniteLoop1, arg1, noSetTiming1) {
            assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
            Browser.mainLoop.func = browserIterationFunc1;
            Browser.mainLoop.arg = arg1;
            var thisMainLoopId1 = Browser.mainLoop.currentlyRunningMainloop;
            function checkIsRunning1() {
                if (thisMainLoopId1 < Browser.mainLoop.currentlyRunningMainloop) {
                    runtimeKeepalivePop();
                    maybeExit();
                    return false;
                }
                return true;
            }
            Browser.mainLoop.running = false;
            Browser.mainLoop.runner = function Browser_mainLoop_runner1() {
                if (ABORT) return;
                if (Browser.mainLoop.queue.length > 0) {
                    var start1 = Date.now();
                    var blocker1 = Browser.mainLoop.queue.shift();
                    blocker1.func(blocker1.arg);
                    if (Browser.mainLoop.remainingBlockers) {
                        var remaining1 = Browser.mainLoop.remainingBlockers;
                        var next1 = remaining1 % 1 == 0 ? remaining1 - 1 : Math.floor(remaining1);
                        if (blocker1.counted) Browser.mainLoop.remainingBlockers = next1;
                        else {
                            next1 = next1 + .5;
                            Browser.mainLoop.remainingBlockers = (8 * remaining1 + next1) / 9;
                        }
                    }
                    out('main loop blocker "' + blocker1.name + '" took ' + (Date.now() - start1) + " ms");
                    Browser.mainLoop.updateStatus();
                    if (!checkIsRunning1()) return;
                    setTimeout(Browser.mainLoop.runner, 0);
                    return;
                }
                if (!checkIsRunning1()) return;
                Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
                if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
                    Browser.mainLoop.scheduler();
                    return;
                } else if (Browser.mainLoop.timingMode == 0) Browser.mainLoop.tickStartTime = _emscripten_get_now();
                Browser.mainLoop.runIter(browserIterationFunc1);
                if (!checkIsRunning1()) return;
                if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
                Browser.mainLoop.scheduler();
            };
            if (!noSetTiming1) {
                if (fps1 && fps1 > 0) _emscripten_set_main_loop_timing(0, 1e3 / fps1);
                else _emscripten_set_main_loop_timing(1, 1);
                Browser.mainLoop.scheduler();
            }
            if (simulateInfiniteLoop1) throw "unwind";
        }
        function callUserCallback(func1, synchronous1) {
            if (runtimeExited || ABORT) return;
            if (synchronous1) {
                func1();
                return;
            }
            try {
                func1();
                maybeExit();
            } catch (e1) {
                handleException(e1);
            }
        }
        function runtimeKeepalivePop() {
            runtimeKeepaliveCounter -= 1;
        }
        function safeSetTimeout(func1, timeout1) {
            runtimeKeepalivePush();
            return setTimeout(function() {
                runtimeKeepalivePop();
                callUserCallback(func1);
            }, timeout1);
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
                    var timingMode1 = Browser.mainLoop.timingMode;
                    var timingValue1 = Browser.mainLoop.timingValue;
                    var func1 = Browser.mainLoop.func;
                    Browser.mainLoop.func = null;
                    setMainLoop(func1, 0, false, Browser.mainLoop.arg, true);
                    _emscripten_set_main_loop_timing(timingMode1, timingValue1);
                    Browser.mainLoop.scheduler();
                },
                updateStatus: function() {
                    if (Module["setStatus"]) {
                        var message1 = Module["statusMessage"] || "Please wait...";
                        var remaining1 = Browser.mainLoop.remainingBlockers;
                        var expected1 = Browser.mainLoop.expectedBlockers;
                        if (remaining1) {
                            if (remaining1 < expected1) Module["setStatus"](message1 + " (" + (expected1 - remaining1) + "/" + expected1 + ")");
                            else Module["setStatus"](message1);
                        } else Module["setStatus"]("");
                    }
                },
                runIter: function(func1) {
                    if (ABORT) return;
                    if (Module["preMainLoop"]) {
                        var preRet1 = Module["preMainLoop"]();
                        if (preRet1 === false) return;
                    }
                    callUserCallback(func1);
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
                } catch (e1) {
                    Browser.hasBlobConstructor = false;
                    out("warning: no blob constructor, cannot create blobs with mimetypes");
                }
                Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !Browser.hasBlobConstructor ? out("warning: no BlobBuilder") : null;
                Browser.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
                if (!Module.noImageDecoding && typeof Browser.URLObject == "undefined") {
                    out("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
                    Module.noImageDecoding = true;
                }
                var imagePlugin1 = {};
                imagePlugin1["canHandle"] = function imagePlugin_canHandle1(name1) {
                    return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name1);
                };
                imagePlugin1["handle"] = function imagePlugin_handle1(byteArray1, name1, onload1, onerror1) {
                    var b1 = null;
                    if (Browser.hasBlobConstructor) try {
                        b1 = new Blob([
                            byteArray1
                        ], {
                            type: Browser.getMimetype(name1)
                        });
                        if (b1.size !== byteArray1.length) b1 = new Blob([
                            new Uint8Array(byteArray1).buffer
                        ], {
                            type: Browser.getMimetype(name1)
                        });
                    } catch (e1) {
                        warnOnce("Blob constructor present but fails: " + e1 + "; falling back to blob builder");
                    }
                    if (!b1) {
                        var bb1 = new Browser.BlobBuilder;
                        bb1.append(new Uint8Array(byteArray1).buffer);
                        b1 = bb1.getBlob();
                    }
                    var url1 = Browser.URLObject.createObjectURL(b1);
                    var img1 = new Image;
                    img1.onload = ()=>{
                        assert(img1.complete, "Image " + name1 + " could not be decoded");
                        var canvas1 = document.createElement("canvas");
                        canvas1.width = img1.width;
                        canvas1.height = img1.height;
                        var ctx1 = canvas1.getContext("2d");
                        ctx1.drawImage(img1, 0, 0);
                        preloadedImages[name1] = canvas1;
                        Browser.URLObject.revokeObjectURL(url1);
                        if (onload1) onload1(byteArray1);
                    };
                    img1.onerror = (event1)=>{
                        out("Image " + url1 + " could not be decoded");
                        if (onerror1) onerror1();
                    };
                    img1.src = url1;
                };
                Module["preloadPlugins"].push(imagePlugin1);
                var audioPlugin1 = {};
                audioPlugin1["canHandle"] = function audioPlugin_canHandle1(name1) {
                    return !Module.noAudioDecoding && name1.substr(-4) in {
                        ".ogg": 1,
                        ".wav": 1,
                        ".mp3": 1
                    };
                };
                audioPlugin1["handle"] = function audioPlugin_handle1(byteArray1, name1, onload1, onerror1) {
                    var done1 = false;
                    function finish1(audio1) {
                        if (done1) return;
                        done1 = true;
                        preloadedAudios[name1] = audio1;
                        if (onload1) onload1(byteArray1);
                    }
                    function fail1() {
                        if (done1) return;
                        done1 = true;
                        preloadedAudios[name1] = new Audio;
                        if (onerror1) onerror1();
                    }
                    if (Browser.hasBlobConstructor) {
                        try {
                            var b1 = new Blob([
                                byteArray1
                            ], {
                                type: Browser.getMimetype(name1)
                            });
                        } catch (e1) {
                            return fail1();
                        }
                        var url1 = Browser.URLObject.createObjectURL(b1);
                        var audio1 = new Audio;
                        audio1.addEventListener("canplaythrough", function() {
                            finish1(audio1);
                        }, false);
                        audio1.onerror = function audio_onerror1(event1) {
                            if (done1) return;
                            out("warning: browser could not fully decode audio " + name1 + ", trying slower base64 approach");
                            function encode641(data1) {
                                var BASE1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                                var PAD1 = "=";
                                var ret1 = "";
                                var leftchar1 = 0;
                                var leftbits1 = 0;
                                for(var i1 = 0; i1 < data1.length; i1++){
                                    leftchar1 = leftchar1 << 8 | data1[i1];
                                    leftbits1 += 8;
                                    while(leftbits1 >= 6){
                                        var curr1 = leftchar1 >> leftbits1 - 6 & 63;
                                        leftbits1 -= 6;
                                        ret1 += BASE1[curr1];
                                    }
                                }
                                if (leftbits1 == 2) {
                                    ret1 += BASE1[(leftchar1 & 3) << 4];
                                    ret1 += PAD1 + PAD1;
                                } else if (leftbits1 == 4) {
                                    ret1 += BASE1[(leftchar1 & 15) << 2];
                                    ret1 += PAD1;
                                }
                                return ret1;
                            }
                            audio1.src = "data:audio/x-" + name1.substr(-3) + ";base64," + encode641(byteArray1);
                            finish1(audio1);
                        };
                        audio1.src = url1;
                        safeSetTimeout(function() {
                            finish1(audio1);
                        }, 1e4);
                    } else return fail1();
                };
                Module["preloadPlugins"].push(audioPlugin1);
                function pointerLockChange1() {
                    Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"];
                }
                var canvas1 = Module["canvas"];
                if (canvas1) {
                    canvas1.requestPointerLock = canvas1["requestPointerLock"] || canvas1["mozRequestPointerLock"] || canvas1["webkitRequestPointerLock"] || canvas1["msRequestPointerLock"] || function() {};
                    canvas1.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function() {};
                    canvas1.exitPointerLock = canvas1.exitPointerLock.bind(document);
                    document.addEventListener("pointerlockchange", pointerLockChange1, false);
                    document.addEventListener("mozpointerlockchange", pointerLockChange1, false);
                    document.addEventListener("webkitpointerlockchange", pointerLockChange1, false);
                    document.addEventListener("mspointerlockchange", pointerLockChange1, false);
                    if (Module["elementPointerLock"]) canvas1.addEventListener("click", function(ev1) {
                        if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                            Module["canvas"].requestPointerLock();
                            ev1.preventDefault();
                        }
                    }, false);
                }
            },
            handledByPreloadPlugin: function(byteArray1, fullname1, finish1, onerror1) {
                Browser.init();
                var handled1 = false;
                Module["preloadPlugins"].forEach(function(plugin1) {
                    if (handled1) return;
                    if (plugin1["canHandle"](fullname1)) {
                        plugin1["handle"](byteArray1, fullname1, finish1, onerror1);
                        handled1 = true;
                    }
                });
                return handled1;
            },
            createContext: function(canvas1, useWebGL1, setInModule1, webGLContextAttributes1) {
                if (useWebGL1 && Module.ctx && canvas1 == Module.canvas) return Module.ctx;
                var ctx1;
                var contextHandle1;
                if (useWebGL1) {
                    var contextAttributes1 = {
                        antialias: false,
                        alpha: false,
                        majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1
                    };
                    if (webGLContextAttributes1) for(var attribute1 in webGLContextAttributes1)contextAttributes1[attribute1] = webGLContextAttributes1[attribute1];
                    if (typeof GL != "undefined") {
                        contextHandle1 = GL.createContext(canvas1, contextAttributes1);
                        if (contextHandle1) ctx1 = GL.getContext(contextHandle1).GLctx;
                    }
                } else ctx1 = canvas1.getContext("2d");
                if (!ctx1) return null;
                if (setInModule1) {
                    if (!useWebGL1) assert(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
                    Module.ctx = ctx1;
                    if (useWebGL1) GL.makeContextCurrent(contextHandle1);
                    Module.useWebGL = useWebGL1;
                    Browser.moduleContextCreatedCallbacks.forEach(function(callback1) {
                        callback1();
                    });
                    Browser.init();
                }
                return ctx1;
            },
            destroyContext: function(canvas1, useWebGL1, setInModule1) {},
            fullscreenHandlersInstalled: false,
            lockPointer: undefined,
            resizeCanvas: undefined,
            requestFullscreen: function(lockPointer1, resizeCanvas1) {
                Browser.lockPointer = lockPointer1;
                Browser.resizeCanvas = resizeCanvas1;
                if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
                if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
                var canvas1 = Module["canvas"];
                function fullscreenChange1() {
                    Browser.isFullscreen = false;
                    var canvasContainer1 = canvas1.parentNode;
                    if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer1) {
                        canvas1.exitFullscreen = Browser.exitFullscreen;
                        if (Browser.lockPointer) canvas1.requestPointerLock();
                        Browser.isFullscreen = true;
                        if (Browser.resizeCanvas) Browser.setFullscreenCanvasSize();
                        else Browser.updateCanvasDimensions(canvas1);
                    } else {
                        canvasContainer1.parentNode.insertBefore(canvas1, canvasContainer1);
                        canvasContainer1.parentNode.removeChild(canvasContainer1);
                        if (Browser.resizeCanvas) Browser.setWindowedCanvasSize();
                        else Browser.updateCanvasDimensions(canvas1);
                    }
                    if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
                    if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen);
                }
                if (!Browser.fullscreenHandlersInstalled) {
                    Browser.fullscreenHandlersInstalled = true;
                    document.addEventListener("fullscreenchange", fullscreenChange1, false);
                    document.addEventListener("mozfullscreenchange", fullscreenChange1, false);
                    document.addEventListener("webkitfullscreenchange", fullscreenChange1, false);
                    document.addEventListener("MSFullscreenChange", fullscreenChange1, false);
                }
                var canvasContainer1 = document.createElement("div");
                canvas1.parentNode.insertBefore(canvasContainer1, canvas1);
                canvasContainer1.appendChild(canvas1);
                canvasContainer1.requestFullscreen = canvasContainer1["requestFullscreen"] || canvasContainer1["mozRequestFullScreen"] || canvasContainer1["msRequestFullscreen"] || (canvasContainer1["webkitRequestFullscreen"] ? function() {
                    canvasContainer1["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
                } : null) || (canvasContainer1["webkitRequestFullScreen"] ? function() {
                    canvasContainer1["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
                } : null);
                canvasContainer1.requestFullscreen();
            },
            exitFullscreen: function() {
                if (!Browser.isFullscreen) return false;
                var CFS1 = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function() {};
                CFS1.apply(document, []);
                return true;
            },
            nextRAF: 0,
            fakeRequestAnimationFrame: function(func1) {
                var now1 = Date.now();
                if (Browser.nextRAF === 0) Browser.nextRAF = now1 + 1e3 / 60;
                else while(now1 + 2 >= Browser.nextRAF)Browser.nextRAF += 1e3 / 60;
                var delay1 = Math.max(Browser.nextRAF - now1, 0);
                setTimeout(func1, delay1);
            },
            requestAnimationFrame: function(func1) {
                if (typeof requestAnimationFrame == "function") {
                    requestAnimationFrame(func1);
                    return;
                }
                var RAF1 = Browser.fakeRequestAnimationFrame;
                RAF1(func1);
            },
            safeSetTimeout: function(func1) {
                return safeSetTimeout(func1);
            },
            safeRequestAnimationFrame: function(func1) {
                runtimeKeepalivePush();
                return Browser.requestAnimationFrame(function() {
                    runtimeKeepalivePop();
                    callUserCallback(func1);
                });
            },
            getMimetype: function(name1) {
                return ({
                    "jpg": "image/jpeg",
                    "jpeg": "image/jpeg",
                    "png": "image/png",
                    "bmp": "image/bmp",
                    "ogg": "audio/ogg",
                    "wav": "audio/wav",
                    "mp3": "audio/mpeg"
                })[name1.substr(name1.lastIndexOf(".") + 1)];
            },
            getUserMedia: function(func1) {
                if (!window.getUserMedia) window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"];
                window.getUserMedia(func1);
            },
            getMovementX: function(event1) {
                return event1["movementX"] || event1["mozMovementX"] || event1["webkitMovementX"] || 0;
            },
            getMovementY: function(event1) {
                return event1["movementY"] || event1["mozMovementY"] || event1["webkitMovementY"] || 0;
            },
            getMouseWheelDelta: function(event1) {
                var delta1 = 0;
                switch(event1.type){
                    case "DOMMouseScroll":
                        delta1 = event1.detail / 3;
                        break;
                    case "mousewheel":
                        delta1 = event1.wheelDelta / 120;
                        break;
                    case "wheel":
                        delta1 = event1.deltaY;
                        switch(event1.deltaMode){
                            case 0:
                                delta1 /= 100;
                                break;
                            case 1:
                                delta1 /= 3;
                                break;
                            case 2:
                                delta1 *= 80;
                                break;
                            default:
                                throw "unrecognized mouse wheel delta mode: " + event1.deltaMode;
                        }
                        break;
                    default:
                        throw "unrecognized mouse wheel event: " + event1.type;
                }
                return delta1;
            },
            mouseX: 0,
            mouseY: 0,
            mouseMovementX: 0,
            mouseMovementY: 0,
            touches: {},
            lastTouches: {},
            calculateMouseEvent: function(event1) {
                if (Browser.pointerLock) {
                    if (event1.type != "mousemove" && "mozMovementX" in event1) Browser.mouseMovementX = Browser.mouseMovementY = 0;
                    else {
                        Browser.mouseMovementX = Browser.getMovementX(event1);
                        Browser.mouseMovementY = Browser.getMovementY(event1);
                    }
                    if (typeof SDL != "undefined") {
                        Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
                        Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
                    } else {
                        Browser.mouseX += Browser.mouseMovementX;
                        Browser.mouseY += Browser.mouseMovementY;
                    }
                } else {
                    var rect1 = Module["canvas"].getBoundingClientRect();
                    var cw1 = Module["canvas"].width;
                    var ch1 = Module["canvas"].height;
                    var scrollX1 = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
                    var scrollY1 = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
                    if (event1.type === "touchstart" || event1.type === "touchend" || event1.type === "touchmove") {
                        var touch1 = event1.touch;
                        if (touch1 === undefined) return;
                        var adjustedX1 = touch1.pageX - (scrollX1 + rect1.left);
                        var adjustedY1 = touch1.pageY - (scrollY1 + rect1.top);
                        adjustedX1 = adjustedX1 * (cw1 / rect1.width);
                        adjustedY1 = adjustedY1 * (ch1 / rect1.height);
                        var coords1 = {
                            x: adjustedX1,
                            y: adjustedY1
                        };
                        if (event1.type === "touchstart") {
                            Browser.lastTouches[touch1.identifier] = coords1;
                            Browser.touches[touch1.identifier] = coords1;
                        } else if (event1.type === "touchend" || event1.type === "touchmove") {
                            var last1 = Browser.touches[touch1.identifier];
                            if (!last1) last1 = coords1;
                            Browser.lastTouches[touch1.identifier] = last1;
                            Browser.touches[touch1.identifier] = coords1;
                        }
                        return;
                    }
                    var x10 = event1.pageX - (scrollX1 + rect1.left);
                    var y1 = event1.pageY - (scrollY1 + rect1.top);
                    x10 = x10 * (cw1 / rect1.width);
                    y1 = y1 * (ch1 / rect1.height);
                    Browser.mouseMovementX = x10 - Browser.mouseX;
                    Browser.mouseMovementY = y1 - Browser.mouseY;
                    Browser.mouseX = x10;
                    Browser.mouseY = y1;
                }
            },
            resizeListeners: [],
            updateResizeListeners: function() {
                var canvas1 = Module["canvas"];
                Browser.resizeListeners.forEach(function(listener1) {
                    listener1(canvas1.width, canvas1.height);
                });
            },
            setCanvasSize: function(width1, height1, noUpdates1) {
                var canvas1 = Module["canvas"];
                Browser.updateCanvasDimensions(canvas1, width1, height1);
                if (!noUpdates1) Browser.updateResizeListeners();
            },
            windowedWidth: 0,
            windowedHeight: 0,
            setFullscreenCanvasSize: function() {
                if (typeof SDL != "undefined") {
                    var flags1 = GROWABLE_HEAP_U32()[SDL.screen >> 2];
                    flags1 = flags1 | 8388608;
                    GROWABLE_HEAP_I32()[SDL.screen >> 2] = flags1;
                }
                Browser.updateCanvasDimensions(Module["canvas"]);
                Browser.updateResizeListeners();
            },
            setWindowedCanvasSize: function() {
                if (typeof SDL != "undefined") {
                    var flags1 = GROWABLE_HEAP_U32()[SDL.screen >> 2];
                    flags1 = flags1 & -8388609;
                    GROWABLE_HEAP_I32()[SDL.screen >> 2] = flags1;
                }
                Browser.updateCanvasDimensions(Module["canvas"]);
                Browser.updateResizeListeners();
            },
            updateCanvasDimensions: function(canvas1, wNative1, hNative1) {
                if (wNative1 && hNative1) {
                    canvas1.widthNative = wNative1;
                    canvas1.heightNative = hNative1;
                } else {
                    wNative1 = canvas1.widthNative;
                    hNative1 = canvas1.heightNative;
                }
                var w1 = wNative1;
                var h1 = hNative1;
                if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
                    if (w1 / h1 < Module["forcedAspectRatio"]) w1 = Math.round(h1 * Module["forcedAspectRatio"]);
                    else h1 = Math.round(w1 / Module["forcedAspectRatio"]);
                }
                if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas1.parentNode && typeof screen != "undefined") {
                    var factor1 = Math.min(screen.width / w1, screen.height / h1);
                    w1 = Math.round(w1 * factor1);
                    h1 = Math.round(h1 * factor1);
                }
                if (Browser.resizeCanvas) {
                    if (canvas1.width != w1) canvas1.width = w1;
                    if (canvas1.height != h1) canvas1.height = h1;
                    if (typeof canvas1.style != "undefined") {
                        canvas1.style.removeProperty("width");
                        canvas1.style.removeProperty("height");
                    }
                } else {
                    if (canvas1.width != wNative1) canvas1.width = wNative1;
                    if (canvas1.height != hNative1) canvas1.height = hNative1;
                    if (typeof canvas1.style != "undefined") {
                        if (w1 != wNative1 || h1 != hNative1) {
                            canvas1.style.setProperty("width", w1 + "px", "important");
                            canvas1.style.setProperty("height", h1 + "px", "important");
                        } else {
                            canvas1.style.removeProperty("width");
                            canvas1.style.removeProperty("height");
                        }
                    }
                }
            }
        };
        function _emscripten_cancel_main_loop() {
            Browser.mainLoop.pause();
            Browser.mainLoop.func = null;
        }
        function _emscripten_check_blocking_allowed() {
            if (ENVIRONMENT_IS_WORKER) return;
            warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread");
        }
        function _emscripten_console_error(str1) {
            console.error(UTF8ToString(str1));
        }
        function _emscripten_force_exit(status1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(33, 1, status1);
            noExitRuntime = false;
            runtimeKeepaliveCounter = 0;
            exit(status1);
        }
        function __webgl_enable_ANGLE_instanced_arrays(ctx1) {
            var ext1 = ctx1.getExtension("ANGLE_instanced_arrays");
            if (ext1) {
                ctx1["vertexAttribDivisor"] = function(index1, divisor1) {
                    ext1["vertexAttribDivisorANGLE"](index1, divisor1);
                };
                ctx1["drawArraysInstanced"] = function(mode1, first1, count1, primcount1) {
                    ext1["drawArraysInstancedANGLE"](mode1, first1, count1, primcount1);
                };
                ctx1["drawElementsInstanced"] = function(mode1, count1, type1, indices1, primcount1) {
                    ext1["drawElementsInstancedANGLE"](mode1, count1, type1, indices1, primcount1);
                };
                return 1;
            }
        }
        function __webgl_enable_OES_vertex_array_object(ctx1) {
            var ext1 = ctx1.getExtension("OES_vertex_array_object");
            if (ext1) {
                ctx1["createVertexArray"] = function() {
                    return ext1["createVertexArrayOES"]();
                };
                ctx1["deleteVertexArray"] = function(vao1) {
                    ext1["deleteVertexArrayOES"](vao1);
                };
                ctx1["bindVertexArray"] = function(vao1) {
                    ext1["bindVertexArrayOES"](vao1);
                };
                ctx1["isVertexArray"] = function(vao1) {
                    return ext1["isVertexArrayOES"](vao1);
                };
                return 1;
            }
        }
        function __webgl_enable_WEBGL_draw_buffers(ctx1) {
            var ext1 = ctx1.getExtension("WEBGL_draw_buffers");
            if (ext1) {
                ctx1["drawBuffers"] = function(n1, bufs1) {
                    ext1["drawBuffersWEBGL"](n1, bufs1);
                };
                return 1;
            }
        }
        function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx1) {
            return !!(ctx1.dibvbi = ctx1.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
        }
        function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx1) {
            return !!(ctx1.mdibvbi = ctx1.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
        }
        function __webgl_enable_WEBGL_multi_draw(ctx1) {
            return !!(ctx1.multiDrawWebgl = ctx1.getExtension("WEBGL_multi_draw"));
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
            contexts: {},
            offscreenCanvases: {},
            queries: [],
            samplers: [],
            transformFeedbacks: [],
            syncs: [],
            stringCache: {},
            stringiCache: {},
            unpackAlignment: 4,
            recordError: function recordError1(errorCode1) {
                if (!GL.lastError) GL.lastError = errorCode1;
            },
            getNewId: function(table1) {
                var ret1 = GL.counter++;
                for(var i1 = table1.length; i1 < ret1; i1++)table1[i1] = null;
                return ret1;
            },
            getSource: function(shader1, count1, string1, length1) {
                var source1 = "";
                for(var i1 = 0; i1 < count1; ++i1){
                    var len1 = length1 ? GROWABLE_HEAP_I32()[length1 + i1 * 4 >> 2] : -1;
                    source1 += UTF8ToString(GROWABLE_HEAP_I32()[string1 + i1 * 4 >> 2], len1 < 0 ? undefined : len1);
                }
                return source1;
            },
            createContext: function(canvas1, webGLContextAttributes1) {
                if (webGLContextAttributes1.renderViaOffscreenBackBuffer) webGLContextAttributes1["preserveDrawingBuffer"] = true;
                if (!canvas1.getContextSafariWebGL2Fixed) {
                    canvas1.getContextSafariWebGL2Fixed = canvas1.getContext;
                    function fixedGetContext1(ver1, attrs1) {
                        var gl1 = canvas1.getContextSafariWebGL2Fixed(ver1, attrs1);
                        return ver1 == "webgl" == gl1 instanceof WebGLRenderingContext ? gl1 : null;
                    }
                    canvas1.getContext = fixedGetContext1;
                }
                var ctx1 = webGLContextAttributes1.majorVersion > 1 ? canvas1.getContext("webgl2", webGLContextAttributes1) : canvas1.getContext("webgl", webGLContextAttributes1);
                if (!ctx1) return 0;
                var handle1 = GL.registerContext(ctx1, webGLContextAttributes1);
                return handle1;
            },
            enableOffscreenFramebufferAttributes: function(webGLContextAttributes1) {
                webGLContextAttributes1.renderViaOffscreenBackBuffer = true;
                webGLContextAttributes1.preserveDrawingBuffer = true;
            },
            createOffscreenFramebuffer: function(context1) {
                var gl1 = context1.GLctx;
                var fbo1 = gl1.createFramebuffer();
                gl1.bindFramebuffer(36160, fbo1);
                context1.defaultFbo = fbo1;
                context1.defaultFboForbidBlitFramebuffer = false;
                if (gl1.getContextAttributes().antialias) context1.defaultFboForbidBlitFramebuffer = true;
                else {
                    var firefoxMatch1 = navigator.userAgent.toLowerCase().match(/firefox\/(\d\d)/);
                    if (firefoxMatch1 != null) {
                        var firefoxVersion1 = firefoxMatch1[1];
                        context1.defaultFboForbidBlitFramebuffer = firefoxVersion1 < 67;
                    }
                }
                context1.defaultColorTarget = gl1.createTexture();
                context1.defaultDepthTarget = gl1.createRenderbuffer();
                GL.resizeOffscreenFramebuffer(context1);
                gl1.bindTexture(3553, context1.defaultColorTarget);
                gl1.texParameteri(3553, 10241, 9728);
                gl1.texParameteri(3553, 10240, 9728);
                gl1.texParameteri(3553, 10242, 33071);
                gl1.texParameteri(3553, 10243, 33071);
                gl1.texImage2D(3553, 0, 6408, gl1.canvas.width, gl1.canvas.height, 0, 6408, 5121, null);
                gl1.framebufferTexture2D(36160, 36064, 3553, context1.defaultColorTarget, 0);
                gl1.bindTexture(3553, null);
                var depthTarget1 = gl1.createRenderbuffer();
                gl1.bindRenderbuffer(36161, context1.defaultDepthTarget);
                gl1.renderbufferStorage(36161, 33189, gl1.canvas.width, gl1.canvas.height);
                gl1.framebufferRenderbuffer(36160, 36096, 36161, context1.defaultDepthTarget);
                gl1.bindRenderbuffer(36161, null);
                var vertices1 = [
                    -1,
                    -1,
                    -1,
                    1,
                    1,
                    -1,
                    1,
                    1
                ];
                var vb1 = gl1.createBuffer();
                gl1.bindBuffer(34962, vb1);
                gl1.bufferData(34962, new Float32Array(vertices1), 35044);
                gl1.bindBuffer(34962, null);
                context1.blitVB = vb1;
                var vsCode1 = "attribute vec2 pos;varying lowp vec2 tex;void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }";
                var vs1 = gl1.createShader(35633);
                gl1.shaderSource(vs1, vsCode1);
                gl1.compileShader(vs1);
                var fsCode1 = "varying lowp vec2 tex;uniform sampler2D sampler;void main() { gl_FragColor = texture2D(sampler, tex); }";
                var fs1 = gl1.createShader(35632);
                gl1.shaderSource(fs1, fsCode1);
                gl1.compileShader(fs1);
                var blitProgram1 = gl1.createProgram();
                gl1.attachShader(blitProgram1, vs1);
                gl1.attachShader(blitProgram1, fs1);
                gl1.linkProgram(blitProgram1);
                context1.blitProgram = blitProgram1;
                context1.blitPosLoc = gl1.getAttribLocation(blitProgram1, "pos");
                gl1.useProgram(blitProgram1);
                gl1.uniform1i(gl1.getUniformLocation(blitProgram1, "sampler"), 0);
                gl1.useProgram(null);
                context1.defaultVao = undefined;
                if (gl1.createVertexArray) {
                    context1.defaultVao = gl1.createVertexArray();
                    gl1.bindVertexArray(context1.defaultVao);
                    gl1.enableVertexAttribArray(context1.blitPosLoc);
                    gl1.bindVertexArray(null);
                }
            },
            resizeOffscreenFramebuffer: function(context1) {
                var gl1 = context1.GLctx;
                if (context1.defaultColorTarget) {
                    var prevTextureBinding1 = gl1.getParameter(32873);
                    gl1.bindTexture(3553, context1.defaultColorTarget);
                    gl1.texImage2D(3553, 0, 6408, gl1.drawingBufferWidth, gl1.drawingBufferHeight, 0, 6408, 5121, null);
                    gl1.bindTexture(3553, prevTextureBinding1);
                }
                if (context1.defaultDepthTarget) {
                    var prevRenderBufferBinding1 = gl1.getParameter(36007);
                    gl1.bindRenderbuffer(36161, context1.defaultDepthTarget);
                    gl1.renderbufferStorage(36161, 33189, gl1.drawingBufferWidth, gl1.drawingBufferHeight);
                    gl1.bindRenderbuffer(36161, prevRenderBufferBinding1);
                }
            },
            blitOffscreenFramebuffer: function(context1) {
                var gl1 = context1.GLctx;
                var prevScissorTest1 = gl1.getParameter(3089);
                if (prevScissorTest1) gl1.disable(3089);
                var prevFbo1 = gl1.getParameter(36006);
                if (gl1.blitFramebuffer && !context1.defaultFboForbidBlitFramebuffer) {
                    gl1.bindFramebuffer(36008, context1.defaultFbo);
                    gl1.bindFramebuffer(36009, null);
                    gl1.blitFramebuffer(0, 0, gl1.canvas.width, gl1.canvas.height, 0, 0, gl1.canvas.width, gl1.canvas.height, 16384, 9728);
                } else {
                    gl1.bindFramebuffer(36160, null);
                    var prevProgram1 = gl1.getParameter(35725);
                    gl1.useProgram(context1.blitProgram);
                    var prevVB1 = gl1.getParameter(34964);
                    gl1.bindBuffer(34962, context1.blitVB);
                    var prevActiveTexture1 = gl1.getParameter(34016);
                    gl1.activeTexture(33984);
                    var prevTextureBinding1 = gl1.getParameter(32873);
                    gl1.bindTexture(3553, context1.defaultColorTarget);
                    var prevBlend1 = gl1.getParameter(3042);
                    if (prevBlend1) gl1.disable(3042);
                    var prevCullFace1 = gl1.getParameter(2884);
                    if (prevCullFace1) gl1.disable(2884);
                    var prevDepthTest1 = gl1.getParameter(2929);
                    if (prevDepthTest1) gl1.disable(2929);
                    var prevStencilTest1 = gl1.getParameter(2960);
                    if (prevStencilTest1) gl1.disable(2960);
                    function draw1() {
                        gl1.vertexAttribPointer(context1.blitPosLoc, 2, 5126, false, 0, 0);
                        gl1.drawArrays(5, 0, 4);
                    }
                    if (context1.defaultVao) {
                        var prevVAO1 = gl1.getParameter(34229);
                        gl1.bindVertexArray(context1.defaultVao);
                        draw1();
                        gl1.bindVertexArray(prevVAO1);
                    } else {
                        var prevVertexAttribPointer1 = {
                            buffer: gl1.getVertexAttrib(context1.blitPosLoc, 34975),
                            size: gl1.getVertexAttrib(context1.blitPosLoc, 34339),
                            stride: gl1.getVertexAttrib(context1.blitPosLoc, 34340),
                            type: gl1.getVertexAttrib(context1.blitPosLoc, 34341),
                            normalized: gl1.getVertexAttrib(context1.blitPosLoc, 34922),
                            pointer: gl1.getVertexAttribOffset(context1.blitPosLoc, 34373)
                        };
                        var maxVertexAttribs1 = gl1.getParameter(34921);
                        var prevVertexAttribEnables1 = [];
                        for(var i1 = 0; i1 < maxVertexAttribs1; ++i1){
                            var prevEnabled1 = gl1.getVertexAttrib(i1, 34338);
                            var wantEnabled1 = i1 == context1.blitPosLoc;
                            if (prevEnabled1 && !wantEnabled1) gl1.disableVertexAttribArray(i1);
                            if (!prevEnabled1 && wantEnabled1) gl1.enableVertexAttribArray(i1);
                            prevVertexAttribEnables1[i1] = prevEnabled1;
                        }
                        draw1();
                        for(var i1 = 0; i1 < maxVertexAttribs1; ++i1){
                            var prevEnabled1 = prevVertexAttribEnables1[i1];
                            var nowEnabled1 = i1 == context1.blitPosLoc;
                            if (prevEnabled1 && !nowEnabled1) gl1.enableVertexAttribArray(i1);
                            if (!prevEnabled1 && nowEnabled1) gl1.disableVertexAttribArray(i1);
                        }
                        gl1.bindBuffer(34962, prevVertexAttribPointer1.buffer);
                        gl1.vertexAttribPointer(context1.blitPosLoc, prevVertexAttribPointer1.size, prevVertexAttribPointer1.type, prevVertexAttribPointer1.normalized, prevVertexAttribPointer1.stride, prevVertexAttribPointer1.offset);
                    }
                    if (prevStencilTest1) gl1.enable(2960);
                    if (prevDepthTest1) gl1.enable(2929);
                    if (prevCullFace1) gl1.enable(2884);
                    if (prevBlend1) gl1.enable(3042);
                    gl1.bindTexture(3553, prevTextureBinding1);
                    gl1.activeTexture(prevActiveTexture1);
                    gl1.bindBuffer(34962, prevVB1);
                    gl1.useProgram(prevProgram1);
                }
                gl1.bindFramebuffer(36160, prevFbo1);
                if (prevScissorTest1) gl1.enable(3089);
            },
            registerContext: function(ctx1, webGLContextAttributes1) {
                var handle1 = _malloc(8);
                GROWABLE_HEAP_I32()[handle1 + 4 >> 2] = _pthread_self();
                var context1 = {
                    handle: handle1,
                    attributes: webGLContextAttributes1,
                    version: webGLContextAttributes1.majorVersion,
                    GLctx: ctx1
                };
                if (ctx1.canvas) ctx1.canvas.GLctxObject = context1;
                GL.contexts[handle1] = context1;
                if (typeof webGLContextAttributes1.enableExtensionsByDefault == "undefined" || webGLContextAttributes1.enableExtensionsByDefault) GL.initExtensions(context1);
                if (webGLContextAttributes1.renderViaOffscreenBackBuffer) GL.createOffscreenFramebuffer(context1);
                return handle1;
            },
            makeContextCurrent: function(contextHandle1) {
                GL.currentContext = GL.contexts[contextHandle1];
                Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
                return !(contextHandle1 && !GLctx);
            },
            getContext: function(contextHandle1) {
                return GL.contexts[contextHandle1];
            },
            deleteContext: function(contextHandle1) {
                if (GL.currentContext === GL.contexts[contextHandle1]) GL.currentContext = null;
                if (typeof JSEvents == "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle1].GLctx.canvas);
                if (GL.contexts[contextHandle1] && GL.contexts[contextHandle1].GLctx.canvas) GL.contexts[contextHandle1].GLctx.canvas.GLctxObject = undefined;
                _free(GL.contexts[contextHandle1].handle);
                GL.contexts[contextHandle1] = null;
            },
            initExtensions: function(context1) {
                if (!context1) context1 = GL.currentContext;
                if (context1.initExtensionsDone) return;
                context1.initExtensionsDone = true;
                var GLctx1 = context1.GLctx;
                __webgl_enable_ANGLE_instanced_arrays(GLctx1);
                __webgl_enable_OES_vertex_array_object(GLctx1);
                __webgl_enable_WEBGL_draw_buffers(GLctx1);
                __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx1);
                __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx1);
                if (context1.version >= 2) GLctx1.disjointTimerQueryExt = GLctx1.getExtension("EXT_disjoint_timer_query_webgl2");
                if (context1.version < 2 || !GLctx1.disjointTimerQueryExt) GLctx1.disjointTimerQueryExt = GLctx1.getExtension("EXT_disjoint_timer_query");
                __webgl_enable_WEBGL_multi_draw(GLctx1);
                var exts1 = GLctx1.getSupportedExtensions() || [];
                exts1.forEach(function(ext1) {
                    if (!ext1.includes("lose_context") && !ext1.includes("debug")) GLctx1.getExtension(ext1);
                });
            }
        };
        function _emscripten_glActiveTexture(x01) {
            GLctx["activeTexture"](x01);
        }
        function _emscripten_glAttachShader(program1, shader1) {
            GLctx.attachShader(GL.programs[program1], GL.shaders[shader1]);
        }
        function _emscripten_glBeginQuery(target1, id1) {
            GLctx["beginQuery"](target1, GL.queries[id1]);
        }
        function _emscripten_glBeginQueryEXT(target1, id1) {
            GLctx.disjointTimerQueryExt["beginQueryEXT"](target1, GL.queries[id1]);
        }
        function _emscripten_glBeginTransformFeedback(x01) {
            GLctx["beginTransformFeedback"](x01);
        }
        function _emscripten_glBindAttribLocation(program1, index1, name1) {
            GLctx.bindAttribLocation(GL.programs[program1], index1, UTF8ToString(name1));
        }
        function _emscripten_glBindBuffer(target1, buffer1) {
            if (target1 == 35051) GLctx.currentPixelPackBufferBinding = buffer1;
            else if (target1 == 35052) GLctx.currentPixelUnpackBufferBinding = buffer1;
            GLctx.bindBuffer(target1, GL.buffers[buffer1]);
        }
        function _emscripten_glBindBufferBase(target1, index1, buffer1) {
            GLctx["bindBufferBase"](target1, index1, GL.buffers[buffer1]);
        }
        function _emscripten_glBindBufferRange(target1, index1, buffer1, offset1, ptrsize1) {
            GLctx["bindBufferRange"](target1, index1, GL.buffers[buffer1], offset1, ptrsize1);
        }
        function _emscripten_glBindFramebuffer(target1, framebuffer1) {
            GLctx.bindFramebuffer(target1, framebuffer1 ? GL.framebuffers[framebuffer1] : GL.currentContext.defaultFbo);
        }
        function _emscripten_glBindRenderbuffer(target1, renderbuffer1) {
            GLctx.bindRenderbuffer(target1, GL.renderbuffers[renderbuffer1]);
        }
        function _emscripten_glBindSampler(unit1, sampler1) {
            GLctx["bindSampler"](unit1, GL.samplers[sampler1]);
        }
        function _emscripten_glBindTexture(target1, texture1) {
            GLctx.bindTexture(target1, GL.textures[texture1]);
        }
        function _emscripten_glBindTransformFeedback(target1, id1) {
            GLctx["bindTransformFeedback"](target1, GL.transformFeedbacks[id1]);
        }
        function _emscripten_glBindVertexArray(vao1) {
            GLctx["bindVertexArray"](GL.vaos[vao1]);
        }
        function _emscripten_glBlendColor(x01, x11, x21, x31) {
            GLctx["blendColor"](x01, x11, x21, x31);
        }
        function _emscripten_glBlendEquation(x01) {
            GLctx["blendEquation"](x01);
        }
        function _emscripten_glBlendEquationSeparate(x01, x11) {
            GLctx["blendEquationSeparate"](x01, x11);
        }
        function _emscripten_glBlendFunc(x01, x11) {
            GLctx["blendFunc"](x01, x11);
        }
        function _emscripten_glBlendFuncSeparate(x01, x11, x21, x31) {
            GLctx["blendFuncSeparate"](x01, x11, x21, x31);
        }
        function _emscripten_glBlitFramebuffer(x01, x11, x21, x31, x41, x51, x61, x71, x81, x91) {
            GLctx["blitFramebuffer"](x01, x11, x21, x31, x41, x51, x61, x71, x81, x91);
        }
        function _emscripten_glBufferData(target1, size1, data1, usage1) {
            if (GL.currentContext.version >= 2) {
                if (data1 && size1) GLctx.bufferData(target1, GROWABLE_HEAP_U8(), usage1, data1, size1);
                else GLctx.bufferData(target1, size1, usage1);
            } else GLctx.bufferData(target1, data1 ? GROWABLE_HEAP_U8().subarray(data1, data1 + size1) : size1, usage1);
        }
        function _emscripten_glBufferSubData(target1, offset1, size1, data1) {
            if (GL.currentContext.version >= 2) {
                size1 && GLctx.bufferSubData(target1, offset1, GROWABLE_HEAP_U8(), data1, size1);
                return;
            }
            GLctx.bufferSubData(target1, offset1, GROWABLE_HEAP_U8().subarray(data1, data1 + size1));
        }
        function _emscripten_glCheckFramebufferStatus(x01) {
            return GLctx["checkFramebufferStatus"](x01);
        }
        function _emscripten_glClear(x01) {
            GLctx["clear"](x01);
        }
        function _emscripten_glClearBufferfi(x01, x11, x21, x31) {
            GLctx["clearBufferfi"](x01, x11, x21, x31);
        }
        function _emscripten_glClearBufferfv(buffer1, drawbuffer1, value1) {
            GLctx["clearBufferfv"](buffer1, drawbuffer1, GROWABLE_HEAP_F32(), value1 >> 2);
        }
        function _emscripten_glClearBufferiv(buffer1, drawbuffer1, value1) {
            GLctx["clearBufferiv"](buffer1, drawbuffer1, GROWABLE_HEAP_I32(), value1 >> 2);
        }
        function _emscripten_glClearBufferuiv(buffer1, drawbuffer1, value1) {
            GLctx["clearBufferuiv"](buffer1, drawbuffer1, GROWABLE_HEAP_U32(), value1 >> 2);
        }
        function _emscripten_glClearColor(x01, x11, x21, x31) {
            GLctx["clearColor"](x01, x11, x21, x31);
        }
        function _emscripten_glClearDepthf(x01) {
            GLctx["clearDepth"](x01);
        }
        function _emscripten_glClearStencil(x01) {
            GLctx["clearStencil"](x01);
        }
        function convertI32PairToI53(lo1, hi1) {
            return (lo1 >>> 0) + hi1 * 4294967296;
        }
        function _emscripten_glClientWaitSync(sync1, flags1, timeoutLo1, timeoutHi1) {
            return GLctx.clientWaitSync(GL.syncs[sync1], flags1, convertI32PairToI53(timeoutLo1, timeoutHi1));
        }
        function _emscripten_glColorMask(red1, green1, blue1, alpha1) {
            GLctx.colorMask(!!red1, !!green1, !!blue1, !!alpha1);
        }
        function _emscripten_glCompileShader(shader1) {
            GLctx.compileShader(GL.shaders[shader1]);
        }
        function _emscripten_glCompressedTexImage2D(target1, level1, internalFormat1, width1, height1, border1, imageSize1, data1) {
            if (GL.currentContext.version >= 2) {
                if (GLctx.currentPixelUnpackBufferBinding || !imageSize1) GLctx["compressedTexImage2D"](target1, level1, internalFormat1, width1, height1, border1, imageSize1, data1);
                else GLctx["compressedTexImage2D"](target1, level1, internalFormat1, width1, height1, border1, GROWABLE_HEAP_U8(), data1, imageSize1);
                return;
            }
            GLctx["compressedTexImage2D"](target1, level1, internalFormat1, width1, height1, border1, data1 ? GROWABLE_HEAP_U8().subarray(data1, data1 + imageSize1) : null);
        }
        function _emscripten_glCompressedTexImage3D(target1, level1, internalFormat1, width1, height1, depth1, border1, imageSize1, data1) {
            if (GLctx.currentPixelUnpackBufferBinding) GLctx["compressedTexImage3D"](target1, level1, internalFormat1, width1, height1, depth1, border1, imageSize1, data1);
            else GLctx["compressedTexImage3D"](target1, level1, internalFormat1, width1, height1, depth1, border1, GROWABLE_HEAP_U8(), data1, imageSize1);
        }
        function _emscripten_glCompressedTexSubImage2D(target1, level1, xoffset1, yoffset1, width1, height1, format1, imageSize1, data1) {
            if (GL.currentContext.version >= 2) {
                if (GLctx.currentPixelUnpackBufferBinding || !imageSize1) GLctx["compressedTexSubImage2D"](target1, level1, xoffset1, yoffset1, width1, height1, format1, imageSize1, data1);
                else GLctx["compressedTexSubImage2D"](target1, level1, xoffset1, yoffset1, width1, height1, format1, GROWABLE_HEAP_U8(), data1, imageSize1);
                return;
            }
            GLctx["compressedTexSubImage2D"](target1, level1, xoffset1, yoffset1, width1, height1, format1, data1 ? GROWABLE_HEAP_U8().subarray(data1, data1 + imageSize1) : null);
        }
        function _emscripten_glCompressedTexSubImage3D(target1, level1, xoffset1, yoffset1, zoffset1, width1, height1, depth1, format1, imageSize1, data1) {
            if (GLctx.currentPixelUnpackBufferBinding) GLctx["compressedTexSubImage3D"](target1, level1, xoffset1, yoffset1, zoffset1, width1, height1, depth1, format1, imageSize1, data1);
            else GLctx["compressedTexSubImage3D"](target1, level1, xoffset1, yoffset1, zoffset1, width1, height1, depth1, format1, GROWABLE_HEAP_U8(), data1, imageSize1);
        }
        function _emscripten_glCopyBufferSubData(x01, x11, x21, x31, x41) {
            GLctx["copyBufferSubData"](x01, x11, x21, x31, x41);
        }
        function _emscripten_glCopyTexImage2D(x01, x11, x21, x31, x41, x51, x61, x71) {
            GLctx["copyTexImage2D"](x01, x11, x21, x31, x41, x51, x61, x71);
        }
        function _emscripten_glCopyTexSubImage2D(x01, x11, x21, x31, x41, x51, x61, x71) {
            GLctx["copyTexSubImage2D"](x01, x11, x21, x31, x41, x51, x61, x71);
        }
        function _emscripten_glCopyTexSubImage3D(x01, x11, x21, x31, x41, x51, x61, x71, x81) {
            GLctx["copyTexSubImage3D"](x01, x11, x21, x31, x41, x51, x61, x71, x81);
        }
        function _emscripten_glCreateProgram() {
            var id1 = GL.getNewId(GL.programs);
            var program1 = GLctx.createProgram();
            program1.name = id1;
            program1.maxUniformLength = program1.maxAttributeLength = program1.maxUniformBlockNameLength = 0;
            program1.uniformIdCounter = 1;
            GL.programs[id1] = program1;
            return id1;
        }
        function _emscripten_glCreateShader(shaderType1) {
            var id1 = GL.getNewId(GL.shaders);
            GL.shaders[id1] = GLctx.createShader(shaderType1);
            return id1;
        }
        function _emscripten_glCullFace(x01) {
            GLctx["cullFace"](x01);
        }
        function _emscripten_glDeleteBuffers(n1, buffers1) {
            for(var i1 = 0; i1 < n1; i1++){
                var id1 = GROWABLE_HEAP_I32()[buffers1 + i1 * 4 >> 2];
                var buffer1 = GL.buffers[id1];
                if (!buffer1) continue;
                GLctx.deleteBuffer(buffer1);
                buffer1.name = 0;
                GL.buffers[id1] = null;
                if (id1 == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
                if (id1 == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
            }
        }
        function _emscripten_glDeleteFramebuffers(n1, framebuffers1) {
            for(var i1 = 0; i1 < n1; ++i1){
                var id1 = GROWABLE_HEAP_I32()[framebuffers1 + i1 * 4 >> 2];
                var framebuffer1 = GL.framebuffers[id1];
                if (!framebuffer1) continue;
                GLctx.deleteFramebuffer(framebuffer1);
                framebuffer1.name = 0;
                GL.framebuffers[id1] = null;
            }
        }
        function _emscripten_glDeleteProgram(id1) {
            if (!id1) return;
            var program1 = GL.programs[id1];
            if (!program1) {
                GL.recordError(1281);
                return;
            }
            GLctx.deleteProgram(program1);
            program1.name = 0;
            GL.programs[id1] = null;
        }
        function _emscripten_glDeleteQueries(n1, ids1) {
            for(var i1 = 0; i1 < n1; i1++){
                var id1 = GROWABLE_HEAP_I32()[ids1 + i1 * 4 >> 2];
                var query1 = GL.queries[id1];
                if (!query1) continue;
                GLctx["deleteQuery"](query1);
                GL.queries[id1] = null;
            }
        }
        function _emscripten_glDeleteQueriesEXT(n1, ids1) {
            for(var i1 = 0; i1 < n1; i1++){
                var id1 = GROWABLE_HEAP_I32()[ids1 + i1 * 4 >> 2];
                var query1 = GL.queries[id1];
                if (!query1) continue;
                GLctx.disjointTimerQueryExt["deleteQueryEXT"](query1);
                GL.queries[id1] = null;
            }
        }
        function _emscripten_glDeleteRenderbuffers(n1, renderbuffers1) {
            for(var i1 = 0; i1 < n1; i1++){
                var id1 = GROWABLE_HEAP_I32()[renderbuffers1 + i1 * 4 >> 2];
                var renderbuffer1 = GL.renderbuffers[id1];
                if (!renderbuffer1) continue;
                GLctx.deleteRenderbuffer(renderbuffer1);
                renderbuffer1.name = 0;
                GL.renderbuffers[id1] = null;
            }
        }
        function _emscripten_glDeleteSamplers(n1, samplers1) {
            for(var i1 = 0; i1 < n1; i1++){
                var id1 = GROWABLE_HEAP_I32()[samplers1 + i1 * 4 >> 2];
                var sampler1 = GL.samplers[id1];
                if (!sampler1) continue;
                GLctx["deleteSampler"](sampler1);
                sampler1.name = 0;
                GL.samplers[id1] = null;
            }
        }
        function _emscripten_glDeleteShader(id1) {
            if (!id1) return;
            var shader1 = GL.shaders[id1];
            if (!shader1) {
                GL.recordError(1281);
                return;
            }
            GLctx.deleteShader(shader1);
            GL.shaders[id1] = null;
        }
        function _emscripten_glDeleteSync(id1) {
            if (!id1) return;
            var sync1 = GL.syncs[id1];
            if (!sync1) {
                GL.recordError(1281);
                return;
            }
            GLctx.deleteSync(sync1);
            sync1.name = 0;
            GL.syncs[id1] = null;
        }
        function _emscripten_glDeleteTextures(n1, textures1) {
            for(var i1 = 0; i1 < n1; i1++){
                var id1 = GROWABLE_HEAP_I32()[textures1 + i1 * 4 >> 2];
                var texture1 = GL.textures[id1];
                if (!texture1) continue;
                GLctx.deleteTexture(texture1);
                texture1.name = 0;
                GL.textures[id1] = null;
            }
        }
        function _emscripten_glDeleteTransformFeedbacks(n1, ids1) {
            for(var i1 = 0; i1 < n1; i1++){
                var id1 = GROWABLE_HEAP_I32()[ids1 + i1 * 4 >> 2];
                var transformFeedback1 = GL.transformFeedbacks[id1];
                if (!transformFeedback1) continue;
                GLctx["deleteTransformFeedback"](transformFeedback1);
                transformFeedback1.name = 0;
                GL.transformFeedbacks[id1] = null;
            }
        }
        function _emscripten_glDeleteVertexArrays(n1, vaos1) {
            for(var i1 = 0; i1 < n1; i1++){
                var id1 = GROWABLE_HEAP_I32()[vaos1 + i1 * 4 >> 2];
                GLctx["deleteVertexArray"](GL.vaos[id1]);
                GL.vaos[id1] = null;
            }
        }
        function _emscripten_glDepthFunc(x01) {
            GLctx["depthFunc"](x01);
        }
        function _emscripten_glDepthMask(flag1) {
            GLctx.depthMask(!!flag1);
        }
        function _emscripten_glDepthRangef(x01, x11) {
            GLctx["depthRange"](x01, x11);
        }
        function _emscripten_glDetachShader(program1, shader1) {
            GLctx.detachShader(GL.programs[program1], GL.shaders[shader1]);
        }
        function _emscripten_glDisable(x01) {
            GLctx["disable"](x01);
        }
        function _emscripten_glDisableVertexAttribArray(index1) {
            GLctx.disableVertexAttribArray(index1);
        }
        function _emscripten_glDrawArrays(mode1, first1, count1) {
            GLctx.drawArrays(mode1, first1, count1);
        }
        function _emscripten_glDrawArraysInstanced(mode1, first1, count1, primcount1) {
            GLctx["drawArraysInstanced"](mode1, first1, count1, primcount1);
        }
        var tempFixedLengthArray = [];
        function _emscripten_glDrawBuffers(n1, bufs1) {
            var bufArray1 = tempFixedLengthArray[n1];
            for(var i1 = 0; i1 < n1; i1++)bufArray1[i1] = GROWABLE_HEAP_I32()[bufs1 + i1 * 4 >> 2];
            GLctx["drawBuffers"](bufArray1);
        }
        function _emscripten_glDrawElements(mode1, count1, type1, indices1) {
            GLctx.drawElements(mode1, count1, type1, indices1);
        }
        function _emscripten_glDrawElementsInstanced(mode1, count1, type1, indices1, primcount1) {
            GLctx["drawElementsInstanced"](mode1, count1, type1, indices1, primcount1);
        }
        function _glDrawElements(mode1, count1, type1, indices1) {
            GLctx.drawElements(mode1, count1, type1, indices1);
        }
        function _emscripten_glDrawRangeElements(mode1, start1, end1, count1, type1, indices1) {
            _glDrawElements(mode1, count1, type1, indices1);
        }
        function _emscripten_glEnable(x01) {
            GLctx["enable"](x01);
        }
        function _emscripten_glEnableVertexAttribArray(index1) {
            GLctx.enableVertexAttribArray(index1);
        }
        function _emscripten_glEndQuery(x01) {
            GLctx["endQuery"](x01);
        }
        function _emscripten_glEndQueryEXT(target1) {
            GLctx.disjointTimerQueryExt["endQueryEXT"](target1);
        }
        function _emscripten_glEndTransformFeedback() {
            GLctx["endTransformFeedback"]();
        }
        function _emscripten_glFenceSync(condition1, flags1) {
            var sync1 = GLctx.fenceSync(condition1, flags1);
            if (sync1) {
                var id1 = GL.getNewId(GL.syncs);
                sync1.name = id1;
                GL.syncs[id1] = sync1;
                return id1;
            } else return 0;
        }
        function _emscripten_glFinish() {
            GLctx["finish"]();
        }
        function _emscripten_glFlush() {
            GLctx["flush"]();
        }
        function _emscripten_glFramebufferRenderbuffer(target1, attachment1, renderbuffertarget1, renderbuffer1) {
            GLctx.framebufferRenderbuffer(target1, attachment1, renderbuffertarget1, GL.renderbuffers[renderbuffer1]);
        }
        function _emscripten_glFramebufferTexture2D(target1, attachment1, textarget1, texture1, level1) {
            GLctx.framebufferTexture2D(target1, attachment1, textarget1, GL.textures[texture1], level1);
        }
        function _emscripten_glFramebufferTextureLayer(target1, attachment1, texture1, level1, layer1) {
            GLctx.framebufferTextureLayer(target1, attachment1, GL.textures[texture1], level1, layer1);
        }
        function _emscripten_glFrontFace(x01) {
            GLctx["frontFace"](x01);
        }
        function __glGenObject(n1, buffers1, createFunction1, objectTable1) {
            for(var i1 = 0; i1 < n1; i1++){
                var buffer1 = GLctx[createFunction1]();
                var id1 = buffer1 && GL.getNewId(objectTable1);
                if (buffer1) {
                    buffer1.name = id1;
                    objectTable1[id1] = buffer1;
                } else GL.recordError(1282);
                GROWABLE_HEAP_I32()[buffers1 + i1 * 4 >> 2] = id1;
            }
        }
        function _emscripten_glGenBuffers(n1, buffers1) {
            __glGenObject(n1, buffers1, "createBuffer", GL.buffers);
        }
        function _emscripten_glGenFramebuffers(n1, ids1) {
            __glGenObject(n1, ids1, "createFramebuffer", GL.framebuffers);
        }
        function _emscripten_glGenQueries(n1, ids1) {
            __glGenObject(n1, ids1, "createQuery", GL.queries);
        }
        function _emscripten_glGenQueriesEXT(n1, ids1) {
            for(var i1 = 0; i1 < n1; i1++){
                var query1 = GLctx.disjointTimerQueryExt["createQueryEXT"]();
                if (!query1) {
                    GL.recordError(1282);
                    while(i1 < n1)GROWABLE_HEAP_I32()[ids1 + i1++ * 4 >> 2] = 0;
                    return;
                }
                var id1 = GL.getNewId(GL.queries);
                query1.name = id1;
                GL.queries[id1] = query1;
                GROWABLE_HEAP_I32()[ids1 + i1 * 4 >> 2] = id1;
            }
        }
        function _emscripten_glGenRenderbuffers(n1, renderbuffers1) {
            __glGenObject(n1, renderbuffers1, "createRenderbuffer", GL.renderbuffers);
        }
        function _emscripten_glGenSamplers(n1, samplers1) {
            __glGenObject(n1, samplers1, "createSampler", GL.samplers);
        }
        function _emscripten_glGenTextures(n1, textures1) {
            __glGenObject(n1, textures1, "createTexture", GL.textures);
        }
        function _emscripten_glGenTransformFeedbacks(n1, ids1) {
            __glGenObject(n1, ids1, "createTransformFeedback", GL.transformFeedbacks);
        }
        function _emscripten_glGenVertexArrays(n1, arrays1) {
            __glGenObject(n1, arrays1, "createVertexArray", GL.vaos);
        }
        function _emscripten_glGenerateMipmap(x01) {
            GLctx["generateMipmap"](x01);
        }
        function __glGetActiveAttribOrUniform(funcName1, program1, index1, bufSize1, length1, size1, type1, name1) {
            program1 = GL.programs[program1];
            var info1 = GLctx[funcName1](program1, index1);
            if (info1) {
                var numBytesWrittenExclNull1 = name1 && stringToUTF8(info1.name, name1, bufSize1);
                if (length1) GROWABLE_HEAP_I32()[length1 >> 2] = numBytesWrittenExclNull1;
                if (size1) GROWABLE_HEAP_I32()[size1 >> 2] = info1.size;
                if (type1) GROWABLE_HEAP_I32()[type1 >> 2] = info1.type;
            }
        }
        function _emscripten_glGetActiveAttrib(program1, index1, bufSize1, length1, size1, type1, name1) {
            __glGetActiveAttribOrUniform("getActiveAttrib", program1, index1, bufSize1, length1, size1, type1, name1);
        }
        function _emscripten_glGetActiveUniform(program1, index1, bufSize1, length1, size1, type1, name1) {
            __glGetActiveAttribOrUniform("getActiveUniform", program1, index1, bufSize1, length1, size1, type1, name1);
        }
        function _emscripten_glGetActiveUniformBlockName(program1, uniformBlockIndex1, bufSize1, length1, uniformBlockName1) {
            program1 = GL.programs[program1];
            var result1 = GLctx["getActiveUniformBlockName"](program1, uniformBlockIndex1);
            if (!result1) return;
            if (uniformBlockName1 && bufSize1 > 0) {
                var numBytesWrittenExclNull1 = stringToUTF8(result1, uniformBlockName1, bufSize1);
                if (length1) GROWABLE_HEAP_I32()[length1 >> 2] = numBytesWrittenExclNull1;
            } else if (length1) GROWABLE_HEAP_I32()[length1 >> 2] = 0;
        }
        function _emscripten_glGetActiveUniformBlockiv(program1, uniformBlockIndex1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            program1 = GL.programs[program1];
            if (pname1 == 35393) {
                var name1 = GLctx["getActiveUniformBlockName"](program1, uniformBlockIndex1);
                GROWABLE_HEAP_I32()[params1 >> 2] = name1.length + 1;
                return;
            }
            var result1 = GLctx["getActiveUniformBlockParameter"](program1, uniformBlockIndex1, pname1);
            if (result1 === null) return;
            if (pname1 == 35395) for(var i1 = 0; i1 < result1.length; i1++)GROWABLE_HEAP_I32()[params1 + i1 * 4 >> 2] = result1[i1];
            else GROWABLE_HEAP_I32()[params1 >> 2] = result1;
        }
        function _emscripten_glGetActiveUniformsiv(program1, uniformCount1, uniformIndices1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            if (uniformCount1 > 0 && uniformIndices1 == 0) {
                GL.recordError(1281);
                return;
            }
            program1 = GL.programs[program1];
            var ids1 = [];
            for(var i1 = 0; i1 < uniformCount1; i1++)ids1.push(GROWABLE_HEAP_I32()[uniformIndices1 + i1 * 4 >> 2]);
            var result1 = GLctx["getActiveUniforms"](program1, ids1, pname1);
            if (!result1) return;
            var len1 = result1.length;
            for(var i1 = 0; i1 < len1; i1++)GROWABLE_HEAP_I32()[params1 + i1 * 4 >> 2] = result1[i1];
        }
        function _emscripten_glGetAttachedShaders(program1, maxCount1, count1, shaders1) {
            var result1 = GLctx.getAttachedShaders(GL.programs[program1]);
            var len1 = result1.length;
            if (len1 > maxCount1) len1 = maxCount1;
            GROWABLE_HEAP_I32()[count1 >> 2] = len1;
            for(var i1 = 0; i1 < len1; ++i1){
                var id1 = GL.shaders.indexOf(result1[i1]);
                GROWABLE_HEAP_I32()[shaders1 + i1 * 4 >> 2] = id1;
            }
        }
        function _emscripten_glGetAttribLocation(program1, name1) {
            return GLctx.getAttribLocation(GL.programs[program1], UTF8ToString(name1));
        }
        function writeI53ToI64(ptr1, num1) {
            GROWABLE_HEAP_U32()[ptr1 >> 2] = num1;
            GROWABLE_HEAP_U32()[ptr1 + 4 >> 2] = (num1 - GROWABLE_HEAP_U32()[ptr1 >> 2]) / 4294967296;
        }
        function emscriptenWebGLGet(name_1, p1, type1) {
            if (!p1) {
                GL.recordError(1281);
                return;
            }
            var ret1 = undefined;
            switch(name_1){
                case 36346:
                    ret1 = 1;
                    break;
                case 36344:
                    if (type1 != 0 && type1 != 1) GL.recordError(1280);
                    return;
                case 34814:
                case 36345:
                    ret1 = 0;
                    break;
                case 34466:
                    var formats1 = GLctx.getParameter(34467);
                    ret1 = formats1 ? formats1.length : 0;
                    break;
                case 33309:
                    if (GL.currentContext.version < 2) {
                        GL.recordError(1282);
                        return;
                    }
                    var exts1 = GLctx.getSupportedExtensions() || [];
                    ret1 = 2 * exts1.length;
                    break;
                case 33307:
                case 33308:
                    if (GL.currentContext.version < 2) {
                        GL.recordError(1280);
                        return;
                    }
                    ret1 = name_1 == 33307 ? 3 : 0;
                    break;
            }
            if (ret1 === undefined) {
                var result1 = GLctx.getParameter(name_1);
                switch(typeof result1){
                    case "number":
                        ret1 = result1;
                        break;
                    case "boolean":
                        ret1 = result1 ? 1 : 0;
                        break;
                    case "string":
                        GL.recordError(1280);
                        return;
                    case "object":
                        if (result1 === null) switch(name_1){
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
                                ret1 = 0;
                                break;
                            default:
                                GL.recordError(1280);
                                return;
                        }
                        else if (result1 instanceof Float32Array || result1 instanceof Uint32Array || result1 instanceof Int32Array || result1 instanceof Array) {
                            for(var i1 = 0; i1 < result1.length; ++i1)switch(type1){
                                case 0:
                                    GROWABLE_HEAP_I32()[p1 + i1 * 4 >> 2] = result1[i1];
                                    break;
                                case 2:
                                    GROWABLE_HEAP_F32()[p1 + i1 * 4 >> 2] = result1[i1];
                                    break;
                                case 4:
                                    GROWABLE_HEAP_I8()[p1 + i1 >> 0] = result1[i1] ? 1 : 0;
                                    break;
                            }
                            return;
                        } else try {
                            ret1 = result1.name | 0;
                        } catch (e1) {
                            GL.recordError(1280);
                            err("GL_INVALID_ENUM in glGet" + type1 + "v: Unknown object returned from WebGL getParameter(" + name_1 + ")! (error: " + e1 + ")");
                            return;
                        }
                        break;
                    default:
                        GL.recordError(1280);
                        err("GL_INVALID_ENUM in glGet" + type1 + "v: Native code calling glGet" + type1 + "v(" + name_1 + ") and it returns " + result1 + " of type " + typeof result1 + "!");
                        return;
                }
            }
            switch(type1){
                case 1:
                    writeI53ToI64(p1, ret1);
                    break;
                case 0:
                    GROWABLE_HEAP_I32()[p1 >> 2] = ret1;
                    break;
                case 2:
                    GROWABLE_HEAP_F32()[p1 >> 2] = ret1;
                    break;
                case 4:
                    GROWABLE_HEAP_I8()[p1 >> 0] = ret1 ? 1 : 0;
                    break;
            }
        }
        function _emscripten_glGetBooleanv(name_1, p1) {
            emscriptenWebGLGet(name_1, p1, 4);
        }
        function _emscripten_glGetBufferParameteri64v(target1, value1, data1) {
            if (!data1) {
                GL.recordError(1281);
                return;
            }
            writeI53ToI64(data1, GLctx.getBufferParameter(target1, value1));
        }
        function _emscripten_glGetBufferParameteriv(target1, value1, data1) {
            if (!data1) {
                GL.recordError(1281);
                return;
            }
            GROWABLE_HEAP_I32()[data1 >> 2] = GLctx.getBufferParameter(target1, value1);
        }
        function _emscripten_glGetError() {
            var error1 = GLctx.getError() || GL.lastError;
            GL.lastError = 0;
            return error1;
        }
        function _emscripten_glGetFloatv(name_1, p1) {
            emscriptenWebGLGet(name_1, p1, 2);
        }
        function _emscripten_glGetFragDataLocation(program1, name1) {
            return GLctx["getFragDataLocation"](GL.programs[program1], UTF8ToString(name1));
        }
        function _emscripten_glGetFramebufferAttachmentParameteriv(target1, attachment1, pname1, params1) {
            var result1 = GLctx.getFramebufferAttachmentParameter(target1, attachment1, pname1);
            if (result1 instanceof WebGLRenderbuffer || result1 instanceof WebGLTexture) result1 = result1.name | 0;
            GROWABLE_HEAP_I32()[params1 >> 2] = result1;
        }
        function emscriptenWebGLGetIndexed(target1, index1, data1, type1) {
            if (!data1) {
                GL.recordError(1281);
                return;
            }
            var result1 = GLctx["getIndexedParameter"](target1, index1);
            var ret1;
            switch(typeof result1){
                case "boolean":
                    ret1 = result1 ? 1 : 0;
                    break;
                case "number":
                    ret1 = result1;
                    break;
                case "object":
                    if (result1 === null) switch(target1){
                        case 35983:
                        case 35368:
                            ret1 = 0;
                            break;
                        default:
                            GL.recordError(1280);
                            return;
                    }
                    else if (result1 instanceof WebGLBuffer) ret1 = result1.name | 0;
                    else {
                        GL.recordError(1280);
                        return;
                    }
                    break;
                default:
                    GL.recordError(1280);
                    return;
            }
            switch(type1){
                case 1:
                    writeI53ToI64(data1, ret1);
                    break;
                case 0:
                    GROWABLE_HEAP_I32()[data1 >> 2] = ret1;
                    break;
                case 2:
                    GROWABLE_HEAP_F32()[data1 >> 2] = ret1;
                    break;
                case 4:
                    GROWABLE_HEAP_I8()[data1 >> 0] = ret1 ? 1 : 0;
                    break;
                default:
                    throw "internal emscriptenWebGLGetIndexed() error, bad type: " + type1;
            }
        }
        function _emscripten_glGetInteger64i_v(target1, index1, data1) {
            emscriptenWebGLGetIndexed(target1, index1, data1, 1);
        }
        function _emscripten_glGetInteger64v(name_1, p1) {
            emscriptenWebGLGet(name_1, p1, 1);
        }
        function _emscripten_glGetIntegeri_v(target1, index1, data1) {
            emscriptenWebGLGetIndexed(target1, index1, data1, 0);
        }
        function _emscripten_glGetIntegerv(name_1, p1) {
            emscriptenWebGLGet(name_1, p1, 0);
        }
        function _emscripten_glGetInternalformativ(target1, internalformat1, pname1, bufSize1, params1) {
            if (bufSize1 < 0) {
                GL.recordError(1281);
                return;
            }
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            var ret1 = GLctx["getInternalformatParameter"](target1, internalformat1, pname1);
            if (ret1 === null) return;
            for(var i1 = 0; i1 < ret1.length && i1 < bufSize1; ++i1)GROWABLE_HEAP_I32()[params1 + i1 * 4 >> 2] = ret1[i1];
        }
        function _emscripten_glGetProgramBinary(program1, bufSize1, length1, binaryFormat1, binary1) {
            GL.recordError(1282);
        }
        function _emscripten_glGetProgramInfoLog(program1, maxLength1, length1, infoLog1) {
            var log1 = GLctx.getProgramInfoLog(GL.programs[program1]);
            if (log1 === null) log1 = "(unknown error)";
            var numBytesWrittenExclNull1 = maxLength1 > 0 && infoLog1 ? stringToUTF8(log1, infoLog1, maxLength1) : 0;
            if (length1) GROWABLE_HEAP_I32()[length1 >> 2] = numBytesWrittenExclNull1;
        }
        function _emscripten_glGetProgramiv(program1, pname1, p1) {
            if (!p1) {
                GL.recordError(1281);
                return;
            }
            if (program1 >= GL.counter) {
                GL.recordError(1281);
                return;
            }
            program1 = GL.programs[program1];
            if (pname1 == 35716) {
                var log1 = GLctx.getProgramInfoLog(program1);
                if (log1 === null) log1 = "(unknown error)";
                GROWABLE_HEAP_I32()[p1 >> 2] = log1.length + 1;
            } else if (pname1 == 35719) {
                if (!program1.maxUniformLength) for(var i1 = 0; i1 < GLctx.getProgramParameter(program1, 35718); ++i1)program1.maxUniformLength = Math.max(program1.maxUniformLength, GLctx.getActiveUniform(program1, i1).name.length + 1);
                GROWABLE_HEAP_I32()[p1 >> 2] = program1.maxUniformLength;
            } else if (pname1 == 35722) {
                if (!program1.maxAttributeLength) for(var i1 = 0; i1 < GLctx.getProgramParameter(program1, 35721); ++i1)program1.maxAttributeLength = Math.max(program1.maxAttributeLength, GLctx.getActiveAttrib(program1, i1).name.length + 1);
                GROWABLE_HEAP_I32()[p1 >> 2] = program1.maxAttributeLength;
            } else if (pname1 == 35381) {
                if (!program1.maxUniformBlockNameLength) for(var i1 = 0; i1 < GLctx.getProgramParameter(program1, 35382); ++i1)program1.maxUniformBlockNameLength = Math.max(program1.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program1, i1).length + 1);
                GROWABLE_HEAP_I32()[p1 >> 2] = program1.maxUniformBlockNameLength;
            } else GROWABLE_HEAP_I32()[p1 >> 2] = GLctx.getProgramParameter(program1, pname1);
        }
        function _emscripten_glGetQueryObjecti64vEXT(id1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            var query1 = GL.queries[id1];
            var param1;
            if (GL.currentContext.version < 2) param1 = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query1, pname1);
            else param1 = GLctx["getQueryParameter"](query1, pname1);
            var ret1;
            if (typeof param1 == "boolean") ret1 = param1 ? 1 : 0;
            else ret1 = param1;
            writeI53ToI64(params1, ret1);
        }
        function _emscripten_glGetQueryObjectivEXT(id1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            var query1 = GL.queries[id1];
            var param1 = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query1, pname1);
            var ret1;
            if (typeof param1 == "boolean") ret1 = param1 ? 1 : 0;
            else ret1 = param1;
            GROWABLE_HEAP_I32()[params1 >> 2] = ret1;
        }
        function _emscripten_glGetQueryObjectui64vEXT(id1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            var query1 = GL.queries[id1];
            var param1;
            if (GL.currentContext.version < 2) param1 = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query1, pname1);
            else param1 = GLctx["getQueryParameter"](query1, pname1);
            var ret1;
            if (typeof param1 == "boolean") ret1 = param1 ? 1 : 0;
            else ret1 = param1;
            writeI53ToI64(params1, ret1);
        }
        function _emscripten_glGetQueryObjectuiv(id1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            var query1 = GL.queries[id1];
            var param1 = GLctx["getQueryParameter"](query1, pname1);
            var ret1;
            if (typeof param1 == "boolean") ret1 = param1 ? 1 : 0;
            else ret1 = param1;
            GROWABLE_HEAP_I32()[params1 >> 2] = ret1;
        }
        function _emscripten_glGetQueryObjectuivEXT(id1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            var query1 = GL.queries[id1];
            var param1 = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query1, pname1);
            var ret1;
            if (typeof param1 == "boolean") ret1 = param1 ? 1 : 0;
            else ret1 = param1;
            GROWABLE_HEAP_I32()[params1 >> 2] = ret1;
        }
        function _emscripten_glGetQueryiv(target1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            GROWABLE_HEAP_I32()[params1 >> 2] = GLctx["getQuery"](target1, pname1);
        }
        function _emscripten_glGetQueryivEXT(target1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            GROWABLE_HEAP_I32()[params1 >> 2] = GLctx.disjointTimerQueryExt["getQueryEXT"](target1, pname1);
        }
        function _emscripten_glGetRenderbufferParameteriv(target1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            GROWABLE_HEAP_I32()[params1 >> 2] = GLctx.getRenderbufferParameter(target1, pname1);
        }
        function _emscripten_glGetSamplerParameterfv(sampler1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            GROWABLE_HEAP_F32()[params1 >> 2] = GLctx["getSamplerParameter"](GL.samplers[sampler1], pname1);
        }
        function _emscripten_glGetSamplerParameteriv(sampler1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            GROWABLE_HEAP_I32()[params1 >> 2] = GLctx["getSamplerParameter"](GL.samplers[sampler1], pname1);
        }
        function _emscripten_glGetShaderInfoLog(shader1, maxLength1, length1, infoLog1) {
            var log1 = GLctx.getShaderInfoLog(GL.shaders[shader1]);
            if (log1 === null) log1 = "(unknown error)";
            var numBytesWrittenExclNull1 = maxLength1 > 0 && infoLog1 ? stringToUTF8(log1, infoLog1, maxLength1) : 0;
            if (length1) GROWABLE_HEAP_I32()[length1 >> 2] = numBytesWrittenExclNull1;
        }
        function _emscripten_glGetShaderPrecisionFormat(shaderType1, precisionType1, range1, precision1) {
            var result1 = GLctx.getShaderPrecisionFormat(shaderType1, precisionType1);
            GROWABLE_HEAP_I32()[range1 >> 2] = result1.rangeMin;
            GROWABLE_HEAP_I32()[range1 + 4 >> 2] = result1.rangeMax;
            GROWABLE_HEAP_I32()[precision1 >> 2] = result1.precision;
        }
        function _emscripten_glGetShaderSource(shader1, bufSize1, length1, source1) {
            var result1 = GLctx.getShaderSource(GL.shaders[shader1]);
            if (!result1) return;
            var numBytesWrittenExclNull1 = bufSize1 > 0 && source1 ? stringToUTF8(result1, source1, bufSize1) : 0;
            if (length1) GROWABLE_HEAP_I32()[length1 >> 2] = numBytesWrittenExclNull1;
        }
        function _emscripten_glGetShaderiv(shader1, pname1, p1) {
            if (!p1) {
                GL.recordError(1281);
                return;
            }
            if (pname1 == 35716) {
                var log1 = GLctx.getShaderInfoLog(GL.shaders[shader1]);
                if (log1 === null) log1 = "(unknown error)";
                var logLength1 = log1 ? log1.length + 1 : 0;
                GROWABLE_HEAP_I32()[p1 >> 2] = logLength1;
            } else if (pname1 == 35720) {
                var source1 = GLctx.getShaderSource(GL.shaders[shader1]);
                var sourceLength1 = source1 ? source1.length + 1 : 0;
                GROWABLE_HEAP_I32()[p1 >> 2] = sourceLength1;
            } else GROWABLE_HEAP_I32()[p1 >> 2] = GLctx.getShaderParameter(GL.shaders[shader1], pname1);
        }
        function stringToNewUTF8(jsString1) {
            var length1 = lengthBytesUTF8(jsString1) + 1;
            var cString1 = _malloc(length1);
            stringToUTF8(jsString1, cString1, length1);
            return cString1;
        }
        function _emscripten_glGetString(name_1) {
            var ret1 = GL.stringCache[name_1];
            if (!ret1) {
                switch(name_1){
                    case 7939:
                        var exts1 = GLctx.getSupportedExtensions() || [];
                        exts1 = exts1.concat(exts1.map(function(e1) {
                            return "GL_" + e1;
                        }));
                        ret1 = stringToNewUTF8(exts1.join(" "));
                        break;
                    case 7936:
                    case 7937:
                    case 37445:
                    case 37446:
                        var s1 = GLctx.getParameter(name_1);
                        if (!s1) GL.recordError(1280);
                        ret1 = s1 && stringToNewUTF8(s1);
                        break;
                    case 7938:
                        var glVersion1 = GLctx.getParameter(7938);
                        if (GL.currentContext.version >= 2) glVersion1 = "OpenGL ES 3.0 (" + glVersion1 + ")";
                        else glVersion1 = "OpenGL ES 2.0 (" + glVersion1 + ")";
                        ret1 = stringToNewUTF8(glVersion1);
                        break;
                    case 35724:
                        var glslVersion1 = GLctx.getParameter(35724);
                        var ver_re1 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
                        var ver_num1 = glslVersion1.match(ver_re1);
                        if (ver_num1 !== null) {
                            if (ver_num1[1].length == 3) ver_num1[1] = ver_num1[1] + "0";
                            glslVersion1 = "OpenGL ES GLSL ES " + ver_num1[1] + " (" + glslVersion1 + ")";
                        }
                        ret1 = stringToNewUTF8(glslVersion1);
                        break;
                    default:
                        GL.recordError(1280);
                }
                GL.stringCache[name_1] = ret1;
            }
            return ret1;
        }
        function _emscripten_glGetStringi(name1, index1) {
            if (GL.currentContext.version < 2) {
                GL.recordError(1282);
                return 0;
            }
            var stringiCache1 = GL.stringiCache[name1];
            if (stringiCache1) {
                if (index1 < 0 || index1 >= stringiCache1.length) {
                    GL.recordError(1281);
                    return 0;
                }
                return stringiCache1[index1];
            }
            switch(name1){
                case 7939:
                    var exts1 = GLctx.getSupportedExtensions() || [];
                    exts1 = exts1.concat(exts1.map(function(e1) {
                        return "GL_" + e1;
                    }));
                    exts1 = exts1.map(function(e1) {
                        return stringToNewUTF8(e1);
                    });
                    stringiCache1 = GL.stringiCache[name1] = exts1;
                    if (index1 < 0 || index1 >= stringiCache1.length) {
                        GL.recordError(1281);
                        return 0;
                    }
                    return stringiCache1[index1];
                default:
                    GL.recordError(1280);
                    return 0;
            }
        }
        function _emscripten_glGetSynciv(sync1, pname1, bufSize1, length1, values1) {
            if (bufSize1 < 0) {
                GL.recordError(1281);
                return;
            }
            if (!values1) {
                GL.recordError(1281);
                return;
            }
            var ret1 = GLctx.getSyncParameter(GL.syncs[sync1], pname1);
            if (ret1 !== null) {
                GROWABLE_HEAP_I32()[values1 >> 2] = ret1;
                if (length1) GROWABLE_HEAP_I32()[length1 >> 2] = 1;
            }
        }
        function _emscripten_glGetTexParameterfv(target1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            GROWABLE_HEAP_F32()[params1 >> 2] = GLctx.getTexParameter(target1, pname1);
        }
        function _emscripten_glGetTexParameteriv(target1, pname1, params1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            GROWABLE_HEAP_I32()[params1 >> 2] = GLctx.getTexParameter(target1, pname1);
        }
        function _emscripten_glGetTransformFeedbackVarying(program1, index1, bufSize1, length1, size1, type1, name1) {
            program1 = GL.programs[program1];
            var info1 = GLctx["getTransformFeedbackVarying"](program1, index1);
            if (!info1) return;
            if (name1 && bufSize1 > 0) {
                var numBytesWrittenExclNull1 = stringToUTF8(info1.name, name1, bufSize1);
                if (length1) GROWABLE_HEAP_I32()[length1 >> 2] = numBytesWrittenExclNull1;
            } else if (length1) GROWABLE_HEAP_I32()[length1 >> 2] = 0;
            if (size1) GROWABLE_HEAP_I32()[size1 >> 2] = info1.size;
            if (type1) GROWABLE_HEAP_I32()[type1 >> 2] = info1.type;
        }
        function _emscripten_glGetUniformBlockIndex(program1, uniformBlockName1) {
            return GLctx["getUniformBlockIndex"](GL.programs[program1], UTF8ToString(uniformBlockName1));
        }
        function _emscripten_glGetUniformIndices(program1, uniformCount1, uniformNames1, uniformIndices1) {
            if (!uniformIndices1) {
                GL.recordError(1281);
                return;
            }
            if (uniformCount1 > 0 && (uniformNames1 == 0 || uniformIndices1 == 0)) {
                GL.recordError(1281);
                return;
            }
            program1 = GL.programs[program1];
            var names1 = [];
            for(var i1 = 0; i1 < uniformCount1; i1++)names1.push(UTF8ToString(GROWABLE_HEAP_I32()[uniformNames1 + i1 * 4 >> 2]));
            var result1 = GLctx["getUniformIndices"](program1, names1);
            if (!result1) return;
            var len1 = result1.length;
            for(var i1 = 0; i1 < len1; i1++)GROWABLE_HEAP_I32()[uniformIndices1 + i1 * 4 >> 2] = result1[i1];
        }
        function webglGetLeftBracePos(name1) {
            return name1.slice(-1) == "]" && name1.lastIndexOf("[");
        }
        function webglPrepareUniformLocationsBeforeFirstUse(program1) {
            var uniformLocsById1 = program1.uniformLocsById, uniformSizeAndIdsByName1 = program1.uniformSizeAndIdsByName, i1, j1;
            if (!uniformLocsById1) {
                program1.uniformLocsById = uniformLocsById1 = {};
                program1.uniformArrayNamesById = {};
                for(i1 = 0; i1 < GLctx.getProgramParameter(program1, 35718); ++i1){
                    var u3 = GLctx.getActiveUniform(program1, i1);
                    var nm1 = u3.name;
                    var sz1 = u3.size;
                    var lb1 = webglGetLeftBracePos(nm1);
                    var arrayName1 = lb1 > 0 ? nm1.slice(0, lb1) : nm1;
                    var id1 = program1.uniformIdCounter;
                    program1.uniformIdCounter += sz1;
                    uniformSizeAndIdsByName1[arrayName1] = [
                        sz1,
                        id1
                    ];
                    for(j1 = 0; j1 < sz1; ++j1){
                        uniformLocsById1[id1] = j1;
                        program1.uniformArrayNamesById[id1++] = arrayName1;
                    }
                }
            }
        }
        function _emscripten_glGetUniformLocation(program1, name1) {
            name1 = UTF8ToString(name1);
            if (program1 = GL.programs[program1]) {
                webglPrepareUniformLocationsBeforeFirstUse(program1);
                var uniformLocsById1 = program1.uniformLocsById;
                var arrayIndex1 = 0;
                var uniformBaseName1 = name1;
                var leftBrace1 = webglGetLeftBracePos(name1);
                if (leftBrace1 > 0) {
                    arrayIndex1 = jstoi_q(name1.slice(leftBrace1 + 1)) >>> 0;
                    uniformBaseName1 = name1.slice(0, leftBrace1);
                }
                var sizeAndId1 = program1.uniformSizeAndIdsByName[uniformBaseName1];
                if (sizeAndId1 && arrayIndex1 < sizeAndId1[0]) {
                    arrayIndex1 += sizeAndId1[1];
                    if (uniformLocsById1[arrayIndex1] = uniformLocsById1[arrayIndex1] || GLctx.getUniformLocation(program1, name1)) return arrayIndex1;
                }
            } else GL.recordError(1281);
            return -1;
        }
        function webglGetUniformLocation(location1) {
            var p1 = GLctx.currentProgram;
            if (p1) {
                var webglLoc1 = p1.uniformLocsById[location1];
                if (typeof webglLoc1 == "number") p1.uniformLocsById[location1] = webglLoc1 = GLctx.getUniformLocation(p1, p1.uniformArrayNamesById[location1] + (webglLoc1 > 0 ? "[" + webglLoc1 + "]" : ""));
                return webglLoc1;
            } else GL.recordError(1282);
        }
        function emscriptenWebGLGetUniform(program1, location1, params1, type1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            program1 = GL.programs[program1];
            webglPrepareUniformLocationsBeforeFirstUse(program1);
            var data1 = GLctx.getUniform(program1, webglGetUniformLocation(location1));
            if (typeof data1 == "number" || typeof data1 == "boolean") switch(type1){
                case 0:
                    GROWABLE_HEAP_I32()[params1 >> 2] = data1;
                    break;
                case 2:
                    GROWABLE_HEAP_F32()[params1 >> 2] = data1;
                    break;
            }
            else for(var i1 = 0; i1 < data1.length; i1++)switch(type1){
                case 0:
                    GROWABLE_HEAP_I32()[params1 + i1 * 4 >> 2] = data1[i1];
                    break;
                case 2:
                    GROWABLE_HEAP_F32()[params1 + i1 * 4 >> 2] = data1[i1];
                    break;
            }
        }
        function _emscripten_glGetUniformfv(program1, location1, params1) {
            emscriptenWebGLGetUniform(program1, location1, params1, 2);
        }
        function _emscripten_glGetUniformiv(program1, location1, params1) {
            emscriptenWebGLGetUniform(program1, location1, params1, 0);
        }
        function _emscripten_glGetUniformuiv(program1, location1, params1) {
            emscriptenWebGLGetUniform(program1, location1, params1, 0);
        }
        function emscriptenWebGLGetVertexAttrib(index1, pname1, params1, type1) {
            if (!params1) {
                GL.recordError(1281);
                return;
            }
            var data1 = GLctx.getVertexAttrib(index1, pname1);
            if (pname1 == 34975) GROWABLE_HEAP_I32()[params1 >> 2] = data1 && data1["name"];
            else if (typeof data1 == "number" || typeof data1 == "boolean") switch(type1){
                case 0:
                    GROWABLE_HEAP_I32()[params1 >> 2] = data1;
                    break;
                case 2:
                    GROWABLE_HEAP_F32()[params1 >> 2] = data1;
                    break;
                case 5:
                    GROWABLE_HEAP_I32()[params1 >> 2] = Math.fround(data1);
                    break;
            }
            else for(var i1 = 0; i1 < data1.length; i1++)switch(type1){
                case 0:
                    GROWABLE_HEAP_I32()[params1 + i1 * 4 >> 2] = data1[i1];
                    break;
                case 2:
                    GROWABLE_HEAP_F32()[params1 + i1 * 4 >> 2] = data1[i1];
                    break;
                case 5:
                    GROWABLE_HEAP_I32()[params1 + i1 * 4 >> 2] = Math.fround(data1[i1]);
                    break;
            }
        }
        function _emscripten_glGetVertexAttribIiv(index1, pname1, params1) {
            emscriptenWebGLGetVertexAttrib(index1, pname1, params1, 0);
        }
        function _emscripten_glGetVertexAttribIuiv(index1, pname1, params1) {
            emscriptenWebGLGetVertexAttrib(index1, pname1, params1, 0);
        }
        function _emscripten_glGetVertexAttribPointerv(index1, pname1, pointer1) {
            if (!pointer1) {
                GL.recordError(1281);
                return;
            }
            GROWABLE_HEAP_I32()[pointer1 >> 2] = GLctx.getVertexAttribOffset(index1, pname1);
        }
        function _emscripten_glGetVertexAttribfv(index1, pname1, params1) {
            emscriptenWebGLGetVertexAttrib(index1, pname1, params1, 2);
        }
        function _emscripten_glGetVertexAttribiv(index1, pname1, params1) {
            emscriptenWebGLGetVertexAttrib(index1, pname1, params1, 5);
        }
        function _emscripten_glHint(x01, x11) {
            GLctx["hint"](x01, x11);
        }
        function _emscripten_glInvalidateFramebuffer(target1, numAttachments1, attachments1) {
            var list1 = tempFixedLengthArray[numAttachments1];
            for(var i1 = 0; i1 < numAttachments1; i1++)list1[i1] = GROWABLE_HEAP_I32()[attachments1 + i1 * 4 >> 2];
            GLctx["invalidateFramebuffer"](target1, list1);
        }
        function _emscripten_glInvalidateSubFramebuffer(target1, numAttachments1, attachments1, x10, y1, width1, height1) {
            var list1 = tempFixedLengthArray[numAttachments1];
            for(var i1 = 0; i1 < numAttachments1; i1++)list1[i1] = GROWABLE_HEAP_I32()[attachments1 + i1 * 4 >> 2];
            GLctx["invalidateSubFramebuffer"](target1, list1, x10, y1, width1, height1);
        }
        function _emscripten_glIsBuffer(buffer1) {
            var b1 = GL.buffers[buffer1];
            if (!b1) return 0;
            return GLctx.isBuffer(b1);
        }
        function _emscripten_glIsEnabled(x01) {
            return GLctx["isEnabled"](x01);
        }
        function _emscripten_glIsFramebuffer(framebuffer1) {
            var fb1 = GL.framebuffers[framebuffer1];
            if (!fb1) return 0;
            return GLctx.isFramebuffer(fb1);
        }
        function _emscripten_glIsProgram(program1) {
            program1 = GL.programs[program1];
            if (!program1) return 0;
            return GLctx.isProgram(program1);
        }
        function _emscripten_glIsQuery(id1) {
            var query1 = GL.queries[id1];
            if (!query1) return 0;
            return GLctx["isQuery"](query1);
        }
        function _emscripten_glIsQueryEXT(id1) {
            var query1 = GL.queries[id1];
            if (!query1) return 0;
            return GLctx.disjointTimerQueryExt["isQueryEXT"](query1);
        }
        function _emscripten_glIsRenderbuffer(renderbuffer1) {
            var rb1 = GL.renderbuffers[renderbuffer1];
            if (!rb1) return 0;
            return GLctx.isRenderbuffer(rb1);
        }
        function _emscripten_glIsSampler(id1) {
            var sampler1 = GL.samplers[id1];
            if (!sampler1) return 0;
            return GLctx["isSampler"](sampler1);
        }
        function _emscripten_glIsShader(shader1) {
            var s1 = GL.shaders[shader1];
            if (!s1) return 0;
            return GLctx.isShader(s1);
        }
        function _emscripten_glIsSync(sync1) {
            return GLctx.isSync(GL.syncs[sync1]);
        }
        function _emscripten_glIsTexture(id1) {
            var texture1 = GL.textures[id1];
            if (!texture1) return 0;
            return GLctx.isTexture(texture1);
        }
        function _emscripten_glIsTransformFeedback(id1) {
            return GLctx["isTransformFeedback"](GL.transformFeedbacks[id1]);
        }
        function _emscripten_glIsVertexArray(array1) {
            var vao1 = GL.vaos[array1];
            if (!vao1) return 0;
            return GLctx["isVertexArray"](vao1);
        }
        function _emscripten_glLineWidth(x01) {
            GLctx["lineWidth"](x01);
        }
        function _emscripten_glLinkProgram(program1) {
            program1 = GL.programs[program1];
            GLctx.linkProgram(program1);
            program1.uniformLocsById = 0;
            program1.uniformSizeAndIdsByName = {};
        }
        function _emscripten_glPauseTransformFeedback() {
            GLctx["pauseTransformFeedback"]();
        }
        function _emscripten_glPixelStorei(pname1, param1) {
            if (pname1 == 3317) GL.unpackAlignment = param1;
            GLctx.pixelStorei(pname1, param1);
        }
        function _emscripten_glPolygonOffset(x01, x11) {
            GLctx["polygonOffset"](x01, x11);
        }
        function _emscripten_glProgramBinary(program1, binaryFormat1, binary1, length1) {
            GL.recordError(1280);
        }
        function _emscripten_glProgramParameteri(program1, pname1, value1) {
            GL.recordError(1280);
        }
        function _emscripten_glQueryCounterEXT(id1, target1) {
            GLctx.disjointTimerQueryExt["queryCounterEXT"](GL.queries[id1], target1);
        }
        function _emscripten_glReadBuffer(x01) {
            GLctx["readBuffer"](x01);
        }
        function computeUnpackAlignedImageSize(width1, height1, sizePerPixel1, alignment1) {
            function roundedToNextMultipleOf1(x10, y1) {
                return x10 + y1 - 1 & -y1;
            }
            var plainRowSize1 = width1 * sizePerPixel1;
            var alignedRowSize1 = roundedToNextMultipleOf1(plainRowSize1, alignment1);
            return height1 * alignedRowSize1;
        }
        function __colorChannelsInGlTextureFormat(format1) {
            var colorChannels1 = {
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
            return colorChannels1[format1 - 6402] || 1;
        }
        function heapObjectForWebGLType(type1) {
            type1 -= 5120;
            if (type1 == 0) return GROWABLE_HEAP_I8();
            if (type1 == 1) return GROWABLE_HEAP_U8();
            if (type1 == 2) return GROWABLE_HEAP_I16();
            if (type1 == 4) return GROWABLE_HEAP_I32();
            if (type1 == 6) return GROWABLE_HEAP_F32();
            if (type1 == 5 || type1 == 28922 || type1 == 28520 || type1 == 30779 || type1 == 30782) return GROWABLE_HEAP_U32();
            return GROWABLE_HEAP_U16();
        }
        function heapAccessShiftForWebGLHeap(heap1) {
            return 31 - Math.clz32(heap1.BYTES_PER_ELEMENT);
        }
        function emscriptenWebGLGetTexPixelData(type1, format1, width1, height1, pixels1, internalFormat1) {
            var heap1 = heapObjectForWebGLType(type1);
            var shift1 = heapAccessShiftForWebGLHeap(heap1);
            var byteSize1 = 1 << shift1;
            var sizePerPixel1 = __colorChannelsInGlTextureFormat(format1) * byteSize1;
            var bytes1 = computeUnpackAlignedImageSize(width1, height1, sizePerPixel1, GL.unpackAlignment);
            return heap1.subarray(pixels1 >> shift1, pixels1 + bytes1 >> shift1);
        }
        function _emscripten_glReadPixels(x10, y1, width1, height1, format1, type1, pixels1) {
            if (GL.currentContext.version >= 2) {
                if (GLctx.currentPixelPackBufferBinding) GLctx.readPixels(x10, y1, width1, height1, format1, type1, pixels1);
                else {
                    var heap1 = heapObjectForWebGLType(type1);
                    GLctx.readPixels(x10, y1, width1, height1, format1, type1, heap1, pixels1 >> heapAccessShiftForWebGLHeap(heap1));
                }
                return;
            }
            var pixelData1 = emscriptenWebGLGetTexPixelData(type1, format1, width1, height1, pixels1, format1);
            if (!pixelData1) {
                GL.recordError(1280);
                return;
            }
            GLctx.readPixels(x10, y1, width1, height1, format1, type1, pixelData1);
        }
        function _emscripten_glReleaseShaderCompiler() {}
        function _emscripten_glRenderbufferStorage(x01, x11, x21, x31) {
            GLctx["renderbufferStorage"](x01, x11, x21, x31);
        }
        function _emscripten_glRenderbufferStorageMultisample(x01, x11, x21, x31, x41) {
            GLctx["renderbufferStorageMultisample"](x01, x11, x21, x31, x41);
        }
        function _emscripten_glResumeTransformFeedback() {
            GLctx["resumeTransformFeedback"]();
        }
        function _emscripten_glSampleCoverage(value1, invert1) {
            GLctx.sampleCoverage(value1, !!invert1);
        }
        function _emscripten_glSamplerParameterf(sampler1, pname1, param1) {
            GLctx["samplerParameterf"](GL.samplers[sampler1], pname1, param1);
        }
        function _emscripten_glSamplerParameterfv(sampler1, pname1, params1) {
            var param1 = GROWABLE_HEAP_F32()[params1 >> 2];
            GLctx["samplerParameterf"](GL.samplers[sampler1], pname1, param1);
        }
        function _emscripten_glSamplerParameteri(sampler1, pname1, param1) {
            GLctx["samplerParameteri"](GL.samplers[sampler1], pname1, param1);
        }
        function _emscripten_glSamplerParameteriv(sampler1, pname1, params1) {
            var param1 = GROWABLE_HEAP_I32()[params1 >> 2];
            GLctx["samplerParameteri"](GL.samplers[sampler1], pname1, param1);
        }
        function _emscripten_glScissor(x01, x11, x21, x31) {
            GLctx["scissor"](x01, x11, x21, x31);
        }
        function _emscripten_glShaderBinary() {
            GL.recordError(1280);
        }
        function _emscripten_glShaderSource(shader1, count1, string1, length1) {
            var source1 = GL.getSource(shader1, count1, string1, length1);
            GLctx.shaderSource(GL.shaders[shader1], source1);
        }
        function _emscripten_glStencilFunc(x01, x11, x21) {
            GLctx["stencilFunc"](x01, x11, x21);
        }
        function _emscripten_glStencilFuncSeparate(x01, x11, x21, x31) {
            GLctx["stencilFuncSeparate"](x01, x11, x21, x31);
        }
        function _emscripten_glStencilMask(x01) {
            GLctx["stencilMask"](x01);
        }
        function _emscripten_glStencilMaskSeparate(x01, x11) {
            GLctx["stencilMaskSeparate"](x01, x11);
        }
        function _emscripten_glStencilOp(x01, x11, x21) {
            GLctx["stencilOp"](x01, x11, x21);
        }
        function _emscripten_glStencilOpSeparate(x01, x11, x21, x31) {
            GLctx["stencilOpSeparate"](x01, x11, x21, x31);
        }
        function _emscripten_glTexImage2D(target1, level1, internalFormat1, width1, height1, border1, format1, type1, pixels1) {
            if (GL.currentContext.version >= 2) {
                if (GLctx.currentPixelUnpackBufferBinding) GLctx.texImage2D(target1, level1, internalFormat1, width1, height1, border1, format1, type1, pixels1);
                else if (pixels1) {
                    var heap1 = heapObjectForWebGLType(type1);
                    GLctx.texImage2D(target1, level1, internalFormat1, width1, height1, border1, format1, type1, heap1, pixels1 >> heapAccessShiftForWebGLHeap(heap1));
                } else GLctx.texImage2D(target1, level1, internalFormat1, width1, height1, border1, format1, type1, null);
                return;
            }
            GLctx.texImage2D(target1, level1, internalFormat1, width1, height1, border1, format1, type1, pixels1 ? emscriptenWebGLGetTexPixelData(type1, format1, width1, height1, pixels1, internalFormat1) : null);
        }
        function _emscripten_glTexImage3D(target1, level1, internalFormat1, width1, height1, depth1, border1, format1, type1, pixels1) {
            if (GLctx.currentPixelUnpackBufferBinding) GLctx["texImage3D"](target1, level1, internalFormat1, width1, height1, depth1, border1, format1, type1, pixels1);
            else if (pixels1) {
                var heap1 = heapObjectForWebGLType(type1);
                GLctx["texImage3D"](target1, level1, internalFormat1, width1, height1, depth1, border1, format1, type1, heap1, pixels1 >> heapAccessShiftForWebGLHeap(heap1));
            } else GLctx["texImage3D"](target1, level1, internalFormat1, width1, height1, depth1, border1, format1, type1, null);
        }
        function _emscripten_glTexParameterf(x01, x11, x21) {
            GLctx["texParameterf"](x01, x11, x21);
        }
        function _emscripten_glTexParameterfv(target1, pname1, params1) {
            var param1 = GROWABLE_HEAP_F32()[params1 >> 2];
            GLctx.texParameterf(target1, pname1, param1);
        }
        function _emscripten_glTexParameteri(x01, x11, x21) {
            GLctx["texParameteri"](x01, x11, x21);
        }
        function _emscripten_glTexParameteriv(target1, pname1, params1) {
            var param1 = GROWABLE_HEAP_I32()[params1 >> 2];
            GLctx.texParameteri(target1, pname1, param1);
        }
        function _emscripten_glTexStorage2D(x01, x11, x21, x31, x41) {
            GLctx["texStorage2D"](x01, x11, x21, x31, x41);
        }
        function _emscripten_glTexStorage3D(x01, x11, x21, x31, x41, x51) {
            GLctx["texStorage3D"](x01, x11, x21, x31, x41, x51);
        }
        function _emscripten_glTexSubImage2D(target1, level1, xoffset1, yoffset1, width1, height1, format1, type1, pixels1) {
            if (GL.currentContext.version >= 2) {
                if (GLctx.currentPixelUnpackBufferBinding) GLctx.texSubImage2D(target1, level1, xoffset1, yoffset1, width1, height1, format1, type1, pixels1);
                else if (pixels1) {
                    var heap1 = heapObjectForWebGLType(type1);
                    GLctx.texSubImage2D(target1, level1, xoffset1, yoffset1, width1, height1, format1, type1, heap1, pixels1 >> heapAccessShiftForWebGLHeap(heap1));
                } else GLctx.texSubImage2D(target1, level1, xoffset1, yoffset1, width1, height1, format1, type1, null);
                return;
            }
            var pixelData1 = null;
            if (pixels1) pixelData1 = emscriptenWebGLGetTexPixelData(type1, format1, width1, height1, pixels1, 0);
            GLctx.texSubImage2D(target1, level1, xoffset1, yoffset1, width1, height1, format1, type1, pixelData1);
        }
        function _emscripten_glTexSubImage3D(target1, level1, xoffset1, yoffset1, zoffset1, width1, height1, depth1, format1, type1, pixels1) {
            if (GLctx.currentPixelUnpackBufferBinding) GLctx["texSubImage3D"](target1, level1, xoffset1, yoffset1, zoffset1, width1, height1, depth1, format1, type1, pixels1);
            else if (pixels1) {
                var heap1 = heapObjectForWebGLType(type1);
                GLctx["texSubImage3D"](target1, level1, xoffset1, yoffset1, zoffset1, width1, height1, depth1, format1, type1, heap1, pixels1 >> heapAccessShiftForWebGLHeap(heap1));
            } else GLctx["texSubImage3D"](target1, level1, xoffset1, yoffset1, zoffset1, width1, height1, depth1, format1, type1, null);
        }
        function _emscripten_glTransformFeedbackVaryings(program1, count1, varyings1, bufferMode1) {
            program1 = GL.programs[program1];
            var vars1 = [];
            for(var i1 = 0; i1 < count1; i1++)vars1.push(UTF8ToString(GROWABLE_HEAP_I32()[varyings1 + i1 * 4 >> 2]));
            GLctx["transformFeedbackVaryings"](program1, vars1, bufferMode1);
        }
        function _emscripten_glUniform1f(location1, v01) {
            GLctx.uniform1f(webglGetUniformLocation(location1), v01);
        }
        var miniTempWebGLFloatBuffers = [];
        function _emscripten_glUniform1fv(location1, count1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniform1fv(webglGetUniformLocation(location1), GROWABLE_HEAP_F32(), value1 >> 2, count1);
                return;
            }
            if (count1 <= 288) {
                var view1 = miniTempWebGLFloatBuffers[count1 - 1];
                for(var i1 = 0; i1 < count1; ++i1)view1[i1] = GROWABLE_HEAP_F32()[value1 + 4 * i1 >> 2];
            } else var view1 = GROWABLE_HEAP_F32().subarray(value1 >> 2, value1 + count1 * 4 >> 2);
            GLctx.uniform1fv(webglGetUniformLocation(location1), view1);
        }
        function _emscripten_glUniform1i(location1, v01) {
            GLctx.uniform1i(webglGetUniformLocation(location1), v01);
        }
        var __miniTempWebGLIntBuffers = [];
        function _emscripten_glUniform1iv(location1, count1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniform1iv(webglGetUniformLocation(location1), GROWABLE_HEAP_I32(), value1 >> 2, count1);
                return;
            }
            if (count1 <= 288) {
                var view1 = __miniTempWebGLIntBuffers[count1 - 1];
                for(var i1 = 0; i1 < count1; ++i1)view1[i1] = GROWABLE_HEAP_I32()[value1 + 4 * i1 >> 2];
            } else var view1 = GROWABLE_HEAP_I32().subarray(value1 >> 2, value1 + count1 * 4 >> 2);
            GLctx.uniform1iv(webglGetUniformLocation(location1), view1);
        }
        function _emscripten_glUniform1ui(location1, v01) {
            GLctx.uniform1ui(webglGetUniformLocation(location1), v01);
        }
        function _emscripten_glUniform1uiv(location1, count1, value1) {
            count1 && GLctx.uniform1uiv(webglGetUniformLocation(location1), GROWABLE_HEAP_U32(), value1 >> 2, count1);
        }
        function _emscripten_glUniform2f(location1, v01, v11) {
            GLctx.uniform2f(webglGetUniformLocation(location1), v01, v11);
        }
        function _emscripten_glUniform2fv(location1, count1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniform2fv(webglGetUniformLocation(location1), GROWABLE_HEAP_F32(), value1 >> 2, count1 * 2);
                return;
            }
            if (count1 <= 144) {
                var view1 = miniTempWebGLFloatBuffers[2 * count1 - 1];
                for(var i1 = 0; i1 < 2 * count1; i1 += 2){
                    view1[i1] = GROWABLE_HEAP_F32()[value1 + 4 * i1 >> 2];
                    view1[i1 + 1] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 4) >> 2];
                }
            } else var view1 = GROWABLE_HEAP_F32().subarray(value1 >> 2, value1 + count1 * 8 >> 2);
            GLctx.uniform2fv(webglGetUniformLocation(location1), view1);
        }
        function _emscripten_glUniform2i(location1, v01, v11) {
            GLctx.uniform2i(webglGetUniformLocation(location1), v01, v11);
        }
        function _emscripten_glUniform2iv(location1, count1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniform2iv(webglGetUniformLocation(location1), GROWABLE_HEAP_I32(), value1 >> 2, count1 * 2);
                return;
            }
            if (count1 <= 144) {
                var view1 = __miniTempWebGLIntBuffers[2 * count1 - 1];
                for(var i1 = 0; i1 < 2 * count1; i1 += 2){
                    view1[i1] = GROWABLE_HEAP_I32()[value1 + 4 * i1 >> 2];
                    view1[i1 + 1] = GROWABLE_HEAP_I32()[value1 + (4 * i1 + 4) >> 2];
                }
            } else var view1 = GROWABLE_HEAP_I32().subarray(value1 >> 2, value1 + count1 * 8 >> 2);
            GLctx.uniform2iv(webglGetUniformLocation(location1), view1);
        }
        function _emscripten_glUniform2ui(location1, v01, v11) {
            GLctx.uniform2ui(webglGetUniformLocation(location1), v01, v11);
        }
        function _emscripten_glUniform2uiv(location1, count1, value1) {
            count1 && GLctx.uniform2uiv(webglGetUniformLocation(location1), GROWABLE_HEAP_U32(), value1 >> 2, count1 * 2);
        }
        function _emscripten_glUniform3f(location1, v01, v11, v21) {
            GLctx.uniform3f(webglGetUniformLocation(location1), v01, v11, v21);
        }
        function _emscripten_glUniform3fv(location1, count1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniform3fv(webglGetUniformLocation(location1), GROWABLE_HEAP_F32(), value1 >> 2, count1 * 3);
                return;
            }
            if (count1 <= 96) {
                var view1 = miniTempWebGLFloatBuffers[3 * count1 - 1];
                for(var i1 = 0; i1 < 3 * count1; i1 += 3){
                    view1[i1] = GROWABLE_HEAP_F32()[value1 + 4 * i1 >> 2];
                    view1[i1 + 1] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 4) >> 2];
                    view1[i1 + 2] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 8) >> 2];
                }
            } else var view1 = GROWABLE_HEAP_F32().subarray(value1 >> 2, value1 + count1 * 12 >> 2);
            GLctx.uniform3fv(webglGetUniformLocation(location1), view1);
        }
        function _emscripten_glUniform3i(location1, v01, v11, v21) {
            GLctx.uniform3i(webglGetUniformLocation(location1), v01, v11, v21);
        }
        function _emscripten_glUniform3iv(location1, count1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniform3iv(webglGetUniformLocation(location1), GROWABLE_HEAP_I32(), value1 >> 2, count1 * 3);
                return;
            }
            if (count1 <= 96) {
                var view1 = __miniTempWebGLIntBuffers[3 * count1 - 1];
                for(var i1 = 0; i1 < 3 * count1; i1 += 3){
                    view1[i1] = GROWABLE_HEAP_I32()[value1 + 4 * i1 >> 2];
                    view1[i1 + 1] = GROWABLE_HEAP_I32()[value1 + (4 * i1 + 4) >> 2];
                    view1[i1 + 2] = GROWABLE_HEAP_I32()[value1 + (4 * i1 + 8) >> 2];
                }
            } else var view1 = GROWABLE_HEAP_I32().subarray(value1 >> 2, value1 + count1 * 12 >> 2);
            GLctx.uniform3iv(webglGetUniformLocation(location1), view1);
        }
        function _emscripten_glUniform3ui(location1, v01, v11, v21) {
            GLctx.uniform3ui(webglGetUniformLocation(location1), v01, v11, v21);
        }
        function _emscripten_glUniform3uiv(location1, count1, value1) {
            count1 && GLctx.uniform3uiv(webglGetUniformLocation(location1), GROWABLE_HEAP_U32(), value1 >> 2, count1 * 3);
        }
        function _emscripten_glUniform4f(location1, v01, v11, v21, v31) {
            GLctx.uniform4f(webglGetUniformLocation(location1), v01, v11, v21, v31);
        }
        function _emscripten_glUniform4fv(location1, count1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniform4fv(webglGetUniformLocation(location1), GROWABLE_HEAP_F32(), value1 >> 2, count1 * 4);
                return;
            }
            if (count1 <= 72) {
                var view1 = miniTempWebGLFloatBuffers[4 * count1 - 1];
                var heap1 = GROWABLE_HEAP_F32();
                value1 >>= 2;
                for(var i1 = 0; i1 < 4 * count1; i1 += 4){
                    var dst1 = value1 + i1;
                    view1[i1] = heap1[dst1];
                    view1[i1 + 1] = heap1[dst1 + 1];
                    view1[i1 + 2] = heap1[dst1 + 2];
                    view1[i1 + 3] = heap1[dst1 + 3];
                }
            } else var view1 = GROWABLE_HEAP_F32().subarray(value1 >> 2, value1 + count1 * 16 >> 2);
            GLctx.uniform4fv(webglGetUniformLocation(location1), view1);
        }
        function _emscripten_glUniform4i(location1, v01, v11, v21, v31) {
            GLctx.uniform4i(webglGetUniformLocation(location1), v01, v11, v21, v31);
        }
        function _emscripten_glUniform4iv(location1, count1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniform4iv(webglGetUniformLocation(location1), GROWABLE_HEAP_I32(), value1 >> 2, count1 * 4);
                return;
            }
            if (count1 <= 72) {
                var view1 = __miniTempWebGLIntBuffers[4 * count1 - 1];
                for(var i1 = 0; i1 < 4 * count1; i1 += 4){
                    view1[i1] = GROWABLE_HEAP_I32()[value1 + 4 * i1 >> 2];
                    view1[i1 + 1] = GROWABLE_HEAP_I32()[value1 + (4 * i1 + 4) >> 2];
                    view1[i1 + 2] = GROWABLE_HEAP_I32()[value1 + (4 * i1 + 8) >> 2];
                    view1[i1 + 3] = GROWABLE_HEAP_I32()[value1 + (4 * i1 + 12) >> 2];
                }
            } else var view1 = GROWABLE_HEAP_I32().subarray(value1 >> 2, value1 + count1 * 16 >> 2);
            GLctx.uniform4iv(webglGetUniformLocation(location1), view1);
        }
        function _emscripten_glUniform4ui(location1, v01, v11, v21, v31) {
            GLctx.uniform4ui(webglGetUniformLocation(location1), v01, v11, v21, v31);
        }
        function _emscripten_glUniform4uiv(location1, count1, value1) {
            count1 && GLctx.uniform4uiv(webglGetUniformLocation(location1), GROWABLE_HEAP_U32(), value1 >> 2, count1 * 4);
        }
        function _emscripten_glUniformBlockBinding(program1, uniformBlockIndex1, uniformBlockBinding1) {
            program1 = GL.programs[program1];
            GLctx["uniformBlockBinding"](program1, uniformBlockIndex1, uniformBlockBinding1);
        }
        function _emscripten_glUniformMatrix2fv(location1, count1, transpose1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniformMatrix2fv(webglGetUniformLocation(location1), !!transpose1, GROWABLE_HEAP_F32(), value1 >> 2, count1 * 4);
                return;
            }
            if (count1 <= 72) {
                var view1 = miniTempWebGLFloatBuffers[4 * count1 - 1];
                for(var i1 = 0; i1 < 4 * count1; i1 += 4){
                    view1[i1] = GROWABLE_HEAP_F32()[value1 + 4 * i1 >> 2];
                    view1[i1 + 1] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 4) >> 2];
                    view1[i1 + 2] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 8) >> 2];
                    view1[i1 + 3] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 12) >> 2];
                }
            } else var view1 = GROWABLE_HEAP_F32().subarray(value1 >> 2, value1 + count1 * 16 >> 2);
            GLctx.uniformMatrix2fv(webglGetUniformLocation(location1), !!transpose1, view1);
        }
        function _emscripten_glUniformMatrix2x3fv(location1, count1, transpose1, value1) {
            count1 && GLctx.uniformMatrix2x3fv(webglGetUniformLocation(location1), !!transpose1, GROWABLE_HEAP_F32(), value1 >> 2, count1 * 6);
        }
        function _emscripten_glUniformMatrix2x4fv(location1, count1, transpose1, value1) {
            count1 && GLctx.uniformMatrix2x4fv(webglGetUniformLocation(location1), !!transpose1, GROWABLE_HEAP_F32(), value1 >> 2, count1 * 8);
        }
        function _emscripten_glUniformMatrix3fv(location1, count1, transpose1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniformMatrix3fv(webglGetUniformLocation(location1), !!transpose1, GROWABLE_HEAP_F32(), value1 >> 2, count1 * 9);
                return;
            }
            if (count1 <= 32) {
                var view1 = miniTempWebGLFloatBuffers[9 * count1 - 1];
                for(var i1 = 0; i1 < 9 * count1; i1 += 9){
                    view1[i1] = GROWABLE_HEAP_F32()[value1 + 4 * i1 >> 2];
                    view1[i1 + 1] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 4) >> 2];
                    view1[i1 + 2] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 8) >> 2];
                    view1[i1 + 3] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 12) >> 2];
                    view1[i1 + 4] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 16) >> 2];
                    view1[i1 + 5] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 20) >> 2];
                    view1[i1 + 6] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 24) >> 2];
                    view1[i1 + 7] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 28) >> 2];
                    view1[i1 + 8] = GROWABLE_HEAP_F32()[value1 + (4 * i1 + 32) >> 2];
                }
            } else var view1 = GROWABLE_HEAP_F32().subarray(value1 >> 2, value1 + count1 * 36 >> 2);
            GLctx.uniformMatrix3fv(webglGetUniformLocation(location1), !!transpose1, view1);
        }
        function _emscripten_glUniformMatrix3x2fv(location1, count1, transpose1, value1) {
            count1 && GLctx.uniformMatrix3x2fv(webglGetUniformLocation(location1), !!transpose1, GROWABLE_HEAP_F32(), value1 >> 2, count1 * 6);
        }
        function _emscripten_glUniformMatrix3x4fv(location1, count1, transpose1, value1) {
            count1 && GLctx.uniformMatrix3x4fv(webglGetUniformLocation(location1), !!transpose1, GROWABLE_HEAP_F32(), value1 >> 2, count1 * 12);
        }
        function _emscripten_glUniformMatrix4fv(location1, count1, transpose1, value1) {
            if (GL.currentContext.version >= 2) {
                count1 && GLctx.uniformMatrix4fv(webglGetUniformLocation(location1), !!transpose1, GROWABLE_HEAP_F32(), value1 >> 2, count1 * 16);
                return;
            }
            if (count1 <= 18) {
                var view1 = miniTempWebGLFloatBuffers[16 * count1 - 1];
                var heap1 = GROWABLE_HEAP_F32();
                value1 >>= 2;
                for(var i1 = 0; i1 < 16 * count1; i1 += 16){
                    var dst1 = value1 + i1;
                    view1[i1] = heap1[dst1];
                    view1[i1 + 1] = heap1[dst1 + 1];
                    view1[i1 + 2] = heap1[dst1 + 2];
                    view1[i1 + 3] = heap1[dst1 + 3];
                    view1[i1 + 4] = heap1[dst1 + 4];
                    view1[i1 + 5] = heap1[dst1 + 5];
                    view1[i1 + 6] = heap1[dst1 + 6];
                    view1[i1 + 7] = heap1[dst1 + 7];
                    view1[i1 + 8] = heap1[dst1 + 8];
                    view1[i1 + 9] = heap1[dst1 + 9];
                    view1[i1 + 10] = heap1[dst1 + 10];
                    view1[i1 + 11] = heap1[dst1 + 11];
                    view1[i1 + 12] = heap1[dst1 + 12];
                    view1[i1 + 13] = heap1[dst1 + 13];
                    view1[i1 + 14] = heap1[dst1 + 14];
                    view1[i1 + 15] = heap1[dst1 + 15];
                }
            } else var view1 = GROWABLE_HEAP_F32().subarray(value1 >> 2, value1 + count1 * 64 >> 2);
            GLctx.uniformMatrix4fv(webglGetUniformLocation(location1), !!transpose1, view1);
        }
        function _emscripten_glUniformMatrix4x2fv(location1, count1, transpose1, value1) {
            count1 && GLctx.uniformMatrix4x2fv(webglGetUniformLocation(location1), !!transpose1, GROWABLE_HEAP_F32(), value1 >> 2, count1 * 8);
        }
        function _emscripten_glUniformMatrix4x3fv(location1, count1, transpose1, value1) {
            count1 && GLctx.uniformMatrix4x3fv(webglGetUniformLocation(location1), !!transpose1, GROWABLE_HEAP_F32(), value1 >> 2, count1 * 12);
        }
        function _emscripten_glUseProgram(program1) {
            program1 = GL.programs[program1];
            GLctx.useProgram(program1);
            GLctx.currentProgram = program1;
        }
        function _emscripten_glValidateProgram(program1) {
            GLctx.validateProgram(GL.programs[program1]);
        }
        function _emscripten_glVertexAttrib1f(x01, x11) {
            GLctx["vertexAttrib1f"](x01, x11);
        }
        function _emscripten_glVertexAttrib1fv(index1, v4) {
            GLctx.vertexAttrib1f(index1, GROWABLE_HEAP_F32()[v4 >> 2]);
        }
        function _emscripten_glVertexAttrib2f(x01, x11, x21) {
            GLctx["vertexAttrib2f"](x01, x11, x21);
        }
        function _emscripten_glVertexAttrib2fv(index1, v4) {
            GLctx.vertexAttrib2f(index1, GROWABLE_HEAP_F32()[v4 >> 2], GROWABLE_HEAP_F32()[v4 + 4 >> 2]);
        }
        function _emscripten_glVertexAttrib3f(x01, x11, x21, x31) {
            GLctx["vertexAttrib3f"](x01, x11, x21, x31);
        }
        function _emscripten_glVertexAttrib3fv(index1, v4) {
            GLctx.vertexAttrib3f(index1, GROWABLE_HEAP_F32()[v4 >> 2], GROWABLE_HEAP_F32()[v4 + 4 >> 2], GROWABLE_HEAP_F32()[v4 + 8 >> 2]);
        }
        function _emscripten_glVertexAttrib4f(x01, x11, x21, x31, x41) {
            GLctx["vertexAttrib4f"](x01, x11, x21, x31, x41);
        }
        function _emscripten_glVertexAttrib4fv(index1, v4) {
            GLctx.vertexAttrib4f(index1, GROWABLE_HEAP_F32()[v4 >> 2], GROWABLE_HEAP_F32()[v4 + 4 >> 2], GROWABLE_HEAP_F32()[v4 + 8 >> 2], GROWABLE_HEAP_F32()[v4 + 12 >> 2]);
        }
        function _emscripten_glVertexAttribDivisor(index1, divisor1) {
            GLctx["vertexAttribDivisor"](index1, divisor1);
        }
        function _emscripten_glVertexAttribI4i(x01, x11, x21, x31, x41) {
            GLctx["vertexAttribI4i"](x01, x11, x21, x31, x41);
        }
        function _emscripten_glVertexAttribI4iv(index1, v4) {
            GLctx.vertexAttribI4i(index1, GROWABLE_HEAP_I32()[v4 >> 2], GROWABLE_HEAP_I32()[v4 + 4 >> 2], GROWABLE_HEAP_I32()[v4 + 8 >> 2], GROWABLE_HEAP_I32()[v4 + 12 >> 2]);
        }
        function _emscripten_glVertexAttribI4ui(x01, x11, x21, x31, x41) {
            GLctx["vertexAttribI4ui"](x01, x11, x21, x31, x41);
        }
        function _emscripten_glVertexAttribI4uiv(index1, v4) {
            GLctx.vertexAttribI4ui(index1, GROWABLE_HEAP_U32()[v4 >> 2], GROWABLE_HEAP_U32()[v4 + 4 >> 2], GROWABLE_HEAP_U32()[v4 + 8 >> 2], GROWABLE_HEAP_U32()[v4 + 12 >> 2]);
        }
        function _emscripten_glVertexAttribIPointer(index1, size1, type1, stride1, ptr1) {
            GLctx["vertexAttribIPointer"](index1, size1, type1, stride1, ptr1);
        }
        function _emscripten_glVertexAttribPointer(index1, size1, type1, normalized1, stride1, ptr1) {
            GLctx.vertexAttribPointer(index1, size1, type1, !!normalized1, stride1, ptr1);
        }
        function _emscripten_glViewport(x01, x11, x21, x31) {
            GLctx["viewport"](x01, x11, x21, x31);
        }
        function _emscripten_glWaitSync(sync1, flags1, timeoutLo1, timeoutHi1) {
            GLctx.waitSync(GL.syncs[sync1], flags1, convertI32PairToI53(timeoutLo1, timeoutHi1));
        }
        function _emscripten_memcpy_big(dest1, src1, num1) {
            GROWABLE_HEAP_U8().copyWithin(dest1, src1, src1 + num1);
        }
        function _emscripten_num_logical_cores() {
            return navigator["hardwareConcurrency"];
        }
        function _emscripten_proxy_to_main_thread_js(index1, sync1) {
            var numCallArgs1 = arguments.length - 2;
            var outerArgs1 = arguments;
            return withStackSave(function() {
                var serializedNumCallArgs1 = numCallArgs1;
                var args1 = stackAlloc(serializedNumCallArgs1 * 8);
                var b1 = args1 >> 3;
                for(var i1 = 0; i1 < numCallArgs1; i1++){
                    var arg1 = outerArgs1[2 + i1];
                    GROWABLE_HEAP_F64()[b1 + i1] = arg1;
                }
                return _emscripten_run_in_main_runtime_thread_js(index1, serializedNumCallArgs1, args1, sync1);
            });
        }
        var _emscripten_receive_on_main_thread_js_callArgs = [];
        function _emscripten_receive_on_main_thread_js(index1, numCallArgs1, args1) {
            _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs1;
            var b1 = args1 >> 3;
            for(var i1 = 0; i1 < numCallArgs1; i1++)_emscripten_receive_on_main_thread_js_callArgs[i1] = GROWABLE_HEAP_F64()[b1 + i1];
            var isEmAsmConst1 = index1 < 0;
            var func1 = !isEmAsmConst1 ? proxiedFunctionTable[index1] : ASM_CONSTS[-index1 - 1];
            return func1.apply(null, _emscripten_receive_on_main_thread_js_callArgs);
        }
        function getHeapMax() {
            return 2147483648;
        }
        function emscripten_realloc_buffer(size1) {
            try {
                wasmMemory.grow(size1 - buffer.byteLength + 65535 >>> 16);
                updateGlobalBufferAndViews(wasmMemory.buffer);
                return 1;
            } catch (e1) {}
        }
        function _emscripten_resize_heap(requestedSize1) {
            var oldSize1 = GROWABLE_HEAP_U8().length;
            requestedSize1 = requestedSize1 >>> 0;
            if (requestedSize1 <= oldSize1) return false;
            var maxHeapSize1 = getHeapMax();
            if (requestedSize1 > maxHeapSize1) return false;
            let alignUp1 = (x10, multiple1)=>x10 + (multiple1 - x10 % multiple1) % multiple1;
            for(var cutDown1 = 1; cutDown1 <= 4; cutDown1 *= 2){
                var overGrownHeapSize1 = oldSize1 * (1 + .2 / cutDown1);
                overGrownHeapSize1 = Math.min(overGrownHeapSize1, requestedSize1 + 100663296);
                var newSize1 = Math.min(maxHeapSize1, alignUp1(Math.max(requestedSize1, overGrownHeapSize1), 65536));
                var replacement1 = emscripten_realloc_buffer(newSize1);
                if (replacement1) return true;
            }
            return false;
        }
        function _emscripten_set_main_loop(func1, fps1, simulateInfiniteLoop1) {
            var browserIterationFunc1 = getWasmTableEntry(func1);
            setMainLoop(browserIterationFunc1, fps1, simulateInfiniteLoop1);
        }
        function _emscripten_supports_offscreencanvas() {
            return 0;
        }
        function _emscripten_unwind_to_js_event_loop() {
            throw "unwind";
        }
        function _emscripten_webgl_destroy_context(contextHandle1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(34, 1, contextHandle1);
            if (GL.currentContext == contextHandle1) GL.currentContext = 0;
            GL.deleteContext(contextHandle1);
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
        function _emscripten_webgl_create_context_proxied(target1, attributes1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(35, 1, target1, attributes1);
            return _emscripten_webgl_do_create_context(target1, attributes1);
        }
        var JSEvents = {
            inEventHandler: 0,
            removeAllEventListeners: function() {
                for(var i1 = JSEvents.eventHandlers.length - 1; i1 >= 0; --i1)JSEvents._removeHandler(i1);
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
            deferCall: function(targetFunction1, precedence1, argsList1) {
                function arraysHaveEqualContent1(arrA1, arrB1) {
                    if (arrA1.length != arrB1.length) return false;
                    for(var i1 in arrA1){
                        if (arrA1[i1] != arrB1[i1]) return false;
                    }
                    return true;
                }
                for(var i1 in JSEvents.deferredCalls){
                    var call1 = JSEvents.deferredCalls[i1];
                    if (call1.targetFunction == targetFunction1 && arraysHaveEqualContent1(call1.argsList, argsList1)) return;
                }
                JSEvents.deferredCalls.push({
                    targetFunction: targetFunction1,
                    precedence: precedence1,
                    argsList: argsList1
                });
                JSEvents.deferredCalls.sort(function(x10, y1) {
                    return x10.precedence < y1.precedence;
                });
            },
            removeDeferredCalls: function(targetFunction1) {
                for(var i1 = 0; i1 < JSEvents.deferredCalls.length; ++i1)if (JSEvents.deferredCalls[i1].targetFunction == targetFunction1) {
                    JSEvents.deferredCalls.splice(i1, 1);
                    --i1;
                }
            },
            canPerformEventHandlerRequests: function() {
                return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
            },
            runDeferredCalls: function() {
                if (!JSEvents.canPerformEventHandlerRequests()) return;
                for(var i1 = 0; i1 < JSEvents.deferredCalls.length; ++i1){
                    var call1 = JSEvents.deferredCalls[i1];
                    JSEvents.deferredCalls.splice(i1, 1);
                    --i1;
                    call1.targetFunction.apply(null, call1.argsList);
                }
            },
            eventHandlers: [],
            removeAllHandlersOnTarget: function(target1, eventTypeString1) {
                for(var i1 = 0; i1 < JSEvents.eventHandlers.length; ++i1)if (JSEvents.eventHandlers[i1].target == target1 && (!eventTypeString1 || eventTypeString1 == JSEvents.eventHandlers[i1].eventTypeString)) JSEvents._removeHandler(i1--);
            },
            _removeHandler: function(i1) {
                var h1 = JSEvents.eventHandlers[i1];
                h1.target.removeEventListener(h1.eventTypeString, h1.eventListenerFunc, h1.useCapture);
                JSEvents.eventHandlers.splice(i1, 1);
            },
            registerOrRemoveHandler: function(eventHandler1) {
                var jsEventHandler1 = function jsEventHandler1(event1) {
                    ++JSEvents.inEventHandler;
                    JSEvents.currentEventHandler = eventHandler1;
                    JSEvents.runDeferredCalls();
                    eventHandler1.handlerFunc(event1);
                    JSEvents.runDeferredCalls();
                    --JSEvents.inEventHandler;
                };
                if (eventHandler1.callbackfunc) {
                    eventHandler1.eventListenerFunc = jsEventHandler1;
                    eventHandler1.target.addEventListener(eventHandler1.eventTypeString, jsEventHandler1, eventHandler1.useCapture);
                    JSEvents.eventHandlers.push(eventHandler1);
                    JSEvents.registerRemoveEventListeners();
                } else {
                    for(var i1 = 0; i1 < JSEvents.eventHandlers.length; ++i1)if (JSEvents.eventHandlers[i1].target == eventHandler1.target && JSEvents.eventHandlers[i1].eventTypeString == eventHandler1.eventTypeString) JSEvents._removeHandler(i1--);
                }
            },
            queueEventHandlerOnThread_iiii: function(targetThread1, eventHandlerFunc1, eventTypeId1, eventData1, userData1) {
                withStackSave(function() {
                    var varargs1 = stackAlloc(12);
                    GROWABLE_HEAP_I32()[varargs1 >> 2] = eventTypeId1;
                    GROWABLE_HEAP_I32()[varargs1 + 4 >> 2] = eventData1;
                    GROWABLE_HEAP_I32()[varargs1 + 8 >> 2] = userData1;
                    _emscripten_dispatch_to_thread_(targetThread1, 637534208, eventHandlerFunc1, eventData1, varargs1);
                });
            },
            getTargetThreadForEventCallback: function(targetThread1) {
                switch(targetThread1){
                    case 1:
                        return 0;
                    case 2:
                        return PThread.currentProxiedOperationCallerThread;
                    default:
                        return targetThread1;
                }
            },
            getNodeNameForTarget: function(target1) {
                if (!target1) return "";
                if (target1 == window) return "#window";
                if (target1 == screen) return "#screen";
                return target1 && target1.nodeName ? target1.nodeName : "";
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
        function maybeCStringToJsString(cString1) {
            return cString1 > 2 ? UTF8ToString(cString1) : cString1;
        }
        var specialHTMLTargets = [
            0,
            typeof document != "undefined" ? document : 0,
            typeof window != "undefined" ? window : 0
        ];
        function findEventTarget(target1) {
            target1 = maybeCStringToJsString(target1);
            var domElement1 = specialHTMLTargets[target1] || (typeof document != "undefined" ? document.querySelector(target1) : undefined);
            return domElement1;
        }
        function findCanvasEventTarget(target1) {
            return findEventTarget(target1);
        }
        function _emscripten_webgl_do_create_context(target1, attributes1) {
            var a8 = attributes1 >> 2;
            var powerPreference1 = GROWABLE_HEAP_I32()[a8 + 6];
            var contextAttributes1 = {
                "alpha": !!GROWABLE_HEAP_I32()[a8 + 0],
                "depth": !!GROWABLE_HEAP_I32()[a8 + 1],
                "stencil": !!GROWABLE_HEAP_I32()[a8 + 2],
                "antialias": !!GROWABLE_HEAP_I32()[a8 + 3],
                "premultipliedAlpha": !!GROWABLE_HEAP_I32()[a8 + 4],
                "preserveDrawingBuffer": !!GROWABLE_HEAP_I32()[a8 + 5],
                "powerPreference": __emscripten_webgl_power_preferences[powerPreference1],
                "failIfMajorPerformanceCaveat": !!GROWABLE_HEAP_I32()[a8 + 7],
                majorVersion: GROWABLE_HEAP_I32()[a8 + 8],
                minorVersion: GROWABLE_HEAP_I32()[a8 + 9],
                enableExtensionsByDefault: GROWABLE_HEAP_I32()[a8 + 10],
                explicitSwapControl: GROWABLE_HEAP_I32()[a8 + 11],
                proxyContextToMainThread: GROWABLE_HEAP_I32()[a8 + 12],
                renderViaOffscreenBackBuffer: GROWABLE_HEAP_I32()[a8 + 13]
            };
            var canvas1 = findCanvasEventTarget(target1);
            if (ENVIRONMENT_IS_PTHREAD) {
                if (contextAttributes1.proxyContextToMainThread === 2 || !canvas1 && contextAttributes1.proxyContextToMainThread === 1) {
                    if (typeof OffscreenCanvas == "undefined") {
                        GROWABLE_HEAP_I32()[attributes1 + 52 >> 2] = 1;
                        GROWABLE_HEAP_I32()[attributes1 + 20 >> 2] = 1;
                    }
                    return _emscripten_webgl_create_context_proxied(target1, attributes1);
                }
            }
            if (!canvas1) return 0;
            if (contextAttributes1.explicitSwapControl && !contextAttributes1.renderViaOffscreenBackBuffer) contextAttributes1.renderViaOffscreenBackBuffer = true;
            var contextHandle1 = GL.createContext(canvas1, contextAttributes1);
            return contextHandle1;
        }
        function _emscripten_webgl_init_context_attributes(attributes1) {
            var a8 = attributes1 >> 2;
            for(var i1 = 0; i1 < 14; ++i1)GROWABLE_HEAP_I32()[a8 + i1] = 0;
            GROWABLE_HEAP_I32()[a8 + 0] = GROWABLE_HEAP_I32()[a8 + 1] = GROWABLE_HEAP_I32()[a8 + 3] = GROWABLE_HEAP_I32()[a8 + 4] = GROWABLE_HEAP_I32()[a8 + 8] = GROWABLE_HEAP_I32()[a8 + 10] = 1;
            if (ENVIRONMENT_IS_WORKER) GROWABLE_HEAP_I32()[attributes1 + 48 >> 2] = 1;
        }
        function _emscripten_webgl_make_context_current_calling_thread(contextHandle1) {
            var success1 = GL.makeContextCurrent(contextHandle1);
            if (success1) GL.currentContextIsProxied = false;
            return success1 ? 0 : -5;
        }
        var ENV = {};
        function getExecutableName() {
            return thisProgram || "./this.program";
        }
        function getEnvStrings() {
            if (!getEnvStrings.strings) {
                var lang1 = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
                var env1 = {
                    "USER": "web_user",
                    "LOGNAME": "web_user",
                    "PATH": "/",
                    "PWD": "/",
                    "HOME": "/home/web_user",
                    "LANG": lang1,
                    "_": getExecutableName()
                };
                for(var x10 in ENV)if (ENV[x10] === undefined) delete env1[x10];
                else env1[x10] = ENV[x10];
                var strings1 = [];
                for(var x10 in env1)strings1.push(x10 + "=" + env1[x10]);
                getEnvStrings.strings = strings1;
            }
            return getEnvStrings.strings;
        }
        function _environ_get(__environ1, environ_buf1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(36, 1, __environ1, environ_buf1);
            var bufSize1 = 0;
            getEnvStrings().forEach(function(string1, i1) {
                var ptr1 = environ_buf1 + bufSize1;
                GROWABLE_HEAP_U32()[__environ1 + i1 * 4 >> 2] = ptr1;
                writeAsciiToMemory(string1, ptr1);
                bufSize1 += string1.length + 1;
            });
            return 0;
        }
        function _environ_sizes_get(penviron_count1, penviron_buf_size1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(37, 1, penviron_count1, penviron_buf_size1);
            var strings1 = getEnvStrings();
            GROWABLE_HEAP_U32()[penviron_count1 >> 2] = strings1.length;
            var bufSize1 = 0;
            strings1.forEach(function(string1) {
                bufSize1 += string1.length + 1;
            });
            GROWABLE_HEAP_U32()[penviron_buf_size1 >> 2] = bufSize1;
            return 0;
        }
        function _fd_close(fd1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(38, 1, fd1);
            try {
                var stream1 = SYSCALLS.getStreamFromFD(fd1);
                FS.close(stream1);
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return e1.errno;
            }
        }
        function _fd_fdstat_get(fd1, pbuf1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(39, 1, fd1, pbuf1);
            try {
                var stream1 = SYSCALLS.getStreamFromFD(fd1);
                var type1 = stream1.tty ? 2 : FS.isDir(stream1.mode) ? 3 : FS.isLink(stream1.mode) ? 7 : 4;
                GROWABLE_HEAP_I8()[pbuf1 >> 0] = type1;
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return e1.errno;
            }
        }
        function doReadv(stream1, iov1, iovcnt1, offset1) {
            var ret1 = 0;
            for(var i1 = 0; i1 < iovcnt1; i1++){
                var ptr1 = GROWABLE_HEAP_U32()[iov1 >> 2];
                var len1 = GROWABLE_HEAP_U32()[iov1 + 4 >> 2];
                iov1 += 8;
                var curr1 = FS.read(stream1, GROWABLE_HEAP_I8(), ptr1, len1, offset1);
                if (curr1 < 0) return -1;
                ret1 += curr1;
                if (curr1 < len1) break;
            }
            return ret1;
        }
        function _fd_read(fd1, iov1, iovcnt1, pnum1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(40, 1, fd1, iov1, iovcnt1, pnum1);
            try {
                var stream1 = SYSCALLS.getStreamFromFD(fd1);
                var num1 = doReadv(stream1, iov1, iovcnt1);
                GROWABLE_HEAP_I32()[pnum1 >> 2] = num1;
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return e1.errno;
            }
        }
        function convertI32PairToI53Checked(lo1, hi1) {
            return hi1 + 2097152 >>> 0 < 4194305 - !!lo1 ? (lo1 >>> 0) + hi1 * 4294967296 : NaN;
        }
        function _fd_seek(fd1, offset_low1, offset_high1, whence1, newOffset1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(41, 1, fd1, offset_low1, offset_high1, whence1, newOffset1);
            try {
                var offset1 = convertI32PairToI53Checked(offset_low1, offset_high1);
                if (isNaN(offset1)) return 61;
                var stream1 = SYSCALLS.getStreamFromFD(fd1);
                FS.llseek(stream1, offset1, whence1);
                tempI64 = [
                    stream1.position >>> 0,
                    (tempDouble = stream1.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
                ], GROWABLE_HEAP_I32()[newOffset1 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[newOffset1 + 4 >> 2] = tempI64[1];
                if (stream1.getdents && offset1 === 0 && whence1 === 0) stream1.getdents = null;
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return e1.errno;
            }
        }
        function doWritev(stream1, iov1, iovcnt1, offset1) {
            var ret1 = 0;
            for(var i1 = 0; i1 < iovcnt1; i1++){
                var ptr1 = GROWABLE_HEAP_U32()[iov1 >> 2];
                var len1 = GROWABLE_HEAP_U32()[iov1 + 4 >> 2];
                iov1 += 8;
                var curr1 = FS.write(stream1, GROWABLE_HEAP_I8(), ptr1, len1, offset1);
                if (curr1 < 0) return -1;
                ret1 += curr1;
            }
            return ret1;
        }
        function _fd_write(fd1, iov1, iovcnt1, pnum1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(42, 1, fd1, iov1, iovcnt1, pnum1);
            try {
                var stream1 = SYSCALLS.getStreamFromFD(fd1);
                var num1 = doWritev(stream1, iov1, iovcnt1);
                GROWABLE_HEAP_U32()[pnum1 >> 2] = num1;
                return 0;
            } catch (e1) {
                if (typeof FS == "undefined" || !(e1 instanceof FS.ErrnoError)) throw e1;
                return e1.errno;
            }
        }
        function _getTempRet0() {
            return getTempRet0();
        }
        function _getaddrinfo(node1, service1, hint1, out1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(43, 1, node1, service1, hint1, out1);
            var addr1 = 0;
            var port1 = 0;
            var flags1 = 0;
            var family1 = 0;
            var type1 = 0;
            var proto1 = 0;
            var ai1;
            function allocaddrinfo1(family1, type1, proto1, canon1, addr1, port1) {
                var sa1, salen1, ai1;
                var errno1;
                salen1 = family1 === 10 ? 28 : 16;
                addr1 = family1 === 10 ? inetNtop6(addr1) : inetNtop4(addr1);
                sa1 = _malloc(salen1);
                errno1 = writeSockaddr(sa1, family1, addr1, port1);
                assert(!errno1);
                ai1 = _malloc(32);
                GROWABLE_HEAP_I32()[ai1 + 4 >> 2] = family1;
                GROWABLE_HEAP_I32()[ai1 + 8 >> 2] = type1;
                GROWABLE_HEAP_I32()[ai1 + 12 >> 2] = proto1;
                GROWABLE_HEAP_I32()[ai1 + 24 >> 2] = canon1;
                GROWABLE_HEAP_U32()[ai1 + 20 >> 2] = sa1;
                if (family1 === 10) GROWABLE_HEAP_I32()[ai1 + 16 >> 2] = 28;
                else GROWABLE_HEAP_I32()[ai1 + 16 >> 2] = 16;
                GROWABLE_HEAP_I32()[ai1 + 28 >> 2] = 0;
                return ai1;
            }
            if (hint1) {
                flags1 = GROWABLE_HEAP_I32()[hint1 >> 2];
                family1 = GROWABLE_HEAP_I32()[hint1 + 4 >> 2];
                type1 = GROWABLE_HEAP_I32()[hint1 + 8 >> 2];
                proto1 = GROWABLE_HEAP_I32()[hint1 + 12 >> 2];
            }
            if (type1 && !proto1) proto1 = type1 === 2 ? 17 : 6;
            if (!type1 && proto1) type1 = proto1 === 17 ? 2 : 1;
            if (proto1 === 0) proto1 = 6;
            if (type1 === 0) type1 = 1;
            if (!node1 && !service1) return -2;
            if (flags1 & -1088) return -1;
            if (hint1 !== 0 && GROWABLE_HEAP_I32()[hint1 >> 2] & 2 && !node1) return -1;
            if (flags1 & 32) return -2;
            if (type1 !== 0 && type1 !== 1 && type1 !== 2) return -7;
            if (family1 !== 0 && family1 !== 2 && family1 !== 10) return -6;
            if (service1) {
                service1 = UTF8ToString(service1);
                port1 = parseInt(service1, 10);
                if (isNaN(port1)) {
                    if (flags1 & 1024) return -2;
                    return -8;
                }
            }
            if (!node1) {
                if (family1 === 0) family1 = 2;
                if ((flags1 & 1) === 0) {
                    if (family1 === 2) addr1 = _htonl(2130706433);
                    else addr1 = [
                        0,
                        0,
                        0,
                        1
                    ];
                }
                ai1 = allocaddrinfo1(family1, type1, proto1, null, addr1, port1);
                GROWABLE_HEAP_U32()[out1 >> 2] = ai1;
                return 0;
            }
            node1 = UTF8ToString(node1);
            addr1 = inetPton4(node1);
            if (addr1 !== null) {
                if (family1 === 0 || family1 === 2) family1 = 2;
                else if (family1 === 10 && flags1 & 8) {
                    addr1 = [
                        0,
                        0,
                        _htonl(65535),
                        addr1
                    ];
                    family1 = 10;
                } else return -2;
            } else {
                addr1 = inetPton6(node1);
                if (addr1 !== null) {
                    if (family1 === 0 || family1 === 10) family1 = 10;
                    else return -2;
                }
            }
            if (addr1 != null) {
                ai1 = allocaddrinfo1(family1, type1, proto1, node1, addr1, port1);
                GROWABLE_HEAP_U32()[out1 >> 2] = ai1;
                return 0;
            }
            if (flags1 & 4) return -2;
            node1 = DNS.lookup_name(node1);
            addr1 = inetPton4(node1);
            if (family1 === 0) family1 = 2;
            else if (family1 === 10) addr1 = [
                0,
                0,
                _htonl(65535),
                addr1
            ];
            ai1 = allocaddrinfo1(family1, type1, proto1, null, addr1, port1);
            GROWABLE_HEAP_U32()[out1 >> 2] = ai1;
            return 0;
        }
        function _getnameinfo(sa1, salen1, node1, nodelen1, serv1, servlen1, flags1) {
            var info1 = readSockaddr(sa1, salen1);
            if (info1.errno) return -6;
            var port1 = info1.port;
            var addr1 = info1.addr;
            var overflowed1 = false;
            if (node1 && nodelen1) {
                var lookup1;
                if (flags1 & 1 || !(lookup1 = DNS.lookup_addr(addr1))) {
                    if (flags1 & 8) return -2;
                } else addr1 = lookup1;
                var numBytesWrittenExclNull1 = stringToUTF8(addr1, node1, nodelen1);
                if (numBytesWrittenExclNull1 + 1 >= nodelen1) overflowed1 = true;
            }
            if (serv1 && servlen1) {
                port1 = "" + port1;
                var numBytesWrittenExclNull1 = stringToUTF8(port1, serv1, servlen1);
                if (numBytesWrittenExclNull1 + 1 >= servlen1) overflowed1 = true;
            }
            if (overflowed1) return -12;
            return 0;
        }
        var GodotRuntime = {
            get_func: function(ptr1) {
                return wasmTable.get(ptr1);
            },
            error: function() {
                err.apply(null, Array.from(arguments));
            },
            print: function() {
                out.apply(null, Array.from(arguments));
            },
            malloc: function(p_size1) {
                return _malloc(p_size1);
            },
            free: function(p_ptr1) {
                _free(p_ptr1);
            },
            getHeapValue: function(p_ptr1, p_type1) {
                return getValue(p_ptr1, p_type1);
            },
            setHeapValue: function(p_ptr1, p_value1, p_type1) {
                setValue(p_ptr1, p_value1, p_type1);
            },
            heapSub: function(p_heap1, p_ptr1, p_len1) {
                const bytes1 = p_heap1.BYTES_PER_ELEMENT;
                return p_heap1.subarray(p_ptr1 / bytes1, p_ptr1 / bytes1 + p_len1);
            },
            heapSlice: function(p_heap1, p_ptr1, p_len1) {
                const bytes1 = p_heap1.BYTES_PER_ELEMENT;
                return p_heap1.slice(p_ptr1 / bytes1, p_ptr1 / bytes1 + p_len1);
            },
            heapCopy: function(p_dst1, p_src1, p_ptr1) {
                const bytes1 = p_src1.BYTES_PER_ELEMENT;
                return p_dst1.set(p_src1, p_ptr1 / bytes1);
            },
            parseString: function(p_ptr1) {
                return UTF8ToString(p_ptr1);
            },
            parseStringArray: function(p_ptr1, p_size1) {
                const strings1 = [];
                const ptrs1 = GodotRuntime.heapSub(GROWABLE_HEAP_I32(), p_ptr1, p_size1);
                ptrs1.forEach(function(ptr1) {
                    strings1.push(GodotRuntime.parseString(ptr1));
                });
                return strings1;
            },
            strlen: function(p_str1) {
                return lengthBytesUTF8(p_str1);
            },
            allocString: function(p_str1) {
                const length1 = GodotRuntime.strlen(p_str1) + 1;
                const c_str1 = GodotRuntime.malloc(length1);
                stringToUTF8(p_str1, c_str1, length1);
                return c_str1;
            },
            allocStringArray: function(p_strings1) {
                const size1 = p_strings1.length;
                const c_ptr1 = GodotRuntime.malloc(size1 * 4);
                for(let i1 = 0; i1 < size1; i1++)GROWABLE_HEAP_I32()[(c_ptr1 >> 2) + i1] = GodotRuntime.allocString(p_strings1[i1]);
                return c_ptr1;
            },
            freeStringArray: function(p_ptr1, p_len1) {
                for(let i1 = 0; i1 < p_len1; i1++)GodotRuntime.free(GROWABLE_HEAP_I32()[(p_ptr1 >> 2) + i1]);
                GodotRuntime.free(p_ptr1);
            },
            stringToHeap: function(p_str1, p_ptr1, p_len1) {
                return stringToUTF8Array(p_str1, GROWABLE_HEAP_I8(), p_ptr1, p_len1);
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
            init_config: function(p_opts1) {
                GodotConfig.canvas_resize_policy = p_opts1["canvasResizePolicy"];
                GodotConfig.canvas = p_opts1["canvas"];
                GodotConfig.locale = p_opts1["locale"] || GodotConfig.locale;
                GodotConfig.virtual_keyboard = p_opts1["virtualKeyboard"];
                GodotConfig.persistent_drops = !!p_opts1["persistentDrops"];
                GodotConfig.on_execute = p_opts1["onExecute"];
                GodotConfig.on_exit = p_opts1["onExit"];
                if (p_opts1["focusCanvas"]) GodotConfig.canvas.focus();
            },
            locate_file: function(file1) {
                return Module["locateFile"](file1);
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
        var ERRNO_CODES = {};
        var GodotFS = {
            _idbfs: false,
            _syncing: false,
            _mount_points: [],
            is_persistent: function() {
                return GodotFS._idbfs ? 1 : 0;
            },
            init: function(persistentPaths1) {
                GodotFS._idbfs = false;
                if (!Array.isArray(persistentPaths1)) return Promise.reject(new Error("Persistent paths must be an array"));
                if (!persistentPaths1.length) return Promise.resolve();
                GodotFS._mount_points = persistentPaths1.slice();
                function createRecursive1(dir1) {
                    try {
                        FS.stat(dir1);
                    } catch (e1) {
                        if (e1.errno !== ERRNO_CODES.ENOENT) throw e1;
                        FS.mkdirTree(dir1);
                    }
                }
                GodotFS._mount_points.forEach(function(path1) {
                    createRecursive1(path1);
                    FS.mount(IDBFS, {}, path1);
                });
                return new Promise(function(resolve1, reject1) {
                    FS.syncfs(true, function(err1) {
                        if (err1) {
                            GodotFS._mount_points = [];
                            GodotFS._idbfs = false;
                            GodotRuntime.print(`IndexedDB not available: ${err1.message}`);
                        } else GodotFS._idbfs = true;
                        resolve1(err1);
                    });
                });
            },
            deinit: function() {
                GodotFS._mount_points.forEach(function(path1) {
                    try {
                        FS.unmount(path1);
                    } catch (e1) {
                        GodotRuntime.print("Already unmounted", e1);
                    }
                    if (GodotFS._idbfs && IDBFS.dbs[path1]) {
                        IDBFS.dbs[path1].close();
                        delete IDBFS.dbs[path1];
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
                return new Promise(function(resolve1, reject1) {
                    FS.syncfs(false, function(error1) {
                        if (error1) GodotRuntime.error(`Failed to save IDB file system: ${error1.message}`);
                        GodotFS._syncing = false;
                        resolve1(error1);
                    });
                });
            },
            copy_to_fs: function(path1, buffer1) {
                const idx1 = path1.lastIndexOf("/");
                let dir1 = "/";
                if (idx1 > 0) dir1 = path1.slice(0, idx1);
                try {
                    FS.stat(dir1);
                } catch (e1) {
                    if (e1.errno !== ERRNO_CODES.ENOENT) throw e1;
                    FS.mkdirTree(dir1);
                }
                FS.writeFile(path1, new Uint8Array(buffer1));
            }
        };
        var GodotOS = {
            request_quit: function() {},
            _async_cbs: [],
            _fs_sync_promise: null,
            atexit: function(p_promise_cb1) {
                GodotOS._async_cbs.push(p_promise_cb1);
            },
            cleanup: function(exit_code1) {
                const cb1 = GodotConfig.on_exit;
                GodotFS.deinit();
                GodotConfig.clear();
                if (cb1) cb1(exit_code1);
            },
            finish_async: function(callback1) {
                GodotOS._fs_sync_promise.then(function(err1) {
                    const promises1 = [];
                    GodotOS._async_cbs.forEach(function(cb1) {
                        promises1.push(new Promise(cb1));
                    });
                    return Promise.all(promises1);
                }).then(function() {
                    return GodotFS.sync();
                }).then(function(err1) {
                    setTimeout(function() {
                        callback1();
                    }, 0);
                });
            }
        };
        var GodotAudio = {
            ctx: null,
            input: null,
            driver: null,
            interval: 0,
            init: function(mix_rate1, latency1, onstatechange1, onlatencyupdate1) {
                const opts1 = {};
                if (mix_rate1) opts1["sampleRate"] = mix_rate1;
                const ctx1 = new (window.AudioContext || window.webkitAudioContext)(opts1);
                GodotAudio.ctx = ctx1;
                ctx1.onstatechange = function() {
                    let state1 = 0;
                    switch(ctx1.state){
                        case "suspended":
                            state1 = 0;
                            break;
                        case "running":
                            state1 = 1;
                            break;
                        case "closed":
                            state1 = 2;
                            break;
                    }
                    onstatechange1(state1);
                };
                ctx1.onstatechange();
                GodotAudio.interval = setInterval(function() {
                    let computed_latency1 = 0;
                    if (ctx1.baseLatency) computed_latency1 += GodotAudio.ctx.baseLatency;
                    if (ctx1.outputLatency) computed_latency1 += GodotAudio.ctx.outputLatency;
                    onlatencyupdate1(computed_latency1);
                }, 1e3);
                GodotOS.atexit(GodotAudio.close_async);
                return ctx1.destination.channelCount;
            },
            create_input: function(callback1) {
                if (GodotAudio.input) return 0;
                function gotMediaInput1(stream1) {
                    try {
                        GodotAudio.input = GodotAudio.ctx.createMediaStreamSource(stream1);
                        callback1(GodotAudio.input);
                    } catch (e1) {
                        GodotRuntime.error("Failed creaating input.", e1);
                    }
                }
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.mediaDevices.getUserMedia({
                    "audio": true
                }).then(gotMediaInput1, function(e1) {
                    GodotRuntime.error("Error getting user media.", e1);
                });
                else {
                    if (!navigator.getUserMedia) navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                    if (!navigator.getUserMedia) {
                        GodotRuntime.error("getUserMedia not available.");
                        return 1;
                    }
                    navigator.getUserMedia({
                        "audio": true
                    }, gotMediaInput1, function(e1) {
                        GodotRuntime.print(e1);
                    });
                }
                return 0;
            },
            close_async: function(resolve1, reject1) {
                const ctx1 = GodotAudio.ctx;
                GodotAudio.ctx = null;
                if (!ctx1) {
                    resolve1();
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
                let closed1 = Promise.resolve();
                if (GodotAudio.driver) closed1 = GodotAudio.driver.close();
                closed1.then(function() {
                    return ctx1.close();
                }).then(function() {
                    ctx1.onstatechange = null;
                    resolve1();
                }).catch(function(e1) {
                    ctx1.onstatechange = null;
                    GodotRuntime.error("Error closing AudioContext", e1);
                    resolve1();
                });
            }
        };
        function _godot_audio_capture_start() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(44, 1);
            return GodotAudio.create_input(function(input1) {
                input1.connect(GodotAudio.driver.get_node());
            });
        }
        function _godot_audio_capture_stop() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(45, 1);
            if (GodotAudio.input) {
                const tracks1 = GodotAudio.input["mediaStream"]["getTracks"]();
                for(let i1 = 0; i1 < tracks1.length; i1++)tracks1[i1]["stop"]();
                GodotAudio.input.disconnect();
                GodotAudio.input = null;
            }
        }
        function _godot_audio_has_worklet() {
            return GodotAudio.ctx && GodotAudio.ctx.audioWorklet ? 1 : 0;
        }
        function _godot_audio_init(p_mix_rate1, p_latency1, p_state_change1, p_latency_update1) {
            const statechange1 = GodotRuntime.get_func(p_state_change1);
            const latencyupdate1 = GodotRuntime.get_func(p_latency_update1);
            const mix_rate1 = GodotRuntime.getHeapValue(p_mix_rate1, "i32");
            const channels1 = GodotAudio.init(mix_rate1, p_latency1, statechange1, latencyupdate1);
            GodotRuntime.setHeapValue(p_mix_rate1, GodotAudio.ctx.sampleRate, "i32");
            return channels1;
        }
        function _godot_audio_is_available() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(46, 1);
            if (!(window.AudioContext || window.webkitAudioContext)) return 0;
            return 1;
        }
        function _godot_audio_resume() {
            if (GodotAudio.ctx && GodotAudio.ctx.state !== "running") GodotAudio.ctx.resume();
        }
        var GodotAudioWorklet = {
            promise: null,
            worklet: null,
            ring_buffer: null,
            create: function(channels1) {
                const path1 = GodotConfig.locate_file("godot.audio.worklet.js");
                GodotAudioWorklet.promise = GodotAudio.ctx.audioWorklet.addModule(path1).then(function() {
                    GodotAudioWorklet.worklet = new AudioWorkletNode(GodotAudio.ctx, "godot-processor", {
                        "outputChannelCount": [
                            channels1
                        ]
                    });
                    return Promise.resolve();
                });
                GodotAudio.driver = GodotAudioWorklet;
            },
            start: function(in_buf1, out_buf1, state1) {
                GodotAudioWorklet.promise.then(function() {
                    const node1 = GodotAudioWorklet.worklet;
                    node1.connect(GodotAudio.ctx.destination);
                    node1.port.postMessage({
                        "cmd": "start",
                        "data": [
                            state1,
                            in_buf1,
                            out_buf1
                        ]
                    });
                    node1.port.onmessage = function(event1) {
                        GodotRuntime.error(event1.data);
                    };
                });
            },
            start_no_threads: function(p_out_buf1, p_out_size1, out_callback1, p_in_buf1, p_in_size1, in_callback1) {
                function RingBuffer1() {
                    let wpos1 = 0;
                    let rpos1 = 0;
                    let pending_samples1 = 0;
                    const wbuf1 = new Float32Array(p_out_size1);
                    function send1(port1) {
                        if (pending_samples1 === 0) return;
                        const buffer1 = GodotRuntime.heapSub(GROWABLE_HEAP_F32(), p_out_buf1, p_out_size1);
                        const size1 = buffer1.length;
                        const tot_sent1 = pending_samples1;
                        out_callback1(wpos1, pending_samples1);
                        if (wpos1 + pending_samples1 >= size1) {
                            const high1 = size1 - wpos1;
                            wbuf1.set(buffer1.subarray(wpos1, size1));
                            pending_samples1 -= high1;
                            wpos1 = 0;
                        }
                        if (pending_samples1 > 0) wbuf1.set(buffer1.subarray(wpos1, wpos1 + pending_samples1), tot_sent1 - pending_samples1);
                        port1.postMessage({
                            "cmd": "chunk",
                            "data": wbuf1.subarray(0, tot_sent1)
                        });
                        wpos1 += pending_samples1;
                        pending_samples1 = 0;
                    }
                    this.receive = function(recv_buf1) {
                        const buffer1 = GodotRuntime.heapSub(GROWABLE_HEAP_F32(), p_in_buf1, p_in_size1);
                        const from1 = rpos1;
                        let to_write1 = recv_buf1.length;
                        let high1 = 0;
                        if (rpos1 + to_write1 >= p_in_size1) {
                            high1 = p_in_size1 - rpos1;
                            buffer1.set(recv_buf1.subarray(0, high1), rpos1);
                            to_write1 -= high1;
                            rpos1 = 0;
                        }
                        if (to_write1) buffer1.set(recv_buf1.subarray(high1, to_write1), rpos1);
                        in_callback1(from1, recv_buf1.length);
                        rpos1 += to_write1;
                    };
                    this.consumed = function(size1, port1) {
                        pending_samples1 += size1;
                        send1(port1);
                    };
                }
                GodotAudioWorklet.ring_buffer = new RingBuffer1;
                GodotAudioWorklet.promise.then(function() {
                    const node1 = GodotAudioWorklet.worklet;
                    const buffer1 = GodotRuntime.heapSlice(GROWABLE_HEAP_F32(), p_out_buf1, p_out_size1);
                    node1.connect(GodotAudio.ctx.destination);
                    node1.port.postMessage({
                        "cmd": "start_nothreads",
                        "data": [
                            buffer1,
                            p_in_size1
                        ]
                    });
                    node1.port.onmessage = function(event1) {
                        if (!GodotAudioWorklet.worklet) return;
                        if (event1.data["cmd"] === "read") {
                            const read1 = event1.data["data"];
                            GodotAudioWorklet.ring_buffer.consumed(read1, GodotAudioWorklet.worklet.port);
                        } else if (event1.data["cmd"] === "input") {
                            const buf1 = event1.data["data"];
                            if (buf1.length > p_in_size1) {
                                GodotRuntime.error("Input chunk is too big");
                                return;
                            }
                            GodotAudioWorklet.ring_buffer.receive(buf1);
                        } else GodotRuntime.error(event1.data);
                    };
                });
            },
            get_node: function() {
                return GodotAudioWorklet.worklet;
            },
            close: function() {
                return new Promise(function(resolve1, reject1) {
                    if (GodotAudioWorklet.promise === null) return;
                    GodotAudioWorklet.promise.then(function() {
                        GodotAudioWorklet.worklet.port.postMessage({
                            "cmd": "stop",
                            "data": null
                        });
                        GodotAudioWorklet.worklet.disconnect();
                        GodotAudioWorklet.worklet = null;
                        GodotAudioWorklet.promise = null;
                        resolve1();
                    }).catch(function(err1) {});
                });
            }
        };
        function _godot_audio_worklet_create(channels1) {
            try {
                GodotAudioWorklet.create(channels1);
            } catch (e1) {
                GodotRuntime.error("Error starting AudioDriverWorklet", e1);
                return 1;
            }
            return 0;
        }
        function _godot_audio_worklet_start(p_in_buf1, p_in_size1, p_out_buf1, p_out_size1, p_state1) {
            const out_buffer1 = GodotRuntime.heapSub(GROWABLE_HEAP_F32(), p_out_buf1, p_out_size1);
            const in_buffer1 = GodotRuntime.heapSub(GROWABLE_HEAP_F32(), p_in_buf1, p_in_size1);
            const state1 = GodotRuntime.heapSub(GROWABLE_HEAP_I32(), p_state1, 4);
            GodotAudioWorklet.start(in_buffer1, out_buffer1, state1);
        }
        function _godot_audio_worklet_state_add(p_state1, p_idx1, p_value1) {
            return Atomics.add(GROWABLE_HEAP_I32(), (p_state1 >> 2) + p_idx1, p_value1);
        }
        function _godot_audio_worklet_state_get(p_state1, p_idx1) {
            return Atomics.load(GROWABLE_HEAP_I32(), (p_state1 >> 2) + p_idx1);
        }
        function _godot_audio_worklet_state_wait(p_state1, p_idx1, p_expected1, p_timeout1) {
            Atomics.wait(GROWABLE_HEAP_I32(), (p_state1 >> 2) + p_idx1, p_expected1, p_timeout1);
            return Atomics.load(GROWABLE_HEAP_I32(), (p_state1 >> 2) + p_idx1);
        }
        function _godot_js_config_canvas_id_get(p_ptr1, p_ptr_max1) {
            GodotRuntime.stringToHeap(`#${GodotConfig.canvas.id}`, p_ptr1, p_ptr_max1);
        }
        function _godot_js_config_locale_get(p_ptr1, p_ptr_max1) {
            GodotRuntime.stringToHeap(GodotConfig.locale, p_ptr1, p_ptr_max1);
        }
        var GodotDisplayCursor = {
            shape: "auto",
            visible: true,
            cursors: {},
            set_style: function(style1) {
                GodotConfig.canvas.style.cursor = style1;
            },
            set_shape: function(shape1) {
                GodotDisplayCursor.shape = shape1;
                let css1 = shape1;
                if (shape1 in GodotDisplayCursor.cursors) {
                    const c1 = GodotDisplayCursor.cursors[shape1];
                    css1 = `url("${c1.url}") ${c1.x} ${c1.y}, auto`;
                }
                if (GodotDisplayCursor.visible) GodotDisplayCursor.set_style(css1);
            },
            clear: function() {
                GodotDisplayCursor.set_style("");
                GodotDisplayCursor.shape = "auto";
                GodotDisplayCursor.visible = true;
                Object.keys(GodotDisplayCursor.cursors).forEach(function(key1) {
                    URL.revokeObjectURL(GodotDisplayCursor.cursors[key1]);
                    delete GodotDisplayCursor.cursors[key1];
                });
            },
            lockPointer: function() {
                const canvas1 = GodotConfig.canvas;
                if (canvas1.requestPointerLock) canvas1.requestPointerLock();
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
            has: function(target1, event1, method1, capture1) {
                return GodotEventListeners.handlers.findIndex(function(e1) {
                    return e1.target === target1 && e1.event === event1 && e1.method === method1 && e1.capture === capture1;
                }) !== -1;
            },
            add: function(target1, event1, method1, capture1) {
                if (GodotEventListeners.has(target1, event1, method1, capture1)) return;
                function Handler1(p_target1, p_event1, p_method1, p_capture1) {
                    this.target = p_target1;
                    this.event = p_event1;
                    this.method = p_method1;
                    this.capture = p_capture1;
                }
                GodotEventListeners.handlers.push(new Handler1(target1, event1, method1, capture1));
                target1.addEventListener(event1, method1, capture1);
            },
            clear: function() {
                GodotEventListeners.handlers.forEach(function(h1) {
                    h1.target.removeEventListener(h1.event, h1.method, h1.capture);
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
                const elem1 = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                if (elem1) return elem1 === GodotConfig.canvas;
                return document.fullscreen || document.mozFullScreen || document.webkitIsFullscreen;
            },
            hasFullscreen: function() {
                return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
            },
            requestFullscreen: function() {
                if (!GodotDisplayScreen.hasFullscreen()) return 1;
                const canvas1 = GodotConfig.canvas;
                try {
                    const promise1 = (canvas1.requestFullscreen || canvas1.msRequestFullscreen || canvas1.mozRequestFullScreen || canvas1.mozRequestFullscreen || canvas1.webkitRequestFullscreen).call(canvas1);
                    if (promise1) promise1.catch(function() {});
                } catch (e1) {
                    return 1;
                }
                return 0;
            },
            exitFullscreen: function() {
                if (!GodotDisplayScreen.isFullscreen()) return 0;
                try {
                    const promise1 = document.exitFullscreen();
                    if (promise1) promise1.catch(function() {});
                } catch (e1) {
                    return 1;
                }
                return 0;
            },
            _updateGL: function() {
                const gl_context_handle1 = _emscripten_webgl_get_current_context();
                const gl1 = GL.getContext(gl_context_handle1);
                if (gl1) GL.resizeOffscreenFramebuffer(gl1);
            },
            updateSize: function() {
                const isFullscreen1 = GodotDisplayScreen.isFullscreen();
                const wantsFullWindow1 = GodotConfig.canvas_resize_policy === 2;
                const noResize1 = GodotConfig.canvas_resize_policy === 0;
                const wwidth1 = GodotDisplayScreen.desired_size[0];
                const wheight1 = GodotDisplayScreen.desired_size[1];
                const canvas1 = GodotConfig.canvas;
                let width1 = wwidth1;
                let height1 = wheight1;
                if (noResize1) {
                    if (canvas1.width !== width1 || canvas1.height !== height1) {
                        GodotDisplayScreen.desired_size = [
                            canvas1.width,
                            canvas1.height
                        ];
                        GodotDisplayScreen._updateGL();
                        return 1;
                    }
                    return 0;
                }
                const scale1 = GodotDisplayScreen.getPixelRatio();
                if (isFullscreen1 || wantsFullWindow1) {
                    width1 = window.innerWidth * scale1;
                    height1 = window.innerHeight * scale1;
                }
                const csw1 = `${width1 / scale1}px`;
                const csh1 = `${height1 / scale1}px`;
                if (canvas1.style.width !== csw1 || canvas1.style.height !== csh1 || canvas1.width !== width1 || canvas1.height !== height1) {
                    canvas1.width = width1;
                    canvas1.height = height1;
                    canvas1.style.width = csw1;
                    canvas1.style.height = csh1;
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
            init: function(input_cb1) {
                function create1(what1) {
                    const elem1 = document.createElement(what1);
                    elem1.style.display = "none";
                    elem1.style.position = "absolute";
                    elem1.style.zIndex = "-1";
                    elem1.style.background = "transparent";
                    elem1.style.padding = "0px";
                    elem1.style.margin = "0px";
                    elem1.style.overflow = "hidden";
                    elem1.style.width = "0px";
                    elem1.style.height = "0px";
                    elem1.style.border = "0px";
                    elem1.style.outline = "none";
                    elem1.readonly = true;
                    elem1.disabled = true;
                    GodotEventListeners.add(elem1, "input", function(evt1) {
                        const c_str1 = GodotRuntime.allocString(elem1.value);
                        input_cb1(c_str1, elem1.selectionEnd);
                        GodotRuntime.free(c_str1);
                    }, false);
                    GodotEventListeners.add(elem1, "blur", function(evt1) {
                        elem1.style.display = "none";
                        elem1.readonly = true;
                        elem1.disabled = true;
                    }, false);
                    GodotConfig.canvas.insertAdjacentElement("beforebegin", elem1);
                    return elem1;
                }
                GodotDisplayVK.textinput = create1("input");
                GodotDisplayVK.textarea = create1("textarea");
                GodotDisplayVK.updateSize();
            },
            show: function(text1, multiline1, start1, end1) {
                if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) return;
                if (GodotDisplayVK.textinput.style.display !== "" || GodotDisplayVK.textarea.style.display !== "") GodotDisplayVK.hide();
                GodotDisplayVK.updateSize();
                const elem1 = multiline1 ? GodotDisplayVK.textarea : GodotDisplayVK.textinput;
                elem1.readonly = false;
                elem1.disabled = false;
                elem1.value = text1;
                elem1.style.display = "block";
                elem1.focus();
                elem1.setSelectionRange(start1, end1);
            },
            hide: function() {
                if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) return;
                [
                    GodotDisplayVK.textinput,
                    GodotDisplayVK.textarea
                ].forEach(function(elem1) {
                    elem1.blur();
                    elem1.style.display = "none";
                    elem1.value = "";
                });
            },
            updateSize: function() {
                if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) return;
                const rect1 = GodotConfig.canvas.getBoundingClientRect();
                function update1(elem1) {
                    elem1.style.left = `${rect1.left}px`;
                    elem1.style.top = `${rect1.top}px`;
                    elem1.style.width = `${rect1.width}px`;
                    elem1.style.height = `${rect1.height}px`;
                }
                update1(GodotDisplayVK.textinput);
                update1(GodotDisplayVK.textarea);
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
                function testDPI1(dpi1) {
                    return window.matchMedia(`(max-resolution: ${dpi1}dpi)`).matches;
                }
                function bisect1(low1, high1, func1) {
                    const mid1 = parseInt((high1 - low1) / 2 + low1, 10);
                    if (high1 - low1 <= 1) return func1(high1) ? high1 : low1;
                    if (func1(mid1)) return bisect1(low1, mid1, func1);
                    return bisect1(mid1, high1, func1);
                }
                try {
                    const dpi1 = bisect1(0, 800, testDPI1);
                    return dpi1 >= 96 ? dpi1 : 96;
                } catch (e1) {
                    return 96;
                }
            }
        };
        function _godot_js_display_alert(p_text1) {
            window.alert(GodotRuntime.parseString(p_text1));
        }
        function _godot_js_display_canvas_focus() {
            GodotConfig.canvas.focus();
        }
        function _godot_js_display_canvas_is_focused() {
            return document.activeElement === GodotConfig.canvas;
        }
        function _godot_js_display_clipboard_get(callback1) {
            const func1 = GodotRuntime.get_func(callback1);
            try {
                navigator.clipboard.readText().then(function(result1) {
                    const ptr1 = GodotRuntime.allocString(result1);
                    func1(ptr1);
                    GodotRuntime.free(ptr1);
                }).catch(function(e1) {});
            } catch (e1) {}
        }
        function _godot_js_display_clipboard_set(p_text1) {
            const text1 = GodotRuntime.parseString(p_text1);
            if (!navigator.clipboard || !navigator.clipboard.writeText) return 1;
            navigator.clipboard.writeText(text1).catch(function(e1) {
                GodotRuntime.error("Setting OS clipboard is only possible from an input callback for the HTML5 plafrom. Exception:", e1);
            });
            return 0;
        }
        function _godot_js_display_cursor_is_hidden() {
            return !GodotDisplayCursor.visible;
        }
        function _godot_js_display_cursor_is_locked() {
            return GodotDisplayCursor.isPointerLocked() ? 1 : 0;
        }
        function _godot_js_display_cursor_lock_set(p_lock1) {
            if (p_lock1) GodotDisplayCursor.lockPointer();
            else GodotDisplayCursor.releasePointer();
        }
        function _godot_js_display_cursor_set_custom_shape(p_shape1, p_ptr1, p_len1, p_hotspot_x1, p_hotspot_y1) {
            const shape1 = GodotRuntime.parseString(p_shape1);
            const old_shape1 = GodotDisplayCursor.cursors[shape1];
            if (p_len1 > 0) {
                const png1 = new Blob([
                    GodotRuntime.heapSlice(GROWABLE_HEAP_U8(), p_ptr1, p_len1)
                ], {
                    type: "image/png"
                });
                const url1 = URL.createObjectURL(png1);
                GodotDisplayCursor.cursors[shape1] = {
                    url: url1,
                    x: p_hotspot_x1,
                    y: p_hotspot_y1
                };
            } else delete GodotDisplayCursor.cursors[shape1];
            if (shape1 === GodotDisplayCursor.shape) GodotDisplayCursor.set_shape(GodotDisplayCursor.shape);
            if (old_shape1) URL.revokeObjectURL(old_shape1.url);
        }
        function _godot_js_display_cursor_set_shape(p_string1) {
            GodotDisplayCursor.set_shape(GodotRuntime.parseString(p_string1));
        }
        function _godot_js_display_cursor_set_visible(p_visible1) {
            const visible1 = p_visible1 !== 0;
            if (visible1 === GodotDisplayCursor.visible) return;
            GodotDisplayCursor.visible = visible1;
            if (visible1) GodotDisplayCursor.set_shape(GodotDisplayCursor.shape);
            else GodotDisplayCursor.set_style("none");
        }
        function _godot_js_display_desired_size_set(width1, height1) {
            GodotDisplayScreen.desired_size = [
                width1,
                height1
            ];
            GodotDisplayScreen.updateSize();
        }
        function _godot_js_display_fullscreen_cb(callback1) {
            const canvas1 = GodotConfig.canvas;
            const func1 = GodotRuntime.get_func(callback1);
            function change_cb1(evt1) {
                if (evt1.target === canvas1) func1(GodotDisplayScreen.isFullscreen());
            }
            GodotEventListeners.add(document, "fullscreenchange", change_cb1, false);
            GodotEventListeners.add(document, "mozfullscreenchange", change_cb1, false);
            GodotEventListeners.add(document, "webkitfullscreenchange", change_cb1, false);
        }
        function _godot_js_display_fullscreen_exit() {
            return GodotDisplayScreen.exitFullscreen();
        }
        function _godot_js_display_fullscreen_request() {
            return GodotDisplayScreen.requestFullscreen();
        }
        function _godot_js_display_glGetBufferSubData(target1, offset1, size1, data1) {
            const gl_context_handle1 = _emscripten_webgl_get_current_context();
            const gl1 = GL.getContext(gl_context_handle1);
            if (gl1) gl1.GLctx["getBufferSubData"](target1, offset1, GROWABLE_HEAP_U8(), data1, size1);
        }
        function _godot_js_display_has_webgl(p_version1) {
            if (p_version1 !== 1 && p_version1 !== 2) return false;
            try {
                return !!document.createElement("canvas").getContext(p_version1 === 2 ? "webgl2" : "webgl");
            } catch (e1) {}
            return false;
        }
        function _godot_js_display_is_swap_ok_cancel() {
            const win1 = [
                "Windows",
                "Win64",
                "Win32",
                "WinCE"
            ];
            const plat1 = navigator.platform || "";
            if (win1.indexOf(plat1) !== -1) return 1;
            return 0;
        }
        function _godot_js_display_notification_cb(callback1, p_enter1, p_exit1, p_in1, p_out1) {
            const canvas1 = GodotConfig.canvas;
            const func1 = GodotRuntime.get_func(callback1);
            const notif1 = [
                p_enter1,
                p_exit1,
                p_in1,
                p_out1
            ];
            [
                "mouseover",
                "mouseleave",
                "focus",
                "blur"
            ].forEach(function(evt_name1, idx1) {
                GodotEventListeners.add(canvas1, evt_name1, function() {
                    func1(notif1[idx1]);
                }, true);
            });
        }
        function _godot_js_display_pixel_ratio_get() {
            return GodotDisplayScreen.getPixelRatio();
        }
        function _godot_js_display_screen_dpi_get() {
            return GodotDisplay.findDPI();
        }
        function _godot_js_display_screen_size_get(width1, height1) {
            const scale1 = GodotDisplayScreen.getPixelRatio();
            GodotRuntime.setHeapValue(width1, window.screen.width * scale1, "i32");
            GodotRuntime.setHeapValue(height1, window.screen.height * scale1, "i32");
        }
        function _godot_js_display_setup_canvas(p_width1, p_height1, p_fullscreen1, p_hidpi1) {
            const canvas1 = GodotConfig.canvas;
            GodotEventListeners.add(canvas1, "contextmenu", function(ev1) {
                ev1.preventDefault();
            }, false);
            GodotEventListeners.add(canvas1, "webglcontextlost", function(ev1) {
                alert("WebGL context lost, please reload the page");
                ev1.preventDefault();
            }, false);
            GodotDisplayScreen.hidpi = !!p_hidpi1;
            switch(GodotConfig.canvas_resize_policy){
                case 0:
                    GodotDisplayScreen.desired_size = [
                        canvas1.width,
                        canvas1.height
                    ];
                    break;
                case 1:
                    GodotDisplayScreen.desired_size = [
                        p_width1,
                        p_height1
                    ];
                    break;
                default:
                    canvas1.style.position = "absolute";
                    canvas1.style.top = 0;
                    canvas1.style.left = 0;
                    break;
            }
            GodotDisplayScreen.updateSize();
            if (p_fullscreen1) GodotDisplayScreen.requestFullscreen();
        }
        function _godot_js_display_size_update() {
            const updated1 = GodotDisplayScreen.updateSize();
            if (updated1) GodotDisplayVK.updateSize();
            return updated1;
        }
        function _godot_js_display_touchscreen_is_available() {
            return "ontouchstart" in window;
        }
        function _godot_js_display_vk_available() {
            return GodotDisplayVK.available();
        }
        function _godot_js_display_vk_cb(p_input_cb1) {
            const input_cb1 = GodotRuntime.get_func(p_input_cb1);
            if (GodotDisplayVK.available()) GodotDisplayVK.init(input_cb1);
        }
        function _godot_js_display_vk_hide() {
            GodotDisplayVK.hide();
        }
        function _godot_js_display_vk_show(p_text1, p_multiline1, p_start1, p_end1) {
            const text1 = GodotRuntime.parseString(p_text1);
            const start1 = p_start1 > 0 ? p_start1 : 0;
            const end1 = p_end1 > 0 ? p_end1 : start1;
            GodotDisplayVK.show(text1, p_multiline1, start1, end1);
        }
        function _godot_js_display_window_blur_cb(callback1) {
            const func1 = GodotRuntime.get_func(callback1);
            GodotEventListeners.add(window, "blur", function() {
                func1();
            }, false);
        }
        function _godot_js_display_window_icon_set(p_ptr1, p_len1) {
            let link1 = document.getElementById("-gd-engine-icon");
            if (link1 === null) {
                link1 = document.createElement("link");
                link1.rel = "icon";
                link1.id = "-gd-engine-icon";
                document.head.appendChild(link1);
            }
            const old_icon1 = GodotDisplay.window_icon;
            const png1 = new Blob([
                GodotRuntime.heapSlice(GROWABLE_HEAP_U8(), p_ptr1, p_len1)
            ], {
                type: "image/png"
            });
            GodotDisplay.window_icon = URL.createObjectURL(png1);
            link1.href = GodotDisplay.window_icon;
            if (old_icon1) URL.revokeObjectURL(old_icon1);
        }
        function _godot_js_display_window_size_get(p_width1, p_height1) {
            GodotRuntime.setHeapValue(p_width1, GodotConfig.canvas.width, "i32");
            GodotRuntime.setHeapValue(p_height1, GodotConfig.canvas.height, "i32");
        }
        function _godot_js_display_window_title_set(p_data1) {
            document.title = GodotRuntime.parseString(p_data1);
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
                        GROWABLE_HEAP_U8().set(eval_ret, bytes_ptr);
                        return 20;
                    }
                    break;
            }
            return 0;
        }
        var IDHandler = {
            _last_id: 0,
            _references: {},
            get: function(p_id1) {
                return IDHandler._references[p_id1];
            },
            add: function(p_data1) {
                const id1 = ++IDHandler._last_id;
                IDHandler._references[id1] = p_data1;
                return id1;
            },
            remove: function(p_id1) {
                delete IDHandler._references[p_id1];
            }
        };
        var GodotFetch = {
            onread: function(id1, result1) {
                const obj1 = IDHandler.get(id1);
                if (!obj1) return;
                if (result1.value) obj1.chunks.push(result1.value);
                obj1.reading = false;
                obj1.done = result1.done;
            },
            onresponse: function(id1, response1) {
                const obj1 = IDHandler.get(id1);
                if (!obj1) return;
                let chunked1 = false;
                response1.headers.forEach(function(value1, header1) {
                    const v4 = value1.toLowerCase().trim();
                    const h1 = header1.toLowerCase().trim();
                    if (h1 === "transfer-encoding" && v4 === "chunked") chunked1 = true;
                });
                obj1.status = response1.status;
                obj1.response = response1;
                obj1.reader = response1.body.getReader();
                obj1.chunked = chunked1;
            },
            onerror: function(id1, err1) {
                GodotRuntime.error(err1);
                const obj1 = IDHandler.get(id1);
                if (!obj1) return;
                obj1.error = err1;
            },
            create: function(method1, url1, headers1, body1) {
                const obj1 = {
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
                const id1 = IDHandler.add(obj1);
                const init1 = {
                    method: method1,
                    headers: headers1,
                    body: body1
                };
                obj1.request = fetch(url1, init1);
                obj1.request.then(GodotFetch.onresponse.bind(null, id1)).catch(GodotFetch.onerror.bind(null, id1));
                return id1;
            },
            free: function(id1) {
                const obj1 = IDHandler.get(id1);
                if (!obj1) return;
                IDHandler.remove(id1);
                if (!obj1.request) return;
                obj1.request.then(function(response1) {
                    response1.abort();
                }).catch(function(e1) {});
            },
            read: function(id1) {
                const obj1 = IDHandler.get(id1);
                if (!obj1) return;
                if (obj1.reader && !obj1.reading) {
                    if (obj1.done) {
                        obj1.reader = null;
                        return;
                    }
                    obj1.reading = true;
                    obj1.reader.read().then(GodotFetch.onread.bind(null, id1)).catch(GodotFetch.onerror.bind(null, id1));
                }
            }
        };
        function _godot_js_fetch_body_length_get(p_id1) {
            const obj1 = IDHandler.get(p_id1);
            if (!obj1 || !obj1.response) return -1;
            return obj1.bodySize;
        }
        function _godot_js_fetch_create(p_method1, p_url1, p_headers1, p_headers_size1, p_body1, p_body_size1) {
            const method1 = GodotRuntime.parseString(p_method1);
            const url1 = GodotRuntime.parseString(p_url1);
            const headers1 = GodotRuntime.parseStringArray(p_headers1, p_headers_size1);
            const body1 = p_body_size1 ? GodotRuntime.heapSlice(GROWABLE_HEAP_I8(), p_body1, p_body_size1) : null;
            return GodotFetch.create(method1, url1, headers1.map(function(hv1) {
                const idx1 = hv1.indexOf(":");
                if (idx1 <= 0) return [];
                return [
                    hv1.slice(0, idx1).trim(),
                    hv1.slice(idx1 + 1).trim()
                ];
            }).filter(function(v4) {
                return v4.length === 2;
            }), body1);
        }
        function _godot_js_fetch_free(id1) {
            GodotFetch.free(id1);
        }
        function _godot_js_fetch_http_status_get(p_id1) {
            const obj1 = IDHandler.get(p_id1);
            if (!obj1 || !obj1.response) return 0;
            return obj1.status;
        }
        function _godot_js_fetch_is_chunked(p_id1) {
            const obj1 = IDHandler.get(p_id1);
            if (!obj1 || !obj1.response) return -1;
            return obj1.chunked ? 1 : 0;
        }
        function _godot_js_fetch_read_chunk(p_id1, p_buf1, p_buf_size1) {
            const obj1 = IDHandler.get(p_id1);
            if (!obj1 || !obj1.response) return 0;
            let to_read1 = p_buf_size1;
            const chunks1 = obj1.chunks;
            while(to_read1 && chunks1.length){
                const chunk1 = obj1.chunks[0];
                if (chunk1.length > to_read1) {
                    GodotRuntime.heapCopy(GROWABLE_HEAP_I8(), chunk1.slice(0, to_read1), p_buf1);
                    chunks1[0] = chunk1.slice(to_read1);
                    to_read1 = 0;
                } else {
                    GodotRuntime.heapCopy(GROWABLE_HEAP_I8(), chunk1, p_buf1);
                    to_read1 -= chunk1.length;
                    chunks1.pop();
                }
            }
            if (!chunks1.length) GodotFetch.read(p_id1);
            return p_buf_size1 - to_read1;
        }
        function _godot_js_fetch_read_headers(p_id1, p_parse_cb1, p_ref1) {
            const obj1 = IDHandler.get(p_id1);
            if (!obj1 || !obj1.response) return 1;
            const cb1 = GodotRuntime.get_func(p_parse_cb1);
            const arr1 = [];
            obj1.response.headers.forEach(function(v4, h1) {
                arr1.push(`${h1}:${v4}`);
            });
            const c_ptr1 = GodotRuntime.allocStringArray(arr1);
            cb1(arr1.length, c_ptr1, p_ref1);
            GodotRuntime.freeStringArray(c_ptr1, arr1.length);
            return 0;
        }
        function _godot_js_fetch_state_get(p_id1) {
            const obj1 = IDHandler.get(p_id1);
            if (!obj1) return -1;
            if (obj1.error) return -1;
            if (!obj1.response) return 0;
            if (obj1.reader) return 1;
            if (obj1.done) return 2;
            return -1;
        }
        var GodotInputGamepads = {
            samples: [],
            get_pads: function() {
                try {
                    const pads1 = navigator.getGamepads();
                    if (pads1) return pads1;
                    return [];
                } catch (e1) {
                    return [];
                }
            },
            get_samples: function() {
                return GodotInputGamepads.samples;
            },
            get_sample: function(index1) {
                const samples1 = GodotInputGamepads.samples;
                return index1 < samples1.length ? samples1[index1] : null;
            },
            sample: function() {
                const pads1 = GodotInputGamepads.get_pads();
                const samples1 = [];
                for(let i1 = 0; i1 < pads1.length; i1++){
                    const pad1 = pads1[i1];
                    if (!pad1) {
                        samples1.push(null);
                        continue;
                    }
                    const s1 = {
                        standard: pad1.mapping === "standard",
                        buttons: [],
                        axes: [],
                        connected: pad1.connected
                    };
                    for(let b1 = 0; b1 < pad1.buttons.length; b1++)s1.buttons.push(pad1.buttons[b1].value);
                    for(let a8 = 0; a8 < pad1.axes.length; a8++)s1.axes.push(pad1.axes[a8]);
                    samples1.push(s1);
                }
                GodotInputGamepads.samples = samples1;
            },
            init: function(onchange1) {
                GodotInputGamepads.samples = [];
                function add1(pad1) {
                    const guid1 = GodotInputGamepads.get_guid(pad1);
                    const c_id1 = GodotRuntime.allocString(pad1.id);
                    const c_guid1 = GodotRuntime.allocString(guid1);
                    onchange1(pad1.index, 1, c_id1, c_guid1);
                    GodotRuntime.free(c_id1);
                    GodotRuntime.free(c_guid1);
                }
                const pads1 = GodotInputGamepads.get_pads();
                for(let i1 = 0; i1 < pads1.length; i1++)if (pads1[i1]) add1(pads1[i1]);
                GodotEventListeners.add(window, "gamepadconnected", function(evt1) {
                    if (evt1.gamepad) add1(evt1.gamepad);
                }, false);
                GodotEventListeners.add(window, "gamepaddisconnected", function(evt1) {
                    if (evt1.gamepad) onchange1(evt1.gamepad.index, 0);
                }, false);
            },
            get_guid: function(pad1) {
                if (pad1.mapping) return pad1.mapping;
                const ua1 = navigator.userAgent;
                let os1 = "Unknown";
                if (ua1.indexOf("Android") >= 0) os1 = "Android";
                else if (ua1.indexOf("Linux") >= 0) os1 = "Linux";
                else if (ua1.indexOf("iPhone") >= 0) os1 = "iOS";
                else if (ua1.indexOf("Macintosh") >= 0) os1 = "MacOSX";
                else if (ua1.indexOf("Windows") >= 0) os1 = "Windows";
                const id1 = pad1.id;
                const exp11 = /vendor: ([0-9a-f]{4}) product: ([0-9a-f]{4})/i;
                const exp21 = /^([0-9a-f]+)-([0-9a-f]+)-/i;
                let vendor1 = "";
                let product1 = "";
                if (exp11.test(id1)) {
                    const match1 = exp11.exec(id1);
                    vendor1 = match1[1].padStart(4, "0");
                    product1 = match1[2].padStart(4, "0");
                } else if (exp21.test(id1)) {
                    const match1 = exp21.exec(id1);
                    vendor1 = match1[1].padStart(4, "0");
                    product1 = match1[2].padStart(4, "0");
                }
                if (!vendor1 || !product1) return `${os1}Unknown`;
                return os1 + vendor1 + product1;
            }
        };
        var GodotInputDragDrop = {
            promises: [],
            pending_files: [],
            add_entry: function(entry1) {
                if (entry1.isDirectory) GodotInputDragDrop.add_dir(entry1);
                else if (entry1.isFile) GodotInputDragDrop.add_file(entry1);
                else GodotRuntime.error("Unrecognized entry...", entry1);
            },
            add_dir: function(entry1) {
                GodotInputDragDrop.promises.push(new Promise(function(resolve1, reject1) {
                    const reader1 = entry1.createReader();
                    reader1.readEntries(function(entries1) {
                        for(let i1 = 0; i1 < entries1.length; i1++)GodotInputDragDrop.add_entry(entries1[i1]);
                        resolve1();
                    });
                }));
            },
            add_file: function(entry1) {
                GodotInputDragDrop.promises.push(new Promise(function(resolve1, reject1) {
                    entry1.file(function(file1) {
                        const reader1 = new FileReader;
                        reader1.onload = function() {
                            const f1 = {
                                "path": file1.relativePath || file1.webkitRelativePath,
                                "name": file1.name,
                                "type": file1.type,
                                "size": file1.size,
                                "data": reader1.result
                            };
                            if (!f1["path"]) f1["path"] = f1["name"];
                            GodotInputDragDrop.pending_files.push(f1);
                            resolve1();
                        };
                        reader1.onerror = function() {
                            GodotRuntime.print("Error reading file");
                            reject1();
                        };
                        reader1.readAsArrayBuffer(file1);
                    }, function(err1) {
                        GodotRuntime.print("Error!");
                        reject1();
                    });
                }));
            },
            process: function(resolve1, reject1) {
                if (GodotInputDragDrop.promises.length === 0) {
                    resolve1();
                    return;
                }
                GodotInputDragDrop.promises.pop().then(function() {
                    setTimeout(function() {
                        GodotInputDragDrop.process(resolve1, reject1);
                    }, 0);
                });
            },
            _process_event: function(ev1, callback1) {
                ev1.preventDefault();
                if (ev1.dataTransfer.items) for(let i1 = 0; i1 < ev1.dataTransfer.items.length; i1++){
                    const item1 = ev1.dataTransfer.items[i1];
                    let entry1 = null;
                    if ("getAsEntry" in item1) entry1 = item1.getAsEntry();
                    else if ("webkitGetAsEntry" in item1) entry1 = item1.webkitGetAsEntry();
                    if (entry1) GodotInputDragDrop.add_entry(entry1);
                }
                else GodotRuntime.error("File upload not supported");
                new Promise(GodotInputDragDrop.process).then(function() {
                    const DROP1 = `/tmp/drop-${parseInt(Math.random() * 1073741824, 10)}/`;
                    const drops1 = [];
                    const files1 = [];
                    FS.mkdir(DROP1.slice(0, -1));
                    GodotInputDragDrop.pending_files.forEach((elem1)=>{
                        const path1 = elem1["path"];
                        GodotFS.copy_to_fs(DROP1 + path1, elem1["data"]);
                        let idx1 = path1.indexOf("/");
                        if (idx1 === -1) drops1.push(DROP1 + path1);
                        else {
                            const sub1 = path1.substr(0, idx1);
                            idx1 = sub1.indexOf("/");
                            if (idx1 < 0 && drops1.indexOf(DROP1 + sub1) === -1) drops1.push(DROP1 + sub1);
                        }
                        files1.push(DROP1 + path1);
                    });
                    GodotInputDragDrop.promises = [];
                    GodotInputDragDrop.pending_files = [];
                    callback1(drops1);
                    if (GodotConfig.persistent_drops) GodotOS.atexit(function(resolve1, reject1) {
                        GodotInputDragDrop.remove_drop(files1, DROP1);
                        resolve1();
                    });
                    else GodotInputDragDrop.remove_drop(files1, DROP1);
                });
            },
            remove_drop: function(files1, drop_path1) {
                const dirs1 = [
                    drop_path1.substr(0, drop_path1.length - 1)
                ];
                files1.forEach(function(file1) {
                    FS.unlink(file1);
                    let dir1 = file1.replace(drop_path1, "");
                    let idx1 = dir1.lastIndexOf("/");
                    while(idx1 > 0){
                        dir1 = dir1.substr(0, idx1);
                        if (dirs1.indexOf(drop_path1 + dir1) === -1) dirs1.push(drop_path1 + dir1);
                        idx1 = dir1.lastIndexOf("/");
                    }
                });
                dirs1.sort(function(a8, b1) {
                    const al1 = (a8.match(/\//g) || []).length;
                    const bl1 = (b1.match(/\//g) || []).length;
                    if (al1 > bl1) return -1;
                    else if (al1 < bl1) return 1;
                    return 0;
                }).forEach(function(dir1) {
                    FS.rmdir(dir1);
                });
            },
            handler: function(callback1) {
                return function(ev1) {
                    GodotInputDragDrop._process_event(ev1, callback1);
                };
            }
        };
        var GodotInput = {
            getModifiers: function(evt1) {
                return evt1.shiftKey + 0 + (evt1.altKey + 0 << 1) + (evt1.ctrlKey + 0 << 2) + (evt1.metaKey + 0 << 3);
            },
            computePosition: function(evt1, rect1) {
                const canvas1 = GodotConfig.canvas;
                const rw1 = canvas1.width / rect1.width;
                const rh1 = canvas1.height / rect1.height;
                const x10 = (evt1.clientX - rect1.x) * rw1;
                const y1 = (evt1.clientY - rect1.y) * rh1;
                return [
                    x10,
                    y1
                ];
            }
        };
        function _godot_js_input_drop_files_cb(callback1) {
            const func1 = GodotRuntime.get_func(callback1);
            const dropFiles1 = function(files1) {
                const args1 = files1 || [];
                if (!args1.length) return;
                const argc1 = args1.length;
                const argv1 = GodotRuntime.allocStringArray(args1);
                func1(argv1, argc1);
                GodotRuntime.freeStringArray(argv1, argc1);
            };
            const canvas1 = GodotConfig.canvas;
            GodotEventListeners.add(canvas1, "dragover", function(ev1) {
                ev1.preventDefault();
            }, false);
            GodotEventListeners.add(canvas1, "drop", GodotInputDragDrop.handler(dropFiles1));
        }
        function _godot_js_input_gamepad_cb(change_cb1) {
            const onchange1 = GodotRuntime.get_func(change_cb1);
            GodotInputGamepads.init(onchange1);
        }
        function _godot_js_input_gamepad_sample() {
            GodotInputGamepads.sample();
            return 0;
        }
        function _godot_js_input_gamepad_sample_count() {
            return GodotInputGamepads.get_samples().length;
        }
        function _godot_js_input_gamepad_sample_get(p_index1, r_btns1, r_btns_num1, r_axes1, r_axes_num1, r_standard1) {
            const sample1 = GodotInputGamepads.get_sample(p_index1);
            if (!sample1 || !sample1.connected) return 1;
            const btns1 = sample1.buttons;
            const btns_len1 = btns1.length < 16 ? btns1.length : 16;
            for(let i1 = 0; i1 < btns_len1; i1++)GodotRuntime.setHeapValue(r_btns1 + (i1 << 2), btns1[i1], "float");
            GodotRuntime.setHeapValue(r_btns_num1, btns_len1, "i32");
            const axes1 = sample1.axes;
            const axes_len1 = axes1.length < 10 ? axes1.length : 10;
            for(let i1 = 0; i1 < axes_len1; i1++)GodotRuntime.setHeapValue(r_axes1 + (i1 << 2), axes1[i1], "float");
            GodotRuntime.setHeapValue(r_axes_num1, axes_len1, "i32");
            const is_standard1 = sample1.standard ? 1 : 0;
            GodotRuntime.setHeapValue(r_standard1, is_standard1, "i32");
            return 0;
        }
        function _godot_js_input_key_cb(callback1, code1, key1) {
            const func1 = GodotRuntime.get_func(callback1);
            function key_cb1(pressed1, evt1) {
                const modifiers1 = GodotInput.getModifiers(evt1);
                GodotRuntime.stringToHeap(evt1.code, code1, 32);
                GodotRuntime.stringToHeap(evt1.key, key1, 32);
                func1(pressed1, evt1.repeat, modifiers1);
                evt1.preventDefault();
            }
            GodotEventListeners.add(GodotConfig.canvas, "keydown", key_cb1.bind(null, 1), false);
            GodotEventListeners.add(GodotConfig.canvas, "keyup", key_cb1.bind(null, 0), false);
        }
        function _godot_js_input_mouse_button_cb(callback1) {
            const func1 = GodotRuntime.get_func(callback1);
            const canvas1 = GodotConfig.canvas;
            function button_cb1(p_pressed1, evt1) {
                const rect1 = canvas1.getBoundingClientRect();
                const pos1 = GodotInput.computePosition(evt1, rect1);
                const modifiers1 = GodotInput.getModifiers(evt1);
                if (p_pressed1) GodotConfig.canvas.focus();
                if (func1(p_pressed1, evt1.button, pos1[0], pos1[1], modifiers1)) evt1.preventDefault();
            }
            GodotEventListeners.add(canvas1, "mousedown", button_cb1.bind(null, 1), false);
            GodotEventListeners.add(window, "mouseup", button_cb1.bind(null, 0), false);
        }
        function _godot_js_input_mouse_move_cb(callback1) {
            const func1 = GodotRuntime.get_func(callback1);
            const canvas1 = GodotConfig.canvas;
            function move_cb1(evt1) {
                const rect1 = canvas1.getBoundingClientRect();
                const pos1 = GodotInput.computePosition(evt1, rect1);
                const rw1 = canvas1.width / rect1.width;
                const rh1 = canvas1.height / rect1.height;
                const rel_pos_x1 = evt1.movementX * rw1;
                const rel_pos_y1 = evt1.movementY * rh1;
                const modifiers1 = GodotInput.getModifiers(evt1);
                func1(pos1[0], pos1[1], rel_pos_x1, rel_pos_y1, modifiers1);
            }
            GodotEventListeners.add(window, "mousemove", move_cb1, false);
        }
        function _godot_js_input_mouse_wheel_cb(callback1) {
            const func1 = GodotRuntime.get_func(callback1);
            function wheel_cb1(evt1) {
                if (func1(evt1["deltaX"] || 0, evt1["deltaY"] || 0)) evt1.preventDefault();
            }
            GodotEventListeners.add(GodotConfig.canvas, "wheel", wheel_cb1, false);
        }
        function _godot_js_input_paste_cb(callback1) {
            const func1 = GodotRuntime.get_func(callback1);
            GodotEventListeners.add(window, "paste", function(evt1) {
                const text1 = evt1.clipboardData.getData("text");
                const ptr1 = GodotRuntime.allocString(text1);
                func1(ptr1);
                GodotRuntime.free(ptr1);
            }, false);
        }
        function _godot_js_input_touch_cb(callback1, ids1, coords1) {
            const func1 = GodotRuntime.get_func(callback1);
            const canvas1 = GodotConfig.canvas;
            function touch_cb1(type1, evt1) {
                if (type1 === 0) GodotConfig.canvas.focus();
                const rect1 = canvas1.getBoundingClientRect();
                const touches1 = evt1.changedTouches;
                for(let i1 = 0; i1 < touches1.length; i1++){
                    const touch1 = touches1[i1];
                    const pos1 = GodotInput.computePosition(touch1, rect1);
                    GodotRuntime.setHeapValue(coords1 + i1 * 16, pos1[0], "double");
                    GodotRuntime.setHeapValue(coords1 + (i1 * 2 + 1) * 8, pos1[1], "double");
                    GodotRuntime.setHeapValue(ids1 + i1 * 4, touch1.identifier, "i32");
                }
                func1(type1, touches1.length);
                if (evt1.cancelable) evt1.preventDefault();
            }
            GodotEventListeners.add(canvas1, "touchstart", touch_cb1.bind(null, 0), false);
            GodotEventListeners.add(canvas1, "touchend", touch_cb1.bind(null, 1), false);
            GodotEventListeners.add(canvas1, "touchcancel", touch_cb1.bind(null, 1), false);
            GodotEventListeners.add(canvas1, "touchmove", touch_cb1.bind(null, 2), false);
        }
        function _godot_js_input_vibrate_handheld(p_duration_ms1) {
            if (typeof navigator.vibrate !== "function") GodotRuntime.print("This browser does not support vibration.");
            else navigator.vibrate(p_duration_ms1);
        }
        function _godot_js_os_download_buffer(p_ptr1, p_size1, p_name1, p_mime1) {
            const buf1 = GodotRuntime.heapSlice(GROWABLE_HEAP_I8(), p_ptr1, p_size1);
            const name1 = GodotRuntime.parseString(p_name1);
            const mime1 = GodotRuntime.parseString(p_mime1);
            const blob1 = new Blob([
                buf1
            ], {
                type: mime1
            });
            const url1 = window.URL.createObjectURL(blob1);
            const a8 = document.createElement("a");
            a8.href = url1;
            a8.download = name1;
            a8.style.display = "none";
            document.body.appendChild(a8);
            a8.click();
            a8.remove();
            window.URL.revokeObjectURL(url1);
        }
        function _godot_js_os_execute(p_json1) {
            const json_args1 = GodotRuntime.parseString(p_json1);
            const args1 = JSON.parse(json_args1);
            if (GodotConfig.on_execute) {
                GodotConfig.on_execute(args1);
                return 0;
            }
            return 1;
        }
        function _godot_js_os_finish_async(p_callback1) {
            const func1 = GodotRuntime.get_func(p_callback1);
            GodotOS.finish_async(func1);
        }
        function _godot_js_os_fs_is_persistent() {
            return GodotFS.is_persistent();
        }
        function _godot_js_os_fs_sync(callback1) {
            const func1 = GodotRuntime.get_func(callback1);
            GodotOS._fs_sync_promise = GodotFS.sync();
            GodotOS._fs_sync_promise.then(function(err1) {
                func1();
            });
        }
        function _godot_js_os_hw_concurrency_get() {
            return navigator.hardwareConcurrency || 1;
        }
        function _godot_js_os_request_quit_cb(p_callback1) {
            GodotOS.request_quit = GodotRuntime.get_func(p_callback1);
        }
        function _godot_js_os_shell_open(p_uri1) {
            window.open(GodotRuntime.parseString(p_uri1), "_blank");
        }
        var GodotPWA = {
            hasUpdate: false,
            updateState: function(cb1, reg1) {
                if (!reg1) return;
                if (!reg1.active) return;
                if (reg1.waiting) {
                    GodotPWA.hasUpdate = true;
                    cb1();
                }
                GodotEventListeners.add(reg1, "updatefound", function() {
                    const installing1 = reg1.installing;
                    GodotEventListeners.add(installing1, "statechange", function() {
                        if (installing1.state === "installed") {
                            GodotPWA.hasUpdate = true;
                            cb1();
                        }
                    });
                });
            }
        };
        function _godot_js_pwa_cb(p_update_cb1) {
            if ("serviceWorker" in navigator) {
                const cb1 = GodotRuntime.get_func(p_update_cb1);
                navigator.serviceWorker.getRegistration().then(GodotPWA.updateState.bind(null, cb1));
            }
        }
        function _godot_js_pwa_update() {
            if ("serviceWorker" in navigator && GodotPWA.hasUpdate) {
                navigator.serviceWorker.getRegistration().then(function(reg1) {
                    if (!reg1 || !reg1.waiting) return;
                    reg1.waiting.postMessage("update");
                });
                return 0;
            }
            return 1;
        }
        var GodotRTCDataChannel = {
            connect: function(p_id1, p_on_open1, p_on_message1, p_on_error1, p_on_close1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                ref1.binaryType = "arraybuffer";
                ref1.onopen = function(event1) {
                    p_on_open1();
                };
                ref1.onclose = function(event1) {
                    p_on_close1();
                };
                ref1.onerror = function(event1) {
                    p_on_error1();
                };
                ref1.onmessage = function(event1) {
                    let buffer1;
                    let is_string1 = 0;
                    if (event1.data instanceof ArrayBuffer) buffer1 = new Uint8Array(event1.data);
                    else if (event1.data instanceof Blob) {
                        GodotRuntime.error("Blob type not supported");
                        return;
                    } else if (typeof event1.data === "string") {
                        is_string1 = 1;
                        const enc1 = new TextEncoder("utf-8");
                        buffer1 = new Uint8Array(enc1.encode(event1.data));
                    } else {
                        GodotRuntime.error("Unknown message type");
                        return;
                    }
                    const len1 = buffer1.length * buffer1.BYTES_PER_ELEMENT;
                    const out1 = GodotRuntime.malloc(len1);
                    GROWABLE_HEAP_U8().set(buffer1, out1);
                    p_on_message1(out1, len1, is_string1);
                    GodotRuntime.free(out1);
                };
            },
            close: function(p_id1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                ref1.onopen = null;
                ref1.onmessage = null;
                ref1.onerror = null;
                ref1.onclose = null;
                ref1.close();
            },
            get_prop: function(p_id1, p_prop1, p_def1) {
                const ref1 = IDHandler.get(p_id1);
                return ref1 && ref1[p_prop1] !== undefined ? ref1[p_prop1] : p_def1;
            }
        };
        function _godot_js_rtc_datachannel_close(p_id1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return;
            GodotRTCDataChannel.close(p_id1);
        }
        function _godot_js_rtc_datachannel_connect(p_id1, p_ref1, p_on_open1, p_on_message1, p_on_error1, p_on_close1) {
            const onopen1 = GodotRuntime.get_func(p_on_open1).bind(null, p_ref1);
            const onmessage1 = GodotRuntime.get_func(p_on_message1).bind(null, p_ref1);
            const onerror1 = GodotRuntime.get_func(p_on_error1).bind(null, p_ref1);
            const onclose1 = GodotRuntime.get_func(p_on_close1).bind(null, p_ref1);
            GodotRTCDataChannel.connect(p_id1, onopen1, onmessage1, onerror1, onclose1);
        }
        function _godot_js_rtc_datachannel_destroy(p_id1) {
            GodotRTCDataChannel.close(p_id1);
            IDHandler.remove(p_id1);
        }
        function _godot_js_rtc_datachannel_get_buffered_amount(p_id1) {
            return GodotRTCDataChannel.get_prop(p_id1, "bufferedAmount", 0);
        }
        function _godot_js_rtc_datachannel_id_get(p_id1) {
            return GodotRTCDataChannel.get_prop(p_id1, "id", 65535);
        }
        function _godot_js_rtc_datachannel_is_negotiated(p_id1) {
            return GodotRTCDataChannel.get_prop(p_id1, "negotiated", 65535);
        }
        function _godot_js_rtc_datachannel_is_ordered(p_id1) {
            return GodotRTCDataChannel.get_prop(p_id1, "ordered", true);
        }
        function _godot_js_rtc_datachannel_label_get(p_id1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1 || !ref1.label) return 0;
            return GodotRuntime.allocString(ref1.label);
        }
        function _godot_js_rtc_datachannel_max_packet_lifetime_get(p_id1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return 65535;
            if (ref1["maxPacketLifeTime"] !== undefined) return ref1["maxPacketLifeTime"];
            else if (ref1["maxRetransmitTime"] !== undefined) return ref1["maxRetransmitTime"];
            return 65535;
        }
        function _godot_js_rtc_datachannel_max_retransmits_get(p_id1) {
            return GodotRTCDataChannel.get_prop(p_id1, "maxRetransmits", 65535);
        }
        function _godot_js_rtc_datachannel_protocol_get(p_id1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1 || !ref1.protocol) return 0;
            return GodotRuntime.allocString(ref1.protocol);
        }
        function _godot_js_rtc_datachannel_ready_state_get(p_id1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return 3;
            switch(ref1.readyState){
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
        function _godot_js_rtc_datachannel_send(p_id1, p_buffer1, p_length1, p_raw1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return 1;
            const bytes_array1 = new Uint8Array(p_length1);
            for(let i1 = 0; i1 < p_length1; i1++)bytes_array1[i1] = GodotRuntime.getHeapValue(p_buffer1 + i1, "i8");
            if (p_raw1) ref1.send(bytes_array1.buffer);
            else {
                const string1 = new TextDecoder("utf-8").decode(bytes_array1);
                ref1.send(string1);
            }
            return 0;
        }
        var GodotRTCPeerConnection = {
            onstatechange: function(p_id1, p_conn1, callback1, event1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                let state1;
                switch(p_conn1.iceConnectionState){
                    case "new":
                        state1 = 0;
                        break;
                    case "checking":
                        state1 = 1;
                        break;
                    case "connected":
                    case "completed":
                        state1 = 2;
                        break;
                    case "disconnected":
                        state1 = 3;
                        break;
                    case "failed":
                        state1 = 4;
                        break;
                    case "closed":
                    default:
                        state1 = 5;
                        break;
                }
                callback1(state1);
            },
            onicecandidate: function(p_id1, callback1, event1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1 || !event1.candidate) return;
                const c1 = event1.candidate;
                const candidate_str1 = GodotRuntime.allocString(c1.candidate);
                const mid_str1 = GodotRuntime.allocString(c1.sdpMid);
                callback1(mid_str1, c1.sdpMLineIndex, candidate_str1);
                GodotRuntime.free(candidate_str1);
                GodotRuntime.free(mid_str1);
            },
            ondatachannel: function(p_id1, callback1, event1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                const cid1 = IDHandler.add(event1.channel);
                callback1(cid1);
            },
            onsession: function(p_id1, callback1, session1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                const type_str1 = GodotRuntime.allocString(session1.type);
                const sdp_str1 = GodotRuntime.allocString(session1.sdp);
                callback1(type_str1, sdp_str1);
                GodotRuntime.free(type_str1);
                GodotRuntime.free(sdp_str1);
            },
            onerror: function(p_id1, callback1, error1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                GodotRuntime.error(error1);
                callback1();
            }
        };
        function _godot_js_rtc_pc_close(p_id1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return;
            ref1.close();
        }
        function _godot_js_rtc_pc_create(p_config1, p_ref1, p_on_state_change1, p_on_candidate1, p_on_datachannel1) {
            const onstatechange1 = GodotRuntime.get_func(p_on_state_change1).bind(null, p_ref1);
            const oncandidate1 = GodotRuntime.get_func(p_on_candidate1).bind(null, p_ref1);
            const ondatachannel1 = GodotRuntime.get_func(p_on_datachannel1).bind(null, p_ref1);
            const config1 = JSON.parse(GodotRuntime.parseString(p_config1));
            let conn1 = null;
            try {
                conn1 = new RTCPeerConnection(config1);
            } catch (e1) {
                GodotRuntime.error(e1);
                return 0;
            }
            const base1 = GodotRTCPeerConnection;
            const id1 = IDHandler.add(conn1);
            conn1.oniceconnectionstatechange = base1.onstatechange.bind(null, id1, conn1, onstatechange1);
            conn1.onicecandidate = base1.onicecandidate.bind(null, id1, oncandidate1);
            conn1.ondatachannel = base1.ondatachannel.bind(null, id1, ondatachannel1);
            return id1;
        }
        function _godot_js_rtc_pc_datachannel_create(p_id1, p_label1, p_config1) {
            try {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return 0;
                const label1 = GodotRuntime.parseString(p_label1);
                const config1 = JSON.parse(GodotRuntime.parseString(p_config1));
                const channel1 = ref1.createDataChannel(label1, config1);
                return IDHandler.add(channel1);
            } catch (e1) {
                GodotRuntime.error(e1);
                return 0;
            }
        }
        function _godot_js_rtc_pc_destroy(p_id1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return;
            ref1.oniceconnectionstatechange = null;
            ref1.onicecandidate = null;
            ref1.ondatachannel = null;
            IDHandler.remove(p_id1);
        }
        function _godot_js_rtc_pc_ice_candidate_add(p_id1, p_mid_name1, p_mline_idx1, p_sdp1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return;
            const sdpMidName1 = GodotRuntime.parseString(p_mid_name1);
            const sdpName1 = GodotRuntime.parseString(p_sdp1);
            ref1.addIceCandidate(new RTCIceCandidate({
                "candidate": sdpName1,
                "sdpMid": sdpMidName1,
                "sdpMlineIndex": p_mline_idx1
            }));
        }
        function _godot_js_rtc_pc_local_description_set(p_id1, p_type1, p_sdp1, p_obj1, p_on_error1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return;
            const type1 = GodotRuntime.parseString(p_type1);
            const sdp1 = GodotRuntime.parseString(p_sdp1);
            const onerror1 = GodotRuntime.get_func(p_on_error1).bind(null, p_obj1);
            ref1.setLocalDescription({
                "sdp": sdp1,
                "type": type1
            }).catch(function(error1) {
                GodotRTCPeerConnection.onerror(p_id1, onerror1, error1);
            });
        }
        function _godot_js_rtc_pc_offer_create(p_id1, p_obj1, p_on_session1, p_on_error1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return;
            const onsession1 = GodotRuntime.get_func(p_on_session1).bind(null, p_obj1);
            const onerror1 = GodotRuntime.get_func(p_on_error1).bind(null, p_obj1);
            ref1.createOffer().then(function(session1) {
                GodotRTCPeerConnection.onsession(p_id1, onsession1, session1);
            }).catch(function(error1) {
                GodotRTCPeerConnection.onerror(p_id1, onerror1, error1);
            });
        }
        function _godot_js_rtc_pc_remote_description_set(p_id1, p_type1, p_sdp1, p_obj1, p_session_created1, p_on_error1) {
            const ref1 = IDHandler.get(p_id1);
            if (!ref1) return;
            const type1 = GodotRuntime.parseString(p_type1);
            const sdp1 = GodotRuntime.parseString(p_sdp1);
            const onerror1 = GodotRuntime.get_func(p_on_error1).bind(null, p_obj1);
            const onsession1 = GodotRuntime.get_func(p_session_created1).bind(null, p_obj1);
            ref1.setRemoteDescription({
                "sdp": sdp1,
                "type": type1
            }).then(function() {
                if (type1 !== "offer") return Promise.resolve();
                return ref1.createAnswer().then(function(session1) {
                    GodotRTCPeerConnection.onsession(p_id1, onsession1, session1);
                });
            }).catch(function(error1) {
                GodotRTCPeerConnection.onerror(p_id1, onerror1, error1);
            });
        }
        var GodotWebSocket = {
            _onopen: function(p_id1, callback1, event1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                const c_str1 = GodotRuntime.allocString(ref1.protocol);
                callback1(c_str1);
                GodotRuntime.free(c_str1);
            },
            _onmessage: function(p_id1, callback1, event1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                let buffer1;
                let is_string1 = 0;
                if (event1.data instanceof ArrayBuffer) buffer1 = new Uint8Array(event1.data);
                else if (event1.data instanceof Blob) {
                    GodotRuntime.error("Blob type not supported");
                    return;
                } else if (typeof event1.data === "string") {
                    is_string1 = 1;
                    const enc1 = new TextEncoder("utf-8");
                    buffer1 = new Uint8Array(enc1.encode(event1.data));
                } else {
                    GodotRuntime.error("Unknown message type");
                    return;
                }
                const len1 = buffer1.length * buffer1.BYTES_PER_ELEMENT;
                const out1 = GodotRuntime.malloc(len1);
                GROWABLE_HEAP_U8().set(buffer1, out1);
                callback1(out1, len1, is_string1);
                GodotRuntime.free(out1);
            },
            _onerror: function(p_id1, callback1, event1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                callback1();
            },
            _onclose: function(p_id1, callback1, event1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                const c_str1 = GodotRuntime.allocString(event1.reason);
                callback1(event1.code, c_str1, event1.wasClean ? 1 : 0);
                GodotRuntime.free(c_str1);
            },
            send: function(p_id1, p_data1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1 || ref1.readyState !== ref1.OPEN) return 1;
                ref1.send(p_data1);
                return 0;
            },
            bufferedAmount: function(p_id1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return 0;
                return ref1.bufferedAmount;
            },
            create: function(socket1, p_on_open1, p_on_message1, p_on_error1, p_on_close1) {
                const id1 = IDHandler.add(socket1);
                socket1.onopen = GodotWebSocket._onopen.bind(null, id1, p_on_open1);
                socket1.onmessage = GodotWebSocket._onmessage.bind(null, id1, p_on_message1);
                socket1.onerror = GodotWebSocket._onerror.bind(null, id1, p_on_error1);
                socket1.onclose = GodotWebSocket._onclose.bind(null, id1, p_on_close1);
                return id1;
            },
            close: function(p_id1, p_code1, p_reason1) {
                const ref1 = IDHandler.get(p_id1);
                if (ref1 && ref1.readyState < ref1.CLOSING) {
                    const code1 = p_code1;
                    const reason1 = GodotRuntime.parseString(p_reason1);
                    ref1.close(code1, reason1);
                }
            },
            destroy: function(p_id1) {
                const ref1 = IDHandler.get(p_id1);
                if (!ref1) return;
                GodotWebSocket.close(p_id1, 3001, "destroyed");
                IDHandler.remove(p_id1);
                ref1.onopen = null;
                ref1.onmessage = null;
                ref1.onerror = null;
                ref1.onclose = null;
            }
        };
        function _godot_js_websocket_buffered_amount(p_id1) {
            return GodotWebSocket.bufferedAmount(p_id1);
        }
        function _godot_js_websocket_close(p_id1, p_code1, p_reason1) {
            const code1 = p_code1;
            const reason1 = GodotRuntime.parseString(p_reason1);
            GodotWebSocket.close(p_id1, code1, reason1);
        }
        function _godot_js_websocket_create(p_ref1, p_url1, p_proto1, p_on_open1, p_on_message1, p_on_error1, p_on_close1) {
            const on_open1 = GodotRuntime.get_func(p_on_open1).bind(null, p_ref1);
            const on_message1 = GodotRuntime.get_func(p_on_message1).bind(null, p_ref1);
            const on_error1 = GodotRuntime.get_func(p_on_error1).bind(null, p_ref1);
            const on_close1 = GodotRuntime.get_func(p_on_close1).bind(null, p_ref1);
            const url1 = GodotRuntime.parseString(p_url1);
            const protos1 = GodotRuntime.parseString(p_proto1);
            let socket1 = null;
            try {
                if (protos1) socket1 = new WebSocket(url1, protos1.split(","));
                else socket1 = new WebSocket(url1);
            } catch (e1) {
                return 0;
            }
            socket1.binaryType = "arraybuffer";
            return GodotWebSocket.create(socket1, on_open1, on_message1, on_error1, on_close1);
        }
        function _godot_js_websocket_destroy(p_id1) {
            GodotWebSocket.destroy(p_id1);
        }
        function _godot_js_websocket_send(p_id1, p_buf1, p_buf_len1, p_raw1) {
            const bytes_array1 = new Uint8Array(p_buf_len1);
            let i1 = 0;
            for(i1 = 0; i1 < p_buf_len1; i1++)bytes_array1[i1] = GodotRuntime.getHeapValue(p_buf1 + i1, "i8");
            let out1 = bytes_array1.buffer;
            if (!p_raw1) out1 = new TextDecoder("utf-8").decode(bytes_array1);
            return GodotWebSocket.send(p_id1, out1);
        }
        var GodotJSWrapper = {
            proxies: null,
            MyProxy: function(val1) {
                const id1 = IDHandler.add(this);
                GodotJSWrapper.proxies.set(val1, id1);
                let refs1 = 1;
                this.ref = function() {
                    refs1++;
                };
                this.unref = function() {
                    refs1--;
                    if (refs1 === 0) {
                        IDHandler.remove(id1);
                        GodotJSWrapper.proxies.delete(val1);
                    }
                };
                this.get_val = function() {
                    return val1;
                };
                this.get_id = function() {
                    return id1;
                };
            },
            get_proxied: function(val1) {
                const id1 = GodotJSWrapper.proxies.get(val1);
                if (id1 === undefined) {
                    const proxy1 = new GodotJSWrapper.MyProxy(val1);
                    return proxy1.get_id();
                }
                IDHandler.get(id1).ref();
                return id1;
            },
            get_proxied_value: function(id1) {
                const proxy1 = IDHandler.get(id1);
                if (proxy1 === undefined) return undefined;
                return proxy1.get_val();
            },
            variant2js: function(type1, val1) {
                switch(type1){
                    case 0:
                        return null;
                    case 1:
                        return !!GodotRuntime.getHeapValue(val1, "i64");
                    case 2:
                        return GodotRuntime.getHeapValue(val1, "i64");
                    case 3:
                        return GodotRuntime.getHeapValue(val1, "double");
                    case 4:
                        return GodotRuntime.parseString(GodotRuntime.getHeapValue(val1, "*"));
                    case 17:
                        return GodotJSWrapper.get_proxied_value(GodotRuntime.getHeapValue(val1, "i64"));
                    default:
                        return undefined;
                }
            },
            js2variant: function(p_val1, p_exchange1) {
                if (p_val1 === undefined || p_val1 === null) return 0;
                const type1 = typeof p_val1;
                if (type1 === "boolean") {
                    GodotRuntime.setHeapValue(p_exchange1, p_val1, "i64");
                    return 1;
                } else if (type1 === "number") {
                    if (Number.isInteger(p_val1)) {
                        GodotRuntime.setHeapValue(p_exchange1, p_val1, "i64");
                        return 2;
                    }
                    GodotRuntime.setHeapValue(p_exchange1, p_val1, "double");
                    return 3;
                } else if (type1 === "string") {
                    const c_str1 = GodotRuntime.allocString(p_val1);
                    GodotRuntime.setHeapValue(p_exchange1, c_str1, "*");
                    return 4;
                }
                const id1 = GodotJSWrapper.get_proxied(p_val1);
                GodotRuntime.setHeapValue(p_exchange1, id1, "i64");
                return 17;
            }
        };
        function _godot_js_wrapper_create_cb(p_ref1, p_func1) {
            const func1 = GodotRuntime.get_func(p_func1);
            let id1 = 0;
            const cb1 = function() {
                if (!GodotJSWrapper.get_proxied_value(id1)) return;
                const args1 = Array.from(arguments);
                func1(p_ref1, GodotJSWrapper.get_proxied(args1), args1.length);
            };
            id1 = GodotJSWrapper.get_proxied(cb1);
            return id1;
        }
        function _godot_js_wrapper_create_object(p_object1, p_args1, p_argc1, p_convert_callback1, p_exchange1, p_lock1, p_free_lock_callback1) {
            const name1 = GodotRuntime.parseString(p_object1);
            if (typeof window[name1] === "undefined") return -1;
            const convert1 = GodotRuntime.get_func(p_convert_callback1);
            const freeLock1 = GodotRuntime.get_func(p_free_lock_callback1);
            const args1 = new Array(p_argc1);
            for(let i1 = 0; i1 < p_argc1; i1++){
                const type1 = convert1(p_args1, i1, p_exchange1, p_lock1);
                const lock1 = GodotRuntime.getHeapValue(p_lock1, "*");
                args1[i1] = GodotJSWrapper.variant2js(type1, p_exchange1);
                if (lock1) freeLock1(p_lock1, type1);
            }
            try {
                const res1 = new window[name1](...args1);
                return GodotJSWrapper.js2variant(res1, p_exchange1);
            } catch (e1) {
                GodotRuntime.error(`Error calling constructor ${name1} with args:`, args1, "error:", e1);
                return -1;
            }
        }
        function _godot_js_wrapper_interface_get(p_name1) {
            const name1 = GodotRuntime.parseString(p_name1);
            if (typeof window[name1] !== "undefined") return GodotJSWrapper.get_proxied(window[name1]);
            return 0;
        }
        function _godot_js_wrapper_object_call(p_id1, p_method1, p_args1, p_argc1, p_convert_callback1, p_exchange1, p_lock1, p_free_lock_callback1) {
            const obj1 = GodotJSWrapper.get_proxied_value(p_id1);
            if (obj1 === undefined) return -1;
            const method1 = GodotRuntime.parseString(p_method1);
            const convert1 = GodotRuntime.get_func(p_convert_callback1);
            const freeLock1 = GodotRuntime.get_func(p_free_lock_callback1);
            const args1 = new Array(p_argc1);
            for(let i1 = 0; i1 < p_argc1; i1++){
                const type1 = convert1(p_args1, i1, p_exchange1, p_lock1);
                const lock1 = GodotRuntime.getHeapValue(p_lock1, "*");
                args1[i1] = GodotJSWrapper.variant2js(type1, p_exchange1);
                if (lock1) freeLock1(p_lock1, type1);
            }
            try {
                const res1 = obj1[method1](...args1);
                return GodotJSWrapper.js2variant(res1, p_exchange1);
            } catch (e1) {
                GodotRuntime.error(`Error calling method ${method1} on:`, obj1, "error:", e1);
                return -1;
            }
        }
        function _godot_js_wrapper_object_get(p_id1, p_exchange1, p_prop1) {
            const obj1 = GodotJSWrapper.get_proxied_value(p_id1);
            if (obj1 === undefined) return 0;
            if (p_prop1) {
                const prop1 = GodotRuntime.parseString(p_prop1);
                try {
                    return GodotJSWrapper.js2variant(obj1[prop1], p_exchange1);
                } catch (e1) {
                    GodotRuntime.error(`Error getting variable ${prop1} on object`, obj1);
                    return 0;
                }
            }
            return GodotJSWrapper.js2variant(obj1, p_exchange1);
        }
        function _godot_js_wrapper_object_getvar(p_id1, p_type1, p_exchange1) {
            const obj1 = GodotJSWrapper.get_proxied_value(p_id1);
            if (obj1 === undefined) return -1;
            const prop1 = GodotJSWrapper.variant2js(p_type1, p_exchange1);
            if (prop1 === undefined || prop1 === null) return -1;
            try {
                return GodotJSWrapper.js2variant(obj1[prop1], p_exchange1);
            } catch (e1) {
                GodotRuntime.error(`Error getting variable ${prop1} on object`, obj1, e1);
                return -1;
            }
        }
        function _godot_js_wrapper_object_set(p_id1, p_name1, p_type1, p_exchange1) {
            const obj1 = GodotJSWrapper.get_proxied_value(p_id1);
            if (obj1 === undefined) return;
            const name1 = GodotRuntime.parseString(p_name1);
            try {
                obj1[name1] = GodotJSWrapper.variant2js(p_type1, p_exchange1);
            } catch (e1) {
                GodotRuntime.error(`Error setting variable ${name1} on object`, obj1);
            }
        }
        function _godot_js_wrapper_object_setvar(p_id1, p_key_type1, p_key_ex1, p_val_type1, p_val_ex1) {
            const obj1 = GodotJSWrapper.get_proxied_value(p_id1);
            if (obj1 === undefined) return -1;
            const key1 = GodotJSWrapper.variant2js(p_key_type1, p_key_ex1);
            try {
                obj1[key1] = GodotJSWrapper.variant2js(p_val_type1, p_val_ex1);
                return 0;
            } catch (e1) {
                GodotRuntime.error(`Error setting variable ${key1} on object`, obj1);
                return -1;
            }
        }
        function _godot_js_wrapper_object_unref(p_id1) {
            const proxy1 = IDHandler.get(p_id1);
            if (proxy1 !== undefined) proxy1.unref();
        }
        var GodotWebXR = {
            gl: null,
            session: null,
            space: null,
            frame: null,
            pose: null,
            orig_requestAnimationFrame: null,
            requestAnimationFrame: (callback1)=>{
                if (GodotWebXR.session && GodotWebXR.space) {
                    const onFrame1 = function(time1, frame1) {
                        GodotWebXR.frame = frame1;
                        GodotWebXR.pose = frame1.getViewerPose(GodotWebXR.space);
                        callback1(time1);
                        GodotWebXR.frame = null;
                        GodotWebXR.pose = null;
                    };
                    GodotWebXR.session.requestAnimationFrame(onFrame1);
                } else GodotWebXR.orig_requestAnimationFrame(callback1);
            },
            monkeyPatchRequestAnimationFrame: (enable1)=>{
                if (GodotWebXR.orig_requestAnimationFrame === null) GodotWebXR.orig_requestAnimationFrame = Browser.requestAnimationFrame;
                Browser.requestAnimationFrame = enable1 ? GodotWebXR.requestAnimationFrame : GodotWebXR.orig_requestAnimationFrame;
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
            vsSource: "\n			const vec2 scale = vec2(0.5, 0.5);\n			attribute vec4 aVertexPosition;\n\n			varying highp vec2 vTextureCoord;\n\n			void main () {\n				gl_Position = aVertexPosition;\n				vTextureCoord = aVertexPosition.xy * scale + scale;\n			}\n		",
            fsSource: "\n			varying highp vec2 vTextureCoord;\n\n			uniform sampler2D uSampler;\n\n			void main() {\n				gl_FragColor = texture2D(uSampler, vTextureCoord);\n			}\n		",
            initShaderProgram: (gl1, vsSource1, fsSource1)=>{
                const vertexShader1 = GodotWebXR.loadShader(gl1, gl1.VERTEX_SHADER, vsSource1);
                const fragmentShader1 = GodotWebXR.loadShader(gl1, gl1.FRAGMENT_SHADER, fsSource1);
                const shaderProgram1 = gl1.createProgram();
                gl1.attachShader(shaderProgram1, vertexShader1);
                gl1.attachShader(shaderProgram1, fragmentShader1);
                gl1.linkProgram(shaderProgram1);
                if (!gl1.getProgramParameter(shaderProgram1, gl1.LINK_STATUS)) {
                    GodotRuntime.error(`Unable to initialize the shader program: ${gl1.getProgramInfoLog(shaderProgram1)}`);
                    return null;
                }
                return shaderProgram1;
            },
            loadShader: (gl1, type1, source1)=>{
                const shader1 = gl1.createShader(type1);
                gl1.shaderSource(shader1, source1);
                gl1.compileShader(shader1);
                if (!gl1.getShaderParameter(shader1, gl1.COMPILE_STATUS)) {
                    GodotRuntime.error(`An error occurred compiling the shader: ${gl1.getShaderInfoLog(shader1)}`);
                    gl1.deleteShader(shader1);
                    return null;
                }
                return shader1;
            },
            initBuffer: (gl1)=>{
                const positionBuffer1 = gl1.createBuffer();
                gl1.bindBuffer(gl1.ARRAY_BUFFER, positionBuffer1);
                const positions1 = [
                    -1,
                    -1,
                    1,
                    -1,
                    -1,
                    1,
                    1,
                    1
                ];
                gl1.bufferData(gl1.ARRAY_BUFFER, new Float32Array(positions1), gl1.STATIC_DRAW);
                return positionBuffer1;
            },
            blitTexture: (gl1, texture1)=>{
                if (GodotWebXR.shaderProgram === null) {
                    GodotWebXR.shaderProgram = GodotWebXR.initShaderProgram(gl1, GodotWebXR.vsSource, GodotWebXR.fsSource);
                    GodotWebXR.programInfo = {
                        program: GodotWebXR.shaderProgram,
                        attribLocations: {
                            vertexPosition: gl1.getAttribLocation(GodotWebXR.shaderProgram, "aVertexPosition")
                        },
                        uniformLocations: {
                            uSampler: gl1.getUniformLocation(GodotWebXR.shaderProgram, "uSampler")
                        }
                    };
                    GodotWebXR.buffer = GodotWebXR.initBuffer(gl1);
                }
                const orig_program1 = gl1.getParameter(gl1.CURRENT_PROGRAM);
                gl1.useProgram(GodotWebXR.shaderProgram);
                gl1.bindBuffer(gl1.ARRAY_BUFFER, GodotWebXR.buffer);
                gl1.vertexAttribPointer(GodotWebXR.programInfo.attribLocations.vertexPosition, 2, gl1.FLOAT, false, 0, 0);
                gl1.enableVertexAttribArray(GodotWebXR.programInfo.attribLocations.vertexPosition);
                gl1.activeTexture(gl1.TEXTURE0);
                gl1.bindTexture(gl1.TEXTURE_2D, texture1);
                gl1.uniform1i(GodotWebXR.programInfo.uniformLocations.uSampler, 0);
                gl1.drawArrays(gl1.TRIANGLE_STRIP, 0, 4);
                gl1.bindTexture(gl1.TEXTURE_2D, null);
                gl1.disableVertexAttribArray(GodotWebXR.programInfo.attribLocations.vertexPosition);
                gl1.bindBuffer(gl1.ARRAY_BUFFER, null);
                gl1.useProgram(orig_program1);
            },
            controllers: [],
            sampleControllers: ()=>{
                if (!GodotWebXR.session) return;
                let other_index1 = 2;
                const controllers1 = [];
                GodotWebXR.session.inputSources.forEach((input_source1)=>{
                    if (input_source1.targetRayMode === "tracked-pointer") {
                        if (input_source1.handedness === "right") controllers1[1] = input_source1;
                        else if (input_source1.handedness === "left" || !controllers1[0]) controllers1[0] = input_source1;
                    } else controllers1[other_index1++] = input_source1;
                });
                GodotWebXR.controllers = controllers1;
            },
            getControllerId: (input_source1)=>GodotWebXR.controllers.indexOf(input_source1)
        };
        function _godot_webxr_commit_for_eye(p_eye1, p_texture_id1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(47, 1, p_eye1, p_texture_id1);
            if (!GodotWebXR.session || !GodotWebXR.pose) return;
            const view_index1 = p_eye1 === 2 ? 1 : 0;
            const glLayer1 = GodotWebXR.session.renderState.baseLayer;
            const view1 = GodotWebXR.pose.views[view_index1];
            const viewport1 = glLayer1.getViewport(view1);
            const gl1 = GodotWebXR.gl;
            const orig_framebuffer1 = gl1.getParameter(gl1.FRAMEBUFFER_BINDING);
            const orig_viewport1 = gl1.getParameter(gl1.VIEWPORT);
            gl1.bindFramebuffer(gl1.FRAMEBUFFER, glLayer1.framebuffer);
            gl1.viewport(viewport1.x, viewport1.y, viewport1.width, viewport1.height);
            GodotWebXR.blitTexture(gl1, GL.textures[p_texture_id1]);
            gl1.bindFramebuffer(gl1.FRAMEBUFFER, orig_framebuffer1);
            gl1.viewport(orig_viewport1[0], orig_viewport1[1], orig_viewport1[2], orig_viewport1[3]);
        }
        function _godot_webxr_get_bounds_geometry() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(48, 1);
            if (!GodotWebXR.space || !GodotWebXR.space.boundsGeometry) return 0;
            const point_count1 = GodotWebXR.space.boundsGeometry.length;
            if (point_count1 === 0) return 0;
            const buf1 = GodotRuntime.malloc((point_count1 * 3 + 1) * 4);
            GodotRuntime.setHeapValue(buf1, point_count1, "i32");
            for(let i1 = 0; i1 < point_count1; i1++){
                const point1 = GodotWebXR.space.boundsGeometry[i1];
                GodotRuntime.setHeapValue(buf1 + (i1 * 3 + 1) * 4, point1.x, "float");
                GodotRuntime.setHeapValue(buf1 + (i1 * 3 + 2) * 4, point1.y, "float");
                GodotRuntime.setHeapValue(buf1 + (i1 * 3 + 3) * 4, point1.z, "float");
            }
            return buf1;
        }
        function _godot_webxr_get_controller_axes(p_controller1, p_xr_standard_mapping1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(49, 1, p_controller1, p_xr_standard_mapping1);
            if (GodotWebXR.controllers.length === 0) return 0;
            const controller1 = GodotWebXR.controllers[p_controller1];
            if (!controller1 || !controller1.gamepad) return 0;
            let axes1 = controller1.gamepad.axes;
            if (controller1.gamepad.mapping === "xr-standard") {
                if (p_xr_standard_mapping1) {
                    const trigger_axis1 = controller1.gamepad.buttons[0].value;
                    const grip_axis1 = controller1.gamepad.buttons[1].value;
                    axes1 = [
                        axes1[2],
                        axes1[3] * -1,
                        trigger_axis1,
                        grip_axis1,
                        grip_axis1,
                        0,
                        axes1[0],
                        axes1[1] * -1
                    ];
                } else {
                    axes1[1] *= -1;
                    axes1[3] *= -1;
                }
            }
            const buf1 = GodotRuntime.malloc((axes1.length + 1) * 4);
            GodotRuntime.setHeapValue(buf1, axes1.length, "i32");
            for(let i1 = 0; i1 < axes1.length; i1++)GodotRuntime.setHeapValue(buf1 + 4 + i1 * 4, axes1[i1], "float");
            return buf1;
        }
        function _godot_webxr_get_controller_buttons(p_controller1, p_xr_standard_mapping1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(50, 1, p_controller1, p_xr_standard_mapping1);
            if (GodotWebXR.controllers.length === 0) return 0;
            const controller1 = GodotWebXR.controllers[p_controller1];
            if (!controller1 || !controller1.gamepad) return 0;
            let buttons1 = controller1.gamepad.buttons;
            if (controller1.gamepad.mapping === "xr-standard" && p_xr_standard_mapping1) buttons1 = [
                0,
                buttons1[5],
                buttons1[1],
                buttons1[3],
                buttons1[6],
                buttons1[7],
                buttons1[8],
                buttons1[4],
                buttons1[9],
                buttons1[10],
                buttons1[11],
                buttons1[12],
                buttons1[13],
                buttons1[14],
                buttons1[2],
                buttons1[0]
            ];
            const buf1 = GodotRuntime.malloc((buttons1.length + 1) * 4);
            GodotRuntime.setHeapValue(buf1, buttons1.length, "i32");
            for(let i1 = 0; i1 < buttons1.length; i1++)GodotRuntime.setHeapValue(buf1 + 4 + i1 * 4, buttons1[i1] ? buttons1[i1].value : 0, "float");
            return buf1;
        }
        function _godot_webxr_get_controller_count() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(51, 1);
            if (!GodotWebXR.session || !GodotWebXR.frame) return 0;
            return GodotWebXR.controllers.length;
        }
        function _godot_webxr_get_controller_target_ray_mode(p_controller1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(52, 1, p_controller1);
            if (p_controller1 < 0 || p_controller1 >= GodotWebXR.controllers.length) return 0;
            const controller1 = GodotWebXR.controllers[p_controller1];
            if (!controller1) return 0;
            switch(controller1.targetRayMode){
                case "gaze":
                    return 1;
                case "tracked-pointer":
                    return 2;
                case "screen":
                    return 3;
                default:
                    break;
            }
            return 0;
        }
        function _godot_webxr_get_controller_transform(p_controller1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(53, 1, p_controller1);
            if (!GodotWebXR.session || !GodotWebXR.frame) return 0;
            const controller1 = GodotWebXR.controllers[p_controller1];
            if (!controller1) return 0;
            const frame1 = GodotWebXR.frame;
            const space1 = GodotWebXR.space;
            const pose1 = frame1.getPose(controller1.targetRaySpace, space1);
            if (!pose1) return 0;
            const matrix1 = pose1.transform.matrix;
            const buf1 = GodotRuntime.malloc(64);
            for(let i1 = 0; i1 < 16; i1++)GodotRuntime.setHeapValue(buf1 + i1 * 4, matrix1[i1], "float");
            return buf1;
        }
        function _godot_webxr_get_projection_for_eye(p_eye1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(54, 1, p_eye1);
            if (!GodotWebXR.session || !GodotWebXR.pose) return 0;
            const view_index1 = p_eye1 === 2 ? 1 : 0;
            const matrix1 = GodotWebXR.pose.views[view_index1].projectionMatrix;
            const buf1 = GodotRuntime.malloc(64);
            for(let i1 = 0; i1 < 16; i1++)GodotRuntime.setHeapValue(buf1 + i1 * 4, matrix1[i1], "float");
            return buf1;
        }
        function _godot_webxr_get_render_targetsize() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(55, 1);
            if (!GodotWebXR.session || !GodotWebXR.pose) return 0;
            const glLayer1 = GodotWebXR.session.renderState.baseLayer;
            const view1 = GodotWebXR.pose.views[0];
            const viewport1 = glLayer1.getViewport(view1);
            const buf1 = GodotRuntime.malloc(8);
            GodotRuntime.setHeapValue(buf1 + 0, viewport1.width, "i32");
            GodotRuntime.setHeapValue(buf1 + 4, viewport1.height, "i32");
            return buf1;
        }
        function _godot_webxr_get_transform_for_eye(p_eye1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(56, 1, p_eye1);
            if (!GodotWebXR.session || !GodotWebXR.pose) return 0;
            const views1 = GodotWebXR.pose.views;
            let matrix1;
            if (p_eye1 === 0) matrix1 = GodotWebXR.pose.transform.matrix;
            else matrix1 = views1[p_eye1 - 1].transform.matrix;
            const buf1 = GodotRuntime.malloc(64);
            for(let i1 = 0; i1 < 16; i1++)GodotRuntime.setHeapValue(buf1 + i1 * 4, matrix1[i1], "float");
            return buf1;
        }
        function _godot_webxr_get_view_count() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(57, 1);
            if (!GodotWebXR.session || !GodotWebXR.pose) return 0;
            return GodotWebXR.pose.views.length;
        }
        function _godot_webxr_get_visibility_state() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(58, 1);
            if (!GodotWebXR.session || !GodotWebXR.session.visibilityState) return 0;
            return GodotRuntime.allocString(GodotWebXR.session.visibilityState);
        }
        function _godot_webxr_initialize(p_session_mode1, p_required_features1, p_optional_features1, p_requested_reference_spaces1, p_on_session_started1, p_on_session_ended1, p_on_session_failed1, p_on_controller_changed1, p_on_input_event1, p_on_simple_event1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(59, 1, p_session_mode1, p_required_features1, p_optional_features1, p_requested_reference_spaces1, p_on_session_started1, p_on_session_ended1, p_on_session_failed1, p_on_controller_changed1, p_on_input_event1, p_on_simple_event1);
            GodotWebXR.monkeyPatchRequestAnimationFrame(true);
            const session_mode1 = GodotRuntime.parseString(p_session_mode1);
            const required_features1 = GodotRuntime.parseString(p_required_features1).split(",").map((s1)=>s1.trim()).filter((s1)=>s1 !== "");
            const optional_features1 = GodotRuntime.parseString(p_optional_features1).split(",").map((s1)=>s1.trim()).filter((s1)=>s1 !== "");
            const requested_reference_space_types1 = GodotRuntime.parseString(p_requested_reference_spaces1).split(",").map((s1)=>s1.trim());
            const onstarted1 = GodotRuntime.get_func(p_on_session_started1);
            const onended1 = GodotRuntime.get_func(p_on_session_ended1);
            const onfailed1 = GodotRuntime.get_func(p_on_session_failed1);
            const oncontroller1 = GodotRuntime.get_func(p_on_controller_changed1);
            const oninputevent1 = GodotRuntime.get_func(p_on_input_event1);
            const onsimpleevent1 = GodotRuntime.get_func(p_on_simple_event1);
            const session_init1 = {};
            if (required_features1.length > 0) session_init1["requiredFeatures"] = required_features1;
            if (optional_features1.length > 0) session_init1["optionalFeatures"] = optional_features1;
            navigator.xr.requestSession(session_mode1, session_init1).then(function(session1) {
                GodotWebXR.session = session1;
                session1.addEventListener("end", function(evt1) {
                    onended1();
                });
                session1.addEventListener("inputsourceschange", function(evt1) {
                    let controller_changed1 = false;
                    [
                        evt1.added,
                        evt1.removed
                    ].forEach((lst1)=>{
                        lst1.forEach((input_source1)=>{
                            if (input_source1.targetRayMode === "tracked-pointer") controller_changed1 = true;
                        });
                    });
                    if (controller_changed1) oncontroller1();
                });
                [
                    "selectstart",
                    "selectend",
                    "select",
                    "squeezestart",
                    "squeezeend",
                    "squeeze"
                ].forEach((input_event1, index1)=>{
                    session1.addEventListener(input_event1, function(evt1) {
                        GodotWebXR.sampleControllers();
                        oninputevent1(index1, GodotWebXR.getControllerId(evt1.inputSource));
                    });
                });
                session1.addEventListener("visibilitychange", function(evt1) {
                    const c_str1 = GodotRuntime.allocString("visibility_state_changed");
                    onsimpleevent1(c_str1);
                    GodotRuntime.free(c_str1);
                });
                const gl_context_handle1 = _emscripten_webgl_get_current_context();
                const gl1 = GL.getContext(gl_context_handle1).GLctx;
                GodotWebXR.gl = gl1;
                gl1.makeXRCompatible().then(function() {
                    session1.updateRenderState({
                        baseLayer: new XRWebGLLayer(session1, gl1)
                    });
                    function onReferenceSpaceSuccess1(reference_space1, reference_space_type1) {
                        GodotWebXR.space = reference_space1;
                        reference_space1.onreset = function(evt1) {
                            const c_str1 = GodotRuntime.allocString("reference_space_reset");
                            onsimpleevent1(c_str1);
                            GodotRuntime.free(c_str1);
                        };
                        GodotWebXR.pauseResumeMainLoop();
                        window.setTimeout(function() {
                            const c_str1 = GodotRuntime.allocString(reference_space_type1);
                            onstarted1(c_str1);
                            GodotRuntime.free(c_str1);
                        }, 0);
                    }
                    function requestReferenceSpace1() {
                        const reference_space_type1 = requested_reference_space_types1.shift();
                        session1.requestReferenceSpace(reference_space_type1).then((refSpace1)=>{
                            onReferenceSpaceSuccess1(refSpace1, reference_space_type1);
                        }).catch(()=>{
                            if (requested_reference_space_types1.length === 0) {
                                const c_str1 = GodotRuntime.allocString("Unable to get any of the requested reference space types");
                                onfailed1(c_str1);
                                GodotRuntime.free(c_str1);
                            } else requestReferenceSpace1();
                        });
                    }
                    requestReferenceSpace1();
                }).catch(function(error1) {
                    const c_str1 = GodotRuntime.allocString(`Unable to make WebGL context compatible with WebXR: ${error1}`);
                    onfailed1(c_str1);
                    GodotRuntime.free(c_str1);
                });
            }).catch(function(error1) {
                const c_str1 = GodotRuntime.allocString(`Unable to start session: ${error1}`);
                onfailed1(c_str1);
                GodotRuntime.free(c_str1);
            });
        }
        function _godot_webxr_is_controller_connected(p_controller1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(60, 1, p_controller1);
            if (!GodotWebXR.session || !GodotWebXR.frame) return false;
            return !!GodotWebXR.controllers[p_controller1];
        }
        function _godot_webxr_is_session_supported(p_session_mode1, p_callback1) {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(61, 1, p_session_mode1, p_callback1);
            const session_mode1 = GodotRuntime.parseString(p_session_mode1);
            const cb1 = GodotRuntime.get_func(p_callback1);
            if (navigator.xr) navigator.xr.isSessionSupported(session_mode1).then(function(supported1) {
                const c_str1 = GodotRuntime.allocString(session_mode1);
                cb1(c_str1, supported1 ? 1 : 0);
                GodotRuntime.free(c_str1);
            });
            else {
                const c_str1 = GodotRuntime.allocString(session_mode1);
                cb1(c_str1, 0);
                GodotRuntime.free(c_str1);
            }
        }
        function _godot_webxr_is_supported() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(62, 1);
            return !!navigator.xr;
        }
        function _godot_webxr_sample_controller_data() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(63, 1);
            GodotWebXR.sampleControllers();
        }
        function _godot_webxr_uninitialize() {
            if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(64, 1);
            if (GodotWebXR.session) GodotWebXR.session.end().catch((e1)=>{});
            GodotWebXR.session = null;
            GodotWebXR.space = null;
            GodotWebXR.frame = null;
            GodotWebXR.pose = null;
            GodotWebXR.monkeyPatchRequestAnimationFrame(false);
            GodotWebXR.pauseResumeMainLoop();
        }
        function _setTempRet0(val1) {
            setTempRet0(val1);
        }
        function __isLeapYear(year1) {
            return year1 % 4 === 0 && (year1 % 100 !== 0 || year1 % 400 === 0);
        }
        function __arraySum(array1, index1) {
            var sum1 = 0;
            for(var i1 = 0; i1 <= index1; sum1 += array1[i1++]);
            return sum1;
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
        function __addDays(date3, days1) {
            var newDate1 = new Date(date3.getTime());
            while(days1 > 0){
                var leap1 = __isLeapYear(newDate1.getFullYear());
                var currentMonth1 = newDate1.getMonth();
                var daysInCurrentMonth1 = (leap1 ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth1];
                if (days1 > daysInCurrentMonth1 - newDate1.getDate()) {
                    days1 -= daysInCurrentMonth1 - newDate1.getDate() + 1;
                    newDate1.setDate(1);
                    if (currentMonth1 < 11) newDate1.setMonth(currentMonth1 + 1);
                    else {
                        newDate1.setMonth(0);
                        newDate1.setFullYear(newDate1.getFullYear() + 1);
                    }
                } else {
                    newDate1.setDate(newDate1.getDate() + days1);
                    return newDate1;
                }
            }
            return newDate1;
        }
        function _strftime(s1, maxsize1, format1, tm1) {
            var tm_zone1 = GROWABLE_HEAP_I32()[tm1 + 40 >> 2];
            var date3 = {
                tm_sec: GROWABLE_HEAP_I32()[tm1 >> 2],
                tm_min: GROWABLE_HEAP_I32()[tm1 + 4 >> 2],
                tm_hour: GROWABLE_HEAP_I32()[tm1 + 8 >> 2],
                tm_mday: GROWABLE_HEAP_I32()[tm1 + 12 >> 2],
                tm_mon: GROWABLE_HEAP_I32()[tm1 + 16 >> 2],
                tm_year: GROWABLE_HEAP_I32()[tm1 + 20 >> 2],
                tm_wday: GROWABLE_HEAP_I32()[tm1 + 24 >> 2],
                tm_yday: GROWABLE_HEAP_I32()[tm1 + 28 >> 2],
                tm_isdst: GROWABLE_HEAP_I32()[tm1 + 32 >> 2],
                tm_gmtoff: GROWABLE_HEAP_I32()[tm1 + 36 >> 2],
                tm_zone: tm_zone1 ? UTF8ToString(tm_zone1) : ""
            };
            var pattern1 = UTF8ToString(format1);
            var EXPANSION_RULES_11 = {
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
            for(var rule1 in EXPANSION_RULES_11)pattern1 = pattern1.replace(new RegExp(rule1, "g"), EXPANSION_RULES_11[rule1]);
            var WEEKDAYS1 = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];
            var MONTHS1 = [
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
            function leadingSomething1(value1, digits1, character1) {
                var str1 = typeof value1 == "number" ? value1.toString() : value1 || "";
                while(str1.length < digits1)str1 = character1[0] + str1;
                return str1;
            }
            function leadingNulls1(value1, digits1) {
                return leadingSomething1(value1, digits1, "0");
            }
            function compareByDay1(date11, date21) {
                function sgn1(value1) {
                    return value1 < 0 ? -1 : value1 > 0 ? 1 : 0;
                }
                var compare1;
                if ((compare1 = sgn1(date11.getFullYear() - date21.getFullYear())) === 0) {
                    if ((compare1 = sgn1(date11.getMonth() - date21.getMonth())) === 0) compare1 = sgn1(date11.getDate() - date21.getDate());
                }
                return compare1;
            }
            function getFirstWeekStartDate1(janFourth1) {
                switch(janFourth1.getDay()){
                    case 0:
                        return new Date(janFourth1.getFullYear() - 1, 11, 29);
                    case 1:
                        return janFourth1;
                    case 2:
                        return new Date(janFourth1.getFullYear(), 0, 3);
                    case 3:
                        return new Date(janFourth1.getFullYear(), 0, 2);
                    case 4:
                        return new Date(janFourth1.getFullYear(), 0, 1);
                    case 5:
                        return new Date(janFourth1.getFullYear() - 1, 11, 31);
                    case 6:
                        return new Date(janFourth1.getFullYear() - 1, 11, 30);
                }
            }
            function getWeekBasedYear1(date3) {
                var thisDate1 = __addDays(new Date(date3.tm_year + 1900, 0, 1), date3.tm_yday);
                var janFourthThisYear1 = new Date(thisDate1.getFullYear(), 0, 4);
                var janFourthNextYear1 = new Date(thisDate1.getFullYear() + 1, 0, 4);
                var firstWeekStartThisYear1 = getFirstWeekStartDate1(janFourthThisYear1);
                var firstWeekStartNextYear1 = getFirstWeekStartDate1(janFourthNextYear1);
                if (compareByDay1(firstWeekStartThisYear1, thisDate1) <= 0) {
                    if (compareByDay1(firstWeekStartNextYear1, thisDate1) <= 0) return thisDate1.getFullYear() + 1;
                    else return thisDate1.getFullYear();
                } else return thisDate1.getFullYear() - 1;
            }
            var EXPANSION_RULES_21 = {
                "%a": function(date3) {
                    return WEEKDAYS1[date3.tm_wday].substring(0, 3);
                },
                "%A": function(date3) {
                    return WEEKDAYS1[date3.tm_wday];
                },
                "%b": function(date3) {
                    return MONTHS1[date3.tm_mon].substring(0, 3);
                },
                "%B": function(date3) {
                    return MONTHS1[date3.tm_mon];
                },
                "%C": function(date3) {
                    var year1 = date3.tm_year + 1900;
                    return leadingNulls1(year1 / 100 | 0, 2);
                },
                "%d": function(date3) {
                    return leadingNulls1(date3.tm_mday, 2);
                },
                "%e": function(date3) {
                    return leadingSomething1(date3.tm_mday, 2, " ");
                },
                "%g": function(date3) {
                    return getWeekBasedYear1(date3).toString().substring(2);
                },
                "%G": function(date3) {
                    return getWeekBasedYear1(date3);
                },
                "%H": function(date3) {
                    return leadingNulls1(date3.tm_hour, 2);
                },
                "%I": function(date3) {
                    var twelveHour1 = date3.tm_hour;
                    if (twelveHour1 == 0) twelveHour1 = 12;
                    else if (twelveHour1 > 12) twelveHour1 -= 12;
                    return leadingNulls1(twelveHour1, 2);
                },
                "%j": function(date3) {
                    return leadingNulls1(date3.tm_mday + __arraySum(__isLeapYear(date3.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date3.tm_mon - 1), 3);
                },
                "%m": function(date3) {
                    return leadingNulls1(date3.tm_mon + 1, 2);
                },
                "%M": function(date3) {
                    return leadingNulls1(date3.tm_min, 2);
                },
                "%n": function() {
                    return "\n";
                },
                "%p": function(date3) {
                    if (date3.tm_hour >= 0 && date3.tm_hour < 12) return "AM";
                    else return "PM";
                },
                "%S": function(date3) {
                    return leadingNulls1(date3.tm_sec, 2);
                },
                "%t": function() {
                    return "	";
                },
                "%u": function(date3) {
                    return date3.tm_wday || 7;
                },
                "%U": function(date3) {
                    var days1 = date3.tm_yday + 7 - date3.tm_wday;
                    return leadingNulls1(Math.floor(days1 / 7), 2);
                },
                "%V": function(date3) {
                    var val1 = Math.floor((date3.tm_yday + 7 - (date3.tm_wday + 6) % 7) / 7);
                    if ((date3.tm_wday + 371 - date3.tm_yday - 2) % 7 <= 2) val1++;
                    if (!val1) {
                        val1 = 52;
                        var dec311 = (date3.tm_wday + 7 - date3.tm_yday - 1) % 7;
                        if (dec311 == 4 || dec311 == 5 && __isLeapYear(date3.tm_year % 400 - 1)) val1++;
                    } else if (val1 == 53) {
                        var jan11 = (date3.tm_wday + 371 - date3.tm_yday) % 7;
                        if (jan11 != 4 && (jan11 != 3 || !__isLeapYear(date3.tm_year))) val1 = 1;
                    }
                    return leadingNulls1(val1, 2);
                },
                "%w": function(date3) {
                    return date3.tm_wday;
                },
                "%W": function(date3) {
                    var days1 = date3.tm_yday + 7 - (date3.tm_wday + 6) % 7;
                    return leadingNulls1(Math.floor(days1 / 7), 2);
                },
                "%y": function(date3) {
                    return (date3.tm_year + 1900).toString().substring(2);
                },
                "%Y": function(date3) {
                    return date3.tm_year + 1900;
                },
                "%z": function(date3) {
                    var off1 = date3.tm_gmtoff;
                    var ahead1 = off1 >= 0;
                    off1 = Math.abs(off1) / 60;
                    off1 = off1 / 60 * 100 + off1 % 60;
                    return (ahead1 ? "+" : "-") + String("0000" + off1).slice(-4);
                },
                "%Z": function(date3) {
                    return date3.tm_zone;
                },
                "%%": function() {
                    return "%";
                }
            };
            pattern1 = pattern1.replace(/%%/g, "\x00\x00");
            for(var rule1 in EXPANSION_RULES_21)if (pattern1.includes(rule1)) pattern1 = pattern1.replace(new RegExp(rule1, "g"), EXPANSION_RULES_21[rule1](date3));
            pattern1 = pattern1.replace(/\0\0/g, "%");
            var bytes1 = intArrayFromString(pattern1, false);
            if (bytes1.length > maxsize1) return 0;
            writeArrayToMemory(bytes1, s1);
            return bytes1.length - 1;
        }
        function _strftime_l(s1, maxsize1, format1, tm1) {
            return _strftime(s1, maxsize1, format1, tm1);
        }
        PThread.init();
        var FSNode = function(parent1, name1, mode1, rdev1) {
            if (!parent1) parent1 = this;
            this.parent = parent1;
            this.mount = parent1.mount;
            this.mounted = null;
            this.id = FS.nextInode++;
            this.name = name1;
            this.mode = mode1;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev1;
        };
        var readMode = 365;
        var writeMode = 146;
        Object.defineProperties(FSNode.prototype, {
            read: {
                get: function() {
                    return (this.mode & readMode) === readMode;
                },
                set: function(val1) {
                    val1 ? this.mode |= readMode : this.mode &= ~readMode;
                }
            },
            write: {
                get: function() {
                    return (this.mode & writeMode) === writeMode;
                },
                set: function(val1) {
                    val1 ? this.mode |= writeMode : this.mode &= ~writeMode;
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
        Module["requestFullscreen"] = function Module_requestFullscreen1(lockPointer1, resizeCanvas1) {
            Browser.requestFullscreen(lockPointer1, resizeCanvas1);
        };
        Module["requestAnimationFrame"] = function Module_requestAnimationFrame1(func1) {
            Browser.requestAnimationFrame(func1);
        };
        Module["setCanvasSize"] = function Module_setCanvasSize1(width1, height1, noUpdates1) {
            Browser.setCanvasSize(width1, height1, noUpdates1);
        };
        Module["pauseMainLoop"] = function Module_pauseMainLoop1() {
            Browser.mainLoop.pause();
        };
        Module["resumeMainLoop"] = function Module_resumeMainLoop1() {
            Browser.mainLoop.resume();
        };
        Module["getUserMedia"] = function Module_getUserMedia1() {
            Browser.getUserMedia();
        };
        Module["createContext"] = function Module_createContext1(canvas1, useWebGL1, setInModule1, webGLContextAttributes1) {
            return Browser.createContext(canvas1, useWebGL1, setInModule1, webGLContextAttributes1);
        };
        var preloadedImages = {};
        var preloadedAudios = {};
        var GLctx;
        for(var i = 0; i < 32; ++i)tempFixedLengthArray.push(new Array(i));
        var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
        for(var i = 0; i < 288; ++i)miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i + 1);
        var __miniTempWebGLIntBuffersStorage = new Int32Array(288);
        for(var i = 0; i < 288; ++i)__miniTempWebGLIntBuffers[i] = __miniTempWebGLIntBuffersStorage.subarray(0, i + 1);
        Module["request_quit"] = function() {
            GodotOS.request_quit();
        };
        Module["onExit"] = GodotOS.cleanup;
        GodotOS._fs_sync_promise = Promise.resolve();
        Module["initConfig"] = GodotConfig.init_config;
        Module["initFS"] = GodotFS.init;
        Module["copyToFS"] = GodotFS.copy_to_fs;
        ERRNO_CODES = {
            "EPERM": 63,
            "ENOENT": 44,
            "ESRCH": 71,
            "EINTR": 27,
            "EIO": 29,
            "ENXIO": 60,
            "E2BIG": 1,
            "ENOEXEC": 45,
            "EBADF": 8,
            "ECHILD": 12,
            "EAGAIN": 6,
            "EWOULDBLOCK": 6,
            "ENOMEM": 48,
            "EACCES": 2,
            "EFAULT": 21,
            "ENOTBLK": 105,
            "EBUSY": 10,
            "EEXIST": 20,
            "EXDEV": 75,
            "ENODEV": 43,
            "ENOTDIR": 54,
            "EISDIR": 31,
            "EINVAL": 28,
            "ENFILE": 41,
            "EMFILE": 33,
            "ENOTTY": 59,
            "ETXTBSY": 74,
            "EFBIG": 22,
            "ENOSPC": 51,
            "ESPIPE": 70,
            "EROFS": 69,
            "EMLINK": 34,
            "EPIPE": 64,
            "EDOM": 18,
            "ERANGE": 68,
            "ENOMSG": 49,
            "EIDRM": 24,
            "ECHRNG": 106,
            "EL2NSYNC": 156,
            "EL3HLT": 107,
            "EL3RST": 108,
            "ELNRNG": 109,
            "EUNATCH": 110,
            "ENOCSI": 111,
            "EL2HLT": 112,
            "EDEADLK": 16,
            "ENOLCK": 46,
            "EBADE": 113,
            "EBADR": 114,
            "EXFULL": 115,
            "ENOANO": 104,
            "EBADRQC": 103,
            "EBADSLT": 102,
            "EDEADLOCK": 16,
            "EBFONT": 101,
            "ENOSTR": 100,
            "ENODATA": 116,
            "ETIME": 117,
            "ENOSR": 118,
            "ENONET": 119,
            "ENOPKG": 120,
            "EREMOTE": 121,
            "ENOLINK": 47,
            "EADV": 122,
            "ESRMNT": 123,
            "ECOMM": 124,
            "EPROTO": 65,
            "EMULTIHOP": 36,
            "EDOTDOT": 125,
            "EBADMSG": 9,
            "ENOTUNIQ": 126,
            "EBADFD": 127,
            "EREMCHG": 128,
            "ELIBACC": 129,
            "ELIBBAD": 130,
            "ELIBSCN": 131,
            "ELIBMAX": 132,
            "ELIBEXEC": 133,
            "ENOSYS": 52,
            "ENOTEMPTY": 55,
            "ENAMETOOLONG": 37,
            "ELOOP": 32,
            "EOPNOTSUPP": 138,
            "EPFNOSUPPORT": 139,
            "ECONNRESET": 15,
            "ENOBUFS": 42,
            "EAFNOSUPPORT": 5,
            "EPROTOTYPE": 67,
            "ENOTSOCK": 57,
            "ENOPROTOOPT": 50,
            "ESHUTDOWN": 140,
            "ECONNREFUSED": 14,
            "EADDRINUSE": 3,
            "ECONNABORTED": 13,
            "ENETUNREACH": 40,
            "ENETDOWN": 38,
            "ETIMEDOUT": 73,
            "EHOSTDOWN": 142,
            "EHOSTUNREACH": 23,
            "EINPROGRESS": 26,
            "EALREADY": 7,
            "EDESTADDRREQ": 17,
            "EMSGSIZE": 35,
            "EPROTONOSUPPORT": 66,
            "ESOCKTNOSUPPORT": 137,
            "EADDRNOTAVAIL": 4,
            "ENETRESET": 39,
            "EISCONN": 30,
            "ENOTCONN": 53,
            "ETOOMANYREFS": 141,
            "EUSERS": 136,
            "EDQUOT": 19,
            "ESTALE": 72,
            "ENOTSUP": 138,
            "ENOMEDIUM": 148,
            "EILSEQ": 25,
            "EOVERFLOW": 61,
            "ECANCELED": 11,
            "ENOTRECOVERABLE": 56,
            "EOWNERDEAD": 62,
            "ESTRPIPE": 135
        };
        GodotOS.atexit(function(resolve1, reject1) {
            GodotDisplayCursor.clear();
            resolve1();
        });
        GodotOS.atexit(function(resolve1, reject1) {
            GodotEventListeners.clear();
            resolve1();
        });
        GodotOS.atexit(function(resolve1, reject1) {
            GodotDisplayVK.clear();
            resolve1();
        });
        GodotJSWrapper.proxies = new Map;
        var proxiedFunctionTable = [
            null,
            exitOnMainThread,
            pthreadCreateProxied,
            ___syscall__newselect,
            ___syscall_accept4,
            ___syscall_bind,
            ___syscall_chdir,
            ___syscall_chmod,
            ___syscall_connect,
            ___syscall_faccessat,
            ___syscall_fcntl64,
            ___syscall_getcwd,
            ___syscall_getdents64,
            ___syscall_getsockname,
            ___syscall_getsockopt,
            ___syscall_ioctl,
            ___syscall_listen,
            ___syscall_lstat64,
            ___syscall_mkdirat,
            ___syscall_newfstatat,
            ___syscall_openat,
            ___syscall_poll,
            ___syscall_readlinkat,
            ___syscall_recvfrom,
            ___syscall_renameat,
            ___syscall_rmdir,
            ___syscall_sendto,
            ___syscall_socket,
            ___syscall_stat64,
            ___syscall_statfs64,
            ___syscall_symlink,
            ___syscall_unlinkat,
            _tzset_impl,
            _emscripten_force_exit,
            _emscripten_webgl_destroy_context,
            _emscripten_webgl_create_context_proxied,
            _environ_get,
            _environ_sizes_get,
            _fd_close,
            _fd_fdstat_get,
            _fd_read,
            _fd_seek,
            _fd_write,
            _getaddrinfo,
            _godot_audio_capture_start,
            _godot_audio_capture_stop,
            _godot_audio_is_available,
            _godot_webxr_commit_for_eye,
            _godot_webxr_get_bounds_geometry,
            _godot_webxr_get_controller_axes,
            _godot_webxr_get_controller_buttons,
            _godot_webxr_get_controller_count,
            _godot_webxr_get_controller_target_ray_mode,
            _godot_webxr_get_controller_transform,
            _godot_webxr_get_projection_for_eye,
            _godot_webxr_get_render_targetsize,
            _godot_webxr_get_transform_for_eye,
            _godot_webxr_get_view_count,
            _godot_webxr_get_visibility_state,
            _godot_webxr_initialize,
            _godot_webxr_is_controller_connected,
            _godot_webxr_is_session_supported,
            _godot_webxr_is_supported,
            _godot_webxr_sample_controller_data,
            _godot_webxr_uninitialize
        ];
        function intArrayFromString(stringy1, dontAddNull1, length1) {
            var len1 = length1 > 0 ? length1 : lengthBytesUTF8(stringy1) + 1;
            var u8array1 = new Array(len1);
            var numBytesWritten1 = stringToUTF8Array(stringy1, u8array1, 0, u8array1.length);
            if (dontAddNull1) u8array1.length = numBytesWritten1;
            return u8array1;
        }
        var asmLibraryArg = {
            "cg": ___call_sighandler,
            "ng": ___emscripten_init_main_thread_js,
            "A": ___emscripten_thread_cleanup,
            "dg": ___pthread_create_js,
            "Yf": ___syscall__newselect,
            "Sf": ___syscall_accept4,
            "Rf": ___syscall_bind,
            "Dg": ___syscall_chdir,
            "Cg": ___syscall_chmod,
            "Qf": ___syscall_connect,
            "Gg": ___syscall_faccessat,
            "m": ___syscall_fcntl64,
            "sg": ___syscall_getcwd,
            "bg": ___syscall_getdents64,
            "Pf": ___syscall_getsockname,
            "Of": ___syscall_getsockopt,
            "F": ___syscall_ioctl,
            "Nf": ___syscall_listen,
            "jg": ___syscall_lstat64,
            "hg": ___syscall_mkdirat,
            "ig": ___syscall_newfstatat,
            "G": ___syscall_openat,
            "gg": ___syscall_poll,
            "ag": ___syscall_readlinkat,
            "Mf": ___syscall_recvfrom,
            "Zf": ___syscall_renameat,
            "_f": ___syscall_rmdir,
            "Lf": ___syscall_sendto,
            "z": ___syscall_socket,
            "kg": ___syscall_stat64,
            "Xf": ___syscall_statfs64,
            "Wf": ___syscall_symlink,
            "$f": ___syscall_unlinkat,
            "Ag": __dlinit,
            "H": __dlopen_js,
            "Bg": __dlsym_js,
            "s": __emscripten_date_now,
            "eg": __emscripten_default_pthread_stack_size,
            "vg": __emscripten_get_now_is_monotonic,
            "fg": __emscripten_notify_task_queue,
            "ch": __emscripten_proxied_gl_context_activated_from_main_browser_thread,
            "mg": __emscripten_set_offscreencanvas_size,
            "Kf": __emscripten_throw_longjmp,
            "xg": __gmtime_js,
            "yg": __localtime_js,
            "zg": __tzset_js,
            "e": _abort,
            "qb": _emscripten_cancel_main_loop,
            "B": _emscripten_check_blocking_allowed,
            "eh": _emscripten_console_error,
            "Ng": _emscripten_force_exit,
            "f": _emscripten_get_now,
            "te": _emscripten_glActiveTexture,
            "se": _emscripten_glAttachShader,
            "rb": _emscripten_glBeginQuery,
            "Jb": _emscripten_glBeginQueryEXT,
            "Za": _emscripten_glBeginTransformFeedback,
            "re": _emscripten_glBindAttribLocation,
            "qe": _emscripten_glBindBuffer,
            "Va": _emscripten_glBindBufferBase,
            "Wa": _emscripten_glBindBufferRange,
            "pe": _emscripten_glBindFramebuffer,
            "oe": _emscripten_glBindRenderbuffer,
            "ba": _emscripten_glBindSampler,
            "ne": _emscripten_glBindTexture,
            "V": _emscripten_glBindTransformFeedback,
            "cb": _emscripten_glBindVertexArray,
            "me": _emscripten_glBlendColor,
            "le": _emscripten_glBlendEquation,
            "ke": _emscripten_glBlendEquationSeparate,
            "je": _emscripten_glBlendFunc,
            "ie": _emscripten_glBlendFuncSeparate,
            "fb": _emscripten_glBlitFramebuffer,
            "he": _emscripten_glBufferData,
            "ge": _emscripten_glBufferSubData,
            "fe": _emscripten_glCheckFramebufferStatus,
            "ee": _emscripten_glClear,
            "ya": _emscripten_glClearBufferfi,
            "za": _emscripten_glClearBufferfv,
            "Ba": _emscripten_glClearBufferiv,
            "Aa": _emscripten_glClearBufferuiv,
            "de": _emscripten_glClearColor,
            "ce": _emscripten_glClearDepthf,
            "be": _emscripten_glClearStencil,
            "ka": _emscripten_glClientWaitSync,
            "ae": _emscripten_glColorMask,
            "$d": _emscripten_glCompileShader,
            "_d": _emscripten_glCompressedTexImage2D,
            "wb": _emscripten_glCompressedTexImage3D,
            "Zd": _emscripten_glCompressedTexSubImage2D,
            "vb": _emscripten_glCompressedTexSubImage3D,
            "wa": _emscripten_glCopyBufferSubData,
            "Yd": _emscripten_glCopyTexImage2D,
            "Xd": _emscripten_glCopyTexSubImage2D,
            "xb": _emscripten_glCopyTexSubImage3D,
            "Wd": _emscripten_glCreateProgram,
            "Vd": _emscripten_glCreateShader,
            "Ud": _emscripten_glCullFace,
            "Td": _emscripten_glDeleteBuffers,
            "Sd": _emscripten_glDeleteFramebuffers,
            "Rd": _emscripten_glDeleteProgram,
            "tb": _emscripten_glDeleteQueries,
            "Lb": _emscripten_glDeleteQueriesEXT,
            "Qd": _emscripten_glDeleteRenderbuffers,
            "da": _emscripten_glDeleteSamplers,
            "Pd": _emscripten_glDeleteShader,
            "la": _emscripten_glDeleteSync,
            "Od": _emscripten_glDeleteTextures,
            "U": _emscripten_glDeleteTransformFeedbacks,
            "bb": _emscripten_glDeleteVertexArrays,
            "Nd": _emscripten_glDepthFunc,
            "Md": _emscripten_glDepthMask,
            "Ld": _emscripten_glDepthRangef,
            "Kd": _emscripten_glDetachShader,
            "Jd": _emscripten_glDisable,
            "Id": _emscripten_glDisableVertexAttribArray,
            "Hd": _emscripten_glDrawArrays,
            "pa": _emscripten_glDrawArraysInstanced,
            "mb": _emscripten_glDrawBuffers,
            "Gd": _emscripten_glDrawElements,
            "oa": _emscripten_glDrawElementsInstanced,
            "Ab": _emscripten_glDrawRangeElements,
            "Fd": _emscripten_glEnable,
            "Ed": _emscripten_glEnableVertexAttribArray,
            "pb": _emscripten_glEndQuery,
            "Ib": _emscripten_glEndQueryEXT,
            "Ya": _emscripten_glEndTransformFeedback,
            "na": _emscripten_glFenceSync,
            "Dd": _emscripten_glFinish,
            "Cd": _emscripten_glFlush,
            "Bd": _emscripten_glFramebufferRenderbuffer,
            "Ad": _emscripten_glFramebufferTexture2D,
            "db": _emscripten_glFramebufferTextureLayer,
            "zd": _emscripten_glFrontFace,
            "yd": _emscripten_glGenBuffers,
            "wd": _emscripten_glGenFramebuffers,
            "ub": _emscripten_glGenQueries,
            "Mb": _emscripten_glGenQueriesEXT,
            "vd": _emscripten_glGenRenderbuffers,
            "ea": _emscripten_glGenSamplers,
            "ud": _emscripten_glGenTextures,
            "T": _emscripten_glGenTransformFeedbacks,
            "ab": _emscripten_glGenVertexArrays,
            "xd": _emscripten_glGenerateMipmap,
            "td": _emscripten_glGetActiveAttrib,
            "sd": _emscripten_glGetActiveUniform,
            "ra": _emscripten_glGetActiveUniformBlockName,
            "sa": _emscripten_glGetActiveUniformBlockiv,
            "ua": _emscripten_glGetActiveUniformsiv,
            "rd": _emscripten_glGetAttachedShaders,
            "qd": _emscripten_glGetAttribLocation,
            "pd": _emscripten_glGetBooleanv,
            "fa": _emscripten_glGetBufferParameteri64v,
            "od": _emscripten_glGetBufferParameteriv,
            "nd": _emscripten_glGetError,
            "md": _emscripten_glGetFloatv,
            "Ka": _emscripten_glGetFragDataLocation,
            "ld": _emscripten_glGetFramebufferAttachmentParameteriv,
            "ga": _emscripten_glGetInteger64i_v,
            "ia": _emscripten_glGetInteger64v,
            "_a": _emscripten_glGetIntegeri_v,
            "kd": _emscripten_glGetIntegerv,
            "I": _emscripten_glGetInternalformativ,
            "P": _emscripten_glGetProgramBinary,
            "id": _emscripten_glGetProgramInfoLog,
            "jd": _emscripten_glGetProgramiv,
            "Db": _emscripten_glGetQueryObjecti64vEXT,
            "Fb": _emscripten_glGetQueryObjectivEXT,
            "Cb": _emscripten_glGetQueryObjectui64vEXT,
            "nb": _emscripten_glGetQueryObjectuiv,
            "Eb": _emscripten_glGetQueryObjectuivEXT,
            "ob": _emscripten_glGetQueryiv,
            "Gb": _emscripten_glGetQueryivEXT,
            "hd": _emscripten_glGetRenderbufferParameteriv,
            "X": _emscripten_glGetSamplerParameterfv,
            "Y": _emscripten_glGetSamplerParameteriv,
            "fd": _emscripten_glGetShaderInfoLog,
            "ed": _emscripten_glGetShaderPrecisionFormat,
            "dd": _emscripten_glGetShaderSource,
            "gd": _emscripten_glGetShaderiv,
            "cd": _emscripten_glGetString,
            "xa": _emscripten_glGetStringi,
            "ha": _emscripten_glGetSynciv,
            "bd": _emscripten_glGetTexParameterfv,
            "ad": _emscripten_glGetTexParameteriv,
            "Ta": _emscripten_glGetTransformFeedbackVarying,
            "ta": _emscripten_glGetUniformBlockIndex,
            "va": _emscripten_glGetUniformIndices,
            "Yc": _emscripten_glGetUniformLocation,
            "_c": _emscripten_glGetUniformfv,
            "Zc": _emscripten_glGetUniformiv,
            "La": _emscripten_glGetUniformuiv,
            "Ra": _emscripten_glGetVertexAttribIiv,
            "Qa": _emscripten_glGetVertexAttribIuiv,
            "Vc": _emscripten_glGetVertexAttribPointerv,
            "Xc": _emscripten_glGetVertexAttribfv,
            "Wc": _emscripten_glGetVertexAttribiv,
            "Uc": _emscripten_glHint,
            "M": _emscripten_glInvalidateFramebuffer,
            "L": _emscripten_glInvalidateSubFramebuffer,
            "Tc": _emscripten_glIsBuffer,
            "Sc": _emscripten_glIsEnabled,
            "Rc": _emscripten_glIsFramebuffer,
            "Qc": _emscripten_glIsProgram,
            "sb": _emscripten_glIsQuery,
            "Kb": _emscripten_glIsQueryEXT,
            "Pc": _emscripten_glIsRenderbuffer,
            "ca": _emscripten_glIsSampler,
            "Oc": _emscripten_glIsShader,
            "ma": _emscripten_glIsSync,
            "Nc": _emscripten_glIsTexture,
            "S": _emscripten_glIsTransformFeedback,
            "$a": _emscripten_glIsVertexArray,
            "Mc": _emscripten_glLineWidth,
            "Lc": _emscripten_glLinkProgram,
            "R": _emscripten_glPauseTransformFeedback,
            "Kc": _emscripten_glPixelStorei,
            "Jc": _emscripten_glPolygonOffset,
            "O": _emscripten_glProgramBinary,
            "N": _emscripten_glProgramParameteri,
            "Hb": _emscripten_glQueryCounterEXT,
            "Bb": _emscripten_glReadBuffer,
            "Ic": _emscripten_glReadPixels,
            "Hc": _emscripten_glReleaseShaderCompiler,
            "Gc": _emscripten_glRenderbufferStorage,
            "eb": _emscripten_glRenderbufferStorageMultisample,
            "Q": _emscripten_glResumeTransformFeedback,
            "Fc": _emscripten_glSampleCoverage,
            "_": _emscripten_glSamplerParameterf,
            "Z": _emscripten_glSamplerParameterfv,
            "aa": _emscripten_glSamplerParameteri,
            "$": _emscripten_glSamplerParameteriv,
            "Ec": _emscripten_glScissor,
            "Dc": _emscripten_glShaderBinary,
            "Cc": _emscripten_glShaderSource,
            "Bc": _emscripten_glStencilFunc,
            "Ac": _emscripten_glStencilFuncSeparate,
            "zc": _emscripten_glStencilMask,
            "yc": _emscripten_glStencilMaskSeparate,
            "xc": _emscripten_glStencilOp,
            "wc": _emscripten_glStencilOpSeparate,
            "vc": _emscripten_glTexImage2D,
            "zb": _emscripten_glTexImage3D,
            "uc": _emscripten_glTexParameterf,
            "tc": _emscripten_glTexParameterfv,
            "sc": _emscripten_glTexParameteri,
            "rc": _emscripten_glTexParameteriv,
            "K": _emscripten_glTexStorage2D,
            "J": _emscripten_glTexStorage3D,
            "qc": _emscripten_glTexSubImage2D,
            "yb": _emscripten_glTexSubImage3D,
            "Ua": _emscripten_glTransformFeedbackVaryings,
            "pc": _emscripten_glUniform1f,
            "oc": _emscripten_glUniform1fv,
            "nc": _emscripten_glUniform1i,
            "mc": _emscripten_glUniform1iv,
            "Ja": _emscripten_glUniform1ui,
            "Fa": _emscripten_glUniform1uiv,
            "lc": _emscripten_glUniform2f,
            "kc": _emscripten_glUniform2fv,
            "jc": _emscripten_glUniform2i,
            "ic": _emscripten_glUniform2iv,
            "Ia": _emscripten_glUniform2ui,
            "Ea": _emscripten_glUniform2uiv,
            "hc": _emscripten_glUniform3f,
            "gc": _emscripten_glUniform3fv,
            "fc": _emscripten_glUniform3i,
            "ec": _emscripten_glUniform3iv,
            "Ha": _emscripten_glUniform3ui,
            "Da": _emscripten_glUniform3uiv,
            "dc": _emscripten_glUniform4f,
            "cc": _emscripten_glUniform4fv,
            "bc": _emscripten_glUniform4i,
            "ac": _emscripten_glUniform4iv,
            "Ga": _emscripten_glUniform4ui,
            "Ca": _emscripten_glUniform4uiv,
            "qa": _emscripten_glUniformBlockBinding,
            "$b": _emscripten_glUniformMatrix2fv,
            "lb": _emscripten_glUniformMatrix2x3fv,
            "jb": _emscripten_glUniformMatrix2x4fv,
            "_b": _emscripten_glUniformMatrix3fv,
            "kb": _emscripten_glUniformMatrix3x2fv,
            "hb": _emscripten_glUniformMatrix3x4fv,
            "Zb": _emscripten_glUniformMatrix4fv,
            "ib": _emscripten_glUniformMatrix4x2fv,
            "gb": _emscripten_glUniformMatrix4x3fv,
            "Yb": _emscripten_glUseProgram,
            "Xb": _emscripten_glValidateProgram,
            "Wb": _emscripten_glVertexAttrib1f,
            "Vb": _emscripten_glVertexAttrib1fv,
            "Ub": _emscripten_glVertexAttrib2f,
            "Tb": _emscripten_glVertexAttrib2fv,
            "Sb": _emscripten_glVertexAttrib3f,
            "Rb": _emscripten_glVertexAttrib3fv,
            "Qb": _emscripten_glVertexAttrib4f,
            "Pb": _emscripten_glVertexAttrib4fv,
            "W": _emscripten_glVertexAttribDivisor,
            "Pa": _emscripten_glVertexAttribI4i,
            "Na": _emscripten_glVertexAttribI4iv,
            "Oa": _emscripten_glVertexAttribI4ui,
            "Ma": _emscripten_glVertexAttribI4uiv,
            "Sa": _emscripten_glVertexAttribIPointer,
            "Ob": _emscripten_glVertexAttribPointer,
            "Nb": _emscripten_glViewport,
            "ja": _emscripten_glWaitSync,
            "tg": _emscripten_memcpy_big,
            "Vf": _emscripten_num_logical_cores,
            "lg": _emscripten_receive_on_main_thread_js,
            "Uf": _emscripten_resize_heap,
            "Xa": _emscripten_set_main_loop,
            "dh": _emscripten_supports_offscreencanvas,
            "ug": _emscripten_unwind_to_js_event_loop,
            "_e": _emscripten_webgl_destroy_context,
            "ue": _emscripten_webgl_do_commit_frame,
            "we": _emscripten_webgl_do_create_context,
            "uf": _emscripten_webgl_init_context_attributes,
            "ve": _emscripten_webgl_make_context_current_calling_thread,
            "pg": _environ_get,
            "qg": _environ_sizes_get,
            "Ke": _exit,
            "k": _fd_close,
            "og": _fd_fdstat_get,
            "E": _fd_read,
            "Ff": _fd_seek,
            "D": _fd_write,
            "b": _getTempRet0,
            "p": _getaddrinfo,
            "Le": _getnameinfo,
            "Pg": _godot_audio_capture_start,
            "Fg": _godot_audio_capture_stop,
            "Ye": _godot_audio_has_worklet,
            "Ph": _godot_audio_init,
            "Qh": _godot_audio_is_available,
            "Zg": _godot_audio_resume,
            "Ne": _godot_audio_worklet_create,
            "Oh": _godot_audio_worklet_start,
            "w": _godot_audio_worklet_state_add,
            "u": _godot_audio_worklet_state_get,
            "sf": _godot_audio_worklet_state_wait,
            "Pe": _godot_js_config_canvas_id_get,
            "Lg": _godot_js_config_locale_get,
            "We": _godot_js_display_alert,
            "Cf": _godot_js_display_canvas_focus,
            "Df": _godot_js_display_canvas_is_focused,
            "xf": _godot_js_display_clipboard_get,
            "yf": _godot_js_display_clipboard_set,
            "Jf": _godot_js_display_cursor_is_hidden,
            "Hf": _godot_js_display_cursor_is_locked,
            "q": _godot_js_display_cursor_lock_set,
            "C": _godot_js_display_cursor_set_custom_shape,
            "rg": _godot_js_display_cursor_set_shape,
            "r": _godot_js_display_cursor_set_visible,
            "Ig": _godot_js_display_desired_size_set,
            "kf": _godot_js_display_fullscreen_cb,
            "wg": _godot_js_display_fullscreen_exit,
            "Eg": _godot_js_display_fullscreen_request,
            "Dh": _godot_js_display_glGetBufferSubData,
            "v": _godot_js_display_has_webgl,
            "vf": _godot_js_display_is_swap_ok_cancel,
            "hf": _godot_js_display_notification_cb,
            "$e": _godot_js_display_pixel_ratio_get,
            "af": _godot_js_display_screen_dpi_get,
            "Jg": _godot_js_display_screen_size_get,
            "wf": _godot_js_display_setup_canvas,
            "Kg": _godot_js_display_size_update,
            "Bf": _godot_js_display_touchscreen_is_available,
            "ff": _godot_js_display_vk_available,
            "gf": _godot_js_display_vk_cb,
            "df": _godot_js_display_vk_hide,
            "ef": _godot_js_display_vk_show,
            "jf": _godot_js_display_window_blur_cb,
            "Ue": _godot_js_display_window_icon_set,
            "Hg": _godot_js_display_window_size_get,
            "Ve": _godot_js_display_window_title_set,
            "Rg": _godot_js_eval,
            "bh": _godot_js_fetch_body_length_get,
            "mh": _godot_js_fetch_create,
            "Be": _godot_js_fetch_free,
            "$g": _godot_js_fetch_http_status_get,
            "fh": _godot_js_fetch_is_chunked,
            "ah": _godot_js_fetch_read_chunk,
            "_g": _godot_js_fetch_read_headers,
            "t": _godot_js_fetch_state_get,
            "lf": _godot_js_input_drop_files_cb,
            "nf": _godot_js_input_gamepad_cb,
            "bf": _godot_js_input_gamepad_sample,
            "Af": _godot_js_input_gamepad_sample_count,
            "zf": _godot_js_input_gamepad_sample_get,
            "of": _godot_js_input_key_cb,
            "tf": _godot_js_input_mouse_button_cb,
            "rf": _godot_js_input_mouse_move_cb,
            "qf": _godot_js_input_mouse_wheel_cb,
            "mf": _godot_js_input_paste_cb,
            "pf": _godot_js_input_touch_cb,
            "Se": _godot_js_input_vibrate_handheld,
            "Qg": _godot_js_os_download_buffer,
            "Ze": _godot_js_os_execute,
            "Mg": _godot_js_os_finish_async,
            "Oe": _godot_js_os_fs_is_persistent,
            "cf": _godot_js_os_fs_sync,
            "Xe": _godot_js_os_hw_concurrency_get,
            "Qe": _godot_js_os_request_quit_cb,
            "Te": _godot_js_os_shell_open,
            "Me": _godot_js_pwa_cb,
            "Re": _godot_js_pwa_update,
            "Je": _godot_js_rtc_datachannel_close,
            "Jh": _godot_js_rtc_datachannel_connect,
            "Gh": _godot_js_rtc_datachannel_destroy,
            "Kh": _godot_js_rtc_datachannel_get_buffered_amount,
            "Fe": _godot_js_rtc_datachannel_id_get,
            "Lh": _godot_js_rtc_datachannel_is_negotiated,
            "Ge": _godot_js_rtc_datachannel_is_ordered,
            "Ih": _godot_js_rtc_datachannel_label_get,
            "Nh": _godot_js_rtc_datachannel_max_packet_lifetime_get,
            "Mh": _godot_js_rtc_datachannel_max_retransmits_get,
            "Hh": _godot_js_rtc_datachannel_protocol_get,
            "Ie": _godot_js_rtc_datachannel_ready_state_get,
            "He": _godot_js_rtc_datachannel_send,
            "Fh": _godot_js_rtc_pc_close,
            "zh": _godot_js_rtc_pc_create,
            "yh": _godot_js_rtc_pc_datachannel_create,
            "Ee": _godot_js_rtc_pc_destroy,
            "Ah": _godot_js_rtc_pc_ice_candidate_add,
            "Ch": _godot_js_rtc_pc_local_description_set,
            "Eh": _godot_js_rtc_pc_offer_create,
            "Bh": _godot_js_rtc_pc_remote_description_set,
            "De": _godot_js_websocket_buffered_amount,
            "wh": _godot_js_websocket_close,
            "vh": _godot_js_websocket_create,
            "Ce": _godot_js_websocket_destroy,
            "xh": _godot_js_websocket_send,
            "Ug": _godot_js_wrapper_create_cb,
            "Sg": _godot_js_wrapper_create_object,
            "Tg": _godot_js_wrapper_interface_get,
            "Vg": _godot_js_wrapper_object_call,
            "Xg": _godot_js_wrapper_object_get,
            "$c": _godot_js_wrapper_object_getvar,
            "Yg": _godot_js_wrapper_object_set,
            "Wg": _godot_js_wrapper_object_setvar,
            "Og": _godot_js_wrapper_object_unref,
            "jh": _godot_webxr_commit_for_eye,
            "sh": _godot_webxr_get_bounds_geometry,
            "ye": _godot_webxr_get_controller_axes,
            "gh": _godot_webxr_get_controller_buttons,
            "ih": _godot_webxr_get_controller_count,
            "o": _godot_webxr_get_controller_target_ray_mode,
            "hh": _godot_webxr_get_controller_transform,
            "kh": _godot_webxr_get_projection_for_eye,
            "nh": _godot_webxr_get_render_targetsize,
            "lh": _godot_webxr_get_transform_for_eye,
            "rh": _godot_webxr_get_view_count,
            "th": _godot_webxr_get_visibility_state,
            "ph": _godot_webxr_initialize,
            "ze": _godot_webxr_is_controller_connected,
            "uh": _godot_webxr_is_session_supported,
            "qh": _godot_webxr_is_supported,
            "Ae": _godot_webxr_sample_controller_data,
            "oh": _godot_webxr_uninitialize,
            "l": invoke_ii,
            "g": invoke_iii,
            "x": invoke_iiii,
            "y": invoke_iiiii,
            "If": invoke_iiiiii,
            "Gf": invoke_iiiiiii,
            "Ef": invoke_iij,
            "d": invoke_vi,
            "h": invoke_vii,
            "j": invoke_viii,
            "i": invoke_viiii,
            "n": invoke_viiiiiii,
            "a": wasmMemory || Module["wasmMemory"],
            "c": _setTempRet0,
            "xe": _strftime,
            "Tf": _strftime_l
        };
        var asm = createWasm();
        var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
            return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["Rh"]).apply(null, arguments);
        };
        var _free = Module["_free"] = function() {
            return (_free = Module["_free"] = Module["asm"]["Sh"]).apply(null, arguments);
        };
        var __Z13godot_js_mainiPPc = Module["__Z13godot_js_mainiPPc"] = function() {
            return (__Z13godot_js_mainiPPc = Module["__Z13godot_js_mainiPPc"] = Module["asm"]["Th"]).apply(null, arguments);
        };
        var _emscripten_webgl_commit_frame = Module["_emscripten_webgl_commit_frame"] = function() {
            return (_emscripten_webgl_commit_frame = Module["_emscripten_webgl_commit_frame"] = Module["asm"]["Uh"]).apply(null, arguments);
        };
        var _main = Module["_main"] = function() {
            return (_main = Module["_main"] = Module["asm"]["Vh"]).apply(null, arguments);
        };
        var _malloc = Module["_malloc"] = function() {
            return (_malloc = Module["_malloc"] = Module["asm"]["Wh"]).apply(null, arguments);
        };
        var _htonl = Module["_htonl"] = function() {
            return (_htonl = Module["_htonl"] = Module["asm"]["Xh"]).apply(null, arguments);
        };
        var _htons = Module["_htons"] = function() {
            return (_htons = Module["_htons"] = Module["asm"]["Yh"]).apply(null, arguments);
        };
        var _ntohs = Module["_ntohs"] = function() {
            return (_ntohs = Module["_ntohs"] = Module["asm"]["Zh"]).apply(null, arguments);
        };
        var _fflush = Module["_fflush"] = function() {
            return (_fflush = Module["_fflush"] = Module["asm"]["_h"]).apply(null, arguments);
        };
        var ___errno_location = Module["___errno_location"] = function() {
            return (___errno_location = Module["___errno_location"] = Module["asm"]["$h"]).apply(null, arguments);
        };
        var __emwebxr_on_input_event = Module["__emwebxr_on_input_event"] = function() {
            return (__emwebxr_on_input_event = Module["__emwebxr_on_input_event"] = Module["asm"]["ai"]).apply(null, arguments);
        };
        var __emwebxr_on_simple_event = Module["__emwebxr_on_simple_event"] = function() {
            return (__emwebxr_on_simple_event = Module["__emwebxr_on_simple_event"] = Module["asm"]["bi"]).apply(null, arguments);
        };
        var _pthread_self = Module["_pthread_self"] = function() {
            return (_pthread_self = Module["_pthread_self"] = Module["asm"]["ci"]).apply(null, arguments);
        };
        var __emscripten_tls_init = Module["__emscripten_tls_init"] = function() {
            return (__emscripten_tls_init = Module["__emscripten_tls_init"] = Module["asm"]["di"]).apply(null, arguments);
        };
        var _emscripten_webgl_get_current_context = Module["_emscripten_webgl_get_current_context"] = function() {
            return (_emscripten_webgl_get_current_context = Module["_emscripten_webgl_get_current_context"] = Module["asm"]["ei"]).apply(null, arguments);
        };
        var _emscripten_dispatch_to_thread_ = Module["_emscripten_dispatch_to_thread_"] = function() {
            return (_emscripten_dispatch_to_thread_ = Module["_emscripten_dispatch_to_thread_"] = Module["asm"]["fi"]).apply(null, arguments);
        };
        var ___funcs_on_exit = Module["___funcs_on_exit"] = function() {
            return (___funcs_on_exit = Module["___funcs_on_exit"] = Module["asm"]["gi"]).apply(null, arguments);
        };
        var __emscripten_thread_init = Module["__emscripten_thread_init"] = function() {
            return (__emscripten_thread_init = Module["__emscripten_thread_init"] = Module["asm"]["ii"]).apply(null, arguments);
        };
        var __emscripten_thread_crashed = Module["__emscripten_thread_crashed"] = function() {
            return (__emscripten_thread_crashed = Module["__emscripten_thread_crashed"] = Module["asm"]["ji"]).apply(null, arguments);
        };
        var _emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = function() {
            return (_emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = Module["asm"]["ki"]).apply(null, arguments);
        };
        var __emscripten_proxy_execute_task_queue = Module["__emscripten_proxy_execute_task_queue"] = function() {
            return (__emscripten_proxy_execute_task_queue = Module["__emscripten_proxy_execute_task_queue"] = Module["asm"]["li"]).apply(null, arguments);
        };
        var __emscripten_thread_free_data = Module["__emscripten_thread_free_data"] = function() {
            return (__emscripten_thread_free_data = Module["__emscripten_thread_free_data"] = Module["asm"]["mi"]).apply(null, arguments);
        };
        var __emscripten_thread_exit = Module["__emscripten_thread_exit"] = function() {
            return (__emscripten_thread_exit = Module["__emscripten_thread_exit"] = Module["asm"]["ni"]).apply(null, arguments);
        };
        var _setThrew = Module["_setThrew"] = function() {
            return (_setThrew = Module["_setThrew"] = Module["asm"]["oi"]).apply(null, arguments);
        };
        var _emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = function() {
            return (_emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = Module["asm"]["pi"]).apply(null, arguments);
        };
        var stackSave = Module["stackSave"] = function() {
            return (stackSave = Module["stackSave"] = Module["asm"]["qi"]).apply(null, arguments);
        };
        var stackRestore = Module["stackRestore"] = function() {
            return (stackRestore = Module["stackRestore"] = Module["asm"]["ri"]).apply(null, arguments);
        };
        var stackAlloc = Module["stackAlloc"] = function() {
            return (stackAlloc = Module["stackAlloc"] = Module["asm"]["si"]).apply(null, arguments);
        };
        var dynCall_iij = Module["dynCall_iij"] = function() {
            return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["ti"]).apply(null, arguments);
        };
        function invoke_vii(index1, a11, a21) {
            var sp1 = stackSave();
            try {
                getWasmTableEntry(index1)(a11, a21);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_vi(index1, a11) {
            var sp1 = stackSave();
            try {
                getWasmTableEntry(index1)(a11);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_viii(index1, a11, a21, a31) {
            var sp1 = stackSave();
            try {
                getWasmTableEntry(index1)(a11, a21, a31);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_ii(index1, a11) {
            var sp1 = stackSave();
            try {
                return getWasmTableEntry(index1)(a11);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_iii(index1, a11, a21) {
            var sp1 = stackSave();
            try {
                return getWasmTableEntry(index1)(a11, a21);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_iiiii(index1, a11, a21, a31, a41) {
            var sp1 = stackSave();
            try {
                return getWasmTableEntry(index1)(a11, a21, a31, a41);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_iiiiii(index1, a11, a21, a31, a41, a51) {
            var sp1 = stackSave();
            try {
                return getWasmTableEntry(index1)(a11, a21, a31, a41, a51);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_viiii(index1, a11, a21, a31, a41) {
            var sp1 = stackSave();
            try {
                getWasmTableEntry(index1)(a11, a21, a31, a41);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_iiii(index1, a11, a21, a31) {
            var sp1 = stackSave();
            try {
                return getWasmTableEntry(index1)(a11, a21, a31);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_viiiiiii(index1, a11, a21, a31, a41, a51, a61, a71) {
            var sp1 = stackSave();
            try {
                getWasmTableEntry(index1)(a11, a21, a31, a41, a51, a61, a71);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_iiiiiii(index1, a11, a21, a31, a41, a51, a61) {
            var sp1 = stackSave();
            try {
                return getWasmTableEntry(index1)(a11, a21, a31, a41, a51, a61);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        function invoke_iij(index1, a11, a21, a31) {
            var sp1 = stackSave();
            try {
                return dynCall_iij(index1, a11, a21, a31);
            } catch (e1) {
                stackRestore(sp1);
                if (e1 !== e1 + 0) throw e1;
                _setThrew(1, 0);
            }
        }
        Module["cwrap"] = cwrap;
        Module["callMain"] = callMain;
        Module["keepRuntimeAlive"] = keepRuntimeAlive;
        Module["wasmMemory"] = wasmMemory;
        Module["ExitStatus"] = ExitStatus;
        Module["PThread"] = PThread;
        var calledRun;
        function ExitStatus(status1) {
            this.name = "ExitStatus";
            this.message = "Program terminated with exit(" + status1 + ")";
            this.status = status1;
        }
        var calledMain = false;
        dependenciesFulfilled = function runCaller1() {
            if (!calledRun) run();
            if (!calledRun) dependenciesFulfilled = runCaller1;
        };
        function callMain(args1) {
            var entryFunction1 = Module["_main"];
            args1 = args1 || [];
            args1.unshift(thisProgram);
            var argc1 = args1.length;
            var argv1 = stackAlloc((argc1 + 1) * 4);
            var argv_ptr1 = argv1 >> 2;
            args1.forEach((arg1)=>{
                GROWABLE_HEAP_I32()[argv_ptr1++] = allocateUTF8OnStack(arg1);
            });
            GROWABLE_HEAP_I32()[argv_ptr1] = 0;
            try {
                var ret1 = entryFunction1(argc1, argv1);
                exit(ret1, true);
                return ret1;
            } catch (e1) {
                return handleException(e1);
            } finally{
                calledMain = true;
            }
        }
        function run(args1) {
            args1 = args1 || arguments_;
            if (runDependencies > 0) return;
            if (ENVIRONMENT_IS_PTHREAD) {
                readyPromiseResolve(Module);
                initRuntime();
                postMessage({
                    "cmd": "loaded"
                });
                return;
            }
            preRun();
            if (runDependencies > 0) return;
            function doRun1() {
                if (calledRun) return;
                calledRun = true;
                Module["calledRun"] = true;
                if (ABORT) return;
                initRuntime();
                preMain();
                readyPromiseResolve(Module);
                if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
                if (shouldRunNow) callMain(args1);
                postRun();
            }
            if (Module["setStatus"]) {
                Module["setStatus"]("Running...");
                setTimeout(function() {
                    setTimeout(function() {
                        Module["setStatus"]("");
                    }, 1);
                    doRun1();
                }, 1);
            } else doRun1();
        }
        Module["run"] = run;
        function exit(status1, implicit1) {
            EXITSTATUS = status1;
            if (!implicit1) {
                if (ENVIRONMENT_IS_PTHREAD) {
                    exitOnMainThread(status1);
                    throw "unwind";
                }
            }
            if (!keepRuntimeAlive()) exitRuntime();
            procExit(status1);
        }
        function procExit(code1) {
            EXITSTATUS = code1;
            if (!keepRuntimeAlive()) {
                PThread.terminateAllThreads();
                if (Module["onExit"]) Module["onExit"](code1);
                ABORT = true;
            }
            quit_(code1, new ExitStatus(code1));
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
})();
if (typeof exports === "object" && typeof module === "object") module.exports = Godot;
else if (typeof define === "function" && define["amd"]) define([], function() {
    return Godot;
});
else if (typeof exports === "object") exports["Godot"] = Godot;
const Preloader = /** @constructor */ function() {
    function getTrackedResponse1(response1, load_status1) {
        function onloadprogress1(reader1, controller1) {
            return reader1.read().then(function(result1) {
                if (load_status1.done) return Promise.resolve();
                if (result1.value) {
                    controller1.enqueue(result1.value);
                    load_status1.loaded += result1.value.length;
                }
                if (!result1.done) return onloadprogress1(reader1, controller1);
                load_status1.done = true;
                return Promise.resolve();
            });
        }
        const reader1 = response1.body.getReader();
        return new Response(new ReadableStream({
            start: function(controller1) {
                onloadprogress1(reader1, controller1).then(function() {
                    controller1.close();
                });
            }
        }), {
            headers: response1.headers
        });
    }
    function loadFetch1(file1, tracker1, fileSize1, raw1) {
        tracker1[file1] = {
            total: fileSize1 || 0,
            loaded: 0,
            done: false
        };
        return fetch(file1).then(function(response1) {
            if (!response1.ok) return Promise.reject(new Error(`Failed loading file '${file1}'`));
            const tr1 = getTrackedResponse1(response1, tracker1[file1]);
            if (raw1) return Promise.resolve(tr1);
            return tr1.arrayBuffer();
        });
    }
    function retry1(func1, attempts1 = 1) {
        function onerror1(err1) {
            if (attempts1 <= 1) return Promise.reject(err1);
            return new Promise(function(resolve1, reject1) {
                setTimeout(function() {
                    retry1(func1, attempts1 - 1).then(resolve1).catch(reject1);
                }, 1000);
            });
        }
        return func1().catch(onerror1);
    }
    const DOWNLOAD_ATTEMPTS_MAX1 = 4;
    const loadingFiles1 = {};
    const lastProgress1 = {
        loaded: 0,
        total: 0
    };
    let progressFunc1 = null;
    const animateProgress1 = function() {
        let loaded1 = 0;
        let total1 = 0;
        let totalIsValid1 = true;
        let progressIsFinal1 = true;
        Object.keys(loadingFiles1).forEach(function(file1) {
            const stat1 = loadingFiles1[file1];
            if (!stat1.done) progressIsFinal1 = false;
            if (!totalIsValid1 || stat1.total === 0) {
                totalIsValid1 = false;
                total1 = 0;
            } else total1 += stat1.total;
            loaded1 += stat1.loaded;
        });
        if (loaded1 !== lastProgress1.loaded || total1 !== lastProgress1.total) {
            lastProgress1.loaded = loaded1;
            lastProgress1.total = total1;
            if (typeof progressFunc1 === "function") progressFunc1(loaded1, total1);
        }
        if (!progressIsFinal1) requestAnimationFrame(animateProgress1);
    };
    this.animateProgress = animateProgress1;
    this.setProgressFunc = function(callback1) {
        progressFunc1 = callback1;
    };
    this.loadPromise = function(file1, fileSize1, raw1 = false) {
        return retry1(loadFetch1.bind(null, file1, loadingFiles1, fileSize1, raw1), DOWNLOAD_ATTEMPTS_MAX1);
    };
    this.preloadedFiles = [];
    this.preload = function(pathOrBuffer1, destPath1, fileSize1) {
        let buffer1 = null;
        if (typeof pathOrBuffer1 === "string") {
            const me1 = this;
            return this.loadPromise(pathOrBuffer1, fileSize1).then(function(buf1) {
                me1.preloadedFiles.push({
                    path: destPath1 || pathOrBuffer1,
                    buffer: buf1
                });
                return Promise.resolve();
            });
        } else if (pathOrBuffer1 instanceof ArrayBuffer) buffer1 = new Uint8Array(pathOrBuffer1);
        else if (ArrayBuffer.isView(pathOrBuffer1)) buffer1 = new Uint8Array(pathOrBuffer1.buffer);
        if (buffer1) {
            this.preloadedFiles.push({
                path: destPath1,
                buffer: pathOrBuffer1
            });
            return Promise.resolve();
        }
        return Promise.reject(new Error("Invalid object for preloading"));
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
 */ const EngineConfig = {}; // eslint-disable-line no-unused-vars
/**
 * @struct
 * @constructor
 * @ignore
 */ const InternalConfig = function(initConfig1) {
    const cfg1 = /** @lends {InternalConfig.prototype} */ {
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
		 */ executable: "",
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
		 * The progressive web app service worker to install.
		 * @memberof EngineConfig
		 * @default
		 * @type {string}
		 */ serviceWorker: "",
        /**
		 * @ignore
		 * @type {Array.<string>}
		 */ persistentPaths: [
            "/userfs"
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
		 */ onPrintError: function(var_args1) {
            console.error.apply(console, Array.from(arguments)); // eslint-disable-line no-console
        }
    };
    /**
	 * @ignore
	 * @struct
	 * @constructor
	 * @param {EngineConfig} opts
	 */ function Config1(opts1) {
        this.update(opts1);
    }
    Config1.prototype = cfg1;
    /**
	 * @ignore
	 * @param {EngineConfig} opts
	 */ Config1.prototype.update = function(opts1) {
        const config1 = opts1 || {};
        // NOTE: We must explicitly pass the default, accessing it via
        // the key will fail due to closure compiler renames.
        function parse1(key1, def1) {
            if (typeof config1[key1] === "undefined") return def1;
            return config1[key1];
        }
        // Module config
        this.unloadAfterInit = parse1("unloadAfterInit", this.unloadAfterInit);
        this.onPrintError = parse1("onPrintError", this.onPrintError);
        this.onPrint = parse1("onPrint", this.onPrint);
        this.onProgress = parse1("onProgress", this.onProgress);
        // Godot config
        this.canvas = parse1("canvas", this.canvas);
        this.executable = parse1("executable", this.executable);
        this.mainPack = parse1("mainPack", this.mainPack);
        this.locale = parse1("locale", this.locale);
        this.canvasResizePolicy = parse1("canvasResizePolicy", this.canvasResizePolicy);
        this.persistentPaths = parse1("persistentPaths", this.persistentPaths);
        this.persistentDrops = parse1("persistentDrops", this.persistentDrops);
        this.experimentalVK = parse1("experimentalVK", this.experimentalVK);
        this.focusCanvas = parse1("focusCanvas", this.focusCanvas);
        this.serviceWorker = parse1("serviceWorker", this.serviceWorker);
        this.gdnativeLibs = parse1("gdnativeLibs", this.gdnativeLibs);
        this.fileSizes = parse1("fileSizes", this.fileSizes);
        this.args = parse1("args", this.args);
        this.onExecute = parse1("onExecute", this.onExecute);
        this.onExit = parse1("onExit", this.onExit);
    };
    /**
	 * @ignore
	 * @param {string} loadPath
	 * @param {Response} response
	 */ Config1.prototype.getModuleConfig = function(loadPath1, response1) {
        let r1 = response1;
        return {
            "print": this.onPrint,
            "printErr": this.onPrintError,
            "thisProgram": this.executable,
            "noExitRuntime": true,
            "dynamicLibraries": [
                `${loadPath1}.side.wasm`
            ],
            "instantiateWasm": function(imports1, onSuccess1) {
                function done1(result1) {
                    onSuccess1(result1["instance"], result1["module"]);
                }
                if (typeof WebAssembly.instantiateStreaming !== "undefined") WebAssembly.instantiateStreaming(Promise.resolve(r1), imports1).then(done1);
                else r1.arrayBuffer().then(function(buffer1) {
                    WebAssembly.instantiate(buffer1, imports1).then(done1);
                });
                r1 = null;
                return {};
            },
            "locateFile": function(path1) {
                if (path1.endsWith(".worker.js")) return `${loadPath1}.worker.js`;
                else if (path1.endsWith(".audio.worklet.js")) return `${loadPath1}.audio.worklet.js`;
                else if (path1.endsWith(".js")) return `${loadPath1}.js`;
                else if (path1.endsWith(".side.wasm")) return `${loadPath1}.side.wasm`;
                else if (path1.endsWith(".wasm")) return `${loadPath1}.wasm`;
                return path1;
            }
        };
    };
    /**
	 * @ignore
	 * @param {function()} cleanup
	 */ Config1.prototype.getGodotConfig = function(cleanup1) {
        // Try to find a canvas
        if (!(this.canvas instanceof HTMLCanvasElement)) {
            const nodes1 = document.getElementsByTagName("canvas");
            if (nodes1.length && nodes1[0] instanceof HTMLCanvasElement) this.canvas = nodes1[0];
            if (!this.canvas) throw new Error("No canvas found in page");
        }
        // Canvas can grab focus on click, or key events won't work.
        if (this.canvas.tabIndex < 0) this.canvas.tabIndex = 0;
        // Browser locale, or custom one if defined.
        let locale1 = this.locale;
        if (!locale1) {
            locale1 = navigator.languages ? navigator.languages[0] : navigator.language;
            locale1 = locale1.split(".")[0];
        }
        locale1 = locale1.replace("-", "_");
        const onExit1 = this.onExit;
        // Godot configuration.
        return {
            "canvas": this.canvas,
            "canvasResizePolicy": this.canvasResizePolicy,
            "locale": locale1,
            "persistentDrops": this.persistentDrops,
            "virtualKeyboard": this.experimentalVK,
            "focusCanvas": this.focusCanvas,
            "onExecute": this.onExecute,
            "onExit": function(p_code1) {
                cleanup1(); // We always need to call the cleanup callback to free memory.
                if (typeof onExit1 === "function") onExit1(p_code1);
            }
        };
    };
    return new Config1(initConfig1);
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
 */ const Engine = function() {
    const preloader1 = new Preloader();
    let loadPromise1 = null;
    let loadPath1 = "";
    let initPromise1 = null;
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
	 */ function Engine1(initConfig1) {
        this.config = new InternalConfig(initConfig1);
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
	 */ Engine1.load = function(basePath1, size1) {
        if (loadPromise1 == null) {
            loadPath1 = basePath1;
            loadPromise1 = preloader1.loadPromise(`${loadPath1}.wasm`, size1, true);
            requestAnimationFrame(preloader1.animateProgress);
        }
        return loadPromise1;
    };
    /**
	 * Unload the engine to free memory.
	 *
	 * This method will be called automatically depending on the configuration. See :js:attr:`unloadAfterInit`.
	 *
	 * @function Engine.unload
	 */ Engine1.unload = function() {
        loadPromise1 = null;
    };
    /**
	 * Check whether WebGL is available. Optionally, specify a particular version of WebGL to check for.
	 *
	 * @param {number=} [majorVersion=1] The major WebGL version to check for.
	 * @returns {boolean} If the given major version of WebGL is available.
	 * @function Engine.isWebGLAvailable
	 */ Engine1.isWebGLAvailable = function(majorVersion1 = 1) {
        try {
            return !!document.createElement("canvas").getContext([
                "webgl",
                "webgl2"
            ][majorVersion1 - 1]);
        } catch (e1) {}
        return false;
    };
    /**
	 * Safe Engine constructor, creates a new prototype for every new instance to avoid prototype pollution.
	 * @ignore
	 * @constructor
	 */ function SafeEngine1(initConfig1) {
        const proto1 = /** @lends Engine.prototype */ {
            /**
			 * Initialize the engine instance. Optionally, pass the base path to the engine to load it,
			 * if it hasn't been loaded yet. See :js:meth:`Engine.load`.
			 *
			 * @param {string=} basePath Base path of the engine to load.
			 * @return {Promise} A ``Promise`` that resolves once the engine is loaded and initialized.
			 */ init: function(basePath1) {
                if (initPromise1) return initPromise1;
                if (loadPromise1 == null) {
                    if (!basePath1) {
                        initPromise1 = Promise.reject(new Error("A base path must be provided when calling `init` and the engine is not loaded."));
                        return initPromise1;
                    }
                    Engine1.load(basePath1, this.config.fileSizes[`${basePath1}.wasm`]);
                }
                const me1 = this;
                function doInit1(promise1) {
                    // Care! Promise chaining is bogus with old emscripten versions.
                    // This caused a regression with the Mono build (which uses an older emscripten version).
                    // Make sure to test that when refactoring.
                    return new Promise(function(resolve1, reject1) {
                        promise1.then(function(response1) {
                            const cloned1 = new Response(response1.clone().body, {
                                "headers": [
                                    [
                                        "content-type",
                                        "application/wasm"
                                    ]
                                ]
                            });
                            Godot(me1.config.getModuleConfig(loadPath1, cloned1)).then(function(module1) {
                                const paths1 = me1.config.persistentPaths;
                                module1["initFS"](paths1).then(function(err1) {
                                    me1.rtenv = module1;
                                    if (me1.config.unloadAfterInit) Engine1.unload();
                                    resolve1();
                                });
                            });
                        });
                    });
                }
                preloader1.setProgressFunc(this.config.onProgress);
                initPromise1 = doInit1(loadPromise1);
                return initPromise1;
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
			 */ preloadFile: function(file1, path1) {
                return preloader1.preload(file1, path1, this.config.fileSizes[file1]);
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
			 */ start: function(override1) {
                this.config.update(override1);
                const me1 = this;
                return me1.init().then(function() {
                    if (!me1.rtenv) return Promise.reject(new Error("The engine must be initialized before it can be started"));
                    let config1 = {};
                    try {
                        config1 = me1.config.getGodotConfig(function() {
                            me1.rtenv = null;
                        });
                    } catch (e1) {
                        return Promise.reject(e1);
                    }
                    // Godot configuration.
                    me1.rtenv["initConfig"](config1);
                    // Preload GDNative libraries.
                    const libs1 = [];
                    me1.config.gdnativeLibs.forEach(function(lib1) {
                        libs1.push(me1.rtenv["loadDynamicLibrary"](lib1, {
                            "loadAsync": true
                        }));
                    });
                    return Promise.all(libs1).then(function() {
                        return new Promise(function(resolve1, reject1) {
                            preloader1.preloadedFiles.forEach(function(file1) {
                                me1.rtenv["copyToFS"](file1.path, file1.buffer);
                            });
                            preloader1.preloadedFiles.length = 0; // Clear memory
                            me1.rtenv["callMain"](me1.config.args);
                            initPromise1 = null;
                            if (me1.config.serviceWorker && "serviceWorker" in navigator) navigator.serviceWorker.register(me1.config.serviceWorker);
                            resolve1();
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
			 */ startGame: function(override1) {
                this.config.update(override1);
                // Add main-pack argument.
                const exe1 = this.config.executable;
                const pack1 = this.config.mainPack || `${exe1}.pck`;
                this.config.args = [
                    "--main-pack",
                    pack1
                ].concat(this.config.args);
                // Start and init with execName as loadPath if not inited.
                const me1 = this;
                return Promise.all([
                    this.init(exe1),
                    this.preloadFile(pack1, pack1)
                ]).then(function() {
                    return me1.start.apply(me1);
                });
            },
            /**
			 * Create a file at the specified ``path`` with the passed as ``buffer`` in the instance's file system.
			 *
			 * @param {string} path The location where the file will be created.
			 * @param {ArrayBuffer} buffer The content of the file.
			 */ copyToFS: function(path1, buffer1) {
                if (this.rtenv == null) throw new Error("Engine must be inited before copying files");
                this.rtenv["copyToFS"](path1, buffer1);
            },
            /**
			 * Request that the current instance quit.
			 *
			 * This is akin the user pressing the close button in the window manager, and will
			 * have no effect if the engine has crashed, or is stuck in a loop.
			 *
			 */ requestQuit: function() {
                if (this.rtenv) this.rtenv["request_quit"]();
            }
        };
        Engine1.prototype = proto1;
        // Closure compiler exported instance methods.
        Engine1.prototype["init"] = Engine1.prototype.init;
        Engine1.prototype["preloadFile"] = Engine1.prototype.preloadFile;
        Engine1.prototype["start"] = Engine1.prototype.start;
        Engine1.prototype["startGame"] = Engine1.prototype.startGame;
        Engine1.prototype["copyToFS"] = Engine1.prototype.copyToFS;
        Engine1.prototype["requestQuit"] = Engine1.prototype.requestQuit;
        // Also expose static methods as instance methods
        Engine1.prototype["load"] = Engine1.load;
        Engine1.prototype["unload"] = Engine1.unload;
        Engine1.prototype["isWebGLAvailable"] = Engine1.isWebGLAvailable;
        return new Engine1(initConfig1);
    }
    // Closure compiler exported static methods.
    SafeEngine1["load"] = Engine1.load;
    SafeEngine1["unload"] = Engine1.unload;
    SafeEngine1["isWebGLAvailable"] = Engine1.isWebGLAvailable;
    return SafeEngine1;
}();
if (typeof window !== "undefined") window["Engine"] = Engine;

//# sourceMappingURL=GameGallery.5a83b49b.js.map
