// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">Introduction</a></li><li class="chapter-item expanded "><a href="basics.html"><strong aria-hidden="true">1.</strong> Basics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="basics_syntax.html"><strong aria-hidden="true">1.1.</strong> Syntax differences</a></li><li class="chapter-item expanded "><a href="macros.html"><strong aria-hidden="true">1.2.</strong> Macros</a></li><li class="chapter-item expanded "><a href="basics_primitives.html"><strong aria-hidden="true">1.3.</strong> Primitives</a></li><li class="chapter-item expanded "><a href="basics_error.html"><strong aria-hidden="true">1.4.</strong> Error Handling</a></li></ol></li><li class="chapter-item expanded "><a href="types.html"><strong aria-hidden="true">2.</strong> Types and variables</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="types_mutability.html"><strong aria-hidden="true">2.1.</strong> Mutability</a></li><li class="chapter-item expanded "><a href="types_strings.html"><strong aria-hidden="true">2.2.</strong> Strings</a></li><li class="chapter-item expanded "><a href="types_commmon.html"><strong aria-hidden="true">2.3.</strong> Common types</a></li><li class="chapter-item expanded "><a href="types_constants.html"><strong aria-hidden="true">2.4.</strong> Constants</a></li></ol></li><li class="chapter-item expanded "><a href="references.html"><strong aria-hidden="true">3.</strong> References</a></li><li class="chapter-item expanded "><a href="borrowing.html"><strong aria-hidden="true">4.</strong> Borrowing and Ownership</a></li><li class="chapter-item expanded "><a href="classes.html"><strong aria-hidden="true">5.</strong> Classes, or the lack there of</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="classes_deriving.html"><strong aria-hidden="true">5.1.</strong> Deriving and implementing</a></li><li class="chapter-item expanded "><a href="classes_default.html"><strong aria-hidden="true">5.2.</strong> Default</a></li></ol></li><li class="chapter-item expanded "><a href="methods.html"><strong aria-hidden="true">6.</strong> Methods</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="methods_self.html"><strong aria-hidden="true">6.1.</strong> this/self</a></li><li class="chapter-item expanded "><a href="methods_functional.html"><strong aria-hidden="true">6.2.</strong> Functional Programming</a></li></ol></li><li class="chapter-item expanded "><a href="modules.html"><strong aria-hidden="true">7.</strong> Modules</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="modules_directories.html"><strong aria-hidden="true">7.1.</strong> Directories</a></li></ol></li><li class="chapter-item expanded "><a href="crates.html"><strong aria-hidden="true">8.</strong> Crates</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="crates_adding.html"><strong aria-hidden="true">8.1.</strong> Adding crates</a></li><li class="chapter-item expanded "><a href="crates_standard.html"><strong aria-hidden="true">8.2.</strong> Not in standard</a></li><li class="chapter-item expanded "><a href="crates_common.html"><strong aria-hidden="true">8.3.</strong> Common crates</a></li></ol></li><li class="chapter-item expanded "><a href="result.html"><strong aria-hidden="true">9.</strong> Result, Option and Exceptions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="result_exception.html"><strong aria-hidden="true">9.1.</strong> Result and exceptions</a></li><li class="chapter-item expanded "><a href="result_option.html"><strong aria-hidden="true">9.2.</strong> Option and nulls</a></li></ol></li><li class="chapter-item expanded "><a href="creating_macros.html"><strong aria-hidden="true">10.</strong> Creating macros</a></li><li class="chapter-item expanded "><a href="concurrency.html"><strong aria-hidden="true">11.</strong> Concurrency</a></li><li class="chapter-item expanded "><a href="testing.html"><strong aria-hidden="true">12.</strong> Testing</a></li><li class="chapter-item expanded "><a href="cargo.html"><strong aria-hidden="true">13.</strong> Cargo</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="cargo_tools.html"><strong aria-hidden="true">13.1.</strong> Tools</a></li></ol></li><li class="chapter-item expanded "><a href="enums.html"><strong aria-hidden="true">14.</strong> Enums</a></li><li class="chapter-item expanded "><a href="tips.html"><strong aria-hidden="true">15.</strong> Tips and tricks</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tips_iflet.html"><strong aria-hidden="true">15.1.</strong> if let</a></li><li class="chapter-item expanded "><a href="tips_refcount.html"><strong aria-hidden="true">15.2.</strong> Reference counting</a></li><li class="chapter-item expanded "><a href="tips_strings.html"><strong aria-hidden="true">15.3.</strong> Converting strings</a></li><li class="chapter-item expanded "><a href="tips_intmut.html"><strong aria-hidden="true">15.4.</strong> Interior mutability</a></li><li class="chapter-item expanded "><a href="tips_enumiter.html"><strong aria-hidden="true">15.5.</strong> Indexed iteration</a></li><li class="chapter-item expanded "><a href="tips_formatting.html"><strong aria-hidden="true">15.6.</strong> Formatting strings</a></li><li class="chapter-item expanded "><a href="tips_crates.html"><strong aria-hidden="true">15.7.</strong> For crates</a></li></ol></li><li class="chapter-item expanded "><a href="errors.html"><strong aria-hidden="true">16.</strong> Common bugs/issues</a></li><li class="chapter-item expanded "><a href="architecture.html"><strong aria-hidden="true">17.</strong> Architecture</a></li><li class="chapter-item expanded affix "><a href="resources.html">Resources</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
