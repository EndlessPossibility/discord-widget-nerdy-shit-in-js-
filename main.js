(() => {
"use strict";
var __webpack_modules__ = ({
"./src/constants.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ModalPaddingStyle: () => (ModalPaddingStyle),
  SetupStep: () => (SetupStep)
});
var SetupStep = /*#__PURE__*/ function(SetupStep) {
    SetupStep[SetupStep["SocialSdkForm"] = 0] = "SocialSdkForm";
    SetupStep[SetupStep["Oauth2Authorization"] = 1] = "Oauth2Authorization";
    SetupStep[SetupStep["WidgetCustomization"] = 2] = "WidgetCustomization";
    SetupStep[SetupStep["AppIdentity"] = 3] = "AppIdentity";
    SetupStep[SetupStep["Success"] = 4] = "Success";
    return SetupStep;
}({});
var ModalPaddingStyle = {
    padding: '20px'
};


},
"./src/discord/api/RestAPI.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RestAPI: () => (RestAPI)
});
/* import */ var discord_webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}

// i'm too lazy type them rn
// TODO: type this shit
var RestAPI = Object.values((0,discord_webpack__rspack_import_0.findChunkByCode)('HTTPUtils') || {}).find(function(val) {
    return (typeof val === "undefined" ? "undefined" : _type_of(val)) === 'object' && val && 'del' in val;
});


},
"./src/discord/api/appIdentity.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__rspack_load_async_deps, __rspack_async_done) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DataType: () => (DataType),
  issueAppIdentity: () => (issueAppIdentity)
});
/* import */ var discord_webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");
/* import */ var steps_Oauth2Authorization__rspack_import_1 = __webpack_require__("./src/steps/Oauth2Authorization.tsx");
var __rspack_async_deps = __rspack_load_async_deps([steps_Oauth2Authorization__rspack_import_1]);
steps_Oauth2Authorization__rspack_import_1 = (__rspack_async_deps.then ? (await __rspack_async_deps)() : __rspack_async_deps)[0];

var DataType = /*#__PURE__*/ function(DataType) {
    DataType[DataType["string"] = 1] = "string";
    DataType[DataType["number"] = 2] = "number";
    DataType[DataType["media"] = 3] = "media";
    return DataType;
}({});
// ⚠️ Set your own Cloudflare Worker URL below.
// Using someone else's will give them your bot token!
var WORKER_URL = 'https://nameless-cloud-ea13.yourname.workers.dev/';
if (!WORKER_URL) {
    alert('Set your WORKER_URL at the top of appIdentity.ts in the main.js file before using the snippet.');
}
function issueAppIdentity(currentAppId, data) {
    var userId = (0,discord_webpack__rspack_import_0.findByProps)('getCurrentUser').getCurrentUser().id;
    var params = new URLSearchParams({
        userId: userId,
        appId: currentAppId,
        botToken: steps_Oauth2Authorization__rspack_import_1.botToken || '',
        data: btoa(JSON.stringify(data))
    });
    window.open("".concat(WORKER_URL, "?").concat(params), '_blank');
}

__rspack_async_done();
} catch(e) { __rspack_async_done(e); } });

},
"./src/discord/api/bots.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  resetBotSecret: () => (resetBotSecret),
  resetBotToken: () => (resetBotToken)
});
/* import */ var discord_webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

var resetBotToken = function resetBotToken(applicationId) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                (0,discord_webpack__rspack_import_0.findByCode)('url:', '.APPLICATION_RESET_BOT_TOKEN_SUCCESS')(applicationId)
            ];
        });
    })();
};
var resetBotSecret = function resetBotSecret(applicationId) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                (0,discord_webpack__rspack_import_0.findByCode)('url:', '.APPLICATION_RESET_SECRET_SUCCESS')(applicationId)
            ];
        });
    })();
};


},
"./src/discord/api/oauth2.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  exchangeOauth2Code: () => (exchangeOauth2Code)
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
// we use fetch here as we are not using a normal user token
function exchangeOauth2Code(clientId, clientSecret, code, redirectUri) {
    return _async_to_generator(function() {
        var response, _, _1, _2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fetch('https://discord.com/api/v10/oauth2/token', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            body: new URLSearchParams({
                                client_id: clientId,
                                client_secret: clientSecret,
                                grant_type: 'authorization_code',
                                code: code,
                                redirect_uri: redirectUri
                            })
                        })
                    ];
                case 1:
                    response = _state.sent();
                    if (!!response.ok) return [
                        3,
                        3
                    ];
                    _ = Error.bind;
                    _2 = (_1 = "Failed to exchange code: ".concat(response.status, " ")).concat;
                    return [
                        4,
                        response.text()
                    ];
                case 2:
                    throw new (_.apply(Error, [
                        void 0,
                        _2.apply(_1, [
                            _state.sent()
                        ])
                    ]));
                case 3:
                    return [
                        2
                    ];
            }
        });
    })();
}


},
"./src/discord/components/components.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ButtonVariant: () => (ButtonVariant),
  Components: () => (Components),
  tryAndLoadConfirmModal: () => (tryAndLoadConfirmModal)
});
/* import */ var _webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");
/* import */ var _utils_errors__rspack_import_1 = __webpack_require__("./src/utils/errors.ts");
/* import */ var discord_flux__rspack_import_2 = __webpack_require__("./src/discord/flux/index.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_reg_exp(re, groups, source) {
    _wrap_reg_exp = function(re, groups, source) {
        return new WrappedRegExp(re, undefined, groups, source);
    };
    var _super = RegExp.prototype;
    var _groups = new WeakMap();
    var _sources = new WeakMap();
    var _native_source = Object.getOwnPropertyDescriptor(_super, "source").get;
    function WrappedRegExp(re, flags, groups, source) {
        var _re = new RegExp(re, flags);
        _groups.set(_re, groups || _groups.get(re));
        _sources.set(_re, source !== undefined ? source : _sources.get(re));
        return _set_prototype_of(_re, WrappedRegExp.prototype);
    }
    _inherits(WrappedRegExp, RegExp);
    Object.defineProperty(WrappedRegExp.prototype, "source", {
        configurable: true,
        get: function() {
            var source = _sources.get(this);
            if (source !== undefined) {
                try {
                    new RegExp(source, this.flags);
                    return source;
                } catch (_) {}
            }
            return _native_source.call(this);
        }
    });
    WrappedRegExp.prototype.exec = function(str) {
        var result = _super.exec.call(this, str);
        if (result) {
            result.groups = buildGroups(result, this);
            var indices = result.indices;
            if (indices) indices.groups = buildGroups(indices, this);
        }
        return result;
    };
    WrappedRegExp.prototype[Symbol.replace] = function(str, substitution) {
        if (typeof substitution === "string") {
            var groups = _groups.get(this);
            return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
                var group = groups ? groups[name] : undefined;
                if (group === undefined) return "";
                return "$" + (Array.isArray(group) ? group.join("$") : group);
            }));
        }
        if (typeof substitution === "function") {
            var _this = this;
            return _super[Symbol.replace].call(this, str, function() {
                var args = arguments;
                if (typeof args[args.length - 1] !== "object") {
                    args = [].slice.call(args);
                    args.push(buildGroups(args, _this));
                }
                return substitution.apply(this, args);
            });
        }
        return _super[Symbol.replace].call(this, str, substitution);
    };
    function buildGroups(result, re) {
        var g = _groups.get(re);
        return Object.keys(g).reduce(function(groups, name) {
            var i = g[name];
            if (typeof i === "number") groups[name] = result[i];
            else {
                var k = 0;
                while(result[i[k]] === undefined && k + 1 < i.length)k++;
                groups[name] = result[i[k]];
            }
            return groups;
        }, Object.create(null));
    }
    return _wrap_reg_exp.apply(this, arguments);
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _Components_ConfirmModal_toString_includes, _Components_ConfirmModal_toString, _Components_ConfirmModal_toString1, _Components_ConfirmModal;



