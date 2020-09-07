module.exports = {
    multipleMongoseToObject: function (mongoses) {
        return mongoses.map((mongose) => mongose.toObject());
    },

    mongoseToObject: function (mongose) {
        return mongose ? mongose.toObject() : mongose;
    },
};
