<style lang="less" scoped>
.blog_footer{
    position: fixed;
    z-index: 500;
    bottom: 0px;left: 0px;
    right: 0;
    height: 60px;
}
.navbar {
    height: 60px;
    background-color: #ffffff;
    display: flex;
}
.navbar__item {
    flex:1;
    .nav_text,.nav_icon{
        position: relative;
        color: fade(#000000,85%);
        text-align: center;
        height: 30px;
    }
    .nav_text{
        line-height: 30px;
    }
    .nav_icon{
        transition: transform 0.5s cubic-bezier(0.71, 0.03, 0.23, 0.95);
        &::after{
            content: '';
            display: block;
            height: 100%;
            background-origin: content-box;
            background-position: center;
            background-size: auto 70%;
            background-repeat: no-repeat;
        }
        &.homes::after{
            background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNNTEzLjUxMTk4MDI1IDE0MC43NTA2OTYyOWwzNzIuMjk2MDU5MjYgMzQwLjMxMTg2MTczYy0xOC45NTc5MDYxOCAyLjMyNjEyMzQ1LTM2Ljc1Mjc1MDYyIDEwLjExODYzNzA0LTUwLjk0MjEwMzcgMjIuNTYzMzk3NTRsLTAuMjMyNjEyMzYgMC4yMzI2MTIzNC0wLjIzMjYxMjM0IDAuMjMyNjEyMzVjLTEzLjcyNDEyODQgMTIuMjEyMTQ4MTYtMzAuMDA2OTkyNjEgMzMuNzI4NzkwMTEtMzAuMDA2OTkyNTggNjcuNTczODg2NDJ2MzE2LjkzNDMyMUg2NjguMDgyODgzOTVWNzUzLjkxNjgzOTUxYzAtNTAuNTkzMTg1MTktNDEuODcwMjIyMjItOTEuNjQ5MjY0Mi05My4zOTM4NTY4LTkxLjY0OTI2NDJINDUxLjg2OTcwODY0Yy01MS41MjM2MzQ1NyAwLTkzLjM5Mzg1Njc4IDQxLjE3MjM4NTE5LTkzLjM5Mzg1Njc5IDkxLjY0OTI2NDJ2MTM0LjU2NjI0MTk3SDIyMy43OTMzMDM3M3YtMzE3LjUxNTg1MTg1YzAtNDYuNTIyNDY5MTMtMzUuNDczMzgyNzEtODUuMTM2MTE4NTItODEuMjk4MDE0ODUtOTAuOTUxNDI3MTdsMzcxLjAxNjY5MTM3LTMzOS4yNjUxMDYxN20wLTc1LjM2NjRjLTEzLjAyNjI5MTM2IDAtMjYuMDUyNTgyNzEgNC40MTk2MzQ1Ny0zNS4zNTcwNzY1NSAxMy4xNDI1OTc1M0w0OS43OTkyNjkxMyA0NzAuMTI5Nzc3NzhjLTE1LjM1MjQxNDgxIDEzLjE0MjU5NzU0LTE5Ljc3MjA0OTM4IDMyLjkxNDY0NjkxLTExLjUxNDMxMTExIDUwLjk0MjEwMzcgOC4yNTc3MzgyNyAxNy41NjIyMzIxIDI1LjgxOTk3MDM4IDI3LjkxMzQ4MTQ4IDQ2LjA1NzI0NDQ0IDI3LjkxMzQ4MTQ4aDQ2LjA1NzI0NDQ0YzEzLjE0MjU5NzU0IDAgMjMuNjEwMTUzMDkgOS44ODYwMjQ2OSAyMy42MTAxNTMxIDIxLjg2NTU2MDQ5VjkxMi4wOTMyMzQ1N2MwIDI1LjIzODQzOTUxIDIyLjQ0NzA5MTM2IDQ2LjA1NzI0NDQ0IDQ5Ljg5NTM0ODE1IDQ2LjA1NzI0NDQ0aDE3NC40NTkyNTkyNGMyNy40NDgyNTY3OCAwIDQ5Ljg5NTM0ODE1LTIwLjgxODgwNDk0IDQ5Ljg5NTM0ODE2LTQ2LjA1NzI0NDQ0Vjc1My45MTY4Mzk1MWMwLTEyLjA5NTg0MTk4IDEwLjQ2NzU1NTU2LTIxLjg2NTU2MDQ5IDIzLjYxMDE1MzA5LTIxLjg2NTU2MDVoMTIyLjgxOTMxODUxYzEzLjE0MjU5NzU0IDAgMjMuNjEwMTUzMDkgOS44ODYwMjQ2OSAyMy42MTAxNTMxIDIxLjg2NTU2MDV2MTU4LjI5MjcwMTIzYzAgMjUuMjM4NDM5NTEgMjIuNDQ3MDkxMzYgNDYuMDU3MjQ0NDQgNTAuNDc2ODc5MDEgNDYuMDU3MjQ0NDVoMTc0LjQ1OTI1OTI2YzI4LjAyOTc4NzY2IDAgNTEuMDU4NDA5ODktMjAuODE4ODA0OTQgNTEuMDU4NDA5ODgtNDYuMDU3MjQ0NDV2LTM0MC43NzcwODY0MWMwLTYuNTEzMTQ1NjYgMS42MjgyODY0Mi0xMC45MzI3ODAyNSA2LjYyOTQ1MTg1LTE1LjM1MjQxNDgyIDQuNDE5NjM0NTctMy44MzgxMDM3MSAxMC40Njc1NTU1Ni02LjA0NzkyMSAxNi45ODA3MDEyNC02LjA0NzkyMUg5NDEuMTY5Nzc3NzdjMjAuMzUzNTgwMjUgMCAzNy43OTk1MDYxOC0xMC45MzI3ODAyNSA0Ni4wNTcyNDQ0Ni0yNy45MTM0ODE0NyA5LjMwNDQ5MzgyLTE4LjAyNzQ1Njc4IDQuODg0ODU5MjYtMzguMzgxMDM3MDQtOS4zMDQ0OTM4NC01MS41MjM2MzQ1OEw1NDguOTg1MzYyOTYgNzguNTI2ODkzODJjLTkuMzA0NDkzODItOC43MjI5NjI5Ni0yMi40NDcwOTEzNi0xMy4xNDI1OTc1NC0zNS40NzMzODI3MS0xMy4xNDI1OTc1M3onIGZpbGw9JyMyYzJjMmMnPjwvcGF0aD48L3N2Zz4=");
        }
        &.search::after{
            background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNMTAwOC42NCA5MzMuMzAyODU3bC0xNDIuNjI4NTcxLTE0Mi42Mjg1NzFBNDg0LjkzNzE0MyA0ODQuOTM3MTQzIDAgMCAwIDgzMC45MDI4NTcgMTQ2LjI4NTcxNCA0ODYuNCA0ODYuNCAwIDAgMCAxNDYuMjg1NzE0IDE0Ni4yODU3MTRhNDg2LjQgNDg2LjQgMCAwIDAgMCA2ODguMjc0Mjg2IDQ4OS4zMjU3MTQgNDg5LjMyNTcxNCAwIDAgMCAzNDEuNTc3MTQzIDEzOC4yNCA0NzcuNjIyODU3IDQ3Ny42MjI4NTcgMCAwIDAgMTU5LjQ1MTQyOS0yNy4wNjI4NTcgNTIuNjYyODU3IDUyLjY2Mjg1NyAwIDAgMCAzMi45MTQyODUtNjguMDIyODU3IDUzLjM5NDI4NiA1My4zOTQyODYgMCAwIDAtNjguMDIyODU3LTMyLjkxNDI4NiAzODAuMzQyODU3IDM4MC4zNDI4NTcgMCAxIDEgMTQ2LjI4NTcxNS04OS45NjU3MTQgNTIuNjYyODU3IDUyLjY2Mjg1NyAwIDAgMCAwIDczLjE0Mjg1N2wxNzcuNzM3MTQyIDE3Ny43MzcxNDNhNTMuMzk0Mjg2IDUzLjM5NDI4NiAwIDAgMCAzNy4zMDI4NTggMTUuMzYgNTQuODU3MTQzIDU0Ljg1NzE0MyAwIDAgMCAzOC4wMzQyODUtMTUuMzYgNTQuMTI1NzE0IDU0LjEyNTcxNCAwIDAgMC0yLjkyNTcxNC03Mi40MTE0Mjl6JyBmaWxsPScjMmMyYzJjJz48L3BhdGg+PC9zdmc+");
        }
        &.my::after{
            background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNMTAxNi44MyA5NDQuMTI4YzAgMjEuNTA0LTE3LjQwOCAzOC45MTItMzguOTEyIDM4LjkxMi0yMS41MDQgMC0zOC45MTItMTcuNDA4LTM4LjkxMi0zOC45MTJ2LTIwLjk5MmMwLTk3LjI4LTE5OC4xNDQtMjM1LjAwOC00MjUuNDcyLTIzNS4wMDgtMTgwLjczNiAwLTQyOC41NDQgMTE1LjcxMi00MjguNTQ0IDIzMC45MTJ2MjUuMDg4YzAgMjEuNTA0LTE3LjQwOCAzOC45MTItMzguOTEyIDM4LjkxMlM3LjE2NiA5NjUuNjMyIDcuMTY2IDk0NC4xMjh2LTQ4LjY0YzAtNTguMzY4IDg2LjUyOC0yMDcuODcyIDMyMi41Ni0yNjMuMTY4LTg0Ljk5Mi01OC4zNjgtMTQxLjMxMi0xNTYuMTYtMTQxLjMxMi0yNjcuMjY0IDAtMTc4LjY4OCAxNDQuODk2LTMyMy41ODQgMzIzLjU4NC0zMjMuNTg0IDE3OC42ODggMCAzMjMuNTg0IDE0NC44OTYgMzIzLjU4NCAzMjMuNTg0IDAgMTA5LjA1Ni01NC4yNzIgMjA1LjMxMi0xMzcuMjE2IDI2NC4xOTIgMjM4LjU5MiA1My4yNDggMzE4LjQ2NCAyMTAuNDMyIDMxOC40NjQgMjY2LjI0djQ4LjY0ek03NTcuNzYgMzY0LjU0NGMwLTEzNS42OC0xMTAuMDgtMjQ1Ljc2LTI0NS43Ni0yNDUuNzZzLTI0NS43NiAxMTAuMDgtMjQ1Ljc2IDI0NS43NlMzNzYuMzIgNjEwLjMwNCA1MTIgNjEwLjMwNHMyNDUuNzYtMTEwLjA4IDI0NS43Ni0yNDUuNzZ6JyBmaWxsPScjMmMyYzJjJz48L3BhdGg+PC9zdmc+");
        }
    }
    &.actived{
        .nav_text{
            color: #2bb9ad;
        }
        .nav_icon{
            transform: translateY(-15px) scale(1.1);
            &::after{
                position: absolute;
                height: 50px;
                width: 50px;
                left: 50%;
                top: 50%;
                margin-top: -25px;
                margin-left: -25px;
                border-radius: 50%;
                background-color: #2bb9ad;
                z-index: -0;
            }
            &.homes::after{
                background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNNTEzLjUxMTk4MDI1IDE0MC43NTA2OTYyOWwzNzIuMjk2MDU5MjYgMzQwLjMxMTg2MTczYy0xOC45NTc5MDYxOCAyLjMyNjEyMzQ1LTM2Ljc1Mjc1MDYyIDEwLjExODYzNzA0LTUwLjk0MjEwMzcgMjIuNTYzMzk3NTRsLTAuMjMyNjEyMzYgMC4yMzI2MTIzNC0wLjIzMjYxMjM0IDAuMjMyNjEyMzVjLTEzLjcyNDEyODQgMTIuMjEyMTQ4MTYtMzAuMDA2OTkyNjEgMzMuNzI4NzkwMTEtMzAuMDA2OTkyNTggNjcuNTczODg2NDJ2MzE2LjkzNDMyMUg2NjguMDgyODgzOTVWNzUzLjkxNjgzOTUxYzAtNTAuNTkzMTg1MTktNDEuODcwMjIyMjItOTEuNjQ5MjY0Mi05My4zOTM4NTY4LTkxLjY0OTI2NDJINDUxLjg2OTcwODY0Yy01MS41MjM2MzQ1NyAwLTkzLjM5Mzg1Njc4IDQxLjE3MjM4NTE5LTkzLjM5Mzg1Njc5IDkxLjY0OTI2NDJ2MTM0LjU2NjI0MTk3SDIyMy43OTMzMDM3M3YtMzE3LjUxNTg1MTg1YzAtNDYuNTIyNDY5MTMtMzUuNDczMzgyNzEtODUuMTM2MTE4NTItODEuMjk4MDE0ODUtOTAuOTUxNDI3MTdsMzcxLjAxNjY5MTM3LTMzOS4yNjUxMDYxN20wLTc1LjM2NjRjLTEzLjAyNjI5MTM2IDAtMjYuMDUyNTgyNzEgNC40MTk2MzQ1Ny0zNS4zNTcwNzY1NSAxMy4xNDI1OTc1M0w0OS43OTkyNjkxMyA0NzAuMTI5Nzc3NzhjLTE1LjM1MjQxNDgxIDEzLjE0MjU5NzU0LTE5Ljc3MjA0OTM4IDMyLjkxNDY0NjkxLTExLjUxNDMxMTExIDUwLjk0MjEwMzcgOC4yNTc3MzgyNyAxNy41NjIyMzIxIDI1LjgxOTk3MDM4IDI3LjkxMzQ4MTQ4IDQ2LjA1NzI0NDQ0IDI3LjkxMzQ4MTQ4aDQ2LjA1NzI0NDQ0YzEzLjE0MjU5NzU0IDAgMjMuNjEwMTUzMDkgOS44ODYwMjQ2OSAyMy42MTAxNTMxIDIxLjg2NTU2MDQ5VjkxMi4wOTMyMzQ1N2MwIDI1LjIzODQzOTUxIDIyLjQ0NzA5MTM2IDQ2LjA1NzI0NDQ0IDQ5Ljg5NTM0ODE1IDQ2LjA1NzI0NDQ0aDE3NC40NTkyNTkyNGMyNy40NDgyNTY3OCAwIDQ5Ljg5NTM0ODE1LTIwLjgxODgwNDk0IDQ5Ljg5NTM0ODE2LTQ2LjA1NzI0NDQ0Vjc1My45MTY4Mzk1MWMwLTEyLjA5NTg0MTk4IDEwLjQ2NzU1NTU2LTIxLjg2NTU2MDQ5IDIzLjYxMDE1MzA5LTIxLjg2NTU2MDVoMTIyLjgxOTMxODUxYzEzLjE0MjU5NzU0IDAgMjMuNjEwMTUzMDkgOS44ODYwMjQ2OSAyMy42MTAxNTMxIDIxLjg2NTU2MDV2MTU4LjI5MjcwMTIzYzAgMjUuMjM4NDM5NTEgMjIuNDQ3MDkxMzYgNDYuMDU3MjQ0NDQgNTAuNDc2ODc5MDEgNDYuMDU3MjQ0NDVoMTc0LjQ1OTI1OTI2YzI4LjAyOTc4NzY2IDAgNTEuMDU4NDA5ODktMjAuODE4ODA0OTQgNTEuMDU4NDA5ODgtNDYuMDU3MjQ0NDV2LTM0MC43NzcwODY0MWMwLTYuNTEzMTQ1NjYgMS42MjgyODY0Mi0xMC45MzI3ODAyNSA2LjYyOTQ1MTg1LTE1LjM1MjQxNDgyIDQuNDE5NjM0NTctMy44MzgxMDM3MSAxMC40Njc1NTU1Ni02LjA0NzkyMSAxNi45ODA3MDEyNC02LjA0NzkyMUg5NDEuMTY5Nzc3NzdjMjAuMzUzNTgwMjUgMCAzNy43OTk1MDYxOC0xMC45MzI3ODAyNSA0Ni4wNTcyNDQ0Ni0yNy45MTM0ODE0NyA5LjMwNDQ5MzgyLTE4LjAyNzQ1Njc4IDQuODg0ODU5MjYtMzguMzgxMDM3MDQtOS4zMDQ0OTM4NC01MS41MjM2MzQ1OEw1NDguOTg1MzYyOTYgNzguNTI2ODkzODJjLTkuMzA0NDkzODItOC43MjI5NjI5Ni0yMi40NDcwOTEzNi0xMy4xNDI1OTc1NC0zNS40NzMzODI3MS0xMy4xNDI1OTc1M3onIGZpbGw9JyNmZmZmZmYnPjwvcGF0aD48L3N2Zz4=");
            }
            &.search::after{
                background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNMTAwOC42NCA5MzMuMzAyODU3bC0xNDIuNjI4NTcxLTE0Mi42Mjg1NzFBNDg0LjkzNzE0MyA0ODQuOTM3MTQzIDAgMCAwIDgzMC45MDI4NTcgMTQ2LjI4NTcxNCA0ODYuNCA0ODYuNCAwIDAgMCAxNDYuMjg1NzE0IDE0Ni4yODU3MTRhNDg2LjQgNDg2LjQgMCAwIDAgMCA2ODguMjc0Mjg2IDQ4OS4zMjU3MTQgNDg5LjMyNTcxNCAwIDAgMCAzNDEuNTc3MTQzIDEzOC4yNCA0NzcuNjIyODU3IDQ3Ny42MjI4NTcgMCAwIDAgMTU5LjQ1MTQyOS0yNy4wNjI4NTcgNTIuNjYyODU3IDUyLjY2Mjg1NyAwIDAgMCAzMi45MTQyODUtNjguMDIyODU3IDUzLjM5NDI4NiA1My4zOTQyODYgMCAwIDAtNjguMDIyODU3LTMyLjkxNDI4NiAzODAuMzQyODU3IDM4MC4zNDI4NTcgMCAxIDEgMTQ2LjI4NTcxNS04OS45NjU3MTQgNTIuNjYyODU3IDUyLjY2Mjg1NyAwIDAgMCAwIDczLjE0Mjg1N2wxNzcuNzM3MTQyIDE3Ny43MzcxNDNhNTMuMzk0Mjg2IDUzLjM5NDI4NiAwIDAgMCAzNy4zMDI4NTggMTUuMzYgNTQuODU3MTQzIDU0Ljg1NzE0MyAwIDAgMCAzOC4wMzQyODUtMTUuMzYgNTQuMTI1NzE0IDU0LjEyNTcxNCAwIDAgMC0yLjkyNTcxNC03Mi40MTE0Mjl6JyBmaWxsPScjZmZmZmZmJz48L3BhdGg+PC9zdmc+");
            }
            &.my::after{
                background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNMTAxNi44MyA5NDQuMTI4YzAgMjEuNTA0LTE3LjQwOCAzOC45MTItMzguOTEyIDM4LjkxMi0yMS41MDQgMC0zOC45MTItMTcuNDA4LTM4LjkxMi0zOC45MTJ2LTIwLjk5MmMwLTk3LjI4LTE5OC4xNDQtMjM1LjAwOC00MjUuNDcyLTIzNS4wMDgtMTgwLjczNiAwLTQyOC41NDQgMTE1LjcxMi00MjguNTQ0IDIzMC45MTJ2MjUuMDg4YzAgMjEuNTA0LTE3LjQwOCAzOC45MTItMzguOTEyIDM4LjkxMlM3LjE2NiA5NjUuNjMyIDcuMTY2IDk0NC4xMjh2LTQ4LjY0YzAtNTguMzY4IDg2LjUyOC0yMDcuODcyIDMyMi41Ni0yNjMuMTY4LTg0Ljk5Mi01OC4zNjgtMTQxLjMxMi0xNTYuMTYtMTQxLjMxMi0yNjcuMjY0IDAtMTc4LjY4OCAxNDQuODk2LTMyMy41ODQgMzIzLjU4NC0zMjMuNTg0IDE3OC42ODggMCAzMjMuNTg0IDE0NC44OTYgMzIzLjU4NCAzMjMuNTg0IDAgMTA5LjA1Ni01NC4yNzIgMjA1LjMxMi0xMzcuMjE2IDI2NC4xOTIgMjM4LjU5MiA1My4yNDggMzE4LjQ2NCAyMTAuNDMyIDMxOC40NjQgMjY2LjI0djQ4LjY0ek03NTcuNzYgMzY0LjU0NGMwLTEzNS42OC0xMTAuMDgtMjQ1Ljc2LTI0NS43Ni0yNDUuNzZzLTI0NS43NiAxMTAuMDgtMjQ1Ljc2IDI0NS43NlMzNzYuMzIgNjEwLjMwNCA1MTIgNjEwLjMwNHMyNDUuNzYtMTEwLjA4IDI0NS43Ni0yNDUuNzZ6JyBmaWxsPScjZmZmZmZmJz48L3BhdGg+PC9zdmc+");
            }
        }
    }
}
</style>
<template>
<footer class="blog_footer boder-bos_shaow">
    <nav class="navbar">
        <div @click="seletTbsItem('home')"
        :class="['navbar__item',status.current === 'home'?'actived':'']">
            <div class="nav_icon homes"></div>
            <div class="nav_text">主页</div>
        </div>
        <div @click="seletTbsItem('search')"
        :class="['navbar__item',status.current === 'search'?'actived':'']">
            <div class="nav_icon search"></div>
           <div class="nav_text">发现</div>
        </div>
         <div @click="seletTbsItem('my')"
         :class="['navbar__item',status.current === 'my'?'actived':'']">
            <div class="nav_icon my"></div>
            <div class="nav_text">我的</div>
        </div>
    </nav>
    <div class="ios"></div>
</footer>
</template>

<script>
import { reactive,watchEffect } from 'vue';
import { useRouter,useRoute } from 'vue-router';
export default {
    setup(){
        const router = useRouter();
        const route = useRoute();
        const status = reactive({
            current:'home'
        })
        watchEffect(()=>{
            status.current = route.name
        })
        const seletTbsItem = (key)=>{
            status.current = key;
            router.push({name:key})
        }
        return{
            seletTbsItem,
            status
        }
    }
}
</script>