var ButtonVariant = /*#__PURE__*/ function(ButtonVariant) {
    ButtonVariant["PRIMARY"] = "primary";
    ButtonVariant["SECONDARY"] = "secondary";
    ButtonVariant["DANGER_PRIMARY"] = "dangerPrimary";
    ButtonVariant["DANGER_SECONDARY"] = "dangerSecondary";
    ButtonVariant["OVERLAY_PRIMARY"] = "overlayPrimary";
    ButtonVariant["POSITIVE"] = "positive";
    ButtonVariant["LINK"] = "link";
    ButtonVariant["NONE"] = "none";
    return ButtonVariant;
}({});
// I'm NOT gonna type this shit
var Components = _object_spread_props(_object_spread({
    // @ts-expect-error an error is thrown.
    openModal: function openModal() {
        return (0,_utils_errors__rspack_import_1.throwErrorForNotFound)('openModal');
    },
    closeModal: function closeModal() {
        return (0,_utils_errors__rspack_import_1.throwErrorForNotFound)('closeModal');
    },
    closeAllModals: function closeAllModals() {
        return (0,_utils_errors__rspack_import_1.throwErrorForNotFound)('closeAllModals');
    },
    // @ts-expect-error an error is thrown.
    ExpressiveModal: function ExpressiveModal() {
        return (0,_utils_errors__rspack_import_1.throwErrorForNotFound)('ExpressiveModal');
    },
    // @ts-expect-error an error is thrown.
    Text: function Text() {
        return (0,_utils_errors__rspack_import_1.throwErrorForNotFound)('Text');
    },
    // @ts-expect-error an error is thrown.
    Button: function Button() {
        return (0,_utils_errors__rspack_import_1.throwErrorForNotFound)('Button');
    },
    // @ts-expect-error an error is thrown.
    ConfirmModal: function ConfirmModal() {
        return (0,_utils_errors__rspack_import_1.throwErrorForNotFound)('ConfirmModal');
    },
    // @ts-expect-error an error is thrown.
    Modal: function Modal() {
        return (0,_utils_errors__rspack_import_1.throwErrorForNotFound)('Modal');
    }
}, (0,_webpack__rspack_import_0.findByProps)('openModal', 'closeModal'), (0,_webpack__rspack_import_0.findByProps)('ConfirmModal'), (0,_webpack__rspack_import_0.findByProps)('Button', 'Text'), (0,_webpack__rspack_import_0.findByProps)('Colors')), {
    ButtonVariant: ButtonVariant
});
var getOpenModalIds = function getOpenModalIds() {
    return new Set(Array.from(document.querySelectorAll('[class*="modalContainer_"]')).flatMap(function(el) {
        var _values_find_return, _values_find;
        var values = Object.values(el);
        var key = (_values_find = values.find(function(v) {
            var _v_return;
            return v === null || v === void 0 ? void 0 : (_v_return = v.return) === null || _v_return === void 0 ? void 0 : _v_return.key;
        })) === null || _values_find === void 0 ? void 0 : (_values_find_return = _values_find.return) === null || _values_find_return === void 0 ? void 0 : _values_find_return.key;
        return [
            key
        ];
    }));
};
// devportal has different openModal
Components.openModal = (0,_webpack__rspack_import_0.findByCode)(',instant:') || function(Modal) {
    return (0,_webpack__rspack_import_0.findByCode)('modal-', 'modalKey:')(function() {
        return Modal;
    });
};
Components.closeModal = (0,_webpack__rspack_import_0.findByCode)('.onCloseCallback()') || (0,_webpack__rspack_import_0.findByCode)('modals.filter', 'clearTimeout(');
Components.closeAllModals = (0,_webpack__rspack_import_0.findByCode)('.getState();for') || function() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = getOpenModalIds()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var modalId = _step.value;
            Components.closeModal(modalId);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
// expressive modal doesnt exist on mobile...
Components.ExpressiveModal = (0,_webpack__rspack_import_0.findByCode)(/gradientColor:[a-z-A-Z0-9$_]+="purple"/, 'paddingSize:"lg"') || (0,_webpack__rspack_import_0.findByName)('Modal') || (0,_webpack__rspack_import_0.findByCode)('transitionState', 'onClose', 'dialog');
Components.Modal = (0,_webpack__rspack_import_0.findByName)('Modal') || (0,_webpack__rspack_import_0.findByCode)('transitionState', 'onClose', 'dialog');
Components.Button = (0,_webpack__rspack_import_0.findByName)('Button') || (0,_webpack__rspack_import_0.findByCode)('"data-mana-component":"button"');
Components.Text = (0,_webpack__rspack_import_0.findByName)('Text') || (0,_webpack__rspack_import_0.findByPropsAll)('render').filter(function(e) {
    return e.render.toString().includes('tabularNumbers:');
})[0].render;
var tryAndLoadConfirmModal = function tryAndLoadConfirmModal() {
    return _async_to_generator(function() {
        var _code_match, _code_match1, code, ConfirmModalLoc, _findByPropChunk, _ref, moduleId, chunks, ConfirmModal;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    code = (0,_webpack__rspack_import_0.search)('ConfirmModal:', 'await', '.e(');
                    ConfirmModalLoc = code === null || code === void 0 ? void 0 : (_code_match1 = code.match) === null || _code_match1 === void 0 ? void 0 : (_code_match = _code_match1.call(code, _wrap_reg_exp(/ConfirmModal:\s*[\w+_$]+}\s*=\s*await\s*[\w+_$]+\.e\("(\d+)"\)\.then\(*[\w+_$]+\.bind\(*[\w+_$]+\s*,\s*(\d+)\s*\)/, {
                        ConfirmModalModuleId: 1,
                        ConfirmModalChunkId: 2
                    }, 'ConfirmModal:\\s*[\\w+_$]+}\\s*=\\s*await\\s*[\\w+_$]+\\.e\\("(?<ConfirmModalModuleId>\\d+)"\\)\\.then\\(*[\\w+_$]+\\.bind\\(*[\\w+_$]+\\s*,\\s*(?<ConfirmModalChunkId>\\d+)\\s*\\)'))) === null || _code_match === void 0 ? void 0 : _code_match.groups;
                    if (!!ConfirmModalLoc) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        (0,_webpack__rspack_import_0.findModuleByCode)('ConfirmModal:()=>')
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        2
                    ]), moduleId = _ref[0], chunks = _ref[1];
                    if (!moduleId || moduleId === -9999999) {
                        throw new Error('Failed to get ConfirmModal module.');
                    }
                    return [
                        4,
                        _webpack__rspack_import_0.wreq.e(String(moduleId))
                    ];
                case 2:
                    _state.sent();
                    ConfirmModal = (_findByPropChunk = (0,_webpack__rspack_import_0.findByPropChunk)('ConfirmModal', chunks)) === null || _findByPropChunk === void 0 ? void 0 : _findByPropChunk.ConfirmModal;
                    if (!ConfirmModal) throw new Error('Failed to get ConfirmModal module.');
                    Components.ConfirmModal = ConfirmModal;
                    discord_flux__rspack_import_2["default"].dispatch({
                        type: 'CONFIRM_MODAL_MODULE_LOADED'
                    });
                    _state.label = 3;
                case 3:
                    if (!ConfirmModalLoc) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        _webpack__rspack_import_0.wreq.e(ConfirmModalLoc.ConfirmModalModuleId).then(function() {
                            var _wreq;
                            Components.ConfirmModal = (_wreq = (0,_webpack__rspack_import_0.wreq)(ConfirmModalLoc.ConfirmModalChunkId)) === null || _wreq === void 0 ? void 0 : _wreq.ConfirmModal;
                        })
                    ];
                case 4:
                    _state.sent();
                    discord_flux__rspack_import_2["default"].dispatch({
                        type: 'CONFIRM_MODAL_MODULE_LOADED'
                    });
                    _state.label = 5;
                case 5:
                    return [
                        2
                    ];
            }
        });
    })();
};
if ((_Components_ConfirmModal = Components.ConfirmModal) === null || _Components_ConfirmModal === void 0 ? void 0 : (_Components_ConfirmModal_toString1 = _Components_ConfirmModal.toString) === null || _Components_ConfirmModal_toString1 === void 0 ? void 0 : (_Components_ConfirmModal_toString = _Components_ConfirmModal_toString1.call(_Components_ConfirmModal)) === null || _Components_ConfirmModal_toString === void 0 ? void 0 : (_Components_ConfirmModal_toString_includes = _Components_ConfirmModal_toString.includes) === null || _Components_ConfirmModal_toString_includes === void 0 ? void 0 : _Components_ConfirmModal_toString_includes.call(_Components_ConfirmModal_toString, 'throwErrorForNotFound')) {
    void tryAndLoadConfirmModal();
}
if (!Components.Button || !Components.ExpressiveModal || !Components.Text) {
    throw new Error('Failed to get components, report this error to wavedev.js');
}



},
"./src/discord/components/index.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Components: () => (/* reexport safe */ _components__rspack_import_0.Components),
  ToastType: () => (/* reexport safe */ _toasts__rspack_import_1.ToastType),
  showToast: () => (/* reexport safe */ _toasts__rspack_import_1.showToast)
});
/* import */ var _components__rspack_import_0 = __webpack_require__("./src/discord/components/components.ts");
/* import */ var _toasts__rspack_import_1 = __webpack_require__("./src/discord/components/toasts/index.ts");






},
"./src/discord/components/toasts/index.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ToastType: () => (ToastType),
  showToast: () => (showToast)
});
/* import */ var _webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");

