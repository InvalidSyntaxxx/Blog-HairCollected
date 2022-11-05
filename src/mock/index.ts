/*
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-10-26 16:40:24
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-02 18:50:35
 */

// 参考：https://github.com/nuysoft/Mock/wiki/Mock.mock()

import Mock from 'mockjs';
Mock.setup({
    timeout: '400-600'
})

Mock.mock('/api/getNote', 'get',{
      'code': '0', 
      'message': 'success',
      'data': {
        "date": "@datetime",//随机生成日期时间
        "content|1": 
            ["有人夜里开车看海，有人期末考第一道题都做不出来😁🤶👨‍🦳🙏👉✌️❤️💟♥️♥️👍👍👌👉✌️😊😗😘😁🥰😘😊😋😙😮😐😶‍🌫️😯😫"
            , "呜呜呜呜呜呜呜呜w呜呜呜u呜呜呜😁🤶👨‍🦳🙏👉✌️❤️💟♥️♥️👍👍👌👉✌️😊😗😘😁🥰😘😊😋😙😮😐😶‍🌫️😯😫呜呜呜呜呜呜呜w呜呜呜u呜w呜呜呜u呜呜呜😁🤶👨‍🦳🙏👉✌️❤️💟♥️♥️👍👍👌👉✌️😊😗😘😁🥰😘😊😋😙😮😐😶‍🌫️😯😫呜呜呜呜呜呜呜w呜呜呜u呜呜呜呜呜😁🤶👨‍🦳🙏👉✌️❤️💟♥️♥️👍👍👌👉✌️😊😗😘😁🥰😘😊😋😙😮😐😶‍🌫️😯😫呜呜"
            , "我日你大爷🥰🥰😁🤶👨‍🦳🙏👉✌️❤️💟♥️♥️👍👍👌👉✌️😊😗😘😁🥰😘😊😋😙😮😐😶‍🌫️😯😫😫"
            ,"1"],
        "id|1-5": 5, //随机生成1-5的数字
        "imgurl":Mock.Random.image('200x200', '#4A7BF7', 'Hello')
      }
    }
)

//管理员数据接口
Mock.mock(/api\/getUser\/admin/,'get',{
    'code':200,
    'message':'success',
    'data': {
      "id|5-10":Mock.Random.natural(1,9),
      "username":Mock.Random.name(),
      "avatar": Mock.Random.image('50x50','#f00e20', "Avatar"),
      "description":Mock.Random.paragraph(1,3)
    }
})

//const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
// for (let i = 0; i < 26; i++) { // 可自定义生成的个数
 	// const template = {
    //   'Boolean': Random.boolean, // 可以生成基本数据类型
    //   'Natural': Random.natural(1, 10), // 生成1到100之间自然数
    //   'Integer': Random.integer(1, 100), // 生成1到100之间的整数
    //   'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    //   'Character': Random.character(), // 生成随机字符串,可加参数定义规则
    //   'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
    //   'Range': Random.range(0, 10, 2), // 生成一个随机数组
    //   'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    //   'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
    //   'Color': Random.color(), // 生成一个颜色随机值
    //   'Paragraph': Random.paragraph(2, 5), // 生成2至5个句子的文本
    //   'Name': Random.name(), // 生成姓名
    //   'Url': Random.url(), // 生成web地址
    //   'Address': Random.province() // 生成地址
    // } 
    // dataList.push(template)
//   }
