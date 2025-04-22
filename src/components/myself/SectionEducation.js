import React from "react";
import "../../css/pages/myself/myselfEducation/myselfEdu.css";

function SectionEducation() {
  const educationList = [
    {
      title: "이젠 아카데미",
      date: "2023.06 ~ 2023.11",
      long: "-5개월-",
      nameTitle: "과정명 :",
      nameText:
        "스마트웹&콘텐츠개발) 풀스택 (프론트엔드&백엔드) 자바개발자 양성 D",
      howTitle: "과정 개요 :",
      howText:
        "일반 기업 및 전자정부에서 주로 사용되고 있는 JAVA, JSP(MVC Model 2), Spring Boot, MySQL 등의 기업 실무",
      list: [
        "- JAVA기반 개발환경 구축 및 활용, 웹UI 설계 및 구현",
        "- DBMS 설계 및 관리",
        "- JSP에서의 JDBC를 활용한 웹 서비스 설계 및 구현",
        "- Spring Framework를 활용한 웹 서비스 설계 및 구현",
        "- Oracle DB 설치 및 기본 SQL 작성",
        "- 데이터 베이스 및 테이블 설계",
        "- CSS의 유형별 선언 및 사용 가능",
        "- input 태그를 이용한 회원가입, 로그인",
        "- 게시판 구축가능",
      ],
    },
    {
      title: "코드랩 아카데미",
      date: "2024.02 ~ 2024.08",
      long: "-6개월-",
      nameTitle: "과정명 :",
      nameText: "클라우드 활용 o2o 서비스 플랫폼 웹&앱 개발",
      howTitle: "과정 개요 :",
      howText:
        "“Online to Offline” 온/오프라인을 연결하는 서비스와 관련된 경험",
      list: [
        "- JAVA기반 개발환경 구축 및 활용",
        "- 웹UI 설계 및 구현",
        "- DBMS 설계 및 관리",
        "- JSP에서의 JDBC를 활용한 웹 서비스 설계 및 구현",
        "- Spring Framework를 활용한 웹 서비스 설계 및 구현",
        "- 데이터 베이스 및 테이블 설계",
        "- noSQL, mysql",
        "- DB 설치 및 기본 SQL 작성",
        "- docker, AWS",
        "- react",
      ],
    },
    {
      title: "코드랩 아카데미",
      date: " 2024.11  2025.01",
      long: "-2개월-",
      nameTitle: "과정명 :",
      nameText: " 심화_[부트캠프]GIS를 활용한 위치정보기반(LBS) 웹&앱개발",
      howTitle: "",
      howText: "",
      list: [
        "- “엘비에스테크” 관련 강의",
        "- 위치기반 서비스 관련 기술",
        "- QGIS",
        "- React",
        "- CI/CD 파이프라인 자동 배포",
        "- gcp",
        "- PgAdmin",
      ],
    },
  ];

  return (
    <>
      <div className="sectionEduMainTitle">Education</div>
      <div className="sectionEdu">
        {educationList.map((item, idx) => {
          return (
            <div key={idx} className="sectionEduOne">
              <div className="sectionEduTitleWrap">
                <div>{item.title}</div>
                <div>{item.date}</div>
                <div>{item.long}</div>
              </div>
              <div className="sectionEduTextWrap">
                <div className="sectionEduTextTitleWrap">
                  <div className="WrapTitle">
                    <div>{item.nameTitle}</div>
                    <div>{item.nameText}</div>
                  </div>
                  <div className="WrapTitle">
                    <div>{item.howTitle ? item.howTitle : null}</div>
                    <div>{item.howText ? item.howText : null}</div>
                  </div>
                </div>
                <div className="sectionEduText">
                  {item.list &&
                    item.list.map((text, index) => (
                      <div key={index}>{text}</div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SectionEducation;