var ToastType = /*#__PURE__*/ function(ToastType) {
    ToastType["MESSAGE"] = "message";
    ToastType["SUCCESS"] = "success";
    ToastType["FAILURE"] = "failure";
    ToastType["CUSTOM"] = "custom";
    ToastType["CLIP"] = "clip";
    ToastType["LINK"] = "link";
    ToastType["FORWARD"] = "forward";
    ToastType["INVITE"] = "invite";
    ToastType["BOOKMARK"] = "bookmark";
    ToastType["CLOCK"] = "clock";
    ToastType["AI"] = "ai";
    ToastType["FAVORITE"] = "favorite";
    return ToastType;
}({});
var showToastsModule = (0,_webpack__rspack_import_0.findChunkByCode)('.currentToastMap.has(');
var createToastModule = (0,_webpack__rspack_import_0.findChunkByCode)('options:{position:');
// fallback DOM toast (because reality is often disappointing)
function fallbackToast(text, type) {
    var _colors_type;
    var el = document.createElement('div');
    var colors = {
        success: '#2ecc71',
        failure: '#e74c3c',
        message: '#3498db',
        custom: '#9b59b6'
    };
    el.textContent = text;
    el.style.cssText = "\n        position: fixed;\n        bottom: 20px;\n        left: 20px;\n        padding: 10px 14px;\n        border-radius: 8px;\n        color: white;\n        background: ".concat((_colors_type = colors[type]) !== null && _colors_type !== void 0 ? _colors_type : '#333', ";\n        font-family: sans-serif;\n        z-index: 999999;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n    ");
    document.body.appendChild(el);
    setTimeout(function() {
        el.remove();
    }, 3000);
}
if (showToastsModule && createToastModule) {
    window.toasts = (0,_webpack__rspack_import_0.map)(showToastsModule, {
        showToast: '.currentToastMap.has('
    });
    window.toastMaker = (0,_webpack__rspack_import_0.map)(createToastModule, {
        createToast: 'options:{position:'
    });
}
function showToast(text, type) {
    var _window_toasts, _window_toastMaker;
    if (((_window_toasts = window.toasts) === null || _window_toasts === void 0 ? void 0 : _window_toasts.showToast) && ((_window_toastMaker = window.toastMaker) === null || _window_toastMaker === void 0 ? void 0 : _window_toastMaker.createToast)) {
        window.toasts.showToast(window.toastMaker.createToast(text, type));
    } else {
        fallbackToast(text, type);
    }
}


},
"./src/discord/flux/index.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var discord_webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");

/* export default */ const __rspack_default_export = ((0,discord_webpack__rspack_import_0.findByProps)('_dispatch'));


},
"./src/discord/react/index.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  jsx: () => (/* reexport safe */ _jsx_runtime__rspack_import_1.jsx),
  jsxs: () => (/* reexport safe */ _jsx_runtime__rspack_import_1.jsxs),
  useEffect: () => (useEffect),
  useState: () => (useState)
});
/* import */ var discord_webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");
/* import */ var _jsx_runtime__rspack_import_1 = __webpack_require__("./src/discord/react/jsx-runtime.ts");


var _findByProps = (0,discord_webpack__rspack_import_0.findByProps)('useState', 'useEffect'), useState = _findByProps.useState, useEffect = _findByProps.useEffect;



},
"./src/discord/react/jsx-runtime.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  jsx: () => (jsx),
  jsxs: () => (jsxs)
});
/* import */ var _webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");

var React = (0,_webpack__rspack_import_0.findByProps)('jsx');
var jsx = React.jsx, jsxs = React.jsxs;



},
"./src/discord/router/index.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useNavigate: () => (useNavigate)
});
/* import */ var discord_webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");

var useNavigate = (0,discord_webpack__rspack_import_0.findByCode)('useNavigate');


},
"./src/discord/stores/ApexExperimentStore.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ApexExperimentStore: () => (ApexExperimentStore)
});
/* import */ var discord_webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");

var ApexExperimentStore = (0,discord_webpack__rspack_import_0.findStoreByName)('ApexExperimentStore');



},
"./src/discord/stores/ApplicationStore.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ApplicationStore: () => (ApplicationStore)
});
/* import */ var discord_webpack__rspack_import_0 = __webpack_require__("./src/discord/webpack.ts");

var ApplicationStore = (0,discord_webpack__rspack_import_0.findStoreByName)('ApplicationStore');



},
"./src/discord/webpack.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WebpackFind: () => (WebpackFind),
  WebpackFindAll: () => (WebpackFindAll),
  findByCode: () => (findByCode),
  findByName: () => (findByName),
  findByPropChunk: () => (findByPropChunk),
  findByProps: () => (findByProps),
  findByPropsAll: () => (findByPropsAll),
  findChunkByCode: () => (findChunkByCode),
  findModuleByCode: () => (findModuleByCode),
  findStoreByName: () => (findStoreByName),
  map: () => (map),
  search: () => (search),
  wreq: () => (wreq)
});
/* import */ var _types_d_ts__rspack_import_0 = __webpack_require__("./src/types.d.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_reg_exp(re, groups, source) {
    _wrap_reg_exp = function(re, groups, source) {
        return new WrappedRegExp(re, undefined, groups, source);
    };
    var _super = RegExp.prototype;
    var _groups = new WeakMap();
    var _sources = new WeakMap();
    var _native_source = Object.getOwnPropertyDescriptor(_super, "source").get;
    function WrappedRegExp(re, flags, groups, source) {
        var _re = new RegExp(re, flags);
        _groups.set(_re, groups || _groups.get(re));
        _sources.set(_re, source !== undefined ? source : _sources.get(re));
        return _set_prototype_of(_re, WrappedRegExp.prototype);
    }
    _inherits(WrappedRegExp, RegExp);
    Object.defineProperty(WrappedRegExp.prototype, "source", {
        configurable: true,
        get: function() {
            var source = _sources.get(this);
            if (source !== undefined) {
                try {
                    new RegExp(source, this.flags);
                    return source;
                } catch (_) {}
            }
            return _native_source.call(this);
        }
    });
    WrappedRegExp.prototype.exec = function(str) {
        var result = _super.exec.call(this, str);
        if (result) {
            result.groups = buildGroups(result, this);
            var indices = result.indices;
            if (indices) indices.groups = buildGroups(indices, this);
        }
        return result;
    };
    WrappedRegExp.prototype[Symbol.replace] = function(str, substitution) {
        if (typeof substitution === "string") {
            var groups = _groups.get(this);
            return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
                var group = groups ? groups[name] : undefined;
                if (group === undefined) return "";
                return "$" + (Array.isArray(group) ? group.join("$") : group);
            }));
        }
        if (typeof substitution === "function") {
            var _this = this;
            return _super[Symbol.replace].call(this, str, function() {
                var args = arguments;
                if (typeof args[args.length - 1] !== "object") {
                    args = [].slice.call(args);
                    args.push(buildGroups(args, _this));
                }
                return substitution.apply(this, args);
            });
        }
        return _super[Symbol.replace].call(this, str, substitution);
    };
    function buildGroups(result, re) {
        var g = _groups.get(re);
        return Object.keys(g).reduce(function(groups, name) {
            var i = g[name];
            if (typeof i === "number") groups[name] = result[i];
            else {
                var k = 0;
                while(result[i[k]] === undefined && k + 1 < i.length)k++;
                groups[name] = result[i[k]];
            }
            return groups;
        }, Object.create(null));
    }
    return _wrap_reg_exp.apply(this, arguments);
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _window_webpackChunkdiscord_developers, _window, _window_webpackChunkdiscord_developers1, _window1;

