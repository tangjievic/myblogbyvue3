<style lang="less" scoped>
.textover {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.ntlist {
    margin: 0;
    padding: 0;

    li {
        color: #4e4e4e;
        overflow: hidden;
        padding: 0 30px 0 5px;
        line-height: 50px;
        height: 50px;
        list-style: none;
        cursor: pointer;
        text-align: left;
        font-size: 14px;
        position: relative;
        transition: background-color 0.2s ease-in-out;
        border-radius: 2px;

        a {
            color: var(--wet-gray-8);
            text-decoration: none;
        }

        &:hover {
            background-color: fade(#1abc9c, 10%);
        }

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            margin-top: -9px;
            display: block;
            width: 18px;
            height: 18px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            right: 3px;
            background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNMjU2IDM4NHYyNTZhMTI4IDEyOCAwIDAgMCAxMjggMTI4aDI1NnYzNC45MDEzMzNDNjQwIDg2My4yMzIgNjA3LjIzMiA4OTYgNTQ2LjkwMTMzMyA4OTZIMjIxLjA5ODY2N0MxNjAuNzY4IDg5NiAxMjggODYzLjIzMiAxMjggODAyLjkwMTMzM3YtMzI1LjgwMjY2NkMxMjggNDE2Ljc2OCAxNjAuNzY4IDM4NCAyMjEuMDk4NjY3IDM4NEgyNTZ6IG00NjkuMzMzMzMzIDI5OC42NjY2Njd2LTI1NmExMjggMTI4IDAgMCAwLTEyOC0xMjhIMzQxLjMzMzMzM3YtMzQuOTAxMzM0QzM0MS4zMzMzMzMgMjAzLjQzNDY2NyAzNzQuMTAxMzMzIDE3MC42NjY2NjcgNDM0LjQzMiAxNzAuNjY2NjY3aDMyNS44MDI2NjdDODIwLjU2NTMzMyAxNzAuNjY2NjY3IDg1My4zMzMzMzMgMjAzLjQzNDY2NyA4NTMuMzMzMzMzIDI2My43NjUzMzN2MzI1LjgwMjY2N0M4NTMuMzMzMzMzIDY0OS44OTg2NjcgODIwLjU2NTMzMyA2ODIuNjY2NjY3IDc2MC4yMzQ2NjcgNjgyLjY2NjY2N0g3MjUuMzMzMzMzeicgZmlsbD0nIzAwMDAwMCcgb3BhY2l0eT0nLjMnPjwvcGF0aD48cGF0aCBkPSdNMzk1LjY0OCAzODRoMTkwLjAzNzMzM0M2MjAuODg1MzMzIDM4NCA2NDAgNDAzLjExNDY2NyA2NDAgNDM4LjMxNDY2N3YxOTAuMDM3MzMzYzAgMzUuMi0xOS4xMTQ2NjcgNTQuMzE0NjY3LTU0LjMxNDY2NyA1NC4zMTQ2NjdIMzk1LjY0OEMzNjAuNDQ4IDY4Mi42NjY2NjcgMzQxLjMzMzMzMyA2NjMuNTUyIDM0MS4zMzMzMzMgNjI4LjM1MnYtMTkwLjAzNzMzM0MzNDEuMzMzMzMzIDQwMy4xMTQ2NjcgMzYwLjQ0OCAzODQgMzk1LjY0OCAzODR6JyBmaWxsPScjMDAwMDAwJz48L3BhdGg+PC9zdmc+");
        }
    }

    .tag {
        display: inline-block;
        height: 25px;
        line-height: 25px;
        padding: 0 15px;
        border-radius: 5px;
        color: #ffffff;
        margin-right: 15px;
    }

    .tag-1 {
        background-color: #1abc9c;
    }

    .tag-2 {
        background-color: rgb(255, 29, 91);
    }

    .tag-3 {
        background-color: var(--wet-success);
    }
}
</style>

<template>
<ul class="ntlist" ref="newlist">
    <li><a href="#" class="textover"><span class="tag tag-1">视频</span>更新一</a></li>
    <li><a href="#" class="textover"><span class="tag tag-2">模块</span>更新二</a></li>
    <li><a href="#" class="textover"><span class="tag tag-3">文档</span>更新三</a></li>
</ul>
</template>

<script>
import $ from 'jquery';
import {
    onMounted,
    ref
} from 'vue';
let jQuery = $;
(function ($) {
    'use strict';
    var pluginName = 'newsTicker',
        defaults = {
            row_height: 20,
            max_rows: 3,
            speed: 400,
            duration: 2500,
            direction: 'up',
            autostart: 1,
            pauseOnHover: 1,
            nextButton: null,
            prevButton: null,
            startButton: null,
            stopButton: null,
            hasMoved: function () {},
            movingUp: function () {},
            movingDown: function () {},
            start: function () {},
            stop: function () {},
            pause: function () {},
            unpause: function () {}
        };

    function Plugin(element, options) {
        this.element = element;
        this.$el = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.moveInterval;
        this.state = 0;
        this.paused = 0;
        this.moving = 0;
        if (this.$el.is('ul, ol')) {
            this.init();
        }
    }

    Plugin.prototype = {
        init: function () {
            this.$el.height(this.options.row_height * this.options.max_rows)
                .css({
                    overflow: 'hidden'
                });

            this.checkSpeed();

            if (this.options.nextButton && typeof (this.options.nextButton[0]) !== 'undefined')
                this.options.nextButton.click(function () {
                    this.moveNext();
                    this.resetInterval();
                }.bind(this));
            if (this.options.prevButton && typeof (this.options.prevButton[0]) !== 'undefined')
                this.options.prevButton.click(function () {
                    this.movePrev();
                    this.resetInterval();
                }.bind(this));
            if (this.options.stopButton && typeof (this.options.stopButton[0]) !== 'undefined')
                this.options.stopButton.click(function () {
                    this.stop()
                }.bind(this));
            if (this.options.startButton && typeof (this.options.startButton[0]) !== 'undefined')
                this.options.startButton.click(function () {
                    this.start()
                }.bind(this));

            if (this.options.pauseOnHover) {
                this.$el.hover(function () {
                    if (this.state)
                        this.pause();
                }.bind(this), function () {
                    if (this.state)
                        this.unpause();
                }.bind(this));
            }

            if (this.options.autostart)
                this.start();
        },

        start: function () {
            if (!this.state) {
                this.state = 1;
                this.resetInterval();
                this.options.start();
            }
        },

        stop: function () {
            if (this.state) {
                clearInterval(this.moveInterval);
                this.state = 0;
                this.options.stop();
            }
        },

        resetInterval: function () {
            if (this.state) {
                clearInterval(this.moveInterval);
                this.moveInterval = setInterval(function () {
                    this.move()
                }.bind(this), this.options.duration);
            }
        },

        move: function () {
            if (!this.paused) this.moveNext();
        },

        moveNext: function () {
            if (this.options.direction === 'down')
                this.moveDown();
            else if (this.options.direction === 'up')
                this.moveUp();
        },

        movePrev: function () {
            if (this.options.direction === 'down')
                this.moveUp();
            else if (this.options.direction === 'up')
                this.moveDown();
        },

        pause: function () {
            if (!this.paused) this.paused = 1;
            this.options.pause();
        },

        unpause: function () {
            if (this.paused) this.paused = 0;
            this.options.unpause();
        },

        moveDown: function () {
            if (!this.moving) {
                this.moving = 1;
                this.options.movingDown();
                this.$el.children('li:last').detach().prependTo(this.$el).css('marginTop', '-' + this.options.row_height + 'px')
                    .animate({
                        marginTop: '0px'
                    }, this.options.speed, function () {
                        this.moving = 0;
                        this.options.hasMoved();
                    }.bind(this));
            }
        },

        moveUp: function () {
            if (!this.moving) {
                this.moving = 1;
                this.options.movingUp();
                var element = this.$el.children('li:first');
                element.animate({
                        marginTop: '-' + this.options.row_height + 'px'
                    }, this.options.speed,
                    function () {
                        element.detach().css('marginTop', '0').appendTo(this.$el);
                        this.moving = 0;
                        this.options.hasMoved();
                    }.bind(this));
            }
        },

        updateOption: function (option, value) {
            if (typeof (this.options[option]) !== 'undefined') {
                this.options[option] = value;
                if (option == 'duration' || option == 'speed') {
                    this.checkSpeed();
                    this.resetInterval();
                }
            }
        },

        add: function (content) {
            this.$el.append($('<li>').html(content));
        },

        getState: function (paused) {
            if (paused) return 2 // 2 = paused
            else return this.state; // 0 = stopped, 1 = started
        },

        checkSpeed: function () {
            if (this.options.duration < (this.options.speed + 25))
                this.options.speed = this.options.duration - 25;
        },

        destroy: function () {
            this._destroy(); // or this.delete; depends on jQuery version
        }
    };

    $.fn[pluginName] = function (option) {
        var args = arguments;

        return this.each(function () {
            var $this = $(this),
                data = $.data(this, 'plugin_' + pluginName),
                options = typeof option === 'object' && option;
            if (!data) {
                $this.data('plugin_' + pluginName, (data = new Plugin(this, options)));
            }
            // if first argument is a string, call silimarly named function
            if (typeof option === 'string') {
                data[option].apply(data, Array.prototype.slice.call(args, 1));
            }
        });
    };
})(jQuery);
export default {
    setup() {
        const newlist = ref(null);
        onMounted(() => {
            $(newlist.value).newsTicker({
                row_height: 50,
                max_rows: 3,
                duration: 4000,
            });
        })

        return {
            newlist
        }
    }
}
</script>
