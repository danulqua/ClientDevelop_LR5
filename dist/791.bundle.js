(self.webpackChunkclientdevelop_lr5=self.webpackChunkclientdevelop_lr5||[]).push([[791],{791:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});const c=function(t){var n="",e=JSON.parse(localStorage.getItem("cart"));n+='\n            <div class="mt-4 pt-4">\n                <h2 class="text-center text-dark font-weight-bold">Дякуємо! :)</h2>\n                <h3 class="text-center text-dark font-weight-bold">Ваше замовлення №'.concat(window.location.hash.split("/")[1],'</h3>\n                <div class="d-flex justify-content-center row mt-5">\n                    <div class="complete-order">\n                        <ul class="list-group">\n    ');for(var c=0,s=0;s<e.length;s++)for(var l=0;l<t.products.length;l++)t.products[l].id==e[s].id&&(n+='\n                            <li class="list-group-item d-flex justify-content-between align-items-center">\n                                <div class="d-flex flex-column justify-content-center">\n                                    <span class="text-dark font-weight-bold">'.concat(t.products[l].name,"</span>\n                                    <span>").concat(t.products[l].price*e[s].count,' грн.</span>\n                                </div>\n                                <span class="badge badge-warning badge-pill">x').concat(e[s].count,"</span>\n                            </li>\n                        "),c+=t.products[l].price*e[s].count);n+='\n                            <li class="list-group-item d-flex justify-content-between align-items-center">\n                                <div class="d-flex flex-column justify-content-center">\n                                    <span class="text-dark font-weight-bold">Сума</span>\n                                    <span>'.concat(c," грн.</span>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n    "),e=[],localStorage.setItem("cart",JSON.stringify(e));var a=document.getElementById("cartQuantity");return null!=a&&a.remove(),n}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL3ZpZXdzL29yZGVyQ29tcGxldGVQYWdlLmpzIl0sIm5hbWVzIjpbImRiIiwicmVzdWx0IiwiY2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzcGxpdCIsInRvdGFsUHJpY2UiLCJpIiwibGVuZ3RoIiwiaiIsInByb2R1Y3RzIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJjb3VudCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjb3VudFRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoia0pBcURBLFFBckRhLFNBQUFBLEdBQ1QsSUFBSUMsRUFBUyxHQUNUQyxFQUFPQyxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLFNBRTNDTCxHQUFVLG1OQUFKLE9BRzRFTSxPQUFPQyxTQUFTQyxLQUFLQyxNQUFNLEtBQUssR0FINUcsd0xBU04sSUFEQSxJQUFJQyxFQUFhLEVBQ1JDLEVBQUksRUFBR0EsRUFBSVYsRUFBS1csT0FBUUQsSUFDN0IsSUFBSyxJQUFJRSxFQUFJLEVBQUdBLEVBQUlkLEVBQUdlLFNBQVNGLE9BQVFDLElBQ2hDZCxFQUFHZSxTQUFTRCxHQUFHRSxJQUFNZCxFQUFLVSxHQUFHSSxLQUM3QmYsR0FBVSx1UkFBSixPQUd5REQsRUFBR2UsU0FBU0QsR0FBR0csS0FIeEUsOERBSXNCakIsRUFBR2UsU0FBU0QsR0FBR0ksTUFBUWhCLEVBQUtVLEdBQUdPLE1BSnJELCtJQU0wRGpCLEVBQUtVLEdBQUdPLE1BTmxFLHdFQVNOUixHQUFjWCxFQUFHZSxTQUFTRCxHQUFHSSxNQUFRaEIsRUFBS1UsR0FBR08sT0FJekRsQixHQUFVLDhVQUFKLE9BSWtDVSxFQUpsQyx3TUFhTlQsRUFBTyxHQUNQRyxhQUFhZSxRQUFRLE9BQVFqQixLQUFLa0IsVUFBVW5CLElBRTVDLElBQUlvQixFQUFZQyxTQUFTQyxlQUFlLGdCQUt4QyxPQUppQixNQUFiRixHQUNBQSxFQUFVRyxTQUdQeEIiLCJmaWxlIjoiNzkxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZpZXcgPSBkYiA9PiB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGxldCBjYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKTtcbiAgICBcbiAgICByZXN1bHQgKz0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTQgcHQtNFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtZGFyayBmb250LXdlaWdodC1ib2xkXCI+0JTRj9C60YPRlNC80L4hIDopPC9oMj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LWRhcmsgZm9udC13ZWlnaHQtYm9sZFwiPtCS0LDRiNC1INC30LDQvNC+0LLQu9C10L3QvdGPIOKEliR7d2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKVsxXX08L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciByb3cgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGxldGUtb3JkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICBgO1xuICAgIGxldCB0b3RhbFByaWNlID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYi5wcm9kdWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGRiLnByb2R1Y3RzW2pdLmlkID09IGNhcnRbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmsgZm9udC13ZWlnaHQtYm9sZFwiPiR7ZGIucHJvZHVjdHNbal0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2RiLnByb2R1Y3RzW2pdLnByaWNlICogY2FydFtpXS5jb3VudH0g0LPRgNC9Ljwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utd2FybmluZyBiYWRnZS1waWxsXCI+eCR7Y2FydFtpXS5jb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBkYi5wcm9kdWN0c1tqXS5wcmljZSAqIGNhcnRbaV0uY291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ICs9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrIGZvbnQtd2VpZ2h0LWJvbGRcIj7QodGD0LzQsDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dG90YWxQcmljZX0g0LPRgNC9Ljwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNhcnQgPSBbXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcblxuICAgIGxldCBjb3VudFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydFF1YW50aXR5Jyk7XG4gICAgaWYgKGNvdW50VGV4dCAhPSBudWxsKSB7XG4gICAgICAgIGNvdW50VGV4dC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmlldzsiXSwic291cmNlUm9vdCI6IiJ9