var wreq = (_window = window) === null || _window === void 0 ? void 0 : (_window_webpackChunkdiscord_developers = _window.webpackChunkdiscord_developers) === null || _window_webpackChunkdiscord_developers === void 0 ? void 0 : _window_webpackChunkdiscord_developers.push([
    [
        Symbol()
    ],
    {},
    function(r) {
        return r;
    }
]);
(_window1 = window) === null || _window1 === void 0 ? void 0 : (_window_webpackChunkdiscord_developers1 = _window1.webpackChunkdiscord_developers) === null || _window_webpackChunkdiscord_developers1 === void 0 ? void 0 : _window_webpackChunkdiscord_developers1.pop();
var findChunkByCode = function findChunkByCode() {
    var _loop = function(i) {
        var _chunks_i = _sliced_to_array(chunks[i], 2), id = _chunks_i[0], func = _chunks_i[1];
        var chunkCode = func.toString();
        if (codes.every(function(code) {
            return chunkCode.includes(code);
        })) return {
            v: wreq(id)
        };
    };
    for(var _len = arguments.length, codes = new Array(_len), _key = 0; _key < _len; _key++){
        codes[_key] = arguments[_key];
    }
    var chunks = Object.entries(wreq.m);
    if (!wreq) return;
    for(var i = 0; i < chunks.length; i++){
        var _ret = _loop(i);
        if (_type_of(_ret) === "object") return _ret.v;
    }
    return void 0;
};
var findByPropChunk = function findByPropChunk(prop, chunks) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var chunk = _step.value;
            try {
                var exports = wreq(chunk);
                if (exports === null || exports === void 0 ? void 0 : exports[prop]) return exports;
            } catch (unused) {}
            return void 0;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
