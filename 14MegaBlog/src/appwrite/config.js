import conf from "../conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    database;
    bucket;

    constructor() {
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuresImage, 
        status, userId}){
            try {
                return await this.database.createDocument(
                 conf.appwriteDatabaseId,
                 conf.appwriteCollectionId,
                 slug,
                 {
                    title,
                    content,
                    featuresImage,
                    status,
                    userId,
                 }
                )
                
            } catch (error) {
                console.log("Appwrite service :: createPost :: error", error)
            }
        }

        async createPost(slug, {title, content, featuresImage, 
            status, }){
                try{

                } catch (error) {
                    console.log("Appwrite servive :: updatePost :: error", error);
                }
            }

}

const service = new Service()
export default service