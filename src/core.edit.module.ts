import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { IViewModelBinder } from "@paperbits/common/widgets";
import { VideoPlayerEditorModule } from "./video-player/ko/videoPlayerEditor.module";
import { PictureEditorModule } from "./picture/ko/pictureEditor.module";
import { YoutubePlayerEditorModule } from "./youtube-player/ko/youtubePlayerEditor.module";
import { NavbarEditorModule } from "./navbar/ko/navbarEditor.module";

export class CoreEditModule implements IInjectorModule {
    constructor(
        private modelBinders:any,
        private viewModelBinders:Array<IViewModelBinder<any, any>>,
    ) { }

    register(injector: IInjector): void {
        injector.bindModule(new NavbarEditorModule(this.modelBinders, this.viewModelBinders));
        injector.bindModule(new PictureEditorModule(this.modelBinders, this.viewModelBinders));
        injector.bindModule(new VideoPlayerEditorModule(this.modelBinders, this.viewModelBinders));
        injector.bindModule(new YoutubePlayerEditorModule(this.modelBinders, this.viewModelBinders));
    }
}