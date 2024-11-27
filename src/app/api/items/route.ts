import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("testdb");

  const result = await db.collection("items").insertOne(body);

  return new Response(JSON.stringify(result), { status: 201 });
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, newName } = body;

    if (!id || !newName) {
      return new Response(JSON.stringify({ error: "Missing id or newName" }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db("testdb");

    const result = await db.collection("items").updateOne(
      { _id: new ObjectId(id) }, // Convert the ID to MongoDB ObjectId
      { $set: { name: newName } }
    );

    if (result.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ error: "Item not found or name unchanged" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Item updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify([{_id: "123", name: "test"}]), { status: 200 });
  const client = await clientPromise;
  const db = client.db("testdb");

  const items = await db.collection("items").find({}).toArray();

  return new Response(JSON.stringify(items), { status: 200 });
}
