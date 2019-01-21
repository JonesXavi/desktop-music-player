import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-music-search',
    templateUrl: './music-search.component.html',
    styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

    track: string;
    @Input() tracks: any[];

    @Output() update = new EventEmitter();
    @Output() query = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    search(event) {
        this.query.emit(event.query);
    }

    select(track) {
        this.update.emit(track);
    }
}