var cache = {
    'ConfirmModal:()=>': 4667
};
var findModuleByCode = function findModuleByCode() {
    for(var _len = arguments.length, codes = new Array(_len), _key = 0; _key < _len; _key++){
        codes[_key] = arguments[_key];
    }
    return _async_to_generator(function() {
        var tries, matches, check, cachedId, hit, i, hit1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    tries = 0;
                    matches = function matches(text) {
                        return codes.every(function(c) {
                            return text.includes(c);
                        });
                    };
                    check = function check(i) {
                        return _async_to_generator(function() {
                            var file, text;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        file = wreq.u(i);
                                        if (!file || file === 'undefined.js') return [
                                            2,
                                            [
                                                -9999999,
                                                []
                                            ]
                                        ];
                                        tries++;
                                        return [
                                            4,
                                            fetch('/assets/' + file).then(function(r) {
                                                return r.text();
                                            })
                                        ];
                                    case 1:
                                        text = _state.sent();
                                        return [
                                            2,
                                            matches(text) ? [
                                                i,
                                                _to_consumable_array(text.matchAll(_wrap_reg_exp(/(\d+)\(\s*\w+\s*,\s*\w+\s*,\s*\w+\)\s*{/g, {
                                                    chunkId: 1
                                                }, "(?<chunkId>\\d+)\\(\\s*\\w+\\s*,\\s*\\w+\\s*,\\s*\\w+\\)\\s*{"))).map(function(e) {
                                                    var _e_groups;
                                                    return (_e_groups = e.groups) === null || _e_groups === void 0 ? void 0 : _e_groups.chunkId;
                                                })
                                            ] : [
                                                -9999999,
                                                []
                                            ]
                                        ];
                                }
                            });
                        })();
                    };
                    // cached attempt first
                    cachedId = cache === null || cache === void 0 ? void 0 : cache[codes[0]];
                    if (!(cachedId !== undefined)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        check(cachedId)
                    ];
                case 1:
                    hit = _state.sent();
                    if (hit[0] !== -9999999) {
                        console.log('[wavecord] found module (cache), tries:', tries);
                        return [
                            2,
                            hit
                        ];
                    }
                    _state.label = 2;
                case 2:
                    i = 0;
                    _state.label = 3;
                case 3:
                    if (!(i < 999999)) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        check(i)
                    ];
                case 4:
                    hit1 = _state.sent();
                    if (hit1[0] !== -9999999) {
                        console.log('[wavecord] found module, tries:', tries);
                        return [
                            2,
                            hit1
                        ];
                    }
                    _state.label = 5;
                case 5:
                    i++;
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        2,
                        [
                            -9999999,
                            []
                        ]
                    ];
            }
        });
    })();
};
var search = function search() {
    var _loop = function(i) {
        var _chunks_i = _sliced_to_array(chunks[i], 2), func = _chunks_i[1];
        var chunkCode = func.toString();
        if (codes.every(function(code) {
            return chunkCode.includes(code);
        })) return {
            v: func.toString()
        };
    };
    for(var _len = arguments.length, codes = new Array(_len), _key = 0; _key < _len; _key++){
        codes[_key] = arguments[_key];
    }
    if (!wreq) return;
    var chunks = Object.entries(wreq.m);
    for(var i = 0; i < chunks.length; i++){
        var _ret = _loop(i);
        if (_type_of(_ret) === "object") return _ret.v;
    }
    return void 0;
};
var findByProps = function findByProps() {
    for(var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++){
        props[_key] = arguments[_key];
    }
    return(// @ts-expect-error i'm too lazy to fix type errors for this
    WebpackFind(function(m) {
        return props.every(function(x) {
            return x in (m || {});
        });
    }));
};
var findByPropsAll = function findByPropsAll() {
    for(var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++){
        props[_key] = arguments[_key];
    }
    return(// @ts-expect-error i'm too lazy to fix type errors for this
    WebpackFindAll(function(m) {
        return props.every(function(x) {
            return x in (m || {});
        });
    }));
};
var findByCode = function findByCode() {
    for(var _len = arguments.length, codes = new Array(_len), _key = 0; _key < _len; _key++){
        codes[_key] = arguments[_key];
    }
    return WebpackFind(function(m) {
        return typeof m === 'function' && codes.every(function(x) {
            return typeof x === 'string' ? m.toString().includes(x) : x.test(m.toString());
        });
    });
};
var findStoreByName = function findStoreByName(name) {
    return findByProps('getAll').getAll().find(function(e) {
        var _e_getName;
        return (e === null || e === void 0 ? void 0 : (_e_getName = e.getName) === null || _e_getName === void 0 ? void 0 : _e_getName.call(e)) === name;
    });
};
// vendetta support for components
var findByName = function findByName(name) {
    return WebpackFind(function(m) {
        var _m_default;
        if ((typeof m === "undefined" ? "undefined" : _type_of(m)) === 'object') return (m === null || m === void 0 ? void 0 : (_m_default = m.default) === null || _m_default === void 0 ? void 0 : _m_default.name) === name;
        return (m === null || m === void 0 ? void 0 : m.name) === name;
    });
};
// like vencord find
var WebpackFind = function WebpackFind() {
    for(var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++){
        filters[_key] = arguments[_key];
    }
    var _mods = wreq === null || wreq === void 0 ? void 0 : wreq.c;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var m = _step.value;
            try {
                var _loop = function(ex) {
                    // @ts-expect-error too lazy to fix these type errors.
                    var target = m.exports[ex];
                    if (target && filters.every(function(fn) {
                        return fn(target);
                    }) && // @ts-expect-error because we need to check bro
                    target[Symbol.toStringTag] !== 'IntlMessagesProxy') {
                        return {
                            v: target
                        };
                    }
                };
                if (!m.exports || m.exports === window) return "continue";
                // direct export match
                if (filters.every(function(fn) {
                    return fn(m.exports);
                })) {
                    return {
                        v: m.exports
                    };
                }
                // nested export match
                for(var ex in m.exports){
                    var _ret = _loop(ex);
                    if (_type_of(_ret) === "object") return {
                        v: _ret.v
                    };
                }
            } catch (unused) {}
        };
        for(var _iterator = Object.values(_mods)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _ret = _loop();
            if (_type_of(_ret) === "object") return _ret.v;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return void 0;
};
// like vencord find
var WebpackFindAll = function WebpackFindAll() {
    for(var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++){
        filters[_key] = arguments[_key];
    }
    var _mods = wreq === null || wreq === void 0 ? void 0 : wreq.c;
    var res = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var m = _step.value;
            try {
                var _loop = function(ex) {
                    // @ts-expect-error too lazy to fix these type errors.
                    var target = m.exports[ex];
                    if (target && filters.every(function(fn) {
                        return fn(target);
                    }) && // @ts-expect-error because we need to check bro
                    target[Symbol.toStringTag] !== 'IntlMessagesProxy') {
                        res.push(target);
                    }
                };
                if (!m.exports || m.exports === window) return "continue";
                // direct export match
                if (filters.every(function(fn) {
                    return fn(m.exports);
                })) {
                    res.push(m.exports);
                }
                // nested export match
                for(var ex in m.exports)_loop(ex);
            } catch (unused) {}
        };
        for(var _iterator = Object.values(_mods)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return res;
};
var map = function map(obj, mappings) {
    var result = {};
    for(var key in obj){
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(mappings)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var map = _step.value;
                var _obj_key_toString_includes, _obj_key_toString, _obj_key_toString1, _obj_key;
                if ((_obj_key = obj[key]) === null || _obj_key === void 0 ? void 0 : (_obj_key_toString1 = _obj_key.toString) === null || _obj_key_toString1 === void 0 ? void 0 : (_obj_key_toString = _obj_key_toString1.call(_obj_key)) === null || _obj_key_toString === void 0 ? void 0 : (_obj_key_toString_includes = _obj_key_toString.includes) === null || _obj_key_toString_includes === void 0 ? void 0 : _obj_key_toString_includes.call(_obj_key_toString, map[1])) result[map[0]] = obj[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return result;
};



},
"./src/index.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__rspack_load_async_deps, __rspack_async_done) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GridContainer: () => (GridContainer),
  getCurrentAppId: () => (getCurrentAppId),
  mainModalId: () => (mainModalId),
  nextStep: () => (nextStep),
  step: () => (step)
});
/* import */ var discord_react_jsx_runtime__rspack_import_0 = __webpack_require__("./src/discord/react/jsx-runtime.ts");
/* import */ var discord_stores_ApexExperimentStore__rspack_import_1 = __webpack_require__("./src/discord/stores/ApexExperimentStore.ts");
/* import */ var _discord_components__rspack_import_2 = __webpack_require__("./src/discord/components/index.ts");
/* import */ var discord_flux__rspack_import_3 = __webpack_require__("./src/discord/flux/index.ts");
/* import */ var steps_Oauth2Authorization__rspack_import_4 = __webpack_require__("./src/steps/Oauth2Authorization.tsx");
/* import */ var _constants__rspack_import_5 = __webpack_require__("./src/constants.ts");
/* import */ var steps_SocialSdkForm__rspack_import_6 = __webpack_require__("./src/steps/SocialSdkForm.tsx");
/* import */ var discord_components_components__rspack_import_7 = __webpack_require__("./src/discord/components/components.ts");
/* import */ var patchDataJson__rspack_import_8 = __webpack_require__("./src/patchDataJson.tsx");
var __rspack_async_deps = __rspack_load_async_deps([steps_SocialSdkForm__rspack_import_6, steps_Oauth2Authorization__rspack_import_4, patchDataJson__rspack_import_8]);
([steps_SocialSdkForm__rspack_import_6, steps_Oauth2Authorization__rspack_import_4, patchDataJson__rspack_import_8] = __rspack_async_deps.then ? (await __rspack_async_deps)() : __rspack_async_deps);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

/// <reference types="react" />








var mainModalId;
var step = _constants__rspack_import_5.SetupStep.SocialSdkForm;
var nextStep = function nextStep() {
    var showModal = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    step += 1;
                    _discord_components__rspack_import_2.Components.closeAllModals();
                    if (!showModal) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _discord_components__rspack_import_2.Components.openModal(SetupModal)
                    ];
                case 1:
                    mainModalId = _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    })();
};
var getCurrentAppId = function getCurrentAppId() {
    var _window_location_pathname_match;
    return (_window_location_pathname_match = window.location.pathname.match(/\/applications\/(\d+)/)) === null || _window_location_pathname_match === void 0 ? void 0 : _window_location_pathname_match[1];
};
discord_stores_ApexExperimentStore__rspack_import_1.ApexExperimentStore.createOverride('2026-03-widget-config-editor', 1);
function GridContainer(param) {
    var children = param.children;
    return /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)("div", {
        style: {
            display: 'grid',
            gap: '8px',
            gridTemplateColumns: 'repeat(2, 1fr)'
        },
        children: Array.isArray(children) ? children.map(function(child, i) {
            return /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)("div", {
                children: child
            }, i);
        }) : /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)("div", {
            children: children
        })
    });
}
function SetupModal(props) {
    var _Components_ConfirmModal;
    var currentAppId = getCurrentAppId();
    if (!currentAppId) return /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(_discord_components__rspack_import_2.Components.ExpressiveModal, _object_spread_props(_object_spread({}, props), {
        size: "lg",
        children: /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsxs)("div", {
            style: _constants__rspack_import_5.ModalPaddingStyle,
            children: [
                /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(_discord_components__rspack_import_2.Components.Text, {
                    variant: "text-lg/bold",
                    children: "Widgets v2 setupper userscript"
                }),
                /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(_discord_components__rspack_import_2.Components.Text, {
                    variant: "text",
                    children: "You don't have any app open, please open an app to begin the setup process."
                }),
                /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)("div", {
                    style: {
                        marginTop: '10px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    },
                    children: /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(_discord_components__rspack_import_2.Components.Button, {
                        onClick: function onClick() {
                            _discord_components__rspack_import_2.Components.closeModal(mainModalId);
                        },
                        text: 'Okay'
                    })
                })
            ]
        })
    }));
    if ((_Components_ConfirmModal = _discord_components__rspack_import_2.Components.ConfirmModal) === null || _Components_ConfirmModal === void 0 ? void 0 : _Components_ConfirmModal.toString().includes('throwErrorForNotFound')) {
        void (0,discord_components_components__rspack_import_7.tryAndLoadConfirmModal)();
        return /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(_discord_components__rspack_import_2.Components.ExpressiveModal, _object_spread_props(_object_spread({}, props), {
            size: "lg",
            children: /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: _constants__rspack_import_5.ModalPaddingStyle,
                children: [
                    /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(_discord_components__rspack_import_2.Components.Text, {
                        variant: "text-lg/bold",
                        children: "Widgets v2 setupper userscript"
                    }),
                    "Loading confirm modal, please wait..."
                ]
            })
        }));
    }
    discord_flux__rspack_import_3["default"].subscribe('CONFIRM_MODAL_MODULE_LOADED', function() {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _discord_components__rspack_import_2.Components.closeAllModals();
                        return [
                            4,
                            _discord_components__rspack_import_2.Components.openModal(SetupModal)
                        ];
                    case 1:
                        mainModalId = _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    });
    switch(step){
        case _constants__rspack_import_5.SetupStep.SocialSdkForm:
            return /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(steps_SocialSdkForm__rspack_import_6.SocialSdkFormStepModal, _object_spread({
                currentAppId: currentAppId
            }, props));
        case _constants__rspack_import_5.SetupStep.Oauth2Authorization:
            return /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(steps_Oauth2Authorization__rspack_import_4.Oauth2Authorization, _object_spread({
                currentAppId: currentAppId
            }, props));
        case _constants__rspack_import_5.SetupStep.AppIdentity:
        case _constants__rspack_import_5.SetupStep.Success:
        default:
            return null;
    }
}
discord_flux__rspack_import_3["default"].subscribe('APPLICATION_ROUTE_VIEWED', function(event) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!event.applicationId) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _discord_components__rspack_import_2.Components.openModal(SetupModal)
                    ];
                case 1:
                    mainModalId = _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    })();
});
discord_flux__rspack_import_3["default"].subscribe('SOCIAL_SDK_ENABLE_SUCCESS', function() {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // closes success modal
                    _discord_components__rspack_import_2.Components.closeAllModals();
                    step = _constants__rspack_import_5.SetupStep.Oauth2Authorization;
                    return [
                        4,
                        _discord_components__rspack_import_2.Components.openModal(SetupModal)
                    ];
                case 1:
                    mainModalId = _state.sent();
                    return [
                        2
                    ];
            }
        });
    })();
});
mainModalId = await _discord_components__rspack_import_2.Components.openModal(SetupModal);
(0,patchDataJson__rspack_import_8.patchDataModal)();

