<style lang="less" scoped>
@wet-primary:#1abc9c;
@wet-leftmenu-mini-width:70px;
@wet-white:#ffffff;
@wet-inverse:#34495E;
@wet-warn:#F39C12;
@wet-risk:#FA4E4E;
@wet-fs-middle:16px;
.wet-leftmenu{
    &.fiexd{
        position: fixed;
        z-index: 600;
        top: 0;
        left: 0;
        bottom: 0;
        width: 70px;
    }
    .leftmenu_box{
        background-color: @wet-primary;
        position: relative;
        height: 100%;
    }
    .menu_top,.menu_bottom{
        position: absolute;
        left: 0;width: 100%;
        list-style: none;
        margin: 0;
        padding:0;
        .leftmenu-item{
            position: relative;
            background-color: @wet-primary;
            transition:  background-color 0.3s ease-in-out;
            &>.item-link{
                display: block;
                width: 100%;
                padding:5px 0;
                text-decoration: none;
                &>span,&>i{
                    display: block;
                    color: @wet-white;
                    text-align: center;
                }
                &>i{
                    font-size: 28px;
                }
                &>span{
                    margin-top:5px;
                    font-size:16px;
                }
            }
            &:hover{
                background-color:multiply(@wet-primary,fade(@wet-inverse,20%));
                .tj-blog_class{
                    left: 70px;
                    opacity: 1;
                }
                .tj-blog_tool{
                    transform: translateX(0);
                }
            }
        };
    }
    .update_box{
        padding:20px;
        .updata{
            border-top:1px solid rgba(255,255,255,0.4);
            padding:10px;
        }
        .updta-link{
            font-size: 16px;
            color: @wet-white;
            text-decoration: none;
            padding: 10px 0px 10px 40px;
            display: block;
            position: relative;
            transition:  background-color 0.3s ease-in-out;
            background-color:multiply(@wet-primary,fade(@wet-inverse,20%));
            &::before{
                content: "";
                position: absolute;
                top: 50%;
                margin-top: -10px;
                display: block;
                width: 20px;
                height: 20px;
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: cover;
                left: 15px;
                background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTEzNyAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyOCcgaGVpZ2h0PScxMjgnPjxwYXRoIGQ9J00wIDIyNy41NTU1NTZWMGg2NTIuNjI5MzMzbDc4LjczNDIyMyAyMjcuNTU1NTU2SDExMzcuNzc3Nzc4djc5Ni40NDQ0NDRIMFYyMjcuNTU1NTU2eiBtMTEzLjc3Nzc3OCAxMTMuNzc3Nzc3djU2OC44ODg4ODloOTEwLjIyMjIyMlYzNDEuMzMzMzMzSDExMy43Nzc3Nzh6IG0wLTIyNy41NTU1NTV2MTEzLjc3Nzc3OGw1MDAuNjIyMjIyIDkuNDQzNTU1TDU2OC44ODg4ODkgMTEzLjc3Nzc3OEgxMTMuNzc3Nzc4eiBtNjgyLjY2NjY2Ni0xMTMuNzc3Nzc4aDM0MS4zMzMzMzR2MTEzLjc3Nzc3OEg3OTYuNDQ0NDQ0VjB6JyBmaWxsPScjZjRlYTJhJz48L3BhdGg+PC9zdmc+");
            }
            &::after{
                content: "";
                position: absolute;
                top: 50%;
                margin-top: -10px;
                display: block;
                width: 40px;
                height: 20px;
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: 100% auto;
                right:5px;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAQCAMAAABJNS0RAAAAeFBMVEUAAAD/wQz/vwz+vw/+vw/+vhD+vw/+vw/9vw/9vxD9vxD+vw/+vhD/vw7/xAr/0gD+vw/+vw/+vw/9vxD/vw3/vw7+vw/9vw//vw//wA7/vw//wA3/wg/9vw//vw//wgz/vQr+vxD+vw/9vg//vg7/wA//vw3+vxD+SAccAAAAJ3RSTlMALivv38DM+5yDgOfVWxoF98auoDkfuZR3amRLMqZDFQ3h24puVSgHlIJ4AAAAr0lEQVQoz5XS2Q6CMBAFUKALQq1sLTuI6/3/PxQZjC+V4H2aJiczzWS8JecyxK+khUepsRVLKNpE/n6U5MtDMoQZlBBCzSW/gB2/yKcagQY74RDEsdQVdIuq/qAkCrEiI99IA6ga9E+0OSFqs6LCrJ3CzPCuV4Y7EO+KGY1CIJ2G232wcIzj197SOPidzB8jHB/naGhciXYCS2rXClIwWgEHl0Cmdi3zf9RsIrvrVF4gPT4YZZwkNgAAAABJRU5ErkJggg==);
            }
            &:hover{
                background-color:@wet-primary;
            }
        }
    }
    .menu_top{
        top: 30px;
    }
    .menu_bottom{
        bottom:30px;
    }
    .ft{
        padding: 10px;
        text-align: center;
    }
    .tj-blog_tool{
        position: absolute;
        width: 190px;
        height: 150px;
        top: -65px;
        left: 70px;
        border-radius: 4px;
        padding: 20px;
        transform: translateX(-230px);
        transition: transform 0.3s ease-in-out;
        z-index: -1;
        background-color:multiply(@wet-primary,fade(@wet-inverse,10%));
        .tool-list a {
            text-align: center;
            border: 1px dashed #e2e2e2e3;
            color: #ffffff;
            text-decoration: none;
            display: block;
            padding: 4px;
            &>span{
                display: block;
            }
        }
        .tool-list a:hover {
            background-color:multiply(@wet-primary,fade(@wet-inverse,20%));
        }
    }
    .tj-blog_class{
        position: fixed;
        top: 0;
        left: -260px;
        bottom: 0;
        z-index: -1;
        width: 320px;
        background-color:multiply(@wet-primary,fade(@wet-inverse,10%));
        opacity: 0;
        transition: all 0.3s ease-in-out;
        color: @wet-white;
        .tool_file-ul,.li_ul{
            list-style: none;
            padding:12px 20px;margin: 0;
            .wetui_weapp{
                color: #ffffff;
                &:hover{
                    color: @wet-warn;
                }
                &:active{
                    color: @wet-risk;
                }
            }
        }
        .hd{
            padding:20px;
            text-align: justify;
            line-height: 25px;
            white-space: 2px;
            &>span{
                padding-right: 20px;
            }
        }
        .tj_class{
            list-style: none;
            padding: 0;margin: 0;
            padding:20px;
            .class_item{
                padding: 5px 0px 5px 40px;
                border-radius: 5px;
                overflow: hidden;
                font-size: @wet-fs-middle;
                transition:  background-color 0.3s ease-in-out;
                .item-link{
                    color: @wet-white;
                    text-decoration: none;
                    display: block;
                    padding:5px;
                }
                &.selected{
                    background-color:multiply(@wet-primary,fade(@wet-inverse,20%));
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        left:15px;
                        top:50%;
                        margin-top:-10px;
                        width: 20px;
                        height: 20px;
                        background-repeat: no-repeat;
                        background-position: 50%;
                        background-size: cover;
                        background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzIwMCcgaGVpZ2h0PScyMDAnPjxwYXRoIGQ9J00wIDBtMjA0LjggMGw2MTQuNCAwcTIwNC44IDAgMjA0LjggMjA0LjhsMCA2MTQuNHEwIDIwNC44LTIwNC44IDIwNC44bC02MTQuNCAwcS0yMDQuOCAwLTIwNC44LTIwNC44bDAtNjE0LjRxMC0yMDQuOCAyMDQuOC0yMDQuOFonIGZpbGw9JyNGRkVDOUMnPjwvcGF0aD48cGF0aCBkPSdNODE5LjIgMEg1MzQuMjcyQTc1Ni40OCA3NTYuNDggMCAwIDAgMCA0ODMuNTg0VjgxOS4yYTIwNC44IDIwNC44IDAgMCAwIDIwNC44IDIwNC44aDYxNC40YTIwNC44IDIwNC44IDAgMCAwIDIwNC44LTIwNC44VjIwNC44YTIwNC44IDIwNC44IDAgMCAwLTIwNC44LTIwNC44eicgZmlsbD0nI0ZGRTk4QSc+PC9wYXRoPjxwYXRoIGQ9J004MTkuMiAwaC0zLjg0YTc1NS4yIDc1NS4yIDAgMCAwLTUzOS4zOTIgMTAyNEg4MTkuMmEyMDQuOCAyMDQuOCAwIDAgMCAyMDQuOC0yMDQuOFYyMDQuOGEyMDQuOCAyMDQuOCAwIDAgMC0yMDQuOC0yMDQuOHonIGZpbGw9JyNGRkU0NzEnPjwvcGF0aD48cGF0aCBkPSdNNDk3LjE1MiA3MjEuMTUyQTc1Mi4zODQgNzUyLjM4NCAwIDAgMCA1NjAuMzg0IDEwMjRIODE5LjJhMjA0LjggMjA0LjggMCAwIDAgMjA0LjgtMjA0LjhWMjA0LjhhMjA0LjggMjA0LjggMCAwIDAtODkuMDg4LTE2OC45NiA3NTUuMiA3NTUuMiAwIDAgMC00MzcuNzYgNjg1LjMxMnonIGZpbGw9JyNGRkUxNjEnPjwvcGF0aD48cGF0aCBkPSdNNTI2LjA4IDE0MC4wMzJsOTguMzA0IDE5OS4xNjhMODQ0LjggMzcxLjJhMTUuNjE2IDE1LjYxNiAwIDAgMSA4LjcwNCAyNS42bC0xNTkuNzQ0IDE1Ni4xNiAzNy42MzIgMjE5LjEzNmExNS42MTYgMTUuNjE2IDAgMCAxLTIyLjUyOCAxNi4zODRsLTE5Ni42MDgtMTAyLjQtMTk2LjYwOCAxMDIuNGExNS42MTYgMTUuNjE2IDAgMCAxLTIyLjUyOC0xNi4zODRsMzcuMTItMjE5LjEzNi0xNTkuMjMyLTE1NS4xMzZhMTUuNjE2IDE1LjYxNiAwIDAgMSA4LjcwNC0yNS42bDIxOS45MDQtMzIgOTguMzA0LTE5OS4xNjhhMTUuNjE2IDE1LjYxNiAwIDAgMSAyOC4xNi0xLjAyNHonIGZpbGw9JyNGRkY1Q0MnPjwvcGF0aD48cGF0aCBkPSdNNjY1LjYgNDA5LjZhNDQ0LjE2IDQ0NC4xNiAwIDAgMCAyNS42LTYxLjQ0bC02NS41MzYtOS40NzItOTkuNTg0LTE5OC42NTZhMTUuNjE2IDE1LjYxNiAwIDAgMC0yNy45MDQgMGwtOTguMzA0IDE5OS4xNjhMMTc5LjIgMzcxLjJhMTUuNjE2IDE1LjYxNiAwIDAgMC04LjcwNCAyNS42bDE1OS43NDQgMTU2LjE2LTE1LjEwNCA4Ny4wNEE0MDcuODA4IDQwNy44MDggMCAwIDAgNjY1LjYgNDA5LjZ6JyBmaWxsPScjRkZGRkZGJz48L3BhdGg+PC9zdmc+");
                    }
                }
                &:hover{
                    background-color:@wet-primary;
                    cursor: pointer;
                    position: relative;
                    &::before{
                         content: '';
                        position: absolute;
                        left:15px;
                        top:50%;
                        margin-top:-10px;
                        width: 20px;
                        height: 20px;
                        background-repeat: no-repeat;
                        background-position: 50%;
                        background-size: cover;
                        background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIyMSAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzIwMCcgaGVpZ2h0PScyMDAnPjxwYXRoIGQ9J00xMjA0LjgxNDQ5MSAxMjIuNjcwMzc2bC0xMDQuMjAyNDk4LTkuODE5MzY0YTE4LjAyNjU5MiAxOC4wMjY1OTIgMCAwIDEtMTQuNjU1NzY3LTExLjEzODM4MkwxMDQ4LjI5MDkwNyAxMS4xMzk5OTRhMTcuODgwMDM1IDE3Ljg4MDAzNSAwIDAgMC0zMy4xMjIwMzIgMGwtMzcuMDc5MDg4IDkwLjU3MjYzNmExNy41ODY5MTkgMTcuNTg2OTE5IDAgMCAxLTE0LjY1NTc2NyAxMS4xMzgzODJsLTEwNC4zNDkwNTUgOS44MTkzNjRhMTguMDI2NTkyIDE4LjAyNjU5MiAwIDAgMC0xMC4xMTI0NzkgMzEuMzYzMzM5bDc4LjU1NDkwNyA2OS4wMjg2NTlhMTcuNzMzNDc3IDE3LjczMzQ3NyAwIDAgMSA1LjcxNTc0OSAxNy41ODY5Mkw5MDguOTE0NTcgMzM3LjA4NDIzNmExOC4wMjY1OTIgMTguMDI2NTkyIDAgMCAwIDI2LjY3MzQ5NSAxOS42Mzg3MjdsODYuOTA4NjkzLTUxLjAwMjA2N2ExNy41ODY5MTkgMTcuNTg2OTE5IDAgMCAxIDE4LjE3MzE1MSAwTDExMjguNzUxMDY0IDM1Ny4xNjI2MzZBMTguMDI2NTkyIDE4LjAyNjU5MiAwIDAgMCAxMTU0LjY5MTc3IDMzNy4wODQyMzZsLTIzLjMwMjY2OC05Ni44NzQ2MTVhMTcuNzMzNDc3IDE3LjczMzQ3NyAwIDAgMSA1LjcxNTc0OS0xNy41ODY5Mmw3OC41NTQ5MDctNjkuMDI4NjU5YTE4LjMxOTcwOCAxOC4zMTk3MDggMCAwIDAtMTAuODQ1MjY3LTMxLjM2MzMzOXonIGZpbGw9JyNGRUQxNTAnPjwvcGF0aD48cGF0aCBkPSdNOTI4LjY5OTg1NCAyMjQuNjc0NTA5bDQuMjUwMTczLTE3LjE0NzI0N2ExOC4wMjY1OTIgMTguMDI2NTkyIDAgMCAwLTUuNzE1NzQ5LTE3LjAwMDY4OWwtNzQuNDUxMjkzLTY2LjA5NzUwNWExOC4wMjY1OTIgMTguMDI2NTkyIDAgMCAwLTQuMTAzNjE0IDI5LjMxMTUzMmw3OC41NTQ5MDcgNjkuMDI4NjU5YTE0LjY1NTc2NiAxNC42NTU3NjYgMCAwIDEgMS40NjU1NzYgMS45MDUyNXpNMTIxMS4yNjMwMjggMTI0LjU3NTYyNUwxMTM3LjEwNDg1MSAxOTAuNTI2NTczYTE4LjAyNjU5MiAxOC4wMjY1OTIgMCAwIDAtNS43MTU3NDkgMTcuNzMzNDc4bDQuMTAzNjE0IDE3LjI5MzgwNCAxLjYxMjEzNS0xLjc1ODY5MiA3OC41NTQ5MDctNjkuMDI4NjU5YTE4LjMxOTcwOCAxOC4zMTk3MDggMCAwIDAtNC4zOTY3My0zMC4xOTA4Nzl6TTExNTAuNTg4MTU1IDMyMC4zNzY2NjJhMTcuODgwMDM1IDE3Ljg4MDAzNSAwIDAgMS0yMi41Njk4OCAzLjY2Mzk0MkwxMDQwLjgxNjQ2NiAyNzIuODkxOThhMTguMzE5NzA4IDE4LjMxOTcwOCAwIDAgMC0xOC4xNzMxNSAwbC04Ni45MDg2OTQgNTEuMTQ4NjI0YTE3LjczMzQ3NyAxNy43MzM0NzcgMCAwIDEtMjIuNDIzMzIyLTMuODEwNDk5TDkwOC45MTQ1NyAzMzcuMDg0MjM2YTE4LjAyNjU5MiAxOC4wMjY1OTIgMCAwIDAgMjYuNjczNDk1IDE5LjYzODcyN2w4Ni45MDg2OTMtNTEuMDAyMDY3YTE3LjU4NjkxOSAxNy41ODY5MTkgMCAwIDEgMTguMTczMTUxIDBMMTEyOC43NTEwNjQgMzU3LjE2MjYzNkExOC4wMjY1OTIgMTguMDI2NTkyIDAgMCAwIDExNTQuNjkxNzcgMzM3LjA4NDIzNnonIGZpbGw9JyNGRUQxNTAnIG9wYWNpdHk9Jy41Jz48L3BhdGg+PHBhdGggZD0nTTg2OS40OTA1NTkgNTQ0LjQ2MzMyOGE0Mi41MDE3MjIgNDIuNTAxNzIyIDAgMCAwLTI1LjA2MTM2LTczLjI3ODgzMUw2MDEuMTQzNDc5IDQ0OC4zMjE1MDJhNDIuMjA4NjA3IDQyLjIwODYwNyAwIDAgMS0zNC44ODA3MjQtMjUuNzk0MTQ5bC04Ni43NjIxMzYtMjExLjA0MzAzNGE0MS42MjIzNzYgNDEuNjIyMzc2IDAgMCAwLTc3LjIzNTg4OCAwbC04Ni40NjkwMjEgMjExLjA0MzAzNGE0MS4xODI3MDMgNDEuMTgyNzAzIDAgMCAxLTM0LjczNDE2NiAyNS43OTQxNDlMMzcuOTIyMzgyIDQ3MS4zMzEwNTVhNDEuOTE1NDkxIDQxLjkxNTQ5MSAwIDAgMC0yMy41OTU3ODQgNzMuMjc4ODMxbDE4My4wNTA1MjEgMTYxLjIxMzQyOWE0Mi4wNjIwNDkgNDIuMDYyMDQ5IDAgMCAxIDEzLjMzNjc0NyA0MS4xODI3MDNMMTU1LjYwODE4NSA5NzEuOTcyMDNhNDIuMDYyMDQ5IDQyLjA2MjA0OSAwIDAgMCA2MS45OTM4OTEgNDYuMDE5MTA2bDE5MC41MjQ5NjEtMTEyLjExNjYxMmM3MS4yMjcwMjQtNTYuNDI0NyA2OS40NjgzMzItMTI1LjE2MDI0NCA1Ni43MTc4MTYtMTQ3LjU4MzU2Ni0xNC42NTU3NjYtMjUuMzU0NDc2LTM0LjI5NDQ5My0zNi4xOTk3NDMtNTIuNzYwNzU5LTI2LjY3MzQ5NXMtMTkuNjM4NzI3IDE4LjMxOTcwOC0xOS42Mzg3MjcgMTguMzE5NzA4YTM0LjczNDE2NiAzNC43MzQxNjYgMCAxIDEgMzQuMjk0NDkzIDYwLjM4MTc1N3MtNDAuMzAzMzU3IDI1LjA2MTM2LTY3LjQxNjUyNC0yMi44NjI5OTUgMTguNjEyODIzLTgzLjM5MTMxIDI4LjQzMjE4Ni04OC44MTM5NDRhODMuNTM3ODY4IDgzLjUzNzg2OCAwIDAgMSAxMTIuOTk1OTU4IDM5LjQyNDAxMWMyNy44NDU5NTYgNDkuMDk2ODE3IDE2LjQxNDQ1OCAxMTIuOTk1OTU4LTI4LjQzMjE4NyAxNjYuNDg5NTA1bDE5My4xNjMgMTEzLjQzNTYzMWE0MS45MTU0OTEgNDEuOTE1NDkxIDAgMCAwIDYxLjk5Mzg5MS00Ni4wMTkxMDZsLTU0LjM3Mjg5My0yMjUuNTUyMjQzYTQxLjkxNTQ5MSA0MS45MTU0OTEgMCAwIDEgMTMuMTkwMTktNDEuMTgyNzAzeicgZmlsbD0nI0ZFRDE1MCc+PC9wYXRoPjxwYXRoIGQ9J00yMDUuNDM3NzkgNzEzLjU5MDg3MWw1LjI3NjA3Ni0yNC43NjgyNDVhNDEuNzY4OTM0IDQxLjc2ODkzNCAwIDAgMC0xMy4zMzY3NDctNDEuMDM2MTQ2TDE0LjkxMjgyOSA0ODcuMDEyNzI1QTguMjk1MTY0IDguMjk1MTY0IDAgMCAxIDExLjU0MjAwMyA0ODMuNjQxODk4IDQyLjM1NTE2NCA0Mi4zNTUxNjQgMCAwIDAgMTQuOTEyODI5IDU0NC40NjMzMjhsMTgzLjA1MDUyIDE2MS4yMTM0MjlhNDMuOTY3Mjk5IDQzLjk2NzI5OSAwIDAgMSA3LjQ3NDQ0MSA3LjkxNDExNHpNODcxLjU0MjM2NiA0ODQuODE0MzZsLTIuMDUxODA3IDIuMTk4MzY1LTE4My4xOTcwNzggMTYxLjIxMzQyOGE0MS43Njg5MzQgNDEuNzY4OTM0IDAgMCAwLTEzLjE5MDE5IDQxLjAzNjE0Nmw2LjAwODg2NCAyNC42MjE2ODdhNDIuNjQ4MjggNDIuNjQ4MjggMCAwIDEgNy4xODEzMjYtOC4zNTM3ODdsMTgzLjE5NzA3OC0xNjEuMjEzNDI4YTQyLjM1NTE2NCA0Mi4zNTUxNjQgMCAwIDAgMi4wNTE4MDctNTkuNTAyNDExek00NjAuODg3Nzk2IDg0MC44MDI5MjJhNDEuNjIyMzc2IDQxLjYyMjM3NiAwIDAgMC00MC41OTY0NzMgMC43MzI3ODhsLTIwMi42ODkyNDcgMTE5LjE1MTM4YTQxLjYyMjM3NiA0MS42MjIzNzYgMCAwIDEtNTUuOTg1MDI3LTEzLjE5MDE5bC02LjAwODg2NCAyNC40NzUxM2E0Mi4wNjIwNDkgNDIuMDYyMDQ5IDAgMCAwIDYxLjk5Mzg5MSA0Ni4wMTkxMDZsMTkwLjUyNDk2MS0xMTIuMTE2NjEyYTE3My41MjQyNzIgMTczLjUyNDI3MiAwIDAgMCA1Mi43NjA3NTktNjUuMDcxNjAyek03MjcuNDc2MTg0IDk3MS45NzIwM2wtNS44NjIzMDctMjQuMzI4NTcyYTQxLjYyMjM3NiA0MS42MjIzNzYgMCAwIDEtNTYuMTMxNTg0IDEzLjA0MzYzMmwtMTY2LjA0OTgzMi05Ny42MDc0MDNhMjAzLjI3NTQ3OCAyMDMuMjc1NDc4IDAgMCAxLTI3LjExMzE2OCA0MS40NzU4MThsMTkzLjE2MyAxMTMuNDM1NjMxYTQxLjkxNTQ5MSA0MS45MTU0OTEgMCAwIDAgNjEuOTkzODkxLTQ2LjAxOTEwNnonIGZpbGw9JyNGRUQxNTAnIG9wYWNpdHk9Jy41Jz48L3BhdGg+PC9zdmc+");
                    }
                }
            }
        }
    }
    .ft_bg{
        width: 150px;
        height: 150px;
        position: absolute;
        bottom: 30px;
        left: 50%;
        margin-left: -75px;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyOCcgaGVpZ2h0PScxMjgnPjxwYXRoIGQ9J001MjAuNTMzIDY0TDE3MC42NjcgMjQxLjA2N1Y2MDEuNmwzNDkuODY2IDE3Ny4wNjdMODcwLjQgNjAxLjZWMjQxLjA2N0w1MjAuNTMzIDY0eiBtMjgzLjczNCA0OTcuMDY3TDUxOC40IDcwNi4xMzMgNDI2LjY2NyA2NTkuMmwxNTcuODY2LTg5LjZjOC41MzQgNC4yNjcgMTcuMDY3IDYuNCAyNS42IDYuNCAzMiAwIDU3LjYtMjUuNiA1Ny42LTU3LjZzLTI1LjYtNTcuNi01Ny42LTU3LjZjLTI5Ljg2NiAwLTUzLjMzMyAyMS4zMzMtNTUuNDY2IDQ5LjA2N0wzNTYuMjY3IDYyMC44bC0xMjMuNzM0LTYxLjg2N1YyNzkuNDY3TDUxOC40IDEzNC40bDEwMi40IDUxLjItMTY0LjI2NyA5MS43MzNjLTguNTMzLTQuMjY2LTE3LjA2Ni02LjQtMjUuNi02LjQtMzIgMC01Ny42IDI1LjYtNTcuNiA1Ny42czI1LjYgNTcuNiA1Ny42IDU3LjZjMjkuODY3IDAgNTMuMzM0LTIxLjMzMyA1NS40NjctNDkuMDY2TDY4OS4wNjcgMjI0bDExMy4wNjYgNTcuNnYyNzkuNDY3aDIuMTM0eicgZmlsbD0nIzE2OWU4Myc+PC9wYXRoPjxwYXRoIGQ9J001MjIuNjY3IDg4My4ybC0zNTItMTcyLjh2NzAuNGwzNTIgMTc0LjkzM0w4NzAuNCA3ODAuOHYtNzAuNHonIGZpbGw9JyMxNjllODMnPjwvcGF0aD48L3N2Zz4=");
    }
}
</style>

