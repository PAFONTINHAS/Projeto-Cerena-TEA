export interface BlogArticle{

    title:String;
    readingTime:String;
    summary:String;
    content:Paragraph[]
}

interface Paragraph{
    subTitle?:string;
    text:string;
}