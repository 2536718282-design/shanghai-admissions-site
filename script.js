const highschoolRanks = [
  {
    name: "上海市上海中学",
    district: "徐汇 / 浦东招生样本",
    type: "市实验性示范性",
    typeKey: "city",
    score: 710,
    summary: "上海顶尖高中之一，学术竞争强，适合综合能力稳定、目标头部高校的学生。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 710。",
      优势方向: "理科、综合学术能力、竞赛与拔尖创新培养。",
      家庭关注: "适合强学术取向家庭，需要提前评估校内节奏与心理承压能力。",
    },
  },
  {
    name: "复旦大学附属中学",
    district: "杨浦 / 浦东招生样本",
    type: "市实验性示范性",
    typeKey: "city",
    score: 710,
    summary: "依托复旦文化氛围，重视综合素养和学术潜力，升学出口强。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 710。",
      优势方向: "人文与理科并重，综合评价、强基和高水平大学申请。",
      家庭关注: "适合学习主动性强、表达和研究意识较好的学生。",
    },
  },
  {
    name: "上海交通大学附属中学",
    district: "宝山 / 浦东招生样本",
    type: "市实验性示范性",
    typeKey: "city",
    score: 709.5,
    summary: "理工氛围浓厚，头部高校升学表现突出，适合目标清晰的理工型学生。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 709.5。",
      优势方向: "理工科、创新项目、竞赛和拔尖培养。",
      家庭关注: "需要关注数学、物理基础和长期训练节奏。",
    },
  },
  {
    name: "华东师范大学第二附属中学",
    district: "浦东新区",
    type: "市实验性示范性",
    typeKey: "city",
    score: 709.5,
    summary: "浦东头部高中，学术氛围浓，适合目标高位、执行力强的学生。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 709.5。",
      优势方向: "理科拔尖、创新实验、强基相关路径。",
      家庭关注: "浦东家庭需同步关注名额分配和统一招生两条路径。",
    },
  },
  {
    name: "上海市实验学校",
    district: "浦东新区",
    type: "市实验性示范性",
    typeKey: "city",
    score: 703,
    summary: "特色鲜明的实验性学校，重视学生综合发展和持续成长。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 703。",
      优势方向: "综合素质、创新课程、长期贯通培养理念。",
      家庭关注: "适合关注学校生态和孩子发展适配度的家庭。",
    },
  },
  {
    name: "上海市建平中学",
    district: "浦东新区",
    type: "市实验性示范性",
    typeKey: "city",
    score: 699.5,
    summary: "浦东传统强校，区内认可度高，是很多浦东家庭的重点目标校。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 699.5。",
      优势方向: "高考升学、校内竞赛氛围、综合课程。",
      家庭关注: "区内竞争强，建议结合一模、二模区排判断志愿梯度。",
    },
  },
  {
    name: "上海市进才中学",
    district: "浦东新区",
    type: "市实验性示范性",
    typeKey: "city",
    score: 696.5,
    summary: "浦东优质高中，兼具学术与校园活动，对综合发展家庭较友好。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 696.5。",
      优势方向: "综合课程、社团活动、区内高位升学。",
      家庭关注: "适合成绩高位且希望校园体验相对均衡的学生。",
    },
  },
  {
    name: "上海师范大学附属中学",
    district: "徐汇 / 浦东招生样本",
    type: "市实验性示范性",
    typeKey: "city",
    score: 695.5,
    summary: "市实验性示范性高中，综合实力稳定，适合希望稳健冲刺高位高校的学生。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 695.5。",
      优势方向: "高考综合、师范大学附属资源、文理均衡。",
      家庭关注: "可与区内同分段学校比较通勤、班型和校风。",
    },
  },
  {
    name: "上海中学东校",
    district: "浦东新区",
    type: "市实验性示范性",
    typeKey: "city",
    score: 692,
    summary: "浦东优质高中，承接上海中学教育资源影响，热度较高。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 692。",
      优势方向: "学术基础、区内优质资源、升学出口。",
      家庭关注: "建议重点比较与建平、进才、洋泾等学校的梯度关系。",
    },
  },
  {
    name: "上海市洋泾中学",
    district: "浦东新区",
    type: "市实验性示范性",
    typeKey: "city",
    score: 689.5,
    summary: "浦东老牌优质高中，分数段稳定，适合中高位学生重点关注。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 689.5。",
      优势方向: "高考升学、区内稳定口碑、校风建设。",
      家庭关注: "适合作为浦东高分段志愿组合中的重要梯度校。",
    },
  },
  {
    name: "上海市川沙中学",
    district: "浦东新区",
    type: "市实验性示范性",
    typeKey: "city",
    score: 686.5,
    summary: "浦东东部重要高中资源，适合关注通勤与区域资源平衡的家庭。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 686.5。",
      优势方向: "区域优质高中、稳定升学、学术规范。",
      家庭关注: "东部片区家庭可重点比较通勤成本和学校匹配度。",
    },
  },
  {
    name: "上海南汇中学",
    district: "浦东新区",
    type: "区实验性示范性",
    typeKey: "district",
    score: 674,
    summary: "浦东南部重要高中，适合关注区域均衡和稳健升学的家庭。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 674。",
      优势方向: "区域高中资源、稳健高考、南部片区通勤友好。",
      家庭关注: "适合与高桥、东昌、北蔡等学校一起做梯度比较。",
    },
  },
  {
    name: "上海海事大学附属北蔡高级中学",
    district: "浦东新区",
    type: "特色 / 其他高中",
    typeKey: "feature",
    score: 663,
    summary: "具备高校附属与特色建设标签，适合关注特色方向和区内稳健路径的学生。",
    details: {
      数据口径: "浦东新区 2025 年统一招生样本最低分 663。",
      优势方向: "特色课程、区域升学、应用型方向探索。",
      家庭关注: "建议结合孩子兴趣方向与目标本科层次做选择。",
    },
  },
];

