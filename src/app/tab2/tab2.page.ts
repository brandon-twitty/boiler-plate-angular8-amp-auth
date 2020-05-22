import { Component } from '@angular/core';
import {Plugins, CameraResultType} from '@capacitor/core';
const { Camera } = Plugins;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  async takePicture() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri
    });
    console.log(image);
  }
}
