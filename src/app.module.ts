import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";
import { GlobalServices } from "./services/global.service";

@Module({
  declarations: [AppController],
  imports: [RouterModule.forRoot(routes)],
  providers: [
	  GlobalServices
  ],
  bootstrap: AppController,
})
export class AppModule {}