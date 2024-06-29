// dbConfig.js
import conf from '../conf'
import { Client, Databases } from 'appwrite'

export class DBService {
    client = new Client()
    databases

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createNewChat({ id, title, content, userId }) {
        try {
            let serializedContent;
            if (typeof content == "array" || "object") {

                serializedContent = JSON.stringify(content);
            }
            serializedContent = content
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
                {
                    id,
                    title,
                    content: serializedContent,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite databaseService error in createNewChat: " + error)
            return false
        }
    }

    async sendMsg(id, { content }) {
        try {
            let serializedContent;
            if (typeof content == "array" || "object") {

                serializedContent = JSON.stringify(content);
            }
            serializedContent = content
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
                {
                    content: serializedContent,
                }
            )
        } catch (error) {
            console.log("Appwrite databaseService error in sendMsg: " + error)
            return false
        }
    }

    async deleteChat(id) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
            )
            return true
        } catch (error) {
            console.log("Appwrite databaseService error in deleteChat: " + error)
            return false
        }
    }

    async getChats(queries) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite databaseService error in getChats: " + error)
            return false
        }
    }
}

const dbService = new DBService()
export default dbService
