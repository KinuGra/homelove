import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({ region: "us-west-2" });

const invokeModelFromInput = async (inputText) => {
  const prompt = `頑張った文章から褒めた文章を作成して。具体的には、「${inputText}」といった感じに対して、若くて優しく彼女として、4行以内で女の子らしい応援メッセージを作成して`;

  const params = {
    modelId: "anthropic.claude-3-haiku-20240307-v1:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt }
          ]
        }
      ]
    }),
  };

  try {
    const command = new InvokeModelCommand(params);
    const response = await client.send(command);
    const textDecoder = new TextDecoder("utf-8");
    const responseBodyText = textDecoder.decode(response.body);
    const responseBody = JSON.parse(responseBodyText);
    const responseText = responseBody.content[0].text;
    console.log("Response Text:", responseText);
  } catch (error) {
    console.error("Error invoking model:", error);
  }
};

// 他の場所から関数呼び出し
invokeModelFromInput("今日は30分英語を勉強したよ");
