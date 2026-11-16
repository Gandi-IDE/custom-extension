(()=>{var ty=Object.defineProperty;var Ye=(n,e)=>{for(var t in e)ty(n,t,{get:e[t],enumerable:!0})};var Ah=`:root{--easyui-primary: #3b82f6;--easyui-primary-2: #60a5fa;--easyui-primary-rgb: 59, 130, 246;--easyui-radius: 18px;--easyui-radius-sm: 12px;--easyui-font: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Roboto, Helvetica, Arial, sans-serif}@keyframes easyui-fade-in{0%{opacity:0;transform:scale(.92) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes easyui-slide-up{0%{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}@keyframes easyui-bounce{0%{opacity:0;transform:scale(.3)}55%{opacity:1;transform:scale(1.08)}to{transform:scale(1)}}@keyframes easyui-ripple{0%{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}.easyui-animate-fade{animation:easyui-fade-in .45s cubic-bezier(.16,1,.3,1)}.easyui-animate-slide{animation:easyui-slide-up .45s cubic-bezier(.16,1,.3,1)}.easyui-animate-bounce{animation:easyui-bounce .55s cubic-bezier(.68,-.55,.265,1.55)}.easyui-animate-ripple{animation:easyui-ripple .4s ease-out}#easyui-pages-container{position:relative;width:100%;height:100%}.easyui-page{position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;display:none}.easyui-page.active{display:block}.easyui-btn,.easyui-select,.easyui-slider-container,.easyui-switch,.easyui-progress,.easyui-rating,.easyui-tag,.easyui-skeleton,.easyui-table{position:absolute}#easyui-stage-container>canvas.easyui-3d-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0}#easyui-pages-container{z-index:1}.easyui-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:11px 24px;border-radius:999px;font-size:14px;font-weight:600;letter-spacing:.2px;cursor:pointer;transition:all .2s cubic-bezier(.16,1,.3,1);border:none;font-family:var(--easyui-font);user-select:none;white-space:nowrap;position:relative;overflow:hidden;isolation:isolate;box-shadow:0 6px 16px -6px rgba(var(--easyui-primary-rgb),.6),0 2px 4px #00000014}.easyui-btn-primary{background:linear-gradient(135deg,var(--easyui-primary),var(--easyui-primary-2));color:#fff}.easyui-btn-secondary{background:linear-gradient(135deg,#64748b,#94a3b8);color:#fff;box-shadow:0 6px 16px -6px #64748b99,0 2px 4px #00000014}.easyui-btn-danger{background:linear-gradient(135deg,#ef4444,#f87171);color:#fff;box-shadow:0 6px 16px -6px #ef444499,0 2px 4px #00000014}.easyui-btn-success{background:linear-gradient(135deg,#10b981,#34d399);color:#fff;box-shadow:0 6px 16px -6px #10b98199,0 2px 4px #00000014}.easyui-btn-warning{background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#fff;box-shadow:0 6px 16px -6px #f59e0b99,0 2px 4px #00000014}.easyui-btn:hover{transform:translateY(-2px);filter:brightness(1.05);box-shadow:0 14px 28px -8px rgba(var(--easyui-primary-rgb),.65),0 4px 10px #0000001f}.easyui-btn:active{transform:translateY(0) scale(.97);box-shadow:0 4px 10px -4px rgba(var(--easyui-primary-rgb),.5)}.easyui-btn:focus-visible{outline:3px solid rgba(var(--easyui-primary-rgb),.4);outline-offset:2px}.easyui-btn-ripple{position:absolute;border-radius:50%;background:#ffffff8c;transform:scale(0);animation:easyui-ripple-effect .6s ease-out forwards;pointer-events:none;z-index:0}@keyframes easyui-ripple-effect{to{transform:scale(2.6);opacity:0}}.easyui-select{padding:9px 38px 9px 18px;border-radius:999px;border:1px solid rgba(203,213,225,.9);background-color:#ffffffeb;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;font-size:14px;font-family:var(--easyui-font);cursor:pointer;-webkit-appearance:none;appearance:none;box-shadow:0 4px 12px -4px #0000001f;transition:box-shadow .2s ease,border-color .2s ease,transform .2s ease}.easyui-select:hover{border-color:var(--easyui-primary);box-shadow:0 6px 16px -6px rgba(var(--easyui-primary-rgb),.4)}.easyui-select:focus{outline:none;border-color:var(--easyui-primary);box-shadow:0 0 0 3px rgba(var(--easyui-primary-rgb),.18)}.easyui-slider-container{display:flex;align-items:center;gap:12px;background:#ffffffc7;padding:8px 16px;border-radius:999px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.6);box-shadow:0 6px 18px -8px #0000002e}.easyui-slider{width:200px;height:8px;-webkit-appearance:none;appearance:none;background:#e2e8f0;border-radius:999px;outline:none;cursor:pointer;transition:background .2s ease}.easyui-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;background:#fff;border:3px solid var(--easyui-primary);border-radius:50%;cursor:pointer;box-shadow:0 2px 8px rgba(var(--easyui-primary-rgb),.5);transition:transform .15s ease,box-shadow .2s ease}.easyui-slider::-webkit-slider-thumb:hover{transform:scale(1.18);box-shadow:0 4px 14px rgba(var(--easyui-primary-rgb),.7)}.easyui-slider::-moz-range-thumb{width:20px;height:20px;background:#fff;border:3px solid var(--easyui-primary);border-radius:50%;cursor:pointer;box-shadow:0 2px 8px rgba(var(--easyui-primary-rgb),.5)}.easyui-slider-value{min-width:42px;text-align:center;font-size:14px;font-weight:600;color:var(--easyui-primary);font-family:var(--easyui-font)}.easyui-switch{position:relative;display:inline-block;width:54px;height:30px}.easyui-switch input{opacity:0;width:0;height:0}.easyui-switch-slider{position:absolute;cursor:pointer;inset:0;background-color:#cbd5e1;transition:.3s cubic-bezier(.16,1,.3,1);border-radius:999px;box-shadow:inset 0 2px 4px #0000001f}.easyui-switch-slider:before{position:absolute;content:"";height:24px;width:24px;left:3px;top:3px;background-color:#fff;transition:.3s cubic-bezier(.16,1,.3,1);border-radius:50%;box-shadow:0 2px 6px #00000040}.easyui-switch input:checked+.easyui-switch-slider{background:linear-gradient(135deg,var(--easyui-primary),var(--easyui-primary-2));box-shadow:0 0 14px rgba(var(--easyui-primary-rgb),.6)}.easyui-switch input:checked+.easyui-switch-slider:before{transform:translate(24px)}.easyui-switch input:focus-visible+.easyui-switch-slider{outline:3px solid rgba(var(--easyui-primary-rgb),.4);outline-offset:2px}.easyui-progress{width:200px;height:10px;background:#e2e8f0e6;border-radius:999px;overflow:hidden;box-shadow:inset 0 1px 3px #0000001f}.easyui-progress-fill{width:0%;height:100%;background:linear-gradient(90deg,var(--easyui-primary),var(--easyui-primary-2));border-radius:999px;transition:width .5s cubic-bezier(.16,1,.3,1);box-shadow:0 0 10px rgba(var(--easyui-primary-rgb),.6);position:relative;overflow:hidden}.easyui-progress-fill:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);transform:translate(-100%);animation:easyui-progress-shine 1.6s infinite}@keyframes easyui-progress-shine{to{transform:translate(100%)}}.easyui-rating{display:flex;gap:6px;background:#ffffffb8;padding:6px 14px;border-radius:999px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.6);box-shadow:0 6px 18px -8px #0000002e}.easyui-rating-star{font-size:26px;cursor:pointer;transition:transform .15s ease,color .15s ease;color:#cbd5e1;line-height:1}.easyui-rating-star.active{color:#fbbf24;background:linear-gradient(135deg,#fbbf24,#f59e0b);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 12px rgba(251,191,36,.7)}.easyui-rating-star:hover{transform:scale(1.2) rotate(-6deg)}.easyui-tag{background:rgba(var(--easyui-primary-rgb),.14);color:var(--easyui-primary);padding:7px 16px;border-radius:999px;font-size:13px;font-weight:600;display:inline-flex;align-items:center;gap:8px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(var(--easyui-primary-rgb),.25);box-shadow:0 4px 12px -6px rgba(var(--easyui-primary-rgb),.4);font-family:var(--easyui-font)}.easyui-skeleton{background:linear-gradient(90deg,#e2e8f0 25%,#f1f5f9 37%,#e2e8f0 63%);background-size:400% 100%;animation:easyui-shimmer 1.4s infinite linear;border-radius:14px}@keyframes easyui-shimmer{0%{background-position:100% 0}to{background-position:0 0}}.easyui-stage-root,#easyui-stage-container *,.easyui-page *{box-sizing:border-box}.easyui-sr-only{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.easyui-btn:focus-visible,.easyui-select:focus-visible,.easyui-slider:focus-visible,.easyui-switch input:focus-visible+.easyui-switch-slider,.easyui-rating-star:focus-visible,.easyui-modal-container:focus-visible,.easyui-toast:focus-visible{outline:3px solid rgba(var(--easyui-primary-rgb),.55);outline-offset:2px}.easyui-disabled{opacity:.45!important;pointer-events:none!important;filter:grayscale(.3);cursor:not-allowed!important}.easyui-loading{pointer-events:none!important;position:relative}.easyui-loading:after{content:"";position:absolute;top:50%;left:50%;width:18px;height:18px;margin:-9px 0 0 -9px;border:2.5px solid rgba(var(--easyui-primary-rgb),.35);border-top-color:var(--easyui-primary);border-radius:50%;animation:easyui-spin .7s linear infinite;z-index:2}@keyframes easyui-spin{to{transform:rotate(360deg)}}.easyui-error{box-shadow:0 0 0 2px #ef4444,0 6px 16px -6px #ef444480!important;border-color:#ef4444!important}@media(prefers-reduced-motion:reduce){.easyui-animate-fade,.easyui-animate-slide,.easyui-animate-bounce,.easyui-animate-ripple,.easyui-modal-mask,.easyui-modal-container,.easyui-toast,.easyui-skeleton,.easyui-progress-fill:after,.easyui-loading:after,.easyui-btn,.easyui-btn:hover,.easyui-btn:active,.easyui-select,.easyui-switch-slider,.easyui-switch-slider:before,.easyui-slider::-webkit-slider-thumb,.easyui-slider::-moz-range-thumb,.easyui-rating-star{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}}.easyui-card,.easyui-divider,.easyui-image,.easyui-input,.easyui-textarea,.easyui-checkbox,.easyui-radio,.easyui-number,.easyui-search,.easyui-tabs,.easyui-accordion,.easyui-empty,.easyui-list,.easyui-menu,.easyui-dropdown,.easyui-tooltip,.easyui-alert,.easyui-loading-box,.easyui-link,.easyui-h1,.easyui-h2,.easyui-h3,.easyui-text{position:absolute}.easyui-h1{font-size:26px;font-weight:700;color:#0f172a;margin:4px 0}.easyui-h2{font-size:21px;font-weight:700;color:#0f172a;margin:4px 0}.easyui-h3{font-size:17px;font-weight:600;color:#1e293b;margin:4px 0}.easyui-text{font-size:14px;color:#334155;line-height:1.6}.easyui-text-muted{color:#64748b}.easyui-link{color:var(--easyui-primary);text-decoration:none;cursor:pointer}.easyui-link:hover{text-decoration:underline}.easyui-link:visited{color:var(--easyui-primary-2)}.easyui-link[aria-disabled=true]{opacity:.5;pointer-events:none}.easyui-card{background:#fffffff5;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:var(--easyui-radius);box-shadow:0 18px 40px -16px #00000047;border:1px solid rgba(255,255,255,.7);padding:18px;min-width:180px;max-width:440px;transition:transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s}.easyui-card:hover{transform:translateY(-3px);box-shadow:0 26px 50px -18px #00000057}.easyui-card-header{font-weight:700;font-size:16px;margin-bottom:10px;color:#0f172a;display:flex;align-items:center;gap:8px}.easyui-card-body{font-size:14px;color:#334155;line-height:1.6}.easyui-card-footer{margin-top:14px;display:flex;gap:8px;flex-wrap:wrap}.easyui-divider{width:220px;border:none;display:flex;align-items:center;color:#94a3b8;font-size:12px;gap:10px}.easyui-divider:before,.easyui-divider:after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(148,163,184,.6),transparent)}.easyui-divider-vertical{width:auto;height:60px;flex-direction:column;writing-mode:vertical-rl}.easyui-divider-vertical:before,.easyui-divider-vertical:after{height:auto;width:1px;background:linear-gradient(180deg,transparent,rgba(148,163,184,.6),transparent)}.easyui-image{border-radius:var(--easyui-radius);overflow:hidden;box-shadow:0 12px 28px -12px #0000004d;background:#e2e8f0;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:13px}.easyui-image img{width:100%;height:100%;object-fit:cover;display:block}.easyui-image.easyui-avatar{border-radius:50%}.easyui-avatar-group{display:flex;position:absolute}.easyui-avatar-group .easyui-image.easyui-avatar{margin-left:-10px;border:2px solid #fff}.easyui-avatar-group .easyui-image.easyui-avatar:first-child{margin-left:0}.easyui-input,.easyui-textarea{width:240px;background:#fffffff2;border:1.5px solid #e2e8f0;border-radius:var(--easyui-radius-sm);padding:10px 14px;font-size:14px;color:#0f172a;font-family:var(--easyui-font);transition:border-color .18s,box-shadow .18s;box-shadow:0 4px 12px -8px #0003}.easyui-textarea{resize:vertical;min-height:84px}.easyui-input:focus,.easyui-textarea:focus{outline:none;border-color:var(--easyui-primary);box-shadow:0 0 0 3px rgba(var(--easyui-primary-rgb),.25),0 4px 12px -8px #0003}.easyui-input::placeholder,.easyui-textarea::placeholder{color:#94a3b8}.easyui-input.easyui-readonly,.easyui-textarea.easyui-readonly{background:#f1f5f9;color:#475569}.easyui-input.easyui-error,.easyui-textarea.easyui-error{border-color:#ef4444;box-shadow:0 0 0 3px #ef444433}.easyui-input input,.easyui-textarea textarea{border:none;outline:none;background:transparent;width:100%;padding:0;font:inherit;color:inherit}.easyui-textarea textarea{min-height:60px;display:block}.easyui-checkbox,.easyui-radio{display:inline-flex;align-items:center;gap:8px;font-size:14px;color:#334155;cursor:pointer;user-select:none}.easyui-checkbox input,.easyui-radio input{width:18px;height:18px;accent-color:var(--easyui-primary);cursor:pointer}.easyui-checkbox.easyui-indeterminate input{outline:2px dashed rgba(var(--easyui-primary-rgb),.7);outline-offset:1px}.easyui-checkbox-group,.easyui-radio-group{display:flex;flex-direction:column;gap:8px;background:#fffffff2;border:1px solid #e2e8f0;border-radius:var(--easyui-radius-sm);padding:12px 14px;box-shadow:0 4px 12px -8px #0003;min-width:160px}.easyui-checkbox-group>.easyui-group-title,.easyui-radio-group>.easyui-group-title{font-size:12px;font-weight:700;color:#94a3b8;margin-bottom:2px;letter-spacing:.4px}.easyui-number{display:inline-flex;align-items:center;background:#fffffff2;border:1.5px solid #e2e8f0;border-radius:var(--easyui-radius-sm);overflow:hidden;box-shadow:0 4px 12px -8px #0003}.easyui-number button{width:34px;height:34px;border:none;background:rgba(var(--easyui-primary-rgb),.12);color:var(--easyui-primary);font-size:18px;cursor:pointer;font-weight:700;transition:background .15s}.easyui-number button:hover{background:rgba(var(--easyui-primary-rgb),.22)}.easyui-number input{width:64px;border:none;text-align:center;font-size:15px;color:#0f172a;font-family:var(--easyui-font)}.easyui-number input:focus{outline:none}.easyui-search{display:inline-flex;align-items:center;gap:6px;background:#fffffff2;border:1.5px solid #e2e8f0;border-radius:999px;padding:8px 14px;box-shadow:0 4px 12px -8px #0003;width:240px}.easyui-search:focus-within{border-color:var(--easyui-primary);box-shadow:0 0 0 3px rgba(var(--easyui-primary-rgb),.22)}.easyui-search input{border:none;outline:none;flex:1;font-size:14px;color:#0f172a;background:transparent;font-family:var(--easyui-font)}.easyui-search .easyui-search-clear{cursor:pointer;color:#94a3b8;border:none;background:none;font-size:16px;line-height:1}.easyui-search .easyui-search-clear:hover{color:#475569}.easyui-tabs{background:#fffffff5;border-radius:var(--easyui-radius);box-shadow:0 14px 30px -14px #00000042;border:1px solid rgba(255,255,255,.7);padding:8px;min-width:240px}.easyui-tabs-bar{display:flex;gap:4px;border-bottom:1px solid #eef2f7;overflow-x:auto}.easyui-tabs-tab{padding:8px 14px;cursor:pointer;border-radius:10px 10px 0 0;font-size:14px;color:#64748b;font-weight:600;border:none;background:none;position:relative;white-space:nowrap;transition:color .15s,background .15s}.easyui-tabs-tab:hover{background:rgba(var(--easyui-primary-rgb),.06)}.easyui-tabs-tab[aria-selected=true]{color:var(--easyui-primary)}.easyui-tabs-tab[aria-selected=true]:after{content:"";position:absolute;left:10px;right:10px;bottom:-1px;height:3px;border-radius:3px;background:linear-gradient(90deg,var(--easyui-primary),var(--easyui-primary-2))}.easyui-tabs-panel{padding:12px;font-size:14px;color:#334155}.easyui-accordion{background:#fffffff5;border-radius:var(--easyui-radius);box-shadow:0 14px 30px -14px #00000042;border:1px solid rgba(255,255,255,.7);width:260px;overflow:hidden}.easyui-accordion-item+.easyui-accordion-item{border-top:1px solid #eef2f7}.easyui-accordion-header{width:100%;text-align:left;padding:13px 16px;cursor:pointer;border:none;background:none;font-size:14px;font-weight:600;color:#334155;display:flex;justify-content:space-between;align-items:center;font-family:var(--easyui-font)}.easyui-accordion-header:hover{background:rgba(var(--easyui-primary-rgb),.05)}.easyui-accordion-header[aria-expanded=true] .easyui-accordion-caret{transform:rotate(90deg)}.easyui-accordion-caret{transition:transform .2s;font-size:12px}.easyui-accordion-panel{padding:0 16px 14px;font-size:13px;color:#475569;line-height:1.6}.easyui-accordion-panel[hidden]{display:none}.easyui-empty{display:flex;flex-direction:column;align-items:center;gap:10px;color:#94a3b8;font-size:13px;padding:24px;text-align:center;background:#ffffffb3;border-radius:var(--easyui-radius);border:1px dashed #cbd5e1;min-width:180px}.easyui-empty-icon{font-size:40px;opacity:.7}.easyui-empty-action{margin-top:6px}.easyui-list{background:#fffffff5;border-radius:var(--easyui-radius);box-shadow:0 14px 30px -14px #00000042;border:1px solid rgba(255,255,255,.7);width:240px;max-height:260px;overflow:auto;padding:6px}.easyui-list-item{padding:10px 12px;border-radius:10px;font-size:14px;color:#334155;cursor:pointer;display:flex;align-items:center;gap:10px;transition:background .15s}.easyui-list-item:hover{background:rgba(var(--easyui-primary-rgb),.08)}.easyui-list-item[aria-selected=true]{background:rgba(var(--easyui-primary-rgb),.16);color:var(--easyui-primary);font-weight:600}.easyui-menu{background:#fffffffa;border-radius:var(--easyui-radius-sm);box-shadow:0 18px 40px -16px #0000004d;border:1px solid rgba(255,255,255,.8);padding:6px;min-width:180px}.easyui-menu-item{padding:9px 14px;border-radius:8px;font-size:14px;color:#334155;cursor:pointer;display:flex;justify-content:space-between;gap:10px}.easyui-menu-item:hover,.easyui-menu-item:focus-visible{background:rgba(var(--easyui-primary-rgb),.1);color:var(--easyui-primary);outline:none}.easyui-menu-item[aria-disabled=true]{opacity:.45;pointer-events:none}.easyui-menu-item.easyui-menu-current{background:rgba(var(--easyui-primary-rgb),.16);color:var(--easyui-primary);font-weight:600}.easyui-dropdown{display:inline-flex}.easyui-dropdown-pop{position:fixed;z-index:10001;background:#fffffffa;border-radius:var(--easyui-radius-sm);box-shadow:0 18px 40px -16px #00000052;border:1px solid rgba(255,255,255,.8);padding:6px;min-width:160px;animation:easyui-fade-in .2s cubic-bezier(.16,1,.3,1)}.easyui-dropdown-item{padding:9px 14px;border-radius:8px;font-size:14px;color:#334155;cursor:pointer}.easyui-dropdown-item:hover,.easyui-dropdown-item:focus-visible{background:rgba(var(--easyui-primary-rgb),.1);color:var(--easyui-primary);outline:none}.easyui-dropdown-item[aria-selected=true]{color:var(--easyui-primary);font-weight:600}.easyui-tooltip-trigger{display:inline-flex;align-items:center;justify-content:center;cursor:help}.easyui-tooltip-pop{position:fixed;z-index:10002;max-width:240px;background:#0f172af0;color:#fff;font-size:13px;line-height:1.5;padding:8px 12px;border-radius:10px;box-shadow:0 12px 28px -12px #00000080;animation:easyui-fade-in .18s ease;pointer-events:none}.easyui-tooltip-pop.easyui-popover{pointer-events:auto;background:#fffffffa;color:#334155;border:1px solid rgba(255,255,255,.8);max-width:280px}.easyui-alert{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border-radius:var(--easyui-radius-sm);font-size:14px;line-height:1.5;min-width:220px;max-width:360px;border:1px solid transparent}.easyui-alert-info{background:rgba(var(--easyui-primary-rgb),.1);border-color:rgba(var(--easyui-primary-rgb),.3);color:#1e40af}.easyui-alert-success{background:#10b9811a;border-color:#10b9814d;color:#065f46}.easyui-alert-warning{background:#f59e0b1f;border-color:#f59e0b59;color:#92400e}.easyui-alert-danger{background:#ef44441a;border-color:#ef44444d;color:#991b1b}.easyui-alert-icon{font-size:18px;line-height:1.4}.easyui-alert-close{margin-left:auto;border:none;background:none;cursor:pointer;color:inherit;opacity:.6;font-size:16px;line-height:1}.easyui-alert-close:hover{opacity:1}.easyui-alert-desc{font-size:13px;opacity:.85;margin-top:2px}.easyui-spin{width:28px;height:28px;border:3px solid rgba(var(--easyui-primary-rgb),.25);border-top-color:var(--easyui-primary);border-radius:50%;animation:easyui-spin .7s linear infinite}.easyui-loading-box{display:inline-flex;flex-direction:column;align-items:center;gap:8px;color:#64748b;font-size:13px;background:#fffffff5;padding:18px 22px;border-radius:var(--easyui-radius);box-shadow:0 14px 30px -14px #0000004d}.easyui-loading-full{position:fixed;inset:0;z-index:10003;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:#0f172a73;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.easyui-loading-full .easyui-spin{width:46px;height:46px;border-width:5px;border-top-color:#fff}.easyui-loading-full .easyui-loading-text{color:#fff;font-size:14px}.easyui-confirm-danger .easyui-btn-primary{background:linear-gradient(135deg,#ef4444,#f87171);box-shadow:0 6px 16px -6px #ef444499,0 2px 4px #00000014}.easyui-tabs-tab:focus-visible,.easyui-accordion-header:focus-visible,.easyui-menu-item:focus-visible,.easyui-dropdown-item:focus-visible,.easyui-list-item:focus-visible,.easyui-input:focus-visible,.easyui-textarea:focus-visible,.easyui-number input:focus-visible,.easyui-search input:focus-visible,.easyui-checkbox input:focus-visible,.easyui-radio input:focus-visible,.easyui-number button:focus-visible,.easyui-tooltip-trigger:focus-visible,.easyui-alert-close:focus-visible{outline:3px solid rgba(var(--easyui-primary-rgb),.55);outline-offset:2px}@media(prefers-reduced-motion:reduce){.easyui-card,.easyui-card:hover,.easyui-dropdown-pop,.easyui-tooltip-pop,.easyui-accordion-caret,.easyui-list-item,.easyui-menu-item,.easyui-dropdown-item,.easyui-spin,.easyui-loading-box,.easyui-loading-full,.easyui-tabs-tab,.easyui-accordion-header,.easyui-input,.easyui-textarea,.easyui-search,.easyui-number button,.easyui-checkbox,.easyui-radio,.easyui-alert{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}}.easyui-table-container{background:#fffffff5;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:var(--easyui-radius);overflow:auto;box-shadow:0 18px 40px -16px #00000047;border:1px solid rgba(255,255,255,.7)}.easyui-table{width:100%;border-collapse:collapse;font-size:14px;font-family:var(--easyui-font);overflow:hidden;border-radius:var(--easyui-radius)}.easyui-table th,.easyui-table td{border-bottom:1px solid #eef2f7;padding:10px 14px;text-align:left}.easyui-table th{background:linear-gradient(135deg,var(--easyui-primary),var(--easyui-primary-2));color:#fff;font-weight:600;letter-spacing:.3px}.easyui-table tbody tr{transition:background .18s ease}.easyui-table tbody tr:nth-child(2n){background:#f1f5f999}.easyui-table tbody tr:hover{background:rgba(var(--easyui-primary-rgb),.08)}.easyui-table .merged{background:#f8fafc}.easyui-modal-mask{position:fixed;inset:0;background:#0f172a8c;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;z-index:10000;animation:easyui-mask-fade .25s ease}@keyframes easyui-mask-fade{0%{opacity:0}to{opacity:1}}.easyui-modal-container{background:#fffffffa;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-radius:24px;padding:28px;min-width:300px;max-width:90vw;max-height:80vh;overflow:auto;box-shadow:0 30px 70px -20px #00000073;border:1px solid rgba(255,255,255,.8);animation:easyui-modal-pop .35s cubic-bezier(.16,1,.3,1)}@keyframes easyui-modal-pop{0%{opacity:0;transform:scale(.9) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}.easyui-toast{position:static;transform:none;background:linear-gradient(135deg,#1e293b,#334155);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:#fff;padding:14px 26px;border-radius:999px;z-index:11000;font-size:14px;font-weight:500;font-family:var(--easyui-font);white-space:nowrap;display:flex;align-items:center;gap:9px;box-shadow:0 14px 30px -10px #00000080;animation:easyui-toast-in .4s cubic-bezier(.16,1,.3,1)}#easyui-toast-container{position:fixed;left:50%;bottom:28px;transform:translate(-50%);z-index:11000;display:flex;flex-direction:column;align-items:center;gap:10px;pointer-events:none}@keyframes easyui-toast-in{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.draggable{cursor:grab;user-select:none}.draggable:active{cursor:grabbing}#easyui-stage-container,#easyui-pages-container,.easyui-page{pointer-events:none}.easyui-page>*,#easyui-pages-container>*:not(.easyui-page){pointer-events:auto}.easyui-markdown{font-size:14px;line-height:1.6;font-family:var(--easyui-font);color:#1e293b}.easyui-markdown h1{font-size:26px;margin:10px 0;font-weight:700}.easyui-markdown h2{font-size:21px;margin:8px 0;font-weight:700}.easyui-markdown h3{font-size:17px;margin:6px 0;font-weight:600}.easyui-markdown p{margin:6px 0}.easyui-markdown code{background:#f1f5f9;padding:2px 6px;border-radius:6px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.9em}.easyui-markdown pre{background:linear-gradient(135deg,#0f172a,#1e293b);color:#e2e8f0;padding:14px;border-radius:12px;overflow:auto;box-shadow:inset 0 0 0 1px #ffffff0d}.easyui-markdown a{color:var(--easyui-primary);text-decoration:none;font-weight:500}.easyui-markdown a:hover{text-decoration:underline}.easyui-markdown img{max-width:100%;border-radius:12px;box-shadow:0 8px 20px -8px #0000004d}.easyui-markdown ul{padding-left:20px}.easyui-markdown li{margin:2px 0}.easyui-markdown blockquote{border-left:4px solid var(--easyui-primary);padding:4px 12px;margin:8px 0;color:#475569;background:rgba(var(--easyui-primary-rgb),.06);border-radius:0 8px 8px 0}#easyui-stage-container,#easyui-toast-container,.easyui-modal-mask{--easyui-theme-scope: 1}.easyui-themed-image{background-size:cover;background-position:center;background-repeat:no-repeat}#easyui-dashboard-overlay{position:fixed;inset:0;z-index:2147483000;background:#0f172a8c;display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box}#easyui-dashboard-overlay .easyui-dashboard-panel{position:relative;width:min(1180px,96vw);height:min(820px,92vh);border-radius:18px;background:#fff;box-shadow:0 30px 90px -30px #0009;overflow:hidden;outline:none}#easyui-dashboard-overlay .easyui-dashboard-close{position:absolute;top:10px;right:12px;z-index:2;width:32px;height:32px;border:0;border-radius:10px;background:#fffffff0;color:#0f172a;font-size:18px;line-height:1;cursor:pointer;box-shadow:0 6px 18px -8px #000000a6}#easyui-dashboard-overlay .easyui-dashboard-close:hover{background:#fff}
`,wh=`:root{--db-bg: #f6f7fb;--db-panel: #ffffff;--db-border: #e6e8ef;--db-text: #1c2333;--db-muted: #6b7280;--db-primary: #3b82f6;--db-primary-dark: #1d4ed8;--db-danger: #dc2626;--db-radius: 14px;--db-shadow: 0 10px 30px -18px rgba(15, 23, 42, .35);color-scheme:light}*{box-sizing:border-box}html,body{margin:0;height:100%}body{background:var(--db-bg);color:var(--db-text);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Microsoft YaHei,Roboto,sans-serif;font-size:14px;line-height:1.5}#app{min-height:100%}button,input,select,textarea{font:inherit;color:inherit}.eui-shell{display:flex;flex-direction:column;min-height:100vh}.eui-header{display:flex;align-items:center;gap:16px;padding:12px 20px;background:#fff;border-bottom:1px solid var(--db-border);position:sticky;top:0;z-index:10}.eui-brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:16px}.eui-brand-mark{width:28px;height:28px;border-radius:9px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:grid;place-items:center;color:#fff;font-size:14px}.eui-nav{display:flex;gap:4px;margin-left:12px}.eui-nav a{padding:6px 12px;border-radius:9px;color:var(--db-muted);text-decoration:none;font-weight:500}.eui-nav a:hover{background:#f1f5f9;color:var(--db-text)}.eui-nav a.active{background:#eff6ff;color:var(--db-primary-dark)}.eui-header-right{margin-left:auto;display:flex;align-items:center;gap:10px}.eui-user{color:var(--db-muted);font-size:13px}.eui-main{flex:1;width:100%;max-width:1280px;margin:0 auto;padding:20px}.eui-page-title{display:flex;align-items:center;gap:12px;margin:0 0 16px;font-size:22px}.eui-page-sub{color:var(--db-muted);font-weight:400;font-size:13px}.eui-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--db-border);background:#fff;color:var(--db-text);padding:8px 14px;border-radius:10px;cursor:pointer;font-weight:600;transition:background .15s ease,border-color .15s ease,transform .15s ease;text-decoration:none}.eui-btn:hover{background:#f8fafc;border-color:#cbd5e1}.eui-btn:active{transform:translateY(1px)}.eui-btn[disabled]{opacity:.55;cursor:not-allowed}.eui-btn-primary{background:var(--db-primary);border-color:var(--db-primary);color:#fff}.eui-btn-primary:hover{background:var(--db-primary-dark);border-color:var(--db-primary-dark)}.eui-btn-danger{color:var(--db-danger);border-color:#fecaca;background:#fff5f5}.eui-btn-ghost{border-color:transparent;background:transparent}.eui-btn-sm{padding:5px 10px;font-size:12px;border-radius:8px}.eui-card{background:var(--db-panel);border:1px solid var(--db-border);border-radius:var(--db-radius);box-shadow:var(--db-shadow)}.eui-grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr))}.eui-theme-card{padding:16px;display:flex;flex-direction:column;gap:10px}.eui-theme-card h3{margin:0;font-size:16px}.eui-theme-meta{color:var(--db-muted);font-size:12px;display:flex;gap:8px;flex-wrap:wrap}.eui-swatches{display:flex;gap:6px}.eui-swatch{width:28px;height:28px;border-radius:9px;border:1px solid rgba(0,0,0,.06)}.eui-card-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto}.eui-empty{padding:60px 20px;text-align:center;color:var(--db-muted);border:1px dashed var(--db-border);border-radius:var(--db-radius);background:#fff}.eui-empty strong{display:block;color:var(--db-text);font-size:16px;margin-bottom:6px}.eui-form{display:flex;flex-direction:column;gap:12px}.eui-field{display:flex;flex-direction:column;gap:6px}.eui-field label{font-weight:600;font-size:13px}.eui-input,.eui-select,.eui-textarea{width:100%;padding:9px 12px;border:1px solid var(--db-border);border-radius:10px;background:#fff;outline:none}.eui-input:focus,.eui-select:focus,.eui-textarea:focus{border-color:var(--db-primary);box-shadow:0 0 0 3px #3b82f629}.eui-textarea{min-height:120px;resize:vertical;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px}.eui-auth{max-width:400px;margin:8vh auto;padding:26px}.eui-auth h1{margin:0 0 4px;font-size:22px}.eui-auth p{margin:0 0 18px;color:var(--db-muted)}.eui-link-btn{border:0;background:none;color:var(--db-primary-dark);cursor:pointer;padding:0;font-weight:600}.eui-error{color:var(--db-danger);font-size:13px;min-height:18px}.eui-hint{color:var(--db-muted);font-size:12px}.eui-editor{display:grid;grid-template-columns:minmax(360px,1fr) minmax(360px,1.1fr);gap:18px;align-items:start}@media(max-width:1000px){.eui-editor{grid-template-columns:1fr}}.eui-panel-head{display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid var(--db-border);font-weight:700}.eui-panel-body{padding:16px}.eui-tabs{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:12px}.eui-tab{border:1px solid transparent;background:#f1f5f9;color:var(--db-muted);padding:6px 12px;border-radius:999px;cursor:pointer;font-weight:600;font-size:12px}.eui-tab.active{background:#e0edff;color:var(--db-primary-dark)}.eui-token-group{display:flex;flex-direction:column;gap:8px;max-height:520px;overflow:auto;padding-right:6px}.eui-token-row{display:grid;grid-template-columns:minmax(120px,1fr) minmax(160px,1.2fr) 30px;gap:10px;align-items:center;padding:6px 8px;border-radius:10px}.eui-token-row:hover{background:#f8fafc}.eui-token-label{display:flex;flex-direction:column;gap:2px;min-width:0}.eui-token-label span{font-weight:600;font-size:12px}.eui-token-label code{color:var(--db-muted);font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.eui-token-control{display:flex;align-items:center;gap:8px}.eui-token-control input[type=range]{flex:1;accent-color:var(--db-primary)}.eui-token-control input[type=color]{width:34px;height:30px;padding:2px;border:1px solid var(--db-border);border-radius:8px;background:#fff}.eui-token-control output{min-width:54px;text-align:right;color:var(--db-muted);font-size:12px;font-variant-numeric:tabular-nums}.eui-token-reset{width:28px;height:28px;border:1px solid transparent;border-radius:8px;background:transparent;color:var(--db-muted);cursor:pointer}.eui-token-reset:hover{background:#eef2f7;color:var(--db-text)}.eui-token-row.overridden .eui-token-label span:after{content:"\\25cf";color:var(--db-primary);font-size:8px;margin-left:6px;vertical-align:middle}.eui-preview-wrap{position:relative;border:1px solid var(--db-border);border-radius:12px;overflow:hidden;background:#fff}.eui-preview-frame{display:block;width:100%;height:430px;border:0;background:#fff}.eui-section{margin-top:16px}.eui-section summary{cursor:pointer;font-weight:700;padding:10px 0}.eui-section-body{padding-top:4px}.eui-upload-progress{height:8px;background:#eef2f7;border-radius:999px;overflow:hidden}.eui-upload-progress>i{display:block;height:100%;width:0;background:linear-gradient(90deg,#3b82f6,#8b5cf6);transition:width .2s ease}.eui-thumb{width:100%;height:110px;border-radius:10px;object-fit:cover;border:1px solid var(--db-border);background:#f1f5f9}.eui-image-list{display:flex;flex-direction:column;gap:8px}.eui-image-item{display:flex;align-items:center;gap:10px;padding:8px;border:1px solid var(--db-border);border-radius:10px}.eui-image-item img{width:54px;height:40px;object-fit:cover;border-radius:6px;background:#f1f5f9}.eui-image-item .eui-image-info{flex:1;min-width:0}.eui-image-item code{display:block;font-size:10px;color:var(--db-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-badge{display:inline-flex;align-items:center;gap:6px;padding:3px 9px;border-radius:999px;font-size:11px;font-weight:700}.eui-badge-ok{background:#ecfdf5;color:#047857}.eui-badge-warn{background:#fffbeb;color:#b45309}.eui-badge-error{background:#fef2f2;color:#b91c1c}.eui-notice{padding:10px 12px;border-radius:10px;font-size:12px}.eui-notice-info{background:#eff6ff;color:#1e40af}.eui-notice-warn{background:#fffbeb;color:#92400e}.eui-notice-error{background:#fef2f2;color:#991b1b}.eui-notice-ok{background:#ecfdf5;color:#065f46}.eui-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.eui-spacer{flex:1}.eui-mono{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px}.eui-muted{color:var(--db-muted)}.eui-small{font-size:12px}.eui-hidden{display:none!important}.eui-market-item{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;padding:12px}.eui-market-item+.eui-market-item{border-top:1px solid var(--db-border)}
`;function pl(n){return n?String(n).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]):""}function ml(n,e=0){if(n==null||typeof n=="string"&&n.trim()==="")return e;let t=Number(n);return Number.isFinite(t)?t:e}function Ps(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function kr(n){return`${n}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}function Ch(n,e){if(n._doc.getElementById("easyui-styles")||!e)return;let t=n._doc.createElement("style");t.id="easyui-styles",t.textContent=e,n._doc.head.appendChild(t)}function gl(n){let e=n._doc,t=n._win,i=()=>{let s=e.querySelector("canvas");if(!s)return!1;n._canvas=s;let r=s.parentElement;for(;r&&!r.classList?.contains("stage-container")&&!r.classList?.contains("stage")&&!r.id?.includes("stage");)r=r.parentElement;return r||(r=s.parentElement),n._stageWrapper=r,n._stageWrapper&&t.getComputedStyle(n._stageWrapper).position==="static"&&(n._stageWrapper.style.position="relative"),(!n._stageContainer||!e.body.contains(n._stageContainer))&&(n._stageContainer&&n._stageContainer.remove(),n._stageContainer=e.createElement("div"),n._stageContainer.id="easyui-stage-container",Object.assign(n._stageContainer.style,{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",pointerEvents:"none",zIndex:"100",overflow:"visible"}),n._ensure3DCanvas&&n._ensure3DCanvas(),n._pagesContainer=e.createElement("div"),n._pagesContainer.id="easyui-pages-container",Object.assign(n._pagesContainer.style,{position:"relative",width:"100%",height:"100%",overflow:"visible"}),n._stageContainer.appendChild(n._pagesContainer),(n._stageWrapper||e.body).appendChild(n._stageContainer)),!0};if(i())n._isInitialized=!0,zr(n),n._onStageReady&&n._onStageReady();else{if(!t.MutationObserver)return;let s=new t.MutationObserver(()=>{i()&&(s.disconnect(),n._stageObserver=null,n._isInitialized=!0,zr(n),Ci(n),n._onStageReady&&n._onStageReady())});s.observe(e.body,{childList:!0,subtree:!0}),n._stageObserver=s,n._stagePollTimer=t.setTimeout(()=>{n._stageObserver===s&&(s.disconnect(),n._stageObserver=null)},5e3)}}function zr(n){let e=n._win;if(n._observersAttached){Ci(n);return}if(!(!n._canvas&&!n._stageWrapper)){if(e.ResizeObserver){let t=new e.ResizeObserver(()=>Ci(n));n._canvas&&t.observe(n._canvas),n._resizeObserver=t}if(n._scrollHandler=()=>Ci(n),e.addEventListener("scroll",n._scrollHandler,!0),n._stageWrapper&&e.MutationObserver){let t=new e.MutationObserver(()=>Ci(n));t.observe(n._stageWrapper,{attributes:!0,attributeFilter:["style","class"]}),n._stageMutationObserver=t}n._observersAttached=!0}}function Ci(n){if(n._stageContainer)for(let[e,t]of n._components)t.element&&t.x!==void 0&&t.y!==void 0&&t.element.parentElement===yl(n,t.pageId)&&n._setPosition(t.element,t.x,t.y,!1)}function yl(n,e){return e?n._pages.get(e)?.container||n._pagesContainer||n._doc.body:n._pagesContainer||n._doc.body}function Vr(n){let e=n._win;if(n._stageObserver){try{n._stageObserver.disconnect()}catch{}n._stageObserver=null}if(n._stagePollTimer&&(e.clearTimeout(n._stagePollTimer),n._stagePollTimer=null),n._resizeObserver){try{n._resizeObserver.disconnect()}catch{}n._resizeObserver=null}if(n._stageMutationObserver){try{n._stageMutationObserver.disconnect()}catch{}n._stageMutationObserver=null}n._scrollHandler&&(e.removeEventListener("scroll",n._scrollHandler,!0),n._scrollHandler=null),n._observersAttached=!1}function _l(n){return n.replace(/^# (.*$)/gm,"<h1>$1</h1>").replace(/^## (.*$)/gm,"<h2>$1</h2>").replace(/^### (.*$)/gm,"<h3>$1</h3>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank">$1</a>').replace(/`(.*?)`/g,"<code>$1</code>").replace(/^\- (.*$)/gm,"<li>$1</li>").replace(/(<li>.*<\/li>)/s,"<ul>$1</ul>").replace(/^\> (.*$)/gm,"<blockquote>$1</blockquote>").replace(/\n\n/g,"<br>")}function Ih(n){if(!n)return"";let e=String(n);if(/^\s*<[a-z][\w-]*(\s|>|\/)/i.test(e))return e;let t=_l(e);return t!==e?`<div class="easyui-markdown">${t}</div>`:e}function Rh(n,e="fade"){let t={fade:"easyui-animate-fade",slide:"easyui-animate-slide",bounce:"easyui-animate-bounce",ripple:"easyui-animate-ripple"},i=t[e]||t.fade;n.classList.add(i),n.addEventListener("animationend",()=>n.classList.remove(i),{once:!0})}function Nh(n,e){if(!n)return;let t=n.getBoundingClientRect(),i=Math.max(t.width,t.height),s=document.createElement("span");s.className="easyui-btn-ripple",s.style.width=s.style.height=i+"px";let r=e&&e.clientX!=null?e.clientX:t.left+t.width/2,o=e&&e.clientY!=null?e.clientY:t.top+t.height/2;s.style.left=r-t.left-i/2+"px",s.style.top=o-t.top-i/2+"px",n.appendChild(s),s.addEventListener("animationend",()=>s.remove(),{once:!0})}function Ph(n){if(!n)return;let e=Number(n.min)||0,t=Number(n.max)||100,i=Number(n.value)||0,s=t>e?(i-e)/(t-e)*100:0;n.style.background=`linear-gradient(90deg, var(--easyui-primary) 0%, var(--easyui-primary-2) ${s}%, #e2e8f0 ${s}%, #e2e8f0 100%)`}function vl(n,e,t){return n._hooks||(n._hooks={move:[],remove:[],clear:[],event:[]}),Array.isArray(n._hooks[e])||(n._hooks[e]=[]),n._hooks[e].includes(t)||n._hooks[e].push(t),()=>ry(n,e,t)}function ry(n,e,t){let i=n._hooks&&n._hooks[e];if(!Array.isArray(i))return;let s=i.indexOf(t);s>=0&&i.splice(s,1)}function bn(n,e,...t){let i=n._hooks&&n._hooks[e];if(Array.isArray(i))for(let s of i.slice())try{s(...t)}catch(r){console.warn("[EasyUI] hook failed:",e,r)}}function Gr(n,e){return n._snapEnabled&&n._snapGridSize>0?Math.round(e/n._snapGridSize)*n._snapGridSize:e}function Wi(n,e,t,i,s=!0){if(!e)return;e.style.position="absolute";let r=t,o=i;return s&&(r=Gr(n,t),o=Gr(n,i)),e.style.left=r+"px",e.style.top=o+"px",!e.parentElement&&n._autoLayout&&xl(n,e),{x:r,y:o}}function xl(n,e){if(!e||e._easyuiOverlapScheduled)return;e._easyuiOverlapScheduled=!0;let t=()=>{e._easyuiOverlapScheduled=!1,bl(n,e)};typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t)}function bl(n,e){if(!e||!e.parentElement)return;let t=null,i=0,s=[];for(let[g,_]of n._components)s.push([g,_]),_.element===e&&(t=_,i=g);if(!t)return;let r=e.parentElement,o=parseFloat(e.style.left)||0,a=parseFloat(e.style.top)||0,l=[];for(let[g,_]of s)g>=i||_.element&&_.element!==e&&_.element.parentElement===r&&_.pageId===t.pageId&&l.push(_);if(l.length===0||!l.some(g=>Math.abs((parseFloat(g.element.style.left)||0)-o)<1&&Math.abs((parseFloat(g.element.style.top)||0)-a)<1))return;let u=e.offsetWidth||0,d=e.offsetHeight||0,h=(g,_)=>l.some(b=>{let M=parseFloat(b.element.style.left)||0,S=parseFloat(b.element.style.top)||0,T=b.element.offsetWidth||0,v=b.element.offsetHeight||0;return g<M+T&&g+u>M&&_<S+v&&_+d>S}),f=o,p=a,y=0,m=Math.max(d,28)+12;for(;h(f,p)&&y++<80;)p+=m;y>0&&(e.style.left=f+"px",e.style.top=p+"px",t.x=f,t.y=p,bn(n,"move",i))}function Ds(n){return n?{x:parseFloat(n.style.left)||0,y:parseFloat(n.style.top)||0}:{x:0,y:0}}function Dh(n,e,t,i=null){if(!e||e._dragCleanup)return;e.classList.add("draggable");let s=Symbol("easyui-drag"),r=l=>{if(l.target!==e&&!e.contains(l.target)||l.target.closest&&l.target.closest("input, textarea, select, [contenteditable]"))return;l.preventDefault(),l.stopPropagation(),n._inertiaFrame&&n._win.cancelAnimationFrame(n._inertiaFrame);let c=Ds(e);if(n._dragging={active:!0,componentId:t,groupId:i,token:s,startX:l.clientX,startY:l.clientY,originalLeft:c.x,originalTop:c.y,startTime:Date.now(),velocityX:0,velocityY:0,lastX:l.clientX,lastY:l.clientY},n._dragging.startPositions=null,i){let u=n._groups.get(i);if(u){n._dragging.startPositions={};for(let d of u.members){let h=n._components.get(d);h&&(n._dragging.startPositions[d]={x:h.x,y:h.y})}}}e.style.zIndex="1000",n._on3DDragStart&&n._on3DDragStart(t)},o=l=>{if(!n._dragging.active||n._dragging.token!==s)return;l.preventDefault();let c=Date.now(),u=Math.max(1,c-n._dragging.startTime),d=l.clientX-n._dragging.lastX,h=l.clientY-n._dragging.lastY;n._dragging.velocityX=d/u*16,n._dragging.velocityY=h/u*16,n._dragging.lastX=l.clientX,n._dragging.lastY=l.clientY,n._dragging.startTime=c;let f=n._dragging.originalLeft+(l.clientX-n._dragging.startX),p=n._dragging.originalTop+(l.clientY-n._dragging.startY);n._snapEnabled&&(f=n._applySnap(f),p=n._applySnap(p)),Ml(n,t,i,f,p),e.style.left=f+"px",e.style.top=p+"px";let y=n._components.get(t);y&&(y.x=f,y.y=p),bn(n,"move",t)},a=()=>{if(!n._dragging.active||n._dragging.token!==s)return;n._dragging.active=!1,e.style.zIndex="",n._inertiaEnabled&&(Math.abs(n._dragging.velocityX)>.1||Math.abs(n._dragging.velocityY)>.1)&&Sl(n,t,i);let l=Ds(e),c=n._components.get(t);c&&(c.x=l.x,c.y=l.y),n._lastDragEndX=l.x,n._lastDragEndY=l.y,n._triggerEvent("dragEnd",t,l),bn(n,"move",t),n._on3DDragEnd&&n._on3DDragEnd(t)};e.addEventListener("mousedown",r),n._win.addEventListener("mousemove",o),n._win.addEventListener("mouseup",a),e._dragCleanup=()=>{e.removeEventListener("mousedown",r),n._win.removeEventListener("mousemove",o),n._win.removeEventListener("mouseup",a)}}function Ml(n,e,t,i,s){if(!t)return;let r=n._groups.get(t);if(!r)return;let o=i-n._dragging.originalLeft,a=s-n._dragging.originalTop,l=n._dragging.startPositions||{};for(let c in l){let u=n._components.get(Number(c));if(!u||!u.element)continue;let d=l[c].x+o,h=l[c].y+a;Wi(n,u.element,d,h,!1),u.x=d,u.y=h,bn(n,"move",Number(c))}r.originalLeft=i,r.originalTop=s}function Sl(n,e,t){let i=n._dragging.velocityX,s=n._dragging.velocityY,r=n._inertiaStrength,o=()=>{if(!(Math.abs(i)<.5&&Math.abs(s)<.5)){if(i*=r,s*=r,t){let a=n._groups.get(t);if(a){for(let l of a.members){let c=n._components.get(l);if(c&&c.element){let u=(c.x||0)+i,d=(c.y||0)+s;Wi(n,c.element,u,d,!1),c.x=u,c.y=d,bn(n,"move",l)}}a.originalLeft+=i,a.originalTop+=s}}else{let a=n._components.get(e);if(a&&a.element){let l=(a.x||0)+i,c=(a.y||0)+s;Wi(n,a.element,l,c,!1),a.x=l,a.y=c,bn(n,"move",e)}}n._inertiaFrame=n._win.requestAnimationFrame(o)}};n._inertiaFrame=n._win.requestAnimationFrame(o)}function El(n,e){e&&(e.classList.remove("draggable"),e._dragCleanup&&(e._dragCleanup(),delete e._dragCleanup))}function Lh(n,e,t,i){n._eventTriggers.set(`${e}_${t}`,!0),setTimeout(()=>n._eventTriggers.set(`${e}_${t}`,!1),100);let s=n._callbacks.get(t);if(s&&s[e]&&s[e](i),n._hooks&&Array.isArray(n._hooks.event))for(let r of n._hooks.event)try{r(e,t,i)}catch(o){console.warn("[EasyUI] event hook failed",o)}}function Bh(n,e,t){return n._eventTriggers.get(`${e}_${t}`)||!1}var Tl={};Ye(Tl,{_applyStatus:()=>Fy,_createComponentElement:()=>Gy,_ensureContainer:()=>Vy,addToGroup:()=>yy,createGroup:()=>gy,createPage:()=>cy,deletePage:()=>hy,disableDrag:()=>Ty,disableGroupDrag:()=>xy,disableInertia:()=>Sy,disableSnap:()=>Ny,enableDrag:()=>Ey,enableGroupDrag:()=>vy,enableInertia:()=>My,enableSnap:()=>Ry,getComponentX:()=>wy,getComponentY:()=>Cy,getCurrentPage:()=>py,getDragX:()=>Dy,getDragY:()=>Ly,getLastId:()=>By,hidePage:()=>dy,moveBy:()=>Iy,moveComponentToPage:()=>my,onDragEnd:()=>Py,removeComponent:()=>Oy,removeFromGroup:()=>_y,setAutoLayout:()=>ky,setComponentStatus:()=>Uy,setInertia:()=>by,setPosition:()=>Ay,setTheme:()=>zy,showPage:()=>fy,switchToPage:()=>uy});function cy(n,e){if(n._pagesContainer||n._initStageContainer(),!n._pagesContainer)return console.warn("EasyUI: 舞台尚未就绪，无法创建页面"),0;let t=n._nextPageId++,i=String(e.NAME||"新页面"),s=document.createElement("div");return s.className="easyui-page",s.setAttribute("data-page-id",t),s.setAttribute("data-page-name",i),n._pagesContainer.appendChild(s),n._pages.set(t,{id:t,name:i,container:s,visible:!0}),n._pages.size===1&&n.switchToPage({PAGE_ID:t}),t}function uy(n,e){let t=n._getNumber(e.PAGE_ID),i=n._pages.get(t);if(i){for(let[s,r]of n._pages)r.container.classList.remove("active");i.container.style.display="",i.container.classList.add("active"),n._currentPageId=t}}function hy(n,e){let t=n._getNumber(e.PAGE_ID),i=n._pages.get(t);!i||n._pages.size<=1||(i.container.remove(),n._pages.delete(t),n._currentPageId===t&&n.switchToPage({PAGE_ID:n._pages.keys().next().value}))}function dy(n,e){let t=n._pages.get(n._getNumber(e.PAGE_ID));t&&(t.container.style.display="none")}function fy(n,e){let t=n._pages.get(n._getNumber(e.PAGE_ID));t&&(t.container.style.display="")}function py(n){return n._currentPageId||1}function my(n,e){let t=n._getNumber(e.ID),i=n._getNumber(e.PAGE_ID),s=n._components.get(t),r=n._pages.get(i);s&&s.element&&r&&(r.container.appendChild(s.element),s.pageId=i)}function gy(n,e){let t=n._nextGroupId++,s=String(e.IDS||"").split(",").map(l=>n._getNumber(l.trim())).filter(l=>l>0),r=[],o=1/0,a=1/0;for(let l of s){let c=n._components.get(l);c&&(r.push(l),c.x<o&&(o=c.x),c.y<a&&(a=c.y))}return r.length===0||n._groups.set(t,{id:t,members:r,originalLeft:o,originalTop:a}),t}function yy(n,e){let t=n._getNumber(e.ID),i=n._getNumber(e.GROUP_ID),s=n._groups.get(i);s&&!s.members.includes(t)&&s.members.push(t)}function _y(n,e){let t=n._getNumber(e.ID);for(let[i,s]of n._groups){let r=s.members.indexOf(t);r!==-1&&s.members.splice(r,1)}}function vy(n,e){let t=n._groups.get(n._getNumber(e.GROUP_ID));if(t)for(let i of t.members){let s=n._components.get(i);s?.element&&n._setupDrag(s.element,i,t.id)}}function xy(n,e){let t=n._groups.get(n._getNumber(e.GROUP_ID));if(t)for(let i of t.members){let s=n._components.get(i);s?.element&&n._removeDrag(s.element)}}function by(n,e){n._inertiaStrength=Math.min(.99,Math.max(.7,n._getNumber(e.STRENGTH,.95)))}function My(n){n._inertiaEnabled=!0}function Sy(n){n._inertiaEnabled=!1}function Ey(n,e){let t=n._components.get(n._getNumber(e.ID));t?.element&&n._setupDrag(t.element,n._getNumber(e.ID))}function Ty(n,e){let t=n._components.get(n._getNumber(e.ID));t?.element&&n._removeDrag(t.element)}function Ay(n,e){let t=n._components.get(n._getNumber(e.ID));if(!t||!t.element)return;let i=n._setPosition(t.element,n._getNumber(e.X),n._getNumber(e.Y),!0);t.x=i.x,t.y=i.y}function wy(n,e){let t=n._components.get(n._getNumber(e.ID));return t?.element?n._getPosition(t.element).x:0}function Cy(n,e){let t=n._components.get(n._getNumber(e.ID));return t?.element?n._getPosition(t.element).y:0}function Iy(n,e){let t=n._components.get(n._getNumber(e.ID));if(!t||!t.element)return;let i=n._getPosition(t.element),s=n._setPosition(t.element,i.x+n._getNumber(e.DX),i.y+n._getNumber(e.DY),!0);t.x=s.x,t.y=s.y}function Ry(n,e){n._snapEnabled=!0,n._snapGridSize=n._getNumber(e.SIZE,20)}function Ny(n){n._snapEnabled=!1}function Py(n,e){return n._checkEvent("dragEnd",n._getNumber(e.ID))}function Dy(n){return n._lastDragEndX}function Ly(n){return n._lastDragEndY}function By(n){return n._nextId-1}function Oy(n,e){let t=n._components.get(n._getNumber(e.ID));t?.element?(n._removeDrag(t.element),t.element.remove()):t?.close&&t.close(),n._components.delete(n._getNumber(e.ID))}function Uy(n,e){let t=n._components.get(n._getNumber(e.ID));if(!t)return;let i=String(e.STATUS||"normal"),s=t.element?[t.element]:[];if(t.container&&s.push(t.container),s.forEach(r=>n._applyStatus(r,i)),t.element){let r=[t.element,...t.element.querySelectorAll("button,input,select,textarea,a")],o=new Set,a=i==="disabled"||i==="loading";r.forEach(l=>{if(!(!l||!l.tagName||o.has(l))){if(o.add(l),a){if("disabled"in l&&(l.disabled=!0),l.setAttribute("aria-disabled","true"),!l.hasAttribute("data-easyui-prev-tabindex")){let c=l.getAttribute("tabindex");l.setAttribute("data-easyui-prev-tabindex",c===null?"":c)}l.setAttribute("tabindex","-1")}else if("disabled"in l&&(l.disabled=!1),l.removeAttribute("aria-disabled"),l.hasAttribute("data-easyui-prev-tabindex")){let c=l.getAttribute("data-easyui-prev-tabindex");c===""?l.removeAttribute("tabindex"):l.setAttribute("tabindex",c),l.removeAttribute("data-easyui-prev-tabindex")}}})}t.status=i}function Fy(n,e,t){e&&(e.classList.remove("easyui-disabled","easyui-loading","easyui-error"),e.removeAttribute("aria-disabled"),e.removeAttribute("aria-busy"),e.removeAttribute("aria-invalid"),t==="disabled"?(e.classList.add("easyui-disabled"),e.setAttribute("aria-disabled","true")):t==="loading"?(e.classList.add("easyui-loading"),e.setAttribute("aria-busy","true")):t==="error"&&(e.classList.add("easyui-error"),e.setAttribute("aria-invalid","true")))}function ky(n,e){n._autoLayout=!(e.ENABLED===!1||e.ENABLED==="false")}function zy(n,e){let t=String(e.COLOR||"blue"),i={blue:{primary:"#3b82f6",primary2:"#60a5fa",rgb:"59, 130, 246"},purple:{primary:"#8b5cf6",primary2:"#a78bfa",rgb:"139, 92, 246"},green:{primary:"#10b981",primary2:"#34d399",rgb:"16, 185, 129"},orange:{primary:"#f59e0b",primary2:"#fbbf24",rgb:"245, 158, 11"},dark:{primary:"#1f2937",primary2:"#4b5563",rgb:"31, 41, 55"}},s=i[t]||i.blue,r=document.documentElement;r.style.setProperty("--easyui-primary",s.primary),r.style.setProperty("--easyui-primary-2",s.primary2),r.style.setProperty("--easyui-primary-rgb",s.rgb);for(let o of n._components.values())if(o.type==="button"&&o.element){let a=Array.from(o.element.classList).find(l=>l.startsWith("easyui-btn-"));a&&o.element.classList.remove(a),o.element.classList.add(`easyui-btn-${t==="blue"?"primary":t==="purple"?"secondary":t==="green"?"success":t==="orange"?"warning":"secondary"}`)}}function Vy(n){return n._stageContainer}function Gy(n,e,t,i,s){let r=n._nextId++,o=n._getNumber(i.X,100),a=n._getNumber(i.Y,100),l=document.createElement(e);l.className=t;let c=n._getPageContainer(n._currentPageId);return n._setPosition(l,o,a),c.appendChild(l),n._addAnimation(l,s),n._components.set(r,{type:"base",element:l,x:o,y:a,pageId:n._currentPageId}),{id:r,element:l}}var Al={};Ye(Al,{createButton:()=>Oh,methods:()=>Hy,onButtonClick:()=>Fh,setButtonText:()=>Uh});function Oh(n,e){let t=n._nextId++,i=String(e.TEXT||"按钮"),s=String(e.TYPE||"primary"),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=String(e.ANIM||"fade"),l=document.createElement("button");l.type="button",l.className=`easyui-btn easyui-btn-${s}`,l.textContent=i,l.setAttribute("aria-label",i),l.addEventListener("click",u=>{n._addRipple(l,u),n._triggerEvent("click",t,null)});let c=n._getPageContainer(n._currentPageId);return n._setPosition(l,r,o),c.appendChild(l),n._addAnimation(l,a),n._components.set(t,{type:"button",element:l,text:i,x:r,y:o,pageId:n._currentPageId}),t}function Uh(n,e){let t=n._components.get(n._getNumber(e.ID));t&&t.element&&(t.element.textContent=String(e.TEXT))}function Fh(n,e){return n._checkEvent("click",n._getNumber(e.ID))}var Hy={createButton:Oh,setButtonText:Uh,onButtonClick:Fh};var wl={};Ye(wl,{createSelect:()=>kh,getSelectedValue:()=>zh,methods:()=>Wy,onSelectChange:()=>Vh});function kh(n,e){let t=n._nextId++,i=String(e.OPTIONS||"选项1,选项2,选项3").split(",").map(c=>c.trim()),s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=String(e.ANIM||"fade"),a=document.createElement("select");a.className="easyui-select",a.setAttribute("aria-label","下拉菜单"),i.forEach(c=>{let u=document.createElement("option");u.value=c,u.textContent=c,a.appendChild(u)}),a.addEventListener("change",()=>n._triggerEvent("change",t,a.value));let l=n._getPageContainer(n._currentPageId);return n._setPosition(a,s,r),l.appendChild(a),n._addAnimation(a,o),n._components.set(t,{type:"select",element:a,options:i,value:i[0],x:s,y:r,pageId:n._currentPageId}),t}function zh(n,e){return n._components.get(n._getNumber(e.ID))?.element?.value||""}function Vh(n,e){return n._checkEvent("change",n._getNumber(e.ID))}var Wy={createSelect:kh,getSelectedValue:zh,onSelectChange:Vh};var Cl={};Ye(Cl,{createLabel:()=>Gh,methods:()=>Xy,setLabelText:()=>Hh});function Gh(n,e){let t=n._nextId++,i=String(e.TEXT||"标签"),s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=String(e.ANIM||"fade"),a=document.createElement("div");a.className="easyui-tag",a.innerHTML=n._renderContent(i);let l=n._getPageContainer(n._currentPageId);return n._setPosition(a,s,r),l.appendChild(a),n._addAnimation(a,o),n._components.set(t,{type:"label",element:a,text:i,x:s,y:r,pageId:n._currentPageId}),t}function Hh(n,e){let t=n._components.get(n._getNumber(e.ID));t&&t.element&&(t.element.innerHTML=n._renderContent(String(e.TEXT||"")))}var Xy={createLabel:Gh,setLabelText:Hh};var Il={};Ye(Il,{createCard:()=>Wh,methods:()=>qy});function Wh(n,e){let t=n._nextId++,i=String(e.TITLE||""),s=String(e.CONTENT||""),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-card",a.setAttribute("role","group"),a.innerHTML=`<div class="easyui-card-header">${n._escapeHtml(i)}</div><div class="easyui-card-body">${n._renderContent(s)}</div><div class="easyui-card-footer"></div>`;let l=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),l.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,{type:"card",element:a,title:i,content:s,x:r,y:o,pageId:n._currentPageId}),t}var qy={createCard:Wh};var Rl={};Ye(Rl,{createDivider:()=>Xh,methods:()=>Yy});function Xh(n,e){let t=n._nextId++,i=String(e.TEXT||""),s=String(e.DIR||"horizontal"),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-divider"+(s==="vertical"?" easyui-divider-vertical":""),a.setAttribute("role","separator"),s==="vertical"&&a.setAttribute("aria-orientation","vertical"),a.innerHTML=i?`<span>${n._escapeHtml(i)}</span>`:"";let l=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),l.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,{type:"divider",element:a,text:i,x:r,y:o,pageId:n._currentPageId}),t}var Yy={createDivider:Xh};var Nl={};Ye(Nl,{createImage:()=>qh,methods:()=>$y});function qh(n,e){let t=n._nextId++,i=String(e.SRC||""),s=String(e.SHAPE||"rounded"),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");if(a.className="easyui-image"+(s==="circle"?" easyui-avatar":""),a.style.width="160px",a.style.height=s==="circle"?"160px":"120px",a.setAttribute("role","img"),a.setAttribute("aria-label",i?"图片":"占位图片"),i){let c=document.createElement("img");c.src=i,c.alt="",c.onerror=()=>{a.innerHTML="图片加载失败"},a.appendChild(c)}else a.textContent="暂无图片";let l=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),l.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,{type:"image",element:a,x:r,y:o,pageId:n._currentPageId}),t}var $y={createImage:qh};var Pl={};Ye(Pl,{createAvatar:()=>Yh,methods:()=>Zy});function Yh(n,e){let t=n._nextId++,i=String(e.SRC||""),s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=document.createElement("div");if(o.className="easyui-image easyui-avatar",o.style.width="72px",o.style.height="72px",o.setAttribute("role","img"),o.setAttribute("aria-label","头像"),i){let l=document.createElement("img");l.src=i,l.alt="",l.onerror=()=>{o.textContent="😶"},o.appendChild(l)}else o.textContent="😶";let a=n._getPageContainer(n._currentPageId);return n._setPosition(o,s,r),a.appendChild(o),n._addAnimation(o,"fade"),n._components.set(t,{type:"avatar",element:o,x:s,y:r,pageId:n._currentPageId}),t}var Zy={createAvatar:Yh};var Dl={};Ye(Dl,{createInput:()=>$h,getInputValue:()=>Zh,methods:()=>Jy,onInputComplete:()=>jh,setInputReadonly:()=>Kh,setInputValue:()=>Jh});function $h(n,e){let t=n._nextId++,i=String(e.PLACEHOLDER||""),s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=document.createElement("div");o.className="easyui-input",o.style.position="absolute";let a=document.createElement("input");a.type="text",a.placeholder=i,a.setAttribute("aria-label",i||"输入框"),a.setAttribute("role","textbox");let l=0,c=()=>{let d=Date.now();d-l<300||(l=d,n._triggerEvent("inputComplete",t,a.value))};a.addEventListener("change",c),a.addEventListener("keydown",d=>{d.key==="Enter"&&c()}),o.appendChild(a);let u=n._getPageContainer(n._currentPageId);return n._setPosition(o,s,r),u.appendChild(o),n._addAnimation(o,"fade"),n._components.set(t,{type:"input",element:o,input:a,value:"",x:s,y:r,pageId:n._currentPageId}),t}function Zh(n,e){let t=n._components.get(n._getNumber(e.ID));return t?.input?t.input.value:""}function Jh(n,e){let t=n._components.get(n._getNumber(e.ID));t?.input&&(t.input.value=String(e.VAL||""),t.value=t.input.value)}function jh(n,e){return n._checkEvent("inputComplete",n._getNumber(e.ID))}function Kh(n,e){let t=n._components.get(n._getNumber(e.ID));if(t?.input){let i=e.READONLY===!0||e.READONLY==="true";t.input.readOnly=i,t.element.classList.toggle("easyui-readonly",i)}}var Jy={createInput:$h,getInputValue:Zh,setInputValue:Jh,onInputComplete:jh,setInputReadonly:Kh};var Ll={};Ye(Ll,{createTextarea:()=>Qh,methods:()=>jy});function Qh(n,e){let t=n._nextId++,i=String(e.PLACEHOLDER||""),s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=document.createElement("div");o.className="easyui-textarea",o.style.position="absolute";let a=document.createElement("textarea");a.placeholder=i,a.style.width="100%",a.style.border="none",a.style.background="transparent",a.style.resize="vertical",a.setAttribute("aria-label",i||"多行文本"),a.setAttribute("role","textbox"),a.setAttribute("aria-multiline","true"),a.addEventListener("change",()=>n._triggerEvent("inputComplete",t,a.value)),o.appendChild(a);let l=n._getPageContainer(n._currentPageId);return n._setPosition(o,s,r),l.appendChild(o),n._addAnimation(o,"fade"),n._components.set(t,{type:"textarea",element:o,input:a,value:"",x:s,y:r,pageId:n._currentPageId}),t}var jy={createTextarea:Qh};var Bl={};Ye(Bl,{createCheckbox:()=>ed,isCheckboxChecked:()=>nd,methods:()=>Ky,onCheckboxChange:()=>id,setCheckbox:()=>td});function ed(n,e){let t=n._nextId++,i=String(e.LABEL||""),s=e.CHECKED===!0||e.CHECKED==="true",r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("label");a.className="easyui-checkbox";let l=document.createElement("input");l.type="checkbox",l.checked=s,l.setAttribute("role","checkbox"),l.setAttribute("aria-checked",s?"true":"false"),l.setAttribute("aria-label",i);let c=document.createElement("span");c.textContent=i,l.addEventListener("change",()=>{l.setAttribute("aria-checked",l.checked?"true":"false"),n._triggerEvent("checkboxChange",t,l.checked)}),a.appendChild(l),a.appendChild(c);let u=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),u.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,{type:"checkbox",element:a,checkbox:l,checked:s,x:r,y:o,pageId:n._currentPageId}),t}function td(n,e){let t=n._components.get(n._getNumber(e.ID));if(t?.checkbox){let i=e.CHECKED===!0||e.CHECKED==="true";t.checkbox.checked=i,t.checkbox.setAttribute("aria-checked",i?"true":"false"),t.checked=i}}function nd(n,e){let t=n._components.get(n._getNumber(e.ID));return t?.checkbox?t.checkbox.checked:!1}function id(n,e){return n._checkEvent("checkboxChange",n._getNumber(e.ID))}var Ky={createCheckbox:ed,setCheckbox:td,isCheckboxChecked:nd,onCheckboxChange:id};var Ol={};Ye(Ol,{createRadio:()=>sd,getRadioIndex:()=>od,getRadioValue:()=>rd,methods:()=>Qy,onRadioChange:()=>ad});function sd(n,e){let t=n._nextId++,i=String(e.OPTIONS||"").split(",").map(h=>h.trim()).filter(Boolean),s=Math.max(0,n._getNumber(e.SEL,1)-1),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-radio-group",a.setAttribute("role","radiogroup");let l="easyui-radio-"+t,c=[];i.forEach((h,f)=>{let p=document.createElement("label");p.className="easyui-radio";let y=document.createElement("input");y.type="radio",y.name=l,y.value=h,y.checked=f===s,y.setAttribute("aria-checked",f===s?"true":"false"),y.setAttribute("aria-label",h);let m=document.createElement("span");m.textContent=h,y.addEventListener("change",()=>{y.checked&&(c.forEach(g=>g.input.setAttribute("aria-checked","false")),y.setAttribute("aria-checked","true"),d.selectedIndex=f,d.selected=h,n._triggerEvent("radioChange",t,h))}),p.appendChild(y),p.appendChild(m),a.appendChild(p),c.push({input:y,value:h})});let u=n._getPageContainer(n._currentPageId);n._setPosition(a,r,o),u.appendChild(a),n._addAnimation(a,"fade");let d={type:"radio",element:a,radios:c,selected:i[s]||"",selectedIndex:s,x:r,y:o,pageId:n._currentPageId};return n._components.set(t,d),t}function rd(n,e){return n._components.get(n._getNumber(e.ID))?.selected||""}function od(n,e){return(n._components.get(n._getNumber(e.ID))?.selectedIndex||0)+1}function ad(n,e){return n._checkEvent("radioChange",n._getNumber(e.ID))}var Qy={createRadio:sd,getRadioValue:rd,getRadioIndex:od,onRadioChange:ad};var Ul={};Ye(Ul,{createNumberInput:()=>ld,getNumberValue:()=>cd,methods:()=>e0,onNumberChange:()=>hd,setNumberValue:()=>ud});function ld(n,e){let t=n._nextId++,i=n._getNumber(e.VAL,0),s=n._getNumber(e.MIN,0),r=n._getNumber(e.MAX,100),o=n._getNumber(e.STEP,1),a=Math.min(r,Math.max(s,i)),l=n._getNumber(e.X,100),c=n._getNumber(e.Y,100),u=document.createElement("div");u.className="easyui-number";let d=document.createElement("button");d.type="button",d.textContent="−",d.setAttribute("aria-label","减少");let h=document.createElement("input");h.type="text",h.inputMode="numeric",h.value=a,h.setAttribute("role","spinbutton"),h.setAttribute("aria-valuenow",a),h.setAttribute("aria-valuemin",s),h.setAttribute("aria-valuemax",r),h.setAttribute("aria-label","数字输入");let f=document.createElement("button");f.type="button",f.textContent="+",f.setAttribute("aria-label","增加");let p=_=>Math.min(r,Math.max(s,_)),y=_=>{let b=p(_);h.value=b,h.setAttribute("aria-valuenow",b),g.value=b,n._triggerEvent("numberChange",t,b)};d.onclick=()=>y(n._getNumber(h.value)-o),f.onclick=()=>y(n._getNumber(h.value)+o),h.addEventListener("change",()=>y(n._getNumber(h.value))),h.addEventListener("keydown",_=>{_.key==="ArrowUp"?(_.preventDefault(),y(n._getNumber(h.value)+o)):_.key==="ArrowDown"&&(_.preventDefault(),y(n._getNumber(h.value)-o))}),u.appendChild(d),u.appendChild(h),u.appendChild(f);let m=n._getPageContainer(n._currentPageId);n._setPosition(u,l,c),m.appendChild(u),n._addAnimation(u,"fade");let g={type:"number",element:u,input:h,value:a,min:s,max:r,step:o,x:l,y:c,pageId:n._currentPageId};return n._components.set(t,g),t}function cd(n,e){return n._components.get(n._getNumber(e.ID))?.value||0}function ud(n,e){let t=n._components.get(n._getNumber(e.ID));if(t?.input){let i=Math.min(t.max,Math.max(t.min,n._getNumber(e.VAL)));t.input.value=i,t.input.setAttribute("aria-valuenow",i),t.value=i}}function hd(n,e){return n._checkEvent("numberChange",n._getNumber(e.ID))}var e0={createNumberInput:ld,getNumberValue:cd,setNumberValue:ud,onNumberChange:hd};var Fl={};Ye(Fl,{createSearch:()=>dd,getSearchValue:()=>fd,methods:()=>t0,onSearchSubmit:()=>pd});function dd(n,e){let t=n._nextId++,i=String(e.PLACEHOLDER||""),s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=document.createElement("div");o.className="easyui-search";let a=document.createElement("input");a.type="search",a.placeholder=i,a.setAttribute("aria-label",i||"搜索");let l=document.createElement("button");l.type="button",l.className="easyui-search-clear",l.textContent="×",l.setAttribute("aria-label","清空"),l.style.display="none",a.addEventListener("input",()=>{l.style.display=a.value?"block":"none"}),a.addEventListener("keydown",u=>{u.key==="Enter"&&n._triggerEvent("searchSubmit",t,a.value)}),l.onclick=()=>{a.value="",l.style.display="none",a.focus()},o.appendChild(a),o.appendChild(l);let c=n._getPageContainer(n._currentPageId);return n._setPosition(o,s,r),c.appendChild(o),n._addAnimation(o,"fade"),n._components.set(t,{type:"search",element:o,input:a,value:"",x:s,y:r,pageId:n._currentPageId}),t}function fd(n,e){let t=n._components.get(n._getNumber(e.ID));return t?.input?t.input.value:""}function pd(n,e){return n._checkEvent("searchSubmit",n._getNumber(e.ID))}var t0={createSearch:dd,getSearchValue:fd,onSearchSubmit:pd};var kl={};Ye(kl,{_activateTab:()=>gd,createTabs:()=>md,getActiveTab:()=>_d,methods:()=>n0,onTabChange:()=>vd,setActiveTab:()=>yd});function md(n,e){let t=n._nextId++,i=String(e.TABS||"").split(",").map(h=>h.trim()).filter(Boolean),s=String(e.PANELS||"").split(",").map(h=>h.trim()),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-tabs";let l=document.createElement("div");l.className="easyui-tabs-bar",l.setAttribute("role","tablist"),l.setAttribute("aria-label","选项卡");let c=document.createElement("div");c.className="easyui-tabs-panel",c.setAttribute("role","tabpanel");let u={type:"tabs",element:a,tabEls:[],panel:c,_panels:s,activeIndex:0,x:r,y:o,pageId:n._currentPageId};i.forEach((h,f)=>{let p=document.createElement("button");p.type="button",p.className="easyui-tabs-tab",p.textContent=h,p.setAttribute("role","tab"),p.setAttribute("aria-selected",f===0?"true":"false"),p.id=`easyui-tab-${t}-${f}`,p.onclick=()=>n._activateTab(u,t,f),p.addEventListener("keydown",y=>{y.key==="ArrowRight"?(y.preventDefault(),n._activateTab(u,t,(f+1)%i.length)):y.key==="ArrowLeft"&&(y.preventDefault(),n._activateTab(u,t,(f-1+i.length)%i.length))}),l.appendChild(p),u.tabEls.push(p)}),c.textContent=s[0]||"",a.appendChild(l),a.appendChild(c);let d=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),d.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,u),t}function gd(n,e,t,i,s=!0){!e||!e.tabEls||e.tabEls.length===0||(i=Math.max(0,Math.min(e.tabEls.length-1,i)),e.activeIndex=i,e.tabEls.forEach((r,o)=>r.setAttribute("aria-selected",o===i?"true":"false")),e.panel&&(e.panel.textContent=e._panels&&e._panels[i]||e.tabEls[i].textContent),s&&e.tabEls[i].focus(),n._triggerEvent("tabChange",t,i+1))}function yd(n,e){let t=n._components.get(n._getNumber(e.ID));if(!t?.tabEls)return;let i=Math.max(0,n._getNumber(e.INDEX,1)-1);n._activateTab(t,n._getNumber(e.ID),i,!1)}function _d(n,e){return(n._components.get(n._getNumber(e.ID))?.activeIndex||0)+1}function vd(n,e){return n._checkEvent("tabChange",n._getNumber(e.ID))}var n0={createTabs:md,_activateTab:gd,setActiveTab:yd,getActiveTab:_d,onTabChange:vd};var zl={};Ye(zl,{createAccordion:()=>xd,methods:()=>i0,onAccordionChange:()=>Md,setAccordionExpanded:()=>bd});function xd(n,e){let t=n._nextId++,i=String(e.HEADS||"").split(",").map(u=>u.trim()).filter(Boolean),s=String(e.BODIES||"").split(",").map(u=>u.trim()),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-accordion";let l={type:"accordion",element:a,heads:[],bodies:[],activeIndex:-1,x:r,y:o,pageId:n._currentPageId};i.forEach((u,d)=>{let h=document.createElement("div");h.className="easyui-accordion-item";let f=document.createElement("button");f.type="button",f.className="easyui-accordion-header",f.textContent=u,f.setAttribute("aria-expanded","false"),f.setAttribute("aria-controls",`easyui-acc-${t}-${d}`);let p=document.createElement("span");p.className="easyui-accordion-caret",p.textContent="▶",f.appendChild(p);let y=document.createElement("div");y.className="easyui-accordion-panel",y.id=`easyui-acc-${t}-${d}`,y.setAttribute("role","region"),y.hidden=!0,y.textContent=s[d]||"",f.onclick=()=>{let m=y.hidden;y.hidden=!m,f.setAttribute("aria-expanded",String(!m)),l.activeIndex=m?d:-1,m&&n._triggerEvent("accordionChange",t,d+1)},h.appendChild(f),h.appendChild(y),a.appendChild(h),l.heads.push(u),l.bodies.push(s[d]||"")});let c=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),c.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,l),t}function bd(n,e){let t=n._components.get(n._getNumber(e.ID));if(!t?.heads)return;let i=Math.max(0,n._getNumber(e.INDEX,1)-1),s=e.EXP===!0||e.EXP==="true",r=t.element.querySelectorAll(".easyui-accordion-header")[i],o=t.element.querySelectorAll(".easyui-accordion-panel")[i];r&&o&&(o.hidden=!s,r.setAttribute("aria-expanded",String(s)),t.activeIndex=s?i:-1)}function Md(n,e){return n._checkEvent("accordionChange",n._getNumber(e.ID))}var i0={createAccordion:xd,setAccordionExpanded:bd,onAccordionChange:Md};var Vl={};Ye(Vl,{createEmpty:()=>Sd,methods:()=>s0});function Sd(n,e){let t=n._nextId++,i=String(e.ICON||"📭"),s=String(e.TEXT||""),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-empty",a.setAttribute("role","status"),a.innerHTML=`<div class="easyui-empty-icon">${n._escapeHtml(i)}</div><div class="easyui-empty-text">${n._escapeHtml(s)}</div><div class="easyui-empty-action"></div>`;let l=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),l.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,{type:"empty",element:a,x:r,y:o,pageId:n._currentPageId}),t}var s0={createEmpty:Sd};var Gl={};Ye(Gl,{_selectListItem:()=>Td,createList:()=>Ed,getListSelectedIndex:()=>Ad,methods:()=>r0,onListItemClick:()=>wd});function Ed(n,e){let t=n._nextId++,i=String(e.ITEMS||"").split(",").map(c=>c.trim()).filter(Boolean),s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=document.createElement("div");o.className="easyui-list",o.setAttribute("role","listbox"),o.setAttribute("aria-label","列表");let a={type:"list",element:o,itemEls:[],selectedIndex:-1,x:s,y:r,pageId:n._currentPageId};i.forEach((c,u)=>{let d=document.createElement("div");d.className="easyui-list-item",d.textContent=c,d.setAttribute("role","option"),d.setAttribute("aria-selected","false"),d.tabIndex=0,d.onclick=()=>n._selectListItem(a,t,u),d.addEventListener("keydown",h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),n._selectListItem(a,t,u))}),o.appendChild(d),a.itemEls.push(d)});let l=n._getPageContainer(n._currentPageId);return n._setPosition(o,s,r),l.appendChild(o),n._addAnimation(o,"fade"),n._components.set(t,a),t}function Td(n,e,t,i){!e||!e.itemEls||(e.selectedIndex=i,e.itemEls.forEach((s,r)=>s.setAttribute("aria-selected",r===i?"true":"false")),e.itemEls[i].focus(),n._triggerEvent("listItemClick",t,i+1))}function Ad(n,e){return(n._components.get(n._getNumber(e.ID))?.selectedIndex??-1)+1}function wd(n,e){return n._checkEvent("listItemClick",n._getNumber(e.ID))}var r0={createList:Ed,_selectListItem:Td,getListSelectedIndex:Ad,onListItemClick:wd};var Hl={};Ye(Hl,{_selectMenuItem:()=>Id,createMenu:()=>Cd,getMenuSelectedIndex:()=>Rd,methods:()=>o0,onMenuItemClick:()=>Nd});function Cd(n,e){let t=n._nextId++,i=String(e.ITEMS||"").split(",").map(c=>c.trim()).filter(Boolean),s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=document.createElement("div");o.className="easyui-menu",o.setAttribute("role","menu");let a={type:"menu",element:o,itemEls:[],selectedIndex:-1,x:s,y:r,pageId:n._currentPageId};i.forEach((c,u)=>{let d=document.createElement("div");d.className="easyui-menu-item",d.textContent=c,d.setAttribute("role","menuitem"),d.tabIndex=-1,d.onclick=()=>n._selectMenuItem(a,t,u),o.appendChild(d),a.itemEls.push(d)});let l=n._getPageContainer(n._currentPageId);return n._setPosition(o,s,r),l.appendChild(o),n._addAnimation(o,"fade"),n._components.set(t,a),t}function Id(n,e,t,i){!e||!e.itemEls||(e.selectedIndex=i,n._triggerEvent("menuItemClick",t,i+1))}function Rd(n,e){return(n._components.get(n._getNumber(e.ID))?.selectedIndex??-1)+1}function Nd(n,e){return n._checkEvent("menuItemClick",n._getNumber(e.ID))}var o0={createMenu:Cd,_selectMenuItem:Id,getMenuSelectedIndex:Rd,onMenuItemClick:Nd};var Wl={};Ye(Wl,{createDropdown:()=>Pd,getDropdownSelectedIndex:()=>Dd,methods:()=>a0,onDropdownSelect:()=>Ld});function Pd(n,e){let t=n._nextId++,i=String(e.TEXT||"菜单"),s=String(e.ITEMS||"").split(",").map(p=>p.trim()).filter(Boolean),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-dropdown";let l=document.createElement("button");l.type="button",l.className="easyui-btn easyui-btn-secondary",l.textContent=i+" ▾",l.setAttribute("aria-haspopup","true"),l.setAttribute("aria-expanded","false");let c=null,u={type:"dropdown",element:a,btn:l,selectedIndex:0,x:r,y:o,pageId:n._currentPageId},d=()=>{c&&(c.remove(),c=null,l.setAttribute("aria-expanded","false"),document.removeEventListener("click",h,!0))},h=p=>{c&&!a.contains(p.target)&&d()};l.onclick=p=>{if(p.stopPropagation(),c){d();return}c=document.createElement("div"),c.className="easyui-dropdown-pop",c.setAttribute("role","menu"),s.forEach((m,g)=>{let _=document.createElement("div");_.className="easyui-dropdown-item",_.textContent=m,_.setAttribute("role","menuitem"),_.tabIndex=-1,_.onclick=b=>{b.stopPropagation(),u.selectedIndex=g,l.textContent=m+" ▾",l.setAttribute("aria-expanded","false"),n._triggerEvent("dropdownSelect",t,g+1),d()},c.appendChild(_)});let y=l.getBoundingClientRect();c.style.left=y.left+"px",c.style.top=y.bottom+6+"px",document.body.appendChild(c),l.setAttribute("aria-expanded","true"),document.addEventListener("click",h,!0)},a.appendChild(l);let f=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),f.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,u),t}function Dd(n,e){return(n._components.get(n._getNumber(e.ID))?.selectedIndex||0)+1}function Ld(n,e){return n._checkEvent("dropdownSelect",n._getNumber(e.ID))}var a0={createDropdown:Pd,getDropdownSelectedIndex:Dd,onDropdownSelect:Ld};var Xl={};Ye(Xl,{createTooltip:()=>Bd,methods:()=>l0});function Bd(n,e){let t=n._nextId++,i=String(e.TEXT||""),s=String(e.TIP||""),r=String(e.KIND||"tooltip"),o=n._getNumber(e.X,100),a=n._getNumber(e.Y,100),l=document.createElement("div");l.className="easyui-tooltip-trigger easyui-btn easyui-btn-secondary",l.textContent=i,l.setAttribute("tabindex","0"),l.setAttribute("role","button"),l.setAttribute("aria-describedby",`easyui-tip-${t}`);let c=null,u=()=>{if(c)return;c=document.createElement("div"),c.id=`easyui-tip-${t}`,c.className="easyui-tooltip-pop"+(r==="popover"?" easyui-popover":""),c.setAttribute("role","tooltip"),c.textContent=s;let f=l.getBoundingClientRect();c.style.left=f.left+f.width/2-120+"px",c.style.top=f.top-10+"px",c.style.transform="translateY(-100%)",document.body.appendChild(c)},d=()=>{c&&(c.remove(),c=null)};l.addEventListener("mouseenter",u),l.addEventListener("mouseleave",d),l.addEventListener("focus",u),l.addEventListener("blur",d);let h=n._getPageContainer(n._currentPageId);return n._setPosition(l,o,a),h.appendChild(l),n._addAnimation(l,"fade"),n._components.set(t,{type:"tooltip",element:l,x:o,y:a,pageId:n._currentPageId}),t}var l0={createTooltip:Bd};var ql={};Ye(ql,{createAlert:()=>Od,methods:()=>c0});function Od(n,e){let t=n._nextId++,i=String(e.TYPE||"info"),s=String(e.TITLE||""),r=String(e.DESC||""),o=n._getNumber(e.X,100),a=n._getNumber(e.Y,100),l={info:"ℹ️",success:"✅",warning:"⚠️",danger:"⛔"},c=document.createElement("div");c.className="easyui-alert easyui-alert-"+i,c.setAttribute("role",i==="danger"?"alert":"status"),c.innerHTML=`<span class="easyui-alert-icon">${l[i]||l.info}</span><div class="easyui-alert-body"><div class="easyui-alert-title">${n._escapeHtml(s)}</div>${r?`<div class="easyui-alert-desc">${n._escapeHtml(r)}</div>`:""}</div><button class="easyui-alert-close" aria-label="关闭">×</button>`;let u=c.querySelector(".easyui-alert-close");u&&(u.onclick=()=>c.remove());let d=n._getPageContainer(n._currentPageId);return n._setPosition(c,o,a),d.appendChild(c),n._addAnimation(c,"fade"),n._components.set(t,{type:"alert",element:c,x:o,y:a,pageId:n._currentPageId}),t}var c0={createAlert:Od};var Yl={};Ye(Yl,{createLoading:()=>Ud,methods:()=>u0});function Ud(n,e){let t=n._nextId++,i=String(e.TEXT||""),s=String(e.KIND||"inline"),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a;return s==="fullscreen"?(a=document.createElement("div"),a.className="easyui-loading-full",a.setAttribute("role","alert"),a.setAttribute("aria-busy","true"),a.innerHTML=`<div class="easyui-spin"></div>${i?`<div class="easyui-loading-text">${n._escapeHtml(i)}</div>`:""}`):(a=document.createElement("div"),a.className="easyui-loading-box",a.setAttribute("role","status"),a.setAttribute("aria-busy","true"),a.innerHTML=`<div class="easyui-spin"></div>${i?`<div>${n._escapeHtml(i)}</div>`:""}`,n._setPosition(a,r,o)),s==="fullscreen"?document.body.appendChild(a):(n._getPageContainer(n._currentPageId).appendChild(a),n._addAnimation(a,"fade")),n._components.set(t,{type:"loading",element:a,x:r,y:o,pageId:n._currentPageId,fullscreen:s==="fullscreen"}),t}var u0={createLoading:Ud};var $l={};Ye($l,{createHeading:()=>Fd,methods:()=>h0});function Fd(n,e){let t=n._nextId++,i=String(e.TEXT||""),s=Math.min(3,Math.max(1,n._getNumber(e.LEVEL,1))),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-h"+s,a.textContent=i,a.setAttribute("role","heading"),a.setAttribute("aria-level",s);let l=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),l.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,{type:"heading",element:a,x:r,y:o,pageId:n._currentPageId}),t}var h0={createHeading:Fd};var Zl={};Ye(Zl,{createText:()=>kd,methods:()=>d0});function kd(n,e){let t=n._nextId++,i=String(e.TEXT||""),s=e.MUTED===!0||e.MUTED==="true",r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-text"+(s?" easyui-text-muted":""),a.textContent=i;let l=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),l.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,{type:"text",element:a,x:r,y:o,pageId:n._currentPageId}),t}var d0={createText:kd};var Jl={};Ye(Jl,{createLink:()=>zd,methods:()=>f0});function zd(n,e){let t=n._nextId++,i=String(e.TEXT||""),s=String(e.HREF||"#"),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("a");a.className="easyui-link",a.textContent=i,a.href=s,a.target="_blank",a.setAttribute("role","link");let l=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),l.appendChild(a),n._addAnimation(a,"fade"),n._components.set(t,{type:"link",element:a,x:r,y:o,pageId:n._currentPageId}),t}var f0={createLink:zd};var jl={};Ye(jl,{createConfirm:()=>Vd,methods:()=>p0,onConfirmResult:()=>Gd,openConfirm:()=>Hd});function Vd(n,e){let t=n._nextId++,i=String(e.TITLE||"确认"),s=String(e.CONTENT||""),r=e.DANGER===!0||e.DANGER==="true",o=null,a=null,l=null,c=()=>{o&&(o.remove(),o=null),a&&(document.removeEventListener("keydown",a,!0),a=null),l&&l.focus&&l.focus(),l=null},u=()=>{c(),l=document.activeElement;let d=`easyui-confirm-title-${t}`;o=document.createElement("div"),o.className="easyui-modal-mask"+(r?" easyui-confirm-danger":""),o.setAttribute("role","alertdialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby",d),o.innerHTML=`<div class="easyui-modal-container" tabindex="-1" role="document"><h3 id="${d}" style="margin-bottom:12px">${n._escapeHtml(i)}</h3><div>${n._renderContent(s)}</div><div style="display:flex;gap:10px;margin-top:16px;justify-content:flex-end"><button class="easyui-btn easyui-btn-secondary" id="easyui-confirm-cancel">取消</button><button class="easyui-btn ${r?"easyui-btn-danger":"easyui-btn-primary"}" id="easyui-confirm-ok">确定</button></div></div>`,document.body.appendChild(o);let h=o.querySelector(".easyui-modal-container"),f=o.querySelector("#easyui-confirm-ok"),p=o.querySelector("#easyui-confirm-cancel");f.onclick=()=>{c(),n._triggerEvent("confirmResult",t,!0)},p.onclick=()=>{c(),n._triggerEvent("confirmResult",t,!1)},o.onclick=y=>{y.target===o&&c()},a=y=>{y.key==="Escape"&&(y.preventDefault(),c())},document.addEventListener("keydown",a,!0),h&&h.focus()};return n._components.set(t,{type:"confirm",open:u,close:c}),t}function Gd(n,e){return n._checkEvent("confirmResult",n._getNumber(e.ID))}function Hd(n,e){let t=n._components.get(n._getNumber(e.ID));t?.open&&t.open()}var p0={createConfirm:Vd,onConfirmResult:Gd,openConfirm:Hd};var Kl={};Ye(Kl,{closeModal:()=>qd,createModal:()=>Wd,methods:()=>m0,openModal:()=>Xd});function Wd(n,e){let t=n._nextId++,i=String(e.TITLE||"提示"),s=String(e.CONTENT||""),r=null,o=null,a=null;return n._components.set(t,{type:"modal",open:()=>{r&&r.remove(),a=document.activeElement,r=document.createElement("div"),r.className="easyui-modal-mask",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true");let l=`easyui-modal-title-${t}`;r.innerHTML=`<div class="easyui-modal-container" tabindex="-1" role="document"><h3 id="${l}" style="margin-bottom:12px">${n._escapeHtml(i)}</h3><div>${n._renderContent(s)}</div><button class="easyui-btn easyui-btn-primary" id="easyui-modal-close" style="margin-top:16px">关闭</button></div>`,r.setAttribute("aria-labelledby",l),document.body.appendChild(r);let c=r.querySelector(".easyui-modal-container"),u=r.querySelector("#easyui-modal-close"),d=()=>{r&&(r.remove(),r=null),o&&(document.removeEventListener("keydown",o,!0),o=null),a&&a.focus&&a.focus()};u&&(u.onclick=d),r.onclick=h=>{h.target===r&&d()},o=h=>{h.key==="Escape"&&r&&(h.preventDefault(),d())},document.addEventListener("keydown",o,!0),c&&c.focus()},close:()=>{r&&(r.remove(),r=null),o&&(document.removeEventListener("keydown",o,!0),o=null),a&&a.focus&&a.focus()}}),t}function Xd(n,e){let t=n._components.get(n._getNumber(e.ID));t?.open&&t.open()}function qd(n,e){let t=n._components.get(n._getNumber(e.ID));t?.close&&t.close()}var m0={createModal:Wd,openModal:Xd,closeModal:qd};var Ql={};Ye(Ql,{_getToastHost:()=>Yd,methods:()=>g0,showToast:()=>Zd,showToastType:()=>$d});function Yd(n){let e=document.getElementById("easyui-toast-container");return e||(e=document.createElement("div"),e.id="easyui-toast-container",document.body.appendChild(e)),e}function $d(n,e){let t=String(e.TYPE||"info"),i=String(e.CONTENT||""),s={info:"var(--easyui-primary)",success:"#10b981",warning:"#f59e0b",error:"#ef4444"},r=document.createElement("div");r.className="easyui-toast",r.setAttribute("role","status"),r.setAttribute("aria-live","polite"),r.style.borderLeft=`4px solid ${s[t]||s.info}`,r.innerHTML=`<span style="font-size:16px">${{info:"ℹ️",success:"✅",warning:"⚠️",error:"⛔"}[t]||"ℹ️"}</span><span>${n._escapeHtml(i)}</span>`,n._getToastHost().appendChild(r),n._addAnimation(r,"slide"),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity .3s",setTimeout(()=>r.remove(),300)},2600)}function Zd(n,e){let t=String(e.MSG||"提示"),i=n._getNumber(e.SEC,2),s=document.createElement("div");s.className="easyui-toast",s.innerHTML=`<span style="font-size:16px">✓</span><span>${n._escapeHtml(t)}</span>`,s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),n._getToastHost().appendChild(s),n._addAnimation(s,"slide"),setTimeout(()=>{s.style.opacity="0",s.style.transition="opacity .3s",setTimeout(()=>s.remove(),300)},i*1e3)}var g0={_getToastHost:Yd,showToastType:$d,showToast:Zd};var ec={};Ye(ec,{createSlider:()=>Jd,getSliderValue:()=>jd,methods:()=>y0,onSliderChange:()=>Qd,setSliderValue:()=>Kd});function Jd(n,e){let t=n._nextId++,i=n._getNumber(e.MIN,0),s=n._getNumber(e.MAX,100),r=n._getNumber(e.VAL,50),o=n._getNumber(e.X,100),a=n._getNumber(e.Y,100),l=String(e.ANIM||"fade"),c=document.createElement("div");c.className="easyui-slider-container";let u=document.createElement("input");u.type="range",u.className="easyui-slider",u.min=i,u.max=s,u.value=r;let d=document.createElement("span");d.className="easyui-slider-value",d.textContent=r,u.addEventListener("input",f=>{d.textContent=f.target.value,n._updateSliderFill(u),n._triggerEvent("sliderChange",t,parseInt(f.target.value))}),c.appendChild(u),c.appendChild(d);let h=n._getPageContainer(n._currentPageId);return n._setPosition(c,o,a),h.appendChild(c),n._addAnimation(c,l),n._updateSliderFill(u),n._components.set(t,{type:"slider",element:c,slider:u,value:r,min:i,max:s,x:o,y:a,pageId:n._currentPageId}),t}function jd(n,e){let t=n._components.get(n._getNumber(e.ID));return t?.slider?parseInt(t.slider.value):0}function Kd(n,e){let t=n._components.get(n._getNumber(e.ID));if(t?.slider){t.slider.value=n._getNumber(e.VAL);let i=t.element.querySelector(".easyui-slider-value");i&&(i.textContent=t.slider.value),n._updateSliderFill(t.slider),n._triggerEvent("sliderChange",n._getNumber(e.ID),t.slider.value)}}function Qd(n,e){return n._checkEvent("sliderChange",n._getNumber(e.ID))}var y0={createSlider:Jd,getSliderValue:jd,setSliderValue:Kd,onSliderChange:Qd};var tc={};Ye(tc,{createSwitch:()=>ef,isSwitchOn:()=>tf,methods:()=>_0,onSwitchChange:()=>sf,setSwitchState:()=>nf});function ef(n,e){let t=n._nextId++,i=e.STATE===!0||e.STATE==="true",s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=String(e.ANIM||"fade"),a=document.createElement("label");a.className="easyui-switch";let l=document.createElement("input");l.type="checkbox",l.checked=i,l.setAttribute("role","switch"),l.setAttribute("aria-checked",i?"true":"false"),l.setAttribute("aria-label","开关");let c=document.createElement("span");c.className="easyui-switch-slider",a.appendChild(l),a.appendChild(c),l.addEventListener("change",()=>{l.setAttribute("aria-checked",l.checked?"true":"false"),n._triggerEvent("switchChange",t,l.checked)});let u=n._getPageContainer(n._currentPageId);return n._setPosition(a,s,r),u.appendChild(a),n._addAnimation(a,o),n._components.set(t,{type:"switch",element:a,checkbox:l,state:i,x:s,y:r,pageId:n._currentPageId}),t}function tf(n,e){return n._components.get(n._getNumber(e.ID))?.checkbox?.checked||!1}function nf(n,e){let t=n._components.get(n._getNumber(e.ID));if(t?.checkbox){let i=e.STATE===!0||e.STATE==="true";t.checkbox.checked=i,t.state=i,t.checkbox.setAttribute("aria-checked",i?"true":"false"),n._triggerEvent("switchChange",n._getNumber(e.ID),i)}}function sf(n,e){return n._checkEvent("switchChange",n._getNumber(e.ID))}var _0={createSwitch:ef,isSwitchOn:tf,setSwitchState:nf,onSwitchChange:sf};var nc={};Ye(nc,{createProgress:()=>rf,getProgress:()=>af,methods:()=>v0,setProgress:()=>of});function rf(n,e){let t=n._nextId++,i=Math.min(100,Math.max(0,n._getNumber(e.PROG,0))),s=n._getNumber(e.X,100),r=n._getNumber(e.Y,100),o=String(e.ANIM||"fade"),a=document.createElement("div");a.className="easyui-progress",a.setAttribute("role","progressbar"),a.setAttribute("aria-valuemin","0"),a.setAttribute("aria-valuemax","100"),a.setAttribute("aria-valuenow",String(i));let l=document.createElement("div");l.className="easyui-progress-fill",l.style.width=i+"%",a.appendChild(l);let c=n._getPageContainer(n._currentPageId);return n._setPosition(a,s,r),c.appendChild(a),n._addAnimation(a,o),n._components.set(t,{type:"progress",element:a,fill:l,progress:i,x:s,y:r,pageId:n._currentPageId}),t}function of(n,e){let t=n._components.get(n._getNumber(e.ID));if(t?.fill){let i=Math.min(100,Math.max(0,n._getNumber(e.PROG)));t.fill.style.width=i+"%",t.progress=i,t.element.setAttribute("aria-valuenow",String(i))}}function af(n,e){return n._components.get(n._getNumber(e.ID))?.progress||0}var v0={createProgress:rf,setProgress:of,getProgress:af};var ic={};Ye(ic,{createRating:()=>lf,getRating:()=>cf,methods:()=>x0,onRatingChange:()=>uf});function lf(n,e){let t=n._nextId++,i=Math.min(10,Math.max(1,n._getNumber(e.MAX,5))),s=Math.min(i,Math.max(0,n._getNumber(e.RATING,0))),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=String(e.ANIM||"fade"),l=document.createElement("div");l.className="easyui-rating",l.setAttribute("role","slider"),l.setAttribute("tabindex","0"),l.setAttribute("aria-label","评分"),l.setAttribute("aria-valuemin","0"),l.setAttribute("aria-valuemax",String(i)),l.setAttribute("aria-valuenow",String(s));let c=d=>{let h=n._components.get(t);h&&(h.value=d),l.querySelectorAll(".easyui-rating-star").forEach((p,y)=>{y<d?p.classList.add("active"):p.classList.remove("active")}),l.setAttribute("aria-valuenow",String(d)),n._triggerEvent("ratingChange",t,d)};for(let d=1;d<=i;d++){let h=document.createElement("span");h.className="easyui-rating-star"+(d<=s?" active":""),h.textContent="★",h.setAttribute("role","button"),h.setAttribute("aria-label",`${d} 星`),h.setAttribute("tabindex","-1"),h.addEventListener("click",()=>c(d)),l.appendChild(h)}l.addEventListener("keydown",d=>{let h=parseInt(l.getAttribute("aria-valuenow"))||0;d.key==="ArrowRight"||d.key==="ArrowUp"?(d.preventDefault(),c(Math.min(i,h+1))):d.key==="ArrowLeft"||d.key==="ArrowDown"?(d.preventDefault(),c(Math.max(0,h-1))):d.key==="Home"?(d.preventDefault(),c(0)):d.key==="End"?(d.preventDefault(),c(i)):(d.key===" "||d.key==="Enter")&&(d.preventDefault(),c(h===i?0:i))});let u=n._getPageContainer(n._currentPageId);return n._setPosition(l,r,o),u.appendChild(l),n._addAnimation(l,a),n._components.set(t,{type:"rating",element:l,value:s,max:i,x:r,y:o,pageId:n._currentPageId}),t}function cf(n,e){return n._components.get(n._getNumber(e.ID))?.value||0}function uf(n,e){return n._checkEvent("ratingChange",n._getNumber(e.ID))}var x0={createRating:lf,getRating:cf,onRatingChange:uf};var sc={};Ye(sc,{createSkeleton:()=>hf,methods:()=>b0,removeSkeleton:()=>df});function hf(n,e){let t=n._nextId++,i=n._getNumber(e.W,200),s=n._getNumber(e.H,100),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=String(e.ANIM||"fade"),l=document.createElement("div");l.className="easyui-skeleton",l.style.width=i+"px",l.style.height=s+"px";let c=n._getPageContainer(n._currentPageId);return n._setPosition(l,r,o),c.appendChild(l),n._addAnimation(l,a),n._components.set(t,{type:"skeleton",element:l,x:r,y:o,pageId:n._currentPageId}),t}function df(n,e){n.removeComponent(e)}var b0={createSkeleton:hf,removeSkeleton:df};var rc={};Ye(rc,{_showCellEditor:()=>pf,createTable:()=>ff,embedComponentInCell:()=>vf,getTableCell:()=>_f,mergeCells:()=>gf,methods:()=>M0,setTableCell:()=>mf,splitCell:()=>yf});function ff(n,e){let t=n._nextId++,i=Math.max(1,n._getNumber(e.ROWS,3)),s=Math.max(1,n._getNumber(e.COLS,3)),r=n._getNumber(e.X,100),o=n._getNumber(e.Y,100),a=document.createElement("div");a.className="easyui-table-container";let l=document.createElement("table");l.className="easyui-table";let c=document.createElement("tbody"),u=new Map;for(let h=0;h<i;h++){let f=document.createElement("tr");for(let p=0;p<s;p++){let y=document.createElement("td");y.textContent=`单元格 ${h+1},${p+1}`,y.setAttribute("data-row",h),y.setAttribute("data-col",p),y.addEventListener("dblclick",()=>n._showCellEditor(y,t,h,p)),f.appendChild(y)}c.appendChild(f)}l.appendChild(c),a.appendChild(l);let d=n._getPageContainer(n._currentPageId);return n._setPosition(a,r,o),d.appendChild(a),n._components.set(t,{type:"table",element:a,table:l,rows:i,cols:s,mergeMap:u,x:r,y:o,pageId:n._currentPageId}),t}function pf(n,e,t,i,s){let r=e.textContent,o=document.createElement("input");o.value=r,o.style.width="100%",o.addEventListener("blur",()=>{e.textContent=o.value,n._triggerEvent("tableChange",t,{row:i,col:s,value:o.value})}),o.addEventListener("keypress",a=>{a.key==="Enter"&&o.blur()}),e.textContent="",e.appendChild(o),o.focus()}function mf(n,e){let t=n._getNumber(e.ID),i=n._getNumber(e.ROW,1)-1,s=n._getNumber(e.COL,1)-1,r=String(e.CONTENT||""),o=n._components.get(t);if(o?.table){let a=o.table.querySelectorAll("tr")[i];if(a){let l=a.querySelectorAll("td")[s];l&&(l.innerHTML=n._renderContent(r))}}}function gf(n,e){let t=n._getNumber(e.ID),i=n._getNumber(e.R1,1)-1,s=n._getNumber(e.C1,1)-1,r=n._getNumber(e.R2,1)-1,o=n._getNumber(e.C2,1)-1,a=n._components.get(t);if(!a?.table)return;let l=a.table.querySelector("tbody"),c=l.querySelectorAll("tr")[i]?.querySelectorAll("td")[s];if(!c)return;let u=r-i+1,d=o-s+1;c.setAttribute("rowspan",u),c.setAttribute("colspan",d);let h=[];for(let f=i;f<=r;f++)for(let p=s;p<=o;p++){if(f===i&&p===s)continue;let y=l.querySelectorAll("tr")[f]?.querySelectorAll("td")[p];y&&(y.style.display="none",h.push(y))}c._easyuiMerged={hidden:h}}function yf(n,e){let t=n._getNumber(e.ID),i=n._getNumber(e.ROW,1)-1,s=n._getNumber(e.COL,1)-1,r=n._components.get(t);if(!r?.table)return;let o=r.table.querySelectorAll("tr")[i]?.querySelectorAll("td")[s];if(!o)return;let a=o._easyuiMerged;o.removeAttribute("rowspan"),o.removeAttribute("colspan"),o.style.display="",a&&(a.hidden.forEach(l=>{l.style.display=""}),delete o._easyuiMerged)}function _f(n,e){let t=n._getNumber(e.ID),i=n._getNumber(e.ROW,1)-1,s=n._getNumber(e.COL,1)-1,r=n._components.get(t);if(r?.table){let o=r.table.querySelectorAll("tr")[i]?.querySelectorAll("td")[s];if(o)return o.textContent}return""}function vf(n,e){let t=n._getNumber(e.ID),i=n._getNumber(e.ROW,1)-1,s=n._getNumber(e.COL,1)-1,r=n._getNumber(e.COMP_ID),o=n._components.get(t),a=n._components.get(r);if(o?.table&&a?.element){let l=o.table.querySelectorAll("tr")[i]?.querySelectorAll("td")[s];l&&(l.innerHTML="",l.appendChild(a.element),a.element.style.position="relative",a.element.style.left="0",a.element.style.top="0")}}var M0={createTable:ff,_showCellEditor:pf,setTableCell:mf,mergeCells:gf,splitCell:yf,getTableCell:_f,embedComponentInCell:vf};var oc={};Ye(oc,{_setCompText:()=>xf,getComponentText:()=>Mf,methods:()=>S0,setComponentText:()=>bf});function xf(n,e,t){if(e&&e.element){let i=e.element.querySelector(".easyui-comp-text");i&&(i.textContent=t)}}function bf(n,e){let t=n._components.get(n._getNumber(e.ID));if(!t||!t.element)return;let i=String(e.TEXT||"");if(t.type==="card"){let s=t.element.querySelector(".easyui-card-header");s&&(s.textContent=i)}else if(t.type==="heading"||t.type==="text")t.element.textContent=i;else if(t.type==="button")t.element.textContent=i;else if(t.type==="label")t.element.innerHTML=n._renderContent(i);else if(t.type==="alert"){let s=t.element.querySelector(".easyui-alert-title");s&&(s.textContent=i)}}function Mf(n,e){let t=n._components.get(n._getNumber(e.ID));if(!t||!t.element)return"";if(t.type==="card"){let i=t.element.querySelector(".easyui-card-header");return i?i.textContent:""}return t.type==="input"||t.type==="textarea"||t.type==="search"?t.input?t.input.value:"":t.element.textContent||""}var S0={_setCompText:xf,setComponentText:bf,getComponentText:Mf};var E0=[Al,wl,Cl,Il,Rl,Nl,Pl,Dl,Ll,Bl,Ol,Ul,Fl,kl,zl,Vl,Gl,Hl,Wl,Xl,ql,Yl,$l,Zl,Jl,jl,Kl,Ql,ec,tc,nc,ic,sc,rc,oc];function Sf(){let n={};for(let e of E0)e&&e.methods&&Object.assign(n,e.methods);return n}function Ef(n){n._getNumber=(i,s=0)=>ml(i,s),n._escapeHtml=pl,n._renderContent=Ih,n._parseMarkdown=_l,n._addAnimation=Rh,n._addRipple=Nh,n._updateSliderFill=Ph,n._applySnap=i=>Gr(n,i),n._setPosition=(i,s,r,o=!0)=>Wi(n,i,s,r,o),n._scheduleOverlapFix=i=>xl(n,i),n._avoidOverlap=i=>bl(n,i),n._getPosition=i=>Ds(i),n._setupDrag=(i,s,r=null)=>Dh(n,i,s,r),n._removeDrag=i=>El(n,i),n._moveComponentOrGroup=(i,s,r,o)=>Ml(n,i,s,r,o),n._startInertia=(i,s)=>Sl(n,i,s),n._triggerEvent=(i,s,r)=>Lh(n,i,s,r),n._checkEvent=(i,s)=>Bh(n,i,s),n._initStageContainer=()=>gl(n),n._observeStageChanges=()=>zr(n),n._refreshAllPositions=()=>Ci(n),n._getPageContainer=i=>yl(n,i),n._ensureContainer=()=>n._stageContainer,n._disposeStage=()=>Vr(n);let e=i=>i.bind(null,n);for(let[i,s]of Object.entries(Tl))i==="default"||typeof s!="function"||(n[i]=e(s));let t=Sf();for(let[i,s]of Object.entries(t))typeof s=="function"&&(i.startsWith("create")?n[i]=(...r)=>{let o=s(n,...r);if(n._afterComponentCreate)try{n._afterComponentCreate(o)}catch(a){console.warn("[EasyUI] 组件创建后处理失败",a)}return o}:n[i]=e(s));n.clearAll=()=>T0(n)}function T0(n){for(let e of n._components.values())e.element?(El(n,e.element),e.element.remove()):e.close&&e.close();n._components.clear(),n._callbacks.clear(),n._groups.clear();for(let e of n._pages.values())e.container.remove();n._pages.clear(),n._pagesContainer&&(n._pagesContainer.innerHTML=""),n._currentPageId=null,n._nextId=1,n._nextGroupId=1,n._nextPageId=1,n._eventTriggers.clear(),n._doc.querySelectorAll(".easyui-dropdown-pop,.easyui-tooltip-pop,.easyui-toast,.easyui-loading-full").forEach(e=>e.remove()),bn(n,"clear")}function Tf(n){let e=n.BlockType,t=n.ArgumentType;return{id:"easyui",name:"EasyUI 完整组件库",color1:"#3b82f6",color2:"#5dade2",color3:"#1e4b8f",blocks:[{blockType:"label",text:"【页面管理】"},{opcode:"createPage",blockType:n.BlockType.COMMAND,text:"创建页面 [NAME]",arguments:{NAME:{type:n.ArgumentType.STRING,defaultValue:"新页面"}}},{opcode:"switchToPage",blockType:n.BlockType.COMMAND,text:"切换到页面 [PAGE_ID]",arguments:{PAGE_ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"deletePage",blockType:n.BlockType.COMMAND,text:"删除页面 [PAGE_ID]",arguments:{PAGE_ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"hidePage",blockType:n.BlockType.COMMAND,text:"隐藏页面 [PAGE_ID]",arguments:{PAGE_ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"showPage",blockType:n.BlockType.COMMAND,text:"显示页面 [PAGE_ID]",arguments:{PAGE_ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"moveComponentToPage",blockType:n.BlockType.COMMAND,text:"移动组件 [ID] 到页面 [PAGE_ID]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},PAGE_ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"getCurrentPage",blockType:n.BlockType.REPORTER,text:"当前页面ID"},{blockType:"label",text:"【群组管理】"},{opcode:"createGroup",blockType:n.BlockType.COMMAND,text:"创建群组 包含组件 [IDS]",arguments:{IDS:{type:n.ArgumentType.STRING,defaultValue:"1,2,3"}}},{opcode:"addToGroup",blockType:n.BlockType.COMMAND,text:"将组件 [ID] 加入群组 [GROUP_ID]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},GROUP_ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"removeFromGroup",blockType:n.BlockType.COMMAND,text:"将组件 [ID] 移出群组",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"enableGroupDrag",blockType:n.BlockType.COMMAND,text:"启用群组 [GROUP_ID] 拖拽",arguments:{GROUP_ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"disableGroupDrag",blockType:n.BlockType.COMMAND,text:"禁用群组 [GROUP_ID] 拖拽",arguments:{GROUP_ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setInertia",blockType:n.BlockType.COMMAND,text:"设置惯性强度 [STRENGTH]",arguments:{STRENGTH:{type:n.ArgumentType.NUMBER,defaultValue:.95}}},{opcode:"enableInertia",blockType:n.BlockType.COMMAND,text:"启用惯性拖拽"},{opcode:"disableInertia",blockType:n.BlockType.COMMAND,text:"禁用惯性拖拽"},{blockType:"label",text:"【舞台组件】"},{opcode:"createButton",blockType:n.BlockType.COMMAND,text:"创建按钮 [TEXT] 类型 [TYPE] 位置 x:[X] y:[Y] 动画 [ANIM]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:"按钮"},TYPE:{type:n.ArgumentType.STRING,menu:"typeMenu",defaultValue:"primary"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100},ANIM:{type:n.ArgumentType.STRING,menu:"animMenu",defaultValue:"fade"}}},{opcode:"setButtonText",blockType:n.BlockType.COMMAND,text:"设置按钮 [ID] 文字 [TEXT]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},TEXT:{type:n.ArgumentType.STRING,defaultValue:"新文字"}}},{opcode:"onButtonClick",blockType:n.BlockType.HAT,text:"当按钮 [ID] 被点击",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createSelect",blockType:n.BlockType.COMMAND,text:"创建下拉菜单 选项 [OPTIONS] 位置 x:[X] y:[Y] 动画 [ANIM]",arguments:{OPTIONS:{type:n.ArgumentType.STRING,defaultValue:"选项1,选项2,选项3"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100},ANIM:{type:n.ArgumentType.STRING,menu:"animMenu",defaultValue:"fade"}}},{opcode:"getSelectedValue",blockType:n.BlockType.REPORTER,text:"下拉菜单 [ID] 选中值",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onSelectChange",blockType:n.BlockType.HAT,text:"当下拉菜单 [ID] 改变",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createLabel",blockType:n.BlockType.COMMAND,text:"创建标签 [TEXT] 位置 x:[X] y:[Y] 动画 [ANIM]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:"标签"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100},ANIM:{type:n.ArgumentType.STRING,menu:"animMenu",defaultValue:"fade"}}},{opcode:"setLabelText",blockType:n.BlockType.COMMAND,text:"设置标签 [ID] 文字 [TEXT]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},TEXT:{type:n.ArgumentType.STRING,defaultValue:"新文字"}}},{blockType:"label",text:"【通用组件 2.3】"},{opcode:"createCard",blockType:n.BlockType.COMMAND,text:"创建卡片 标题[TITLE] 内容[CONTENT] x:[X] y:[Y]",arguments:{TITLE:{type:n.ArgumentType.STRING,defaultValue:"卡片标题"},CONTENT:{type:n.ArgumentType.STRING,defaultValue:"卡片内容"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createDivider",blockType:n.BlockType.COMMAND,text:"创建分割线 文字[TEXT] 方向[DIR] x:[X] y:[Y]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:""},DIR:{type:n.ArgumentType.STRING,menu:"orientMenu",defaultValue:"horizontal"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createImage",blockType:n.BlockType.COMMAND,text:"创建图片 地址[SRC] 形状[SHAPE] x:[X] y:[Y]",arguments:{SRC:{type:n.ArgumentType.STRING,defaultValue:""},SHAPE:{type:n.ArgumentType.STRING,menu:"shapeMenu",defaultValue:"rounded"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createAvatar",blockType:n.BlockType.COMMAND,text:"创建头像 地址[SRC] x:[X] y:[Y]",arguments:{SRC:{type:n.ArgumentType.STRING,defaultValue:""},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createInput",blockType:n.BlockType.COMMAND,text:"创建输入框 占位[PLACEHOLDER] x:[X] y:[Y]",arguments:{PLACEHOLDER:{type:n.ArgumentType.STRING,defaultValue:"请输入..."},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createTextarea",blockType:n.BlockType.COMMAND,text:"创建多行文本 占位[PLACEHOLDER] x:[X] y:[Y]",arguments:{PLACEHOLDER:{type:n.ArgumentType.STRING,defaultValue:"请输入多行内容..."},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"getInputValue",blockType:n.BlockType.REPORTER,text:"输入框 [ID] 内容",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setInputValue",blockType:n.BlockType.COMMAND,text:"设置输入框 [ID] 内容为 [VAL]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},VAL:{type:n.ArgumentType.STRING,defaultValue:""}}},{opcode:"onInputComplete",blockType:n.BlockType.HAT,text:"当输入框 [ID] 输入完成",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setInputReadonly",blockType:n.BlockType.COMMAND,text:"设置输入框 [ID] 只读 [READONLY]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},READONLY:{type:n.ArgumentType.BOOLEAN,defaultValue:!1}}},{opcode:"createCheckbox",blockType:n.BlockType.COMMAND,text:"创建复选框 标签[LABEL] 选中[CHECKED] x:[X] y:[Y]",arguments:{LABEL:{type:n.ArgumentType.STRING,defaultValue:"选项"},CHECKED:{type:n.ArgumentType.BOOLEAN,defaultValue:!1},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"setCheckbox",blockType:n.BlockType.COMMAND,text:"设置复选框 [ID] 选中 [CHECKED]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},CHECKED:{type:n.ArgumentType.BOOLEAN,defaultValue:!0}}},{opcode:"isCheckboxChecked",blockType:n.BlockType.BOOLEAN,text:"复选框 [ID] 已选中?",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onCheckboxChange",blockType:n.BlockType.HAT,text:"当复选框 [ID] 改变",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createRadio",blockType:n.BlockType.COMMAND,text:"创建单选组 选项[OPTIONS] 选中[SEL] x:[X] y:[Y]",arguments:{OPTIONS:{type:n.ArgumentType.STRING,defaultValue:"选项A,选项B,选项C"},SEL:{type:n.ArgumentType.NUMBER,defaultValue:1},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"getRadioValue",blockType:n.BlockType.REPORTER,text:"单选组 [ID] 选中项",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"getRadioIndex",blockType:n.BlockType.REPORTER,text:"单选组 [ID] 选中序号",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onRadioChange",blockType:n.BlockType.HAT,text:"当单选组 [ID] 改变",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createNumberInput",blockType:n.BlockType.COMMAND,text:"创建数字输入 值[VAL] 最小[MIN] 最大[MAX] 步长[STEP] x:[X] y:[Y]",arguments:{VAL:{type:n.ArgumentType.NUMBER,defaultValue:0},MIN:{type:n.ArgumentType.NUMBER,defaultValue:0},MAX:{type:n.ArgumentType.NUMBER,defaultValue:100},STEP:{type:n.ArgumentType.NUMBER,defaultValue:1},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"getNumberValue",blockType:n.BlockType.REPORTER,text:"数字输入 [ID] 值",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setNumberValue",blockType:n.BlockType.COMMAND,text:"设置数字输入 [ID] 值为 [VAL]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},VAL:{type:n.ArgumentType.NUMBER,defaultValue:0}}},{opcode:"onNumberChange",blockType:n.BlockType.HAT,text:"当数字输入 [ID] 改变",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createSearch",blockType:n.BlockType.COMMAND,text:"创建搜索框 占位[PLACEHOLDER] x:[X] y:[Y]",arguments:{PLACEHOLDER:{type:n.ArgumentType.STRING,defaultValue:"搜索..."},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"getSearchValue",blockType:n.BlockType.REPORTER,text:"搜索框 [ID] 内容",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onSearchSubmit",blockType:n.BlockType.HAT,text:"当搜索框 [ID] 提交",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createTabs",blockType:n.BlockType.COMMAND,text:"创建选项卡 标签[TABS] 内容[PANELS] x:[X] y:[Y]",arguments:{TABS:{type:n.ArgumentType.STRING,defaultValue:"标签1,标签2,标签3"},PANELS:{type:n.ArgumentType.STRING,defaultValue:"内容1,内容2,内容3"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"setActiveTab",blockType:n.BlockType.COMMAND,text:"设置选项卡 [ID] 选中第 [INDEX] 个",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},INDEX:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"getActiveTab",blockType:n.BlockType.REPORTER,text:"选项卡 [ID] 选中序号",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onTabChange",blockType:n.BlockType.HAT,text:"当选项卡 [ID] 改变",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createAccordion",blockType:n.BlockType.COMMAND,text:"创建折叠面板 标题[HEADS] 内容[BODIES] x:[X] y:[Y]",arguments:{HEADS:{type:n.ArgumentType.STRING,defaultValue:"面板1,面板2,面板3"},BODIES:{type:n.ArgumentType.STRING,defaultValue:"正文1,正文2,正文3"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"setAccordionExpanded",blockType:n.BlockType.COMMAND,text:"设置折叠面板 [ID] 第 [INDEX] 个展开 [EXP]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},INDEX:{type:n.ArgumentType.NUMBER,defaultValue:1},EXP:{type:n.ArgumentType.BOOLEAN,defaultValue:!0}}},{opcode:"onAccordionChange",blockType:n.BlockType.HAT,text:"当折叠面板 [ID] 改变",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createEmpty",blockType:n.BlockType.COMMAND,text:"创建空状态 图标[ICON] 文字[TEXT] x:[X] y:[Y]",arguments:{ICON:{type:n.ArgumentType.STRING,defaultValue:"📭"},TEXT:{type:n.ArgumentType.STRING,defaultValue:"暂无数据"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createList",blockType:n.BlockType.COMMAND,text:"创建列表 项[ITEMS] x:[X] y:[Y]",arguments:{ITEMS:{type:n.ArgumentType.STRING,defaultValue:"项目1,项目2,项目3"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"getListSelectedIndex",blockType:n.BlockType.REPORTER,text:"列表 [ID] 选中序号",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onListItemClick",blockType:n.BlockType.HAT,text:"当列表 [ID] 项目被点击",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createMenu",blockType:n.BlockType.COMMAND,text:"创建菜单 项[ITEMS] x:[X] y:[Y]",arguments:{ITEMS:{type:n.ArgumentType.STRING,defaultValue:"新建,打开,保存,删除"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"getMenuSelectedIndex",blockType:n.BlockType.REPORTER,text:"菜单 [ID] 选中序号",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onMenuItemClick",blockType:n.BlockType.HAT,text:"当菜单 [ID] 项目被点击",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createDropdown",blockType:n.BlockType.COMMAND,text:"创建下拉按钮 文字[TEXT] 项[ITEMS] x:[X] y:[Y]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:"菜单"},ITEMS:{type:n.ArgumentType.STRING,defaultValue:"选项1,选项2,选项3"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"getDropdownSelectedIndex",blockType:n.BlockType.REPORTER,text:"下拉 [ID] 选中序号",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onDropdownSelect",blockType:n.BlockType.HAT,text:"当下拉 [ID] 选中",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createTooltip",blockType:n.BlockType.COMMAND,text:"创建提示 文字[TEXT] 提示[TIP] 类型[KIND] x:[X] y:[Y]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:"悬停我"},TIP:{type:n.ArgumentType.STRING,defaultValue:"提示内容"},KIND:{type:n.ArgumentType.STRING,menu:"tooltipMenu",defaultValue:"tooltip"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createAlert",blockType:n.BlockType.COMMAND,text:"创建警告条 类型[TYPE] 标题[TITLE] 描述[DESC] x:[X] y:[Y]",arguments:{TYPE:{type:n.ArgumentType.STRING,menu:"alertMenu",defaultValue:"info"},TITLE:{type:n.ArgumentType.STRING,defaultValue:"提示"},DESC:{type:n.ArgumentType.STRING,defaultValue:""},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createLoading",blockType:n.BlockType.COMMAND,text:"创建加载动画 文字[TEXT] 类型[KIND] x:[X] y:[Y]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:"加载中..."},KIND:{type:n.ArgumentType.STRING,menu:"loadingMenu",defaultValue:"inline"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createHeading",blockType:n.BlockType.COMMAND,text:"创建标题 文字[TEXT] 级别[LEVEL] x:[X] y:[Y]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:"标题"},LEVEL:{type:n.ArgumentType.NUMBER,defaultValue:1},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createText",blockType:n.BlockType.COMMAND,text:"创建文本 文字[TEXT] 静音[MUTED] x:[X] y:[Y]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:"文本"},MUTED:{type:n.ArgumentType.BOOLEAN,defaultValue:!1},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createLink",blockType:n.BlockType.COMMAND,text:"创建链接 文字[TEXT] 地址[HREF] x:[X] y:[Y]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:"链接"},HREF:{type:n.ArgumentType.STRING,defaultValue:"#"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"createConfirm",blockType:n.BlockType.COMMAND,text:"创建确认弹窗 标题[TITLE] 内容[CONTENT] 危险[DANGER]",arguments:{TITLE:{type:n.ArgumentType.STRING,defaultValue:"确认"},CONTENT:{type:n.ArgumentType.STRING,defaultValue:"确定执行该操作吗？"},DANGER:{type:n.ArgumentType.BOOLEAN,defaultValue:!1}}},{opcode:"openConfirm",blockType:n.BlockType.COMMAND,text:"打开确认弹窗 [ID]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onConfirmResult",blockType:n.BlockType.HAT,text:"当确认弹窗 [ID] 得到结果",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"showToastType",blockType:n.BlockType.COMMAND,text:"弹出提示 类型[TYPE] 内容[CONTENT]",arguments:{TYPE:{type:n.ArgumentType.STRING,menu:"toastMenu",defaultValue:"info"},CONTENT:{type:n.ArgumentType.STRING,defaultValue:"提示内容"}}},{opcode:"setComponentText",blockType:n.BlockType.COMMAND,text:"设置组件 [ID] 文字 [TEXT]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},TEXT:{type:n.ArgumentType.STRING,defaultValue:""}}},{opcode:"getComponentText",blockType:n.BlockType.REPORTER,text:"组件 [ID] 文字",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{blockType:"label",text:"【移动组件】"},{opcode:"enableDrag",blockType:n.BlockType.COMMAND,text:"启用组件 [ID] 拖拽",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"disableDrag",blockType:n.BlockType.COMMAND,text:"禁用组件 [ID] 拖拽",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setPosition",blockType:n.BlockType.COMMAND,text:"移动组件 [ID] 到 x:[X] y:[Y]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"getComponentX",blockType:n.BlockType.REPORTER,text:"组件 [ID] X坐标",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"getComponentY",blockType:n.BlockType.REPORTER,text:"组件 [ID] Y坐标",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"moveBy",blockType:n.BlockType.COMMAND,text:"组件 [ID] 移动 dx:[DX] dy:[DY]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},DX:{type:n.ArgumentType.NUMBER,defaultValue:10},DY:{type:n.ArgumentType.NUMBER,defaultValue:10}}},{opcode:"enableSnap",blockType:n.BlockType.COMMAND,text:"启用吸附 网格大小 [SIZE]",arguments:{SIZE:{type:n.ArgumentType.NUMBER,defaultValue:20}}},{opcode:"disableSnap",blockType:n.BlockType.COMMAND,text:"禁用吸附"},{opcode:"onDragEnd",blockType:n.BlockType.HAT,text:"当组件 [ID] 拖拽结束",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"getDragX",blockType:n.BlockType.REPORTER,text:"拖拽结束X坐标"},{opcode:"getDragY",blockType:n.BlockType.REPORTER,text:"拖拽结束Y坐标"},{blockType:"label",text:"【控制组件】"},{opcode:"createSlider",blockType:n.BlockType.COMMAND,text:"创建滑块 最小[MIN] 最大[MAX] 初始[VAL] 位置 x:[X] y:[Y] 动画 [ANIM]",arguments:{MIN:{type:n.ArgumentType.NUMBER,defaultValue:0},MAX:{type:n.ArgumentType.NUMBER,defaultValue:100},VAL:{type:n.ArgumentType.NUMBER,defaultValue:50},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100},ANIM:{type:n.ArgumentType.STRING,menu:"animMenu",defaultValue:"fade"}}},{opcode:"getSliderValue",blockType:n.BlockType.REPORTER,text:"滑块 [ID] 的值",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setSliderValue",blockType:n.BlockType.COMMAND,text:"设置滑块 [ID] 值为 [VAL]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},VAL:{type:n.ArgumentType.NUMBER,defaultValue:50}}},{opcode:"onSliderChange",blockType:n.BlockType.HAT,text:"当滑块 [ID] 改变",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createSwitch",blockType:n.BlockType.COMMAND,text:"创建开关 初始[STATE] 位置 x:[X] y:[Y] 动画 [ANIM]",arguments:{STATE:{type:n.ArgumentType.BOOLEAN,defaultValue:!1},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100},ANIM:{type:n.ArgumentType.STRING,menu:"animMenu",defaultValue:"fade"}}},{opcode:"isSwitchOn",blockType:n.BlockType.BOOLEAN,text:"开关 [ID] 是否开启",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setSwitchState",blockType:n.BlockType.COMMAND,text:"设置开关 [ID] 状态为 [STATE]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},STATE:{type:n.ArgumentType.BOOLEAN,defaultValue:!0}}},{opcode:"onSwitchChange",blockType:n.BlockType.HAT,text:"当开关 [ID] 改变",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createProgress",blockType:n.BlockType.COMMAND,text:"创建进度条 初始[PROG]% 位置 x:[X] y:[Y] 动画 [ANIM]",arguments:{PROG:{type:n.ArgumentType.NUMBER,defaultValue:0},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100},ANIM:{type:n.ArgumentType.STRING,menu:"animMenu",defaultValue:"fade"}}},{opcode:"setProgress",blockType:n.BlockType.COMMAND,text:"设置进度条 [ID] 进度 [PROG]%",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},PROG:{type:n.ArgumentType.NUMBER,defaultValue:50}}},{opcode:"getProgress",blockType:n.BlockType.REPORTER,text:"进度条 [ID] 的进度",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createRating",blockType:n.BlockType.COMMAND,text:"创建评分 最大星数[MAX] 初始[RATING] 位置 x:[X] y:[Y] 动画 [ANIM]",arguments:{MAX:{type:n.ArgumentType.NUMBER,defaultValue:5},RATING:{type:n.ArgumentType.NUMBER,defaultValue:0},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100},ANIM:{type:n.ArgumentType.STRING,menu:"animMenu",defaultValue:"fade"}}},{opcode:"getRating",blockType:n.BlockType.REPORTER,text:"评分 [ID] 的分数",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"onRatingChange",blockType:n.BlockType.HAT,text:"当评分 [ID] 改变",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"createSkeleton",blockType:n.BlockType.COMMAND,text:"创建骨架屏 宽[W] 高[H] 位置 x:[X] y:[Y] 动画 [ANIM]",arguments:{W:{type:n.ArgumentType.NUMBER,defaultValue:200},H:{type:n.ArgumentType.NUMBER,defaultValue:100},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100},ANIM:{type:n.ArgumentType.STRING,menu:"animMenu",defaultValue:"fade"}}},{opcode:"removeSkeleton",blockType:n.BlockType.COMMAND,text:"移除骨架屏 [ID]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{blockType:"label",text:"【表格组件】"},{opcode:"createTable",blockType:n.BlockType.COMMAND,text:"创建表格 行[ROWS] 列[COLS] 位置 x:[X] y:[Y]",arguments:{ROWS:{type:n.ArgumentType.NUMBER,defaultValue:3},COLS:{type:n.ArgumentType.NUMBER,defaultValue:3},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"setTableCell",blockType:n.BlockType.COMMAND,text:"设置表格 [ID] 单元格 [ROW],[COL] 内容 [CONTENT]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},ROW:{type:n.ArgumentType.NUMBER,defaultValue:1},COL:{type:n.ArgumentType.NUMBER,defaultValue:1},CONTENT:{type:n.ArgumentType.STRING,defaultValue:"文本"}}},{opcode:"mergeCells",blockType:n.BlockType.COMMAND,text:"合并表格 [ID] 单元格 [R1],[C1] 到 [R2],[C2]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},R1:{type:n.ArgumentType.NUMBER,defaultValue:1},C1:{type:n.ArgumentType.NUMBER,defaultValue:1},R2:{type:n.ArgumentType.NUMBER,defaultValue:1},C2:{type:n.ArgumentType.NUMBER,defaultValue:2}}},{opcode:"splitCell",blockType:n.BlockType.COMMAND,text:"拆分表格 [ID] 单元格 [ROW],[COL]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},ROW:{type:n.ArgumentType.NUMBER,defaultValue:1},COL:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"getTableCell",blockType:n.BlockType.REPORTER,text:"表格 [ID] 单元格 [ROW],[COL] 内容",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},ROW:{type:n.ArgumentType.NUMBER,defaultValue:1},COL:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"embedComponentInCell",blockType:n.BlockType.COMMAND,text:"在表格 [ID] 单元格 [ROW],[COL] 嵌入组件 [COMP_ID]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},ROW:{type:n.ArgumentType.NUMBER,defaultValue:1},COL:{type:n.ArgumentType.NUMBER,defaultValue:1},COMP_ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{blockType:"label",text:"【弹窗与通知】"},{opcode:"showToast",blockType:n.BlockType.COMMAND,text:"显示通知 [MSG] 持续 [SEC] 秒",arguments:{MSG:{type:n.ArgumentType.STRING,defaultValue:"操作成功"},SEC:{type:n.ArgumentType.NUMBER,defaultValue:2}}},{opcode:"createModal",blockType:n.BlockType.COMMAND,text:"创建弹窗 标题[TITLE] 内容[CONTENT]",arguments:{TITLE:{type:n.ArgumentType.STRING,defaultValue:"提示"},CONTENT:{type:n.ArgumentType.STRING,defaultValue:"这是一个弹窗"}}},{opcode:"openModal",blockType:n.BlockType.COMMAND,text:"打开弹窗 [ID]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"closeModal",blockType:n.BlockType.COMMAND,text:"关闭弹窗 [ID]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{blockType:"label",text:"【工具】"},{opcode:"getLastId",blockType:n.BlockType.REPORTER,text:"最后创建的组件ID"},{opcode:"removeComponent",blockType:n.BlockType.COMMAND,text:"移除组件 [ID]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setComponentStatus",blockType:n.BlockType.COMMAND,text:"设置组件 [ID] 状态为 [STATUS]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},STATUS:{type:n.ArgumentType.STRING,menu:"statusMenu",defaultValue:"normal"}}},{opcode:"clearAll",blockType:n.BlockType.COMMAND,text:"清空所有组件"},{opcode:"setAutoLayout",blockType:n.BlockType.COMMAND,text:"自动错开新组件 [ENABLED]",arguments:{ENABLED:{type:n.ArgumentType.BOOLEAN,defaultValue:!0}}},{opcode:"setTheme",blockType:n.BlockType.COMMAND,text:"设置主题 [COLOR]",arguments:{COLOR:{type:n.ArgumentType.STRING,menu:"themeMenu",defaultValue:"blue"}}},{blockType:"label",text:"【主题与仪表盘】"},{func:"openDashboard",blockType:n.BlockType.BUTTON||"button",text:"打开主题仪表盘"},{opcode:"applyThemeJSON",blockType:n.BlockType.COMMAND,text:"应用主题 JSON [JSON]",arguments:{JSON:{type:n.ArgumentType.STRING,defaultValue:""}}},{opcode:"clearTheme",blockType:n.BlockType.COMMAND,text:"清除当前主题"},{opcode:"getThemeId",blockType:n.BlockType.REPORTER,text:"当前主题ID"},{blockType:"label",text:"【3D 组件】"},{opcode:"create3DContainer",blockType:n.BlockType.COMMAND,text:"创建 3D 方块 文字[TEXT] 颜色[COLOR] 位置 x:[X] y:[Y]",arguments:{TEXT:{type:n.ArgumentType.STRING,defaultValue:"3D"},COLOR:{type:n.ArgumentType.COLOR,defaultValue:"#3b82f6"},X:{type:n.ArgumentType.NUMBER,defaultValue:100},Y:{type:n.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"set3DScale",blockType:n.BlockType.COMMAND,text:"设置 3D 组件 [ID] 缩放 [SCALE]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},SCALE:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"set3DText",blockType:n.BlockType.COMMAND,text:"设置 3D 组件 [ID] 文字 [TEXT]",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1},TEXT:{type:n.ArgumentType.STRING,defaultValue:"3D"}}},{opcode:"set3DLightDirection",blockType:n.BlockType.COMMAND,text:"设置主光源方向 x:[X] y:[Y] z:[Z]",arguments:{X:{type:n.ArgumentType.NUMBER,defaultValue:.6},Y:{type:n.ArgumentType.NUMBER,defaultValue:-1},Z:{type:n.ArgumentType.NUMBER,defaultValue:.8}}},{opcode:"set3DLightIntensity",blockType:n.BlockType.COMMAND,text:"设置主光源强度 [VALUE]",arguments:{VALUE:{type:n.ArgumentType.NUMBER,defaultValue:1.1}}},{opcode:"set3DAmbientIntensity",blockType:n.BlockType.COMMAND,text:"设置环境光强度 [VALUE]",arguments:{VALUE:{type:n.ArgumentType.NUMBER,defaultValue:.55}}},{opcode:"on3DClick",blockType:n.BlockType.HAT,text:"当 3D 组件 [ID] 被点击",arguments:{ID:{type:n.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"enable3DPhysics",blockType:n.BlockType.COMMAND,text:"启用 3D 物理模拟"},{opcode:"disable3DPhysics",blockType:n.BlockType.COMMAND,text:"禁用 3D 物理模拟"},{opcode:"is3DPhysicsEnabled",blockType:n.BlockType.BOOLEAN,text:"3D 物理已启用?"}],menus:{typeMenu:{items:[{text:"主要",value:"primary"},{text:"次要",value:"secondary"},{text:"危险",value:"danger"},{text:"成功",value:"success"},{text:"警告",value:"warning"}]},animMenu:{items:[{text:"淡入",value:"fade"},{text:"上滑",value:"slide"},{text:"弹跳",value:"bounce"},{text:"涟漪",value:"ripple"}]},themeMenu:{items:[{text:"蓝色",value:"blue"},{text:"紫色",value:"purple"},{text:"绿色",value:"green"},{text:"橙色",value:"orange"},{text:"深色",value:"dark"}]},statusMenu:{items:[{text:"正常",value:"normal"},{text:"禁用",value:"disabled"},{text:"加载中",value:"loading"},{text:"错误",value:"error"}]},orientMenu:{items:[{text:"水平",value:"horizontal"},{text:"垂直",value:"vertical"}]},shapeMenu:{items:[{text:"圆角",value:"rounded"},{text:"圆形",value:"circle"}]},tooltipMenu:{items:[{text:"提示",value:"tooltip"},{text:"气泡卡片",value:"popover"}]},alertMenu:{items:[{text:"信息",value:"info"},{text:"成功",value:"success"},{text:"警告",value:"warning"},{text:"危险",value:"danger"}]},loadingMenu:{items:[{text:"行内",value:"inline"},{text:"全屏",value:"fullscreen"}]},toastMenu:{items:[{text:"信息",value:"info"},{text:"成功",value:"success"},{text:"警告",value:"warning"},{text:"危险",value:"error"}]}}}}var ac=[{id:"color",label:"颜色",prefix:"--md-sys-color-"},{id:"shape",label:"形状与圆角",prefix:"--md-sys-shape-"},{id:"motion",label:"动效",prefix:"--md-sys-motion-"},{id:"type",label:"字体",prefix:"--md-sys-typescale-"}],A0=[["primary","主色","#6750A4"],["on-primary","主色上的文字","#FFFFFF"],["primary-container","主色容器","#EADDFF"],["on-primary-container","主色容器上的文字","#21005D"],["primary-fixed","主色固定","#EADDFF"],["primary-fixed-dim","主色固定暗","#D0BCFF"],["on-primary-fixed","主色固定上的文字","#21005D"],["on-primary-fixed-variant","主色固定强调文字","#4F378B"],["secondary","次色","#625B71"],["on-secondary","次色上的文字","#FFFFFF"],["secondary-container","次色容器","#E8DEF8"],["on-secondary-container","次色容器上的文字","#1D192B"],["tertiary","第三色","#7D5260"],["on-tertiary","第三色上的文字","#FFFFFF"],["tertiary-container","第三色容器","#FFD8E4"],["on-tertiary-container","第三色容器上的文字","#31111D"],["error","错误色","#B3261E"],["on-error","错误色上的文字","#FFFFFF"],["error-container","错误容器","#F9DEDC"],["on-error-container","错误容器上的文字","#410E0B"],["surface","表面","#FEF7FF"],["on-surface","表面文字","#1D1B20"],["surface-variant","表面变体","#E7E0EC"],["on-surface-variant","表面变体文字","#49454F"],["surface-dim","表面暗","#DED8E1"],["surface-bright","表面亮","#FEF7FF"],["surface-container-lowest","表面容器最低","#FFFFFF"],["surface-container-low","表面容器低","#F7F2FA"],["surface-container","表面容器","#F3EDF7"],["surface-container-high","表面容器高","#ECE6F0"],["surface-container-highest","表面容器最高","#E6E0E9"],["inverse-surface","反色表面","#322F35"],["inverse-on-surface","反色表面文字","#F5EFF7"],["inverse-primary","反色主色","#D0BCFF"],["outline","描边","#79747E"],["outline-variant","描边变体","#CAC4D0"],["scrim","遮罩","#000000"],["shadow","阴影","#000000"],["background","背景","#FEF7FF"],["on-background","背景文字","#1D1B20"],["surface-tint","表面着色","#6750A4"]],w0=[["corner-none","无圆角",0],["corner-extra-small","超小圆角",4],["corner-small","小圆角",8],["corner-medium","中圆角",12],["corner-large","大圆角",16],["corner-extra-large","超大圆角",28],["corner-full","全圆角",9999]],wf=[["easing-linear","线性","cubic-bezier(0, 0, 1, 1)"],["easing-standard","标准","cubic-bezier(0.2, 0, 0, 1)"],["easing-standard-accelerate","标准加速","cubic-bezier(0.3, 0, 1, 1)"],["easing-standard-decelerate","标准减速","cubic-bezier(0, 0, 0, 1)"],["easing-emphasized","强调","cubic-bezier(0.2, 0, 0, 1)"],["easing-emphasized-accelerate","强调加速","cubic-bezier(0.3, 0, 0.8, 0.15)"],["easing-emphasized-decelerate","强调减速","cubic-bezier(0.05, 0.7, 0.1, 1)"],["easing-legacy","旧版标准","cubic-bezier(0.4, 0, 0.2, 1)"],["easing-legacy-accelerate","旧版加速","cubic-bezier(0.4, 0, 1, 1)"],["easing-legacy-decelerate","旧版减速","cubic-bezier(0, 0, 0.2, 1)"]],C0=[{value:"cubic-bezier(0.34, 1.56, 0.64, 1)",label:"弹簧 · 轻"},{value:"cubic-bezier(0.68, -0.6, 0.32, 1.6)",label:"弹簧 · 强"},{value:"cubic-bezier(0.22, 1.61, 0.36, 1)",label:"弹簧 · 脆"}],I0=[...wf.map(([,n,e])=>({value:e,label:n})),...C0],R0=[["duration-short-1",50],["duration-short-2",100],["duration-short-3",150],["duration-short-4",200],["duration-medium-1",250],["duration-medium-2",300],["duration-medium-3",350],["duration-medium-4",400],["duration-long-1",450],["duration-long-2",500],["duration-long-3",550],["duration-long-4",600],["duration-extra-long-1",700],["duration-extra-long-2",800],["duration-extra-long-3",900],["duration-extra-long-4",1e3]],Af=[{value:'-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Roboto, Helvetica, Arial, sans-serif',label:"系统无衬线"},{value:'Georgia, "Songti SC", "SimSun", serif',label:"系统衬线"},{value:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",label:"等宽"},{value:'"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',label:"中文黑体"}],N0=[["display-large","展示大",57,400,1.12,-.25],["headline-medium","标题中",28,400,1.29,0],["title-large","标题大",22,400,1.27,0],["body-large","正文大",16,400,1.5,.5],["label-large","标签大",14,500,1.43,.1]];function P0(){let n=[];for(let[e,t,i]of A0)n.push({name:`--md-sys-color-${e}`,group:"color",label:t,control:"color",default:i});for(let[e,t,i]of w0)n.push({name:`--md-sys-shape-${e}`,group:"shape",label:t,control:"slider",default:`${i}px`,min:0,max:48,step:1,unit:"px"});for(let[e,t,i]of wf)n.push({name:`--md-sys-motion-${e}`,group:"motion",label:t,control:"easing",default:i,options:I0});for(let[e,t]of R0)n.push({name:`--md-sys-motion-${e}`,group:"motion",label:`${t} ms`,control:"slider",default:`${t}ms`,min:50,max:1e3,step:50,unit:"ms"});for(let[e,t,i,s,r,o]of N0)n.push({name:`--md-sys-typescale-${e}-font`,group:"type",label:`${t} 字体`,control:"font",default:Af[0].value,options:Af}),n.push({name:`--md-sys-typescale-${e}-size`,group:"type",label:`${t} 字号`,control:"slider",default:`${i}px`,min:10,max:72,step:1,unit:"px"}),n.push({name:`--md-sys-typescale-${e}-weight`,group:"type",label:`${t} 字重`,control:"select",default:String(s),options:[300,400,500,600,700].map(a=>({value:String(a),label:String(a)}))}),n.push({name:`--md-sys-typescale-${e}-line-height`,group:"type",label:`${t} 行高`,control:"slider",default:r,min:1,max:2.4,step:.05,unit:""}),n.push({name:`--md-sys-typescale-${e}-tracking`,group:"type",label:`${t} 字距`,control:"slider",default:`${o}px`,min:-.5,max:1.5,step:.05,unit:"px"});return n}var Hr=P0(),VA=new Map(Hr.map(n=>[n.name,n]));var Cf=9999,lc=Object.fromEntries(Hr.map(n=>[n.name,n.default])),Ii=[{slot:"button-primary",label:"主要按钮",kind:"button",variant:"primary"},{slot:"button-secondary",label:"次要按钮",kind:"button",variant:"secondary"},{slot:"button-danger",label:"危险按钮",kind:"button",variant:"danger"},{slot:"button-success",label:"成功按钮",kind:"button",variant:"success"},{slot:"button-warning",label:"警告按钮",kind:"button",variant:"warning"},{slot:"card",label:"卡片",kind:"card"},{slot:"modal",label:"弹窗",kind:"modal"},{slot:"page-background",label:"页面背景",kind:"page"},{slot:"alert-info",label:"信息条",kind:"alert",variant:"info"},{slot:"alert-success",label:"成功条",kind:"alert",variant:"success"},{slot:"alert-warning",label:"警告条",kind:"alert",variant:"warning"},{slot:"alert-error",label:"错误条",kind:"alert",variant:"error"}],GA=new Set(Ii.map(n=>n.slot));var D0=["img.scdn.io","cloudflareimg.cdn.sn","edgeoneimg.cdn.sn","esaimg.cdn1.vip","cloudflarecnimg.scdn.io","anycastimg.scdn.io","edgeoneimg.cdn1.vip"],L0=new Set(D0),If=[[/@import/i,"IMPORT_REMOVED"],[/expression\s*\(/i,"EXPRESSION_REMOVED"],[/javascript\s*:/i,"JS_PROTOCOL_REMOVED"],[/vbscript\s*:/i,"VBSCRIPT_REMOVED"],[/behavior\s*:/i,"BEHAVIOR_REMOVED"],[/-moz-binding/i,"BINDING_REMOVED"],[/<\/style/i,"STYLE_TAG_REMOVED"],[/url\s*\(/i,"ESCAPED_URL"]];function Rf(n){return typeof TextEncoder<"u"?new TextEncoder().encode(n).length:unescape(encodeURIComponent(n)).length}function B0(n){return String(n).replace(/\\([0-9a-fA-F]{1,6})\s?/g,(e,t)=>{let i=parseInt(t,16);return i>0&&i<=1114111?String.fromCodePoint(i):""}).replace(/\\(.)/g,"$1")}function O0(n){if(typeof n!="string")return!1;let e=n.trim();if(!e)return!1;if(e.startsWith("#"))return!0;let t;try{t=new URL(e)}catch{return!1}return t.protocol!=="https:"?!1:L0.has(t.hostname.toLowerCase())}function U0(n){try{return new URL(n.trim()).hostname||n.trim().slice(0,60)}catch{return n.trim().slice(0,60)||"相对路径"}}function F0(n,e){let t=n.replace(/\/\*[\s\S]*?\*\//g,"");return t=t.replace(/@import\s+(?:url\()?[^;]*;?/gi,i=>(e.push("IMPORT_REMOVED"),"")),t=t.replace(/@charset\s+[^;]*;?/gi,""),t=t.replace(/@font-face\s*\{[^}]*\}/gi,()=>(e.push("FONT_FACE_REMOVED"),"")),t=t.replace(/expression\s*\([^)]*\)/gi,()=>(e.push("EXPRESSION_REMOVED"),"none")),t=t.replace(/(javascript|vbscript)\s*:/gi,()=>(e.push("JS_PROTOCOL_REMOVED"),"blocked:")),t=t.replace(/(?:behavior|-moz-binding|-o-link(?:-source)?)\s*:[^;}]*;?/gi,()=>(e.push("BEHAVIOR_REMOVED"),"")),/<\/style/i.test(t)&&(e.push("STYLE_TAG_REMOVED"),t=t.replace(/<\/style/gi,"")),t=t.replace(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/gi,(i,s,r,o)=>{let a=(s??r??o??"").trim();return O0(a)?`url("${a}")`:(e.push(`URL_BLOCKED:${U0(a)}`),"none")}),t}function sn(n,e={}){let t=[],i=e.maxBytes||51200,s=e.maxLength||51200;if(typeof n!="string")return{css:"",issues:["INVALID_INPUT"],blocked:!1,bytes:0};let r=Rf(n);if(r>i||n.length>s)return{css:"",issues:["TOO_LONG"],blocked:!0,bytes:r};let o=n.replace(/\r\n?/g,`
`),a=B0(o),l=If.some(([d])=>d.test(a)),c=If.some(([d])=>d.test(o));if(l&&!c)return{css:"",issues:["OBFUSCATED_INPUT"],blocked:!0,bytes:r};o=F0(o,t);let u=[...new Set(t)];return{css:o.trim(),issues:u,blocked:!1,bytes:Rf(o)}}var uc=["#easyui-stage-container","#easyui-toast-container",".easyui-modal-mask","#easyui-dashboard-preview"],k0=new Set(["@media","@supports","@container","@layer"]),z0=new Set(["@keyframes","@-webkit-keyframes","@font-face","@property","@counter-style","@page","@font-feature-values","@scope","@starting-style","@view-transition"]);function cc(n,e){let t=n[e];for(e++;e<n.length;){if(n[e]==="\\"){e+=2;continue}if(n[e]===t)return e+1;e++}return e}function Nf(n,e){let t=0,i=e;for(;i<n.length;i++){let s=n[i];if(s==='"'||s==="'"){i=cc(n,i)-1;continue}if(s==="{")t++;else if(s==="}"&&(t--,t===0))return{block:n.slice(e+1,i),end:i+1}}return{block:n.slice(e+1),end:n.length}}function V0(n){let e=[],t=0;for(;t<n.length;){for(;t<n.length&&/\s/.test(n[t]);)t++;if(t>=n.length)break;if(n[t]==="@"){let l=t;for(;l<n.length&&n[l]!=="{"&&n[l]!==";";){if(n[l]==='"'||n[l]==="'"){l=cc(n,l);continue}l++}if(l>=n.length){e.push({type:"raw",text:n.slice(t).trim()});break}if(n[l]===";"){e.push({type:"at-statement",text:n.slice(t,l+1).trim()}),t=l+1;continue}let c=n.slice(t,l).trim(),{block:u,end:d}=Nf(n,l);e.push({type:"at-block",header:c,block:u}),t=d;continue}let i=t,s=0;for(;i<n.length;){let l=n[i];if(l==='"'||l==="'"){i=cc(n,i);continue}if(l==="(")s++;else if(l===")")s=Math.max(0,s-1);else{if(l==="{"&&s===0)break;if(l==="}"&&s===0)break}i++}if(i>=n.length||n[i]==="}"){if(e.push({type:"raw",text:n.slice(t,i).trim()}),i<n.length)i++;else break;t=i;continue}let r=n.slice(t,i).trim(),{block:o,end:a}=Nf(n,i);e.push({type:"style",selector:r,block:o}),t=a}return e}function G0(n){let e=[],t="",i=0,s=0,r=null;for(let o=0;o<n.length;o++){let a=n[o];if(r){if(t+=a,a==="\\"){t+=n[++o]||"";continue}a===r&&(r=null);continue}if(a==='"'||a==="'"){r=a,t+=a;continue}if(a==="("&&i++,a===")"&&(i=Math.max(0,i-1)),a==="["&&s++,a==="]"&&(s=Math.max(0,s-1)),a===","&&i===0&&s===0){e.push(t.trim()),t="";continue}t+=a}return t.trim()&&e.push(t.trim()),e}function H0(n,e){let t=n.trim();if(!t||t.includes("&")||/^(?::root|html|body)(?![\w-])/i.test(t))return null;let i=t.replace(/^[>+~]\s*/,"");return[`:where(${e}) ${i}`,`:where(${e}):is(${i})`].join(", ")}function Pf(n,e){let t=[];for(let i of V0(n))if(i.type==="style"){let s=G0(i.selector).map(r=>H0(r,e)).filter(Boolean);s.length&&t.push(`${s.join(", ")} {${i.block}}`)}else if(i.type==="at-block"){let s=i.header.split(/\s+/)[0].toLowerCase();k0.has(s)?t.push(`${i.header} {${Pf(i.block,e)}}`):z0.has(s)?t.push(`${i.header} {${i.block}}`):t.push(`${i.header} {${i.block}}`)}else(i.type==="at-statement"||i.type==="raw")&&t.push(i.text);return t.join(`
`)}function Wr(n,e=uc){if(typeof n!="string"||!n.trim())return"";let t=Array.isArray(e)?e.join(", "):e;return Pf(n,t)}var Df={$schema:"https://json-schema.org/draft/2020-12/schema",$id:"https://easyui.local/schema/theme.schema.json",title:"EasyUI Theme",type:"object",additionalProperties:!1,required:["themeId","name","authorId","tokenOverrides","imageMap","version","createdAt","updatedAt","visibility"],properties:{themeId:{type:"string",pattern:"^[A-Za-z0-9_-]{3,64}$",description:"主题唯一 ID，同时用于 easyui_theme_<themeId> 与 easyui_draft_<themeId>"},name:{type:"string",minLength:1,maxLength:64},authorId:{type:"string",minLength:1,maxLength:128},tokenOverrides:{type:"object",maxProperties:400,propertyNames:{pattern:"^--md-sys-[a-z0-9-]+$"},additionalProperties:{type:"string",maxLength:200,pattern:"^[^;{}<>]+$"}},imageMap:{type:"object",maxProperties:50,propertyNames:{enum:["button-primary","button-secondary","button-danger","button-success","button-warning","card","modal","page-background","alert-info","alert-success","alert-warning","alert-error"]},additionalProperties:{type:"string",maxLength:2048,pattern:"^https://[^\\s]+$"}},cssText:{type:"string",maxLength:51200},version:{type:"string",pattern:"^\\d+\\.\\d+\\.\\d+$"},createdAt:{type:"string",pattern:"^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$"},updatedAt:{type:"string",pattern:"^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$"},visibility:{type:"string",enum:["public","private"]}},$defs:{themeIndexEntry:{type:"object",additionalProperties:!1,required:["themeId","name","authorId","updatedAt"],properties:{themeId:{type:"string",pattern:"^[A-Za-z0-9_-]{3,64}$"},name:{type:"string",minLength:1,maxLength:64},authorId:{type:"string",minLength:1,maxLength:128},tokenOverridesSummary:{type:"object",maxProperties:8,additionalProperties:{type:"string",maxLength:200}},imageMapSummary:{type:"object",maxProperties:4,additionalProperties:{type:"string",maxLength:2048}},updatedAt:{type:"string",pattern:"^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$"}}}}};function X0(n){return Array.isArray(n)?"array":n===null?"null":typeof n}function q0(n,e){let t=X0(n);return e==="integer"?t==="number"&&Number.isInteger(n):e==="number"?t==="number"&&Number.isFinite(n):t===e}function Dt(n,e,t,i){n.push({path:e||"/",rule:t,message:i})}function Y0(n,e,t,i){e.enum&&!e.enum.includes(n)&&Dt(i,t,"propertyNames.enum",`不允许的属性名：${n}`),e.pattern&&!new RegExp(e.pattern).test(n)&&Dt(i,t,"propertyNames.pattern",`属性名格式不合法：${n}`)}function Xr(n,e,t="",i=[]){if(!e||typeof e!="object")return i;if(e.enum&&!e.enum.includes(n))return Dt(i,t,"enum",`取值必须是：${e.enum.join(" / ")}`),i;if(e.const!==void 0&&n!==e.const)return Dt(i,t,"const",`取值必须是 ${e.const}`),i;if(e.type&&!q0(n,e.type))return Dt(i,t,"type",`类型应为 ${e.type}`),i;if(typeof n=="string"&&(e.minLength!==void 0&&n.length<e.minLength&&Dt(i,t,"minLength",`至少 ${e.minLength} 个字符`),e.maxLength!==void 0&&n.length>e.maxLength&&Dt(i,t,"maxLength",`最多 ${e.maxLength} 个字符`),e.pattern&&!new RegExp(e.pattern).test(n)&&Dt(i,t,"pattern",`格式不匹配：${e.pattern}`)),typeof n=="number"&&(e.minimum!==void 0&&n<e.minimum&&Dt(i,t,"minimum",`不能小于 ${e.minimum}`),e.maximum!==void 0&&n>e.maximum&&Dt(i,t,"maximum",`不能大于 ${e.maximum}`)),Array.isArray(n)&&(e.maxItems!==void 0&&n.length>e.maxItems&&Dt(i,t,"maxItems",`最多 ${e.maxItems} 项`),e.minItems!==void 0&&n.length<e.minItems&&Dt(i,t,"minItems",`至少 ${e.minItems} 项`),e.items&&n.forEach((s,r)=>Xr(s,e.items,`${t}/${r}`,i))),n&&typeof n=="object"&&!Array.isArray(n)){let s=Object.keys(n);e.maxProperties!==void 0&&s.length>e.maxProperties&&Dt(i,t,"maxProperties",`最多 ${e.maxProperties} 个字段`),e.minProperties!==void 0&&s.length<e.minProperties&&Dt(i,t,"minProperties",`至少 ${e.minProperties} 个字段`);for(let o of e.required||[])o in n||Dt(i,`${t}/${o}`,"required",`缺少必填字段 ${o}`);let r=e.properties||{};if(e.propertyNames)for(let o of s)Y0(o,e.propertyNames,`${t}/${o}`,i);for(let o of s){let a=`${t}/${o}`;r[o]?Xr(n[o],r[o],a,i):e.additionalProperties===!1?Dt(i,a,"additionalProperties",`不允许的字段 ${o}`):e.additionalProperties&&typeof e.additionalProperties=="object"&&Xr(n[o],e.additionalProperties,a,i)}}return i}function ri(n){let e=Xr(n,Df,"");return{valid:e.length===0,errors:e}}var $0=["themeId","name","authorId","version","createdAt","updatedAt","visibility"];function Fn(){return new Date().toISOString()}function Z0(n){return typeof n=="string"?n.trim():n}function Lf(n){if(!Ps(n))return n;let e={};for(let[t,i]of Object.entries(n))e[t]=typeof i=="string"?i.trim():i;return e}function rn(n){if(!Ps(n))return n;let e={};for(let t of $0)t in n&&(e[t]=Z0(n[t]));return"tokenOverrides"in n&&(e.tokenOverrides=Lf(n.tokenOverrides)),"imageMap"in n&&(e.imageMap=Lf(n.imageMap)),"cssText"in n&&(e.cssText=typeof n.cssText=="string"?n.cssText:""),"cssText"in e||(e.cssText=""),e}function Bf({authorId:n="local",name:e="未命名主题",themeId:t=kr("theme"),tokenOverrides:i={},imageMap:s={},cssText:r="",visibility:o="private"}={}){let a=Fn();return rn({themeId:t,name:e,authorId:n,tokenOverrides:i,imageMap:s,cssText:r,version:"1.0.0",createdAt:a,updatedAt:a,visibility:o})}function J0(n,e=8){if(!Ps(n))return{};let t=Object.keys(n).slice(0,e),i={};for(let s of t)i[s]=n[s];return i}function j0(n,e=4){if(!Ps(n))return{};let t=Object.keys(n).slice(0,e),i={};for(let s of t)i[s]=n[s];return i}function Of(n){return{themeId:n.themeId,name:n.name,authorId:n.authorId,tokenOverridesSummary:J0(n.tokenOverrides),imageMapSummary:j0(n.imageMap),updatedAt:n.updatedAt}}var hc="easyui_applied_",dc="easyui_applied_index",qr="easyui_active_theme";function Xi(n){if(n)return n;try{return typeof localStorage<"u"?localStorage:null}catch{return null}}function Ls(n,e){console.warn(`[EasyUI] ${n}`,e||"")}function fc(n){let e=Xi(n);if(!e)return[];try{let t=e.getItem(dc),i=t?JSON.parse(t):[];return Array.isArray(i)?i.filter(s=>s&&typeof s.themeId=="string"):[]}catch(t){return Ls("读取已应用主题索引失败",t),[]}}function Yr(n,e){let t=Xi(e);if(!t||!n||!n.themeId)return!1;try{t.setItem(hc+n.themeId,JSON.stringify(n));let i=fc(t),s={themeId:n.themeId,name:n.name,authorId:n.authorId,updatedAt:n.updatedAt,visibility:n.visibility},r=i.findIndex(o=>o.themeId===n.themeId);return r>=0?i[r]=s:i.unshift(s),t.setItem(dc,JSON.stringify(i.slice(0,200))),!0}catch(i){return Ls("保存已应用主题失败",i),!1}}function pc(n,e){let t=Xi(e);if(!t||!n)return null;try{let i=t.getItem(hc+n);return i?JSON.parse(i):null}catch(i){return Ls("读取已应用主题失败",i),null}}function Uf(n){return fc(n).map(e=>pc(e.themeId,n)).filter(Boolean)}function Ff(n,e){let t=Xi(e);if(!t||!n)return!1;try{t.removeItem(hc+n);let i=fc(t).filter(s=>s.themeId!==n);return t.setItem(dc,JSON.stringify(i)),Bs(t)===n&&t.removeItem(qr),!0}catch(i){return Ls("删除已应用主题失败",i),!1}}function Bs(n){let e=Xi(n);if(!e)return null;try{return e.getItem(qr)||null}catch{return null}}function Os(n,e){let t=Xi(e);if(!t)return!1;try{return n?t.setItem(qr,n):t.removeItem(qr),!0}catch(i){return Ls("写入当前主题失败",i),!1}}function kf(n){let e=Bs(n);return e?pc(e,n):null}var Gf="easyui-theme-style",K0=[...uc,"#easyui-dashboard-preview"],Q0=/[;{}<>]|url\s*\(|expression\s*\(|@import|javascript\s*:/i;function e_(n){if(typeof n!="string")return!1;let e=n.trim();return!e||e.length>200?!1:!Q0.test(e)}function t_(n){if(typeof n!="string")return null;let e=n.trim(),t=/^#([0-9a-f]{3})$/i.exec(e);if(t){let[i,s,r]=t[1].split("").map(o=>parseInt(o+o,16));return{r:i,g:s,b:r}}return t=/^#([0-9a-f]{6})(?:[0-9a-f]{2})?$/i.exec(e),t?{r:parseInt(t[1].slice(0,2),16),g:parseInt(t[1].slice(2,4),16),b:parseInt(t[1].slice(4,6),16)}:(t=/^rgba?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})/i.exec(e),t?{r:Number(t[1]),g:Number(t[2]),b:Number(t[3])}:null)}function zf(n,e){if(n==null||n==="")return e;let t=/^(-?\d+(?:\.\d+)?)(?:px)?$/.exec(String(n).trim());if(!t)return e;let i=Number(t[1]);return Number.isFinite(i)?i>=Cf?"9999px":`${i}px`:e}function gc(n){return`url(${JSON.stringify(String(n))})`}function n_(n){let e=new Set;n._stageContainer&&e.add(n._stageContainer),n._pagesContainer&&e.add(n._pagesContainer);let t=n._doc.getElementById("easyui-toast-container");return t&&e.add(t),n._doc.querySelectorAll(".easyui-modal-mask").forEach(i=>e.add(i)),[...e]}function i_(n){let e=n.tokenOverrides||{},t={};for(let[l,c]of Object.entries(e))/^--md-sys-[a-z0-9-]+$/.test(l)&&e_(c)&&(t[l]=String(c).trim());let i={},s=t["--md-sys-color-primary"],r=t_(s);s&&(i["--easyui-primary"]=s);let o=t["--md-sys-color-primary-container"]||t["--md-sys-color-primary-fixed-dim"];o&&(i["--easyui-primary-2"]=o),r&&(i["--easyui-primary-rgb"]=`${r.r}, ${r.g}, ${r.b}`),t["--md-sys-shape-corner-large"]!==void 0&&(i["--easyui-radius"]=zf(t["--md-sys-shape-corner-large"],"18px")),t["--md-sys-shape-corner-medium"]!==void 0&&(i["--easyui-radius-sm"]=zf(t["--md-sys-shape-corner-medium"],"12px"));let a=t["--md-sys-typescale-body-large-font"];return a&&(i["--easyui-font"]=a),{mdVars:t,easyVars:i}}function mc(n,e){if(!(!n||!n.style))for(let[t,i]of Object.entries(e))try{n.style.setProperty(t,i)}catch(s){console.warn("[EasyUI] 令牌无效:",t,i,s)}}function Vf(n,e){if(!(!n||!n.style))for(let t of e)n.style.removeProperty(t)}function Hf(n,e){let t=e.imageMap||{};if(!n||!n.element)return null;if(n.type==="button"){let i=Array.from(n.element.classList).find(r=>r.startsWith("easyui-btn-")),s=i?i.slice(11):"primary";return t[`button-${s}`]||null}if(n.type==="card")return t.card||null;if(n.type==="alert"){let i=Array.from(n.element.classList).find(o=>o.startsWith("easyui-alert-")),s=i?i.slice(13):"info",r=s==="danger"?"alert-error":`alert-${s}`;return t[r]||null}return null}function s_(n){return n==="button"?"linear-gradient(rgba(15,23,42,0.18), rgba(15,23,42,0.18))":n==="card"?"linear-gradient(rgba(255,255,255,0.84), rgba(255,255,255,0.84))":n==="alert"?"linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88))":n==="modal"?"linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9))":null}function $r(n,e,t){if(!n||!e)return;n._easyuiThemeInline||(n._easyuiThemeInline={backgroundImage:n.style.backgroundImage,backgroundSize:n.style.backgroundSize,backgroundPosition:n.style.backgroundPosition,backgroundRepeat:n.style.backgroundRepeat});let i=s_(t);n.style.backgroundImage=i?`${i}, ${gc(e)}`:gc(e),n.style.backgroundSize="cover",n.style.backgroundPosition="center",n.style.backgroundRepeat="no-repeat",n.classList.add("easyui-themed-image")}function Us(n){if(!n||!n._easyuiThemeInline)return;let e=n._easyuiThemeInline;n.style.backgroundImage=e.backgroundImage||"",n.style.backgroundSize=e.backgroundSize||"",n.style.backgroundPosition=e.backgroundPosition||"",n.style.backgroundRepeat=e.backgroundRepeat||"",delete n._easyuiThemeInline,n.classList.remove("easyui-themed-image")}function r_(n,e){let t=e.imageMap||{},i=!!t["page-background"];n._pagesContainer&&(i?(n._pagesContainer._easyuiThemeInline||(n._pagesContainer._easyuiThemeInline={backgroundImage:n._pagesContainer.style.backgroundImage}),n._pagesContainer.style.backgroundImage=gc(t["page-background"]),n._pagesContainer.style.backgroundSize="cover",n._pagesContainer.style.backgroundPosition="center"):(n._pagesContainer._easyuiThemeInline&&Us(n._pagesContainer),n._pagesContainer.style.backgroundImage=""));for(let[s,r]of n._components){let o=Hf(r,e);o?$r(r.element,o,r.type):Us(r.element)}t.modal&&n._doc.querySelectorAll(".easyui-modal-container").forEach(s=>$r(s,t.modal,"modal"))}function Wf(n,e){if(!n._theme)return;let t=n._components.get(e);if(!t)return;let i=Hf(t,n._theme);i&&$r(t.element,i,t.type)}function o_(n){let e=n._win;!e.MutationObserver||n._themeModalObserver||(n._themeModalObserver=new e.MutationObserver(()=>{!n._theme||!n._theme.imageMap||!n._theme.imageMap.modal||n._doc.querySelectorAll(".easyui-modal-container").forEach(t=>$r(t,n._theme.imageMap.modal,"modal"))}),n._themeModalObserver.observe(n._doc.body,{childList:!0}))}function a_(n){if(n._themeModalObserver){try{n._themeModalObserver.disconnect()}catch{}n._themeModalObserver=null}}function Fs(n){let e=n._doc.getElementById(Gf);e&&e.remove();let t=Array.isArray(n._themeVarTargets)?n._themeVarTargets:[];for(let i of t)Vf(i,[...n._themeVarNames||[],...n._themeEasyVars||[]]);Vf(n._doc.documentElement,n._themeEasyVars||[]);for(let i of n._doc.querySelectorAll("[data-easyui-theme-scope]"))i.removeAttribute("data-easyui-theme-scope");for(let i of n._components.values())Us(i.element);n._doc.querySelectorAll(".easyui-modal-container").forEach(i=>Us(i)),n._pagesContainer&&(n._pagesContainer._easyuiThemeInline?Us(n._pagesContainer):n._pagesContainer.style.backgroundImage=""),a_(n),n._theme=null,n._themeVarTargets=[],n._themeVarNames=[],n._themeEasyVars=[]}function Zr(n,e,t={}){let i=rn(e),{valid:s,errors:r}=ri(i);if(!s)return{applied:!1,errors:r};let o=sn(i.cssText||"");if(o.blocked)return{applied:!1,errors:[{path:"/cssText",rule:"sanitize",message:o.issues.join(", ")||"CSS 未通过安全净化"}]};let a=o.issues.slice();Fs(n);let{mdVars:l,easyVars:c}=i_({...i,cssText:o.css}),u=n_(n);for(let d of u)mc(d,l),mc(d,c),d.setAttribute("data-easyui-theme-scope",i.themeId);if(mc(n._doc.documentElement,c),o.css.trim()){let d=n._doc.createElement("style");d.id=Gf,d.textContent=Wr(o.css,t.styles||K0),n._doc.head.appendChild(d)}return n._theme={...i,cssText:o.css},n._themeVarTargets=u,n._themeVarNames=Object.keys(l),n._themeEasyVars=Object.keys(c),r_(n,n._theme),o_(n),t.persist!==!1&&(Yr(n._theme,t.storage),Os(i.themeId,t.storage)),{applied:!0,theme:n._theme,warnings:a}}function Jr(n,e={}){let t=kf(e.storage);return t?Zr(n,t,{...e,persist:!1}):{applied:!1,errors:[{path:"/",rule:"persist",message:"没有已保存的主题"}]}}function Xf(n){return n._theme?n._theme.themeId:""}function qf(n){n.applyTheme=e=>Zr(n,e),n.loadPersistedTheme=()=>Jr(n,{persist:!1}),n.applyThemeJSON=e=>{let t=String(e&&e.JSON||"").trim();if(!t)return!1;let i;try{i=JSON.parse(t)}catch(r){return console.warn("[EasyUI] 主题 JSON 解析失败：",r.message),!1}let s=Zr(n,i);return s.applied?!0:(console.warn("[EasyUI] 主题校验失败：",s.errors.map(r=>`${r.path} ${r.message}`).join("; ")),!1)},n.clearTheme=()=>(Fs(n),!0),n.getThemeId=()=>Xf(n),n._afterComponentCreate=e=>{n._theme&&Wf(n,e)},n._onStageReady=()=>{n._layer3d&&n._layer3d.attachCanvas(),n._pendingThemeRestore&&(n._pendingThemeRestore=!1,n.loadPersistedTheme())}}var $f="easyui-dashboard",l_="easyui-extension",Jt={READY:"ready",INIT:"init",APPLY_THEME:"apply-theme",THEME_APPLIED:"theme-applied",SAVE_APPLIED:"save-applied",CLOSE:"close",NOTIFY:"notify",DESTROY:"destroy",PROBE_CLOUD:"probe-cloud",CLOUD_RESULT:"cloud-result",REQUEST_CONTEXT:"request-context"},Yf=0;function c_(){return Yf+=1,`req_${Date.now().toString(36)}_${Yf}`}function Zf(n,e,t=null,i=null){return{source:n,type:e,payload:t,requestId:i||c_()}}function u_(n,e){return!!n&&typeof n=="object"&&n.source===e&&typeof n.type=="string"}function Jf(n){return u_(n,l_)}var jf="easyui_cloud_index__meta",Kf="easyui_cloud_index__shard_",Qf="easyui_probe__key";function h_(...n){console.warn("[EasyUI]",...n)}function jr(n){if(!n||typeof n!="object")return null;let e=typeof n.setValueToDB=="function"?n.setValueToDB:n.setValue,t=typeof n.getValueFromDB=="function"?n.getValueFromDB:n.getValue;if(typeof e!="function"||typeof t!="function")return null;let i=typeof n.deleteValueFromDB=="function"?n.deleteValueFromDB:typeof n.deleteValue=="function"?n.deleteValue:null;return{ccw:n,setter:e,getter:t,deleter:i}}function qi(n=globalThis){try{if(n&&n.CCWData)return n.CCWData}catch{}try{let e=n&&n.parent;if(e&&e!==n&&e.CCWData)return e.CCWData}catch{}return null}function ep(n=qi()){return jr(n)!==null}function ks(n,e,t,i){return new Promise((s,r)=>{let o=!1,a=setTimeout(()=>{o||(o=!0,r(new Error("CCWData 调用超时")))},i),l=d=>{o||(o=!0,clearTimeout(a),s(d))},c=d=>{o||(o=!0,clearTimeout(a),r(d))},u=n.length>t.length;try{let d;u?d=n.call(e,...t,(h,f)=>{f?c(f instanceof Error?f:new Error(String(f))):l(h)}):d=n.call(e,...t),d&&typeof d.then=="function"?d.then(l,c):u||l(d)}catch(d){c(d)}})}function oi(n){if(typeof n!="string")return n;let e=n.trim();if(!e)return"";if(!/^[[{]/.test(e))return n;try{return JSON.parse(e)}catch{return n}}function d_(n={}){let e=Object.prototype.hasOwnProperty.call(n,"ccw"),t=n.ccw,i=()=>e?t:qi(),s=n.warn||h_,r=Math.max(1e3,Number(n.chunkSize)||8e3),o=Math.max(500,Number(n.timeoutMs)||5e3),a=n.maxShards||50,l=n.maxKeys||5e3,c=new Set,u=jr(i()),d=()=>(u||(u=jr(i())),!!u),h=(x,R)=>{c.has(x)||(c.add(x),s(x,R||""))},f=()=>(h("CCWData 不可用，集市功能降级为“仅本地主题”。"),null);async function p(x,R){if(!d())return f(),null;try{return await ks(x,u.ccw,R,o)}catch(w){return h("CCWData 调用失败，已降级为本地主题。",w),null}}async function y(x){let R=await p(u.getter,[`${Kf}${x}`]);if(!R)return[];let w=oi(R);return Array.isArray(w)?w.filter(I=>typeof I=="string"):[]}async function m(){let x=await p(u.getter,[jf]);if(!x)return{shards:0};let R=oi(x);return R&&typeof R=="object"&&Number.isFinite(R.shards)?{shards:Math.min(a,Math.max(0,R.shards))}:{shards:0}}async function g(x){let R=[];for(let w=0;w<x.length;w+=100)R.push(x.slice(w,w+100));R.length||R.push([]);for(let w=0;w<R.length;w++)await p(u.setter,[`${Kf}${w}`,JSON.stringify(R[w])]);await p(u.setter,[jf,JSON.stringify({shards:R.length})])}async function _(x){let R=await v.getAllCloudKeys("");return R.includes(x)||(R.push(x),await g(R.slice(-l))),!0}async function b(x){let R=await v.getAllCloudKeys(""),w=R.filter(I=>I!==x);return w.length!==R.length&&await g(w),!0}async function M(x,R){if(typeof R!="string"&&(R=String(R)),!d())return f(),!1;let w=await p(u.getter,[`${x}__meta`]);if(R.length<=r)return await p(u.setter,[x,R])===null&&!u?!1:(w&&await v._clearParts(x,w),await _(x),!0);let I=[];for(let L=0;L<R.length;L+=r)I.push(R.slice(L,L+r));for(let L=0;L<I.length;L++)if(await p(u.setter,[`${x}__part_${L}`,I[L]])===null)return!1;if(await p(u.setter,[`${x}__meta`,JSON.stringify({chunks:I.length,bytes:R.length})]),w){let L=oi(w);for(let D=I.length;D<(L.chunks||0);D++)await p(u.deleter,[`${x}__part_${D}`])}return await _(x),!0}async function S(x){if(!d())return f(),null;let R=await p(u.getter,[`${x}__meta`]);if(R){let I=oi(R);if(I&&Number.isFinite(I.chunks)&&I.chunks>0){let L="";for(let D=0;D<I.chunks;D++){let N=await p(u.getter,[`${x}__part_${D}`]);if(N===null)return null;L+=typeof N=="string"?N:String(N)}return L}}let w=await p(u.getter,[x]);return w==null?null:typeof w=="string"?w:String(w)}async function T(x){if(!d())return f(),!1;let R=await p(u.getter,[`${x}__meta`]);if(R){let w=oi(R);if(w&&Number.isFinite(w.chunks))for(let I=0;I<w.chunks;I++)await p(u.deleter||u.setter,[`${x}__part_${I}`]);await p(u.deleter||u.setter,[`${x}__meta`])}return u.deleter?await p(u.deleter,[x]):await p(u.setter,[x,""]),await b(x),!0}let v={isAvailable:()=>d(),refresh:()=>(u=jr(i()),!!u),async _clearParts(x,R){let w=oi(R);if(!(!w||!Number.isFinite(w.chunks))){for(let I=0;I<w.chunks;I++)await p(u.deleter||u.setter,[`${x}__part_${I}`]);await p(u.deleter||u.setter,[`${x}__meta`])}},async setCloudData(x,R){if(!d())return f(),!1;if(typeof x!="string"||!x)return!1;let w=typeof R=="string"?R:JSON.stringify(R);return M(x,w)},async getCloudData(x){if(!d())return f(),null;if(typeof x!="string"||!x)return null;let R=await S(x);return R===null?null:oi(R)},async deleteCloudData(x){return d()?typeof x!="string"||!x?!1:T(x):(f(),!1)},async getAllCloudKeys(x=""){if(!d())return f(),[];let R=await m();if(!R.shards)return[];let w=[];for(let I=0;I<R.shards&&I<a;I++){let L=await y(I);for(let D of L){if(w.length>=l)return w;w.includes(D)||w.push(D)}}return x?w.filter(I=>I.startsWith(x)):w},async probe(){if(!u)return{available:!1,reason:"window.CCWData 不存在或缺少 setValueToDB/getValueFromDB"};try{let x=await ks(u.getter,u.ccw,[Qf],o);return{available:!0,sample:x===void 0?null:x}}catch(x){return{available:!1,reason:x instanceof Error?x.message:String(x)}}},async probeWrite(){if(!u)return{available:!1,reason:"CCWData 不可用"};let x=`${Qf}_${Date.now().toString(36)}`,R=`ok-${Math.random().toString(36).slice(2,8)}`;try{await ks(u.setter,u.ccw,[x,R],o);let w=await ks(u.getter,u.ccw,[x],o);return u.deleter&&await ks(u.deleter,u.ccw,[x],o).catch(()=>{}),{available:String(w)===R,read:w===void 0?null:String(w)}}catch(w){return{available:!1,reason:w instanceof Error?w.message:String(w)}}},_parseMaybeJson:oi};return v}var Mn=d_();function f_(n=globalThis){try{let e=n.location&&n.location.hostname?n.location.hostname:"";return/(^|\.)ccw\.site$/i.test(e)||/getgandi|gandi\.ide/i.test(e)}catch{return!1}}function tp(n=qi()){let e=ep(n);return{available:e,environment:f_(),reason:e?"":"window.CCWData 不存在或缺少 setValueToDB/getValueFromDB"}}var _c="easyui_draft_",zs="easyui_draft_index";function yc(...n){console.warn("[EasyUI]",...n)}function Vs(n){let e=n;if(e===void 0)try{e=typeof localStorage<"u"?localStorage:null}catch{e=null}let t=!!e;return{available:t,get(i){if(!t)return null;try{return e.getItem(i)}catch(s){return yc("localStorage 读取失败",i,s),null}},set(i,s){if(!t)return!1;try{return e.setItem(i,s),!0}catch(r){return yc("localStorage 写入失败（可能已满）",i,r),!1}},remove(i){if(!t)return!1;try{return e.removeItem(i),!0}catch{return!1}},getJSON(i,s=null){let r=this.get(i);if(!r)return s;try{return JSON.parse(r)}catch{return s}},setJSON(i,s){return this.set(i,JSON.stringify(s))},keys(i=""){if(!t)return[];let s=[];try{for(let r=0;r<e.length;r++){let o=e.key(r);o&&o.startsWith(i)&&s.push(o)}}catch(r){yc("localStorage 枚举失败",r)}return s},raw:e}}var Gs=Vs();function Sn(n,e=Gs){if(!n||!n.themeId||!e.setJSON(_c+n.themeId,n))return!1;let i=e.getJSON(zs,[]),s={themeId:n.themeId,name:n.name,updatedAt:n.updatedAt},r=Array.isArray(i)?i.findIndex(a=>a.themeId===n.themeId):-1,o=Array.isArray(i)?i.slice():[];return r>=0?o[r]=s:o.unshift(s),e.setJSON(zs,o),!0}function Hs(n,e=Gs){return n?e.getJSON(_c+n,null):null}function vc(n=Gs){let e=n.getJSON(zs,[]);return Array.isArray(e)?e.map(t=>Hs(t.themeId,n)).filter(Boolean):[]}function xc(n,e=Gs){if(!n)return!1;e.remove(_c+n);let t=e.getJSON(zs,[]);return Array.isArray(t)&&e.setJSON(zs,t.filter(i=>i.themeId!==n)),!0}function np(n,e,t=Gs){let i=Hs(n,t);if(!i)return null;let s={...i,name:e,updatedAt:new Date().toISOString()};return Sn(s,t),s}var ip="easyui_auth_users",bc="easyui_auth_session",p_=7;function m_(n){let e=new TextEncoder().encode(n),t="";return e.forEach(i=>{t+=String.fromCharCode(i)}),btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function g_(n){let e=n.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((n.length+3)%4),t=atob(e),i=Uint8Array.from(t,s=>s.charCodeAt(0));return new TextDecoder().decode(i)}async function Kr(n){if(globalThis.crypto&&globalThis.crypto.subtle){let i=await globalThis.crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(i)].map(s=>s.toString(16).padStart(2,"0")).join("")}let e=2166136261,t=16777619;for(let i=0;i<n.length;i++)e=Math.imul(e^n.charCodeAt(i),16777619)>>>0,t=Math.imul(t+n.charCodeAt(i),2246822507)>>>0;return`fallback${e.toString(16).padStart(8,"0")}${t.toString(16).padStart(8,"0")}`}function Mc(n){return String(n||"").trim().toLowerCase()}function y_(n,e){let t=Mc(n);return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t)?String(e||"").length<6?"密码至少 6 位":"":"请输入有效的邮箱地址"}function sp({store:n=Vs()}={}){let e=()=>{let u=n.getJSON(ip,[]);return Array.isArray(u)?u:[]},t=u=>n.setJSON(ip,u);async function i(u){let d={sub:u.id,email:u.email,name:u.name,guest:!!u.guest,exp:Date.now()+p_*24*3600*1e3},h=m_(JSON.stringify(d)),f=await Kr(`${h}.${u.hash||"guest"}`);return{token:`easyui.mock.${h}.${f}`,payload:d}}async function s(u){let d=await i(u);return n.setJSON(bc,d),d}async function r({email:u,password:d,name:h}){let f=y_(u,d);if(f)throw new Error(f);let p=Mc(u),y=e();if(y.some(_=>_.email===p))throw new Error("该邮箱已注册，请直接登录");let m=Math.random().toString(36).slice(2,12),g={id:`user_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`,email:p,name:String(h||"").trim()||p.split("@")[0]||"创作者",salt:m,hash:await Kr(`${m}:${d}`),createdAt:new Date().toISOString()};return y.push(g),t(y),await s(g),{id:g.id,email:g.email,name:g.name}}async function o({email:u,password:d}){let h=Mc(u),f=e().find(y=>y.email===h);if(!f)throw new Error("邮箱或密码不正确");if(await Kr(`${f.salt}:${d}`)!==f.hash)throw new Error("邮箱或密码不正确");return await s(f),{id:f.id,email:f.email,name:f.name}}async function a(){let u={id:"guest",email:"guest@local",name:"访客",guest:!0,hash:"guest"};return await s(u),{id:u.id,email:u.email,name:u.name,guest:!0}}function l(){n.remove(bc)}async function c(){let u=n.getJSON(bc,null);if(!u||!u.token)return null;let d=String(u.token).split(".");if(d.length!==4)return null;try{let h=JSON.parse(g_(d[2]));if(!h.exp||h.exp<Date.now())return l(),null;if(h.guest)return{id:"guest",email:h.email,name:h.name,guest:!0};let f=e().find(y=>y.id===h.sub);return f?await Kr(`${d[2]}.${f.hash}`)!==d[3]?(l(),null):{id:f.id,email:f.email,name:f.name}:null}catch{return null}}return{register:r,login:o,logout:l,getUser:c,loginAsGuest:a,readUsers:e}}function rp({win:n=window}={}){let e=new Map,t=new Map,i=n.parent===n;function s(){try{let u=n.location&&n.location.origin;return u&&u!=="null"?u:"*"}catch{return"*"}}function r(u,d){return e.has(u)||e.set(u,[]),e.get(u).push(d),()=>{let h=e.get(u)||[],f=h.indexOf(d);f>=0&&h.splice(f,1)}}function o(u){if(!Jf(u.data))return;let{type:d,payload:h,requestId:f}=u.data;f&&t.has(f)&&(t.get(f)(h),t.delete(f));for(let p of e.get(d)||[])try{p(h,u)}catch(y){console.warn("[EasyUI Dashboard] handler failed",y)}}function a(){return n.addEventListener("message",o),i||l(Jt.READY),()=>n.removeEventListener("message",o)}function l(u,d=null,h=null){if(i)return!1;let f=Zf($f,u,d,h);return n.parent.postMessage(f,s()),f}function c(u,d=null,h=8e3){return new Promise(f=>{if(i){f({standalone:!0});return}let p=l(u,d),y=p&&p.requestId;if(!y){f({standalone:!0});return}let m=setTimeout(()=>{t.delete(y),f({timeout:!0})},h);t.set(y,g=>{clearTimeout(m),f(g)})})}return{on:r,start:a,send:l,request:c,standalone:i,targetOrigin:s}}function op({doc:n=document,auth:e,onSuccess:t,initialMode:i="login"}){let s=n.createElement("div");s.className="eui-auth eui-card";let r=i,o=n.createElement("h1"),a=n.createElement("p"),l=n.createElement("form");l.className="eui-form";let c=n.createElement("div");c.className="eui-field";let u=n.createElement("label");u.textContent="昵称";let d=n.createElement("input");d.className="eui-input",d.autocomplete="nickname",d.placeholder="可选，默认取邮箱前缀",c.append(u,d);let h=n.createElement("div");h.className="eui-field";let f=n.createElement("label");f.textContent="邮箱";let p=n.createElement("input");p.className="eui-input",p.type="email",p.required=!0,p.autocomplete="email",p.placeholder="you@example.com",h.append(f,p);let y=n.createElement("div");y.className="eui-field";let m=n.createElement("label");m.textContent="密码";let g=n.createElement("input");g.className="eui-input",g.type="password",g.required=!0,g.minLength=6,g.autocomplete="current-password",g.placeholder="至少 6 位",y.append(m,g);let _=n.createElement("div");_.className="eui-error";let b=n.createElement("button");b.type="submit",b.className="eui-btn eui-btn-primary",b.textContent="登录";let M=n.createElement("div");M.className="eui-hint";let S=n.createElement("button");S.type="button",S.className="eui-link-btn",S.textContent="没有账号？去注册";let T=n.createElement("button");T.type="button",T.className="eui-link-btn",T.textContent="以访客身份继续",T.style.marginLeft="12px",M.append(S,T),l.append(c,h,y,_,b,M),s.append(o,a,l);function v(){o.textContent=r==="login"?"登录 EasyUI 主题平台":"注册 EasyUI 账号",a.textContent=r==="login"?"本地模拟认证：账号仅保存在当前浏览器，用于集市署名。":"仅用于本地演示的账号；不会上传任何数据。",b.textContent=r==="login"?"登录":"注册并登录",S.textContent=r==="login"?"没有账号？去注册":"已有账号？去登录",c.classList.toggle("eui-hidden",r==="login"),g.autocomplete=r==="login"?"current-password":"new-password",_.textContent=""}return S.addEventListener("click",()=>{r=r==="login"?"register":"login",v()}),T.addEventListener("click",async()=>{_.textContent="";try{let x=await e.loginAsGuest();t(x)}catch(x){_.textContent=x.message||String(x)}}),l.addEventListener("submit",async x=>{x.preventDefault(),_.textContent="",b.disabled=!0;try{let R=r==="login"?await e.login({email:p.value,password:g.value}):await e.register({email:p.value,password:g.value,name:d.value});t(R)}catch(R){_.textContent=R&&R.message?R.message:String(R)}finally{b.disabled=!1}}),v(),{element:s,focus:()=>p.focus()}}function __(n,e,t){return(n&&n.tokenOverrides||{})[e]||t}function Sc(n){return[["--md-sys-color-primary","#3b82f6"],["--md-sys-color-surface","#f8fafc"],["--md-sys-color-tertiary","#7d5260"]].map(([e,t])=>__(n,e,t))}function ap({doc:n=document,drafts:e=[],onCreate:t,onEdit:i,onDelete:s,onOpenMarket:r,onOpenMyThemes:o}){let a=n.createElement("div"),l=n.createElement("div");l.className="eui-row",l.style.marginBottom="16px";let c=n.createElement("h2");c.className="eui-page-title",c.style.margin="0",c.innerHTML='我的主题 <span class="eui-page-sub">草稿保存在 easyui_draft_&lt;id&gt;</span>';let u=n.createElement("span");u.className="eui-spacer";let d=n.createElement("button");d.type="button",d.className="eui-btn",d.textContent="从集市下载",d.addEventListener("click",r);let h=n.createElement("button");h.type="button",h.className="eui-btn",h.textContent="已应用主题",h.addEventListener("click",o);let f=n.createElement("button");f.type="button",f.className="eui-btn eui-btn-primary",f.textContent="＋ 新建主题",f.addEventListener("click",t),l.append(c,u,d,h,f);let p=n.createElement("div");if(p.className="eui-grid",!e.length){let y=n.createElement("div");y.className="eui-empty",y.style.gridColumn="1 / -1",y.innerHTML="<strong>还没有草稿主题</strong>新建一个，或从图床集市下载别人的主题再改。";let m=n.createElement("div");m.className="eui-row",m.style.justifyContent="center";let g=n.createElement("button");g.type="button",g.className="eui-btn eui-btn-primary",g.textContent="新建第一个主题",g.addEventListener("click",t),m.appendChild(g),y.appendChild(m),p.appendChild(y)}for(let y of e){let m=n.createElement("article");m.className="eui-card eui-theme-card";let g=n.createElement("h3");g.textContent=y.name||y.themeId;let _=n.createElement("div");_.className="eui-theme-meta";let b=n.createElement("div");b.className="eui-swatches";for(let x of Sc(y)){let R=n.createElement("span");R.className="eui-swatch",R.style.background=x,b.appendChild(R)}let M=Object.keys(y.imageMap||{}).length;_.textContent=`${y.visibility==="public"?"公开":"私有"} · ${M} 张图 · 更新于 ${String(y.updatedAt||"").replace("T"," ").slice(0,16)}`,m.append(g,b,_);let S=n.createElement("div");S.className="eui-card-actions";let T=n.createElement("button");T.type="button",T.className="eui-btn eui-btn-sm eui-btn-primary",T.textContent="编辑",T.addEventListener("click",()=>i(y.themeId));let v=n.createElement("button");v.type="button",v.className="eui-btn eui-btn-sm eui-btn-danger",v.textContent="删除",v.addEventListener("click",()=>s(y.themeId)),S.append(T,v),m.appendChild(S),p.appendChild(m)}return a.append(l,p),{element:a}}function lp(n){let e=String(n||"").trim(),t=/^#([0-9a-f]{3})$/i.exec(e);if(t)return`#${t[1].split("").map(r=>r+r).join("")}`;let i=/^#([0-9a-f]{6})/i.exec(e);if(i)return`#${i[1]}`;let s=/^rgba?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})/i.exec(e);return s?`#${[s[1],s[2],s[3]].map(r=>Math.min(255,Number(r)).toString(16).padStart(2,"0")).join("")}`:"#000000"}function cp(n,e){let t=/^-?\d+(?:\.\d+)?/.exec(String(n??"").trim());return t?Number(t[0]):e}function v_(n,e){let t=e&&e.tokenOverrides&&e.tokenOverrides[n.name];return t!==void 0?t:n.default}function up({doc:n=document,container:e,theme:t,onChange:i}){let s=n.createElement("div");s.className="eui-tabs";let r=n.createElement("div");r.className="eui-token-group";let o=ac[0].id;function a(y){return!!(t&&t.tokenOverrides&&t.tokenOverrides[y]!==void 0)}function l(y,m){i(y,m),c()}function c(){r.querySelectorAll(".eui-token-row").forEach(y=>{y.classList.toggle("overridden",a(y.dataset.token))})}function u(y){let m=n.createElement("div");m.className="eui-token-row",m.dataset.token=y.name,a(y.name)&&m.classList.add("overridden");let g=n.createElement("div");g.className="eui-token-label";let _=n.createElement("span");_.textContent=y.label;let b=n.createElement("code");b.textContent=y.name,g.append(_,b);let M=n.createElement("div");M.className="eui-token-control";let S=v_(y,t);if(y.control==="color"){let v=n.createElement("input");v.type="color",v.value=lp(S),v.setAttribute("aria-label",`${y.label} 取色器`);let x=n.createElement("input");x.className="eui-input eui-mono",x.style.padding="4px 8px",x.value=String(S),x.setAttribute("aria-label",`${y.label} 颜色值`),v.addEventListener("input",()=>{x.value=v.value,l(y.name,v.value)}),x.addEventListener("change",()=>{x.value=x.value.trim(),v.value=lp(x.value),l(y.name,x.value)}),M.append(v,x)}else if(y.control==="slider"){let v=y.name==="--md-sys-shape-corner-full",x=n.createElement("input");x.type="range",x.min=String(y.min),x.max=String(y.max),x.step=String(y.step);let R=v&&cp(S,0)>=9999?y.max:cp(S,y.default);x.value=String(R);let w=n.createElement("output"),I=()=>{v&&Number(x.value)>=y.max?w.textContent="全圆角":w.textContent=`${x.value}${y.unit||""}`};I(),x.addEventListener("input",()=>{I();let D=v&&Number(x.value)>=y.max?"9999px":y.unit?`${x.value}${y.unit}`:String(x.value);l(y.name,D)}),M.append(x,w)}else if(y.control==="easing"){let v=n.createElement("select");v.className="eui-select";let x=y.options||[],R=new Set(x.map(w=>w.value));for(let w of x){let I=n.createElement("option");I.value=w.value,I.textContent=w.label,v.appendChild(I)}if(!R.has(String(S))){let w=n.createElement("option");w.value=String(S),w.textContent="自定义",v.appendChild(w)}v.value=String(S),v.addEventListener("change",()=>l(y.name,v.value)),M.append(v)}else if(y.control==="font"){let v=n.createElement("select");v.className="eui-select";let x=y.options||[],R=new Set(x.map(w=>w.value));for(let w of x){let I=n.createElement("option");I.value=w.value,I.textContent=w.label,v.appendChild(I)}if(!R.has(String(S))){let w=n.createElement("option");w.value=String(S),w.textContent="自定义字体栈",v.appendChild(w)}v.value=String(S),v.addEventListener("change",()=>l(y.name,v.value)),M.append(v)}else{let v=n.createElement("select");v.className="eui-select";for(let x of y.options||[]){let R=n.createElement("option");R.value=x.value,R.textContent=x.label,v.appendChild(R)}v.value=String(S),v.addEventListener("change",()=>l(y.name,v.value)),M.append(v)}let T=n.createElement("button");return T.type="button",T.className="eui-token-reset",T.title="恢复默认值",T.setAttribute("aria-label",`恢复 ${y.label} 默认值`),T.textContent="↺",T.addEventListener("click",()=>{i(y.name,null),h()}),m.append(g,M,T),m}function d(){s.textContent="";for(let y of ac){let m=n.createElement("button");m.type="button",m.className="eui-tab"+(y.id===o?" active":""),m.textContent=y.label,m.addEventListener("click",()=>{o=y.id,d(),h()}),s.appendChild(m)}}function h(){r.textContent="";for(let y of Hr.filter(m=>m.group===o))r.appendChild(u(y))}function f(y){y&&(t=y),d(),h()}d(),h();let p=n.createElement("div");return p.append(s,r),e&&e.appendChild(p),{element:p,refresh:f}}var x_=Object.entries(lc).map(([n,e])=>`${n}: ${e};`).join(`
`),Qr=`<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8">
<style>
:root {
${x_}
}
* { box-sizing: border-box; }
html, body { margin: 0; }
body {
  min-height: 100vh;
  padding: 22px;
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  line-height: var(--md-sys-typescale-body-large-line-height);
  letter-spacing: var(--md-sys-typescale-body-large-tracking);
  transition: background-color var(--md-sys-motion-duration-medium-2) var(--md-sys-motion-easing-standard),
              color var(--md-sys-motion-duration-medium-2) var(--md-sys-motion-easing-standard);
  background-size: cover;
  background-position: center;
}
#easyui-dashboard-preview { display: flex; flex-direction: column; gap: 16px; max-width: 640px; }
.pv-title {
  margin: 0;
  font-family: var(--md-sys-typescale-headline-medium-font);
  font-size: var(--md-sys-typescale-headline-medium-size);
  font-weight: var(--md-sys-typescale-headline-medium-weight);
  line-height: var(--md-sys-typescale-headline-medium-line-height);
  color: var(--md-sys-color-on-surface);
}
.pv-sub { margin: 0; color: var(--md-sys-color-on-surface-variant); }
.pv-row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
.pv-btn {
  border: 0; cursor: pointer; padding: 10px 20px;
  border-radius: var(--md-sys-shape-corner-full);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  color: var(--md-sys-color-on-primary);
  background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-primary-container));
  box-shadow: 0 10px 22px -12px color-mix(in srgb, var(--md-sys-color-primary) 80%, transparent);
  transition: transform var(--md-sys-motion-duration-short-3) var(--md-sys-motion-easing-emphasized),
              box-shadow var(--md-sys-motion-duration-short-3) var(--md-sys-motion-easing-standard);
  background-size: cover; background-position: center;
}
.pv-btn:hover { transform: translateY(-2px); }
.pv-btn:active { transform: translateY(0) scale(.98); }
.pv-btn-secondary { background: linear-gradient(135deg, var(--md-sys-color-secondary), var(--md-sys-color-secondary-container)); color: var(--md-sys-color-on-secondary); }
.pv-btn-danger { background: linear-gradient(135deg, var(--md-sys-color-error), var(--md-sys-color-error-container)); color: var(--md-sys-color-on-error); }
.pv-card {
  background: var(--md-sys-color-surface-container);
  border-radius: var(--md-sys-shape-corner-large);
  padding: 16px;
  box-shadow: 0 12px 30px -22px color-mix(in srgb, var(--md-sys-color-shadow) 70%, transparent);
  border: 1px solid var(--md-sys-color-outline-variant);
  background-size: cover; background-position: center;
}
.pv-card h3 {
  margin: 0 0 6px;
  font-family: var(--md-sys-typescale-title-large-font);
  font-size: var(--md-sys-typescale-title-large-size);
  font-weight: var(--md-sys-typescale-title-large-weight);
}
.pv-card p { margin: 0; color: var(--md-sys-color-on-surface-variant); }
.pv-alert {
  display: flex; gap: 10px; align-items: flex-start;
  padding: 12px 14px;
  border-radius: var(--md-sys-shape-corner-medium);
  background: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  border-left: 4px solid var(--md-sys-color-secondary);
  background-size: cover; background-position: center;
}
.pv-modal {
  border-radius: var(--md-sys-shape-corner-extra-large);
  padding: 18px;
  background: var(--md-sys-color-surface-container-highest);
  border: 1px solid var(--md-sys-color-outline);
  box-shadow: 0 24px 60px -30px rgba(0,0,0,.55);
  background-size: cover; background-position: center;
}
.pv-field { display: flex; flex-direction: column; gap: 6px; }
.pv-field span { font-size: var(--md-sys-typescale-label-large-size); color: var(--md-sys-color-on-surface-variant); }
.pv-input {
  padding: 10px 14px;
  border-radius: var(--md-sys-shape-corner-small);
  border: 1px solid var(--md-sys-color-outline);
  background: var(--md-sys-color-surface-container-lowest);
  color: var(--md-sys-color-on-surface);
  outline: none;
}
.pv-input:focus { border-color: var(--md-sys-color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--md-sys-color-primary) 25%, transparent); }
.pv-chip {
  padding: 4px 12px; border-radius: var(--md-sys-shape-corner-full);
  background: var(--md-sys-color-tertiary-container);
  color: var(--md-sys-color-on-tertiary-container);
  font-size: var(--md-sys-typescale-label-large-size);
}
.pv-note { font-size: 12px; color: var(--md-sys-color-outline); }
</style></head>
<body>
<div id="easyui-dashboard-preview">
  <h1 class="pv-title">主题实时预览</h1>
  <p class="pv-sub">令牌改动会立即反映到这块画布；图片与高级 CSS 同样在这里验证。</p>
  <div class="pv-row">
    <button class="pv-btn" data-slot="button-primary">主要按钮</button>
    <button class="pv-btn pv-btn-secondary" data-slot="button-secondary">次要按钮</button>
    <button class="pv-btn pv-btn-danger" data-slot="button-danger">危险按钮</button>
    <span class="pv-chip">标签</span>
  </div>
  <div class="pv-card" data-slot="card">
    <h3>卡片标题</h3>
    <p>卡片正文展示表面色、描边与圆角令牌的组合效果。</p>
  </div>
  <div class="pv-alert" data-slot="alert-info">
    <strong>提示</strong>
    <span>这是一条信息提示条，可用于展示 alert-* 图片槽位。</span>
  </div>
  <div class="pv-modal" data-slot="modal">
    <strong>弹窗预览</strong>
    <p class="pv-sub">弹窗背景图会叠加浅色遮罩，保证文字可读。</p>
  </div>
  <label class="pv-field">
    <span>输入框</span>
    <input class="pv-input" placeholder="请输入内容…" data-slot="input">
  </label>
  <p class="pv-note">--md-sys-* 与 imageMap 由仪表盘实时写入本 iframe；用户 CSS 已限域到 #easyui-dashboard-preview。</p>
</div>
</body></html>`,b_={button:"linear-gradient(rgba(15,23,42,0.18), rgba(15,23,42,0.18))",card:"linear-gradient(rgba(255,255,255,0.84), rgba(255,255,255,0.84))",alert:"linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88))",modal:"linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9))"};function M_(n){return n.startsWith("button-")?"button":n.startsWith("alert-")?"alert":n==="card"?"card":n==="modal"?"modal":null}function eo(n,e){if(!n)return!1;let t=null;try{t=n.contentDocument||n.contentWindow&&n.contentWindow.document}catch{t=null}if(!t||!t.documentElement)return!1;let i=t.documentElement;for(let[l,c]of Object.entries(lc))i.style.setProperty(l,c);let s=e&&e.tokenOverrides||{};for(let[l,c]of Object.entries(s))/^--md-sys-[a-z0-9-]+$/.test(l)&&i.style.setProperty(l,String(c));let r=e&&e.imageMap||{};t.querySelectorAll("[data-slot]").forEach(l=>{l.style.backgroundImage="",l.style.backgroundSize="",l.style.backgroundPosition="",l.style.backgroundRepeat=""});for(let[l,c]of Object.entries(r)){let u=M_(l);if(!u)continue;let d=t.querySelector(`[data-slot="${l}"]`);if(!d)continue;let h=b_[u];d.style.backgroundImage=h?`${h}, url(${JSON.stringify(c)})`:`url(${JSON.stringify(c)})`,d.style.backgroundSize="cover",d.style.backgroundPosition="center",d.style.backgroundRepeat="no-repeat"}t.body&&(r["page-background"]?(t.body.style.backgroundImage=`url(${JSON.stringify(r["page-background"])})`,t.body.style.backgroundSize="cover",t.body.style.backgroundPosition="center"):t.body.style.backgroundImage="");let o=t.getElementById("eui-preview-user-css");o||(o=t.createElement("style"),o.id="eui-preview-user-css",t.head.appendChild(o));let a=sn(e&&e.cssText||"");return o.textContent=a.blocked?"":Wr(a.css,["#easyui-dashboard-preview"]),!0}var S_="https://img.scdn.io/api/v1.php",hp="https://img.scdn.io/api/random.php",E_="img.scdn.io";var T_=/^image\/(jpeg|png|webp|gif|bmp|tiff)$/i,yt=class extends Error{constructor(e,{code:t="UNKNOWN",status:i=0,retryable:s=!1,cause:r=null}={}){super(e),this.name="ImageBedError",this.code=t,this.status=i,this.retryable=s,this.cause=r}},A_={400:"文件无效或格式不支持（400）",413:"文件过大，图床拒绝接收（413）",415:"不支持的图片格式（415）",429:"请求过于频繁，请稍后再试（429）",500:"图床服务器内部错误（500）"};function fp(n){return A_[n]||`上传失败（HTTP ${n}）`}function w_(n,e=1e3){if(!n)return e;let t=Number(n);if(Number.isFinite(t))return Math.max(0,Math.min(5e3,t*1e3));let i=Date.parse(n);return Number.isNaN(i)?e:Math.max(0,Math.min(5e3,i-Date.now()))}function to(n){if(!Number.isFinite(n)||n<=0)return"0 B";let e=["B","KB","MB","GB"],t=Math.min(e.length-1,Math.floor(Math.log(n)/Math.log(1024)));return`${(n/1024**t).toFixed(t===0?0:1)} ${e[t]}`}function C_(n,{maxBytes:e=10485760}={}){if(!n)throw new yt("没有选择文件",{code:"NO_FILE"});if(typeof File<"u"&&n instanceof File&&n.size<=0)throw new yt("文件为空",{code:"EMPTY_FILE"});if(typeof n.size=="number"&&n.size>e)throw new yt(`文件过大（${to(n.size)}），上限 ${to(e)}`,{code:"TOO_LARGE"});if(n.type&&!T_.test(n.type))throw new yt(`不支持的文件类型：${n.type}`,{code:"UNSUPPORTED_TYPE"});return!0}function I_(n){let e={};return String(n||"").split(/\r?\n/).forEach(t=>{let i=t.indexOf(":");i>0&&(e[t.slice(0,i).trim().toLowerCase()]=t.slice(i+1).trim())}),e}function R_(n,e,{xhrFactory:t,timeoutMs:i,onProgress:s}){return new Promise((r,o)=>{let a;try{a=t()}catch(u){o(new yt("当前环境不支持 XMLHttpRequest",{code:"NO_XHR",cause:u}));return}let l=!1,c=(u,d)=>{l||(l=!0,u(d))};try{a.open("POST",n,!0)}catch(u){o(new yt("无法发起上传请求",{code:"OPEN_FAILED",cause:u}));return}a.timeout=i,a.upload&&(a.upload.onprogress=u=>{s&&u.lengthComputable&&s({phase:"upload",loaded:u.loaded,total:u.total,percent:Math.round(u.loaded/u.total*100)})},a.upload.onload=()=>{s&&s({phase:"processing",percent:100})}),a.onload=()=>c(r,{status:a.status,headers:I_(a.getAllResponseHeaders()),text:a.responseText}),a.onerror=()=>c(o,new yt("网络被拦截或图床不可达，请检查网络 / CORS 后重试",{code:"NETWORK",retryable:!0})),a.ontimeout=()=>c(o,new yt(`上传超时（超过 ${Math.round(i/1e3)} 秒），请换小图或稍后重试`,{code:"TIMEOUT",retryable:!0})),a.onabort=()=>c(o,new yt("上传已取消",{code:"ABORTED"})),a.send(e)})}function dp(n,e){let t=e&&(e.error||e.message)||fp(n);return new yt(t,{code:n===429?"RATE_LIMITED":"API_ERROR",status:n,retryable:n===429||n>=500})}function Ec({xhrFactory:n=()=>new XMLHttpRequest,fetchImpl:e=typeof fetch<"u"?fetch.bind(globalThis):null,sleep:t=r=>new Promise(o=>setTimeout(o,r)),maxBytes:i=10485760,cdnDomain:s=E_}={}){async function r(l,{onProgress:c,timeoutMs:u}={}){let d=new FormData;d.append("image",l),s&&d.append("cdn_domain",s);let h=await R_(S_,d,{xhrFactory:n,timeoutMs:u,onProgress:c}),f=null;try{f=JSON.parse(h.text)}catch{}if(h.status===429){let y=w_(h.headers["retry-after"]);throw new yt(fp(429),{code:"RATE_LIMITED",status:429,retryable:!0,retryAfter:y,cause:f})}if(h.status<200||h.status>=300)throw dp(h.status,f);if(f&&f.success===!1)throw dp(h.status||500,f);let p=f&&f.data&&f.data.url||f&&f.url;if(!p)throw new yt("图床返回数据缺少图片地址",{code:"BAD_RESPONSE",status:h.status,cause:f});return{url:p,filename:f.data&&f.data.filename||"",raw:f}}async function o(l,{onProgress:c,timeoutMs:u=6e4,maxBytes:d}={}){C_(l,{maxBytes:d||i}),c&&c({phase:"start",percent:0});let h=0;for(;;){h++;try{let f=await r(l,{onProgress:c,timeoutMs:u||6e4});return c&&c({phase:"done",percent:100}),{...f,attempts:h}}catch(f){let p=f instanceof yt;if(p&&f.code==="RATE_LIMITED"&&h===1){let y=Math.max(0,Number(f.retryAfter)||1e3);c&&c({phase:"retry",percent:0,retryAfterMs:y}),await t(y);continue}throw p?f:new yt("上传失败："+(f&&f.message?f.message:String(f)),{code:"UNKNOWN",cause:f})}}}async function a(l="风景",{timeoutMs:c=15e3}={}){let u=`${hp}?tag=${encodeURIComponent(l)}`;if(!e)return{url:u,degraded:!0,reason:"当前环境没有 fetch"};let d=typeof AbortController<"u"?new AbortController:null,h=d?setTimeout(()=>d.abort(),c):null;try{let f=await e(`${hp}?format=json&tag=${encodeURIComponent(l)}`,{signal:d?d.signal:void 0,credentials:"omit",cache:"no-store"}),p=await f.json().catch(()=>null);if(!f.ok){let m=p&&(p.error||p.message)||`随机图接口错误（${f.status}）`;throw new yt(m,{code:"RANDOM_ERROR",status:f.status})}let y=p&&p.data&&(p.data.image_url||p.data.url)||"";if(!y)throw new yt("随机图返回数据缺少图片地址",{code:"BAD_RESPONSE"});return{url:y,degraded:!1,meta:p.data}}catch(f){if(f instanceof yt&&f.status)throw f;let p=f&&f.message?f.message:String(f);return{url:u,degraded:!0,reason:p}}finally{h&&clearTimeout(h)}}return{uploadImage:o,randomImage:a}}var Aw=Ec();function pp({doc:n=document,getTheme:e,setImage:t,imageBed:i=Ec()}){let s=n.createElement("section");s.className="eui-section";let r=n.createElement("div");r.className="eui-row";let o=n.createElement("strong");o.textContent="背景图（img.scdn.io）";let a=n.createElement("span");a.className="eui-hint",a.textContent="上传后自动写入当前主题的 imageMap",r.append(o,a);let l=n.createElement("select");l.className="eui-select";for(let I of Ii){let L=n.createElement("option");L.value=I.slot,L.textContent=`${I.label}（${I.slot}）`,l.appendChild(L)}l.value="page-background";let c=n.createElement("input");c.type="file",c.accept="image/*",c.className="eui-input";let u=n.createElement("button");u.type="button",u.className="eui-btn eui-btn-primary",u.textContent="上传并应用";let d=n.createElement("button");d.type="button",d.className="eui-btn",d.textContent="从图床随机取一张背景";let h=n.createElement("input");h.className="eui-input",h.type="url",h.placeholder="或粘贴图片 URL（https://…）";let f=n.createElement("button");f.type="button",f.className="eui-btn",f.textContent="使用该 URL";let p=n.createElement("div");p.className="eui-upload-progress eui-hidden";let y=n.createElement("i");p.appendChild(y);let m=n.createElement("div");m.className="eui-notice eui-notice-info eui-hidden";let g=n.createElement("img");g.className="eui-thumb",g.alt="背景图预览",g.hidden=!0;let _=n.createElement("div");_.className="eui-image-list";let b=n.createElement("div");b.className="eui-row",b.append(l,c);let M=n.createElement("div");M.className="eui-row",M.append(u,d);let S=n.createElement("div");S.className="eui-row",S.append(h,f),s.append(r,b,M,S,p,m,g,_);function T(I,L){m.className=`eui-notice eui-notice-${I}`,m.textContent=L,m.classList.remove("eui-hidden")}function v(I){if(I===null){p.classList.add("eui-hidden"),y.style.width="0%";return}p.classList.remove("eui-hidden"),y.style.width=`${Math.max(0,Math.min(100,I))}%`}function x(){return l.value||"page-background"}function R(I){let L=x();t(L,I),g.src=I,g.hidden=!1,T("ok",`已写入 ${L}：${I}`),w()}function w(){let I=e(),L=I&&I.imageMap||{},D=Object.entries(L);if(_.textContent="",!D.length){let B=n.createElement("div");B.className="eui-hint",B.textContent="还没有图片。上传一张，或使用随机风景图。",_.appendChild(B),g.hidden=!0;return}for(let[B,O]of D){let V=n.createElement("div");V.className="eui-image-item";let Y=n.createElement("img");Y.src=O,Y.alt=B;let U=n.createElement("div");U.className="eui-image-info";let G=n.createElement("strong");G.textContent=(Ii.find(Z=>Z.slot===B)||{}).label||B;let J=n.createElement("code");J.textContent=O,U.append(G,J);let K=n.createElement("button");K.type="button",K.className="eui-btn eui-btn-sm",K.textContent="预览",K.addEventListener("click",()=>{g.src=O,g.hidden=!1,l.value=B});let _e=n.createElement("button");_e.type="button",_e.className="eui-btn eui-btn-sm eui-btn-danger",_e.textContent="移除",_e.addEventListener("click",()=>{t(B,null),w()}),V.append(Y,U,K,_e),_.appendChild(V)}let N=D[0];g.src=N[1],g.hidden=!1}return u.addEventListener("click",async()=>{let I=c.files&&c.files[0];if(!I){T("warn","请先选择一张图片");return}u.disabled=!0,v(0),T("info",`正在上传 ${I.name||"图片"}（${to(I.size||0)}）…`);try{let L=await i.uploadImage(I,{onProgress:D=>{if(D.phase==="retry"){T("warn",`请求过于频繁，${Math.round((D.retryAfterMs||1e3)/1e3)} 秒后重试一次…`);return}typeof D.percent=="number"&&v(D.percent)}});v(null),R(L.url),L.attempts>1&&T("ok",`上传成功（重试 ${L.attempts-1} 次）：${L.url}`)}catch(L){v(null);let D=L instanceof yt||L&&L.message?L.message:String(L);L&&L.code==="NETWORK"&&(D+="。若在 CCW 中运行，页面 CSP 的 connect-src 未放行 img.scdn.io；可改用下方“使用该 URL”，或打开独立仪表盘上传。"),T("error",`上传失败：${D}`)}finally{u.disabled=!1}}),f.addEventListener("click",()=>{let I=h.value.trim();if(!/^https:\/\//i.test(I)){T("error","请输入 https:// 开头的图片地址");return}R(I),h.value=""}),d.addEventListener("click",async()=>{d.disabled=!0,T("info","正在从 img.scdn.io 随机取一张风景图…");try{let I=await i.randomImage("风景");R(I.url),I.degraded&&T("warn",`已使用重定向地址（CORS/网络受限：${I.reason||"未知原因"}），每次加载可能不同。`)}catch(I){T("error",`随机图获取失败：${I&&I.message?I.message:I}`)}finally{d.disabled=!1}}),w(),{element:s,refresh:w}}var mp="easyui_theme_index",N_="easyui_theme_";function gp(n){return`${N_}${n}`}function no(n){async function e(){if(!n||!n.isAvailable())return{ok:!1,entries:[],reason:"CCWData 不可用"};let a=await n.getCloudData(mp);return a==null?{ok:!0,entries:[]}:Array.isArray(a)?{ok:!0,entries:a.filter(c=>c&&typeof c.themeId=="string")}:{ok:!0,entries:[]}}async function t(a){if(!n||!n.isAvailable())return{ok:!1,reason:"CCWData 不可用"};let l=a.filter(u=>u&&typeof u.themeId=="string").sort((u,d)=>String(d.updatedAt||"").localeCompare(String(u.updatedAt||""))).slice(0,200);return{ok:await n.setCloudData(mp,l),entries:l}}async function i(a,l={}){let c=await e();if(!c.ok)return{ok:!1,conflict:!1,reason:c.reason};let u=c.entries.slice(),d=u.findIndex(f=>f.themeId===a.themeId);if(d>=0){if(l.expectedUpdatedAt&&u[d].updatedAt!==l.expectedUpdatedAt)return{ok:!1,conflict:!0,entries:u,reason:"索引已被其它会话更新"};u[d]={...u[d],...a}}else u.push(a);let h=await t(u);return{ok:h.ok,conflict:!1,entries:h.entries,reason:h.reason}}async function s(a){let l=await e();if(!l.ok)return{ok:!1,reason:l.reason};let c=l.entries.filter(d=>d.themeId!==a),u=await t(c);return{ok:u.ok,entries:u.entries}}async function r(a,l){return!n||!n.isAvailable()?{ok:!1,reason:"CCWData 不可用"}:await n.setCloudData(gp(a.themeId),a)?i(l):{ok:!1,reason:"写入主题失败"}}async function o(a){if(!n||!n.isAvailable())return{ok:!1,theme:null,reason:"CCWData 不可用"};let l=await n.getCloudData(gp(a));return l?{ok:!0,theme:l}:{ok:!1,theme:null,reason:"主题不存在或读取失败"}}return{read:e,write:t,upsert:i,remove:s,publishTheme:r,fetchTheme:o}}function Ws(n,e,t=document){try{let i=JSON.stringify(n,null,2),s=new Blob([i],{type:"application/json"}),r=URL.createObjectURL(s),o=t.createElement("a");return o.href=r,o.download=e||`${n&&n.themeId||"easyui-theme"}.json`,o.rel="noopener",t.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(r),2e3),!0}catch(i){return console.warn("[EasyUI Dashboard] 导出失败",i),!1}}function yp(n=document,{accept:e="application/json,.json"}={}){return new Promise((t,i)=>{let s=n.createElement("input");s.type="file",s.accept=e,s.style.display="none",s.addEventListener("change",()=>{let r=s.files&&s.files[0];if(!r){s.remove(),i(new Error("没有选择文件"));return}let o=new FileReader;o.onload=()=>{s.remove();try{t(JSON.parse(String(o.result)))}catch(a){i(new Error("JSON 解析失败："+a.message))}},o.onerror=()=>{s.remove(),i(new Error("读取文件失败"))},o.readAsText(r)}),n.body.appendChild(s),s.click()})}function io(n){let e=rn({...n||{},updatedAt:Fn()});e.version||(e.version="1.0.0"),e.createdAt||(e.createdAt=Fn());let t=sn(e.cssText||"");if(t.blocked)return{ok:!1,error:`补充 CSS 未通过安全净化：${t.issues.join(", ")||"内容被拦截"}`,issues:t.issues};let i={...e,cssText:t.css},{valid:s,errors:r}=ri(i);return s?{ok:!0,theme:i,issues:t.issues}:{ok:!1,errors:r,issues:t.issues}}function _p({doc:n=document,getTheme:e,getUser:t,onThemeChange:i,cloudApi:s=Mn,messenger:r=null}){let o=n.createElement("section");o.className="eui-section";let a=n.createElement("div");a.className="eui-row";let l=n.createElement("strong");l.textContent="发布与备份";let c=n.createElement("span");c.className="eui-badge "+(s.isAvailable()?"eui-badge-ok":"eui-badge-warn"),c.textContent=s.isAvailable()?"云数据可用":"云数据不可用",a.append(l,c);let u=n.createElement("div");u.className="eui-row";let d=n.createElement("button");d.type="button",d.className="eui-btn eui-btn-primary",d.textContent="发布到 CCW 集市";let h=n.createElement("button");h.type="button",h.className="eui-btn",h.textContent="导出 JSON";let f=n.createElement("button");f.type="button",f.className="eui-btn",f.textContent="导入 JSON",u.append(d,h,f);let p=n.createElement("div");p.className="eui-notice eui-notice-info eui-hidden";let y=n.createElement("div");y.className="eui-hint",y.textContent="发布前会依次执行：规范化 → JSON Schema 校验 → CSS 净化。",o.append(a,u,p,y);let m=no(s);function g(b,M){p.className=`eui-notice eui-notice-${b}`,p.textContent=M,p.classList.remove("eui-hidden")}return d.addEventListener("click",async()=>{let b=io(e());if(!b.ok){let M=b.error||(b.errors||[]).map(S=>`${S.path} ${S.message}`).join("；");g("error",`发布失败：${M}`);return}if(b.issues.length&&g("warn",`CSS 已净化（${b.issues.join(", ")}），继续发布…`),!s.isAvailable()){g("warn","当前环境不支持集市发布（window.CCWData 不可用）。可先导出 JSON 分享。"),Ws(b.theme,`${b.theme.themeId}.json`,n);return}d.disabled=!0,g("info","正在写入 CCW 云数据…");try{let M=await m.publishTheme(b.theme,Of(b.theme));M.ok?(Sn(b.theme),i&&i(b.theme),g("ok",`已发布：easyui_theme_${b.theme.themeId}`)):g("error",`发布失败：${M.reason||"未知错误"}`)}catch(M){g("error",`发布异常：${M&&M.message?M.message:M}`)}finally{d.disabled=!1}}),h.addEventListener("click",()=>{let b=io(e()),M=b.ok?b.theme:e(),S=Ws(M,`${M&&M.themeId||"easyui-theme"}.json`,n);g(S?"ok":"error",S?"已导出 JSON 文件。":"导出失败，请检查浏览器下载权限。")}),f.addEventListener("click",async()=>{try{let b=await yp(n),M=io(b);if(!M.ok){g("error",`导入失败：${M.error||(M.errors||[]).map(S=>`${S.path} ${S.message}`).join("；")}`);return}Sn(M.theme),i&&i(M.theme),g("ok",`已导入：${M.theme.name}`)}catch(b){g("error",`导入失败：${b&&b.message?b.message:b}`)}}),t&&t()||(y.textContent+=" 未登录时作者记为本地用户。"),r&&r.on("cloud-result",b=>{c.className="eui-badge "+(b&&b.available?"eui-badge-ok":"eui-badge-warn"),c.textContent=b&&b.available?"云数据可用":"云数据不可用"}),{element:o,show:g,prepare:()=>io(e())}}function vp({doc:n=document,win:e=window,theme:t,user:i=null,messenger:s=null,onBack:r,onSaved:o,cloudApi:a=Mn}){let l=n.createElement("div"),c=rn({...t}),u=!1,d=null,h=!1,f=n.createElement("div");f.className="eui-row",f.style.marginBottom="14px";let p=n.createElement("button");p.type="button",p.className="eui-btn eui-btn-sm",p.textContent="← 返回列表",p.addEventListener("click",()=>r&&r());let y=n.createElement("input");y.className="eui-input",y.style.maxWidth="260px",y.value=c.name||"未命名主题",y.setAttribute("aria-label","主题名称");let m=n.createElement("select");m.className="eui-select",m.style.maxWidth="120px";for(let[Ne,ot]of[["private","私有"],["public","公开"]]){let ut=n.createElement("option");ut.value=Ne,ut.textContent=ot,m.appendChild(ut)}m.value=c.visibility||"private";let g=n.createElement("span");g.className="eui-spacer";let _=n.createElement("span");_.className="eui-hint",_.textContent="已保存";let b=n.createElement("button");b.type="button",b.className="eui-btn eui-btn-primary",b.textContent="保存草稿";let M=n.createElement("button");M.type="button",M.className="eui-btn",M.textContent="导出 JSON",f.append(p,y,m,g,_,M,b);let S=n.createElement("div");S.className="eui-editor";let T=n.createElement("div");T.className="eui-card";let v=n.createElement("div");v.className="eui-panel-head",v.textContent="设计令牌";let x=n.createElement("div");x.className="eui-panel-body";let R=n.createElement("div");x.appendChild(R);let w=n.createElement("details");w.className="eui-section";let I=n.createElement("summary");I.textContent="高级：补充 CSS（保存时自动净化）";let L=n.createElement("div");L.className="eui-section-body";let D=n.createElement("textarea");D.className="eui-textarea",D.value=c.cssText||"",D.placeholder=`例如：
.easyui-btn { text-transform: none; }
.easyui-card { backdrop-filter: blur(6px); }`,D.setAttribute("aria-label","补充 CSS");let N=n.createElement("div");N.className="eui-hint",N.textContent="仅允许 img.scdn.io 及其 CDN 的 url()；会移除 @import / expression / javascript:。",L.append(D,N),w.append(I,L),x.appendChild(w),T.append(v,x);let B=n.createElement("div");B.style.display="flex",B.style.flexDirection="column",B.style.gap="16px";let O=n.createElement("div");O.className="eui-card";let V=n.createElement("div");V.className="eui-panel-head",V.textContent="实时预览";let Y=n.createElement("div");Y.className="eui-panel-body";let U=n.createElement("div");U.className="eui-preview-wrap";let G=n.createElement("iframe");G.className="eui-preview-frame",G.title="主题预览",G.setAttribute("sandbox","allow-same-origin"),U.appendChild(G),Y.appendChild(U),O.append(V,Y);function J(){eo(G,c)}G.addEventListener("load",J),G.srcdoc=Qr;let K=pp({doc:n,getTheme:()=>c,setImage:(Ne,ot)=>{ot?c.imageMap[Ne]=ot:delete c.imageMap[Ne],J(),Ze()}}),_e=n.createElement("div");_e.className="eui-card";let Z=n.createElement("div");Z.className="eui-panel-head",Z.textContent="背景图";let re=n.createElement("div");re.className="eui-panel-body",re.appendChild(K.element),_e.append(Z,re);let xe=_p({doc:n,getTheme:()=>c,getUser:()=>i,cloudApi:a,messenger:s,onThemeChange:Ne=>{Object.assign(c,rn({...c,...Ne})),pt.refresh(c),J(),Ze()}}),Ae=n.createElement("div");Ae.className="eui-card";let me=n.createElement("div");me.className="eui-panel-head",me.textContent="集市";let Le=n.createElement("div");Le.className="eui-panel-body",Le.appendChild(xe.element),Ae.append(me,Le),B.append(O,_e,Ae),S.append(T,B),l.append(f,S);let pt=up({doc:n,container:R,theme:c,onChange:(Ne,ot)=>{ot===null?delete c.tokenOverrides[Ne]:c.tokenOverrides[Ne]=ot,J(),Ze()}});function Ce(Ne,ot="hint"){_.textContent=Ne,_.className=ot==="error"?"eui-error":"eui-hint"}function Ke(){d&&e.clearTimeout(d),d=e.setTimeout(()=>{d=null,Ve()},500)}function Ze(){u=!0,Ce("未保存…"),Ke()}function Ve(){if(h)return!1;let Ne=sn(c.cssText||"");if(Ne.blocked)return Ce(`保存已阻止：CSS ${Ne.issues.join(", ")}`,"error"),!1;c.cssText=Ne.css,c.updatedAt=Fn();let ot=rn(c),{valid:ut,errors:qt}=ri(ot);if(!ut){let Ut=qt[0];return Ce(`保存已阻止：${Ut.path} ${Ut.message}`,"error"),!1}Object.assign(c,ot);let Ct=Sn(c);return u=!1,Ce(Ct?`已保存 ${new Date().toLocaleTimeString()}`:"保存失败：localStorage 不可用",Ct?"hint":"error"),Ct&&o&&o(c),Ct}y.addEventListener("input",()=>{c.name=y.value.trim()||"未命名主题",Ze()}),m.addEventListener("change",()=>{c.visibility=m.value,Ze()}),b.addEventListener("click",()=>{d&&(e.clearTimeout(d),d=null),Ve()}),M.addEventListener("click",()=>{let Ne=sn(c.cssText||""),ot={...c,cssText:Ne.blocked?"":Ne.css};Ws(ot,`${c.themeId}.json`,n)});let rt=null;D.addEventListener("input",()=>{c.cssText=D.value;let Ne=sn(c.cssText);N.textContent=Ne.blocked?`会被拦截：${Ne.issues.join(", ")}`:Ne.issues.length?`将净化：${Ne.issues.join(", ")}`:"CSS 安全，可保存。",N.className=Ne.blocked?"eui-error":"eui-hint",rt&&e.clearTimeout(rt),rt=e.setTimeout(()=>{rt=null,J()},250),Ze()});function gt(){h=!0,d&&(e.clearTimeout(d),d=null),rt&&(e.clearTimeout(rt),rt=null)}function Rt(Ne){Object.assign(c,rn(Ne)),pt.refresh(c),K.refresh(),D.value=c.cssText||"",y.value=c.name||"",m.value=c.visibility||"private",J(),Ze()}return{element:l,save:Ve,destroy:gt,applyThemeObject:Rt,getTheme:()=>c,isDirty:()=>u,refreshPreview:J}}function xp({doc:n=document,win:e=window,drafts:t=[],applied:i=[],activeThemeId:s=null,onEdit:r,onApply:o,onRename:a,onDelete:l,onDeleteApplied:c}){let u=n.createElement("div"),d=n.createElement("h2");d.className="eui-page-title",d.innerHTML='我的主题 <span class="eui-page-sub">草稿与已应用主题</span>';function h(p){try{let y=e.prompt("重命名主题",p);return y&&y.trim()?y.trim():null}catch{return null}}function f(p,y,m){let g=n.createElement("section");g.style.marginTop="18px";let _=n.createElement("div");_.className="eui-row",_.style.marginBottom="10px";let b=n.createElement("h3");if(b.textContent=`${p}（${y.length}）`,b.style.margin="0",_.appendChild(b),g.appendChild(_),!y.length){let S=n.createElement("div");return S.className="eui-empty",S.textContent=m==="draft"?"没有草稿。回到主题列表新建一个。":"还没有应用过主题。可以在集市下载或编辑草稿后应用。",g.appendChild(S),g}let M=n.createElement("div");M.className="eui-grid";for(let S of y){let T=n.createElement("article");T.className="eui-card eui-theme-card";let v=n.createElement("h3");v.textContent=S.name||S.themeId;let x=n.createElement("div");if(x.className="eui-theme-meta",x.textContent=`${S.authorId||"本地"} · 更新于 ${String(S.updatedAt||"").replace("T"," ").slice(0,16)}`,m==="applied"&&s===S.themeId){let I=n.createElement("span");I.className="eui-badge eui-badge-ok",I.textContent="当前主题",x.appendChild(I)}let R=n.createElement("div");R.className="eui-swatches";for(let I of Sc(S)){let L=n.createElement("span");L.className="eui-swatch",L.style.background=I,R.appendChild(L)}T.append(v,R,x);let w=n.createElement("div");if(w.className="eui-card-actions",m==="draft"){let I=n.createElement("button");I.type="button",I.className="eui-btn eui-btn-sm eui-btn-primary",I.textContent="编辑",I.addEventListener("click",()=>r(S.themeId));let L=n.createElement("button");L.type="button",L.className="eui-btn eui-btn-sm",L.textContent="应用到舞台",L.addEventListener("click",()=>o(S));let D=n.createElement("button");D.type="button",D.className="eui-btn eui-btn-sm",D.textContent="重命名",D.addEventListener("click",()=>{let B=h(S.name);B&&a(S.themeId,B)});let N=n.createElement("button");N.type="button",N.className="eui-btn eui-btn-sm eui-btn-danger",N.textContent="删除",N.addEventListener("click",()=>l(S.themeId)),w.append(I,L,D,N)}else{let I=n.createElement("button");I.type="button",I.className="eui-btn eui-btn-sm eui-btn-primary",I.textContent="设为当前",I.addEventListener("click",()=>o(S));let L=n.createElement("button");L.type="button",L.className="eui-btn eui-btn-sm",L.textContent="复制为草稿",L.addEventListener("click",()=>r(S.themeId,S));let D=n.createElement("button");D.type="button",D.className="eui-btn eui-btn-sm eui-btn-danger",D.textContent="移除记录",D.addEventListener("click",()=>c(S.themeId)),w.append(I,L,D)}T.appendChild(w),M.appendChild(T)}return g.appendChild(M),g}return u.append(d,f("草稿",t,"draft"),f("已应用",i,"applied")),{element:u}}function P_(n,e,t){return(n&&n.tokenOverridesSummary||{})[e]||t}function bp({doc:n=document,cloudApi:e=Mn,messenger:t=null,onImport:i}){let s=no(e),r=n.createElement("section");r.className="eui-section";let o=n.createElement("div");o.className="eui-row";let a=n.createElement("strong");a.textContent="CCW 集市";let l=n.createElement("button");l.type="button",l.className="eui-btn eui-btn-sm",l.textContent="刷新列表";let c=n.createElement("span");c.className="eui-badge "+(e.isAvailable()?"eui-badge-ok":"eui-badge-warn"),c.textContent=e.isAvailable()?"云数据可用":"云数据不可用",o.append(a,c,l);let u=n.createElement("div");u.className="eui-notice eui-notice-info",u.textContent=e.isAvailable()?"读取 easyui_theme_index 中已发布的主题。":"当前环境不支持集市下载（window.CCWData 不可用）。可以先用“导入 JSON”加载本地主题。";let d=n.createElement("div");d.className="eui-card";let h=n.createElement("div");h.className="eui-card eui-hidden",h.style.marginTop="16px";let f=n.createElement("div");f.className="eui-panel-head";let p=n.createElement("span");p.textContent="主题预览";let y=n.createElement("button");y.type="button",y.className="eui-btn eui-btn-primary eui-btn-sm",y.textContent="导入到 EasyUI";let m=n.createElement("span");m.className="eui-spacer",f.append(p,m,y);let g=n.createElement("iframe");g.className="eui-preview-frame",g.title="集市主题预览",g.setAttribute("sandbox","allow-scripts"),h.append(f,g),r.append(o,u,d,h);let _=null;function b(R,w){u.className=`eui-notice eui-notice-${R}`,u.textContent=w}function M(){d.textContent="";let R=n.createElement("div");R.className="eui-empty",R.innerHTML="<strong>当前环境不支持集市下载</strong>扩展检测到 window.CCWData 不可用。可以让对方导出 JSON，再用“导入 JSON”加载。",d.appendChild(R)}function S(R){if(d.textContent="",!R.length){let w=n.createElement("div");w.className="eui-empty",w.innerHTML="<strong>集市还是空的</strong>发布第一个主题，或导入本地 JSON。",d.appendChild(w);return}for(let w of R){let I=n.createElement("div");I.className="eui-market-item";let L=n.createElement("div"),D=n.createElement("strong");D.textContent=w.name||w.themeId;let N=n.createElement("div");N.className="eui-theme-meta",N.textContent=`${w.authorId||"匿名"} · ${String(w.updatedAt||"").replace("T"," ").slice(0,16)}`;let B=n.createElement("div");B.className="eui-swatches";for(let[Y,U]of[["--md-sys-color-primary","#3b82f6"],["--md-sys-color-surface","#f8fafc"],["--md-sys-color-tertiary","#7d5260"]]){let G=n.createElement("span");G.className="eui-swatch",G.style.background=P_(w,Y,U),B.appendChild(G)}L.append(D,N,B);let O=n.createElement("div");O.className="eui-row";let V=n.createElement("button");V.type="button",V.className="eui-btn eui-btn-sm",V.textContent="查看 / 导入",V.addEventListener("click",()=>v(w)),O.appendChild(V),I.append(L,O),d.appendChild(I)}}async function T(){if(!e.isAvailable()){b("warn","当前环境不支持集市下载（window.CCWData 不可用）。可以先用“导入 JSON”加载本地主题。"),M();return}b("info","正在读取 easyui_theme_index…");let R=await s.read();if(!R.ok){b("error",`读取集市索引失败：${R.reason||"未知错误"}`),S([]);return}R.entries.length?b("info",`共 ${R.entries.length} 个主题。`):b("info","集市暂时没有公开主题。"),S(R.entries)}async function v(R){b("info",`正在读取 ${R.name||R.themeId}…`);let w=await s.fetchTheme(R.themeId);if(!w.ok){b("error",`读取主题失败：${w.reason||"未知错误"}`);return}let I=rn(w.theme),{valid:L,errors:D}=ri(I);if(!L){b("error",`主题校验失败：${D.map(B=>`${B.path} ${B.message}`).join("；")}`);return}let N=sn(I.cssText||"");if(N.blocked){b("error",`主题 CSS 未通过安全净化，已拒绝导入：${N.issues.join(", ")}`);return}_={...I,cssText:N.css},h.classList.remove("eui-hidden"),p.textContent=`主题预览：${_.name}`,g.srcdoc=Qr,g.onload=()=>eo(g,_),b("info",N.issues.length?`已加载，CSS 已净化：${N.issues.join(", ")}`:"已加载，可通过“导入到 EasyUI”应用。")}async function x(){if(_){y.disabled=!0;try{if(i&&i(_),t&&!t.standalone){let R=await t.request(Jt.APPLY_THEME,_);R&&R.timeout?b("warn","扩展未在 8 秒内响应，主题已存为本地草稿。"):R&&R.applied?b("ok","已应用到 EasyUI 舞台，并写入 easyui_applied_。"):b("error",`应用失败：${(R&&R.errors||[]).map(w=>w.message).join("；")||"未知错误"}`)}else b("warn","当前是独立预览模式，无法直接下发到扩展；主题已存为本地草稿。")}finally{y.disabled=!1}}}return l.addEventListener("click",T),y.addEventListener("click",x),T(),{element:r,load:T,selectEntry:v}}function Mp({doc:n=document,cloudApi:e,messenger:t,onImport:i,onBack:s}){let r=n.createElement("div"),o=n.createElement("div");o.className="eui-row",o.style.marginBottom="14px";let a=n.createElement("button");a.type="button",a.className="eui-btn eui-btn-sm",a.textContent="← 返回",a.addEventListener("click",s);let l=n.createElement("h2");l.className="eui-page-title",l.style.margin="0",l.innerHTML='集市下载 <span class="eui-page-sub">从 easyui_theme_index 读取</span>',o.append(a,l),r.appendChild(o);let c=bp({doc:n,cloudApi:e,messenger:t,onImport:i});return r.appendChild(c.element),{element:r,load:c.load}}function Sp({root:n,win:e=window,doc:t=document,cloudApi:i=Mn,bridge:s=null,useHash:r=!0}={}){let o=sp(),a=Vs(),l=s||rp({win:e}),c=null,u=null,d=null,h=null,f=null,p="/themes",y=null,m=!1;function g(){if(!r)return"";try{return String(e.location.hash||"").replace(/^#/,"")}catch{return""}}function _(){return p||"/themes"}function b(U){if(!m){if(p=U,r)try{e.location.hash=`#${U}`}catch{}O()}}function M(U,G){let J=t.createElement("a");return J.href=`#${G}`,J.textContent=U,_().startsWith(G)&&(J.className="active"),J.addEventListener("click",K=>{K.preventDefault(),b(G)}),J}function S(){n.textContent="";let U=t.createElement("div");U.className="eui-shell",d=t.createElement("header"),d.className="eui-header";let G=t.createElement("div");G.className="eui-brand";let J=t.createElement("span");J.className="eui-brand-mark",J.textContent="E";let K=t.createElement("span");K.textContent="EasyUI 主题平台",G.append(J,K),f=t.createElement("nav"),f.className="eui-nav";let _e=t.createElement("div");_e.className="eui-header-right";let Z=t.createElement("span");Z.className="eui-user",Z.textContent=c?`@${c.name}`:"";let re=t.createElement("button");re.type="button",re.className="eui-btn eui-btn-sm",re.textContent="退出",re.addEventListener("click",()=>{o.logout(),c=null,S(),b("/login")}),_e.append(Z),c?_e.appendChild(re):_e.querySelector(".eui-user").remove(),d.append(G),c&&d.append(f),d.append(_e),h=t.createElement("main"),h.className="eui-main",U.append(d,h),n.appendChild(U)}function T(){f&&(f.textContent="",f.append(M("主题","/themes"),M("我的","/my"),M("集市","/market")))}function v(U){u&&typeof u.destroy=="function"&&u.destroy(),u=U,h.textContent="",h.appendChild(U.element),T()}function x(){return c?!0:(b("/login"),!1)}function R(){let U=Bf({authorId:c?c.id:"local",name:"新主题",visibility:"private"});Sn(U),b(`/editor/${U.themeId}`)}function w(){if(c){b("/themes");return}v(op({doc:t,auth:o,initialMode:"login",onSuccess:U=>{c=U,S(),b("/themes")}}))}function I(){if(!x())return;let U=vc(a);v(ap({doc:t,drafts:U,onCreate:R,onEdit:G=>b(`/editor/${G}`),onDelete:G=>{e.confirm&&!e.confirm(`删除草稿「${Hs(G,a)?.name||G}」？`)||(xc(G,a),I())},onOpenMarket:()=>b("/market"),onOpenMyThemes:()=>b("/my")}))}function L(){if(!x())return;let U=vc(a),G=Uf(),J=Bs();v(xp({doc:t,win:e,drafts:U,applied:G,activeThemeId:J,onEdit:(K,_e)=>{if(_e){let Z={..._e,themeId:kr("theme"),name:`${_e.name||"主题"} 副本`,createdAt:Fn(),updatedAt:Fn()};Sn(Z,a),b(`/editor/${Z.themeId}`)}else b(`/editor/${K}`)},onApply:async K=>{await D(K),L()},onRename:(K,_e)=>{np(K,_e,a),L()},onDelete:K=>{xc(K,a),L()},onDeleteApplied:K=>{Ff(K),L()}}))}async function D(U){if(l.standalone)return Yr(U),Os(U.themeId),l.send(Jt.NOTIFY,{level:"info",message:"独立模式下已保存为本地主题"}),{applied:!0};let G=await l.request(Jt.APPLY_THEME,U);return G&&G.applied?(Os(U.themeId),G):G&&G.timeout?{applied:!1,errors:[{message:"扩展响应超时"}]}:G||{applied:!1}}function N(U){if(!x())return;let G=Hs(U,a);if(!G){b("/themes");return}v(vp({doc:t,win:e,theme:G,user:c,messenger:l,cloudApi:i,onBack:()=>b("/themes"),onSaved:()=>{}}))}function B(){x()&&v(Mp({doc:t,cloudApi:i,messenger:l,onBack:()=>b("/themes"),onImport:U=>{Sn(U,a),l.send(Jt.NOTIFY,{level:"info",message:`已导入「${U.name}」到本地草稿`})}}))}function O(){if(m)return;let U=_();if(U==="/login"||U==="/"||U===""){w();return}if(!c){b("/login");return}if(U==="/themes"){I();return}if(U==="/my"){L();return}if(U==="/market"){B();return}let G=/^\/editor\/([^/]+)$/.exec(U);if(G){N(G[1]);return}b("/themes")}async function V(){c=await o.getUser(),!m&&(p=g()||"/themes",S(),l&&typeof l.on=="function"&&l.on(Jt.INIT,U=>{U&&U.cloud}),l&&typeof l.start=="function"&&l.start(),r&&(y=()=>{let U=g();U&&U!==p&&(p=U,O())},e.addEventListener("hashchange",y)),O())}function Y(){if(m=!0,u&&typeof u.destroy=="function")try{u.destroy()}catch(U){console.warn("[EasyUI Dashboard] destroy view failed",U)}u=null,y&&(e.removeEventListener("hashchange",y),y=null),n&&(n.textContent="")}return{start:V,go:b,render:O,destroy:Y,get user(){return c},applyThemeToParent:D,messenger:l}}var D_="easyui-dashboard-overlay",L_="easyui-dashboard-panel",B_=`
:host {
  all: initial;
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: auto;
  background: #f6f7fb;
  color: #1c2333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color-scheme: light;
}
`;function O_(n){let e=String(n||"").replace(/:root/g,":host").replace(/\bhtml\s*,\s*body\b/g,":host").replace(/\bbody\b/g,":host").replace(/100vh/g,"100%");return`${B_}
${e}`}var Tc=class{constructor(e){this.ctx=e,this.doc=e._doc,this.win=e._win,this.overlay=null,this.panel=null,this.shadow=null,this.app=null,this.keyHandler=null}get isOpen(){return!!(this.overlay&&this.overlay.isConnected)}makeBridge(){let e=this,t=this.ctx;return{standalone:!1,on(){return()=>{}},start(){},send(i,s){return i===Jt.NOTIFY&&t.showToastType&&t.showToastType({TYPE:s&&s.level==="error"?"error":"info",CONTENT:s&&s.message||""}),!0},async request(i,s){if(i===Jt.APPLY_THEME){let r=t.applyTheme(s);return r.applied?{applied:!0,themeId:r.theme.themeId,warnings:r.warnings||[]}:{applied:!1,errors:r.errors||[]}}return i===Jt.PROBE_CLOUD?tp(qi(e.win)):{}}}}open(){if(this.isOpen)return this.panel&&this.panel.focus&&this.panel.focus(),!0;let e=this.doc,t=e.createElement("div");t.id=D_,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","EasyUI 主题仪表盘");let i=e.createElement("div");if(i.className=L_,i.tabIndex=-1,!i.attachShadow)return console.warn("[EasyUI] 当前浏览器不支持 Shadow DOM，无法打开内联仪表盘"),!1;let s=i.attachShadow({mode:"open"}),r=e.createElement("style");r.textContent=O_(wh);let o=e.createElement("div");o.id="app",s.append(r,o);let a=e.createElement("button");a.type="button",a.className="easyui-dashboard-close",a.setAttribute("aria-label","关闭主题仪表盘"),a.textContent="×",a.addEventListener("click",()=>this.close()),t.appendChild(i),t.appendChild(a),t.addEventListener("click",l=>{l.target===t&&this.close()}),this.keyHandler=l=>{l.key==="Escape"&&this.isOpen&&(l.preventDefault(),this.close())},e.addEventListener("keydown",this.keyHandler,!0),e.body.appendChild(t),this.overlay=t,this.panel=i,this.shadow=s;try{this.app=Sp({root:o,win:this.win,doc:e,cloudApi:Mn,useHash:!1,bridge:this.makeBridge()});let l=this.app.start();l&&typeof l.catch=="function"&&l.catch(c=>{console.error("[EasyUI] 仪表盘启动失败",c),o.textContent=`仪表盘启动失败：${c&&c.message?c.message:c}`})}catch(l){console.error("[EasyUI] 仪表盘初始化失败",l),o.textContent=`仪表盘初始化失败：${l&&l.message?l.message:l}`}return!0}close(){if(this.app&&typeof this.app.destroy=="function")try{this.app.destroy()}catch(e){console.warn("[EasyUI] 销毁仪表盘失败",e)}return this.app=null,this.keyHandler&&(this.doc.removeEventListener("keydown",this.keyHandler,!0),this.keyHandler=null),this.overlay&&(this.overlay.remove(),this.overlay=null),this.panel=null,this.shadow=null,!0}dispose(){this.close()}};function Ep(n){let e=new Tc(n);return n._dashboard=e,n.openDashboard=()=>e.open(),n.closeDashboard=()=>e.close(),n._disposeDashboard=()=>e.dispose(),e}var Jp=0,nu=1,jp=2;var Bi=1,Kp=2,_s=3,bi=0,Wt=1,Rn=2,Oi=0,vs=1,iu=2,su=3,ru=4,Qp=5;var Ui=100,em=101,tm=102,nm=103,im=104,sm=200,rm=201,om=202,am=203,ou=204,au=205,lm=206,cm=207,um=208,hm=209,dm=210,fm=211,pm=212,mm=213,gm=214,wo=0,Co=1,Io=2,as=3,Ro=4,No=5,Po=6,Do=7,lu=0,ym=1,_m=2,Nn=0,cu=1,uu=2,hu=3,du=4,fu=5,pu=6,mu=7;var gu=300,Fi=301,xs=302,sa=303,ra=304,Lo=1e3,Tn=1001,Bo=1002,wt=1003,vm=1004;var mr=1005;var Vt=1006,oa=1007;var Zn=1008;var $t=1009,yu=1010,_u=1011,bs=1012,aa=1013,gn=1014,yn=1015,_n=1016,la=1017,ca=1018,ki=1020,vu=35902,xu=35899,bu=1021,Mu=1022,vn=1023,qn=1026,Jn=1027,Su=1028,ua=1029,Mi=1030,ha=1031;var da=1033,gr=33776,yr=33777,_r=33778,vr=33779,fa=35840,pa=35841,ma=35842,ga=35843,ya=36196,_a=37492,va=37496,xa=37488,ba=37489,xr=37490,Ma=37491,Sa=37808,Ea=37809,Ta=37810,Aa=37811,wa=37812,Ca=37813,Ia=37814,Ra=37815,Na=37816,Pa=37817,Da=37818,La=37819,Ba=37820,Oa=37821,Ua=36492,Fa=36494,ka=36495,za=36283,Va=36284,br=36285,Ga=36286;var Js=2300,Oo=2301,To=2302,$c=2303,Zc=2400,Jc=2401,jc=2402;var xm=3200;var Ha=0,bm=1,jn="",kt="srgb",js="srgb-linear",Ks="linear",et="srgb";var Ao=7680;var Mm=519,Sm=512,Em=513,Tm=514,Eu=515,Am=516,wm=517,Tu=518,Au=519,Cm=35044;var wu="300 es",an=2e3,ls=2001;function U_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function F_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Im(){let n=Qs("canvas");return n.style.display="block",n}var Tp={},cs=null;function Cu(...n){let e="THREE."+n.shift();cs?cs("log",e,...n):console.log(e,...n)}function Rm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){n=Rm(n);let e="THREE."+n.shift();if(cs)cs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function De(...n){n=Rm(n);let e="THREE."+n.shift();if(cs)cs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zs(...n){let e=n.join(" ");e in Tp||(Tp[e]=!0,Pe(...n))}function Nm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Pm={[wo]:wo,[Io]:Po,[Ro]:Ro,[as]:No,[Co]:Co,[Po]:Io,[Do]:Do,[No]:as},wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ac=Math.PI/180,Uo=180/Math.PI;function Mr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function k_(n,e){return(n%e+e)%e}function wc(n,e,t){return(1-t)*n+t*e}function Dm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Iu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function z_(n,e){if(e.constructor===Float32Array)return n;let t=Iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function V_(n,e){if(e.constructor===Float32Array)return n;let t=Iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var We=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(d!==y||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*y;m<0&&(h=-h,f=-f,p=-p,y=-y,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);g=Math.sin(g*_)/b,a=Math.sin(a*_)/b,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+y*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+y*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ap.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cc=new q,Ap=new Cn,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],y=s[0],m=s[3],g=s[6],_=s[1],b=s[4],M=s[7],S=s[2],T=s[5],v=s[8];return r[0]=o*y+a*_+l*S,r[3]=o*m+a*b+l*T,r[6]=o*g+a*M+l*v,r[1]=c*y+u*_+d*S,r[4]=c*m+u*b+d*T,r[7]=c*g+u*M+d*v,r[2]=h*y+f*_+p*S,r[5]=h*m+f*b+p*T,r[8]=h*g+f*M+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=t*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ic=new Be,wp=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cp=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G_(){let n={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===et&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[js]:{primaries:e,whitePoint:i,transfer:Ks,toXYZ:wp,fromXYZ:Cp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:wp,fromXYZ:Cp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),n}var $e=G_();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Yi,Fo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=Qs("canvas")),Yi.width=e.width,Yi.height=e.height;let s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},H_=0,us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rc(s[o].image)):r.push(Rc(s[o]))}else r=Rc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Rc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var W_=0,Nc=new q,Gt=class n extends wn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Tn,s=Tn,r=Vt,o=Zn,a=vn,l=$t,c=n.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Mr(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=gu;Gt.DEFAULT_ANISOTROPY=1;var ft=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(f+1)/2,S=(g+1)/2,T=(u+h)/4,v=(d+y)/4,x=(p+m)/4;return b>M&&b>S?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=v/i):M>S?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=x/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=v/r,s=x/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ko=class extends wn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Gt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new us(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends ko{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},er=class extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,y,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,y=c*d;t[0]=h+y*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,y=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X_,e,q_)}lookAt(e,t,i){let s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ai.crossVectors(i,jt),ai.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ai.crossVectors(i,jt)),ai.normalize(),so.crossVectors(jt,ai),s[0]=ai.x,s[4]=so.x,s[8]=jt.x,s[1]=ai.y,s[5]=so.y,s[9]=jt.y,s[2]=ai.z,s[6]=so.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],y=i[6],m=i[10],g=i[14],_=i[3],b=i[7],M=i[11],S=i[15],T=s[0],v=s[4],x=s[8],R=s[12],w=s[1],I=s[5],L=s[9],D=s[13],N=s[2],B=s[6],O=s[10],V=s[14],Y=s[3],U=s[7],G=s[11],J=s[15];return r[0]=o*T+a*w+l*N+c*Y,r[4]=o*v+a*I+l*B+c*U,r[8]=o*x+a*L+l*O+c*G,r[12]=o*R+a*D+l*V+c*J,r[1]=u*T+d*w+h*N+f*Y,r[5]=u*v+d*I+h*B+f*U,r[9]=u*x+d*L+h*O+f*G,r[13]=u*R+d*D+h*V+f*J,r[2]=p*T+y*w+m*N+g*Y,r[6]=p*v+y*I+m*B+g*U,r[10]=p*x+y*L+m*O+g*G,r[14]=p*R+y*D+m*V+g*J,r[3]=_*T+b*w+M*N+S*Y,r[7]=_*v+b*I+M*B+S*U,r[11]=_*x+b*L+M*O+S*G,r[15]=_*R+b*D+M*V+S*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],y=e[7],m=e[11],g=e[15],_=l*f-c*h,b=a*f-c*d,M=a*h-l*d,S=o*f-c*u,T=o*h-l*u,v=o*d-a*u;return t*(y*_-m*b+g*M)-i*(p*_-m*S+g*T)+s*(p*b-y*S+g*v)-r*(p*M-y*T+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],y=e[13],m=e[14],g=e[15],_=t*a-i*o,b=t*l-s*o,M=t*c-r*o,S=i*l-s*a,T=i*c-r*a,v=s*c-r*l,x=u*y-d*p,R=u*m-h*p,w=u*g-f*p,I=d*m-h*y,L=d*g-f*y,D=h*g-f*m,N=_*D-b*L+M*I+S*w-T*R+v*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/N;return e[0]=(a*D-l*L+c*I)*B,e[1]=(s*L-i*D-r*I)*B,e[2]=(y*v-m*T+g*S)*B,e[3]=(h*T-d*v-f*S)*B,e[4]=(l*w-o*D-c*R)*B,e[5]=(t*D-s*w+r*R)*B,e[6]=(m*M-p*v-g*b)*B,e[7]=(u*v-h*M+f*b)*B,e[8]=(o*L-a*w+c*x)*B,e[9]=(i*w-t*L-r*x)*B,e[10]=(p*T-y*M+g*_)*B,e[11]=(d*M-u*T-f*_)*B,e[12]=(a*R-o*I-l*x)*B,e[13]=(t*I-i*R+s*x)*B,e[14]=(y*b-p*S-m*_)*B,e[15]=(u*S-d*b+h*_)*B,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,y=o*u,m=o*d,g=a*d,_=l*c,b=l*u,M=l*d,S=i.x,T=i.y,v=i.z;return s[0]=(1-(y+g))*S,s[1]=(f+M)*S,s[2]=(p-b)*S,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(h+g))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(p+b)*v,s[9]=(m-_)*v,s[10]=(1-(h+y))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=$i.set(s[0],s[1],s[2]).length(),a=$i.set(s[4],s[5],s[6]).length(),l=$i.set(s[8],s[9],s[10]).length();r<0&&(o=-o),dn.copy(this);let c=1/o,u=1/a,d=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,t.setFromRotationMatrix(dn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=an,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,y;if(l)p=r/(o-r),y=o*r/(o-r);else if(a===an)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ls)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=an,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),p,y;if(l)p=1/(o-r),y=o/(o-r);else if(a===an)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===ls)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$i=new q,dn=new lt,X_=new q(0,0,0),q_=new q(1,1,1),ai=new q,so=new q,jt=new q,Ip=new lt,Rp=new Cn,Yn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Y_=0,Np=new q,Zi=new Cn,kn=new lt,ro=new q,Xs=new q,$_=new q,Z_=new Cn,Pp=new q(1,0,0),Dp=new q(0,1,0),Lp=new q(0,0,1),Bp={type:"added"},J_={type:"removed"},Ji={type:"childadded",child:null},Pc={type:"childremoved",child:null},Ht=class n extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new q,t=new Yn,i=new Cn,s=new q(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Be}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(Dp,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,t){return Np.copy(e).applyQuaternion(this.quaternion),this.position.add(Np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(Dp,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Xs,ro,this.up):kn.lookAt(ro,Xs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(kn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bp),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J_),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bp),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new q(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},j_={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Wn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Dc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=k_(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Dc(o,r,e+1/3),this.g=Dc(o,r,e),this.b=Dc(o,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let i=Lm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return $e.workingToColorSpace(Bt.copy(this),e),Math.round(Je(Bt.r*255,0,255))*65536+Math.round(Je(Bt.g*255,0,255))*256+Math.round(Je(Bt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Bt.copy(this),t);let i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=kt){$e.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,i=Bt.g,s=Bt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(oo);let i=wc(li.h,oo.h,t),s=wc(li.s,oo.s,t),r=wc(li.l,oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Fe;Fe.NAMES=Lm;var tr=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fn=new q,zn=new q,Lc=new q,Vn=new q,ji=new q,Ki=new q,Op=new q,Bc=new q,Oc=new q,Uc=new q,Fc=new ft,kc=new ft,zc=new ft,di=class n{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fn.subVectors(e,t),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fn.subVectors(s,t),zn.subVectors(i,t),Lc.subVectors(e,t);let o=fn.dot(fn),a=fn.dot(zn),l=fn.dot(Lc),c=zn.dot(zn),u=zn.dot(Lc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Fc.setScalar(0),kc.setScalar(0),zc.setScalar(0),Fc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,i),zc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fc,r.x),o.addScaledVector(kc,r.y),o.addScaledVector(zc,r.z),o}static isFrontFacing(e,t,i,s){return fn.subVectors(i,t),zn.subVectors(e,t),fn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),fn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ji.subVectors(s,i),Ki.subVectors(r,i),Bc.subVectors(e,i);let l=ji.dot(Bc),c=Ki.dot(Bc);if(l<=0&&c<=0)return t.copy(i);Oc.subVectors(e,s);let u=ji.dot(Oc),d=Ki.dot(Oc);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(ji,o);Uc.subVectors(e,r);let f=ji.dot(Uc),p=Ki.dot(Uc);if(p>=0&&f<=p)return t.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ki,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Op.subVectors(r,s),a=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(Op,a);let g=1/(m+y+h);return o=y*g,a=h*g,t.copy(i).addScaledVector(ji,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),lo.subVectors(this.max,qs),Qi.subVectors(e.a,qs),es.subVectors(e.b,qs),ts.subVectors(e.c,qs),ci.subVectors(es,Qi),ui.subVectors(ts,es),Ri.subVectors(Qi,ts);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ri.y,Ri.x,0];return!Vc(t,Qi,es,ts,lo)||(t=[1,0,0,0,1,0,0,0,1],!Vc(t,Qi,es,ts,lo))?!1:(co.crossVectors(ci,ui),t=[co.x,co.y,co.z],Vc(t,Qi,es,ts,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new q,new q,new q,new q,new q,new q,new q,new q],pn=new q,ao=new fi,Qi=new q,es=new q,ts=new q,ci=new q,ui=new q,Ri=new q,qs=new q,lo=new q,co=new q,Ni=new q;function Vc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var vt=new q,uo=new We,K_=0,An=class extends wn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cm,this.updateRanges=[],this.gpuType=yn,this.version=0,this._normalizationScale=e!==void 0?Iu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):z_(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):V_(e,this.array)}};var nr=class extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ir=class extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ln=class extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}},Q_=new fi,Ys=new q,Gc=new q,fs=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Q_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);let t=Ys.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ys,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Gc)),this.expandByPoint(Ys.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ev=0,on=new lt,Hc=new Ht,ns=new q,Kt=new fi,$s=new fi,At=new q,pi=class n extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?ir:nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){let i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Kt.min,$s.min),Kt.expandByPoint(At),At.addVectors(Kt.max,$s.max),Kt.expandByPoint(At)):(Kt.expandByPoint($s.min),Kt.expandByPoint($s.max))}Kt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),At.add(ns)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)a[R]=new q,l[R]=new q;let u=new q,d=new q,h=new q,f=new We,p=new We,y=new We,m=new q,g=new q;function _(R,w,I){c[R]=c[w]=c[I]=1,u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,I),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,w),y.fromBufferAttribute(r,I),d.sub(u),h.sub(u),p.sub(f),y.sub(f);let L=1/(p.x*y.y-y.x*p.y);isFinite(L)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(h,-p.y).multiplyScalar(L),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-y.x).multiplyScalar(L),a[R].add(m),a[w].add(m),a[I].add(m),l[R].add(g),l[w].add(g),l[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,w=b.length;R<w;++R){let I=b[R],L=I.start,D=I.count;for(let N=L,B=L+D;N<B;N+=3)_(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new q,S=new q,T=new q,v=new q;function x(R){T.fromBufferAttribute(s,R),v.copy(T);let w=a[R];M.copy(w),M.sub(T.multiplyScalar(T.dot(w))).normalize(),S.crossVectors(v,w);let L=S.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,L)}for(let R=0,w=i.count;R<w;++R)c[R]&&x(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new An(h,u,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wc=new q,tv=new q,nv=new Be,mn=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Wc.subVectors(i,t).cross(tv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Wc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||nv.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},iv=0,mi=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=vs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=au,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new mn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Hn=new q,Xc=new q,ho=new q,fo=new q,sr=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xc.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),fo.copy(this.origin).sub(Xc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=fo.dot(this.direction),l=-fo.dot(ho),c=fo.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xc).addScaledVector(ho,h),f}intersectSphere(e,t){if(e.radius<0)return null;Hn.subVectors(e.center,this.origin);let i=Hn.dot(this.direction),s=Hn.dot(Hn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,p=t.x-o.x,y=t.y-o.y,m=t.z-o.z,g=i.x-o.x,_=i.y-o.y,b=i.z-o.z,M=Math.abs(l),S=Math.abs(c),T=Math.abs(u),v,x,R,w,I,L,D,N,B,O,V,Y;if(M>=S&&M>=T?(R=l,L=d,B=p,Y=g,l>=0?(v=c,x=u,w=h,I=f,D=y,N=m,O=_,V=b):(v=u,x=c,w=f,I=h,D=m,N=y,O=b,V=_)):S>=T?(R=c,L=h,B=y,Y=_,c>=0?(v=u,x=l,w=f,I=d,D=m,N=p,O=b,V=g):(v=l,x=u,w=d,I=f,D=p,N=m,O=g,V=b)):(R=u,L=f,B=m,Y=b,u>=0?(v=l,x=c,w=d,I=h,D=p,N=y,O=g,V=_):(v=c,x=l,w=h,I=d,D=y,N=p,O=_,V=g)),R===0)return null;let U=v/R,G=x/R,J=1/R,K=w-U*L,_e=I-G*L,Z=D-U*B,re=N-G*B,xe=O-U*Y,Ae=V-G*Y,me=xe*re-Ae*Z,Le=K*Ae-_e*xe,pt=Z*_e-re*K;if(s){if(me<0||Le<0||pt<0)return null}else if((me<0||Le<0||pt<0)&&(me>0||Le>0||pt>0))return null;let Ce=me+Le+pt;if(Ce===0)return null;let Ke=J*(me*L+Le*B+pt*Y);return(Ce>0?Ke<0:Ke>0)?null:this.at(Ke/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ps=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Up=new lt,Pi=new sr,po=new fs,Fp=new q,mo=new q,go=new q,yo=new q,qc=new q,_o=new q,kp=new q,vo=new q,Yt=class extends Ht{constructor(e=new pi,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(qc.fromBufferAttribute(d,e),o?_o.addScaledVector(qc,u):_o.addScaledVector(qc.sub(t),u))}t.add(_o)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(po.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(po,Fp)===null||Pi.origin.distanceToSquared(Fp)>(e.far-e.near)**2))&&(Up.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Up),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=h.length;p<y;p++){let m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,S=b;M<S;M+=3){let T=a.getX(M),v=a.getX(M+1),x=a.getX(M+2);s=xo(this,g,e,i,c,u,d,T,v,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let _=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=xo(this,o,e,i,c,u,d,_,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=h.length;p<y;p++){let m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,S=b;M<S;M+=3){let T=M,v=M+1,x=M+2;s=xo(this,g,e,i,c,u,d,T,v,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let _=m,b=m+1,M=m+2;s=xo(this,o,e,i,c,u,d,_,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function sv(n,e,t,i,s,r,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===bi,a),l===null)return null;vo.copy(a),vo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(vo);return c<t.near||c>t.far?null:{distance:c,point:vo.clone(),object:n}}function xo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,mo),n.getVertexPosition(l,go),n.getVertexPosition(c,yo);let u=sv(n,e,t,i,mo,go,yo,kp);if(u){let d=new q;di.getBarycoord(kp,mo,go,yo,d),s&&(u.uv=di.getInterpolatedAttribute(s,a,l,c,d,new We)),r&&(u.uv1=di.getInterpolatedAttribute(r,a,l,c,d,new We)),o&&(u.normal=di.getInterpolatedAttribute(o,a,l,c,d,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new q,materialIndex:0};di.getNormal(mo,go,yo,h.normal),u.face=h,u.barycoord=d}return u}var Vo=class extends Gt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=wt,u=wt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Di=new fs,rv=new We(.5,.5),bo=new q,gi=class{constructor(e=new mn,t=new mn,i=new mn,s=new mn,r=new mn,o=new mn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=an,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],_=r[12],b=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-o,f-u,g-p,S-_).normalize(),s[1].setComponents(c+o,f+u,g+p,S+_).normalize(),s[2].setComponents(c+a,f+d,g+y,S+b).normalize(),s[3].setComponents(c-a,f-d,g-y,S-b).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,f-h,g-m,S-M).normalize();else if(s[4].setComponents(c-l,f-h,g-m,S-M).normalize(),t===an)s[5].setComponents(c+l,f+h,g+m,S+M).normalize();else if(t===ls)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);let t=rv.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zp=new lt,Go=class n{constructor(){this.coordinateSystem=an,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];zp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new gi),i[s].setFromProjectionMatrix(zp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new gi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var rr=class extends Gt{constructor(e=[],t=Fi,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ms=class extends Gt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $n=class extends Gt{constructor(e,t,i=gn,s,r,o,a=wt,l=wt,c,u=qn,d=1){if(u!==qn&&u!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},or=class extends $n{constructor(e,t=gn,i=Fi,s,r,o=wt,a=wt,l,c=qn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ar=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yi=class n extends pi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2));function p(y,m,g,_,b,M,S,T,v,x,R){let w=M/v,I=S/x,L=M/2,D=S/2,N=T/2,B=v+1,O=x+1,V=0,Y=0,U=new q;for(let G=0;G<O;G++){let J=G*I-D;for(let K=0;K<B;K++){let _e=K*w-L;U[y]=_e*_,U[m]=J*b,U[g]=N,c.push(U.x,U.y,U.z),U[y]=0,U[m]=0,U[g]=T>0?1:-1,u.push(U.x,U.y,U.z),d.push(K/v),d.push(1-G/x),V+=1}}for(let G=0;G<x;G++)for(let J=0;J<v;J++){let K=h+J+B*G,_e=h+J+B*(G+1),Z=h+(J+1)+B*(G+1),re=h+(J+1)+B*G;l.push(K,_e,re),l.push(_e,Z,re),Y+=6}a.addGroup(f,Y,R),f+=Y,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Li=class n extends pi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],y=[],m=[];for(let g=0;g<u;g++){let _=g*h-o;for(let b=0;b<c;b++){let M=b*d-r;p.push(M,-_,0),y.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let b=_+c*g,M=_+c*(g+1),S=_+1+c*(g+1),T=_+1+c*g;f.push(b,M,T),f.push(M,S,T)}this.setIndex(f),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(y,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function zi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Vp(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Vp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Ot(n){let e={};for(let t=0;t<n.length;t++){let i=zi(n[t]);for(let s in i)e[s]=i[s]}return e}function Vp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ov(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ru(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Bm={clone:zi,merge:Ot},av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[i].value=new We().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ho=class extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gs=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wo=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xo=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function is(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Mo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _i=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qo=class extends _i{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:r=e,a=2*t-i;break;case jc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:o=e,l=2*i-t;break;case jc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),y=p*p,m=y*p,g=-h*m+2*h*y-h*p,_=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*p+1,b=(-1-f)*m+(1.5+f)*y+.5*p,M=f*m-f*y;for(let S=0;S!==a;++S)r[S]=g*o[u+S]+_*o[c+S]+b*o[l+S]+M*o[d+S];return r}},Yo=class extends _i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},$o=class extends _i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zo=class extends _i{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(i-t)/(s-t),y=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*p;return r}let h=a*2,f=e-1;for(let p=0;p!==a;++p){let y=o[c+p],m=o[l+p],g=f*h+p*2,_=d[g],b=d[g+1],M=e*h+p*2,S=u[M],T=u[M+1],v=uv(i,t,_,S,s);r[p]=Om(v,y,b,T,m)}return r}};function Om(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function cv(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function uv(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Om(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=cv(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var en=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Mo(e.settings)&&(i.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case Oo:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break;case $c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return To;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Mo(this.settings)&&(Gp(this.settings.inTangents,e),Gp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Mo(this.settings)&&(Hp(this.settings.inTangents,e),Hp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){De("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&F_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let y=t[d+p];if(y!==t[h+p]||y!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Mo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Hp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Oo;var vi=class extends en{constructor(e,t,i){super(e,t,i)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Js;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends en{constructor(e,t,i,s){super(e,t,i,s)}};Jo.prototype.ValueTypeName="color";var jo=class extends en{constructor(e,t,i,s){super(e,t,i,s)}};jo.prototype.ValueTypeName="number";var Ko=class extends _i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},lr=class extends en{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ko(this.times,this.values,this.getValueSize(),e)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends en{constructor(e,t,i){super(e,t,i)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Js;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends en{constructor(e,t,i,s){super(e,t,i,s)}};Qo.prototype.ValueTypeName="vector";var ea=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Um=new ea,ta=class{constructor(e){this.manager=e!==void 0?e:Um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Yc=new lt,Wp=new q,Xp=new q,na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gi,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wp),Xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Yc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},So=new q,Eo=new Cn,En=new q,ur=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,Eo,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(So,Eo,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new q,qp=new We,Yp=new We,zt=class extends ur{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,qp,Yp),t.subVectors(Yp,qp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ac*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var hr=class extends ur{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kc=class extends na{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fr=class extends cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ss=-90,rs=1,ys=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new zt(ss,rs,e,t);r.layers=this.layers,this.add(r);let o=new zt(ss,rs,e,t);o.layers=this.layers,this.add(o);let a=new zt(ss,rs,e,t);a.layers=this.layers,this.add(a);let l=new zt(ss,rs,e,t);l.layers=this.layers,this.add(l);let c=new zt(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===an)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ia=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Nu="\\[\\]\\.:\\/",hv=new RegExp("["+Nu+"]","g"),Pu="[^"+Nu+"]",dv="[^"+Nu.replace("\\.","")+"]",fv=/((?:WC+[\/:])*)/.source.replace("WC",Pu),pv=/(WCOD+)?/.source.replace("WCOD",dv),mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pu),gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pu),yv=new RegExp("^"+fv+pv+mv+gv+"$"),_v=["material","materials","bones","map"],Qc=class{constructor(e,t,i){let s=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},at=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hv,"")}static parseTrackName(e){let t=yv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);_v.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=Qc;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R1=new Float32Array(1);var $p=new lt,pr=class{constructor(e,t,i=0,s=1/0){this.ray=new sr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):De("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $p.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($p),this}intersectObject(e,t=!0,i=[]){return eu(e,this,i,t),i.sort(Zp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)eu(e[s],this,i,t);return i.sort(Zp),i}};function Zp(n,e){return n.distance-e.distance}function eu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)eu(r[o],e,t,!0)}}var tu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Du(n,e,t,i){let s=vv(i);switch(t){case bu:return n*e;case Su:return n*e/s.components*s.byteLength;case ua:return n*e/s.components*s.byteLength;case Mi:return n*e*2/s.components*s.byteLength;case ha:return n*e*2/s.components*s.byteLength;case Mu:return n*e*3/s.components*s.byteLength;case vn:return n*e*4/s.components*s.byteLength;case da:return n*e*4/s.components*s.byteLength;case gr:case yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _r:case vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(n,16)*Math.max(e,8)/4;case fa:case ma:return Math.max(n,8)*Math.max(e,8)/2;case ya:case _a:case xa:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:case xr:case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Fa:case ka:return Math.ceil(n/4)*Math.ceil(e/4)*16;case za:case Va:return Math.ceil(n/4)*Math.ceil(e/4)*8;case br:case Ga:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vv(n){switch(n){case $t:case yu:return{byteLength:1,components:1};case bs:case _u:case _n:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case gn:case aa:case yn:return{byteLength:4,components:1};case vu:case xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function rg(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function bv(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ov=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ub=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ib=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Mv,alphahash_pars_fragment:Sv,alphamap_fragment:Ev,alphamap_pars_fragment:Tv,alphatest_fragment:Av,alphatest_pars_fragment:wv,aomap_fragment:Cv,aomap_pars_fragment:Iv,batching_pars_vertex:Rv,batching_vertex:Nv,begin_vertex:Pv,beginnormal_vertex:Dv,bsdfs:Lv,iridescence_fragment:Bv,bumpmap_pars_fragment:Ov,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Fv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:zv,color_fragment:Vv,color_pars_fragment:Gv,color_pars_vertex:Hv,color_vertex:Wv,common:Xv,defaultnormal_vertex:qv,displacementmap_pars_vertex:Yv,displacementmap_vertex:$v,emissivemap_fragment:Zv,emissivemap_pars_fragment:Jv,colorspace_fragment:jv,colorspace_pars_fragment:Kv,envmap_fragment:Qv,envmap_common_pars_fragment:ex,envmap_pars_fragment:tx,envmap_pars_vertex:nx,envmap_physical_pars_fragment:fx,envmap_vertex:ix,fog_vertex:sx,fog_pars_vertex:rx,fog_fragment:ox,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:hx,lights_pars_begin:dx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:yx,lights_physical_fragment:_x,lights_physical_pars_fragment:vx,lights_fragment_begin:xx,lights_fragment_maps:bx,lights_fragment_end:Mx,lightprobes_pars_fragment:Sx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:wx,map_fragment:Cx,map_pars_fragment:Ix,map_particle_fragment:Rx,map_particle_pars_fragment:Nx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Lx,morphcolor_vertex:Bx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Ux,morphtarget_vertex:Fx,normal_fragment_begin:kx,normal_fragment_maps:zx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Hx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:$x,opaque_fragment:Zx,packing:Jx,premultiplied_alpha_fragment:jx,project_vertex:Kx,dithering_fragment:Qx,dithering_pars_fragment:eb,roughnessmap_fragment:tb,roughnessmap_pars_fragment:nb,shadowmap_pars_fragment:ib,shadowmap_pars_vertex:sb,shadowmap_vertex:rb,shadowmask_pars_fragment:ob,skinbase_vertex:ab,skinning_pars_vertex:lb,skinning_vertex:cb,skinnormal_vertex:ub,specularmap_fragment:hb,specularmap_pars_fragment:db,tonemapping_fragment:fb,tonemapping_pars_fragment:pb,transmission_fragment:mb,transmission_pars_fragment:gb,uv_pars_fragment:yb,uv_pars_vertex:_b,uv_vertex:vb,worldpos_vertex:xb,background_vert:bb,background_frag:Mb,backgroundCube_vert:Sb,backgroundCube_frag:Eb,cube_vert:Tb,cube_frag:Ab,depth_vert:wb,depth_frag:Cb,distance_vert:Ib,distance_frag:Rb,equirect_vert:Nb,equirect_frag:Pb,linedashed_vert:Db,linedashed_frag:Lb,meshbasic_vert:Bb,meshbasic_frag:Ob,meshlambert_vert:Ub,meshlambert_frag:Fb,meshmatcap_vert:kb,meshmatcap_frag:zb,meshnormal_vert:Vb,meshnormal_frag:Gb,meshphong_vert:Hb,meshphong_frag:Wb,meshphysical_vert:Xb,meshphysical_frag:qb,meshtoon_vert:Yb,meshtoon_frag:$b,points_vert:Zb,points_frag:Jb,shadow_vert:jb,shadow_frag:Kb,sprite_vert:Qb,sprite_frag:eM},ye={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Dn={basic:{uniforms:Ot([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ot([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ot([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ot([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ot([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ot([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ot([ye.points,ye.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ot([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ot([ye.common,ye.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ot([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ot([ye.sprite,ye.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Ot([ye.common,ye.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Ot([ye.lights,ye.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Dn.physical={uniforms:Ot([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Wa={r:0,b:0,g:0},tM=new lt,og=new Be;og.set(-1,0,0,0,1,0,0,0,1);function nM(n,e,t,i,s,r){let o=new Fe(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let M=_.backgroundBlurriness>0;b=e.get(b,M)}return b}function p(_){let b=!1,M=f(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,b){let M=f(b);M&&M.isCubeTexture?(c===void 0&&(c=new Yt(new yi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:zi(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tM.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(og),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==et,(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Yt(new Li(2,2),new In({name:"BackgroundMaterial",uniforms:zi(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(Wa,Ru(n)),t.buffers.color.setClear(Wa.r,Wa.g,Wa.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:y,dispose:g}}function iM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(I,L,D,N,B){let O=!1,V=d(I,N,D,L);r!==V&&(r=V,c(r.object)),O=f(I,N,D,B),O&&p(I,N,D,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(I,L,D,N),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function d(I,L,D,N){let B=N.wireframe===!0,O=i[L.id];O===void 0&&(O={},i[L.id]=O);let V=I.isInstancedMesh===!0?I.id:0,Y=O[V];Y===void 0&&(Y={},O[V]=Y);let U=Y[D.id];U===void 0&&(U={},Y[D.id]=U);let G=U[B];return G===void 0&&(G=h(l()),U[B]=G),G}function h(I){let L=[],D=[],N=[];for(let B=0;B<t;B++)L[B]=0,D[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:N,object:I,attributes:{},index:null}}function f(I,L,D,N){let B=r.attributes,O=L.attributes,V=0,Y=D.getAttributes();for(let U in Y)if(Y[U].location>=0){let J=B[U],K=O[U];if(K===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),J===void 0||J.attribute!==K||K&&J.data!==K.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function p(I,L,D,N){let B={},O=L.attributes,V=0,Y=D.getAttributes();for(let U in Y)if(Y[U].location>=0){let J=O[U];J===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let K={};K.attribute=J,J&&J.data&&(K.data=J.data),B[U]=K,V++}r.attributes=B,r.attributesNum=V,r.index=N}function y(){let I=r.newAttributes;for(let L=0,D=I.length;L<D;L++)I[L]=0}function m(I){g(I,0)}function g(I,L){let D=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;D[I]=1,N[I]===0&&(n.enableVertexAttribArray(I),N[I]=1),B[I]!==L&&(n.vertexAttribDivisor(I,L),B[I]=L)}function _(){let I=r.newAttributes,L=r.enabledAttributes;for(let D=0,N=L.length;D<N;D++)L[D]!==I[D]&&(n.disableVertexAttribArray(D),L[D]=0)}function b(I,L,D,N,B,O,V){V===!0?n.vertexAttribIPointer(I,L,D,B,O):n.vertexAttribPointer(I,L,D,N,B,O)}function M(I,L,D,N){y();let B=N.attributes,O=D.getAttributes(),V=L.defaultAttributeValues;for(let Y in O){let U=O[Y];if(U.location>=0){let G=B[Y];if(G===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let J=G.normalized,K=G.itemSize,_e=e.get(G);if(_e===void 0)continue;let Z=_e.buffer,re=_e.type,xe=_e.bytesPerElement,Ae=re===n.INT||re===n.UNSIGNED_INT||G.gpuType===aa;if(G.isInterleavedBufferAttribute){let me=G.data,Le=me.isInterleavedBuffer===!0?me.stride:me.itemSize,pt=G.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ce=0;Ce<U.locationSize;Ce++)g(U.location+Ce,me.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ce=0;Ce<U.locationSize;Ce++)m(U.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Ce=0;Ce<U.locationSize;Ce++)b(U.location+Ce,K/U.locationSize,re,J,Le*xe,(pt+K/U.locationSize*Ce)*xe,Ae)}else{if(G.isInstancedBufferAttribute){for(let me=0;me<U.locationSize;me++)g(U.location+me,G.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let me=0;me<U.locationSize;me++)m(U.location+me);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let me=0;me<U.locationSize;me++)b(U.location+me,K/U.locationSize,re,J,K*xe,K/U.locationSize*me*xe,Ae)}}else if(V!==void 0){let J=V[Y];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(U.location,J);break;case 3:n.vertexAttrib3fv(U.location,J);break;case 4:n.vertexAttrib4fv(U.location,J);break;default:n.vertexAttrib1fv(U.location,J)}}}}_()}function S(){R();for(let I in i){let L=i[I];for(let D in L){let N=L[D];for(let B in N){let O=N[B];for(let V in O)u(O[V].object),delete O[V];delete N[B]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;let L=i[I.id];for(let D in L){let N=L[D];for(let B in N){let O=N[B];for(let V in O)u(O[V].object),delete O[V];delete N[B]}}delete i[I.id]}function v(I){for(let L in i){let D=i[L];for(let N in D){let B=D[N];if(B[I.id]===void 0)continue;let O=B[I.id];for(let V in O)u(O[V].object),delete O[V];delete B[I.id]}}}function x(I){for(let L in i){let D=i[L],N=I.isInstancedMesh===!0?I.id:0,B=D[N];if(B!==void 0){for(let O in B){let V=B[O];for(let Y in V)u(V[Y].object),delete V[Y];delete B[O]}delete D[N],Object.keys(D).length===0&&delete i[L]}}}function R(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function sM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==vn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let x=v===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==$t&&v!==yn&&!x&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:M,maxSamples:S,samples:T}}function oM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new mn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,b=_*4,M=g.clippingState||null;l.value=M,M=u(p,h,b,f);for(let S=0;S!==b;++S)M[S]=t[S];g.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,p){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,M=f;b!==y;++b,M+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Tr=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new rr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yi(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Oi});r.uniforms.tEquirect.value=t;let o=new Yt(s,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Vt),new ys(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Fm=256,aM=3,lM=20,ag=256,lg=16,cM=3,uM=new q,hM=new Fe,qa=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ys(1,10,null),this._boxMesh=new Yt(new yi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=uM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(hM));let m=new ys(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Fm,Dm(e))}_fromTexture(e,t){e.mapping===Fi||e.mapping===xs?this._setSize(e.image.length===0?Fm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=km(e,!1,!1),i=Math.log2(e)-aM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=km(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Fi||e.mapping===xs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=dM(),this._integrationMaterial=fM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/lg);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-cM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(ag*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function km(n,e,t){return new Tr(n,{minFilter:Zn,generateMipmaps:e,type:_n,colorSpace:js,depthBuffer:t})}function Ar(n,e,t){return new In({name:n,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:Wt,blending:Oi,depthTest:!1,depthWrite:!1})}function dM(){return Ar("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ag}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fM(){return Ar("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pM(){return Ar("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function zm(){return Ar("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vm(){return Ar("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===sa||f===ra)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let y=new Tr(p.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,p=f===sa||f===ra,y=f===Fi||f===xs;if(p||y){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new qa(n)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return p&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new qa(n)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===sa?h.mapping=Fi:f===ra&&(h.mapping=xs),h}function l(h){let f=0,p=6;for(let y=0;y<p;y++)h[y]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function gM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Zs("WebGLRenderer: "+i+" extension not supported."),s}}}function yM(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function u(p){let y=p.attributes;for(let m in y)e.update(y[m],n.ARRAY_BUFFER)}function d(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=y!==null?y.array.length:m.array.length/3-1,b=m.count>=65535?ir:nr,M=new b(Math.ceil(_/3)*6,1),S=M.array;if(y!==null){let v=y.array;g=y.version;for(let x=0,R=0;x<_;x+=3){let w=v[x+0],I=v[x+1],L=v[x+2];S[R++]=w,S[R++]=I,S[R++]=I,S[R++]=L,S[R++]=L,S[R++]=w}}else{g=m.version;for(let v=0,x=0;v<_;v+=3){let R=v+0,w=v+1,I=v+2;S[x++]=R,S[x++]=w,S[x++]=w,S[x++]=I,S[x++]=I,S[x++]=R}}M.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,M)}function h(p){let y=r.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let y=s[p].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function _M(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function vM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:De("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function xM(n,e,t){let i=new WeakMap,s=new ft;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let R=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),y===!0&&(b=3);let M=a.attributes.position.count*b,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*S*4*d),v=new er(T,M,S,d);v.type=yn,v.needsUpdate=!0;let x=b*4;for(let w=0;w<d;w++){let I=m[w],L=g[w],D=_[w],N=M*S*4*w;for(let B=0;B<I.count;B++){let O=B*x;f===!0&&(s.fromBufferAttribute(I,B),T[N+O+0]=s.x,T[N+O+1]=s.y,T[N+O+2]=s.z,T[N+O+3]=0),p===!0&&(s.fromBufferAttribute(L,B),T[N+O+4]=s.x,T[N+O+5]=s.y,T[N+O+6]=s.z,T[N+O+7]=0),y===!0&&(s.fromBufferAttribute(D,B),T[N+O+8]=s.x,T[N+O+9]=s.y,T[N+O+10]=s.z,T[N+O+11]=D.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new We(M,S)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function bM(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var MM={[cu]:"LINEAR_TONE_MAPPING",[uu]:"REINHARD_TONE_MAPPING",[hu]:"CINEON_TONE_MAPPING",[du]:"ACES_FILMIC_TONE_MAPPING",[pu]:"AGX_TONE_MAPPING",[mu]:"NEUTRAL_TONE_MAPPING",[fu]:"CUSTOM_TONE_MAPPING"};function SM(n,e,t,i,s,r){let o=new Qt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new pi;u.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ln([0,2,0,0,2,0],2));let d=new Ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Yt(u,d),f=new hr(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,_=null,b=[],M=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),l!==null&&l.setSize(S,T);for(let v=0;v<b.length;v++){let x=b[v];x.setSize&&x.setSize(S,T)}},this.setEffects=function(S){b=S,M=b.length>0&&b[0].isRenderPass===!0;let T=o.width,v=o.height;b.length>0&&a===null&&(a=new Qt(T,v,{type:_n,depthBuffer:!1,stencilBuffer:!1}),l=new Qt(T,v,{type:_n,depthBuffer:!1,stencilBuffer:!1}));let x=s===!0&&b.some(R=>R.needsDepthTexture===!0);x!==(o.depthTexture!==null)&&(x===!0&&c===null&&(c=new $n(T,v),r===!0&&(c.format=Jn,c.type=ki)),o.dispose(),o.depthTexture=x?c:null,o.resolveDepthBuffer=x,o.storeMultisampledDepthBuffer=x);for(let R=0;R<b.length;R++){let w=b[R];w.setSize&&w.setSize(T,v),x&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(S,T){if(m||S.toneMapping===Nn&&b.length===0)return!1;if(_=T,T!==null){let v=T.width,x=T.height;(o.width!==v||o.height!==x)&&this.setSize(v,x)}return M===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Nn,!0},this.hasRenderPass=function(){return M},this.end=function(S,T){S.toneMapping=g,m=!0;let v=o,x=a;for(let R=0;R<b.length;R++){let w=b[R];w.enabled!==!1&&(w.render(S,x,v,T),w.needsSwap!==!1&&(v=x,x=x===a?l:a))}if(p!==S.outputColorSpace||y!==S.toneMapping){p=S.outputColorSpace,y=S.toneMapping,d.defines={},$e.getTransfer(p)===et&&(d.defines.SRGB_TRANSFER="");let R=MM[y];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(_),S.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var cg=new Gt,ug=new $n(1,1),hg=new or(1),dg=new er,fg=new zo,pg=new rr,Gm=[],Hm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),qm=new Float32Array(4);function Ss(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Gm[s];if(r===void 0&&(r=new Float32Array(s),Gm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $a(n,e){let t=Hm[e];t===void 0&&(t=new Int32Array(e),Hm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function EM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function AM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function CM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;qm.set(i),n.uniformMatrix2fv(this.addr,!1,qm),Mt(t,i)}}function IM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;Xm.set(i),n.uniformMatrix3fv(this.addr,!1,Xm),Mt(t,i)}}function RM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;Wm.set(i),n.uniformMatrix4fv(this.addr,!1,Wm),Mt(t,i)}}function NM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function PM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function DM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function LM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function BM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function OM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function UM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function FM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Za(n){return n.version===0&&(n.compareFunction=Au,n.needsUpdate=!0),n}function kM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Za(ug):r=cg,t.setTexture2D(e||r,s)}function zM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fg,s)}function VM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Za(hg):r=pg,t.setTextureCube(e||r,s)}function GM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dg,s)}function HM(n){switch(n){case 5126:return EM;case 35664:return TM;case 35665:return AM;case 35666:return wM;case 35674:return CM;case 35675:return IM;case 35676:return RM;case 5124:case 35670:return NM;case 35667:case 35671:return PM;case 35668:case 35672:return DM;case 35669:case 35673:return LM;case 5125:return BM;case 36294:return OM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}function WM(n,e){n.uniform1fv(this.addr,e)}function XM(n,e){let t=Ss(e,this.size,2);n.uniform2fv(this.addr,t)}function qM(n,e){let t=Ss(e,this.size,3);n.uniform3fv(this.addr,t)}function YM(n,e){let t=Ss(e,this.size,4);n.uniform4fv(this.addr,t)}function $M(n,e){let t=Ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ZM(n,e){let t=Ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JM(n,e){let t=Ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jM(n,e){n.uniform1iv(this.addr,e)}function KM(n,e){n.uniform2iv(this.addr,e)}function QM(n,e){n.uniform3iv(this.addr,e)}function eS(n,e){n.uniform4iv(this.addr,e)}function tS(n,e){n.uniform1uiv(this.addr,e)}function nS(n,e){n.uniform2uiv(this.addr,e)}function iS(n,e){n.uniform3uiv(this.addr,e)}function sS(n,e){n.uniform4uiv(this.addr,e)}function rS(n,e,t){let i=this.cache,s=e.length,r=$a(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Za(ug):o=cg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function oS(n,e,t){let i=this.cache,s=e.length,r=$a(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fg,r[o])}function aS(n,e,t){let i=this.cache,s=e.length,r=$a(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Za(hg):o=pg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function lS(n,e,t){let i=this.cache,s=e.length,r=$a(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dg,r[o])}function cS(n){switch(n){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return $M;case 35675:return ZM;case 35676:return JM;case 5124:case 35670:return jM;case 35667:case 35671:return KM;case 35668:case 35672:return QM;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return sS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return oS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return lS}}var Ou=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HM(t.type)}},Uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cS(t.type)}},Fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function Ym(n,e){n.seq.push(e),n.map[e.id]=e}function uS(n,e,t){let i=n.name,s=i.length;for(Lu.lastIndex=0;;){let r=Lu.exec(i),o=Lu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ym(t,c===void 0?new Ou(a,n,e):new Uu(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Fu(a),Ym(t,d)),t=d}}}var Ms=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);uS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function $m(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var hS=37297,dS=0;function fS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Zm=new Be;function pS(n){$e._getMatrix(Zm,$e.workingColorSpace,n);let e=`mat3( ${Zm.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Ks:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fS(n.getShaderSource(e),a)}else return r}function mS(n,e){let t=pS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gS={[cu]:"Linear",[uu]:"Reinhard",[hu]:"Cineon",[du]:"ACESFilmic",[pu]:"AgX",[mu]:"Neutral",[fu]:"Custom"};function yS(n,e){let t=gS[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xa=new q;function _S(){$e.getLuminanceCoefficients(Xa);let n=Xa.x.toFixed(4),e=Xa.y.toFixed(4),t=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function xS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Er(n){return n!==""}function jm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Km(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(n){return n.replace(MS,SS)}function SS(n,e){let t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ku(t)}var ES=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(n){return n.replace(ES,TS)}function TS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var AS={[Bi]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function wS(n){return AS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var CS={[xs]:"ENVMAP_MODE_REFRACTION"};function IS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":CS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var RS={[lu]:"ENVMAP_BLENDING_MULTIPLY",[ym]:"ENVMAP_BLENDING_MIX",[_m]:"ENVMAP_BLENDING_ADD"};function NS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":RS[n.combine]||"ENVMAP_BLENDING_NONE"}function PS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=wS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=IS(t),d=NS(t),h=vS(t),f=xS(r),p=s.createProgram(),y,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Er).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Er).join(`
`),m.length>0&&(m+=`
`)):(y=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),m=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?He.tonemapping_pars_fragment:"",t.toneMapping!==Nn?yS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,mS("linearToOutputTexel",t.outputColorSpace),_S(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=ku(o),o=jm(o,t),o=Km(o,t),a=ku(a),a=jm(a,t),a=Km(a,t),o=Qm(o),a=Qm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+y+o,b=g+m+a,M=$m(s,s.VERTEX_SHADER,_),S=$m(s,s.FRAGMENT_SHADER,b);s.attachShader(p,M),s.attachShader(p,S),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(w){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(S)||"",N=I.trim(),B=L.trim(),O=D.trim(),V=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,S);else{let U=Jm(s,M,"vertex"),G=Jm(s,S,"fragment");De("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+U+`
`+G)}else N!==""?Pe("WebGLProgram: Program Info Log:",N):(B===""||O==="")&&(Y=!1);Y&&(w.diagnostics={runnable:V,programLog:N,vertexShader:{log:B,prefix:y},fragmentShader:{log:O,prefix:m}})}s.deleteShader(M),s.deleteShader(S),v=new Ms(s,p),x=bS(s,p)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,hS)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}var DS=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Vu(e),t.set(e,i)),i}},Vu=class{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}};function LS(n){return n===Mi||n===xr||n===br}function BS(n,e,t,i,s,r){let o=new hs,a=new zu,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,x,R,w,I,L){let D=w.fog,N=I.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||B,O),Y=h[v.type],U=i.precision;v.precision!==null&&(U=i.getMaxPrecision(v.precision),U!==v.precision&&Pe("WebGLProgram.getParameters:",v.precision,"not supported, using",U,"instead."));let G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=G!==void 0?G.length:0,K=0;N.morphAttributes.position!==void 0&&(K=1),N.morphAttributes.normal!==void 0&&(K=2),N.morphAttributes.color!==void 0&&(K=3);let _e,Z,re,xe;if(Y){let ge=Dn[Y];_e=ge.vertexShader,Z=ge.fragmentShader}else{_e=v.vertexShader,Z=v.fragmentShader;let ge=a.getVertexShaderStage(v),nt=a.getFragmentShaderStage(v);a.update(v,ge,nt),re=ge.id,xe=nt.id}let Ae=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,pt=I.isBatchedMesh===!0,Ce=!!v.map,Ke=!!v.matcap,Ze=!!V,Ve=Ze&&V.isPMREMTexture===!0,rt=!!v.aoMap,gt=!!v.lightMap,Rt=!!v.bumpMap&&v.wireframe===!1,Ne=!!v.normalMap,ot=!!v.displacementMap,ut=!!v.emissiveMap,qt=!!v.metalnessMap,Ct=!!v.roughnessMap,Ut=v.anisotropy>0,z=v.clearcoat>0,nn=v.diffuseRoughness>0,ht=v.dispersion>0,dt=v.retroreflectivity>0,pe=v.iridescence>0,xt=v.sheen>0,Re=v.transmission>0,Oe=Ut&&!!v.anisotropyMap,P=z&&!!v.clearcoatMap,E=z&&!!v.clearcoatNormalMap,W=z&&!!v.clearcoatRoughnessMap,ie=nn&&!!v.diffuseRoughnessMap,ne=pe&&!!v.iridescenceMap,ae=pe&&!!v.iridescenceThicknessMap,de=xt&&!!v.sheenColorMap,Q=xt&&!!v.sheenRoughnessMap,ee=!!v.specularMap,ce=!!v.specularColorMap,F=!!v.specularIntensityMap,te=Re&&!!v.transmissionMap,j=Re&&!!v.thicknessMap,ue=!!v.gradientMap,oe=!!v.alphaMap,le=v.alphaTest>0,we=!!v.alphaHash,Ge=!!v.extensions,se=Nn;v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(se=n.toneMapping);let Ie=Ve?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,ke={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:_e,fragmentShader:Z,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:U,batching:pt,batchingColor:pt&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ce,matcap:Ke,envMap:Ze,envMapMode:Ze&&V.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Ie.length-1:null,envMapSize:Ve?Ie[0].width:null,aoMap:rt,lightMap:gt,bumpMap:Rt,normalMap:Ne,displacementMap:ot,emissiveMap:ut,normalMapObjectSpace:Ne&&v.normalMapType===bm,normalMapTangentSpace:Ne&&v.normalMapType===Ha,packedNormalMap:Ne&&v.normalMapType===Ha&&LS(v.normalMap.format),metalnessMap:qt,roughnessMap:Ct,anisotropy:Ut,anisotropyMap:Oe,clearcoat:z,clearcoatMap:P,clearcoatNormalMap:E,clearcoatRoughnessMap:W,diffuseRoughness:nn,diffuseRoughnessMap:ie,dispersion:ht,retroreflection:dt,iridescence:pe,iridescenceMap:ne,iridescenceThicknessMap:ae,sheen:xt,sheenColorMap:de,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:ce,specularIntensityMap:F,transmission:Re,transmissionMap:te,thicknessMap:j,gradientMap:ue,opaque:v.transparent===!1&&v.blending===vs&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:we,combine:v.combine,mapUv:Ce&&f(v.map.channel),aoMapUv:rt&&f(v.aoMap.channel),lightMapUv:gt&&f(v.lightMap.channel),bumpMapUv:Rt&&f(v.bumpMap.channel),normalMapUv:Ne&&f(v.normalMap.channel),displacementMapUv:ot&&f(v.displacementMap.channel),emissiveMapUv:ut&&f(v.emissiveMap.channel),metalnessMapUv:qt&&f(v.metalnessMap.channel),roughnessMapUv:Ct&&f(v.roughnessMap.channel),anisotropyMapUv:Oe&&f(v.anisotropyMap.channel),clearcoatMapUv:P&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(v.sheenRoughnessMap.channel),specularMapUv:ee&&f(v.specularMap.channel),specularColorMapUv:ce&&f(v.specularColorMap.channel),specularIntensityMapUv:F&&f(v.specularIntensityMap.channel),transmissionMapUv:te&&f(v.transmissionMap.channel),thicknessMapUv:j&&f(v.thicknessMap.channel),alphaMapUv:oe&&f(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ne||Ut),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Ce||oe),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&Ne===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:K,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:L.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:ut&&v.emissiveMap.isVideoTexture===!0&&$e.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ge&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&v.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function y(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)x.push(R),x.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(x,v),g(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function m(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapPMREM),v.push(x.envMapMaxLod),v.push(x.envMapSize),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.diffuseRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.numSunLights),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numSunLightShadows),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.numLightProbeGrids),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function g(v,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.retroreflection&&o.enable(24),x.diffuseRoughness&&o.enable(25),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),x.packedNormalMap&&o.enable(22),x.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),x.numLightProbeGrids>0&&o.enable(22),x.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let x=h[v.type],R;if(x){let w=Dn[x];R=Bm.clone(w.uniforms)}else R=v.uniforms;return R}function b(v,x){let R=u.get(x);return R!==void 0?++R.usedTimes:(R=new PS(n,x,v,s),c.push(R),u.set(x,R)),R}function M(v){if(--v.usedTimes===0){let x=c.indexOf(v);c[x]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:_,acquireProgram:b,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:T}}function OS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function US(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function tg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ng(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,y,m,g){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:g},n[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=o(h),_.groupOrder=y,_.renderOrder=h.renderOrder,_.z=m,_.group=g),e++,_}function l(h,f,p,y,m,g,_){_.reversedDepth===!0&&(m=-m);let b=a(h,f,p,y,m,g);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(h,f,p,y,m,g){let _=a(h,f,p,y,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,f){t.length>1&&t.sort(h||US),i.length>1&&i.sort(f||tg),s.length>1&&s.sort(f||tg)}function d(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function FS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ng,n.set(i,[o])):s>=r.length?(o=new ng,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function kS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new Fe};break;case"SpotLight":t={position:new q,direction:new q,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function zS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var VS=0;function GS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function HS(n){let e=new kS,t=zS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);let s=new q,r=new lt,o=new lt;function a(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,_=0,b=0,M=0,S=0,T=0,v=0,x=0,R=0,w=0;c.sort(GS);for(let L=0,D=c.length;L<D;L++){let N=c[L],B=N.color,O=N.intensity,V=N.distance,Y=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Mi?Y=N.shadow.map.texture:Y=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=B.r*O,d+=B.g*O,h+=B.b*O;else if(N.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(N.sh.coefficients[U],O);w++}else if(N.isSunLight){let U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let G=N.shadow,J=t.get(N);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[p]=J,i.sunShadowMap[p]=Y;let K=G.getViewportCount();for(let _e=0;_e<K;_e++)i.sunShadowMatrix[y+_e]=G.getMatrix(_e),i.sunShadowCascade[y+_e]=G._cascadeData[_e];y+=K,p++}i.sun[f]=U,f++}else if(N.isDirectionalLight){let U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let G=N.shadow,J=t.get(N);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=N.shadow.matrix,S++}i.directional[m]=U,m++}else if(N.isSpotLight){let U=e.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(B).multiplyScalar(O),U.distance=V,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,i.spot[_]=U;let G=N.shadow;if(N.map&&(i.spotLightMap[x]=N.map,x++,G.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[_]=G.matrix,N.castShadow){let J=t.get(N);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=Y,v++}_++}else if(N.isRectAreaLight){let U=e.get(N);U.color.copy(B).multiplyScalar(O),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=U,b++}else if(N.isPointLight){let U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),U.distance=N.distance,U.decay=N.decay,N.castShadow){let G=N.shadow,J=t.get(N);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=N.shadow.matrix,T++}i.point[g]=U,g++}else if(N.isHemisphereLight){let U=e.get(N);U.skyColor.copy(N.color).multiplyScalar(O),U.groundColor.copy(N.groundColor).multiplyScalar(O),i.hemi[M]=U,M++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==b||I.hemiLength!==M||I.numSunShadows!==p||I.numDirectionalShadows!==S||I.numPointShadows!==T||I.numSpotShadows!==v||I.numSpotMaps!==x||I.numLightProbes!==w)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+x-R,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=b,I.hemiLength=M,I.numSunShadows=p,I.numDirectionalShadows=S,I.numPointShadows=T,I.numSpotShadows=v,I.numSpotMaps=x,I.numLightProbes=w,i.version=VS++)}function l(c,u){let d=0,h=0,f=0,p=0,y=0,m=0,g=u.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let M=c[_];if(M.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),d++}else if(M.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(M.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function ig(n){let e=new HS(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function WS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ig(n),e.set(s,[a])):r>=o.length?(a=new ig(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YS=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],$S=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],sg=new lt,Sr=new q,Bu=new q;function ZS(n,e,t){let i=new gi,s=new We,r=new We,o=new ft,a=new Wo,l=new Xo,c={},u=t.maxTextureSize,d={[bi]:Wt,[Wt]:bi,[Rn]:Rn},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:XS,fragmentShader:qS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new pi;p.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Yt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bi;let g=this.type;this.render=function(T,v,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Kp&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bi);let R=n.getRenderTarget(),w=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Oi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=g!==this.type;D&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=T.length;N<B;N++){let O=T[N],V=O.shadow;if(V===void 0){Pe("WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Y=V.getFrameExtents();s.multiply(Y),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,V.mapSize.y=r.y));let U=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=U,V.map===null||D===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===_s){if(O.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Qt(s.x,s.y,{format:Mi,type:_n,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),V.map.texture.name=O.name+".shadowMap",V.map.depthTexture=new $n(s.x,s.y,yn),V.map.depthTexture.name=O.name+".shadowMapDepth",V.map.depthTexture.format=qn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wt,V.map.depthTexture.magFilter=wt}else O.isPointLight?(V.map=new Tr(s.x),V.map.depthTexture=new or(s.x,gn)):(V.map=new Qt(s.x,s.y),V.map.depthTexture=new $n(s.x,s.y,gn)),V.map.depthTexture.name=O.name+".shadowMap",V.map.depthTexture.format=qn,this.type===Bi?(V.map.depthTexture.compareFunction=U?Tu:Eu,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wt,V.map.depthTexture.magFilter=wt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let G=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();O.isPointLight!==!0&&V.updateMatrices(O,x);let J=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:x.layers;for(let K=0;K<G;K++){let _e=V.getCamera(K);if(O.isPointLight){let Z=V.camera,re=V.matrix,xe=O.distance||Z.far;xe!==Z.far&&(Z.far=xe,Z.updateProjectionMatrix()),Sr.setFromMatrixPosition(O.matrixWorld),Z.position.copy(Sr),Bu.copy(Z.position),Bu.add(YS[K]),Z.up.copy($S[K]),Z.lookAt(Bu),Z.updateMatrixWorld(),re.makeTranslation(-Sr.x,-Sr.y,-Sr.z),sg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(sg,Z.coordinateSystem,Z.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,K),n.clear();else{K===0&&(n.setRenderTarget(V.map),n.clear());let Z=V.getViewport(K);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),L.viewport(o)}i=V.getFrustum(K),M(v,x,_e,O,J,this.type)}V.isPointLightShadow!==!0&&this.type===_s&&_(V,x),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(R,w,I)};function _(T,v){let x=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Qt(s.x,s.y,{format:Mi,type:_n}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(v,null,x,h,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(v,null,x,f,y,null)}function b(T,v,x,R){let w=null,I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)w=I;else if(w=x.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let L=w.uuid,D=v.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let B=N[D];B===void 0&&(B=w.clone(),N[D]=B,v.addEventListener("dispose",S)),w=B}if(w.visible=v.visible,w.wireframe=v.wireframe,R===_s?w.side=v.shadowSide!==null?v.shadowSide:v.side:w.side=v.shadowSide!==null?v.shadowSide:d[v.side],w.alphaMap=v.alphaMap,w.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,w.map=v.map,w.clipShadows=v.clipShadows,w.clippingPlanes=v.clippingPlanes,w.clipIntersection=v.clipIntersection,w.displacementMap=v.displacementMap,w.displacementScale=v.displacementScale,w.displacementBias=v.displacementBias,w.wireframeLinewidth=v.wireframeLinewidth,w.linewidth=v.linewidth,x.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let L=n.properties.get(w);L.light=x}return w}function M(T,v,x,R,w,I){if(T.visible===!1)return;if(T.layers.test(w)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===_s)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let N=e.update(T),B=T.material;if(Array.isArray(B)){let O=N.groups;for(let V=0,Y=O.length;V<Y;V++){let U=O[V],G=B[U.materialIndex];if(G&&G.visible){let J=b(T,G,R,I);T.onBeforeShadow(n,T,v,x,N,J,U),n.renderBufferDirect(x,null,N,J,T,U),T.onAfterShadow(n,T,v,x,N,J,U)}}}else if(B.visible){let O=b(T,B,R,I);T.onBeforeShadow(n,T,v,x,N,O,null),n.renderBufferDirect(x,null,N,O,T,null),T.onAfterShadow(n,T,v,x,N,O,null)}}let D=T.children;for(let N=0,B=D.length;N<B;N++)M(D[N],v,x,R,w,I)}function S(T){T.target.removeEventListener("dispose",S);for(let x in c){let R=c[x],w=T.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}function JS(n,e){function t(){let F=!1,te=new ft,j=null,ue=new ft(0,0,0,0);return{setMask:function(oe){j!==oe&&!F&&(n.colorMask(oe,oe,oe,oe),j=oe)},setLocked:function(oe){F=oe},setClear:function(oe,le,we,Ge,se){se===!0&&(oe*=Ge,le*=Ge,we*=Ge),te.set(oe,le,we,Ge),ue.equals(te)===!1&&(n.clearColor(oe,le,we,Ge),ue.copy(te))},reset:function(){F=!1,j=null,ue.set(-1,0,0,0)}}}function i(){let F=!1,te=!1,j=null,ue=null,oe=null;return{setReversed:function(le){if(te!==le){let we=e.get("EXT_clip_control");le?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),te=le;let Ge=oe;oe=null,this.setClear(Ge)}},getReversed:function(){return te},setTest:function(le){le?me(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(le){j!==le&&!F&&(n.depthMask(le),j=le)},setFunc:function(le){if(te&&(le=Pm[le]),ue!==le){switch(le){case wo:n.depthFunc(n.NEVER);break;case Co:n.depthFunc(n.ALWAYS);break;case Io:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case Ro:n.depthFunc(n.EQUAL);break;case No:n.depthFunc(n.GEQUAL);break;case Po:n.depthFunc(n.GREATER);break;case Do:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=le}},setLocked:function(le){F=le},setClear:function(le){oe!==le&&(oe=le,te&&(le=1-le),n.clearDepth(le))},reset:function(){F=!1,j=null,ue=null,oe=null,te=!1}}}function s(){let F=!1,te=null,j=null,ue=null,oe=null,le=null,we=null,Ge=null,se=null;return{setTest:function(Ie){F||(Ie?me(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(Ie){te!==Ie&&!F&&(n.stencilMask(Ie),te=Ie)},setFunc:function(Ie,ke,ge){(j!==Ie||ue!==ke||oe!==ge)&&(n.stencilFunc(Ie,ke,ge),j=Ie,ue=ke,oe=ge)},setOp:function(Ie,ke,ge){(le!==Ie||we!==ke||Ge!==ge)&&(n.stencilOp(Ie,ke,ge),le=Ie,we=ke,Ge=ge)},setLocked:function(Ie){F=Ie},setClear:function(Ie){se!==Ie&&(n.clearStencil(Ie),se=Ie)},reset:function(){F=!1,te=null,j=null,ue=null,oe=null,le=null,we=null,Ge=null,se=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],y=null,m=!1,g=null,_=null,b=null,M=null,S=null,T=null,v=null,x=new Fe(0,0,0),R=0,w=!1,I=null,L=null,D=null,N=null,B=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Y=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=Y>=1):U.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=Y>=2);let G=null,J={},K=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Z=new ft().fromArray(K),re=new ft().fromArray(_e);function xe(F,te,j,ue){let oe=new Uint8Array(4),le=n.createTexture();n.bindTexture(F,le),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<j;we++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(te+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return le}let Ae={};Ae[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(as),Rt(!1),Ne(nu),me(n.CULL_FACE),rt(Oi);function me(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Le(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function pt(F,te){return h[F]!==te?(n.bindFramebuffer(F,te),h[F]=te,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=te),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ce(F,te){let j=p,ue=!1;if(F){j=f.get(te),j===void 0&&(j=[],f.set(te,j));let oe=F.textures;if(j.length!==oe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let le=0,we=oe.length;le<we;le++)j[le]=n.COLOR_ATTACHMENT0+le;j.length=oe.length,ue=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ue=!0);ue&&n.drawBuffers(j)}function Ke(F){return y!==F?(n.useProgram(F),y=F,!0):!1}let Ze={[Ui]:n.FUNC_ADD,[em]:n.FUNC_SUBTRACT,[tm]:n.FUNC_REVERSE_SUBTRACT};Ze[nm]=n.MIN,Ze[im]=n.MAX;let Ve={[sm]:n.ZERO,[rm]:n.ONE,[om]:n.SRC_COLOR,[ou]:n.SRC_ALPHA,[dm]:n.SRC_ALPHA_SATURATE,[um]:n.DST_COLOR,[lm]:n.DST_ALPHA,[am]:n.ONE_MINUS_SRC_COLOR,[au]:n.ONE_MINUS_SRC_ALPHA,[hm]:n.ONE_MINUS_DST_COLOR,[cm]:n.ONE_MINUS_DST_ALPHA,[fm]:n.CONSTANT_COLOR,[pm]:n.ONE_MINUS_CONSTANT_COLOR,[mm]:n.CONSTANT_ALPHA,[gm]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(F,te,j,ue,oe,le,we,Ge,se,Ie){if(F===Oi){m===!0&&(Le(n.BLEND),m=!1);return}if(m===!1&&(me(n.BLEND),m=!0),F!==Qp){if(F!==g||Ie!==w){if((_!==Ui||S!==Ui)&&(n.blendEquation(n.FUNC_ADD),_=Ui,S=Ui),Ie)switch(F){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFunc(n.ONE,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:De("WebGLState: Invalid blending: ",F);break}else switch(F){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case su:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ru:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",F);break}b=null,M=null,T=null,v=null,x.set(0,0,0),R=0,g=F,w=Ie}return}oe=oe||te,le=le||j,we=we||ue,(te!==_||oe!==S)&&(n.blendEquationSeparate(Ze[te],Ze[oe]),_=te,S=oe),(j!==b||ue!==M||le!==T||we!==v)&&(n.blendFuncSeparate(Ve[j],Ve[ue],Ve[le],Ve[we]),b=j,M=ue,T=le,v=we),(Ge.equals(x)===!1||se!==R)&&(n.blendColor(Ge.r,Ge.g,Ge.b,se),x.copy(Ge),R=se),g=F,w=!1}function gt(F,te){F.side===Rn?Le(n.CULL_FACE):me(n.CULL_FACE);let j=F.side===Wt;te&&(j=!j),Rt(j),F.blending===vs&&F.transparent===!1?rt(Oi):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ue=F.stencilWrite;a.setTest(ue),ue&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(F){I!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),I=F)}function Ne(F){F!==Jp?(me(n.CULL_FACE),F!==L&&(F===nu?n.cullFace(n.BACK):F===jp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),L=F}function ot(F){F!==D&&(V&&n.lineWidth(F),D=F)}function ut(F,te,j){F?(me(n.POLYGON_OFFSET_FILL),(N!==te||B!==j)&&(N=te,B=j,o.getReversed()&&(te=-te,j=-j),n.polygonOffset(te,j))):Le(n.POLYGON_OFFSET_FILL)}function qt(F){F?me(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function Ct(F){F===void 0&&(F=n.TEXTURE0+O-1),G!==F&&(n.activeTexture(F),G=F)}function Ut(F,te,j){j===void 0&&(G===null?j=n.TEXTURE0+O-1:j=G);let ue=J[j];ue===void 0&&(ue={type:void 0,texture:void 0},J[j]=ue),(ue.type!==F||ue.texture!==te)&&(G!==j&&(n.activeTexture(j),G=j),n.bindTexture(F,te||Ae[F]),ue.type=F,ue.texture=te)}function z(){let F=J[G];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function nn(){try{n.compressedTexImage2D(...arguments)}catch(F){De("WebGLState:",F)}}function ht(){try{n.compressedTexImage3D(...arguments)}catch(F){De("WebGLState:",F)}}function dt(){try{n.texSubImage2D(...arguments)}catch(F){De("WebGLState:",F)}}function pe(){try{n.texSubImage3D(...arguments)}catch(F){De("WebGLState:",F)}}function xt(){try{n.compressedTexSubImage2D(...arguments)}catch(F){De("WebGLState:",F)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(F){De("WebGLState:",F)}}function Oe(){try{n.texStorage2D(...arguments)}catch(F){De("WebGLState:",F)}}function P(){try{n.texStorage3D(...arguments)}catch(F){De("WebGLState:",F)}}function E(){try{n.texImage2D(...arguments)}catch(F){De("WebGLState:",F)}}function W(){try{n.texImage3D(...arguments)}catch(F){De("WebGLState:",F)}}function ie(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function ne(F,te){d[F]!==te&&(n.pixelStorei(F,te),d[F]=te)}function ae(F){Z.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function de(F){re.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),re.copy(F))}function Q(F,te){let j=c.get(te);j===void 0&&(j=new WeakMap,c.set(te,j));let ue=j.get(F);ue===void 0&&(ue=n.getUniformBlockIndex(te,F.name),n.uniformBlockBinding(te,ue,ue),j.set(F,ue))}function ee(F,te,j){let oe=c.get(te).get(F);l[oe]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,oe,j),l[oe]=j)}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},G=null,J={},h={},l={},f=new WeakMap,p=[],y=null,m=!1,g=null,_=null,b=null,M=null,S=null,T=null,v=null,x=new Fe(0,0,0),R=0,w=!1,I=null,L=null,D=null,N=null,B=null,Z.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Le,bindFramebuffer:pt,drawBuffers:Ce,useProgram:Ke,setBlending:rt,setMaterial:gt,setFlipSided:Rt,setCullFace:Ne,setLineWidth:ot,setPolygonOffset:ut,setScissorTest:qt,activeTexture:Ct,bindTexture:Ut,unbindTexture:z,compressedTexImage2D:nn,compressedTexImage3D:ht,texImage2D:E,texImage3D:W,pixelStorei:ne,getParameter:ie,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Oe,texStorage3D:P,texSubImage2D:dt,texSubImage3D:pe,compressedTexSubImage2D:xt,compressedTexSubImage3D:Re,scissor:ae,viewport:de,reset:ce}}function jS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap,d=new Set,h,f=new WeakMap,p=new Set,y=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return m?new OffscreenCanvas(P,E):Qs("canvas")}function _(P,E,W){let ie=1,ne=Oe(P);if((ne.width>W||ne.height>W)&&(ie=W/Math.max(ne.width,ne.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ae=Math.floor(ie*ne.width),de=Math.floor(ie*ne.height);h===void 0&&(h=g(ae,de));let Q=E?g(ae,de):h;return Q.width=ae,Q.height=de,Q.getContext("2d").drawImage(P,0,0,ae,de),Pe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ae+"x"+de+")."),Q}else return"data"in P&&Pe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function b(P){return P.generateMipmaps}function M(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(P,E,W,ie,ne,ae=!1){if(P!==null){if(n[P]!==void 0)return n[P];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de;ie&&(de=e.get("EXT_texture_norm16"),de||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===n.RED&&(W===n.FLOAT&&(Q=n.R32F),W===n.HALF_FLOAT&&(Q=n.R16F),W===n.UNSIGNED_BYTE&&(Q=n.R8),W===n.UNSIGNED_SHORT&&de&&(Q=de.R16_EXT),W===n.SHORT&&de&&(Q=de.R16_SNORM_EXT)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.R8UI),W===n.UNSIGNED_SHORT&&(Q=n.R16UI),W===n.UNSIGNED_INT&&(Q=n.R32UI),W===n.BYTE&&(Q=n.R8I),W===n.SHORT&&(Q=n.R16I),W===n.INT&&(Q=n.R32I)),E===n.RG&&(W===n.FLOAT&&(Q=n.RG32F),W===n.HALF_FLOAT&&(Q=n.RG16F),W===n.UNSIGNED_BYTE&&(Q=n.RG8),W===n.UNSIGNED_SHORT&&de&&(Q=de.RG16_EXT),W===n.SHORT&&de&&(Q=de.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RG8UI),W===n.UNSIGNED_SHORT&&(Q=n.RG16UI),W===n.UNSIGNED_INT&&(Q=n.RG32UI),W===n.BYTE&&(Q=n.RG8I),W===n.SHORT&&(Q=n.RG16I),W===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),W===n.UNSIGNED_INT&&(Q=n.RGB32UI),W===n.BYTE&&(Q=n.RGB8I),W===n.SHORT&&(Q=n.RGB16I),W===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),W===n.UNSIGNED_INT&&(Q=n.RGBA32UI),W===n.BYTE&&(Q=n.RGBA8I),W===n.SHORT&&(Q=n.RGBA16I),W===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&(W===n.UNSIGNED_SHORT&&de&&(Q=de.RGB16_EXT),W===n.SHORT&&de&&(Q=de.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),E===n.RGBA){let ee=ae?Ks:$e.getTransfer(ne);W===n.FLOAT&&(Q=n.RGBA32F),W===n.HALF_FLOAT&&(Q=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Q=ee===et?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&de&&(Q=de.RGBA16_EXT),W===n.SHORT&&de&&(Q=de.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(P,E){let W;return P?E===null||E===gn||E===ki?W=n.DEPTH24_STENCIL8:E===yn?W=n.DEPTH32F_STENCIL8:E===bs&&(W=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gn||E===ki?W=n.DEPTH_COMPONENT24:E===yn?W=n.DEPTH_COMPONENT32F:E===bs&&(W=n.DEPTH_COMPONENT16),W}function x(P,E){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==wt&&P.minFilter!==Vt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){let E=new WeakRef(P);i.get(P).__ref=E,p.add(E),y.register(P,E,E)}function w(P){let E=i.get(P).__ref;E!==void 0&&(p.delete(E),y.unregister(E))}function I(P){D(P.target)}function L(P){N(P.target)}function D(P){P.removeEventListener("dispose",I),w(P),O(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&d.delete(P)}function N(P){P.removeEventListener("dispose",L),w(P),Y(P)}function B(){for(let P of p){let E=P.deref();E!==void 0&&(E.isRenderTarget===!0?N(E):D(E))}p.clear(),d.clear()}function O(P){let E=i.get(P);if(E.__webglInit===void 0)return;let W=P.source,ie=f.get(W);if(ie){let ne=ie[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&V(P),Object.keys(ie).length===0&&f.delete(W)}i.remove(P)}function V(P){let E=i.get(P);n.deleteTexture(E.__webglTexture);let W=P.source,ie=f.get(W);delete ie[E.__cacheKey],o.memory.textures--}function Y(P){let E=i.get(P);E.__depthDisposeCallback&&E.__depthDisposeCallback();let W=P.depthTexture;if(W&&W.renderTarget===P&&D(W),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ae=0;ae<E.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(E.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[ne]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ie=P.textures;for(let ne=0,ae=ie.length;ne<ae;ne++){let de=i.get(ie[ne]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(ie[ne])}i.remove(P)}let U=0;function G(){U=0}function J(){return U}function K(P){U=P}function _e(){let P=U;return P>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,P}function Z(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.mipmapsAutoUpdate),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function re(P,E){let W=i.get(P);if(P.isVideoTexture&&xt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let ie=P.image;if(ie===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(W,P,E);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function xe(P,E){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){gt(W,P,E);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function Ae(P,E){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){gt(W,P,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function me(P,E){let W=i.get(P);if(P.version>0&&W.__version!==P.version){Rt(W,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}let Le={[Lo]:n.REPEAT,[Tn]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},pt={[wt]:n.NEAREST,[vm]:n.NEAREST_MIPMAP_NEAREST,[mr]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[oa]:n.LINEAR_MIPMAP_NEAREST,[Zn]:n.LINEAR_MIPMAP_LINEAR},Ce={[Sm]:n.NEVER,[Au]:n.ALWAYS,[Em]:n.LESS,[Eu]:n.LEQUAL,[Tm]:n.EQUAL,[Tu]:n.GEQUAL,[Am]:n.GREATER,[wm]:n.NOTEQUAL};function Ke(P,E){if(E.type===yn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Vt||E.magFilter===oa||E.magFilter===mr||E.magFilter===Zn||E.minFilter===Vt||E.minFilter===oa||E.minFilter===mr||E.minFilter===Zn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Le[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Le[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Le[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,pt[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,pt[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wt||E.minFilter!==mr&&E.minFilter!==Zn||E.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ze(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",I),R(E));let ie=E.source,ne=f.get(ie);ne===void 0&&(ne={},f.set(ie,ne));let ae=Z(E);if(ae!==P.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ne[ae].usedTimes++;let de=ne[P.__cacheKey];de!==void 0&&(ne[P.__cacheKey].usedTimes--,de.usedTimes===0&&V(E)),P.__cacheKey=ae,P.__webglTexture=ne[ae].texture}return W}function Ve(P,E,W){return Math.floor(Math.floor(P/W)/E)}function rt(P,E,W,ie){let ae=P.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,W,ie,E.data);else{ae.sort((F,te)=>F.start-te.start);let de=0;for(let F=1;F<ae.length;F++){let te=ae[de],j=ae[F],ue=te.start+te.count,oe=Ve(j.start,E.width,4),le=Ve(te.start,E.width,4);j.start<=ue+1&&oe===le&&Ve(j.start+j.count-1,E.width,4)===oe?te.count=Math.max(te.count,j.start+j.count-te.start):(++de,ae[de]=j)}ae.length=de+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let F=0,te=ae.length;F<te;F++){let j=ae[F],ue=Math.floor(j.start/4),oe=Math.ceil(j.count/4),le=ue%E.width,we=Math.floor(ue/E.width),Ge=oe,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,we),t.texSubImage2D(n.TEXTURE_2D,0,le,we,Ge,se,W,ie,E.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function gt(P,E,W){let ie=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=n.TEXTURE_3D);let ne=Ze(P,E),ae=E.source;t.bindTexture(ie,P.__webglTexture,n.TEXTURE0+W);let de=i.get(ae);if(ae.version!==de.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let se=$e.getPrimaries($e.workingColorSpace),Ie=E.colorSpace===jn?null:$e.getPrimaries(E.colorSpace),ke=E.colorSpace===jn||se===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=_(E.image,!1,s.maxTextureSize);ee=Re(E,ee);let ce=r.convert(E.format,E.colorSpace),F=r.convert(E.type),te=T(E.internalFormat,ce,F,E.normalized,E.colorSpace,E.isVideoTexture);Ke(ie,E);let j,ue=E.mipmaps,oe=E.isVideoTexture!==!0,le=de.__version===void 0||ne===!0,we=ae.dataReady,Ge=x(E,ee);if(E.isDepthTexture)te=v(E.format===Jn,E.type),le&&(oe?t.texStorage2D(n.TEXTURE_2D,1,te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,ce,F,null));else if(E.isDataTexture)if(ue.length>0){oe&&le&&t.texStorage2D(n.TEXTURE_2D,Ge,te,ue[0].width,ue[0].height);for(let se=0,Ie=ue.length;se<Ie;se++)j=ue[se],oe?we&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,j.width,j.height,ce,F,j.data):t.texImage2D(n.TEXTURE_2D,se,te,j.width,j.height,0,ce,F,j.data);E.generateMipmaps=!1}else oe?(le&&t.texStorage2D(n.TEXTURE_2D,Ge,te,ee.width,ee.height),we&&rt(E,ee,ce,F)):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,ce,F,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,te,ue[0].width,ue[0].height,ee.depth);for(let se=0,Ie=ue.length;se<Ie;se++)if(j=ue[se],E.format!==vn)if(ce!==null)if(oe){if(we)if(E.layerUpdates.size>0){let ke=Du(j.width,j.height,E.format,E.type);for(let ge of E.layerUpdates){let nt=j.data.subarray(ge*ke/j.data.BYTES_PER_ELEMENT,(ge+1)*ke/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ge,j.width,j.height,1,ce,nt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,j.width,j.height,ee.depth,ce,j.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,te,j.width,j.height,ee.depth,0,j.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,j.width,j.height,ee.depth,ce,F,j.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,te,j.width,j.height,ee.depth,0,ce,F,j.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{oe&&le&&t.texStorage2D(n.TEXTURE_2D,Ge,te,ue[0].width,ue[0].height);for(let se=0,Ie=ue.length;se<Ie;se++)j=ue[se],E.format!==vn?ce!==null?oe?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,j.width,j.height,ce,j.data):t.compressedTexImage2D(n.TEXTURE_2D,se,te,j.width,j.height,0,j.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?we&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,j.width,j.height,ce,F,j.data):t.texImage2D(n.TEXTURE_2D,se,te,j.width,j.height,0,ce,F,j.data)}else if(E.isDataArrayTexture)if(oe){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,te,ee.width,ee.height,ee.depth),we)if(E.layerUpdates.size>0){let se=Du(ee.width,ee.height,E.format,E.type);for(let Ie of E.layerUpdates){let ke=ee.data.subarray(Ie*se/ee.data.BYTES_PER_ELEMENT,(Ie+1)*se/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,ee.width,ee.height,1,ce,F,ke)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,F,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,ce,F,ee.data);else if(E.isData3DTexture)oe?(le&&t.texStorage3D(n.TEXTURE_3D,Ge,te,ee.width,ee.height,ee.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,F,ee.data)):t.texImage3D(n.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,ce,F,ee.data);else if(E.isFramebufferTexture){if(le)if(oe)t.texStorage2D(n.TEXTURE_2D,Ge,te,ee.width,ee.height);else{let se=ee.width,Ie=ee.height;for(let ke=0;ke<Ge;ke++)t.texImage2D(n.TEXTURE_2D,ke,te,se,Ie,0,ce,F,null),se>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ee.parentNode!==se){se.appendChild(ee),d.add(E),se.onpaint=Ie=>{let ke=Ie.changedElements;for(let ge of d)ke.includes(ge.image)&&(ge.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let ke=n.RGBA,ge=n.RGBA,nt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,ge,nt,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ue.length>0){if(oe&&le){let se=Oe(ue[0]);t.texStorage2D(n.TEXTURE_2D,Ge,te,se.width,se.height)}for(let se=0,Ie=ue.length;se<Ie;se++)j=ue[se],oe?we&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ce,F,j):t.texImage2D(n.TEXTURE_2D,se,te,ce,F,j);E.generateMipmaps=!1}else if(oe){if(le){let se=Oe(ee);t.texStorage2D(n.TEXTURE_2D,Ge,te,se.width,se.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,F,ee)}else t.texImage2D(n.TEXTURE_2D,0,te,ce,F,ee);b(E)&&E.mipmapsAutoUpdate===!0&&M(ie),de.__version=ae.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Rt(P,E,W){if(E.image.length!==6)return;let ie=Ze(P,E),ne=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);let ae=i.get(ne);if(ne.version!==ae.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);let de=$e.getPrimaries($e.workingColorSpace),Q=E.colorSpace===jn?null:$e.getPrimaries(E.colorSpace),ee=E.colorSpace===jn||de===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ce=E.isCompressedTexture||E.image[0].isCompressedTexture,F=E.image[0]&&E.image[0].isDataTexture,te=[];for(let ge=0;ge<6;ge++)!ce&&!F?te[ge]=_(E.image[ge],!0,s.maxCubemapSize):te[ge]=F?E.image[ge].image:E.image[ge],te[ge]=Re(E,te[ge]);let j=te[0],ue=r.convert(E.format,E.colorSpace),oe=r.convert(E.type),le=T(E.internalFormat,ue,oe,E.normalized,E.colorSpace),we=E.isVideoTexture!==!0,Ge=ae.__version===void 0||ie===!0,se=ne.dataReady,Ie=x(E,j);Ke(n.TEXTURE_CUBE_MAP,E);let ke;if(E.isDepthTexture){if(le=v(E.format===Jn,E.type),Ge)if(we)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,le,j.width,j.height);else for(let ge=0;ge<6;ge++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,j.width,j.height,0,ue,oe,null)}else if(ce){we&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,le,j.width,j.height);for(let ge=0;ge<6;ge++){ke=te[ge].mipmaps;for(let nt=0;nt<ke.length;nt++){let Et=ke[nt];E.format!==vn?ue!==null?we?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt,0,0,Et.width,Et.height,ue,Et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt,le,Et.width,Et.height,0,Et.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt,0,0,Et.width,Et.height,ue,oe,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt,le,Et.width,Et.height,0,ue,oe,Et.data)}}}else{if(ke=E.mipmaps,we&&Ge){ke.length>0&&Ie++;let ge=Oe(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(F){we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,te[ge].width,te[ge].height,ue,oe,te[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,te[ge].width,te[ge].height,0,ue,oe,te[ge].data);for(let nt=0;nt<ke.length;nt++){let ii=ke[nt].image[ge].image;we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt+1,0,0,ii.width,ii.height,ue,oe,ii.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt+1,le,ii.width,ii.height,0,ue,oe,ii.data)}}else{we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue,oe,te[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,ue,oe,te[ge]);for(let nt=0;nt<ke.length;nt++){let Et=ke[nt];we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt+1,0,0,ue,oe,Et.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt+1,le,ue,oe,Et.image[ge])}}}b(E)&&E.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ae.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ne(P,E,W,ie,ne,ae){let de=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),ee=T(W.internalFormat,de,Q,W.normalized,W.colorSpace),ce=i.get(E),F=i.get(W);if(F.__renderTarget=E,!ce.__hasExternalTextures){let te=Math.max(1,E.width>>ae),j=Math.max(1,E.height>>ae);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ae,ee,te,j,E.depth,0,de,Q,null):t.texImage2D(ne,ae,ee,te,j,0,de,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ne,F.__webglTexture,0,dt(E)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ne,F.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(P,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){let ie=E.depthTexture,ne=ie&&ie.isDepthTexture?ie.type:null,ae=v(E.stencilBuffer,ne),de=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(E),ae,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(E),ae,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,P)}else{let ie=E.textures;for(let ne=0;ne<ie.length;ne++){let ae=ie[ne],de=r.convert(ae.format,ae.colorSpace),Q=r.convert(ae.type),ee=T(ae.internalFormat,de,Q,ae.normalized,ae.colorSpace);pe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(E),ee,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(E),ee,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ee,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ut(P,E,W){let ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(E.depthTexture);ne.__renderTarget=E;let ae=ie?E.depthTexture.image[0]:E.depthTexture.image;(!ne.__webglTexture||ae.width!==E.width||ae.height!==E.height)&&(ae.width=E.width,ae.height=E.height,E.depthTexture.needsUpdate=!0),ie?me(E.depthTexture,0):re(E.depthTexture,0);let de=ne.__webglTexture,Q=dt(E),ee=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,ce=E.depthTexture.format===Jn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===qn)pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ee,de,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ce,ee,de,0);else if(E.depthTexture.format===Jn)pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ee,de,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ce,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(P){let E=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let ie=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){let ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",ne)};ie.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=ie}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ie=0;ie<6;ie++)ut(E.__webglFramebuffer[ie],P,ie);else P.texture.mipmaps.length>0?ut(E.__webglFramebuffer[0],P,0):ut(E.__webglFramebuffer,P,0);else if(W){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=n.createRenderbuffer(),ot(E.__webglDepthbuffer[ie],P,!1);else{let ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ae)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ot(E.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(P,E,W){let ie=i.get(P);E!==void 0&&Ne(ie.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&qt(P)}function Ut(P){let E=P.texture,W=i.get(P),ie=i.get(E);P.addEventListener("dispose",L),R(P);let ne=P.textures,ae=P.isWebGLCubeRenderTarget===!0,de=ne.length>1;if(de||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=E.version,o.memory.textures++),ae){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let ee=0;ee<E.mipmaps.length;ee++)W.__webglFramebuffer[Q][ee]=n.createFramebuffer()}else W.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)W.__webglFramebuffer[Q]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(de)for(let Q=0,ee=ne.length;Q<ee;Q++){let ce=i.get(ne[Q]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&pe(P)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<ne.length;Q++){let ee=ne[Q];W.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);let ce=r.convert(ee.format,ee.colorSpace),F=r.convert(ee.type),te=T(ee.internalFormat,ce,F,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),j=dt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,te,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ne(W.__webglFramebuffer[Q][ee],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else Ne(W.__webglFramebuffer[Q],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);b(E)?M(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(de){for(let Q=0,ee=ne.length;Q<ee;Q++){let ce=ne[Q],F=i.get(ce),te=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,F.__webglTexture),Ke(te,ce),Ne(W.__webglFramebuffer,P,ce,n.COLOR_ATTACHMENT0+Q,te,0),b(ce)&&M(te)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,ie.__webglTexture),Ke(Q,E),E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ne(W.__webglFramebuffer[ee],P,E,n.COLOR_ATTACHMENT0,Q,ee);else Ne(W.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,Q,0);b(E)?M(Q):E.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&qt(P)}function z(P){let E=P.textures;for(let W=0,ie=E.length;W<ie;W++){let ne=E[W];if(b(ne)&&ne.mipmapsAutoUpdate===!0){let ae=S(P),de=i.get(ne).__webglTexture;t.bindTexture(ae,de),M(ae),t.unbindTexture()}}}let nn=[];function ht(P){if(P.samples>0){if(pe(P)===!1){let E=P.textures,W=P.width,ie=P.height,ne=n.COLOR_BUFFER_BIT,ae=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(P),Q=E.length>1;if(Q)for(let ce=0;ce<E.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ce=0;ce<E.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let F=i.get(E[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,W,ie,0,0,W,ie,ne,n.NEAREST),l===!0&&(nn.length=0,nn.push(n.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&nn.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ce=0;ce<E.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let F=i.get(E[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,F,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function dt(P){return Math.min(s.maxSamples,P.samples)}function pe(P){let E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(P){let E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Re(P,E){let W=P.colorSpace,ie=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==js&&W!==jn&&($e.getTransfer(W)===et?(ie!==vn||ne!==$t)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",W)),E}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=_e,this.resetTextureUnits=G,this.getTextureUnits=J,this.setTextureUnits=K,this.setTexture2D=re,this.setTexture2DArray=xe,this.setTexture3D=Ae,this.setTextureCube=me,this.rebindTextures=Ct,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=pe,this.dispose=B}function KS(n,e){function t(i,s=jn){let r,o=$e.getTransfer(s);if(i===$t)return n.UNSIGNED_BYTE;if(i===la)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ca)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yu)return n.BYTE;if(i===_u)return n.SHORT;if(i===bs)return n.UNSIGNED_SHORT;if(i===aa)return n.INT;if(i===gn)return n.UNSIGNED_INT;if(i===yn)return n.FLOAT;if(i===_n)return n.HALF_FLOAT;if(i===bu)return n.ALPHA;if(i===Mu)return n.RGB;if(i===vn)return n.RGBA;if(i===qn)return n.DEPTH_COMPONENT;if(i===Jn)return n.DEPTH_STENCIL;if(i===Su)return n.RED;if(i===ua)return n.RED_INTEGER;if(i===Mi)return n.RG;if(i===ha)return n.RG_INTEGER;if(i===da)return n.RGBA_INTEGER;if(i===gr||i===yr||i===_r||i===vr)if(o===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fa||i===pa||i===ma||i===ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===_a||i===va||i===xa||i===ba||i===xr||i===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===_a)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===va)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xa)return r.COMPRESSED_R11_EAC;if(i===ba)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xr)return r.COMPRESSED_RG11_EAC;if(i===Ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sa||i===Ea||i===Ta||i===Aa||i===wa||i===Ca||i===Ia||i===Ra||i===Na||i===Pa||i===Da||i===La||i===Ba||i===Oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ea)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ta)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Aa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ca)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ia)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ra)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Na)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Da)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===La)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ba)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ua||i===Fa||i===ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ua)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===za||i===Va||i===br||i===Ga)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ki?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ar(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new In({vertexShader:QS,fragmentShader:eE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends wn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,y=typeof XRWebGLBinding<"u",m=new Gu,g={},_=t.getContextAttributes(),b=null,M=null,S=[],T=[],v=new We,x=null,R=null,w=new zt;w.viewport=new ft;let I=new zt;I.viewport=new ft;let L=[w,I],D=new ia,N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=S[Z];return re===void 0&&(re=new ds,S[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=S[Z];return re===void 0&&(re=new ds,S[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=S[Z];return re===void 0&&(re=new ds,S[Z]=re),re.getHandSpace()};function O(Z){let re=T.indexOf(Z.inputSource);if(re===-1)return;let xe=S[re];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||o),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<S.length;Z++){let re=T[Z];re!==null&&(T[Z]=null,S[Z].disconnect(re))}N=null,B=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(b),f=null,h=null,d=null,s=null,M=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(v.width,v.height,!1),R!==null){let Z=R.camera;Z.fov=R.fov,Z.zoom=R.zoom,Z.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ae=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=_.stencil?Jn:qn,Ae=_.stencil?ki:gn);let Le={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Qt(h.textureWidth,h.textureHeight,{format:vn,type:$t,depthTexture:new $n(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Qt(f.framebufferWidth,f.framebufferHeight,{format:vn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Z){for(let re=0;re<Z.removed.length;re++){let xe=Z.removed[re],Ae=T.indexOf(xe);Ae>=0&&(T[Ae]=null,S[Ae].disconnect(xe))}for(let re=0;re<Z.added.length;re++){let xe=Z.added[re],Ae=T.indexOf(xe);if(Ae===-1){for(let Le=0;Le<S.length;Le++)if(Le>=T.length){T.push(xe),Ae=Le;break}else if(T[Le]===null){T[Le]=xe,Ae=Le;break}if(Ae===-1)break}let me=S[Ae];me&&me.connect(xe)}}function U(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,xe=Z.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),D.near=I.near=w.near=re,D.far=I.far=w.far=xe,(N!==D.near||B!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,B=D.far),D.layers.mask=Z.layers.mask|6,w.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;let Ae=Z.parent,me=D.cameras;U(D,Ae);for(let Le=0;Le<me.length;Le++)U(me[Le],Ae);D.projectionMatrix.copy(w.projectionMatrix),D.projectionMatrixInverse.copy(w.projectionMatrixInverse),R===null&&Z.isPerspectiveCamera&&(R={camera:Z,fov:Z.fov,zoom:Z.zoom}),G(Z,D,Ae)};function G(Z,re,xe){xe===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Uo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Z){return g[Z]};let J=null;function K(Z,re){if(u=re.getViewerPose(c||o),p=re,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ae=!1;xe.length!==D.cameras.length&&(D.cameras.length=0,Ae=!0);for(let Ce=0;Ce<xe.length;Ce++){let Ke=xe[Ce],Ze=null;if(f!==null)Ze=f.getViewport(Ke);else{let rt=d.getViewSubImage(h,Ke);Ze=rt.viewport,Ce===0&&(e.setRenderTargetTextures(M,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(M))}let Ve=L[Ce];Ve===void 0&&(Ve=new zt,Ve.layers.enable(Ce),Ve.viewport=new ft,L[Ce]=Ve),Ve.matrix.fromArray(Ke.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ke.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ce===0&&(D.matrix.copy(Ve.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ae===!0&&D.cameras.push(Ve)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Ce=d.getDepthInformation(xe[0]);Ce&&Ce.isValid&&Ce.texture&&m.init(Ce,s.renderState)}if(me&&me.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Ce=0;Ce<xe.length;Ce++){let Ke=xe[Ce].camera;if(Ke){let Ze=g[Ke];Ze||(Ze=new ar,g[Ke]=Ze);let Ve=d.getCameraImage(Ke);Ze.sourceTexture=Ve}}}}for(let xe=0;xe<S.length;xe++){let Ae=T[xe],me=S[xe];Ae!==null&&me!==void 0&&me.update(Ae,re,c||o)}J&&J(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),p=null}let _e=new rg;_e.setAnimationLoop(K),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}},tE=new lt,mg=new Be;mg.set(-1,0,0,0,1,0,0,0,1);function nE(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Ru(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,b,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Wt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Wt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),b=_.envMap,M=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Wt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iE(n,e,t,i){let s={},r={};function o(_,b){let M=b.program;i.uniformBlockBinding(_,M,s[_.id])}function a(_,b){let M=s[_.id];M===void 0&&(p(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",m));let S=b.program;i.updateUBOMapping(_,S);let T=e.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let b=n.createBuffer(),M=_.__size,S=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,M,S),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],M=_.uniforms,S=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,v=M.length;T<v;T++){let x=M[T];if(Array.isArray(x))for(let R=0,w=x.length;R<w;R++)u(x[R],T,R,S);else u(x,T,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,b,M,S){if(h(_,b,M,S)===!0){let T=_.__offset,v=_.value;if(Array.isArray(v)){let x=0;for(let R=0;R<v.length;R++){let w=v[R],I=y(w,!0);d(w,_.__data,x),x+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,_.__data)}}function d(_,b,M){typeof _=="number"||typeof _=="boolean"?b[M]=_:_.isMatrix3?(b[M]=_.elements[0],b[M+1]=_.elements[1],b[M+2]=_.elements[2],b[M+3]=0,b[M+4]=_.elements[3],b[M+5]=_.elements[4],b[M+6]=_.elements[5],b[M+7]=0,b[M+8]=_.elements[6],b[M+9]=_.elements[7],b[M+10]=_.elements[8],b[M+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-M),M):_.toArray(b,M)}function h(_,b,M,S){let T=_.value,v=b+"_"+M;if(Array.isArray(T)){S[v]===void 0&&(S[v]=[]);let x=S[v],R=!1;for(let w=0;w<T.length;w++)f(T[w],x,w)===!0&&(R=!0);return R}return f(T,S,v)}function f(_,b,M){if(b[M]===void 0)return typeof _=="number"||typeof _=="boolean"?b[M]=_:ArrayBuffer.isView(_)?b[M]=_.slice():b[M]=_.clone(),!0;{let S=b[M];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return b[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(S.equals(_)===!1)return S.copy(_),!0}}return!1}function p(_){let b=_.uniforms,M=0,S=16;for(let v=0,x=b.length;v<x;v++){let R=Array.isArray(b[v])?b[v]:[b[v]];for(let w=0,I=R.length;w<I;w++){let L=R[w],D=Array.isArray(L.value)?L.value:[L.value],N=Array.isArray(b[v])||Array.isArray(L.value),B=M;for(let V=0,Y=D.length;V<Y;V++){let U=D[V],G=y(U,N),J=M%S,K=J%G.boundary,_e=J+K;M+=K,_e!==0&&S-_e<G.storage&&(M+=S-_e),V===0&&(B=M),M+=G.storage}let O=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new O((M-B)/Float32Array.BYTES_PER_ELEMENT),L.__offset=B}}let T=M%S;return T>0&&(M+=S-T),_.__size=M,_.__cache={},this}function y(_,b){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){let b=_.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var sE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function rE(){return Pn===null&&(Pn=new Vo(sE,16,16,Mi,_n),Pn.name="DFG_LUT",Pn.minFilter=Vt,Pn.magFilter=Vt,Pn.wrapS=Tn,Pn.wrapT=Tn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var Ya=class{constructor(e={}){let{canvas:t=Im(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=$t}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let y=f,m=new Set([da,ha,ua]),g=new Set([$t,gn,bs,ki,la,ca]),_=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},S=null,T=null,v=[],x=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,I=!1,L=null,D=null,N=null,B=null;this._outputColorSpace=kt;let O=0,V=0,Y=null,U=-1,G=null,J=new ft,K=new ft,_e=null,Z=new Fe(0),re=0,xe=t.width,Ae=t.height,me=1,Le=null,pt=null,Ce=new ft(0,0,xe,Ae),Ke=new ft(0,0,xe,Ae),Ze=!1,Ve=new gi,rt=new Go,gt=!1,Rt=!1,Ne=new lt,ot=new q,ut=new ft,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Ut(){return Y===null?me:1}let z=i;function nn(A,k){return t.getContext(A,k)}let ht,dt,pe,xt,Re,Oe,P,E,W,ie,ne,ae,de,Q,ee,ce,F,te,j,ue,oe,le,we;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ge,!1),z===null){let k="webgl2";if(z=nn(k,A),z===null)throw nn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(A){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),De("WebGLRenderer: "+A.message),A}function Ge(){ht=new gM(z),ht.init(),oe=new KS(z,ht),dt=new rM(z,ht,e,oe),pe=new JS(z,ht),dt.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),D=z.createFramebuffer(),N=z.createFramebuffer(),B=z.createFramebuffer(),xt=new vM(z),Re=new OS,Oe=new jS(z,ht,pe,Re,dt,oe,xt),P=new mM(w),E=new bv(z),le=new iM(z,E),W=new yM(z,E,xt,le),ie=new bM(z,W,E,le,xt),te=new xM(z,dt,Oe),ee=new oM(Re),ne=new BS(w,P,ht,dt,le,ee),ae=new nE(w,Re),de=new FS,Q=new WS(ht),F=new nM(w,P,pe,ie,p,l),ce=new ZS(w,ie,dt),we=new iE(z,xt,dt,pe),j=new sM(z,ht,xt),ue=new _M(z,ht,xt),xt.programs=ne.programs,w.capabilities=dt,w.extensions=ht,w.properties=Re,w.renderLists=de,w.shadowMap=ce,w.state=pe,w.info=xt}y!==$t&&(R=new SM(y,t.width,t.height,a,s,r));let se=new Hu(w,z);this.xr=se,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(A){A!==void 0&&(me=A,this.setSize(xe,Ae,!1))},this.getSize=function(A){return A.set(xe,Ae)},this.setSize=function(A,k,$=!0){if(se.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=A,Ae=k,t.width=Math.floor(A*me),t.height=Math.floor(k*me),$===!0&&(t.style.width=A+"px",t.style.height=k+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(xe*me,Ae*me).floor()},this.setDrawingBufferSize=function(A,k,$){xe=A,Ae=k,me=$,t.width=Math.floor(A*$),t.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(y===$t){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(Ce)},this.setViewport=function(A,k,$,H){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,k,$,H),pe.viewport(J.copy(Ce).multiplyScalar(Ut()).round())},this.getScissor=function(A){return A.copy(Ke)},this.setScissor=function(A,k,$,H){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,k,$,H),pe.scissor(K.copy(Ke).multiplyScalar(Ut()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){pe.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){Le=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,$=!0){let H=0;if(A){let X=!1;if(Y!==null){let fe=Y.texture.format;X=m.has(fe)}if(X){let fe=Y.texture.type,be=g.has(fe),he=F.getClearColor(),ve=F.getClearAlpha(),Te=he.r,Ue=he.g,Xe=he.b;be?(_[0]=Te,_[1]=Ue,_[2]=Xe,_[3]=ve,z.clearBufferuiv(z.COLOR,0,_)):(b[0]=Te,b[1]=Ue,b[2]=Xe,b[3]=ve,z.clearBufferiv(z.COLOR,0,b))}else H|=z.COLOR_BUFFER_BIT}k&&(H|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),F.dispose(),de.dispose(),Q.dispose(),Oe.dispose(),Re.dispose(),P.dispose(),ie.dispose(),W.dispose(),le.dispose(),we.dispose(),ne.dispose(),se.dispose(),se.removeEventListener("sessionstart",gh),se.removeEventListener("sessionend",yh),Ti.stop()};function Ie(A){A.preventDefault(),Cu("WebGLRenderer: Context Lost."),I=!0}function ke(){Cu("WebGLRenderer: Context Restored."),I=!1;let A=xt.autoReset,k=ce.enabled,$=ce.autoUpdate,H=ce.needsUpdate,X=ce.type;Ge(),xt.autoReset=A,ce.enabled=k,ce.autoUpdate=$,ce.needsUpdate=H,ce.type=X}function ge(A){De("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nt(A){let k=A.target;k.removeEventListener("dispose",nt),Et(k)}function Et(A){ii(A),Re.remove(A)}function ii(A){let k=Re.get(A).programs;k!==void 0&&(k.forEach(function($){ne.releaseProgram($)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,$,H,X,fe){k===null&&(k=qt);let be=X.isMesh&&X.matrixWorld.determinantAffine()<0,he=Kg(A,k,$,H,X);pe.setMaterial(H,be);let ve=$.index,Te=1;if(H.wireframe===!0){if(ve=W.getWireframeAttribute($),ve===void 0)return;Te=2}let Ue=$.drawRange,Xe=$.attributes.position,Se=Ue.start*Te,qe=(Ue.start+Ue.count)*Te;fe!==null&&(Se=Math.max(Se,fe.start*Te),qe=Math.min(qe,(fe.start+fe.count)*Te)),ve!==null?(Se=Math.max(Se,0),qe=Math.min(qe,ve.count)):Xe!=null&&(Se=Math.max(Se,0),qe=Math.min(qe,Xe.count));let _t=qe-Se;if(_t<0||_t===1/0)return;le.setup(X,H,he,$,ve);let st,it=j;if(ve!==null&&(st=E.get(ve),it=ue,it.setIndex(st)),X.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*Ut()),it.setMode(z.LINES)):it.setMode(z.TRIANGLES);else if(X.isLine){let Nt=H.linewidth;Nt===void 0&&(Nt=1),pe.setLineWidth(Nt*Ut()),X.isLineSegments?it.setMode(z.LINES):X.isLineLoop?it.setMode(z.LINE_LOOP):it.setMode(z.LINE_STRIP)}else X.isPoints?it.setMode(z.POINTS):X.isSprite&&it.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))it.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Nt=X._multiDrawStarts,Ee=X._multiDrawCounts,Ft=X._multiDrawCount,Qe=ve?E.get(ve).bytesPerElement:1,Ai=Re.get(H).currentProgram.getUniforms();for(let Pt=0;Pt<Ft;Pt++)Ai.setValue(z,"_gl_DrawID",Pt),it.render(Nt[Pt]/Qe,Ee[Pt])}else if(X.isInstancedMesh)it.renderInstances(Se,_t,X.count);else if($.isInstancedBufferGeometry){let Nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ee=Math.min($.instanceCount,Nt);it.renderInstances(Se,_t,Ee)}else it.render(Se,_t)};function mh(A,k,$,H){L!==null&&A.isNodeMaterial&&L.setObject(H,A),gt===!0&&ee.setState(A,$,!1),A.transparent===!0&&A.side===Rn&&A.forceSinglePass===!1?(A.side=Wt,A.needsUpdate=!0,Ns(A,k,H),A.side=bi,A.needsUpdate=!0,Ns(A,k,H),A.side=Rn):Ns(A,k,H)}this.compile=function(A,k,$=null){$===null&&($=A),L!==null&&L.renderStart(A,k,$),T=Q.get($),T.init(k),x.push(T),$.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),A!==$&&A.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),Rt=this.localClippingEnabled,gt=ee.init(this.clippingPlanes,Rt),gt===!0&&ee.setGlobalState(this.clippingPlanes,k),L!==null&&ce.render(T.state.shadowsArray,$,k);let H=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let fe=X.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){let he=fe[be];mh(he,$,k,X),H.add(he)}else mh(fe,$,k,X),H.add(fe)}),T=x.pop(),L!==null&&L.renderEnd(),H},this.compileAsync=function(A,k,$=null){let H=this.compile(A,k,$);return new Promise(X=>{function fe(){if(H.forEach(function(be){let ve=Re.get(be).currentProgram;(ve===void 0||ve.isReady())&&H.delete(be)}),H.size===0){X(A);return}setTimeout(fe,10)}ht.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let dl=null;function Jg(A){dl&&dl(A)}function gh(){Ti.stop()}function yh(){Ti.start()}let Ti=new rg;Ti.setAnimationLoop(Jg),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){dl=A,se.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},se.addEventListener("sessionstart",gh),se.addEventListener("sessionend",yh),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(A,k);let $=se.enabled===!0&&se.isPresenting===!0,H=R!==null&&(Y===null||$)&&R.begin(w,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,k,Y),T=Q.get(A,x.length),T.init(k),T.state.textureUnits=Oe.getTextureUnits(),x.push(T),Ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?rt.setFromArrayCamera(k):Ve.setFromProjectionMatrix(Ne,an,k.reversedDepth),Rt=this.localClippingEnabled,gt=ee.init(this.clippingPlanes,Rt),S=de.get(A,v.length),S.init(),v.push(S),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let be=w.xr.getDepthSensingMesh();be!==null&&fl(be,k,-1/0,w.sortObjects)}fl(A,k,0,w.sortObjects),S.finish(),L!==null&&L.updateLights(T.state.lightsArray),w.sortObjects===!0&&S.sort(Le,pt),Ct=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ct&&F.addToRenderList(S,A),this.info.autoReset===!0&&this.info.reset(),gt===!0&&ee.beginShadows();let X=T.state.shadowsArray;if(ce.render(X,A,k),gt===!0&&ee.endShadows(),(H&&R.hasRenderPass())===!1){let be=S.opaque,he=S.transmissive;if(T.setupLights(),k.isArrayCamera){let ve=k.cameras;if(he.length>0)for(let Te=0,Ue=ve.length;Te<Ue;Te++){let Xe=ve[Te];vh(be,he,A,Xe)}Ct&&F.render(A);for(let Te=0,Ue=ve.length;Te<Ue;Te++){let Xe=ve[Te];_h(S,A,Xe,Xe.viewport)}}else he.length>0&&vh(be,he,A,k),Ct&&F.render(A),_h(S,A,k)}Y!==null&&V===0&&(Oe.updateMultisampleRenderTarget(Y),Oe.updateRenderTargetMipmap(Y)),H&&R.end(w),A.isScene===!0&&A.onAfterRender(w,A,k),le.resetDefaultState(),U=-1,G=null,x.pop(),x.length>0?(T=x[x.length-1],Oe.setTextureUnits(T.state.textureUnits),gt===!0&&ee.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?S=v[v.length-1]:S=null,L!==null&&L.renderEnd()};function fl(A,k,$,H){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){let be=k.isArrayCamera?rt:Ve;if(!A.frustumCulled||A.intersectsFrustum(be)){H&&ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ne);let he=ie.update(A),ve=A.material;ve.visible&&S.push(A,he,ve,$,ut.z,null,k)}}else if(A.isMesh||A.isLine||A.isPoints){let be=k.isArrayCamera?rt:Ve;if(!A.frustumCulled||A.intersectsFrustum(be)){let he=ie.update(A),ve=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ut.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ut.copy(he.boundingSphere.center)),ut.applyMatrix4(A.matrixWorld).applyMatrix4(Ne)),Array.isArray(ve)){let Te=he.groups;for(let Ue=0,Xe=Te.length;Ue<Xe;Ue++){let Se=Te[Ue],qe=ve[Se.materialIndex];qe&&qe.visible&&S.push(A,he,qe,$,ut.z,Se,k)}}else ve.visible&&S.push(A,he,ve,$,ut.z,null,k)}}}let fe=A.children;for(let be=0,he=fe.length;be<he;be++)fl(fe[be],k,$,H)}function _h(A,k,$,H){let{opaque:X,transmissive:fe,transparent:be}=A;T.setupLightsView($),gt===!0&&ee.setGlobalState(w.clippingPlanes,$),H&&pe.viewport(J.copy(H)),X.length>0&&Ur(X,k,$),fe.length>0&&Ur(fe,k,$),be.length>0&&Ur(be,k,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function vh(A,k,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let Se=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Qt(1,1,{generateMipmaps:!0,type:Se?_n:$t,minFilter:Zn,samples:Math.max(4,dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let fe=T.state.transmissionRenderTarget[H.id],be=H.viewport||J;fe.setSize(be.z*w.transmissionResolutionScale,be.w*w.transmissionResolutionScale);let he=w.getRenderTarget(),ve=w.getActiveCubeFace(),Te=w.getActiveMipmapLevel();w.setRenderTarget(fe),w.getClearColor(Z),re=w.getClearAlpha(),re<1&&w.setClearColor(16777215,.5),w.clear(),Ct&&F.render($);let Ue=w.toneMapping;w.toneMapping=Nn;let Xe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),gt===!0&&ee.setGlobalState(w.clippingPlanes,H),Ur(A,$,H),Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let qe=0,_t=k.length;qe<_t;qe++){let st=k[qe],{object:it,geometry:Nt,material:Ee,group:Ft}=st;if(Ee.side===Rn&&it.layers.test(H.layers)){let Qe=Ee.side;Ee.side=Wt,Ee.needsUpdate=!0,xh(it,$,H,Nt,Ee,Ft),Ee.side=Qe,Ee.needsUpdate=!0,Se=!0}}Se===!0&&(Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe))}w.setRenderTarget(he,ve,Te),w.setClearColor(Z,re),Xe!==void 0&&(H.viewport=Xe),w.toneMapping=Ue}function Ur(A,k,$){let H=k.isScene===!0?k.overrideMaterial:null;for(let X=0,fe=A.length;X<fe;X++){let be=A[X],{object:he,geometry:ve,group:Te}=be,Ue=be.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),he.layers.test($.layers)&&xh(he,k,$,ve,Ue,Te)}}function xh(A,k,$,H,X,fe){L!==null&&X.isNodeMaterial&&L.setObject(A,X),A.onBeforeRender(w,k,$,H,X,fe),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(w,k,$,H,A,fe),X.transparent===!0&&X.side===Rn&&X.forceSinglePass===!1?(X.side=Wt,X.needsUpdate=!0,w.renderBufferDirect($,k,H,X,A,fe),X.side=bi,X.needsUpdate=!0,w.renderBufferDirect($,k,H,X,A,fe),X.side=Rn):w.renderBufferDirect($,k,H,X,A,fe),A.onAfterRender(w,k,$,H,X,fe)}function bh(A){let k=0;for(let $ of A)$.texture!==null&&k++;return k}function Ns(A,k,$){k.isScene!==!0&&(k=qt);let H=Re.get(A),X=T.state.lights,fe=T.state.shadowsArray,be=X.state.version,he=ne.getParameters(A,X.state,fe,k,$,T.state.lightProbeGridArray),ve=ne.getProgramCacheKey(he),Te=H.programs;H.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,H.fog=k.fog;let Ue=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;H.envMap=P.get(A.envMap||H.environment,Ue),H.envMapRotation=H.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Te===void 0&&(A.addEventListener("dispose",nt),Te=new Map,H.programs=Te,H.programVariants=new Map);let Xe=Te.get(ve);if(Xe!==void 0){if(H.currentProgram===Xe&&H.lightsStateVersion===be)return Sh(A,he),Xe}else he.uniforms=ne.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,$,he),A.onBeforeCompile(he,w),Xe=ne.acquireProgram(he,ve),Te.set(ve,Xe),H.uniforms=he.uniforms;let Se=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Se.clippingPlanes=ee.uniform),Sh(A,he),H.needsLights=ey(A),H.lightsStateVersion=be,H.needsLights&&(Se.ambientLightColor.value=X.state.ambient,Se.lightProbe.value=X.state.probe,Se.sunLights.value=X.state.sun,Se.sunLightShadows.value=X.state.sunShadow,Se.directionalLights.value=X.state.directional,Se.directionalLightShadows.value=X.state.directionalShadow,Se.spotLights.value=X.state.spot,Se.spotLightShadows.value=X.state.spotShadow,Se.rectAreaLights.value=X.state.rectArea,Se.ltc_1.value=X.state.rectAreaLTC1,Se.ltc_2.value=X.state.rectAreaLTC2,Se.pointLights.value=X.state.point,Se.pointLightShadows.value=X.state.pointShadow,Se.hemisphereLights.value=X.state.hemi,Se.sunShadowMatrix.value=X.state.sunShadowMatrix,Se.sunShadowCascade.value=X.state.sunShadowCascade,Se.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Se.spotLightMatrix.value=X.state.spotLightMatrix,Se.spotLightMap.value=X.state.spotLightMap,Se.pointShadowMatrix.value=X.state.pointShadowMatrix),H.numLightProbeGrids=bh(T.state.lightProbeGridArray),H.currentProgram=Xe,H.uniformsList=null,Xe}function jg(A,k,$,H,X){let fe=Re.get(A),be=fe.currentProgram.id+","+H+","+X,he=fe.programVariants.get(be);return he===void 0?(he=Ns(A,k,$),fe.programVariants.set(be,he)):(fe.currentProgram=he,fe.uniformsList=null,fe.outputColorSpace=H,fe.toneMapping=X),he}function Mh(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Ms.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Sh(A,k){let $=Re.get(A);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Kg(A,k,$,H,X){k.isScene!==!0&&(k=qt),Oe.resetTextureUnits();let fe=k.fog,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?k.environment:null,he=Y===null?w.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:$e.workingColorSpace,ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=P.get(H.envMap||be,ve),Ue=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!$.morphAttributes.position,qe=!!$.morphAttributes.normal,_t=!!$.morphAttributes.color,st=Nn;H.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(st=w.toneMapping);let it=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Nt=it!==void 0?it.length:0,Ee=Re.get(H),Ft=T.state.lights;if(gt===!0&&(Rt===!0||A!==G)){let mt=A===G&&H.id===U;ee.setState(H,A,mt)}let Qe=!1,Ai=!1;H.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ft.state.version||X.isBatchedMesh&&Ee.batching===!1||!X.isBatchedMesh&&Ee.batching===!0||X.isBatchedMesh&&Ee.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ee.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ee.instancing===!1||!X.isInstancedMesh&&Ee.instancing===!0||X.isSkinnedMesh&&Ee.skinning===!1||!X.isSkinnedMesh&&Ee.skinning===!0||X.isInstancedMesh&&Ee.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ee.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ee.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ee.instancingMorph===!1&&X.morphTexture!==null||Ee.envMap!==Te||H.fog===!0&&Ee.fog!==fe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ee.numPlanes||Ee.numIntersection!==ee.numIntersection)||Ee.vertexAlphas!==Ue||Ee.vertexTangents!==Xe||Ee.morphTargets!==Se||Ee.morphNormals!==qe||Ee.morphColors!==_t||Ee.morphTargetsCount!==Nt||Ee.numLightProbeGrids!==bh(T.state.lightProbeGridArray)?Qe=!0:(Ee.outputColorSpace!==he||Ee.toneMapping!==st)&&(Ai=!0):(Qe=!0,Ee.__version=H.version);let Pt=Ee.currentProgram;(Qe===!0||Ai===!0)&&(Pt=Ai===!0?jg(H,k,X,he,st):Ns(H,k,X),L&&H.isNodeMaterial&&L.onUpdateProgram(H,Pt,Ee));let Fr=!1,si=!1,wi=!1,je=Pt.getUniforms(),It=Ee.uniforms;if(pe.useProgram(Pt.program)&&(Fr=!0,si=!0,wi=!0),H.id!==U&&(U=H.id,si=!0),Fr||G!==A){pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(z,"projectionMatrix",A.projectionMatrix),je.setValue(z,"viewMatrix",A.matrixWorldInverse);let Tt=je.map.cameraPosition;Tt!==void 0&&Tt.setValue(z,ot.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&je.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&je.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),G!==A&&(G=A,si=!0,wi=!0)}if(Ee.needsLights&&(Ft.state.sunShadowMap.length>0&&je.setValue(z,"sunShadowMap",Ft.state.sunShadowMap,Oe),Ft.state.directionalShadowMap.length>0&&je.setValue(z,"directionalShadowMap",Ft.state.directionalShadowMap,Oe),Ft.state.spotShadowMap.length>0&&je.setValue(z,"spotShadowMap",Ft.state.spotShadowMap,Oe),Ft.state.pointShadowMap.length>0&&je.setValue(z,"pointShadowMap",Ft.state.pointShadowMap,Oe)),X.isSkinnedMesh){je.setOptional(z,X,"bindMatrix"),je.setOptional(z,X,"bindMatrixInverse");let mt=X.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),je.setValue(z,"boneTexture",mt.boneTexture,Oe))}X.isBatchedMesh&&(je.setOptional(z,X,"batchingTexture"),je.setValue(z,"batchingTexture",X._matricesTexture,Oe),je.setOptional(z,X,"batchingIdTexture"),je.setValue(z,"batchingIdTexture",X._indirectTexture,Oe),je.setOptional(z,X,"batchingColorTexture"),X._colorsTexture!==null&&je.setValue(z,"batchingColorTexture",X._colorsTexture,Oe));let hn=$.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&te.update(X,$,Pt),(si||Ee.receiveShadow!==X.receiveShadow)&&(Ee.receiveShadow=X.receiveShadow,je.setValue(z,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&k.environment!==null&&(It.envMapIntensity.value=k.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=rE()),si){if(je.setValue(z,"toneMappingExposure",w.toneMappingExposure),Ee.needsLights&&Qg(It,wi),fe&&H.fog===!0&&ae.refreshFogUniforms(It,fe),ae.refreshMaterialUniforms(It,H,me,Ae,T.state.transmissionRenderTarget[A.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){let mt=M,Tt=0;for(let Un of T.state.lightProbeGridArray)Un.texture!==null&&(mt.textures[Tt]=Un.texture,mt.min[Tt]=Un.boundingBox.min,mt.max[Tt]=Un.boundingBox.max,mt.resolution[Tt]=Un.resolution,Tt++);for(let Un in mt)mt[Un].length=Tt;It.probesSH.value=mt.textures,It.probesMin.value=mt.min,It.probesMax.value=mt.max,It.probesResolution.value=mt.resolution}Ms.upload(z,Mh(Ee),It,Oe)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ms.upload(z,Mh(Ee),It,Oe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&je.setValue(z,"center",X.center),je.setValue(z,"modelViewMatrix",X.modelViewMatrix),je.setValue(z,"normalMatrix",X.normalMatrix),je.setValue(z,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){let mt=H.uniformsGroups;for(let Tt=0,Un=mt.length;Tt<Un;Tt++){let Th=mt[Tt];we.update(Th,Pt),we.bind(Th,Pt)}}return Pt}function Qg(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ey(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,k,$){let H=Re.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Re.get(A.texture).__webglTexture=k,Re.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let $=Re.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){Y=A,O=k,V=$;let H=null,X=!1,fe=!1;if(A){let he=Re.get(A);if(he.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(z.FRAMEBUFFER,he.__webglFramebuffer),J.copy(A.viewport),K.copy(A.scissor),_e=A.scissorTest,pe.viewport(J),pe.scissor(K),pe.setScissorTest(_e),U=-1;return}else if(he.__webglFramebuffer===void 0)Oe.setupRenderTarget(A);else if(he.__hasExternalTextures)Oe.rebindTextures(A,Re.get(A.texture).__webglTexture,Re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ue=A.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&Re.has(Ue)&&(A.width!==Ue.image.width||A.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(A)}}let ve=A.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Te=Re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Te[k])?H=Te[k][$]:H=Te[k],X=!0):A.samples>0&&Oe.useMultisampledRTT(A)===!1?H=Re.get(A).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[$]:H=Te,J.copy(A.viewport),K.copy(A.scissor),_e=A.scissorTest}else J.copy(Ce).multiplyScalar(me).floor(),K.copy(Ke).multiplyScalar(me).floor(),_e=Ze;if($!==0&&(H=D),pe.bindFramebuffer(z.FRAMEBUFFER,H)&&pe.drawBuffers(A,H),pe.viewport(J),pe.scissor(K),pe.setScissorTest(_e),X){let he=Re.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,he.__webglTexture,$)}else if(fe){let he=k;for(let ve=0;ve<A.textures.length;ve++){let Te=Re.get(A.textures[ve]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ve,Te.__webglTexture,$,he)}}else if(A!==null&&$!==0){let he=Re.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,he.__webglTexture,$)}U=-1};function Eh(A){let k=Re.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=dt.textureFormatReadable(A.format),k.__typeReadable=dt.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,$,H,X,fe,be,he=0){if(!(A&&A.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be],Array.isArray(ve)&&(ve=ve[0])),ve){pe.bindFramebuffer(z.FRAMEBUFFER,ve);try{let Te=A.textures[he],Ue=Te.format,Xe=Te.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+he);let Se=Eh(Te);if(Se.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-H&&$>=0&&$<=A.height-X&&z.readPixels(k,$,H,X,oe.convert(Ue),oe.convert(Xe),fe)}finally{let Te=Y!==null?Re.get(Y).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(A,k,$,H,X,fe,be,he=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be],Array.isArray(ve)&&(ve=ve[0])),ve)if(k>=0&&k<=A.width-H&&$>=0&&$<=A.height-X){pe.bindFramebuffer(z.FRAMEBUFFER,ve);let Te=A.textures[he],Ue=Te.format,Xe=Te.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+he);let Se=Eh(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,qe),z.bufferData(z.PIXEL_PACK_BUFFER,fe.byteLength,z.STREAM_READ),z.readPixels(k,$,H,X,oe.convert(Ue),oe.convert(Xe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let _t=Y!==null?Re.get(Y).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,_t);let st=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Nm(z,st,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,qe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,fe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(qe),z.deleteSync(st),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,$=0){let H=Math.pow(2,-$),X=Math.floor(A.image.width*H),fe=Math.floor(A.image.height*H),be=k!==null?k.x:0,he=k!==null?k.y:0;Oe.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,be,he,X,fe),pe.unbindTexture()},this.copyTextureToTexture=function(A,k,$=null,H=null,X=0,fe=0){let be,he,ve,Te,Ue,Xe,Se,qe,_t,st=A.isCompressedTexture?A.mipmaps[fe]:A.image;if($!==null)be=$.max.x-$.min.x,he=$.max.y-$.min.y,ve=$.isBox3?$.max.z-$.min.z:1,Te=$.min.x,Ue=$.min.y,Xe=$.isBox3?$.min.z:0;else{let je=Math.pow(2,-X);be=Math.floor(st.width*je),he=Math.floor(st.height*je),A.isDataArrayTexture?ve=st.depth:A.isData3DTexture?ve=Math.floor(st.depth*je):ve=1,Te=0,Ue=0,Xe=0}H!==null?(Se=H.x,qe=H.y,_t=H.z):(Se=0,qe=0,_t=0);let it=oe.convert(k.format),Nt=oe.convert(k.type),Ee;k.isData3DTexture?(Oe.setTexture3D(k,0),Ee=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Oe.setTexture2DArray(k,0),Ee=z.TEXTURE_2D_ARRAY):(Oe.setTexture2D(k,0),Ee=z.TEXTURE_2D),pe.activeTexture(z.TEXTURE0),pe.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),pe.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),pe.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let Ft=pe.getParameter(z.UNPACK_ROW_LENGTH),Qe=pe.getParameter(z.UNPACK_IMAGE_HEIGHT),Ai=pe.getParameter(z.UNPACK_SKIP_PIXELS),Pt=pe.getParameter(z.UNPACK_SKIP_ROWS),Fr=pe.getParameter(z.UNPACK_SKIP_IMAGES);pe.pixelStorei(z.UNPACK_ROW_LENGTH,st.width),pe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st.height),pe.pixelStorei(z.UNPACK_SKIP_PIXELS,Te),pe.pixelStorei(z.UNPACK_SKIP_ROWS,Ue),pe.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe);let si=A.isDataArrayTexture||A.isData3DTexture,wi=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let je=Re.get(A),It=Re.get(k),hn=Re.get(je.__renderTarget),mt=Re.get(It.__renderTarget);pe.bindFramebuffer(z.READ_FRAMEBUFFER,hn.__webglFramebuffer),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Tt=0;Tt<ve;Tt++)si&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.get(A).__webglTexture,X,Xe+Tt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.get(k).__webglTexture,fe,_t+Tt)),z.blitFramebuffer(Te,Ue,Te+be,Ue+he,Se,qe,Se+be,qe+he,z.DEPTH_BUFFER_BIT,z.NEAREST);pe.bindFramebuffer(z.READ_FRAMEBUFFER,null),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||Re.has(A)){let je=Re.get(A),It=Re.get(k);pe.bindFramebuffer(z.READ_FRAMEBUFFER,N),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,B);for(let hn=0;hn<ve;hn++)si?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.__webglTexture,X,Xe+hn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,je.__webglTexture,X),wi?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,It.__webglTexture,fe,_t+hn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,fe),X!==0?z.blitFramebuffer(Te,Ue,Te+be,Ue+he,Se,qe,Se+be,qe+he,z.COLOR_BUFFER_BIT,z.NEAREST):wi?z.copyTexSubImage3D(Ee,fe,Se,qe,_t+hn,Te,Ue,be,he):z.copyTexSubImage2D(Ee,fe,Se,qe,Te,Ue,be,he);pe.bindFramebuffer(z.READ_FRAMEBUFFER,null),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else wi?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ee,fe,Se,qe,_t,be,he,ve,it,Nt,st.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Ee,fe,Se,qe,_t,be,he,ve,it,st.data):z.texSubImage3D(Ee,fe,Se,qe,_t,be,he,ve,it,Nt,st):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,fe,Se,qe,be,he,it,Nt,st.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,fe,Se,qe,st.width,st.height,it,st.data):z.texSubImage2D(z.TEXTURE_2D,fe,Se,qe,be,he,it,Nt,st);pe.pixelStorei(z.UNPACK_ROW_LENGTH,Ft),pe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Qe),pe.pixelStorei(z.UNPACK_SKIP_PIXELS,Ai),pe.pixelStorei(z.UNPACK_SKIP_ROWS,Pt),pe.pixelStorei(z.UNPACK_SKIP_IMAGES,Fr),fe===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&z.generateMipmap(Ee),pe.unbindTexture()},this.initRenderTarget=function(A){Re.get(A).__webglFramebuffer===void 0&&Oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Oe.setTextureCube(A,0):A.isData3DTexture?Oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Oe.setTexture2DArray(A,0):Oe.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){O=0,V=0,Y=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var wr=new q;function cn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;wr.copy(e),wr[i]=0,wr.normalize();let c=.5*o/(o+a),u=1-wr.angleTo(n)/l;return Math.sign(wr[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Cr=class n extends yi{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new q,c=new q,u=new q(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,y=new q,m=.5/o;for(let g=0,_=0;g<d.length;g+=3,_+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/p)){case 0:y.set(1,0,0),f[_+0]=cn(y,c,"z","y",r,i),f[_+1]=1-cn(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),f[_+0]=1-cn(y,c,"z","y",r,i),f[_+1]=1-cn(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),f[_+0]=1-cn(y,c,"x","z",r,e),f[_+1]=cn(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),f[_+0]=1-cn(y,c,"x","z",r,e),f[_+1]=1-cn(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),f[_+0]=1-cn(y,c,"x","y",r,e),f[_+1]=1-cn(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),f[_+0]=cn(y,c,"x","y",r,e),f[_+1]=1-cn(y,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Vi=100;function gg(n,e,t="#ffffff"){if(!n||typeof n.createElement!="function")return null;let i=n.createElement("canvas");i.width=512,i.height=256;let s=i.getContext&&i.getContext("2d");if(!s)return null;s.clearRect(0,0,i.width,i.height),s.fillStyle=t,s.font='bold 96px -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',s.textAlign="center",s.textBaseline="middle";let r=String(e||"").slice(0,8)||"3D";return s.fillText(r,i.width/2,i.height/2),i}function yg({color:n="#3b82f6",text:e="",size:t=160,doc:i=null}={}){let s=new Wn,r=Math.max(.4,t/Vi),o=r,a=r,l=Math.max(.22,r*.28),c=Math.min(.16,r*.12),u=new gs({color:new Fe(n),roughness:.42,metalness:.08,emissive:new Fe(n),emissiveIntensity:0}),d=new Cr(o,a*.68,l,5,c),h=new Yt(d,u);h.position.y=-a*.16,h.castShadow=!0,h.receiveShadow=!0;let f=new gs({color:new Fe(n).offsetHSL(0,0,.06),roughness:.34,metalness:.12,emissive:new Fe(n),emissiveIntensity:0}),p=new Cr(o,a*.3,l*1.02,4,Math.min(.08,c)),y=new Yt(p,f);y.position.y=a*.33-c*.9,y.castShadow=!0,y.receiveShadow=!0,s.add(h,y);let m=null,g=gg(i,e,"#ffffff");if(g){let _=new ms(g);_.needsUpdate=!0;let b=new ps({map:_,transparent:!0,depthWrite:!1});m=new Yt(new Li(o*.82,a*.24),b),m.position.set(0,-a*.1,l/2+.012),s.add(m)}return s.userData.parts={body:h,cap:y,textMesh:m},s.userData.capBaseY=y.position.y,s.userData.materials=[u,f],{group:s,size:r,setText(_){if(!m)return;let b=gg(i,_,"#ffffff");if(!b)return;let M=m.material.map;m.material.map=new ms(b),m.material.map.needsUpdate=!0,M&&M.dispose()},setColor(_){try{let b=new Fe(_);u.color.copy(b),f.color.copy(b).offsetHSL(0,0,.06),u.emissive.copy(b),f.emissive.copy(b)}catch(b){console.warn("[EasyUI] 3D 颜色无效:",_,b)}},dispose(){[d,p].forEach(_=>_.dispose()),u.dispose(),f.dispose(),m&&(m.material.map&&m.material.map.dispose(),m.material.dispose(),m.geometry.dispose())}}}function _g({ambient:n=.55,intensity:e=1.1,direction:t={x:.6,y:-1,z:.8},bounds:i=null}={}){let s=new fr(16777215,n);s.name="easyui-ambient";let r=new dr(16777215,e);r.name="easyui-key-light",r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-5e-4;let o=i?Math.max(i.right-i.left,i.top-i.bottom):4.8,a=Math.max(2,o*1.4),l=Math.max(8,a*2);return r.shadow.camera.near=.1,r.shadow.camera.far=l*3,Object.assign(r.shadow.camera,{left:-a/2,right:a/2,top:a/2,bottom:-a/2}),r.shadow.camera.updateProjectionMatrix(),{ambientLight:s,directionalLight:r,setDirection(c){let{x:u=.6,y:d=-1,z:h=.8}=c||{},f={x:u,y:d,z:h},p=Math.hypot(f.x,f.y,f.z)||1;r.position.set(f.x/p*l,f.y/p*l,f.z/p*l),r.target.position.set(0,0,0),r.target.updateMatrixWorld()},setIntensity(c){r.intensity=Math.max(0,Math.min(5,Number(c)||0))},setAmbient(c){s.intensity=Math.max(0,Math.min(5,Number(c)||0))}}}function Ja(n,e=45,t=Vi){return Math.max(1,n)/t/(2*Math.tan(e*Math.PI/180/2))}function Wu({fov:n=45,camDist:e=null,width:t=480,height:i=360,pxPerUnit:s=Vi}={}){let r=Math.max(1,t),o=Math.max(1,i),a=e||Ja(o,n,s),l=2*a*Math.tan(n*Math.PI/180/2),c=l*(r/o),u=l/o;return{width:r,height:o,camDist:a,visibleWidth:c,visibleHeight:l,worldPerPixel:u,bounds:{left:-c/2,right:c/2,top:l/2,bottom:-l/2},toWorld(d,h,f=0){return{x:(d/r-.5)*c,y:(.5-h/o)*l,z:f}},toScreen(d,h){return{x:(d/c+.5)*r,y:(.5-h/l)*o}},componentToWorld(d){let h=d.size||160;return this.toWorld((d.x||0)+h/2,(d.y||0)+h/2)},worldToComponent(d,h,f=160){let p=this.toScreen(d,h);return{x:p.x-f/2,y:p.y-f/2}}}}function Xu(n,e,t){let i=n.canvas;if(!i||typeof i.getBoundingClientRect!="function")return null;let s=i.getBoundingClientRect();if(!s.width||!s.height)return null;let r=new We((e-s.left)/s.width*2-1,-((t-s.top)/s.height*2-1));n.raycaster.setFromCamera(r,n.camera);let o=n.raycaster.intersectObjects(n.scene.children,!0);for(let a of o){let l=a.object;for(;l&&!l.userData.componentId;)l=l.parent;if(l&&l.userData.componentId){let c=l.userData.componentId;if(n.objects.has(c))return c}}return null}function vg(n){return!n||!n.closest?!1:n.classList&&n.classList.contains("easyui-3d-anchor")?!0:!n.closest(".easyui-btn, .easyui-card, .easyui-select, .easyui-input, .easyui-table, .easyui-modal-mask, #easyui-dashboard-overlay")}function xg(n,e,t=220){let i=n.objects.get(e);i&&(i.pressStart=n.now(),i.pressDuration=t)}function bg(n,e,t){if(!n)return;n.hover+=(n.hoverTarget-n.hover)*Math.min(1,e*12);let i=n.baseScale*(1+.04*n.hover);n.group.scale.setScalar(i);let s=n.group.userData.materials||[];for(let o of s)o&&"emissiveIntensity"in o&&(o.emissiveIntensity=.35*n.hover);let r=n.group.userData.parts&&n.group.userData.parts.cap;if(r){let o=n.group.userData.capBaseY||0,a=0;if(n.pressStart){let l=(t-n.pressStart)/(n.pressDuration||220);l>=1?n.pressStart=0:a=Math.sin(Math.PI*Math.max(0,l))}r.position.y=o-a*.06}}var Ei=class n{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new C);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new C);let i=this.elements,s=e.x,r=e.y,o=e.z;return t.x=i[0]*s+i[1]*r+i[2]*o,t.y=i[3]*s+i[4]*r+i[5]*o,t.z=i[6]*s+i[7]*r+i[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new n);let i=this.elements,s=e.elements,r=t.elements,o=i[0],a=i[1],l=i[2],c=i[3],u=i[4],d=i[5],h=i[6],f=i[7],p=i[8],y=s[0],m=s[1],g=s[2],_=s[3],b=s[4],M=s[5],S=s[6],T=s[7],v=s[8];return r[0]=o*y+a*_+l*S,r[1]=o*m+a*b+l*T,r[2]=o*g+a*M+l*v,r[3]=c*y+u*_+d*S,r[4]=c*m+u*b+d*T,r[5]=c*g+u*M+d*v,r[6]=h*y+f*_+p*S,r[7]=h*m+f*b+p*T,r[8]=h*g+f*M+p*v,t}scale(e,t){t===void 0&&(t=new n);let i=this.elements,s=t.elements;for(let r=0;r!==3;r++)s[3*r+0]=e.x*i[3*r+0],s[3*r+1]=e.y*i[3*r+1],s[3*r+2]=e.z*i[3*r+2];return t}solve(e,t){t===void 0&&(t=new C);let i=3,s=4,r=[],o,a;for(o=0;o<i*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3,c=l,u,d=4,h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=d;do h=d-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){let f=r[o+s*a]/r[o+s*o];u=d;do h=d-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*f;while(--u)}}while(--l);if(t.z=r[2*s+3]/r[2*s+2],t.y=(r[1*s+3]-r[1*s+2]*t.z)/r[1*s+1],t.x=(r[0*s+3]-r[0*s+2]*t.z-r[0*s+1]*t.y)/r[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let i=0;i<9;i++)e+=this.elements[i]+",";return e}reverse(e){e===void 0&&(e=new n);let t=3,i=6,s=oE,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3,l=a,c,u=i,d;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){c=u;do d=u-c,s[d+i*r]+=s[d+i*o];while(--c);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){let h=s[r+i*o]/s[r+i*r];c=u;do d=u-c,s[d+i*o]=d<=r?0:s[d+i*o]-s[d+i*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{let h=s[r+i*o]/s[r+i*r];c=i;do d=i-c,s[d+i*o]=s[d+i*o]-s[d+i*r]*h;while(--c)}while(o--)}while(--r);r=2;do{let h=1/s[r+i*r];c=i;do d=i-c,s[d+i*r]=s[d+i*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(d=s[t+o+i*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){let t=e.x,i=e.y,s=e.z,r=e.w,o=t+t,a=i+i,l=s+s,c=t*o,u=t*a,d=t*l,h=i*a,f=i*l,p=s*l,y=r*o,m=r*a,g=r*l,_=this.elements;return _[0]=1-(h+p),_[1]=u-g,_[2]=d+m,_[3]=u+g,_[4]=1-(c+p),_[5]=f-y,_[6]=d-m,_[7]=f+y,_[8]=1-(c+h),this}transpose(e){e===void 0&&(e=new n);let t=this.elements,i=e.elements,s;return i[0]=t[0],i[4]=t[4],i[8]=t[8],s=t[1],i[1]=t[3],i[3]=s,s=t[2],i[2]=t[6],i[6]=s,s=t[5],i[5]=t[7],i[7]=s,e}},oE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],C=class n{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new n);let i=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*s,t.y=l*i-o*r,t.z=o*s-a*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new n(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new n(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ei([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,i=this.z,s=Math.sqrt(e*e+t*t+i*i);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new n);let t=this.x,i=this.y,s=this.z,r=Math.sqrt(t*t+i*i+s*s);return r>0?(r=1/r,e.x=t*r,e.y=i*r,e.z=s*r):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-i)*(o-i)+(a-s)*(a-s))}distanceSquared(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-i)*(o-i)+(a-s)*(a-s)}scale(e,t){t===void 0&&(t=new n);let i=this.x,s=this.y,r=this.z;return t.x=e*i,t.y=e*s,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new n),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new n),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new n),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let i=this.length();if(i>0){let s=aE,r=1/i;s.set(this.x*r,this.y*r,this.z*r);let o=lE;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,e)):(o.set(0,1,0),s.cross(o,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){let s=this.x,r=this.y,o=this.z;i.x=s+(e.x-s)*t,i.y=r+(e.y-r)*t,i.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Mg),Mg.almostEquals(e,t)}clone(){return new n(this.x,this.y,this.z)}};C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);var aE=new C,lE=new C,Mg=new C,tn=class n{constructor(e){e===void 0&&(e={}),this.lowerBound=new C,this.upperBound=new C,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,s){let r=this.lowerBound,o=this.upperBound,a=i;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Sg),c=Sg),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new n().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,i=this.upperBound,s=e.lowerBound,r=e.upperBound,o=s.x<=i.x&&i.x<=r.x||t.x<=r.x&&r.x<=i.x,a=s.y<=i.y&&i.y<=r.y||t.y<=r.y&&r.y<=i.y,l=s.z<=i.z&&i.z<=r.z||t.z<=r.z&&r.z<=i.z;return o&&a&&l}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,i=this.upperBound,s=e.lowerBound,r=e.upperBound;return t.x<=s.x&&i.x>=r.x&&t.y<=s.y&&i.y>=r.y&&t.z<=s.z&&i.z>=r.z}getCorners(e,t,i,s,r,o,a,l){let c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),i.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){let i=Eg,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7];this.getCorners(s,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){let f=i[h];e.pointToLocal(f,f)}return t.setFromPoints(i)}toWorldFrame(e,t){let i=Eg,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7];this.getCorners(s,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){let f=i[h];e.pointToWorld(f,f)}return t.setFromPoints(i)}overlapsRay(e){let{direction:t,from:i}=e,s=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-i.x)*s,l=(this.upperBound.x-i.x)*s,c=(this.lowerBound.y-i.y)*r,u=(this.upperBound.y-i.y)*r,d=(this.lowerBound.z-i.z)*o,h=(this.upperBound.z-i.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(p<0||f>p)}},Sg=new C,Eg=[new C,new C,new C,new C,new C,new C,new C,new C],nl=class{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:s}=t;if(s>i){let r=s;s=i,i=r}return this.matrix[(i*(i+1)>>1)+s-1]}set(e,t,i){let{index:s}=e,{index:r}=t;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},il=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let i=this._listeners;if(i[e]===void 0)return this;let s=i[e].indexOf(t);return s!==-1&&i[e].splice(s,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let i=this._listeners[e.type];if(i!==void 0){e.target=this;for(let s=0,r=i.length;s<r;s++)i[s].call(this,e)}return this}},Xt=class n{constructor(e,t,i,s){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=i,this.w=s}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new C),this.normalize();let t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let i=cE,s=uE;e.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{let i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new n);let i=this.x,s=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=i*u+o*a+s*c-r*l,t.y=s*u+o*l+r*a-i*c,t.z=r*u+o*c+i*l-s*a,t.w=o*u-i*a-s*l-r*c,t}inverse(e){e===void 0&&(e=new n);let t=this.x,i=this.y,s=this.z,r=this.w;this.conjugate(e);let o=1/(t*t+i*i+s*s+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new n),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new C);let i=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*i+a*r-l*s,d=c*s+l*i-o*r,h=c*r+o*s-a*i,f=-o*i-a*s-l*r;return t.x=u*c+f*-o+d*-l-h*-a,t.y=d*c+f*-a+h*-o-u*-l,t.z=h*c+f*-l+u*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,s,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":let u=o*a+l*c;if(u>.499&&(i=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(i=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),i===void 0){let d=o*o,h=a*a,f=l*l;i=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=s,e.x=r}setFromEuler(e,t,i,s){s===void 0&&(s="XYZ");let r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(i/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new n(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new n);let s=this.x,r=this.y,o=this.z,a=this.w,l=e.x,c=e.y,u=e.z,d=e.w,h,f,p,y,m;return f=s*l+r*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),y=Math.sin((1-t)*h)/p,m=Math.sin(t*h)/p):(y=1-t,m=t),i.x=y*s+m*l,i.y=y*r+m*c,i.z=y*o+m*u,i.w=y*a+m*d,i}integrate(e,t,i,s){s===void 0&&(s=new n);let r=e.x*i.x,o=e.y*i.y,a=e.z*i.z,l=this.x,c=this.y,u=this.z,d=this.w,h=t*.5;return s.x+=h*(r*d+o*u-a*c),s.y+=h*(o*d+a*l-r*u),s.z+=h*(a*d+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}},cE=new C,uE=new C,hE={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Me=class n{constructor(e){e===void 0&&(e={}),this.id=n.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Me.idCounter=0;Me.types=hE;var tt=class n{constructor(e){e===void 0&&(e={}),this.position=new C,this.quaternion=new Xt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return n.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return n.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,s){return s===void 0&&(s=new C),i.vsub(e,s),t.conjugate(Tg),Tg.vmult(s,s),s}static pointToWorldFrame(e,t,i,s){return s===void 0&&(s=new C),t.vmult(i,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new C),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,s){return s===void 0&&(s=new C),t.w*=-1,t.vmult(i,s),t.w*=-1,s}},Tg=new Xt,Ku=class n extends Me{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:i=[],normals:s=[],axes:r,boundingSphereRadius:o}=e;super({type:Me.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;let s=new C;for(let r=0;r!==e.length;r++){let o=e[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;t[o[l]].vsub(t[o[c]],s),s.normalize();let u=!1;for(let d=0;d!==i.length;d++)if(i[d].almostEquals(s)||i[d].almostEquals(s)){u=!0;break}u||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let s=0;s<this.faces[e].length;s++)if(!this.vertices[this.faces[e][s]])throw new Error(`Vertex ${this.faces[e][s]} not found!`);let t=this.faceNormals[e]||new C;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[e].length;s++)console.warn(`.vertices[${this.faces[e][s]}] = Vec3(${this.vertices[this.faces[e][s]].toString()})`)}}}getFaceNormal(e,t){let i=this.faces[e],s=this.vertices[i[0]],r=this.vertices[i[1]],o=this.vertices[i[2]];n.computeNormal(s,r,o,t)}static computeNormal(e,t,i,s){let r=new C,o=new C;t.vsub(e,o),i.vsub(t,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(e,t,i,s,r,o,a,l,c){let u=new C,d=-1,h=-Number.MAX_VALUE;for(let p=0;p<i.faces.length;p++){u.copy(i.faceNormals[p]),r.vmult(u,u);let y=u.dot(o);y>h&&(h=y,d=p)}let f=[];for(let p=0;p<i.faces[d].length;p++){let y=i.vertices[i.faces[d][p]],m=new C;m.copy(y),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,i,s,r,o,a,l){let c=new C,u=new C,d=new C,h=new C,f=new C,p=new C,y=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){i.vmult(m.uniqueAxes[g],c);let _=m.testSepAxis(c,e,t,i,s,r);if(_===!1)return!1;_<y&&(y=_,o.copy(c))}else{let g=a?a.length:m.faces.length;for(let _=0;_<g;_++){let b=a?a[_]:_;c.copy(m.faceNormals[b]),i.vmult(c,c);let M=m.testSepAxis(c,e,t,i,s,r);if(M===!1)return!1;M<y&&(y=M,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){r.vmult(e.uniqueAxes[g],u);let _=m.testSepAxis(u,e,t,i,s,r);if(_===!1)return!1;_<y&&(y=_,o.copy(u))}else{let g=l?l.length:e.faces.length;for(let _=0;_<g;_++){let b=l?l[_]:_;u.copy(e.faceNormals[b]),r.vmult(u,u);let M=m.testSepAxis(u,e,t,i,s,r);if(M===!1)return!1;M<y&&(y=M,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){i.vmult(m.uniqueEdges[g],h);for(let _=0;_!==e.uniqueEdges.length;_++)if(r.vmult(e.uniqueEdges[_],f),h.cross(f,p),!p.almostZero()){p.normalize();let b=m.testSepAxis(p,e,t,i,s,r);if(b===!1)return!1;b<y&&(y=b,o.copy(p))}}return s.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,i,s,r,o){let a=this;n.project(a,e,i,s,qu),n.project(t,e,r,o,Yu);let l=qu[0],c=qu[1],u=Yu[0],d=Yu[1];if(l<d||u<c)return!1;let h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(e,t){let i=new C,s=new C;this.computeLocalAABB(s,i);let r=i.x-s.x,o=i.y-s.y,a=i.z-s.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){let t=this.faces[e],i=this.faceNormals[e],s=this.vertices[t[0]];return-i.dot(s)}clipFaceAgainstHull(e,t,i,s,r,o,a){let l=new C,c=new C,u=new C,d=new C,h=new C,f=new C,p=new C,y=new C,m=this,g=[],_=s,b=g,M=-1,S=Number.MAX_VALUE;for(let w=0;w<m.faces.length;w++){l.copy(m.faceNormals[w]),i.vmult(l,l);let I=l.dot(e);I<S&&(S=I,M=w)}if(M<0)return;let T=m.faces[M];T.connectedFaces=[];for(let w=0;w<m.faces.length;w++)for(let I=0;I<m.faces[w].length;I++)T.indexOf(m.faces[w][I])!==-1&&w!==M&&T.connectedFaces.indexOf(w)===-1&&T.connectedFaces.push(w);let v=T.length;for(let w=0;w<v;w++){let I=m.vertices[T[w]],L=m.vertices[T[(w+1)%v]];I.vsub(L,c),u.copy(c),i.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[M]),i.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(I),i.vmult(f,f),t.vadd(f,f);let D=T.connectedFaces[w];p.copy(this.faceNormals[D]);let N=this.getPlaneConstantOfFace(D);y.copy(p),i.vmult(y,y);let B=N-y.dot(t);for(this.clipFaceAgainstPlane(_,b,y,B);_.length;)_.shift();for(;b.length;)_.push(b.shift())}p.copy(this.faceNormals[M]);let x=this.getPlaneConstantOfFace(M);y.copy(p),i.vmult(y,y);let R=x-y.dot(t);for(let w=0;w<_.length;w++){let I=y.dot(_[w])+R;if(I<=r&&(console.log(`clamped: depth=${I} to minDist=${r}`),I=r),I<=o){let L=_[w];if(I<=1e-6){let D={point:L,normal:y,depth:I};a.push(D)}}}}clipFaceAgainstPlane(e,t,i,s){let r,o,a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=i.dot(l)+s;for(let u=0;u<a;u++){if(c=e[u],o=i.dot(c)+s,r<0)if(o<0){let d=new C;d.copy(c),t.push(d)}else{let d=new C;l.lerp(c,r/(r-o),d),t.push(d)}else if(o<0){let d=new C;l.lerp(c,r/(r-o),d),t.push(d),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);let i=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(i[r],s[r]),e.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=i[s];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new C);let i=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(i[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let i=0;i!==t.length;i++){let s=t[i].lengthSquared();s>e&&(e=s)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,s){let r=this.vertices,o,a,l,c,u,d,h=new C;for(let f=0;f<r.length;f++){h.copy(r[f]),t.vmult(h,h),e.vadd(h,h);let p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}i.set(o,a,l),s.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new C);let t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let i=this.vertices.length,s=this.vertices;if(t){for(let r=0;r<i;r++){let o=s[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<i;r++){let o=s[r];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,i=this.faces,s=this.faceNormals,r=null,o=new C;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=s[a],c=t[i[a][0]],u=new C;e.vsub(c,u);let d=l.dot(u),h=new C;o.vsub(c,h);let f=l.dot(h);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(e,t,i,s,r){let o=e.vertices.length,a=fE,l=0,c=0,u=pE,d=e.vertices;u.setZero(),tt.vectorToLocalFrame(i,s,t,a),tt.pointToLocalFrame(i,s,u,u);let h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){let p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){let f=c;c=l,l=f}r[0]=l,r[1]=c}},qu=[],Yu=[],dE=new C,fE=new C,pE=new C,Dr=class n extends Me{constructor(e){super({type:Me.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,s=C,r=[new s(-e,-t,-i),new s(e,-t,-i),new s(e,t,-i),new s(-e,t,-i),new s(-e,-t,i),new s(e,-t,i),new s(e,t,i),new s(-e,t,i)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Ku({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new C),n.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){let s=e;i.x=1/12*t*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*t*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*t*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(e,t){let i=e,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),t!==void 0)for(let r=0;r!==i.length;r++)t.vmult(i[r],i[r]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Si.set(r[o][0],r[o][1],r[o][2]),t.vmult(Si,Si),e.vadd(Si,Si),i(Si.x,Si.y,Si.z)}calculateWorldAABB(e,t,i,s){let r=this.halfExtents;Ln[0].set(r.x,r.y,r.z),Ln[1].set(-r.x,r.y,r.z),Ln[2].set(-r.x,-r.y,r.z),Ln[3].set(-r.x,-r.y,-r.z),Ln[4].set(r.x,-r.y,-r.z),Ln[5].set(r.x,r.y,-r.z),Ln[6].set(-r.x,r.y,-r.z),Ln[7].set(r.x,-r.y,r.z);let o=Ln[0];t.vmult(o,o),e.vadd(o,o),s.copy(o),i.copy(o);for(let a=1;a<8;a++){let l=Ln[a];t.vmult(l,l),e.vadd(l,l);let c=l.x,u=l.y,d=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),d>s.z&&(s.z=d),c<i.x&&(i.x=c),u<i.y&&(i.y=u),d<i.z&&(i.z=d)}}},Si=new C,Ln=[new C,new C,new C,new C,new C,new C,new C,new C],lh={DYNAMIC:1,STATIC:2,KINEMATIC:4},ch={AWAKE:0,SLEEPY:1,SLEEPING:2},ze=class n extends il{constructor(e){e===void 0&&(e={}),super(),this.id=n.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new C,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new C,this.force=new C;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?n.STATIC:n.DYNAMIC,typeof e.type==typeof n.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=n.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new Xt,this.initQuaternion=new Xt,this.previousQuaternion=new Xt,this.interpolatedQuaternion=new Xt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new C,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new Ei,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new Ei,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new C(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new C(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new tn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=n.AWAKE,this.wakeUpAfterNarrowphase=!1,e===n.SLEEPING&&this.dispatchEvent(n.wakeupEvent)}sleep(){this.sleepState=n.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;t===n.AWAKE&&i<s?(this.sleepState=n.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(n.sleepyEvent)):t===n.SLEEPY&&i>s?this.wakeUp():t===n.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(n.sleepEvent))}}updateSolveMassProperties(){this.sleepState===n.SLEEPING||this.type===n.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new C),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new C),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}addShape(e,t,i){let s=new C,r=new Xt;return t&&s.copy(t),i&&r.copy(i),this.shapes.push(e),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,i=e.length,s=0;for(let r=0;r!==i;r++){let o=e[r];o.updateBoundingSphereRadius();let a=t[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){let e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,s=e.length,r=mE,o=gE,a=this.quaternion,l=this.aabb,c=yE;for(let u=0;u!==s;u++){let d=e[u];a.vmult(t[u],r),r.vadd(this.position,r),a.mult(i[u],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let i=_E,s=vE;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(t,i),i.mmult(s,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new C),this.type!==n.DYNAMIC)return;this.sleepState===n.SLEEPING&&this.wakeUp();let i=bE;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new C),this.type!==n.DYNAMIC)return;let i=ME,s=SE;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,s),this.applyForce(i,s)}applyTorque(e){this.type===n.DYNAMIC&&(this.sleepState===n.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new C),this.type!==n.DYNAMIC)return;this.sleepState===n.SLEEPING&&this.wakeUp();let i=t,s=EE;s.copy(e),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=TE;i.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new C),this.type!==n.DYNAMIC)return;let i=AE,s=wE;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,s),this.applyImpulse(i,s)}updateMassProperties(){let e=CE;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Dr.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let i=new C;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===n.DYNAMIC||this.type===n.KINEMATIC)||this.sleepState===n.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*e;s.x+=a.x*f*h.x,s.y+=a.y*f*h.y,s.z+=a.z*f*h.z;let p=d.elements,y=this.angularFactor,m=l.x*y.x,g=l.y*y.y,_=l.z*y.z;r.x+=e*(p[0]*m+p[1]*g+p[2]*_),r.y+=e*(p[3]*m+p[4]*g+p[5]*_),r.z+=e*(p[6]*m+p[7]*g+p[8]*_),o.x+=s.x*e,o.y+=s.y*e,o.z+=s.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};ze.idCounter=0;ze.COLLIDE_EVENT_NAME="collide";ze.DYNAMIC=lh.DYNAMIC;ze.STATIC=lh.STATIC;ze.KINEMATIC=lh.KINEMATIC;ze.AWAKE=ch.AWAKE;ze.SLEEPY=ch.SLEEPY;ze.SLEEPING=ch.SLEEPING;ze.wakeupEvent={type:"wakeup"};ze.sleepyEvent={type:"sleepy"};ze.sleepEvent={type:"sleep"};var mE=new C,gE=new Xt,yE=new tn,_E=new Ei,vE=new Ei,xE=new Ei,bE=new C,ME=new C,SE=new C,EE=new C,TE=new C,AE=new C,wE=new C,CE=new C,sl=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&ze.STATIC)!==0||e.sleepState===ze.SLEEPING)&&((t.type&ze.STATIC)!==0||t.sleepState===ze.SLEEPING))}intersectionTest(e,t,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,s):this.doBoundingSphereBroadphase(e,t,i,s)}doBoundingSphereBroadphase(e,t,i,s){let r=IE;t.position.vsub(e.position,r);let o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(i.push(e),s.push(t))}doBoundingBoxBroadphase(e,t,i,s){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),s.push(t))}makePairsUnique(e,t){let i=RE,s=NE,r=PE,o=e.length;for(let a=0;a!==o;a++)s[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;i[u]=a,i.keys.push(u)}for(let a=0;a!==i.keys.length;a++){let l=i.keys.pop(),c=i[l];e.push(s[c]),t.push(r[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){let i=new C;e.position.vsub(t.position,i);let s=e.shapes[0],r=t.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},IE=new C;new C;new Xt;new C;var RE={keys:[]},NE=[],PE=[];new C;var SN=new C;new C;var Qu=class extends sl{constructor(){super()}collisionPairs(e,t,i){let s=e.bodies,r=s.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let s=0;s<e.bodies.length;s++){let r=e.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&i.push(r)}return i}},As=class{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,s,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},Ug,Fg,kg,zg,Vg,Gg,Hg,uh={CLOSEST:1,ANY:2,ALL:4};Ug=Me.types.SPHERE;Fg=Me.types.PLANE;kg=Me.types.BOX;zg=Me.types.CYLINDER;Vg=Me.types.CONVEXPOLYHEDRON;Gg=Me.types.HEIGHTFIELD;Hg=Me.types.TRIMESH;var un=class n{get[Ug](){return this._intersectSphere}get[Fg](){return this._intersectPlane}get[kg](){return this._intersectBox}get[zg](){return this._intersectConvex}get[Vg](){return this._intersectConvex}get[Gg](){return this._intersectHeightfield}get[Hg](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new C),t===void 0&&(t=new C),this.from=e.clone(),this.to=t.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=n.ANY,this.result=new As,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||n.ANY,this.result=t.result||new As,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ag),$u.length=0,e.broadphase.aabbQuery(e,Ag,$u),this.intersectBodies($u),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let i=this.checkCollisionResponse;if(i&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let s=DE,r=LE;for(let o=0,a=e.shapes.length;o<a;o++){let l=e.shapes[o];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],s),s.vadd(e.position,s),this.intersectShape(l,r,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,s=e.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,s){let r=this.from;if(JE(r,this.direction,i)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,i,s,e)}_intersectBox(e,t,i,s,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,s,r)}_intersectPlane(e,t,i,s,r){let o=this.from,a=this.to,l=this.direction,c=new C(0,0,1);t.vmult(c,c);let u=new C;o.vsub(i,u);let d=u.dot(c);a.vsub(i,u);let h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let p=new C,y=new C,m=new C;o.vsub(i,p);let g=-c.dot(p)/f;l.scale(g,y),o.vadd(y,m),this.reportIntersection(c,m,r,s,-1)}getAABB(e){let{lowerBound:t,upperBound:i}=e,s=this.to,r=this.from;t.x=Math.min(s.x,r.x),t.y=Math.min(s.y,r.y),t.z=Math.min(s.z,r.z),i.x=Math.max(s.x,r.x),i.y=Math.max(s.y,r.y),i.z=Math.max(s.z,r.z)}_intersectHeightfield(e,t,i,s,r){e.data,e.elementSize;let o=BE;o.from.copy(this.from),o.to.copy(this.to),tt.pointToLocalFrame(i,t,o.from,o.from),tt.pointToLocalFrame(i,t,o.to,o.to),o.updateDirection();let a=OE,l,c,u,d;l=c=0,u=d=e.data.length-1;let h=new tn;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(f,p,!1),tt.pointToWorldFrame(i,t,e.pillarOffset,ja),this._intersectConvex(e.pillarConvex,t,ja,s,r,wg),this.result.shouldStop)return;e.getConvexTrianglePillar(f,p,!0),tt.pointToWorldFrame(i,t,e.pillarOffset,ja),this._intersectConvex(e.pillarConvex,t,ja,s,r,wg)}}}_intersectSphere(e,t,i,s,r){let o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-i.x)+(a.y-o.y)*(o.y-i.y)+(a.z-o.z)*(o.z-i.z)),d=(o.x-i.x)**2+(o.y-i.y)**2+(o.z-i.z)**2-l**2,h=u**2-4*c*d,f=UE,p=FE;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(i,p),p.normalize(),this.reportIntersection(p,f,r,s,-1);else{let y=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(y>=0&&y<=1&&(o.lerp(a,y,f),f.vsub(i,p),p.normalize(),this.reportIntersection(p,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(i,p),p.normalize(),this.reportIntersection(p,f,r,s,-1))}}_intersectConvex(e,t,i,s,r,o){let a=kE,l=Cg,c=o&&o.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,f=this.direction,p=this.from,y=this.to,m=p.distanceTo(y),g=c?c.length:u.length,_=this.result;for(let b=0;!_.shouldStop&&b<g;b++){let M=c?c[b]:b,S=u[M],T=h[M],v=t,x=i;l.copy(d[S[0]]),v.vmult(l,l),l.vadd(x,l),l.vsub(p,l),v.vmult(T,a);let R=f.dot(a);if(Math.abs(R)<this.precision)continue;let w=a.dot(l)/R;if(!(w<0)){f.scale(w,Zt),Zt.vadd(p,Zt),xn.copy(d[S[0]]),v.vmult(xn,xn),x.vadd(xn,xn);for(let I=1;!_.shouldStop&&I<S.length-1;I++){Bn.copy(d[S[I]]),On.copy(d[S[I+1]]),v.vmult(Bn,Bn),v.vmult(On,On),x.vadd(Bn,Bn),x.vadd(On,On);let L=Zt.distanceTo(p);!(n.pointInTriangle(Zt,xn,Bn,On)||n.pointInTriangle(Zt,Bn,xn,On))||L>m||this.reportIntersection(a,Zt,r,s,M)}}}}_intersectTrimesh(e,t,i,s,r,o){let a=GE,l=$E,c=ZE,u=Cg,d=HE,h=WE,f=XE,p=YE,y=qE,m=e.indices;e.vertices;let g=this.from,_=this.to,b=this.direction;c.position.copy(i),c.quaternion.copy(t),tt.vectorToLocalFrame(i,t,b,d),tt.pointToLocalFrame(i,t,g,h),tt.pointToLocalFrame(i,t,_,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,d),d.normalize();let M=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let S=0,T=l.length;!this.result.shouldStop&&S!==T;S++){let v=l[S];e.getNormal(v,a),e.getVertex(m[v*3],xn),xn.vsub(h,u);let x=d.dot(a),R=a.dot(u)/x;if(R<0)continue;d.scale(R,Zt),Zt.vadd(h,Zt),e.getVertex(m[v*3+1],Bn),e.getVertex(m[v*3+2],On);let w=Zt.distanceSquared(h);!(n.pointInTriangle(Zt,Bn,xn,On)||n.pointInTriangle(Zt,xn,Bn,On))||w>M||(tt.vectorToWorldFrame(t,a,y),tt.pointToWorldFrame(i,t,Zt,p),this.reportIntersection(y,p,r,s,v))}l.length=0}reportIntersection(e,t,i,s,r){let o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case n.ALL:this.hasHit=!0,c.set(o,a,e,t,i,s,l),c.hasHit=!0,this.callback(c);break;case n.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,s,l));break;case n.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,s,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,s){s.vsub(t,Hi),i.vsub(t,Ir),e.vsub(t,Zu);let r=Hi.dot(Hi),o=Hi.dot(Ir),a=Hi.dot(Zu),l=Ir.dot(Ir),c=Ir.dot(Zu),u,d;return(u=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&u+d<r*l-o*o}};un.CLOSEST=uh.CLOSEST;un.ANY=uh.ANY;un.ALL=uh.ALL;var Ag=new tn,$u=[],Ir=new C,Zu=new C,DE=new C,LE=new Xt,Zt=new C,xn=new C,Bn=new C,On=new C;new C;new As;var wg={faceList:[0]},ja=new C,BE=new un,OE=[],UE=new C,FE=new C,kE=new C,zE=new C,VE=new C,Cg=new C,GE=new C,HE=new C,WE=new C,XE=new C,qE=new C,YE=new C;new tn;var $E=[],ZE=new tt,Hi=new C,Ka=new C;function JE(n,e,t){t.vsub(n,Hi);let i=Hi.dot(e);return e.scale(i,Ka),Ka.vadd(n,Ka),t.distanceTo(Ka)}var rl=class n extends sl{static checkBounds(e,t,i){let s,r;i===0?(s=e.position.x,r=t.position.x):i===1?(s=e.position.y,r=t.position.y):i===2&&(s=e.position.z,r=t.position.z);let o=e.boundingRadius,a=t.boundingRadius,l=s+o;return r-a<l}static insertionSortX(e){for(let t=1,i=e.length;t<i;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortY(e){for(let t=1,i=e.length;t<i;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortZ(e){for(let t=1,i=e.length;t<i;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=s}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let t=this.axisList;this._addBodyHandler=i=>{t.push(i.body)},this._removeBodyHandler=i=>{let s=t.indexOf(i.body);s!==-1&&t.splice(s,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,i){let s=this.axisList,r=s.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=s[a];for(l=a+1;l<r;l++){let u=s[l];if(this.needBroadphaseCollision(c,u)){if(!n.checkBounds(c,u,o))break;this.intersectionTest(c,u,t,i)}}}}sortList(){let e=this.axisList,t=this.axisIndex,i=e.length;for(let s=0;s!==i;s++){let r=e[s];r.aabbNeedsUpdate&&r.updateAABB()}t===0?n.insertionSortX(e):t===1?n.insertionSortY(e):t===2&&n.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,i=0,s=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let p=a[f],y=p.position.x;e+=y,t+=y*y;let m=p.position.y;i+=m,s+=m*m;let g=p.position.z;r+=g,o+=g*g}let u=t-e*e*c,d=s-i*i*c,h=o-r*r*c;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,i){i===void 0&&(i=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;t.lowerBound[r],t.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&i.push(l)}return i}},ol=class{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}},eh=class n{constructor(e,t,i){i===void 0&&(i={}),i=ol.defaults(i,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=n.idCounter++,this.collideConnected=i.collideConnected,i.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};eh.idCounter=0;var al=class{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},Lr=class n{constructor(e,t,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=n.idCounter++,this.minForce=i,this.maxForce=s,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new al,this.jacobianElementB=new al,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){let s=t,r=e,o=i;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(e,t,i){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-s*t-o*i}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.position,o=s.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.velocity,o=s.velocity,a=i.angularVelocity,l=s.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.vlambda,o=s.vlambda,a=i.wlambda,l=s.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.force,o=i.torque,a=s.force,l=s.torque,c=i.invMassSolve,u=s.invMassSolve;return r.scale(c,Ig),a.scale(u,Rg),i.invInertiaWorldSolve.vmult(o,Ng),s.invInertiaWorldSolve.vmult(l,Pg),e.multiplyVectors(Ig,Ng)+t.multiplyVectors(Rg,Pg)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.invMassSolve,o=s.invMassSolve,a=i.invInertiaWorldSolve,l=s.invInertiaWorldSolve,c=r+o;return a.vmult(e.rotational,Qa),c+=Qa.dot(e.rotational),l.vmult(t.rotational,Qa),c+=Qa.dot(t.rotational),c}addToWlambda(e){let t=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,r=this.bj,o=jE;s.vlambda.addScaledVector(s.invMassSolve*e,t.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,i.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(t.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda),r.invInertiaWorldSolve.vmult(i.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Lr.idCounter=0;var Ig=new C,Rg=new C,Ng=new C,Pg=new C,Qa=new C,jE=new C,th=class extends Lr{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(e){let t=this.a,i=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=KE,c=QE,u=s.velocity,d=s.angularVelocity;s.force,s.torque;let h=r.velocity,f=r.angularVelocity;r.force,r.torque;let p=eT,y=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(y.spatial),l.negate(y.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(o,p);let _=g.dot(p),b=this.restitution+1,M=b*h.dot(g)-b*u.dot(g)+f.dot(c)-d.dot(l),S=this.computeGiMf();return-_*t-M*i-e*S}getImpactVelocityAlongNormal(){let e=tT,t=nT,i=iT,s=sT,r=rT;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(s,t),e.vsub(t,r),this.ni.dot(r)}},KE=new C,QE=new C,eT=new C,tT=new C,nT=new C,iT=new C,sT=new C,rT=new C;var EN=new C,TN=new C;var AN=new C,wN=new C;new C;new C;var CN=new C,IN=new C;var RN=new C,NN=new C,ll=class extends Lr{constructor(e,t,i){super(e,t,-i,i),this.ri=new C,this.rj=new C,this.t=new C}computeB(e){this.a;let t=this.b;this.bi,this.bj;let i=this.ri,s=this.rj,r=oT,o=aT,a=this.t;i.cross(a,r),s.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}},oT=new C,aT=new C,ws=class n{constructor(e,t,i){i=ol.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=n.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}};ws.idCounter=0;var Cs=class n{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=n.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};Cs.idCounter=0;var PN=new C,DN=new C,LN=new C,BN=new C,ON=new C,UN=new C,FN=new C,kN=new C,zN=new C,VN=new C,GN=new C;var HN=new C,WN=new C;new C;new C;new C;var XN=new C,qN=new C,YN=new C;new un;new C;var $N=new C,ZN=new C,JN=[new C(1,0,0),new C(0,1,0),new C(0,0,1)],jN=new C;var KN=new C,QN=new C,eP=new C;var tP=new C,nP=new C,iP=new C,sP=new C;var rP=new C,oP=new C,aP=new C;var lP=new C,cP=new C;var uP=new C,hP=new C,dP=new C,fP=new C,pP=new C,mP=new C,gP=new C;var Is=class extends Me{constructor(){super({type:Me.types.PLANE}),this.worldNormal=new C,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){let t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new C),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,i,s){Kn.set(0,0,1),t.vmult(Kn,Kn);let r=Number.MAX_VALUE;i.set(-r,-r,-r),s.set(r,r,r),Kn.x===1?s.x=e.x:Kn.x===-1&&(i.x=e.x),Kn.y===1?s.y=e.y:Kn.y===-1&&(i.y=e.y),Kn.z===1?s.z=e.z:Kn.z===-1&&(i.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},Kn=new C;var yP=new C,_P=new C,vP=new C,xP=new C,bP=new C,MP=new C,SP=new C,EP=new C,TP=new C;var AP=new C,wP=new tn;var CP=new C,IP=new tn,RP=new C,NP=new C,PP=new C,DP=new C,LP=new C,BP=new C,OP=new C,UP=new tn,FP=new C,kP=new tt,zP=new tn,nh=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}},ih=class extends nh{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e,d,h,f,p,y,m;if(a!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();let g=cT,_=uT,b=lT;g.length=a,_.length=a,b.length=a;for(let M=0;M!==a;M++){let S=o[M];b[M]=0,_[M]=S.computeB(u),g[M]=1/S.computeC()}if(a!==0){for(let T=0;T!==c;T++){let v=l[T],x=v.vlambda,R=v.wlambda;x.set(0,0,0),R.set(0,0,0)}for(i=0;i!==s;i++){p=0;for(let T=0;T!==a;T++){let v=o[T];d=_[T],h=g[T],m=b[T],y=v.computeGWlambda(),f=h*(d-y-v.eps*m),m+f<v.minForce?f=v.minForce-m:m+f>v.maxForce&&(f=v.maxForce-m),b[T]+=f,p+=f>0?f:-f,v.addToWlambda(f)}if(p*p<r)break}for(let T=0;T!==c;T++){let v=l[T],x=v.velocity,R=v.angularVelocity;v.vlambda.vmul(v.linearFactor,v.vlambda),x.vadd(v.vlambda,x),v.wlambda.vmul(v.angularFactor,v.wlambda),R.vadd(v.wlambda,R)}let M=o.length,S=1/u;for(;M--;)o[M].multiplier=b[M]*S}return i}},lT=[],cT=[],uT=[];var VP=ze.STATIC;var sh=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},rh=class extends sh{constructor(){super(...arguments),this.type=C}constructObject(){return new C}},ct={sphereSphere:Me.types.SPHERE,spherePlane:Me.types.SPHERE|Me.types.PLANE,boxBox:Me.types.BOX|Me.types.BOX,sphereBox:Me.types.SPHERE|Me.types.BOX,planeBox:Me.types.PLANE|Me.types.BOX,convexConvex:Me.types.CONVEXPOLYHEDRON,sphereConvex:Me.types.SPHERE|Me.types.CONVEXPOLYHEDRON,planeConvex:Me.types.PLANE|Me.types.CONVEXPOLYHEDRON,boxConvex:Me.types.BOX|Me.types.CONVEXPOLYHEDRON,sphereHeightfield:Me.types.SPHERE|Me.types.HEIGHTFIELD,boxHeightfield:Me.types.BOX|Me.types.HEIGHTFIELD,convexHeightfield:Me.types.CONVEXPOLYHEDRON|Me.types.HEIGHTFIELD,sphereParticle:Me.types.PARTICLE|Me.types.SPHERE,planeParticle:Me.types.PLANE|Me.types.PARTICLE,boxParticle:Me.types.BOX|Me.types.PARTICLE,convexParticle:Me.types.PARTICLE|Me.types.CONVEXPOLYHEDRON,cylinderCylinder:Me.types.CYLINDER,sphereCylinder:Me.types.SPHERE|Me.types.CYLINDER,planeCylinder:Me.types.PLANE|Me.types.CYLINDER,boxCylinder:Me.types.BOX|Me.types.CYLINDER,convexCylinder:Me.types.CONVEXPOLYHEDRON|Me.types.CYLINDER,heightfieldCylinder:Me.types.HEIGHTFIELD|Me.types.CYLINDER,particleCylinder:Me.types.PARTICLE|Me.types.CYLINDER,sphereTrimesh:Me.types.SPHERE|Me.types.TRIMESH,planeTrimesh:Me.types.PLANE|Me.types.TRIMESH},oh=class{get[ct.sphereSphere](){return this.sphereSphere}get[ct.spherePlane](){return this.spherePlane}get[ct.boxBox](){return this.boxBox}get[ct.sphereBox](){return this.sphereBox}get[ct.planeBox](){return this.planeBox}get[ct.convexConvex](){return this.convexConvex}get[ct.sphereConvex](){return this.sphereConvex}get[ct.planeConvex](){return this.planeConvex}get[ct.boxConvex](){return this.boxConvex}get[ct.sphereHeightfield](){return this.sphereHeightfield}get[ct.boxHeightfield](){return this.boxHeightfield}get[ct.convexHeightfield](){return this.convexHeightfield}get[ct.sphereParticle](){return this.sphereParticle}get[ct.planeParticle](){return this.planeParticle}get[ct.boxParticle](){return this.boxParticle}get[ct.convexParticle](){return this.convexParticle}get[ct.cylinderCylinder](){return this.convexConvex}get[ct.sphereCylinder](){return this.sphereConvex}get[ct.planeCylinder](){return this.planeConvex}get[ct.boxCylinder](){return this.boxConvex}get[ct.convexCylinder](){return this.convexConvex}get[ct.heightfieldCylinder](){return this.heightfieldCylinder}get[ct.particleCylinder](){return this.particleCylinder}get[ct.sphereTrimesh](){return this.sphereTrimesh}get[ct.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new rh,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new th(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&s.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=i.material||e.material,u=s.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||i,a.sj=o||s,a}createFrictionEquationsFromContact(e,t){let i=e.bi,s=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,u=r.material||i.material,d=o.material||s.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){let h=c*(a.frictionGravity||a.gravity).length(),f=i.invMass+s.invMass;f>0&&(f=1/f);let p=this.frictionEquationPool,y=p.length?p.pop():new ll(i,s,h*f),m=p.length?p.pop():new ll(i,s,h*f);return y.bi=m.bi=i,y.bj=m.bj=s,y.minForce=m.minForce=-h*f,y.maxForce=m.maxForce=h*f,y.ri.copy(e.ri),y.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(y.t,m.t),y.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),y.enabled=m.enabled=e.enabled,t.push(y,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Gi.setZero(),Es.setZero(),Ts.setZero();let r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Gi.vadd(t.ni,Gi),Es.vadd(t.ri,Es),Ts.vadd(t.rj,Ts)):(Gi.vsub(t.ni,Gi),Es.vadd(t.rj,Es),Ts.vadd(t.ri,Ts));let o=1/e;Es.scale(o,i.ri),Ts.scale(o,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),Gi.normalize(),Gi.tangents(i.t,s.t)}getContacts(e,t,i,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let l=fT,c=pT,u=hT,d=dT;for(let h=0,f=e.length;h!==f;h++){let p=e[h],y=t[h],m=null;p.material&&y.material&&(m=i.getContactMaterial(p.material,y.material)||null);let g=p.type&ze.KINEMATIC&&y.type&ze.STATIC||p.type&ze.STATIC&&y.type&ze.KINEMATIC||p.type&ze.KINEMATIC&&y.type&ze.KINEMATIC;for(let _=0;_<p.shapes.length;_++){p.quaternion.mult(p.shapeOrientations[_],l),p.quaternion.vmult(p.shapeOffsets[_],u),u.vadd(p.position,u);let b=p.shapes[_];for(let M=0;M<y.shapes.length;M++){y.quaternion.mult(y.shapeOrientations[M],c),y.quaternion.vmult(y.shapeOffsets[M],d),d.vadd(y.position,d);let S=y.shapes[M];if(!(b.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&b.collisionFilterGroup)||u.distanceTo(d)>b.boundingSphereRadius+S.boundingSphereRadius)continue;let T=null;b.material&&S.material&&(T=i.getContactMaterial(b.material,S.material)||null),this.currentContactMaterial=T||m||i.defaultContactMaterial;let v=b.type|S.type,x=this[v];if(x){let R=!1;b.type<S.type?R=x.call(this,b,S,u,d,l,c,p,y,b,S,g):R=x.call(this,S,b,d,u,c,l,y,p,b,S,g),R&&g&&(i.shapeOverlapKeeper.set(b.id,S.id),i.bodyOverlapKeeper.set(p.id,y.id))}}}}}sphereSphere(e,t,i,s,r,o,a,l,c,u,d){if(d)return i.distanceSquared(s)<(e.radius+t.radius)**2;let h=this.createContactEquation(a,l,e,t,c,u);s.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,i,s,r,o,a,l,c,u,d){let h=this.createContactEquation(a,l,e,t,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),i.vsub(s,el),h.ni.scale(h.ni.dot(el),Dg),el.vsub(Dg,h.rj),-el.dot(h.ni)<=e.radius){if(d)return!0;let f=h.ri,p=h.rj;f.vadd(i,f),f.vsub(a.position,f),p.vadd(s,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,i,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,s,r,o,a,l,e,t,d)}sphereBox(e,t,i,s,r,o,a,l,c,u,d){let h=this.v3pool,f=zT;i.vsub(s,tl),t.getSideNormals(f,o);let p=e.radius,y=!1,m=GT,g=HT,_=WT,b=null,M=0,S=0,T=0,v=null;for(let O=0,V=f.length;O!==V&&y===!1;O++){let Y=UT;Y.copy(f[O]);let U=Y.length();Y.normalize();let G=tl.dot(Y);if(G<U+p&&G>0){let J=FT,K=kT;J.copy(f[(O+1)%3]),K.copy(f[(O+2)%3]);let _e=J.length(),Z=K.length();J.normalize(),K.normalize();let re=tl.dot(J),xe=tl.dot(K);if(re<_e&&re>-_e&&xe<Z&&xe>-Z){let Ae=Math.abs(G-U-p);if((v===null||Ae<v)&&(v=Ae,S=re,T=xe,b=U,m.copy(Y),g.copy(J),_.copy(K),M++,d))return!0}}}if(M){y=!0;let O=this.createContactEquation(a,l,e,t,c,u);m.scale(-p,O.ri),O.ni.copy(m),O.ni.negate(O.ni),m.scale(b,m),g.scale(S,g),m.vadd(g,m),_.scale(T,_),m.vadd(_,O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(s,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}let x=h.get(),R=VT;for(let O=0;O!==2&&!y;O++)for(let V=0;V!==2&&!y;V++)for(let Y=0;Y!==2&&!y;Y++)if(x.set(0,0,0),O?x.vadd(f[0],x):x.vsub(f[0],x),V?x.vadd(f[1],x):x.vsub(f[1],x),Y?x.vadd(f[2],x):x.vsub(f[2],x),s.vadd(x,R),R.vsub(i,R),R.lengthSquared()<p*p){if(d)return!0;y=!0;let U=this.createContactEquation(a,l,e,t,c,u);U.ri.copy(R),U.ri.normalize(),U.ni.copy(U.ri),U.ri.scale(p,U.ri),U.rj.copy(x),U.ri.vadd(i,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(s,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}h.release(x),x=null;let w=h.get(),I=h.get(),L=h.get(),D=h.get(),N=h.get(),B=f.length;for(let O=0;O!==B&&!y;O++)for(let V=0;V!==B&&!y;V++)if(O%3!==V%3){f[V].cross(f[O],w),w.normalize(),f[O].vadd(f[V],I),L.copy(i),L.vsub(I,L),L.vsub(s,L);let Y=L.dot(w);w.scale(Y,D);let U=0;for(;U===O%3||U===V%3;)U++;N.copy(i),N.vsub(D,N),N.vsub(I,N),N.vsub(s,N);let G=Math.abs(Y),J=N.length();if(G<f[U].length()&&J<p){if(d)return!0;y=!0;let K=this.createContactEquation(a,l,e,t,c,u);I.vadd(D,K.rj),K.rj.copy(K.rj),N.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(s,K.ri),K.ri.vsub(i,K.ri),K.ri.normalize(),K.ri.scale(p,K.ri),K.ri.vadd(i,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(s,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}h.release(w,I,L,D,N)}planeBox(e,t,i,s,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,s,r,o,a,l,e,t,d)}convexConvex(e,t,i,s,r,o,a,l,c,u,d,h,f){let p=rA;if(!(i.distanceTo(s)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,r,s,o,p,h,f)){let y=[],m=oA;e.clipAgainstHull(i,r,t,s,o,p,-100,100,y);let g=0;for(let _=0;_!==y.length;_++){if(d)return!0;let b=this.createContactEquation(a,l,e,t,c,u),M=b.ri,S=b.rj;p.negate(b.ni),y[_].normal.negate(m),m.scale(y[_].depth,m),y[_].point.vadd(m,M),S.copy(y[_].point),M.vsub(i,M),S.vsub(s,S),M.vadd(i,M),M.vsub(a.position,M),S.vadd(s,S),S.vsub(l.position,S),this.result.push(b),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,i,s,r,o,a,l,c,u,d){let h=this.v3pool;i.vsub(s,XT);let f=t.faceNormals,p=t.faces,y=t.vertices,m=e.radius,g=!1;for(let _=0;_!==y.length;_++){let b=y[_],M=ZT;o.vmult(b,M),s.vadd(M,M);let S=$T;if(M.vsub(i,S),S.lengthSquared()<m*m){if(d)return!0;g=!0;let T=this.createContactEquation(a,l,e,t,c,u);T.ri.copy(S),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),M.vsub(s,T.rj),T.ri.vadd(i,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(s,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let _=0,b=p.length;_!==b&&g===!1;_++){let M=f[_],S=p[_],T=JT;o.vmult(M,T);let v=jT;o.vmult(y[S[0]],v),v.vadd(s,v);let x=KT;T.scale(-m,x),i.vadd(x,x);let R=QT;x.vsub(v,R);let w=R.dot(T),I=eA;if(i.vsub(v,I),w<0&&I.dot(T)>0){let L=[];for(let D=0,N=S.length;D!==N;D++){let B=h.get();o.vmult(y[S[D]],B),s.vadd(B,B),L.push(B)}if(OT(L,T,i)){if(d)return!0;g=!0;let D=this.createContactEquation(a,l,e,t,c,u);T.scale(-m,D.ri),T.negate(D.ni);let N=h.get();T.scale(-w,N);let B=h.get();T.scale(-m,B),i.vsub(s,D.rj),D.rj.vadd(B,D.rj),D.rj.vadd(N,D.rj),D.rj.vadd(s,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(i,D.ri),D.ri.vsub(a.position,D.ri),h.release(N),h.release(B),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let O=0,V=L.length;O!==V;O++)h.release(L[O]);return}else for(let D=0;D!==S.length;D++){let N=h.get(),B=h.get();o.vmult(y[S[(D+1)%S.length]],N),o.vmult(y[S[(D+2)%S.length]],B),s.vadd(N,N),s.vadd(B,B);let O=qT;B.vsub(N,O);let V=YT;O.unit(V);let Y=h.get(),U=h.get();i.vsub(N,U);let G=U.dot(V);V.scale(G,Y),Y.vadd(N,Y);let J=h.get();if(Y.vsub(i,J),G>0&&G*G<O.lengthSquared()&&J.lengthSquared()<m*m){if(d)return!0;let K=this.createContactEquation(a,l,e,t,c,u);Y.vsub(s,K.rj),Y.vsub(i,K.ni),K.ni.normalize(),K.ni.scale(m,K.ri),K.rj.vadd(s,K.rj),K.rj.vsub(l.position,K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(a.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let _e=0,Z=L.length;_e!==Z;_e++)h.release(L[_e]);h.release(N),h.release(B),h.release(Y),h.release(J),h.release(U);return}h.release(N),h.release(B),h.release(Y),h.release(J),h.release(U)}for(let D=0,N=L.length;D!==N;D++)h.release(L[D])}}}planeConvex(e,t,i,s,r,o,a,l,c,u,d){let h=tA,f=nA;f.set(0,0,1),r.vmult(f,f);let p=0,y=iA;for(let m=0;m!==t.vertices.length;m++)if(h.copy(t.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(i,y),f.dot(y)<=0){if(d)return!0;let _=this.createContactEquation(a,l,e,t,c,u),b=sA;f.scale(f.dot(y),b),h.vsub(b,b),b.vsub(i,_.ri),_.ni.copy(f),h.vsub(s,_.rj),_.ri.vadd(i,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(s,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,i,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,s,r,o,a,l,e,t,d)}sphereHeightfield(e,t,i,s,r,o,a,l,c,u,d){let h=t.data,f=e.radius,p=t.elementSize,y=_A,m=yA;tt.pointToLocalFrame(s,o,i,m);let g=Math.floor((m.x-f)/p)-1,_=Math.ceil((m.x+f)/p)+1,b=Math.floor((m.y-f)/p)-1,M=Math.ceil((m.y+f)/p)+1;if(_<0||M<0||g>h.length||b>h[0].length)return;g<0&&(g=0),_<0&&(_=0),b<0&&(b=0),M<0&&(M=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),M>=h[0].length&&(M=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);let S=[];t.getRectMinMax(g,b,_,M,S);let T=S[0],v=S[1];if(m.z-f>v||m.z+f<T)return;let x=this.result;for(let R=g;R<_;R++)for(let w=b;w<M;w++){let I=x.length,L=!1;if(t.getConvexTrianglePillar(R,w,!1),tt.pointToWorldFrame(s,o,t.pillarOffset,y),i.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(L=this.sphereConvex(e,t.pillarConvex,i,y,r,o,a,l,e,t,d)),d&&L||(t.getConvexTrianglePillar(R,w,!0),tt.pointToWorldFrame(s,o,t.pillarOffset,y),i.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(L=this.sphereConvex(e,t.pillarConvex,i,y,r,o,a,l,e,t,d)),d&&L))return!0;if(x.length-I>2)return}}boxHeightfield(e,t,i,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,s,r,o,a,l,e,t,d)}convexHeightfield(e,t,i,s,r,o,a,l,c,u,d){let h=t.data,f=t.elementSize,p=e.boundingSphereRadius,y=mA,m=gA,g=pA;tt.pointToLocalFrame(s,o,i,g);let _=Math.floor((g.x-p)/f)-1,b=Math.ceil((g.x+p)/f)+1,M=Math.floor((g.y-p)/f)-1,S=Math.ceil((g.y+p)/f)+1;if(b<0||S<0||_>h.length||M>h[0].length)return;_<0&&(_=0),b<0&&(b=0),M<0&&(M=0),S<0&&(S=0),_>=h.length&&(_=h.length-1),b>=h.length&&(b=h.length-1),S>=h[0].length&&(S=h[0].length-1),M>=h[0].length&&(M=h[0].length-1);let T=[];t.getRectMinMax(_,M,b,S,T);let v=T[0],x=T[1];if(!(g.z-p>x||g.z+p<v))for(let R=_;R<b;R++)for(let w=M;w<S;w++){let I=!1;if(t.getConvexTrianglePillar(R,w,!1),tt.pointToWorldFrame(s,o,t.pillarOffset,y),i.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,i,y,r,o,a,l,null,null,d,m,null)),d&&I||(t.getConvexTrianglePillar(R,w,!0),tt.pointToWorldFrame(s,o,t.pillarOffset,y),i.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,i,y,r,o,a,l,null,null,d,m,null)),d&&I))return!0}}sphereParticle(e,t,i,s,r,o,a,l,c,u,d){let h=uA;if(h.set(0,0,1),s.vsub(i,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;let p=this.createContactEquation(l,a,t,e,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(e.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,i,s,r,o,a,l,c,u,d){let h=aA;h.set(0,0,1),a.quaternion.vmult(h,h);let f=lA;if(s.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;let y=this.createContactEquation(l,a,t,e,c,u);y.ni.copy(h),y.ni.negate(y.ni),y.ri.set(0,0,0);let m=cA;h.scale(h.dot(s),m),s.vsub(m,m),y.rj.copy(m),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}boxParticle(e,t,i,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,s,r,o,a,l,e,t,d)}convexParticle(e,t,i,s,r,o,a,l,c,u,d){let h=-1,f=dA,p=fA,y=null,m=hA;if(m.copy(s),m.vsub(i,m),r.conjugate(Lg),Lg.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let g=0,_=e.faces.length;g!==_;g++){let b=[e.worldVertices[e.faces[g][0]]],M=e.worldFaceNormals[g];s.vsub(b[0],Bg);let S=-M.dot(Bg);if(y===null||Math.abs(S)<Math.abs(y)){if(d)return!0;y=S,h=g,f.copy(M)}}if(h!==-1){let g=this.createContactEquation(l,a,t,e,c,u);f.scale(y,p),p.vadd(s,p),p.vsub(i,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);let _=g.ri,b=g.rj;_.vadd(s,_),_.vsub(l.position,_),b.vadd(i,b),b.vsub(a.position,b),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,s,r,o,a,l,c,u,d){return this.convexHeightfield(t,e,s,i,o,r,l,a,c,u,d)}particleCylinder(e,t,i,s,r,o,a,l,c,u,d){return this.convexParticle(t,e,s,i,o,r,l,a,c,u,d)}sphereTrimesh(e,t,i,s,r,o,a,l,c,u,d){let h=MT,f=ST,p=ET,y=TT,m=AT,g=wT,_=NT,b=bT,M=vT,S=PT;tt.pointToLocalFrame(s,o,i,m);let T=e.radius;_.lowerBound.set(m.x-T,m.y-T,m.z-T),_.upperBound.set(m.x+T,m.y+T,m.z+T),t.getTrianglesInAABB(_,S);let v=xT,x=e.radius*e.radius;for(let D=0;D<S.length;D++)for(let N=0;N<3;N++)if(t.getVertex(t.indices[S[D]*3+N],v),v.vsub(m,M),M.lengthSquared()<=x){if(b.copy(v),tt.pointToWorldFrame(s,o,b,v),v.vsub(i,M),d)return!0;let B=this.createContactEquation(a,l,e,t,c,u);B.ni.copy(M),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(e.radius,B.ri),B.ri.vadd(i,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(v),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let D=0;D<S.length;D++)for(let N=0;N<3;N++){t.getVertex(t.indices[S[D]*3+N],h),t.getVertex(t.indices[S[D]*3+(N+1)%3],f),f.vsub(h,p),m.vsub(f,g);let B=g.dot(p);m.vsub(h,g);let O=g.dot(p);if(O>0&&B<0&&(m.vsub(h,g),y.copy(p),y.normalize(),O=g.dot(y),y.scale(O,g),g.vadd(h,g),g.distanceTo(m)<e.radius)){if(d)return!0;let Y=this.createContactEquation(a,l,e,t,c,u);g.vsub(m,Y.ni),Y.ni.normalize(),Y.ni.scale(e.radius,Y.ri),Y.ri.vadd(i,Y.ri),Y.ri.vsub(a.position,Y.ri),tt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,Y.rj),tt.vectorToWorldFrame(o,Y.ni,Y.ni),tt.vectorToWorldFrame(o,Y.ri,Y.ri),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}let R=CT,w=IT,I=RT,L=_T;for(let D=0,N=S.length;D!==N;D++){t.getTriangleVertices(S[D],R,w,I),t.getNormal(S[D],L),m.vsub(R,g);let B=g.dot(L);if(L.scale(B,g),m.vsub(g,g),B=g.distanceTo(m),un.pointInTriangle(g,R,w,I)&&B<e.radius){if(d)return!0;let O=this.createContactEquation(a,l,e,t,c,u);g.vsub(m,O.ni),O.ni.normalize(),O.ni.scale(e.radius,O.ri),O.ri.vadd(i,O.ri),O.ri.vsub(a.position,O.ri),tt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,O.rj),tt.vectorToWorldFrame(o,O.ni,O.ni),tt.vectorToWorldFrame(o,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}S.length=0}planeTrimesh(e,t,i,s,r,o,a,l,c,u,d){let h=new C,f=mT;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<t.vertices.length/3;p++){t.getVertex(p,h);let y=new C;y.copy(h),tt.pointToWorldFrame(s,o,y,h);let m=gT;if(h.vsub(i,m),f.dot(m)<=0){if(d)return!0;let _=this.createContactEquation(a,l,e,t,c,u);_.ni.copy(f);let b=yT;f.scale(m.dot(f),b),h.vsub(b,b),_.ri.copy(b),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}},Gi=new C,Es=new C,Ts=new C,hT=new C,dT=new C,fT=new Xt,pT=new Xt,mT=new C,gT=new C,yT=new C,_T=new C,vT=new C;new C;var xT=new C,bT=new C,MT=new C,ST=new C,ET=new C,TT=new C,AT=new C,wT=new C,CT=new C,IT=new C,RT=new C,NT=new tn,PT=[],el=new C,Dg=new C,DT=new C,LT=new C,BT=new C;function OT(n,e,t){let i=null,s=n.length;for(let r=0;r!==s;r++){let o=n[r],a=DT;n[(r+1)%s].vsub(o,a);let l=LT;a.cross(e,l);let c=BT;t.vsub(o,c);let u=l.dot(c);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}var tl=new C,UT=new C,FT=new C,kT=new C,zT=[new C,new C,new C,new C,new C,new C],VT=new C,GT=new C,HT=new C,WT=new C,XT=new C,qT=new C,YT=new C,$T=new C,ZT=new C,JT=new C,jT=new C,KT=new C,QT=new C,eA=new C;new C;new C;var tA=new C,nA=new C,iA=new C,sA=new C,rA=new C,oA=new C,aA=new C,lA=new C,cA=new C,uA=new C,Lg=new Xt,hA=new C;new C;var dA=new C,Bg=new C,fA=new C,pA=new C,mA=new C,gA=[0],yA=new C,_A=new C,cl=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let i=t;t=e,e=i}return e<<16|t}set(e,t){let i=this.getKey(e,t),s=this.current,r=0;for(;i>s[r];)r++;if(i!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=i}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let i=this.current,s=this.previous,r=i.length,o=s.length,a=0;for(let l=0;l<r;l++){let c=!1,u=i[l];for(;u>s[a];)a++;c=u===s[a],c||Og(e,u)}a=0;for(let l=0;l<o;l++){let c=!1,u=s[l];for(;u>i[a];)a++;c=i[a]===u,c||Og(t,u)}}};function Og(n,e){n.push((e&4294901760)>>16,e&65535)}var Ju=(n,e)=>n<e?`${n}-${e}`:`${e}-${n}`,ah=class{constructor(){this.data={keys:[]}}get(e,t){let i=Ju(e,t);return this.data[i]}set(e,t,i){let s=Ju(e,t);this.get(e,t)||this.data.keys.push(s),this.data[s]=i}delete(e,t){let i=Ju(e,t),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let i=t.pop();delete e[i]}}},ul=class extends il{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Qu,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new ih,this.constraints=[],this.narrowphase=new oh(this),this.collisionMatrix=new nl,this.collisionMatrixPrevious=new nl,this.bodyOverlapKeeper=new cl,this.shapeOverlapKeeper=new cl,this.contactmaterials=[],this.contactMaterialTable=new ah,this.defaultMaterial=new Cs("default"),this.defaultContactMaterial=new ws(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof As?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,s){return i===void 0&&(i={}),i.mode=un.ALL,i.from=e,i.to=t,i.callback=s,ju.intersectWorld(this,i)}raycastAny(e,t,i,s){return i===void 0&&(i={}),i.mode=un.ANY,i.from=e,i.to=t,i.result=s,ju.intersectWorld(this,i)}raycastClosest(e,t,i,s){return i===void 0&&(i={}),i.mode=un.CLOSEST,i.from=e,i.to=t,i.result=s,ju.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ze&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,i=this.bodies,s=i.indexOf(e);if(s!==-1){i.splice(s,1);for(let r=0;r!==i.length;r++)i[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let i=0;i<t.length;i++){let s=t[i].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let i=St.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let s=i-this.lastCallTime;this.step(e,s,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let s=St.now(),r=0;for(;this.accumulator>=e&&r<i&&(this.internalStep(e),this.accumulator-=e,r++,!(St.now()-s>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,i=SA,s=EA,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=ze.DYNAMIC,h=-1/0,f=this.constraints,p=MA;l.length();let y=l.x,m=l.y,g=l.z,_=0;for(c&&(h=St.now()),_=0;_!==r;_++){let D=o[_];if(D.type===d){let N=D.force,B=D.mass;N.x+=B*y,N.y+=B*m,N.z+=B*g}}for(let D=0,N=this.subsystems.length;D!==N;D++)this.subsystems[D].update();c&&(h=St.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),c&&(u.broadphase=St.now()-h);let b=f.length;for(_=0;_!==b;_++){let D=f[_];if(!D.collideConnected)for(let N=i.length-1;N>=0;N-=1)(D.bodyA===i[N]&&D.bodyB===s[N]||D.bodyB===i[N]&&D.bodyA===s[N])&&(i.splice(N,1),s.splice(N,1))}this.collisionMatrixTick(),c&&(h=St.now());let M=bA,S=t.length;for(_=0;_!==S;_++)M.push(t[_]);t.length=0;let T=this.frictionEquations.length;for(_=0;_!==T;_++)p.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,t,M,this.frictionEquations,p),c&&(u.narrowphase=St.now()-h),c&&(h=St.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);let v=t.length;for(let D=0;D!==v;D++){let N=t[D],B=N.bi,O=N.bj,V=N.si,Y=N.sj,U;if(B.material&&O.material?U=this.getContactMaterial(B.material,O.material)||this.defaultContactMaterial:U=this.defaultContactMaterial,U.friction,B.material&&O.material&&(B.material.friction>=0&&O.material.friction>=0&&B.material.friction*O.material.friction,B.material.restitution>=0&&O.material.restitution>=0&&(N.restitution=B.material.restitution*O.material.restitution)),a.addEquation(N),B.allowSleep&&B.type===ze.DYNAMIC&&B.sleepState===ze.SLEEPING&&O.sleepState===ze.AWAKE&&O.type!==ze.STATIC){let G=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),J=O.sleepSpeedLimit**2;G>=J*2&&(B.wakeUpAfterNarrowphase=!0)}if(O.allowSleep&&O.type===ze.DYNAMIC&&O.sleepState===ze.SLEEPING&&B.sleepState===ze.AWAKE&&B.type!==ze.STATIC){let G=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),J=B.sleepSpeedLimit**2;G>=J*2&&(O.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,O,!0),this.collisionMatrixPrevious.get(B,O)||(Rr.body=O,Rr.contact=N,B.dispatchEvent(Rr),Rr.body=B,O.dispatchEvent(Rr)),this.bodyOverlapKeeper.set(B.id,O.id),this.shapeOverlapKeeper.set(V.id,Y.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=St.now()-h,h=St.now()),_=0;_!==r;_++){let D=o[_];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(b=f.length,_=0;_!==b;_++){let D=f[_];D.update();for(let N=0,B=D.equations.length;N!==B;N++){let O=D.equations[N];a.addEquation(O)}}a.solve(e,this),c&&(u.solve=St.now()-h),a.removeAllEquations();let x=Math.pow;for(_=0;_!==r;_++){let D=o[_];if(D.type&d){let N=x(1-D.linearDamping,e),B=D.velocity;B.scale(N,B);let O=D.angularVelocity;if(O){let V=x(1-D.angularDamping,e);O.scale(V,O)}}}this.dispatchEvent(xA),c&&(h=St.now());let w=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(e,w,I);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=St.now()-h),this.stepnumber+=1,this.dispatchEvent(vA);let L=!0;if(this.allowSleep)for(L=!1,_=0;_!==r;_++){let D=o[_];D.sleepTick(this.time),D.sleepState!==ze.SLEEPING&&(L=!0)}this.hasActiveBodies=L}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Qn,ei),e){for(let r=0,o=Qn.length;r<o;r+=2)Nr.bodyA=this.getBodyById(Qn[r]),Nr.bodyB=this.getBodyById(Qn[r+1]),this.dispatchEvent(Nr);Nr.bodyA=Nr.bodyB=null}if(t){for(let r=0,o=ei.length;r<o;r+=2)Pr.bodyA=this.getBodyById(ei[r]),Pr.bodyB=this.getBodyById(ei[r+1]),this.dispatchEvent(Pr);Pr.bodyA=Pr.bodyB=null}Qn.length=ei.length=0;let i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(Qn,ei),i){for(let r=0,o=Qn.length;r<o;r+=2){let a=this.getShapeById(Qn[r]),l=this.getShapeById(Qn[r+1]);ti.shapeA=a,ti.shapeB=l,a&&(ti.bodyA=a.body),l&&(ti.bodyB=l.body),this.dispatchEvent(ti)}ti.bodyA=ti.bodyB=ti.shapeA=ti.shapeB=null}if(s){for(let r=0,o=ei.length;r<o;r+=2){let a=this.getShapeById(ei[r]),l=this.getShapeById(ei[r+1]);ni.shapeA=a,ni.shapeB=l,a&&(ni.bodyA=a.body),l&&(ni.bodyB=l.body),this.dispatchEvent(ni)}ni.bodyA=ni.bodyB=ni.shapeA=ni.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let i=0;i!==t;i++){let s=e[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new tn;var ju=new un,St=globalThis.performance||{};if(!St.now){let n=Date.now();St.timing&&St.timing.navigationStart&&(n=St.timing.navigationStart),St.now=()=>Date.now()-n}new C;var vA={type:"postStep"},xA={type:"preStep"},Rr={type:ze.COLLIDE_EVENT_NAME,body:null,contact:null},bA=[],MA=[],SA=[],EA=[],Qn=[],ei=[],Nr={type:"beginContact",bodyA:null,bodyB:null},Pr={type:"endContact",bodyA:null,bodyB:null},ti={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ni={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Wg({bounds:n=null,gravity:e=-9.82,scale:t=Vi}={}){let i=new ul({gravity:new C(0,e,0)});i.allowSleep=!0,i.broadphase=new rl(i);let s=new Cs("easyui-3d");i.addContactMaterial(new ws(s,s,{friction:.25,restitution:.32}));let r=new Map,o=[],a=!1;function l(){for(let _ of o)i.removeBody(_);o.length=0}function c(_,b){let M=new ze({mass:0,material:s,shape:new Is});M.position.set(_.x,_.y,_.z||0),M.quaternion.setFromEuler(b.x||0,b.y||0,b.z||0),i.addBody(M),o.push(M)}function u(_){if(!_)return;l();let{left:b,right:M,top:S,bottom:T}=_,v=200/t;c({x:0,y:T,z:0},{x:-Math.PI/2}),c({x:b,y:0,z:0},{y:Math.PI/2}),c({x:M,y:0,z:0},{y:-Math.PI/2}),c({x:0,y:S,z:0},{x:Math.PI/2});let x=new ze({mass:0,material:s,shape:new Is});x.position.set(0,0,-v),i.addBody(x),o.push(x);let R=new ze({mass:0,material:s,shape:new Is});R.position.set(0,0,v),R.quaternion.setFromEuler(0,Math.PI,0),i.addBody(R),o.push(R)}function d(_,{position:b,halfExtents:M,mass:S=1}){r.has(_)&&h(_);let T=new Dr(new C(Math.max(.02,M.x),Math.max(.02,M.y),Math.max(.02,M.z))),v=new ze({mass:S,material:s,shape:T,position:new C(b.x,b.y,b.z||0)});return v.allowSleep=!0,v.sleepSpeedLimit=.15,v.sleepTimeLimit=1,v.linearDamping=.05,v.angularDamping=.2,i.addBody(v),r.set(_,v),v}function h(_){let b=r.get(_);b&&(i.removeBody(b),r.delete(_))}function f(_){a&&i.step(1/60,Math.min(.05,_),3)}function p(){for(let _ of r.values())_.wakeUp()}function y(_){if(a=!!_,a)p();else for(let b of r.values())b.sleep()}function m(_){for(let[b,M]of r)_(b,M.position,M.quaternion)}function g(){for(let _ of[...r.keys()])h(_);l()}return n&&u(n),{world:i,bodies:r,get enabled(){return a},setEnabled:y,setBounds:u,addBody:d,removeBody:h,step:f,sync:m,dispose:g}}function Xg(n,e=40,t=Vi){return{x:n/t/2,y:n/t/2,z:e/t/2}}var hh=45,qg=480,dh=360,hl=0;function Yg(){return hl}var fh=class{constructor(e,{rendererFactory:t,force2D:i=!1}={}){this.ctx=e,this.doc=e._doc,this.win=e._win,this.available=!1,this.running=!1,this.raf=null,this.objects=new Map,this.width=qg,this.height=dh,this.lastTick=0,this.physics=null,this._hoverId=null,this.canvas=this.doc.createElement("canvas"),this.canvas.className="easyui-3d-canvas",this.canvas.setAttribute("aria-hidden","true"),this.attachCanvas();try{if(i)throw new Error("force2D");this.renderer=t?t({canvas:this.canvas,alpha:!0,antialias:!0}):new Ya({canvas:this.canvas,alpha:!0,antialias:!0}),hl++}catch(s){this.renderer=null,console.warn("[EasyUI] WebGL 初始化失败，3D 组件将不可用：",s&&s.message?s.message:s),this.canvas.parentElement&&this.canvas.remove();return}if(this.renderer.setPixelRatio(Math.min(this.win.devicePixelRatio||1,2)),"outputColorSpace"in this.renderer&&(this.renderer.outputColorSpace=kt),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bi,this.renderer.setClearColor(0,0),this.scene=new tr,this.camera=new zt(hh,1,.1,4e3),this.camera.position.set(0,0,Ja(dh)),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(!0),this.raycaster=new pr,this.mapping=Wu({fov:hh,width:this.width,height:this.height}),this.lights=_g({bounds:this.mapping.bounds}),this.lights.setDirection({x:.6,y:-1,z:.8}),this.scene.add(this.lights.ambientLight,this.lights.directionalLight,this.lights.directionalLight.target),this._boundMove=s=>this.onPointerMove(s),this._boundClick=s=>this.onClick(s),this.win.addEventListener("mousemove",this._boundMove,!0),this.win.addEventListener("click",this._boundClick,!0),this._boundVisibility=()=>{this.doc.hidden?this.stop():this.shouldRun()&&this.start()},this.doc.addEventListener("visibilitychange",this._boundVisibility),this.win.ResizeObserver){let s=this.canvas.parentElement||this.doc.body;this.resizeObserver=new this.win.ResizeObserver(()=>this.resize()),this.resizeObserver.observe(s)}this.resize(),this.available=!0}attachCanvas(){let e=this.ctx&&this.ctx._stageContainer||this.ctx&&this.ctx._pagesContainer||this.doc.body;e&&this.canvas.parentElement!==e&&e.insertBefore(this.canvas,e.firstChild||null)}resize(){if(!this.available&&!this.renderer)return;let e=this.canvas.parentElement||this.doc.body,t={width:0,height:0};try{t=e.getBoundingClientRect()}catch{}this.width=Math.round(t.width)||qg,this.height=Math.round(t.height)||dh,this.renderer&&this.renderer.setSize(this.width,this.height,!1),this.camera&&(this.camera.aspect=this.width/this.height,this.camera.position.set(0,0,Ja(this.height)),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0)),this.mapping=Wu({fov:hh,width:this.width,height:this.height}),this.lights?.setDirection(this._lightDir||{x:.6,y:-1,z:.8}),this.physics&&this.physics.setBounds(this.mapping.bounds)}now(){let e=this.win.performance;return e&&typeof e.now=="function"?e.now():Date.now()}shouldRun(){return this.running&&(this.objects.size>0||this.physics&&this.physics.enabled)}start(){!this.available||this.running||this.doc.hidden||(this.running=!0,this.lastTick=this.now(),this.raf=this.win.requestAnimationFrame(e=>this.tick(e)))}stop(){this.running=!1,this.raf&&this.win.cancelAnimationFrame&&this.win.cancelAnimationFrame(this.raf),this.raf=null}tick(e){if(this.raf=null,!this.running)return;let t=typeof e=="number"?e:this.now(),i=Math.min(.05,Math.max(0,(t-this.lastTick)/1e3));this.lastTick=t,this.frame(i,t),this.shouldRun()&&!this.doc.hidden?this.raf=this.win.requestAnimationFrame(s=>this.tick(s)):this.running=!1}frame(e,t=this.now()){this.physics&&this.physics.enabled&&(this.physics.step(e),this.syncPhysicsToComponents());for(let i of this.objects.values())bg(i,e,t);this.renderer&&this.renderer.render(this.scene,this.camera)}register3DObject(e,t){if(!this.available||!e)return null;this.objects.has(t)&&this.unregister3DObject(t),e.userData.componentId=t,this.scene.add(e);let i={componentId:t,group:e,baseScale:e.scale.x||1,hover:0,hoverTarget:0,pressStart:0,pressDuration:220};return this.objects.set(t,i),this.physics&&this.physics.enabled&&this.addPhysicsBody(t),this.start(),i}unregister3DObject(e){let t=this.objects.get(e);return t?(this.scene.remove(t.group),this.disposeObject(t.group),this.objects.delete(e),this.physics&&this.physics.removeBody(e),this._hoverId===e&&(this._hoverId=null),this.objects.size===0&&(!this.physics||!this.physics.enabled)&&this.stop(),!0):!1}disposeObject(e){e.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i)s.map&&s.map.dispose(),s.dispose()})}syncFromComponent(e){let t=this.objects.get(e),i=this.ctx._components.get(e);if(!t||!i)return;let s=this.mapping.componentToWorld(i);if(t.group.position.set(s.x,s.y,0),this.physics&&this.physics.enabled){let r=this.physics.bodies.get(e);r&&(r.position.set(s.x,s.y,0),r.velocity.setZero(),r.angularVelocity.setZero(),r.wakeUp())}}addPhysicsBody(e){if(!this.physics)return;let t=this.ctx._components.get(e);if(!t)return;let i=t.size||160,s=this.mapping.componentToWorld(t);this.physics.addBody(e,{position:s,halfExtents:Xg(i*(t.scale||1),40)})}syncPhysicsToComponents(){this.physics&&this.physics.sync((e,t)=>{let i=this.objects.get(e);i&&i.group.position.set(t.x,t.y,t.z||0);let s=this.ctx._components.get(e);if(!s||!s.element)return;let r=this.mapping.worldToComponent(t.x,t.y,s.size||160);s.x=Math.round(r.x),s.y=Math.round(r.y),s.element.style.left=s.x+"px",s.element.style.top=s.y+"px"})}enablePhysics(){this.physics||(this.physics=Wg({bounds:this.mapping.bounds})),this.physics.setBounds(this.mapping.bounds),this.physics.setEnabled(!0);for(let e of this.objects.keys())this.addPhysicsBody(e);return this.start(),!0}disablePhysics(){return this.physics&&this.physics.setEnabled(!1),this.objects.size===0&&this.stop(),!0}get physicsEnabled(){return!!(this.physics&&this.physics.enabled)}setLightDirection(e){this._lightDir=e,this.lights.setDirection(e)}setLightIntensity(e){this.lights.setIntensity(e)}setAmbientIntensity(e){this.lights.setAmbient(e)}stageRect(){let e=this.ctx._stageContainer||this.doc.body;try{return e.getBoundingClientRect()}catch{return{left:0,top:0,width:this.width,height:this.height}}}onPointerMove(e){if(!this.available||this.objects.size===0)return;let t=this.stageRect(),s=e.clientX>=t.left&&e.clientX<=t.left+t.width&&e.clientY>=t.top&&e.clientY<=t.top+t.height?Xu(this,e.clientX,e.clientY):null;if(s!==this._hoverId){if(this._hoverId!==null){let r=this.objects.get(this._hoverId);r&&(r.hoverTarget=0)}if(this._hoverId=s,s!==null){let r=this.objects.get(s);r&&(r.hoverTarget=1)}}}onClick(e){if(!this.available||this.objects.size===0||!vg(e.target))return;let t=Xu(this,e.clientX,e.clientY);t!==null&&(xg(this,t),this.ctx._triggerEvent("click",t,null),this.ctx._triggerEvent("3dclick",t,null))}dispose(){if(this.stop(),this.win.removeEventListener("mousemove",this._boundMove,!0),this.win.removeEventListener("click",this._boundClick,!0),this.doc.removeEventListener("visibilitychange",this._boundVisibility),this.resizeObserver)try{this.resizeObserver.disconnect()}catch{}for(let e of[...this.objects.keys()])this.unregister3DObject(e);if(this.physics&&(this.physics.dispose(),this.physics=null),this.renderer){try{this.renderer.dispose()}catch{}try{this.renderer.forceContextLoss&&this.renderer.forceContextLoss()}catch{}hl=Math.max(0,hl-1),this.renderer=null}this.canvas.parentElement&&this.canvas.remove(),this.available=!1}};function Rs(n,e={}){return n._layer3d||(n._layer3d=new fh(n,e),n._layer3d.available&&n._stageContainer&&n._layer3d.attachCanvas()),n._layer3d}function $g(n){n._layer3d&&(n._layer3d.dispose(),n._layer3d=null)}function ph(n,e){let t=n._components.get(e);t&&t.type==="3d-container"&&n._layer3d?.syncFromComponent(e)}function AA(n){return typeof n=="number"&&Number.isFinite(n)?`#${Math.max(0,Math.min(16777215,Math.round(n))).toString(16).padStart(6,"0")}`:String(n||"").trim()||"#3b82f6"}function Zg(n){let e=(r,o)=>{n[r]=a=>o(n,a)};e("create3DContainer",(r,o)=>{let a=Rs(r);if(!a.available)return console.warn("[EasyUI] 当前环境不支持 WebGL，无法创建 3D 组件"),0;let l=r._nextId++,c=160,u=r._getNumber(o.X,100),d=r._getNumber(o.Y,100),h=AA(o.COLOR),f=String(o.TEXT||"3D"),p=r._doc.createElement("div");p.className="easyui-3d-anchor",p.setAttribute("data-easyui-3d",String(l)),p.setAttribute("aria-label","可拖拽的 3D 组件"),Object.assign(p.style,{width:c+"px",height:c+"px",background:"transparent",pointerEvents:"auto",cursor:"grab"}),r._setPosition(p,u,d),r._getPageContainer(r._currentPageId).appendChild(p);let m=yg({color:h,text:f,size:c,doc:r._doc});return r._components.set(l,{type:"3d-container",element:p,x:u,y:d,pageId:r._currentPageId,size:c,scale:1,color:h,text:f,object3D:m.group,block3d:m}),a.register3DObject(m.group,l),a.syncFromComponent(l),r._setupDrag(p,l),l}),e("set3DScale",(r,o)=>{let a=r._getNumber(o.ID),l=r._components.get(a);if(!l||l.type!=="3d-container")return!1;l.scale=Math.max(.1,Math.min(5,r._getNumber(o.SCALE,1)));let c=r._layer3d&&r._layer3d.objects.get(a);return c&&(c.baseScale=l.scale),r._layer3d&&r._layer3d.physicsEnabled&&r._layer3d.addPhysicsBody(a),!0}),e("set3DText",(r,o)=>{let a=r._getNumber(o.ID),l=r._components.get(a);return!l||l.type!=="3d-container"?!1:(l.text=String(o.TEXT||""),l.block3d?.setText(l.text),!0)}),e("set3DLightDirection",(r,o)=>{let a=Rs(r);return a.available?(a.setLightDirection({x:r._getNumber(o.X,.6),y:r._getNumber(o.Y,-1),z:r._getNumber(o.Z,.8)}),!0):!1}),e("set3DLightIntensity",(r,o)=>{let a=Rs(r);return a.available?(a.setLightIntensity(r._getNumber(o.VALUE,1.1)),!0):!1}),e("set3DAmbientIntensity",(r,o)=>{let a=Rs(r);return a.available?(a.setAmbientIntensity(r._getNumber(o.VALUE,.55)),!0):!1}),e("on3DClick",(r,o)=>r._checkEvent("click",r._getNumber(o.ID))),e("enable3DPhysics",r=>{let o=Rs(r);return o.available?o.enablePhysics():!1}),e("disable3DPhysics",r=>r._layer3d?r._layer3d.disablePhysics():!0),e("is3DPhysicsEnabled",r=>!!(r._layer3d&&r._layer3d.physicsEnabled)),vl(n,"move",r=>ph(n,r)),vl(n,"clear",()=>{let r=n._layer3d;if(r)for(let o of[...r.objects.keys()])r.unregister3DObject(o)});let t=n.setPosition;n.setPosition=r=>{let o=t(r);return ph(n,n._getNumber(r.ID)),o};let i=n.moveBy;n.moveBy=r=>{let o=i(r);return ph(n,n._getNumber(r.ID)),o};let s=n.removeComponent;n.removeComponent=r=>{let o=n._getNumber(r.ID),a=s(r);return n._layer3d&&n._layer3d.unregister3DObject(o),a},n._ensure3DCanvas=()=>{n._layer3d&&n._layer3d.attachCanvas()},n._dispose3D=()=>$g(n),n._webglContextCount=()=>Yg()}var Br=class{constructor(e={}){let t=e.win||(typeof window<"u"?window:null),i=e.doc||t&&t.document||(typeof document<"u"?document:null);if(!i||!t)throw new Error("EasyUI 需要浏览器 DOM 环境");if(this._doc=i,this._win=t,this._Scratch=e.Scratch||null,this._dashboardHtml=e.dashboardHtml||"",this._options=e,this._components=new Map,this._groups=new Map,this._pages=new Map,this._currentPageId=null,this._nextId=1,this._nextGroupId=1,this._nextPageId=1,this._callbacks=new Map,this._dragging={active:!1,componentId:null,groupId:null,startX:0,startY:0,originalLeft:0,originalTop:0,startTime:0,velocityX:0,velocityY:0,lastX:0,lastY:0},this._lastDragEndX=0,this._lastDragEndY=0,this._inertiaFrame=null,this._snapEnabled=!1,this._snapGridSize=20,this._autoLayout=!0,this._inertiaEnabled=!0,this._inertiaStrength=.95,this._eventTriggers=new Map,this._stageContainer=null,this._stageWrapper=null,this._canvas=null,this._isInitialized=!1,this._pagesContainer=null,this._theme=null,this._themeVarTargets=[],this._themeVarNames=[],this._themeEasyVars=[],this._themeModalObserver=null,this._layer3d=null,this._dashboard=null,this._hooks={move:[],remove:[],clear:[],event:[]},this._pendingThemeRestore=!1,Ef(this),qf(this),Zg(this),Ep(this),this._initStageContainer(),this._injectStyles(),this._observeStageChanges(),e.restoreTheme!==!1)if(this._stageContainer)try{Jr(this)}catch(s){console.warn("[EasyUI] 恢复主题失败",s)}else this._pendingThemeRestore=!0}_injectStyles(){Ch(this,Ah)}getInfo(){let e=this._Scratch||(typeof Scratch<"u"?Scratch:null);if(!e)throw new Error("EasyUI 需要 Scratch 全局对象");return Tf(e)}dispose(){if(this._inertiaFrame&&this._win.cancelAnimationFrame&&this._win.cancelAnimationFrame(this._inertiaFrame),this._inertiaFrame=null,this._themeModalObserver){try{this._themeModalObserver.disconnect()}catch{}this._themeModalObserver=null}try{Fs(this)}catch(e){console.warn("[EasyUI] 清理主题失败",e)}this._disposeDashboard&&this._disposeDashboard(),this._dispose3D&&this._dispose3D();try{Vr(this)}catch(e){console.warn("[EasyUI] 清理舞台监听失败",e)}this._stageContainer&&(this._stageContainer.remove(),this._stageContainer=null,this._pagesContainer=null)}};var Or=typeof Scratch<"u"?Scratch:null,wA=!!globalThis.__EASYUI_PLUGIN_MODE__;if(Or&&Or.extensions&&!wA){if(!Or.extensions.unsandboxed)throw new Error('EasyUI 需要非沙箱运行：加载扩展时请勾选 "Run extension without sandbox"');let n=new Br({Scratch:Or});Or.extensions.register(n),globalThis.EasyUIInstance=n}globalThis.EasyUIExtension=Br;})();
