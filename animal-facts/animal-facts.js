import { findById } from "../utils.js";
import { animals } from "../data.js";

const params = new URLSearchParams(window.location.search);

const animal = findById(params.get('id'), animals);