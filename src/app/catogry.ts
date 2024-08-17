export interface catogry {
    results:  number;
    metadata: Metadata;
    data:     DatOfCatogry[];
}

export interface DatOfCatogry {
    _id:       string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Metadata {
    currentPage:   number;
    numberOfPages: number;
    limit:         number;
}
