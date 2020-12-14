"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const subset_sum = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let input;
    try {
        const file = yield promises_1.default.readFile("./input.txt", {
            encoding: "utf-8"
        });
        input = (_b = (_a = file === null || file === void 0 ? void 0 : file.match(/[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map((v) => +v)) !== null && _b !== void 0 ? _b : [];
    }
    catch (_) {
        return;
    }
    stop: for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length - i; j++) {
            if (input[i] + input[i + j] === 2020) {
                console.log(input[i], " + ", input[i + j], " = ", input[i] + input[i + j]);
                console.log(input[i], " * ", input[i + j], " = ", input[i] * input[i + j]);
                break stop;
            }
        }
    }
});
subset_sum();
