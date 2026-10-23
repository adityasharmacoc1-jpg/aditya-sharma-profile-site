(function(){
const S=(typeof SITE!=="undefined"?SITE:{}),$=id=>document.getElementById(id);
const h=(tag,attrs,...kids)=>{const e=document.createElement(tag);
  for(const[k,v]of Object.entries(attrs||{})){if(k==="class")e.className=v;else e.setAttribute(k,v)}
  kids.flat().forEach(c=>{if(c!=null&&c!=="")e.append(c.nodeType?c:document.createTextNode(c))});return e};
const safe=u=>/^(https?:|mailto:|tel:|#|[\w./-]+$)/i.test(u||"")?u:"";
const BRAND={
 instagram:'<defs><linearGradient id="ig" x2="1" y2="1"><stop stop-color="#feda75"/><stop offset=".5" stop-color="#d62976"/><stop offset="1" stop-color="#4f5bd5"/></linearGradient></defs><rect width="48" height="48" rx="13" fill="url(#ig)"/><rect x="9" y="9" width="30" height="30" rx="9" fill="none" stroke="#fff" stroke-width="3.5"/><circle cx="24" cy="24" r="7" fill="none" stroke="#fff" stroke-width="3.5"/><circle cx="33" cy="15" r="2.2" fill="#fff"/>',
 threads:'<path fill="#101010" d="M24 4C13 4 6 12 6 24s7 20 18 20c10 0 17-6 17-15 0-7-4-12-11-13-.7-5-3-8-7-8-5 0-8 4-8 9h5c0-3 1-5 3-5 2 0 3 2 3 5-7 0-12 4-12 10 0 5 4 8 9 8 5 0 9-3 10-8 2 1 3 3 3 5 0 6-5 10-12 10-8 0-13-6-13-15S16 9 24 9c7 0 11 4 13 10h5C40 9 34 4 24 4Zm-1 26c-3 0-5-1-5-4 0-3 3-5 7-5 2 0 4 0 6 1 0 5-3 8-8 8Z"/>',
 x:'<path fill="#111" d="M5 4h9.6l10.1 13.5L36.5 4H43L27.6 21.6 44 44h-9.6L23 29.5 10.1 44H3.5l16.7-19.1L5 4Zm8.1 4.5H9.3l25.5 31h3.8l-25.5-31Z"/>',
 github:'<path fill="#171515" d="M24 3C12.4 3 3 12.5 3 24.2c0 9.4 6 17.4 14.4 20.2 1.1.2 1.4-.5 1.4-1v-3.8c-5.9 1.3-7.2-2.5-7.2-2.5-1-2.4-2.4-3.1-2.4-3.1-1.9-1.3.2-1.3.2-1.3 2.1.2 3.2 2.2 3.2 2.2 1.8 3.2 4.8 2.3 6 1.8.2-1.4.7-2.3 1.3-2.9-4.7-.5-9.6-2.4-9.6-10.5 0-2.3.8-4.2 2.2-5.7-.2-.5-.9-2.7.2-5.6 0 0 1.8-.6 5.8 2.2a20 20 0 0 1 10.6 0c4-2.8 5.8-2.2 5.8-2.2 1.1 2.9.4 5.1.2 5.6 1.4 1.5 2.2 3.4 2.2 5.7 0 8.1-4.9 10-9.6 10.5.8.7 1.4 2 1.4 4v5.9c0 .6.4 1.2 1.4 1C39 41.6 45 33.6 45 24.2 45 12.5 35.6 3 24 3Z"/>',
 linkedin:'<rect x="3" y="3" width="42" height="42" rx="4" fill="#0a66c2"/><path fill="#fff" d="M13 19h5v16h-5zm2.5-8a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8ZM21 19h4.8v2.2h.1c.7-1.3 2.3-2.7 4.8-2.7 5.1 0 6.1 3.3 6.1 7.6V35h-5v-7.9c0-1.9 0-4.3-2.7-4.3s-3.1 2.1-3.1 4.2V35h-5Z"/>',
 email:'<rect x="4" y="9" width="40" height="30" rx="4" fill="#254bb8"/><path d="m6 12 18 14 18-14" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>',
 excel:'<rect x="15" y="5" width="29" height="38" rx="4" fill="#21a366"/><path fill="#107c41" d="M20 10h20v28H20z"/><path fill="#185c37" d="M4 12a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V12Z"/><path fill="#fff" d="m9 17 4.3 6.7L17.7 17h4l-6.3 9 6.5 9h-4.2l-4.4-6.8L9 35H5l6.3-9L5 17Z"/>',
 word:'<rect x="15" y="5" width="29" height="38" rx="4" fill="#41a5ee"/><path fill="#185abd" d="M20 10h20v28H20z"/><path fill="#103f91" d="M4 12a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V12Z"/><path fill="#fff" d="m7 17 2.2 14 3.1-10.5h3.4l3.1 10.5L21 17h3.8l-3.7 18h-4l-3-10.1L11 35H7L3.2 17Z"/>',
 powerpoint:'<rect x="14" y="5" width="30" height="38" rx="4" fill="#ed6c47"/><path fill="#c43e1c" d="M21 10h19v28H21z"/><circle cx="20" cy="24" r="15" fill="#f5a083"/><path fill="#c43e1c" d="M15 15h7c5 0 8 3 8 7s-3 7-8 7h-3v6h-4V15Zm4 4v6h3c2 0 3-1 3-3s-1-3-3-3h-3Z"/>',
 powerbi:'<path fill="#f2c811" d="M7 25h7v17H7zm11-9h7v26h-7zm11-8h7v34h-7z"/><path fill="#e6b800" d="M39 19h5v23h-5z"/>',
 powerquery:'<rect x="4" y="6" width="40" height="36" rx="7" fill="#174ea6"/><path fill="#fff" d="M11 14h16v4H15v5h10v4H15v6h13v4H11z"/><path fill="none" stroke="#f2c811" stroke-width="4" stroke-linecap="round" d="m29 29 9 9m-1-12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/>',
 tallyprime:'<rect x="8" y="5" width="32" height="17" fill="#1b4f91"/><rect x="8" y="25" width="15" height="17" fill="#f5c400"/><rect x="25" y="25" width="15" height="17" fill="#52b6d8"/>',
 tallyerp:'<path fill="#1477bc" d="M24 4 44 16 24 28 4 16 24 4Z"/><path fill="#f4a900" d="m4 20 17 10v14L4 34V20Z"/><path fill="#49a942" d="m44 20-17 10v14l17-10V20Z"/>',
 sap:'<path fill="#0874bb" d="M4 9h40v18L24 41 4 27V9Z"/><text x="24" y="26" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" font-weight="900" fill="#fff">SAP</text>',
 ai:'<path fill="#25234c" d="M22 3h4l2.2 11.8L39 9l2 3.5-10 7 13 3v4l-13 2.7 9 8.8-3 3-11-9-2 14h-4l-2.4-14-10 9-3-3 9.5-9L4 27v-4l13-3-10-7 2-3.5 10.6 5.8L22 3Z"/><circle cx="37" cy="8" r="3" fill="#cf4f88"/>'
};
const brandKey=(label,url)=>{const v=((label||"")+" "+(url||"")).toLowerCase();return v.includes("instagram")?"instagram":v.includes("threads")?"threads":(v.includes("twitter")||v.includes("x.com"))?"x":v.includes("github")?"github":v.includes("linkedin")?"linkedin":(v.includes("email")||v.includes("mailto:"))?"email":v.includes("excel")?"excel":v.includes("power bi")?"powerbi":v.includes("power query")?"powerquery":v.includes("powerpoint")?"powerpoint":v.includes("word")?"word":v.includes("sap")?"sap":v.includes("tally prime")?"tallyprime":v.includes("tally")?"tallyerp":v.includes("ai")?"ai":""};
let logoId=0;
const logo=(label,url,image,key)=>{if(image)return h("img",{class:"link-logo image-logo",src:image,alt:"","aria-hidden":"true",loading:"lazy"});const mark=h("span",{class:"link-logo","aria-hidden":"true"});const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("viewBox","0 0 48 48");svg.setAttribute("focusable","false");const source=BRAND[key||brandKey(label,url)]||'<path d="M12 24h24m-9-9 9 9-9 9" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',id="brand-logo-"+(++logoId);svg.innerHTML=source.replace(/id="([^"]+)"/g,(_,old)=>'id="'+id+'-'+old+'"').replace(/url\(#([^)]*)\)/g,(_,old)=>'url(#'+id+'-'+old+')');mark.append(svg);return mark};
const ext=(label,url,cls,icon)=>{const a=h("a",{class:"btn sm "+(cls||"ghost"),href:safe(url),target:"_blank",rel:"noopener noreferrer"}),image=icon&&(/^(data:image\/|[\w./-]+\.(png|jpe?g|webp|svg)(\?|$))/i.test(icon))?icon:null;a.append(logo(icon||label,url,image),h("span",{},label));return a};
const initials=n=>(n||"?").split(/\s+/).map(w=>w[0]).slice(0,2).join("").toUpperCase();
const pic=(src,alt,label,fit,bg)=>src?h("img",{src,alt:alt||"",loading:"lazy",style:fit?"object-fit:"+fit+";"+(bg?"background:"+bg:""):""}):h("div",{class:"ph","aria-hidden":"true"},label);
const tags=l=>l&&l.length?h("ul",{class:"tags"},l.map(t=>h("li",{},t))):null;
const projectShots=(items,title)=>{const shots=(Array.isArray(items)?items:items?[items]:[]).filter(s=>typeof s==="string"?s:s&&s.src);if(!shots.length)return null;const gallery=h("div",{class:"project-shots","aria-label":title+" screenshots"});shots.forEach((s,i)=>{const src=typeof s==="string"?s:s.src,alt=typeof s==="string"?title+" screenshot "+(i+1):(s.alt||s.caption||title+" screenshot "+(i+1)),button=h("button",{class:"project-shot",type:"button","aria-label":"Open screenshot: "+alt});button.append(pic(src,alt));button.addEventListener("click",()=>{const dlg=$("project-shot-dialog"),large=$("project-shot-large");large.src=src;large.alt=alt;$("project-shot-caption").textContent=(typeof s==="object"&&s.caption)||alt;dlg.showModal()});gallery.append(button)});return gallery};
const name=S.name||"Your Name";
document.title=name+" | Personal profile";$("brand").textContent=name;
$("h-name").textContent=name;$("h-tag").textContent=S.tagline||"";
$("h-photo").dataset.sticker="CMA Finalist";$("h-photo").setAttribute("role","img");$("h-photo").setAttribute("aria-label",(S.photoAlt||name)+", CMA Finalist");$("h-photo").append(pic(S.photo,S.photoAlt||name,initials(name)));
$("foot").textContent=S.footerNote||"© "+new Date().getFullYear()+" "+name;

const A=S.about||{};
const show={};
// About
$("a-bio").append(...(A.bio||[]).map(p=>h("p",{},p)));
const group=(t,el)=>el&&$(el.host).append(h("div",{class:"group"},h("h3",{},t),el.node));
if(A.skills&&A.skills.length)$("a-skills").append(h("div",{class:"group"},h("h3",{},"Skills"),tags(A.skills)));
const personal=(A.personalDetails||[]).filter(d=>d&&d.value);
const detailGroup=(label,target)=>{const rows=personal.filter(d=>d.label.toLowerCase()===label.toLowerCase());if(!rows.length)return;const box=h("div",{class:"personal-details group"});box.append(h("h3",{},label));const dl=h("dl",{class:"details personal-list"});dl.append(...rows.map(d=>h("div",{},h("dt",{},d.label),h("dd",{},d.value))));box.append(dl);$(target).append(box)};
detailGroup("Languages","a-languages");
if(A.interests&&A.interests.length)$("a-int").append(h("div",{class:"group"},h("h3",{},"Interests"),tags(A.interests)));
const tl=(id,title,list)=>{if(list&&list.length)$(id).append(h("div",{class:"group"},h("h3",{},title),h("ol",{class:"tl"},list.map(b=>h("li",{},h("strong",{},b.title),b.meta?h("span",{class:"meta"},b.meta):null,b.text?h("p",{},b.text):null)))))};
tl("a-exp","Experience",A.experience);tl("a-edu","Education",A.education);
show.about=!!(A.bio&&A.bio.length||A.skills&&A.skills.length||A.interests&&A.interests.length||A.experience&&A.experience.length||A.education&&A.education.length||personal.length);

// Cards
const cards=(id,list,fn)=>{list=list||[];$(id).append(...list.map(fn));return list.length>0};
const projectCard=(p,appKey)=>{const badge=logo(p.title||"Project",p.link,p.logo&&/^(data:image\/|[\w./-]+\.(png|jpe?g|webp|svg))/i.test(p.logo)?p.logo:null,p.logo&&!/^(data:image\/|[\w./-]+\.(png|jpe?g|webp|svg))/i.test(p.logo)?p.logo:appKey);badge.classList.add("project-app-logo");const body=h("div",{class:"project-item-body"},h("h5",{},p.title),p.description?h("p",{},p.description):null,tags(p.tech));const shots=projectShots(p.screenshots||p.screenshot,p.title||"Project");if(shots)body.append(shots);if(p.link)body.append(h("div",{class:"btns"},ext(p.linkLabel||"View project",p.link,"primary",p.linkIcon||p.image)));return h("li",{class:"project-item"},badge,body)};
const pg=$("project-groups");
(S.projectGroups||[]).forEach(g=>{
  const section=h("section",{class:"project-group"}),title=h("h3",{},g.title);
  if(g.logo){const badge=logo(g.title,"",null,g.logo);badge.classList.add("project-app-logo");section.append(h("div",{class:"project-group-heading"},badge,title))}else section.append(title);
  if(g.categories&&g.categories.length)g.categories.forEach(c=>{const sub=h("section",{class:"project-subsection"}),badge=logo(c.title,"",null,c.logo||brandKey(c.title,""));badge.classList.add("project-app-logo");sub.append(h("div",{class:"project-row-head"},badge,h("h4",{},c.title)));const shots=projectShots(c.screenshots,c.title);if(shots)sub.append(shots);if(c.projects&&c.projects.length){const list=h("ul",{class:"project-list"});list.append(...c.projects.map(p=>projectCard(p,c.logo||brandKey(c.title,""))));sub.append(list)}section.append(sub)});
  else if(g.projects&&g.projects.length){const list=h("ul",{class:"project-list"});list.append(...g.projects.map(p=>projectCard(p,g.logo||brandKey(g.title,""))));section.append(list)}
  pg.append(section)
});
show.projects=!!(S.projectGroups&&S.projectGroups.length);
show["apps-websites"]=cards("g-apps-websites",S.appsAndWebsites,a=>h("article",{class:"card"},
  h("div",{class:"thumb"},pic(a.image,a.name+" icon",initials(a.name),a.imageFit,a.imageBg)),
  h("div",{class:"card-body"},h("h3",{},a.name),h("p",{},a.description||""),tags(a.tech),
    a.link?h("div",{class:"btns"},ext(a.linkLabel||"Open",a.link,"primary",a.linkIcon||a.image)):null,
    a.platforms&&a.platforms.length?h("div",{class:"btns"},a.platforms.map(x=>ext(x.label,x.url,"primary",x.icon))):null)));

// Contact
const C=S.contact||{},socials=(C.socials||[]).filter(s=>s.url);
const cl=$("c-links");
cl.append(h("p",{class:"prose"},"The quickest way to reach me is by email or one of the profiles below."));
const location=(A.personalDetails||[]).find(d=>d&&d.label&&d.label.toLowerCase()==="location"&&d.value);
const contactInfo=h("div",{class:"contact-info"});
if(C.email){const email=h("a",{class:"btn sm primary",href:"mailto:"+C.email,"aria-label":"Email "+C.email});email.append(logo("Email","mailto:"+C.email),h("span",{},C.email));contactInfo.append(email)}
if(location)contactInfo.append(h("p",{class:"contact-location"},h("span",{},"📍 Location"),h("strong",{},location.value)));
if(contactInfo.children.length)cl.append(contactInfo);
if(socials.length){const ul=h("ul",{class:"links social-links"});socials.forEach(s=>{const a=h("a",{class:"social-icon-link",href:safe(s.url),target:"_blank",rel:"noopener noreferrer","aria-label":s.label,"title":s.label});a.append(logo(s.label,s.url,null));a.addEventListener("click",()=>{a.classList.add("clicked");setTimeout(()=>a.classList.remove("clicked"),450)});ul.append(h("li",{},a))});cl.append(ul)}
if(!C.email&&!socials.length)cl.append(h("p",{class:"note"},"Add your email and social links in data.js."));
show.contact=true;

// Hide empty sections, build nav
const labels={about:"About",projects:"Projects","apps-websites":"Apps and website",contact:"Contact"};
const menu=$("menu");
menu.append(h("li",{},h("a",{href:"#home"},"Home")));
for(const k in labels){const s=$(k);if(!show[k]){s.remove();continue}menu.append(h("li",{},h("a",{href:"#"+k},labels[k])))}
const work=["projects","apps-websites"].find(k=>show[k]);
if(work)$("btn-work").setAttribute("href","#"+work);else $("btn-work").remove();

// Mobile menu
const nav=document.querySelector("nav"),bg=$("burger");
document.getElementById("back-to-top")?.addEventListener("click",e=>{e.preventDefault();window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})});
const setMenu=o=>{nav.classList.toggle("open",o);bg.setAttribute("aria-expanded",o);bg.setAttribute("aria-label",o?"Close menu":"Open menu")};
bg.addEventListener("click",()=>setMenu(!nav.classList.contains("open")));
menu.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&nav.classList.contains("open")){setMenu(false);bg.focus()}});

