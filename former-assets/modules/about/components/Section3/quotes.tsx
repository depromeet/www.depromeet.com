export type Quote = {
  author: string;
  mimoji: string;
  sentence: JSX.Element;
  job: string;
  color: string;
};

export const quotes: Quote[] = [
  {
    author: "(이송민, UX 디자이너)",
    mimoji: "/organizer/lsm.png",
    sentence: (
      <div>
        '디프만' 이름처럼 열정이 넘쳐나는 디자이너와 개발자분들을 만나 성장할 수
        있는 공간이었습니다. 기획부터 디자인, 서비스 런칭을 위한 과정에서 배움과
        성취가 가득한 시간을 보냈습니다. 특히 14주의 기간이 끝나고 서비스
        고도화를 진행할 만큼,{" "}
        <b>
          함께 만든 서비스에 애정을 갖는 팀원이 생긴다는 점이 큰 매력이라고
          생각해요!
        </b>{" "}
        12기에서도 함께 성장할 수 있길 기대합니다.
      </div>
    ),
    job: "designer",
    color: "#316BFF",
  },
  {
    author: "(박종호, Frontend Developer)",
    mimoji: "/organizer/pjh.png",
    sentence: (
      <div>
        개발자로서 원활한 협업 능력을 갖추는 것은 필수이지만 이 능력을 발전시킬
        기회가 마땅치 않았습니다. 디프만을 통해 열정과 능력을 함께 갖춘 동료들과
        함께 다양한 경험을 하며 협업 능력을 높일 수 있었습니다. 또,{" "}
        <b>다양한 직군의 사람들과 지식, 경험을 공유하며 더 넓은 시야와 기회</b>
        를 가질 수 있었습니다. 12기에 참여하여 비단 개발뿐만이 아닌, 여러 취미를
        공유하며 함께 성장할 수 있는 동료들을 만들어보세요!
      </div>
    ),
    job: "programmer",
    color: "#FF571C",
  },
  {
    author: "(김성민, Backend Developer)",
    mimoji: "/organizer/ksm.png",
    sentence: (
      <div>
        반복되는 일상이 지겨워 새로운 도전을 해보고 싶은 마음에 디프만을
        시작하게 되었습니다.{" "}
        <b>
          디프만을 통해 서비스를 기획하고 출시하는 것도 좋았지만 다양한 사람들을
          만나 새로운 경험을 듣고 배울 수 있는 자리
        </b>
        였습니다. 특히, 여러분야에 열정가득한 사람들이 모이기 때문에 정말 멋있는
        사람들이 모인 곳이라고 자부할 수 있습니다! 혹시... 반복되는 일상에
        변화가 필요하지 않으신가요? 일상에 변화가 필요하다면 12기에서 만나
        함께해요! 😉
      </div>
    ),
    job: "programmer",
    color: "#38E3A8",
  },
];
