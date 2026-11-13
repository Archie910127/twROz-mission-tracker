(function () {
    // 未來新增第 3、第 4 個小工具，只要在這裡加一行即可！
    const TOOLS = [
        { id: "daily", label: "📅 每日任務", href: "index.html" },
        { id: "equip", label: "⚔️ 裝備試算", href: "equip.html" }
    ];

    const style = document.createElement("style");
    style.id = "be-nav-styles";
    style.textContent = `
        .be-nav-bar {
            display: inline-flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            background: linear-gradient(90deg, rgba(255, 30, 86, 0.25) 0%, rgba(181, 23, 255, 0.26) 52%, rgba(11, 5, 20, 0.92) 100%);
            border-left: 6px solid #ff1e56;
            border-bottom: 2px solid #b517ff;
            border-top: 1px solid rgba(181, 23, 255, 0.35);
            padding: 5px 22px 5px 14px;
            clip-path: polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%);
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.75);
            font-family: 'Segoe UI', 'Orbitron', 'Microsoft JhengHei', sans-serif;
            min-height: 40px;
        }

        .be-nav-brand {
            color: #ffffff;
            font-size: 16px;
            font-weight: 900;
            letter-spacing: 1.2px;
            text-shadow: 0 0 10px rgba(181, 23, 255, 0.8), 1px 0 2px #ff1e56;
            white-space: nowrap;
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }

        .be-nav-divider {
            color: rgba(255, 255, 255, 0.3);
            font-weight: 300;
            font-size: 16px;
            margin: 0 2px;
            user-select: none;
        }

        .be-nav-links {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            flex-wrap: wrap;
        }

        .be-nav-btn {
            text-decoration: none;
            color: #d8c8eb;
            background: rgba(8, 3, 15, 0.72);
            border: 1px solid rgba(181, 23, 255, 0.45);
            padding: 4px 13px;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.5px;
            clip-path: polygon(7px 0, 100% 0, calc(100% - 7px) 100%, 0 100%);
            transition: all 0.2s ease;
            white-space: nowrap;
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }

        .be-nav-btn:hover {
            color: #ffffff;
            border-color: #00ffcc;
            background: rgba(181, 23, 255, 0.35);
            box-shadow: 0 0 12px rgba(0, 255, 204, 0.35);
            transform: translateY(-1px);
        }

        .be-nav-btn.active {
            color: #050208;
            background: linear-gradient(135deg, #00ff87, #00ffcc);
            border-color: #00ffcc;
            font-weight: 900;
            box-shadow: 0 0 14px rgba(0, 255, 135, 0.55);
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    function mountNav() {
        const mountEl = document.getElementById("be-nav");
        if (!mountEl) return;

        const activeId = mountEl.dataset.active || "";
        const linksHtml = TOOLS.map(tool => {
            const isActive = tool.id === activeId;
            return `<a class="be-nav-btn ${isActive ? "active" : ""}" href="${tool.href}">${tool.label}</a>`;
        }).join("");

        mountEl.innerHTML = `
            <nav class="be-nav-bar" aria-label="BE_希希芙 工具箱導覽">
                <span class="be-nav-brand">⚡BE_CCF 雜物工具箱</span>
                <span class="be-nav-divider">|</span>
                <div class="be-nav-links">${linksHtml}</div>
            </nav>
        `;
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mountNav);
    } else {
        mountNav();
    }
})();
