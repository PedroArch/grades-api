export default (mongoose) => {
  const Schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });
  const gradesModel = mongoose.model("grades", schema, "grades");

  return gradesModel;
};
