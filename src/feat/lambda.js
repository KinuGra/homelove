export async function saveToDynamoDB(activity) {
  const url = "https://x277ucwfldccfj47exdyqf22oq0rxovk.lambda-url.us-west-2.on.aws/put";
  
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(activity)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Activity saved:", result);
  } catch (error) {
    console.error("Error saving activity:", error);
  }
}