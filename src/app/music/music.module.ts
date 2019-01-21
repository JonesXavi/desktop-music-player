// Third party imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// PrimeNG autocomplete fro search
import { AutoCompleteModule } from 'primeng/autocomplete';

// Custom imports
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicService } from './shared/music.service';
import { ApiService } from './shared/api.service';

@NgModule({
    declarations: [
        MusicSearchComponent,
        MusicFooterComponent,
        MusicDetailsComponent,
        MusicPlayerComponent,
        MusicProgressComponent
    ],
    imports: [
        FormsModule,
        AutoCompleteModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        MusicSearchComponent,
        MusicDetailsComponent,
        MusicPlayerComponent,
        MusicProgressComponent,
        MusicFooterComponent
    ],
    providers: [
        ApiService,
        MusicService
    ],
})
export class MusicModule { }
