// src/App.tsx
import React from 'react';
import './App.css'; // App 특정 CSS (필요시)
import profileImage from './assets/profile-placeholder.png'; // 프로필 이미지 예시 (src/assets 폴더에 이미지 저장)

// 아이콘 사용을 위해 react-icons 설치: npm install react-icons
import { FaGithub, FaBehance, FaInstagram, FaLinkedin, FaEnvelope, FaLink } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

// src/assets 폴더를 만들고 그 안에 profile-placeholder.png 같은 이미지를 넣어주세요.
// 없다면, https://via.placeholder.com/150 같은 URL로 대체 가능합니다.

const App: React.FC = () => {
  const profileData = {
    quote: "작은 불편을 감지해, 더 나은 내일을 디자인합니다.",
    name: "김미림",
    school: "미림마이스터고등학교",
    oneLineIntro: [
      { id: 1, text: "#UX디자이너 꿈나무", isHoverable: true },
      { id: 2, text: "/", isHoverable: false },
      { id: 3, text: "#코딩에 빠진 고1", isHoverable: true },
    ],
    contact: {
      email: "mirim123@e-mirim.hs.kr",
      portfolio: "https://portfolio.mirim.me",
      social: [
        { name: "GitHub", icon: <FaGithub size={24} />, url: "https://github.com/mirim" },
        { name: "Notion", icon: <SiNotion size={24} />, url: "https://notion.so/mirim" },
        { name: "Behance", icon: <FaBehance size={24} />, url: "https://behance.net/mirim" },
        { name: "Instagram", icon: <FaInstagram size={24} />, url: "https://instagram.com/mirim_ux" },
        // { name: "LinkedIn", icon: <FaLinkedin size={24} />, url: "#" }, // 필요시 추가
      ],
    },
    learningInfo: {
      interests: ["UI/UX 디자인", "프론트엔드 개발", "AI 글쓰기"],
      projects: [
        "졸업 전시회 ‘AI와 대화하기 앱’ 기획 및 디자인",
        "AI 활용 글쓰기 수업 공동 보고서",
      ],
      skills: ["Figma", "HTML/CSS", "JavaScript", "ChatGPT"],
      certifications: ["ITQ 한글", "COS 1급", "디자인씽킹 캠프 수료"],
    },
    personalTraits: {
      strengths: ["끈기", "창의성", "공감 능력"],
      growthKeywords: ["#집중력", "#성실함", "#배움열정"],
      mbti: "ISTP",
      tendency: "조용하지만 몰입력 높은 타입",
      likes: ["드로잉", "음악 감상", "웹툰"],
    },
    miniEssay:
      "안녕하세요! 저는 기술로 사람의 감정을 표현하는 것을 좋아하는 UX/UI 디자이너 지망생 김미림입니다. 다양한 프로젝트에 참여하며 사용자 경험을 중심으로 사고하는 연습을 하고 있어요. 작은 아이디어가 사람의 삶을 바꿀 수 있다는 믿음을 가지고 오늘도 배우고, 실험하고 있습니다.",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* 상단 인용구 */}
        <div className="bg-branding-color text-white p-6 text-center">
          <p className="text-xl italic">"{profileData.quote}"</p>
        </div>

        <div className="p-6 md:p-8">
          {/* 프로필 기본 정보 */}
          <header className="text-center mb-8">
            <img
              src={profileImage}
              alt="프로필 사진"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{profileData.name}</h1>
            <p className="text-lg text-gray-600">{profileData.school}</p>
            <p className="text-md mt-2">
              {profileData.oneLineIntro.map((item) => (
                <span
                  key={item.id}
                  className={`
                    ${item.isHoverable ? 'text-default-gray hover:text-branding-color transition-colors duration-200 cursor-pointer' : 'text-gray-500'}
                    mx-1
                  `}
                >
                  {item.text}
                </span>
              ))}
            </p>
          </header>

          {/* 각 섹션 */}
          <main className="space-y-8">
            {/* 2. 연락처 및 링크 */}
            <section>
              <h2 className="section-title">연락처 및 링크</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <p><FaEnvelope className="inline mr-2 text-branding-color" /> 이메일: <a href={`mailto:${profileData.contact.email}`} className="text-blue-600 hover:underline">{profileData.contact.email}</a></p>
                <p><FaLink className="inline mr-2 text-branding-color" /> 포트폴리오: <a href={profileData.contact.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{profileData.contact.portfolio}</a></p>
              </div>
              <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                {profileData.contact.social.map(social => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} className="icon-link">
                    {social.icon}
                  </a>
                ))}
              </div>
            </section>

            {/* 3. 학습/활동 정보 */}
            <section>
              <h2 className="section-title">학습/활동 정보</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-700">관심 분야:</h3>
                  <p className="text-gray-600">{profileData.learningInfo.interests.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">참여 프로젝트:</h3>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    {profileData.learningInfo.projects.map((project, idx) => <li key={idx}>{project}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">사용 가능 기술:</h3>
                  <p className="text-gray-600">{profileData.learningInfo.skills.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">자격증/수료증:</h3>
                  <p className="text-gray-600">{profileData.learningInfo.certifications.join(', ')}</p>
                </div>
              </div>
            </section>

            {/* 4. 개인 성향 및 취향 */}
            <section>
              <h2 className="section-title">개인 성향 및 취향</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                <div><span className="font-semibold">나의 장점:</span> {profileData.personalTraits.strengths.join(', ')}</div>
                <div><span className="font-semibold">성장 키워드:</span> {profileData.personalTraits.growthKeywords.join(' ')}</div>
                <div><span className="font-semibold">MBTI / 성향 키워드:</span> {profileData.personalTraits.mbti} / {profileData.personalTraits.tendency}</div>
                <div><span className="font-semibold">좋아하는 것:</span> {profileData.personalTraits.likes.join(', ')}</div>
              </div>
            </section>

            {/* 5. 자기 소개 또는 미니 에세이 */}
            <section>
              <h2 className="section-title">자기 소개</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {profileData.personalTraits.mbti}
                {profileData.miniEssay}
              </p>
            </section>
          </main>
        </div>

        <footer className="text-center p-6 bg-gray-800 text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p className="mt-1">이 페이지는 React와 Tailwind CSS로 만들어졌습니다.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;