__rspack_async_done();
} catch(e) { __rspack_async_done(e); } }, 1);

},
"./src/patchDataJson.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__rspack_load_async_deps, __rspack_async_done) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  patchDataModal: () => (patchDataModal)
});
/* import */ var discord_react_jsx_runtime__rspack_import_0 = __webpack_require__("./src/discord/react/jsx-runtime.ts");
/* import */ var discord_components__rspack_import_1 = __webpack_require__("./src/discord/components/index.ts");
/* import */ var _discord_webpack__rspack_import_2 = __webpack_require__("./src/discord/webpack.ts");
/* import */ var discord_components_components__rspack_import_3 = __webpack_require__("./src/discord/components/components.ts");
/* import */ var index__rspack_import_4 = __webpack_require__("./src/index.tsx");
/* import */ var discord_api_appIdentity__rspack_import_5 = __webpack_require__("./src/discord/api/appIdentity.ts");
var __rspack_async_deps = __rspack_load_async_deps([index__rspack_import_4, discord_api_appIdentity__rspack_import_5]);
([index__rspack_import_4, discord_api_appIdentity__rspack_import_5] = __rspack_async_deps.then ? (await __rspack_async_deps)() : __rspack_async_deps);function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}






var alreadyPatched = false;
function patchDataModal() {
    var runtime = (0,_discord_webpack__rspack_import_2.findByProps)('jsx', 'jsxs');
    if (alreadyPatched) return;
    var originalJsxs = runtime.jsxs;
    function shouldPatch(props) {
        var _props_className_includes, _props_className;
        // only patches toolbar which has the generate json thing
        return (props === null || props === void 0 ? void 0 : (_props_className = props.className) === null || _props_className === void 0 ? void 0 : (_props_className_includes = _props_className.includes) === null || _props_className_includes === void 0 ? void 0 : _props_className_includes.call(_props_className, 'toolbar__')) && location.pathname.includes('/widget');
    }
    var issueAppIdentityCallback = function issueAppIdentityCallback() {
        var stores = (0,_discord_webpack__rspack_import_2.findByPropsAll)('getAfterRefresh', 'getRaw');
        var storeKey = function storeKey(applicationId) {
            return "widgetConfigSampleData_".concat(applicationId);
        };
        var currentAppId = (0,index__rspack_import_4.getCurrentAppId)();
        if (!currentAppId) return;
        var sampleData = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = stores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var store = _step.value;
                if (store.get(storeKey(currentAppId))) {
                    sampleData = JSON.parse(store.get(storeKey(currentAppId)) || '{}');
                    break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        console.log(currentAppId, sampleData);
        var body = {
            data: {}
        };
        if (sampleData.length > 0) {
            body.data.dynamic = sampleData.map(function(item) {
                return {
                    name: item.key,
                    type: discord_api_appIdentity__rspack_import_5.DataType[item.type],
                    value: item.type === 'media' ? {
                        url: prompt('HTTPS Url for ' + item.key) || ''
                    } : item.type === 'string' ? item.value : Number(item.value)
                };
            });
        }
        (0,discord_api_appIdentity__rspack_import_5.issueAppIdentity)(currentAppId, body).then(function(res) {
            return _async_to_generator(function() {
                var _, _tmp;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!!res.ok) return [
                                3,
                                2
                            ];
                            (0,discord_components__rspack_import_1.showToast)('Error: failed to issue app identity, check console for more info', discord_components__rspack_import_1.ToastType.FAILURE);
                            _ = console.error;
                            _tmp = [
                                'Error: failed to issue app identity, got:\n',
                                res.status,
                                '\n'
                            ];
                            return [
                                4,
                                res.text()
                            ];
                        case 1:
                            _.apply(console, _tmp.concat([
                                _state.sent()
                            ]));
                            _state.label = 2;
                        case 2:
                            if (res.ok) (0,discord_components__rspack_import_1.showToast)('🎉 Success, issued app identity. you can now add the widget to your own profile!', discord_components__rspack_import_1.ToastType.SUCCESS);
                            return [
                                2
                            ];
                    }
                });
            })();
        });
    };
    Object.defineProperty(runtime, 'jsxs', {
        value: function value(type, props) {
            var element = originalJsxs(type, props);
            if (!shouldPatch(props)) return element;
            return originalJsxs(type, _object_spread_props(_object_spread({}, props), {
                children: _to_consumable_array(props.children).concat([
                    /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(discord_components__rspack_import_1.Components.Button, {
                        variant: discord_components_components__rspack_import_3.ButtonVariant.SECONDARY,
                        size: "sm",
                        onClick: function onClick() {
                            return issueAppIdentityCallback();
                        },
                        text: 'Issue app identity'
                    })
                ])
            }));
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    alreadyPatched = true;
}

__rspack_async_done();
} catch(e) { __rspack_async_done(e); } });

},
"./src/steps/Oauth2Authorization.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__rspack_load_async_deps, __rspack_async_done) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Oauth2Authorization: () => (Oauth2Authorization),
  botToken: () => (botToken)
});
/* import */ var discord_react_jsx_runtime__rspack_import_0 = __webpack_require__("./src/discord/react/jsx-runtime.ts");
/* import */ var _discord_components__rspack_import_1 = __webpack_require__("./src/discord/components/index.ts");
/* import */ var ___rspack_import_2 = __webpack_require__("./src/index.tsx");
/* import */ var react__rspack_import_3 = __webpack_require__("./src/discord/react/index.ts");
/* import */ var discord_flux__rspack_import_4 = __webpack_require__("./src/discord/flux/index.ts");
/* import */ var discord_api_bots__rspack_import_5 = __webpack_require__("./src/discord/api/bots.ts");
/* import */ var discord_stores_ApplicationStore__rspack_import_6 = __webpack_require__("./src/discord/stores/ApplicationStore.ts");
/* import */ var discord_api_RestAPI__rspack_import_7 = __webpack_require__("./src/discord/api/RestAPI.ts");
/* import */ var discord_api_oauth2__rspack_import_8 = __webpack_require__("./src/discord/api/oauth2.ts");
/* import */ var discord_router__rspack_import_9 = __webpack_require__("./src/discord/router/index.ts");
/* import */ var _patchDataJson__rspack_import_10 = __webpack_require__("./src/patchDataJson.tsx");
var __rspack_async_deps = __rspack_load_async_deps([___rspack_import_2, _patchDataJson__rspack_import_10]);
([___rspack_import_2, _patchDataJson__rspack_import_10] = __rspack_async_deps.then ? (await __rspack_async_deps)() : __rspack_async_deps);function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