const universities = [
  {
    name: "复旦大学",
    district: "杨浦 / 上海",
    type: "双一流高校",
    summary: "综合研究型大学，人文社科、医学、理科和管理等方向优势突出。",
    details: {
      定位: "上海头部综合性大学，适合目标高水平研究型教育的学生。",
      优势方向: "医学、经济管理、新闻传播、基础学科、计算机相关方向。",
      关注点: "高考志愿需结合专业组、选科要求和位次变化综合判断。",
    },
  },
  {
    name: "上海交通大学",
    district: "闵行 / 徐汇",
    type: "双一流高校",
    summary: "理工、医学、管理等方向实力强，工程与创新创业氛围浓。",
    details: {
      定位: "上海头部研究型大学，理工和医学方向热度高。",
      优势方向: "工科、医学、信息、船舶海洋、管理。",
      关注点: "适合理工基础强、目标专业清晰的学生重点关注。",
    },
  },
  {
    name: "同济大学",
    district: "杨浦 / 嘉定",
    type: "双一流高校",
    summary: "建筑、土木、交通、设计和汽车相关方向辨识度高。",
    details: {
      定位: "工科和设计特色鲜明的高水平大学。",
      优势方向: "建筑、土木、交通运输、车辆工程、设计创意。",
      关注点: "需要关注不同校区、专业组和选科限制。",
    },
  },
  {
    name: "华东师范大学",
    district: "普陀 / 闵行",
    type: "双一流高校",
    summary: "师范教育、心理、教育学、地理、中文和数据相关方向具有优势。",
    details: {
      定位: "综合研究型师范大学，教育与基础学科强。",
      优势方向: "教育学、心理学、中文、地理、统计与数据科学。",
      关注点: "适合关注师范、基础学科和综合文理方向的学生。",
    },
  },
  {
    name: "上海财经大学",
    district: "杨浦",
    type: "财经类高校",
    summary: "财经、金融、会计、统计和管理方向热度高，就业城市匹配度强。",
    details: {
      定位: "财经特色鲜明的高水平高校。",
      优势方向: "金融、会计、经济学、统计、工商管理。",
      关注点: "财经类专业热度高，需结合分数位次和专业偏好判断。",
    },
  },
  {
    name: "华东理工大学",
    district: "徐汇 / 奉贤",
    type: "理工类高校",
    summary: "化工、材料、生物工程、药学和管理等方向基础扎实。",
    details: {
      定位: "理工特色强的研究型大学。",
      优势方向: "化学工程、材料、生物工程、药学、自动化。",
      关注点: "适合化学、生物、工程方向兴趣明确的学生。",
    },
  },
];

