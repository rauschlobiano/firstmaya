import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Controller } from "@mayajs/core";
import { GlobalServices } from "../../services/global.service";

@Controller()
export class RonController {
  constructor(private global:GlobalServices) {

  }
  testron() {
	  this.global.ron
  }
  
}