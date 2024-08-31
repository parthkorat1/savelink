import Link from "@/model/link";
import { connect } from "@/lib/mongo";
import { NextResponse } from "next/server";


connect()

export async function POST(request) {

    try {

        const reqBody = await request.json()
        const { title , link , description } = reqBody;

        const newLink = new Link({ title, link, description });
        await newLink.save();

        return NextResponse.json(newLink);
        
    } catch (error) {
        console.log("Error while save link: " + error);
        
    }
}