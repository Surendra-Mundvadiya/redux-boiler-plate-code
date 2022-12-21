// Generating All Constants for Sagas and Reducers.

const default_reducers = ["load", "success", "error", "unload"];
const default_reducer_prefix = "REDUCERS";
const default_saga_prefix = "SAGAS";

function generateConsts(type) {
    switch (type) {
        case "counter":
            return {
                reducers: default_reducers,
                actions: ["increment", "decrement"],
                name: "COUNTER",
            };
        default:
            return {
                reducers: default_reducers,
                actions: [],
                name: "",
            };
    }
}

export default function constants(type) {
    const consts = {
        reducers: {},
        sagas: {},
    };

    const genConsts = generateConsts(type);

    for (let i in genConsts.actions) {
        if (!consts.sagas[genConsts.actions[i]]) {
            consts.sagas[genConsts.actions[i]] = {};
        }
        consts.sagas[
            genConsts.actions[i]
        ] = `${type}/${default_saga_prefix}/${genConsts.actions[i]}`;
        for (let j in genConsts.reducers) {
            if (!consts.reducers[genConsts.actions[i]]) {
                consts.reducers[genConsts.actions[i]] = {};
            }
            consts.reducers[genConsts.actions[i]][
                genConsts.reducers[j]
            ] = `${type}/${default_reducer_prefix}/${genConsts.actions[i]}/${genConsts.reducers[j]}`;
        }
    }

    return consts;
}
