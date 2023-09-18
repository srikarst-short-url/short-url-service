import mongoose from "mongoose";

interface LongToShortDoc extends mongoose.Document {
  shortURL: string;
  longURL: string;
}

interface LongToShortAttrs {
  shortURL: string;
  longURL: string;
}

interface LongToShortModel extends mongoose.Model<LongToShortDoc> {
  build(attrs: LongToShortAttrs): LongToShortDoc;
}

const longToShortSchema = new mongoose.Schema(
  {
    shortURL: {
      type: String,
      required: true,
    },
    longURL: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

longToShortSchema.statics.build = (attrs: LongToShortAttrs) => {
  return new LongToShort(attrs);
};

const LongToShort = mongoose.model<LongToShortDoc, LongToShortModel>(
  "LongToShort",
  longToShortSchema
);

export { LongToShort };
