import { Directive, OnInit, Input, ElementRef, Renderer} from '@angular/core';

    // Custom Atribute Directive
    @Directive({
        selector: '[citySort]',
    })

    export class CitySortDirective implements OnInit {
        
        @Input() data: any;
        @Input('sortKey') key: any;
        private toggleSort: boolean = false;
        public flag: boolean = false;
        constructor(private el: ElementRef, private renderer: Renderer){

        }

        sortTemp(){
            let tempArray: Array<any> = this.data;
            if(this.flag){
                tempArray.sort(function(a, b) {
                    return a.main.temp - b.main.temp;
                })
            }else{
                tempArray.sort(function(a, b) {
                    return b.main.temp - a.main.temp;
                })
            }
        }

        // sort array By alphabates
        sortCitys(){
            let tempArray: Array<any> = this.data;
            tempArray.sort((a, b) => {
            let aKey = a[this.key];
                let str1: string = a[this.key].toLowerCase();
                let str2: string = b[this.key].toLowerCase();
                if (this.toggleSort) {
                    if (str1 < str2) {
                        return -1;
                    }
                    if (str1 > str2) {
                        return 1;
                    }
                }else {
                    if (str1 > str2) {
                        return -1;
                    }
                    if (str1 < str2) {
                        return 1;
                    }
                }
            return 0;
            });
            return tempArray;
        }

        ngOnInit(){
            this.renderer.listen(this.el.nativeElement, 'click', (event) => {
                let parentNode = this.el.nativeElement.parentNode;
                let children   = parentNode.children;
                if (this.data && this.key == 'name') {
                    let sortedData: any = this.sortCitys();
                }else{
                    let sortedData: any = this.sortTemp();
                    this.flag = true;
                }
                this.toggleSort = !this.toggleSort;
            });
        }
    }