/// <reference types="react" />










var botToken;
var clientSecret;
var clientId;
// this doesnt matter
// as long as the redirect uri is the same origin as devportal
// so we can get `code` param from url
var redirect_uri = "".concat(location.origin, "/non_existent_path");
function authorizeBot(clientId) {
    var url = "https://".concat(location.hostname, "/oauth2/authorize?client_id=").concat(clientId, "&response_type=code&redirect_uri=").concat(redirect_uri, "&scope=sdk.social_layer");
    var oauth2Window = window.open(url, '', 'popup');
    var interval = setInterval(function() {
        var search = new URLSearchParams(oauth2Window === null || oauth2Window === void 0 ? void 0 : oauth2Window.location.search);
        if (search.get('code')) {
            console.warn('got code');
            (0,discord_api_oauth2__rspack_import_8.exchangeOauth2Code)(clientId, clientSecret, search.get('code'), redirect_uri).then(function(x) {
                discord_flux__rspack_import_4["default"].dispatch({
                    type: 'WIDGETS_USERSCRIPT_AUTHORIZED_BOT_SUCCESS'
                });
            }).catch(function(x) {
                discord_flux__rspack_import_4["default"].dispatch({
                    type: 'WIDGETS_USERSCRIPT_AUTHORIZED_BOT_ERROR'
                });
            });
            oauth2Window === null || oauth2Window === void 0 ? void 0 : oauth2Window.close();
            clearInterval(interval);
        }
    }, 500);
}
var step = 0;
var reopen = function reopen(currentAppId) {
    _discord_components__rspack_import_1.Components.closeAllModals();
    _discord_components__rspack_import_1.Components.openModal(function(props) {
        return /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(Oauth2Authorization, _object_spread_props(_object_spread({}, props), {
            currentAppId: currentAppId
        }));
    });
};
function Oauth2Authorization(props) {
    var _useState = _sliced_to_array((0,react__rspack_import_3.useState)(step), 2), realStep = _useState[0], setRealStep = _useState[1];
    var setStep = function setStep(newStep) {
        step = newStep;
        setRealStep(step);
    };
    var navigate = (0,discord_router__rspack_import_9.useNavigate)();
    var StepsSubtitles = {
        0: 'This step will reset your app token & client secret. please only continue if you wish to reset them. this is required in order to exchange the oauth2 code and issue an app identity.',
        1: 'Adding redirect uri...',
        100: 'Failed to add redirect uri, please check devtools console for more info.',
        2: 'Getting token & client secret...',
        3: 'Please authorize the bot so you can continue...',
        4: "Great, now all is left for you is to customize your widget and issue an app identity. don't worry, this is very easy!",
        300: 'Failed to exchange oauth2 code, please check devtools console for more info.'
    };
    (0,react__rspack_import_3.useEffect)(function() {
        var app = discord_stores_ApplicationStore__rspack_import_6.ApplicationStore.getApplication(props.currentAppId);
        if (!app) return;
        if (!clientId) clientId = app.id;
    });
    (0,react__rspack_import_3.useEffect)(function() {
        if (realStep === 1) {
            var app = discord_stores_ApplicationStore__rspack_import_6.ApplicationStore.getApplication(props.currentAppId);
            if (!app) return;
            clientId = app.id;
            discord_api_RestAPI__rspack_import_7.RestAPI.patch({
                url: '/applications/'.concat(props.currentAppId),
                body: {
                    flags: String(app.flags),
                    redirect_uris: _to_consumable_array(new Set(_to_consumable_array(app.redirect_uris).concat([
                        redirect_uri
                    ]))),
                    rpc_origins: []
                }
            }).then(function(res) {
                if (res.ok) {
                    if (!botToken && !clientSecret) setStep(2);
                    if (botToken && clientSecret) setStep(3);
                }
                if (!res.ok) {
                    setStep(100);
                    console.error('failed to add redirect uri', res);
                }
            });
        }
        if (realStep === 2) {
            (0,discord_api_bots__rspack_import_5.resetBotSecret)(props.currentAppId);
        }
    }, [
        realStep
    ]);
    (0,react__rspack_import_3.useEffect)(function() {
        if (realStep < 3 && botToken && clientSecret) {
            setStep(3);
        }
    }, [
        botToken,
        clientSecret,
        realStep
    ]);
    (0,react__rspack_import_3.useEffect)(function() {
        discord_flux__rspack_import_4["default"].subscribe('WIDGETS_USERSCRIPT_AUTHORIZED_BOT_SUCCESS', function(event) {
            console.log('authorized successfully');
            if (step === 3) setStep(4);
        });
        discord_flux__rspack_import_4["default"].subscribe('WIDGETS_USERSCRIPT_AUTHORIZED_BOT_ERROR', function(event) {
            setStep(300);
        });
        discord_flux__rspack_import_4["default"].subscribe('APPLICATION_RESET_BOT_TOKEN_SUCCESS', function(event) {
            if (event.appId === props.currentAppId) botToken = event.token;
            if (botToken && clientSecret) setStep(3);
        });
        discord_flux__rspack_import_4["default"].subscribe('APPLICATION_RESET_SECRET_SUCCESS', function(event) {
            if (event.appId === props.currentAppId) {
                clientSecret = event.secret;
                if (!botToken) (0,discord_api_bots__rspack_import_5.resetBotToken)(props.currentAppId);
                if (botToken && clientSecret) setStep(3);
            }
        });
    }, []);
    return /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(_discord_components__rspack_import_1.Components.ConfirmModal, _object_spread_props(_object_spread({
        title: 'Widgets v2 setup userscript - Oauth2 Authorization step',
        subtitle: StepsSubtitles[realStep] || '',
        onCancel: function onCancel() {
            (0,_discord_components__rspack_import_1.showToast)('canceled!', _discord_components__rspack_import_1.ToastType.SUCCESS);
            if (___rspack_import_2.mainModalId) _discord_components__rspack_import_1.Components.closeModal(___rspack_import_2.mainModalId);
        },
        onConfirm: function onConfirm() {
            if (realStep === 0) setStep(1);
            if (realStep === 3) authorizeBot(clientId);
            if (realStep === 4) {
                _discord_components__rspack_import_1.Components.closeAllModals();
                navigate("/applications/".concat(props.currentAppId, "/widget"));
            }
            if (realStep !== 4) return reopen(props.currentAppId);
            if (realStep === 4) return (0,_patchDataJson__rspack_import_10.patchDataModal)();
        }
    }, props), {
        size: "lg",
        children: /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)("p", {
                    style: {
                        color: botToken ? '#3ba55c' : '#faa61a',
                        fontWeight: 600,
                        display: realStep > 2 ? 'block' : 'none'
                    },
                    children: '✓ Added redirect uri'
                }),
                /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)("p", {
                    style: {
                        color: botToken ? '#3ba55c' : '#faa61a',
                        fontWeight: 600,
                        display: realStep > 2 ? 'block' : 'none'
                    },
                    children: botToken ? '✓ Got token' : '⟳ Getting token...'
                }),
                /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)("p", {
                    style: {
                        color: clientSecret ? '#3ba55c' : '#faa61a',
                        fontWeight: 600,
                        display: realStep > 2 ? 'block' : 'none'
                    },
                    children: botToken ? '✓ Got client secret' : '⟳ Getting client secret...'
                })
            ]
        })
    }));
}