const highschoolCards = [
  highschoolRanks[0],
  highschoolRanks[1],
  highschoolRanks[3],
  highschoolRanks[5],
  highschoolRanks[6],
  highschoolRanks[9],
];

const rankBody = document.querySelector("#rank-body");
const searchInput = document.querySelector("#school-search");
const rankFilter = document.querySelector("#rank-filter");
const cardGrid = document.querySelector("#school-cards");
const libraryButtons = document.querySelectorAll(".segment");
const modal = document.querySelector("#detail-modal");
const modalTitle = document.querySelector("#modal-title");
const modalKicker = document.querySelector("#modal-kicker");
const modalSummary = document.querySelector("#modal-summary");
const modalDetails = document.querySelector("#modal-details");

let activeLibrary = "highschools";

function openDetail(item, kicker = "School Detail") {
  modalKicker.textContent = kicker;
  modalTitle.textContent = item.name;
  modalSummary.textContent = item.summary;
  modalDetails.innerHTML = Object.entries(item.details)
    .map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`)
    .join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function renderRanks() {
  const keyword = searchInput.value.trim();
  const type = rankFilter.value;
  const filtered = highschoolRanks.filter((school) => {
    const keywordMatched = !keyword || school.name.includes(keyword) || school.district.includes(keyword);
    const typeMatched = type === "all" || school.typeKey === type;
    return keywordMatched && typeMatched;
  });

  rankBody.innerHTML = filtered
    .map(
      (school, index) => `
        <tr>
          <td>${index + 1}</td>
          <td><strong>${school.name}</strong></td>
          <td>${school.district}</td>
          <td><span class="type-pill">${school.type}</span></td>
          <td><span class="score-pill">${school.score}</span></td>
          <td><button class="detail-button" type="button" data-rank="${school.name}">查看</button></td>
        </tr>
      `,
    )
    .join("");

  rankBody.querySelectorAll("[data-rank]").forEach((button) => {
    button.addEventListener("click", () => {
      const school = highschoolRanks.find((item) => item.name === button.dataset.rank);
      openDetail(school, "High School Detail");
    });
  });
}

function renderCards() {
  const items = activeLibrary === "highschools" ? highschoolCards : universities;
  cardGrid.innerHTML = items
    .map(
      (item) => `
        <article class="school-card">
          <span class="tag">${item.type}</span>
          <h3>${item.name}</h3>
          <p>${item.summary}</p>
          <div class="school-meta">
            <span>${item.district}</span>
            ${item.score ? `<span>2025 最低分 ${item.score}</span>` : "<span>高校介绍</span>"}
          </div>
          <button class="detail-button" type="button" data-card="${item.name}">查看详情</button>
        </article>
      `,
    )
    .join("");

  cardGrid.querySelectorAll("[data-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const source = activeLibrary === "highschools" ? highschoolCards : universities;
      const item = source.find((entry) => entry.name === button.dataset.card);
      openDetail(item, activeLibrary === "highschools" ? "High School Detail" : "University Detail");
    });
  });
}

searchInput.addEventListener("input", renderRanks);
rankFilter.addEventListener("change", renderRanks);

libraryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    libraryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeLibrary = button.dataset.library;
    renderCards();
  });
});

modal.addEventListener("click", (event) => {
  if (event.target.dataset.close) {
    closeDetail();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetail();
  }
});

renderRanks();
renderCards();
