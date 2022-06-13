import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vdo-player',
  templateUrl: './vdo-player.component.html',
  styleUrls: ['./vdo-player.component.css']
})
export class VdoPlayerComponent implements OnInit {
  // videoItems = [
  //   {
  //     name: 'Video one',
  //     src: 'http://static.videogular.com/assets/videos/videogular.mp4',
  //     type: 'video/mp4'
  //   },
  //   {
  //     name: 'Video two',
  //     src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
  //     type: 'video/mp4'
  //   },
  //   {
  //     name: 'Video three',
  //     src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
  //     type: 'video/mp4'
  //   }
  // ];
  // activeIndex = 0;
  // currentVideo = this.videoItems[this.activeIndex];
  @Input() currentVideo: any;
  @Input() videoItems: any = [];
  @Input() isVideoList: boolean = false;
  activeIndex: number = 0;
  data: any;
  constructor() {
   }
  ngOnInit(): void {
    this.activeIndex = 0;
    if (this.isVideoList) {
      this.currentVideo = this.videoItems[this.activeIndex];
    }
  }
  videoPlayerInit(data: any) {
    this.data = data;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    // this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
  // nextVideo() {
  //   this.activeIndex++;
  //   if (this.activeIndex === this.videoItems.length) {
  //     this.activeIndex = 0;
  //   }
  //   this.currentVideo = this.videoItems[this.activeIndex];
  // }
  nextVideo() {
    if (this.isVideoList) {
      this.activeIndex++;
      if (this.activeIndex === this.videoItems.length) {
        this.activeIndex = 0;
      }
      this.currentVideo = this.videoItems[this.activeIndex];
    } else {
      this.currentVideo = this.currentVideo;
    }

  }
  initVdo() {
    this.data.play();
  }
  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }

}