__rspack_async_done();
} catch(e) { __rspack_async_done(e); } });

},
"./src/steps/SocialSdkForm.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__rspack_load_async_deps, __rspack_async_done) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SocialSdkFormStepModal: () => (SocialSdkFormStepModal)
});
/* import */ var discord_react_jsx_runtime__rspack_import_0 = __webpack_require__("./src/discord/react/jsx-runtime.ts");
/* import */ var discord_router__rspack_import_1 = __webpack_require__("./src/discord/router/index.ts");
/* import */ var _discord_components__rspack_import_2 = __webpack_require__("./src/discord/components/index.ts");
/* import */ var ___rspack_import_3 = __webpack_require__("./src/index.tsx");
/* import */ var discord_stores_ApplicationStore__rspack_import_4 = __webpack_require__("./src/discord/stores/ApplicationStore.ts");
var __rspack_async_deps = __rspack_load_async_deps([___rspack_import_3]);
___rspack_import_3 = (__rspack_async_deps.then ? (await __rspack_async_deps)() : __rspack_async_deps)[0];function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

/// <reference types="react" />




function SocialSdkFormStepModal(props) {
    var navigate = (0,discord_router__rspack_import_1.useNavigate)();
    var app = discord_stores_ApplicationStore__rspack_import_4.ApplicationStore.getApplication(props.currentAppId);
    var SOCIAL_LAYER_INTEGRATION_LIMITED = 1 << 10;
    if (!app) return;
    // check if social sdk already enabled
    var hasEnabledSocialSdk = (SOCIAL_LAYER_INTEGRATION_LIMITED & (app === null || app === void 0 ? void 0 : app.flags)) !== 0;
    return /*#__PURE__*/ (0,discord_react_jsx_runtime__rspack_import_0.jsx)(_discord_components__rspack_import_2.Components.ConfirmModal, _object_spread_props(_object_spread({
        title: 'Widgets v2 setup userscript - Social sdk form step',
        subtitle: hasEnabledSocialSdk ? "It looks like you already filled the social sdk form for this app. that means you won't have to redo it." : "You'll have to first fill the social sdk form with anything, then authorize the app, this script auto manages all of the oauth2 stuff etc.",
        confirmText: hasEnabledSocialSdk ? 'Continue' : 'Open Social SDK form',
        onCancel: function onCancel() {
            (0,_discord_components__rspack_import_2.showToast)('canceled!', _discord_components__rspack_import_2.ToastType.SUCCESS);
            if (___rspack_import_3.mainModalId) _discord_components__rspack_import_2.Components.closeModal(___rspack_import_3.mainModalId);
        },
        onConfirm: function onConfirm() {
            if (hasEnabledSocialSdk) {
                return (0,___rspack_import_3.nextStep)(true);
            }
            (0,_discord_components__rspack_import_2.showToast)('Opening social sdk form...', _discord_components__rspack_import_2.ToastType.MESSAGE);
            navigate("/applications/".concat(props.currentAppId, "/social-sdk/getting-started"));
            setTimeout(function() {
                (0,_discord_components__rspack_import_2.showToast)('Opened social sdk form', _discord_components__rspack_import_2.ToastType.MESSAGE);
            }, 500);
            _discord_components__rspack_import_2.Components.closeModal(___rspack_import_3.mainModalId);
        }
    }, props), {
        size: "lg"
    }));
}

__rspack_async_done();
} catch(e) { __rspack_async_done(e); } });

},
"./src/types.d.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);



},
"./src/utils/errors.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  throwErrorForNotFound: () => (throwErrorForNotFound)
});
function throwErrorForNotFound(name) {
    throw new Error("did not find ".concat(name, " from webpack, please notify wavedev.js"));
}


},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// webpack/runtime/async_module
(() => {
var hasSymbol = typeof Symbol === "function";
var rspackQueues = hasSymbol ? Symbol("rspack queues") : "__rspack_queues";
var rspackExports = __webpack_require__.aE = hasSymbol ? Symbol("rspack exports") : "__webpack_exports__";
var rspackError = hasSymbol ? Symbol("rspack error") : "__rspack_error";
var rspackDone = hasSymbol ? Symbol("rspack done") : "__rspack_done";
var rspackDefer = __webpack_require__.zS = hasSymbol ? Symbol("rspack defer") : "__rspack_defer";
__webpack_require__.zT = (asyncDeps) => {
	var hasUnresolvedAsyncSubgraph = asyncDeps.some((id) => {
		var cache = __webpack_module_cache__[id];
		return !cache || cache[rspackDone] === false;
	});
	if (hasUnresolvedAsyncSubgraph) {
		return ({ then(onFulfilled, onRejected) { return Promise.all(asyncDeps.map(__webpack_require__)).then(onFulfilled, onRejected) } });
	}
}
var resolveQueue = (queue) => {
	if (queue && queue.d < 1) {
		queue.d = 1;
    	queue.forEach((fn) => (fn.r--));
		queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
	}
}
var wrapDeps = (deps) => {
	return deps.map((dep) => {
		if (dep !== null && typeof dep === "object") {
			if(!dep[rspackQueues] && dep[rspackDefer]) {
				var asyncDeps = __webpack_require__.zT(dep[rspackDefer]);
				if (asyncDeps) {
					var d = dep;
					dep = {
						then(onFulfilled, onRejected) {
							asyncDeps.then(() => (onFulfilled(d)), onRejected);
						}
					};
				} else return dep;
			}
			if (dep[rspackQueues]) return dep;
			if (dep.then) {
				var queue = [];
				queue.d = 0;
				dep.then((r) => {
					obj[rspackExports] = r;
					resolveQueue(queue);
				},(e) => {
					obj[rspackError] = e;
					resolveQueue(queue);
				});
				var obj = {};
				obj[rspackDefer] = false;
				obj[rspackQueues] = (fn) => (fn(queue));
				return obj;
			}
		}
		var ret = {};
		ret[rspackQueues] = () => {};
		ret[rspackExports] = dep;
		return ret;
	});
};
__webpack_require__.a = (module, body, hasAwait) => {
	var queue;
	hasAwait && ((queue = []).d = -1);
	var depQueues = new Set();
	var exports = module.exports;
	var currentDeps;
	var outerResolve;
	var reject;
	var promise = new Promise((resolve, rej) => {
		reject = rej;
		outerResolve = resolve;
	});
	promise[rspackExports] = exports;
	promise[rspackQueues] = (fn) => { queue && fn(queue), depQueues.forEach(fn), promise["catch"](() => {}); };
	module.exports = promise;
	var handle = (deps) => {
		currentDeps = wrapDeps(deps);
		var fn;
		var getResult = () => {
			return currentDeps.map((d) => {
				if(d[rspackDefer]) return d;
				if (d[rspackError]) throw d[rspackError];
				return d[rspackExports];
			});
		}
		var promise = new Promise((resolve) => {
			fn = () => (resolve(getResult));
			fn.r = 0;
			var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
			currentDeps.map((dep) => (dep[rspackDefer] || dep[rspackQueues](fnQueue)));
		});
		return fn.r ? promise : getResult();
	};
	var done = (err) => ((err ? reject(promise[rspackError] = err) : outerResolve(exports)), resolveQueue(queue), promise[rspackDone] = true);
	body(handle, done);
	queue && queue.d < 0 && (queue.d = 0);
};
})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// startup
// Load entry module and return exports
// This entry module is referenced by other modules so it can't be inlined
var __webpack_exports__ = __webpack_require__("./src/index.tsx");
})()
;
//# sourceMappingURL=main.js.map
