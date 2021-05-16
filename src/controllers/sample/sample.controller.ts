import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Controller } from "@mayajs/core";
import { GlobalServices } from "../../services/global.service";
import { SampleServices } from "./sample.service";

@Controller()
export class SampleController {
  ron = "";
  constructor(
    private service: SampleServices,
    private global: GlobalServices
  ) {}
  getall() {
    this.global.ron;
    this.service.test();

    return this.getspecific();
  }

  getspecific() {
    this.ron = "Ron";
    return "getspecific";
  }
}
