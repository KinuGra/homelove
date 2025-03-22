import React from "react";

function NextPage({ setPage, setSelectedImage }) {
  const characterImages = [
    { src: "/img/c1.png", name: "リリア" },
    { src: "/img/c2.png", name: "つくよみちゃん" },
    { src: "/img/c3.png", name: "あやね" },
  ];

  const handleCharacterClick = (character) => {
    const confirmed = window.confirm(`${character.name}でいいですか？`);
    if (confirmed) {
      if (character.name === "リリア") {
        alert("選んでくれてありがとう！");
      } else if (character.name === "つくよみちゃん") {
        alert("わ、わたしでいいの・・？");
      } else if (character.name === "あやね") {
        alert("私がいいの？ふーん・・・");
      } else {
        alert(`${character.name} が選ばれました！`);
      }

      setSelectedImage(character.src); // 🌟 選ばれた画像に更新！
      setPage("home");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>キャラクターを選んでね🌟</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {characterImages.map((chara, index) => (
          <div
            key={index}
            style={{ cursor: "pointer", textAlign: "center" }}
            onClick={() => handleCharacterClick(chara)}
          >
            <img
              src={chara.src}
              alt={chara.name}
              style={{
                height: "300px",
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p>{chara.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NextPage;