<template>
<div class="wet-leftmenu fiexd">
    <div class="leftmenu_box"></div>
    <ul class="menu_top">
        <li class="leftmenu-item">
            <a href="Javascript:;" class="item-link tjblog-user_detail">
                <i class="ri-user-line"></i>
                <span>用户</span>
            </a>
        </li>
        <li  class="leftmenu-item">
            <a href="Javascript:;" class="item-link">
                <i class=" ri-vip-crown-line"></i>
                <span>vip</span>
            </a>
        </li>
        <li class="leftmenu-item">
            <a href="Javascript:;" class="item-link tjblog-user_login">
                <i class="ri-login-circle-line"></i>
                <span>登入</span>
            </a>
        </li>
        <li class="leftmenu-item">
            <a href="Javascript:;" class="item-link tjblog-user_logout">
                <i class="ri-logout-circle-r-line"></i>
                <span>登出</span>
            </a>
        </li>
    </ul>
    <ul class="menu_bottom">
        <li class="leftmenu-item">
            <a href="Javascript:;" class="item-link">
                <i class="ri-function-fill"></i>
                <span>分类</span>
            </a>
            <div class="tj-blog_class">
                <div class="hd">
                    <span>博客文章分类</span><i class="ri-ubuntu-line"></i>
                </div>
                <ul class="tj_class">
                    <li class="class_item selected">
                        <a href="#" class="item-link">分类一</a>
                    </li>
                    <li class="class_item">
                        <a href="#" class="item-link">分类一</a>
                    </li>
                    <li class="class_item">
                        <a href="#" class="item-link">分类一</a>
                    </li>
                    <li class="class_item">
                        <a href="#" class="item-link">分类一</a>
                    </li>
                    <li class="class_item">
                        <a href="#" class="item-link">分类一</a>
                    </li>
                </ul>
                <div class="update_box">
                    <div class="updata">最新更新</div>
                    <a href="#" class="updta-link">分类一</a>
                </div>
                <div class="ft">
                    前端视界,你我同行
                </div>
                <div class="ft_bg"></div>
            </div>
        </li>
        <li class="leftmenu-item">
            <a href="Javascript:;" class="item-link">
                <i class="iconfont icon-tool"></i>
                <span>工具</span>
            </a>
            <div class="tj-blog_tool">
                <div style="margin-top: 7px;" class="tool-list">
                    <a href="Javascript:;" class="jsts_code"><i class="ri-code-box-fill" style="font-size: 32px;"></i><span>TS/JS常用代码</span></a>
                </div>
                <div style="margin-top: 20px;" class="tool-list">
                    <a href="Javascript:;" class="cssless_code"><i class=" ri-css3-line" style="font-size: 32px;"></i><span>CSS常用代码</span></a>
                </div>
            </div>
        </li>
        <li class="leftmenu-item">
            <a href="Javascript:;" class="item-link">
                <i class="ri-inbox-fill"></i>
                <span>WetUi</span>
            </a>
            <div class="tj-blog_class">
                <div class="hd">
                    WetUI 是我工作之余，方面之后业务的定制化打造的组件库，大多数都是市面上已经存在的组件，我这里只不过是依葫芦画瓢做的，不打算发布npm，就放码云，下载引入，方便自己根据项目需求改样式之类的，不过即便是如此，这个组件库还是遵循我自己整合的一些设计规则，喜欢的就给star吧！感谢！
                </div>
                <ul class="tool_file-ul">
                    <li>
                        <span>WeApp组件文档</span>
                        <ul class="li_ul">
                            <li>
                                <a href="Javascript:;" class="wetui_weapp">移动端文档</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="ft">
                    前端视界,你我同行
                </div>
                <div class="ft_bg"></div>
            </div>
        </li>
        <li class="leftmenu-item">
            <a href="https://gitee.com/thepigthatwantstofly/tjblog" target="_blank" class="item-link">
                <i class="ri-attachment-fill"></i>
                <span>码云</span>
            </a>
        </li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>
