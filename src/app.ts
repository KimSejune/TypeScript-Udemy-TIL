// class ProjectInput {
//   title: string;
//   description: string;
//   people: number;
//   constructor(t: string, d: string, p: number) {
//     this.title = t;
//     this.description = d;
//     this.people = p;
//   }
// }

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  // project-input template 첫요소인 form을 가져올 것이다.
  element: HTMLFormElement;
  constructor() {
    // 이 내용을 보유하는 템플릿에 대한 접근성 제공.
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    // 템플릿 내용을 렌더링하려는 엘리먼트에 대한 참조를 보유.
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // this.templateElement 요소 가져오기.
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild! as HTMLFormElement;
    this.attach();
  }

  // 렌더링 로직.
  private attach() {
    // content를 렌더링할 위치(hostElement)를 정한 후 렌더링한다.
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projectInput = new ProjectInput();
console.log("projectInput :", projectInput);
