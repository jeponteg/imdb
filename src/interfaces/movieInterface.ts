export interface Movies {
    items:        Contents[];
    errorMessage: string;
}

export interface Contents {
    id:              string;
    rank:            string;
    title:           string;
    fullTitle:       string;
    year:            string;
    image:           string;
    crew:            string;
    imDbRating:      string;
    imDbRatingCount: string;
}

export interface Video {
    imDbId:           string;
    title:            string;
    fullTitle:        string;
    type:             string;
    year:             string;
    videoId:          string;
    videoTitle:       string;
    videoDescription: string;
    thumbnailUrl:     string;
    uploadDate:       null;
    link:             string;
    linkEmbed:        string;
    errorMessage:     string;
}