// Add animated symbols to section and subsection headings.
const headingEmoji=text=>{const v=(text||"").toLowerCase();if(v.includes("about"))return ["🪪","#6d7cff"];if(v.includes("project"))return ["📊","#f3a928"];if(v.includes("app")||v.includes("website"))return ["💻","#38a9e8"];if(v.includes("contact"))return ["✉️","#f06c86"];if(v.includes("experience"))return ["💼","#f18b42"];if(v.includes("education")||v.includes("cma"))return ["🎓","#9b69e8"];if(v.includes("skill"))return ["✨","#e8ad28"];if(v.includes("interest"))return ["🌱","#43b87a"];if(v.includes("language"))return ["🗣️","#40a9a3"];if(v.includes("location"))return ["📍","#ef745c"];if(v.includes("excel")||v.includes("power"))return ["📈","#38a879"];if(v.includes("tally")||v.includes("erp")||v.includes("sap"))return ["🧾","#e58c37"];if(v.includes("ai"))return ["🤖","#6a80e8"];return ["✦","#8075e8"]};
document.querySelectorAll("main h2,main h3").forEach(el=>{const [symbol,color]=headingEmoji(el.textContent);el.prepend(h("span",{class:"heading-icon","aria-hidden":"true",style:"--icon-glow:"+color},symbol))});


// Reveal on scroll + active link
const items=document.querySelectorAll(".card,.details div,.group,.prose");
items.forEach(i=>i.classList.add("rv"));
if("IntersectionObserver"in window){
  const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.1});
  items.forEach(i=>io.observe(i));
  const links=[...menu.querySelectorAll("a")];
  const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+x.target.id))}),{rootMargin:"-40% 0px -55% 0px"});
  document.querySelectorAll("main section").forEach(s=>so.observe(s));
}else items.forEach(i=>i.classList.add("in"));
})();
