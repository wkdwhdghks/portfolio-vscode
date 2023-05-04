import CodeBlock from "../components/CodeBlock";
import CodeLine from "../components/CodeLine";
import TagContents from "../components/TagContents";
import { TagOpen, TagClose } from "./../components/Tags";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <CodeBlock>
        <CodeLine>
          <TagOpen tagname={"html"} attr={"lang"} attrValue={'"ko"'} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"head"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"title"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            안녕하세요, 저는 인터랙티브 웹 공부를 좋아하는 장종환입니다. 🧑🏻‍💻{" "}
            {"("}
            <a
              className={styles.accent}
              href="https://flat-beauty-6c6.notion.site/Front-end-developer-a5087929c65a494d89f3a2f84ab5ee1f"
              target="_blank"
              rel="noopener noreferrer"
            >
              노션 보러가기
            </a>
            {")"}
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"title"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"head"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"body"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen
            tagname={"heaeder"}
            attr={"class"}
            attrValue={'"자기소개"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            안녕하세요! 👋 <br />
            저는 인터랙티브 웹 기술과 프론트엔드 개발에 관심이 많은 <br />
            프론트엔드 개발자 장종환입니다.
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            <br />
            웹 표준성을 지키려 노력하고, 컴포넌트의 재사용성을 고려하여
            개발합니다. <br />
            그리고 사용자의 관점에서 '잘 만든' 웹을 만드는 것에 대해 언제나
            고민합니다.
            <br />
            새로운 웹 기술과 지식에 대해 관심이 많고 꾸준히 공부하고 있습니다.
            📝
            <br />
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            <br />
            새롭게 배운 기술을 업무에 적용하여 좀 더 나은 서비스를 구축하는 것에
            가장 큰 보람을 느낍니다.
            <br />
            디자이너, 기획자와 함께 의견을 나누고 고민하며 프로젝트의 시작과
            끝을 맺은 경험이 있습니다. <br />
            가장 좋아하는 것은 작은 컴포넌트 단위로 개발하여 확장성을 높이는
            것이고,
            <br />
            개발자의 관점에서 개발하기 쉽게 꼼꼼하게 주석 달기가 취미{"(?)"}
            입니다.
            <br />
            실제로 같이 일했던 팀원분이 제가 만든 마크업 페이지는 개발하기
            쉽다고 말씀해주셔서
            <br />
            뿌듯했던 기억이 있습니다. ✨
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            <br />
            제가 하는 일을 좋아하고, 스스로 부족한 부분을 잘 알기에 개발
            공부하는 것이 즐겁습니다.
            <br />
            저는 공부한 것을 팀원들과 나누고 서로 배우는 것에 큰 가치가 있다고
            여깁니다.
            <br />
            완벽하지 않아서 더 나은 서비스를 만드는 것을 함께 고민하고,
            <br />
            각자의 부족함을 서로 채우고, 재능을 인정하는 것이 좋은 기업과
            서비스를 만드는 열쇠라고 생각하며 일합니다.
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"heaeder"} indent={3} />
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagOpen
            tagname={"main"}
            attr={"class"}
            attrValue={'"기술과 경험, 그리고 공부중인 것들"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContents indent={5}>
            <p className={styles.accent}>💻 사용 기술과 경험</p>
          </TagContents>
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <p className={styles.italic}>HTML & CSS</p>
            <p>- 크로스 브라우징 & 시맨틱 마크업을 준수합니다.</p>
            <p>- 반응형/적응형 개발 경험이 있습니다.</p>
            <p>- 애니메이션을 활용할 수 있습니다.</p>
            <p>- 변수 사용 경험이 있습니다.</p>
            <p>- 다양한 레이아웃을 문제없이 개발할 수 있습니다.</p>
          </TagContents>
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <p className={styles.italic}>Javascript</p>
            <p>- 기본적인 자바스크립트 문법에 대해 이해하고 있습니다.</p>
            <p>- 함수를 만들어 사용하고 인자를 전달할 수 있습니다.</p>
            <p>
              - 배열과 객체 문법에 대해서 이해하고 메서드를 사용한 경험이
              있습니다.
            </p>
            <p>
              - 로컬스토리지를 활용하여 토이 프로젝트를 개발한 경험이 있습니다.
            </p>
            <p>
              - ES6 문법에 대해 꾸준히 공부하고 있습니다.{"("}클래스, this,
              화살표함수, 비구조화할당 등{")"}
            </p>
          </TagContents>
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <p className={styles.italic}>React</p>
            <p>- 리액트 프로젝트 경험이 있습니다.</p>
            <p>- 기본 문법에 대한 이해가 있습니다.</p>
            <p>- React hooks 사용 경험이 있습니다.</p>
            <p>
              - Router를 이용한 SPA 개발 경험이 있고 조건에 따라 컴포넌트 분기
              처리를 할 수 있습니다.
            </p>
            <p>- 함수형 컴포넌트를 만들어 props를 전달하고 받을 수 있습니다.</p>
            <p>
              - 로컬스토리지에 저장한 데이터를 불러와 컴포넌트에 바인딩한 경험이
              있습니다.
            </p>
            <p>
              - PostCSS / Styled-components / SCSS / Tailwind CSS 모두 사용할 수
              있습니다.
            </p>
            <p>- Redux toolkit을 사용한 경험이 있습니다.</p>
            <p>
              - axios를 이용하여 API 데이터를 받아와, 컴포넌트에 데이터를
              바인딩한 경험이 있습니다.
            </p>
          </TagContents>
        </CodeLine>

        <CodeLine />
        <CodeLine />

        <CodeLine>
          <TagContents indent={5}>
            <p className={styles.accent}>✍️ 공부 중인 것</p>
          </TagContents>
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <p className={styles.italic}>TypeScript</p>
            <p>
              - 코드 작성 단계에서 타입을 체크해 오류를 확인할 수 있는 정적 타입
              언어 TypeScript를 공부하고 있습니다.
            </p>
          </TagContents>
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <p className={styles.italic}>Next.js</p>
            <p>
              - Next.js를 활용한 서버 사이드 렌더링에 대해 공부하고 있습니다.
            </p>
          </TagContents>
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <p className={styles.italic}>JS</p>
            <p>- 다양한 메서드에 관해서 공부하고 정리하고 있습니다.</p>
            <p>
              - 클래스, 콜백, 프로미스, 클로저를 이해하기 위해 공부하고
              있습니다.
            </p>
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"main"} indent={3} />
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagOpen
            tagname={"footer"}
            attr={"class"}
            attrValue={'"경력 및 교육"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContents indent={5}>
            <p className={styles.accent}>
              📇 경력 {"("}
              <a
                href="https://flat-beauty-6c6.notion.site/Front-end-developer-a5087929c65a494d89f3a2f84ab5ee1f"
                target="_blank"
                rel="noopener noreferrer"
              >
                노션 보러가기
              </a>
              {")"}
            </p>
          </TagContents>
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <p className={styles.italic}>
              헤렌{"("}HERREN{")"}
              {"("}2022.05 ~ 2022.06{")"}
            </p>
            <p>
              - 신규 서비스 메인 페이지, 로그인 페이지 구현 및 유지보수{"("}
              기업협업
              {")"}
            </p>
          </TagContents>
        </CodeLine>

        <CodeLine />
        <CodeLine>
          <TagContents indent={5}>
            <p className={styles.accent}>👩‍🎓 교육</p>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <p>
              - wecode 수료{"("}2022.02 ~ 2022.05
              {")"}
            </p>
            <p>
              - 멋쟁이 사자처럼 앱 스쿨 수료{"("}2022.09 ~ 2023.02
              {")"}
            </p>
            <p>
              - 동서울대학교 패션디자인과{"("}2019.03 ~ 2021.02
              {")"}
            </p>
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"footer"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"body"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"html"} />
        </CodeLine>
      </CodeBlock>
    </div>
  );
}

export default About;
