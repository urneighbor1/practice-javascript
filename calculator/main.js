"use strict";

function calculator() {
  const gameContainer = document.getElementById("game-container");

  /**
   * @template {keyof HTMLElementTagNameMap} TagName
   * @template {Partial<HTMLElementTagNameMap[TagName]>} Props
   * @template {Partial<CSSStyleDeclaration>} Styles
   * @param {TagName} tag
   * @param {(Node | Node[])?} children
   * @param {Props?} props
   * @param {Styles?} styles
   * @returns {HTMLElementTagNameMap[TagName] & Props & { style: Styles }}
   */
  function $(tag, children, props, styles) {
    const elm = Object.assign(document.createElement(tag), props ?? {});
    const styledElm = Object.assign(elm, {
      styles: Object.assign(elm.style, styles ?? {}),
    });
    children ??= [];
    styledElm.replaceChildren(
      ...(children instanceof Array ? children : [children])
    );
    return styledElm;
  }

  let expression = "";
  const display = $("p", [], {}, { height: "30px" });
  /** @param {string} newValue */
  function setExpr(newValue) {
    expression = newValue;
    display.textContent = newValue;
  }
  /** @param {string} string */
  function appendExpr(string) {
    setExpr(expression + string);
  }
  /** @param {string} key */
  function appendKey(key) {
    return {
      key,
      action() {
        appendExpr(key);
      },
    };
  }
  /** @type {{key: string, action: () => void}[][]} */
  const buttons = [
    [
      {
        key: "C",
        action() {
          setExpr("");
        },
      },
      {
        key: "⌫",
        action() {
          setExpr(expression.slice(0, expression.length - 1));
        },
      },
      appendKey("/"),
      appendKey("%"),
    ],
    [appendKey("7"), appendKey("8"), appendKey("9"), appendKey("*")],
    [appendKey("4"), appendKey("5"), appendKey("6"), appendKey("-")],
    [appendKey("1"), appendKey("2"), appendKey("3"), appendKey("+")],
    [
      appendKey("00"),
      appendKey("0"),
      appendKey("."),
      {
        key: "=",
        action() {
          try {
            setExpr(String(eval(expression)));
          } catch {}
        },
      },
    ],
  ];

  const buttonsContainer = $(
    "div",
    buttons.map(buttonsInner =>
      $(
        "div",
        buttonsInner.map(button =>
          $(
            "label",
            $(
              "button",
              button.key,
              { onclick: button.action },
              { width: "60px", height: "40px" }
            )
          )
        ),
        {},
        { display: "flex" }
      )
    )
  );
  const container = $("div", [display, buttonsContainer]);
  gameContainer?.appendChild(container);
}

calculator();
