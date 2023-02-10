import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/ExampleStack"

export default {
  config(_input) {
    return {
      name: "eventbus",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ExampleStack)
  },
} satisfies SSTConfig;
