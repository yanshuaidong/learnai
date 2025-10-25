var elizabot = require('./elizabot.js');

console.log("=".repeat(60));
console.log("ELIZA 聊天机器人演示 - JavaScript 编程助手 (调试版)");
console.log("=".repeat(60));
console.log();

// 初始化机器人
var greeting = elizabot.start();
console.log("机器人: " + greeting);
console.log();

// 演示你的例子
console.log("=".repeat(60));
console.log("演示例子: JavaScript 控制台输出 (带调试信息)");
console.log("=".repeat(60));
console.log();

function demo(question) {
  console.log("\n" + "🔍".repeat(20) + " 开始新的对话 " + "🔍".repeat(20));
  console.log("👤 用户提问: " + question);
  console.log("🤖 ELIZA 开始处理...");
  console.log("-".repeat(80));
  
  let reply = elizabot.reply(question);
  
  console.log("-".repeat(80));
  console.log("🤖 ELIZA 回答: " + reply);
  console.log("✅".repeat(20) + " 对话结束 " + "✅".repeat(20) + "\n");
}

// 你的核心例子 - 这个应该匹配到 console 关键词
console.log("🎯 核心测试：这个问题应该匹配到 'console' 关键词 (优先级15)");
demo("JavaScript 的控制台输出语句是什么?");

// 其他相关测试
console.log("🎯 测试：这个问题应该匹配到 'output' 关键词 (优先级12)");
demo("如何在控制台输出信息?");

console.log("🎯 测试：这个问题应该匹配到 'console' 关键词 (优先级15)");
demo("console.log 是做什么的?");

console.log("🎯 测试：这个问题应该匹配到 'javascript' 关键词 (优先级10)");
demo("我想学习 JavaScript");

console.log("=".repeat(60));
console.log("对话结束");
console.log("=".repeat(60));
console.log();

var farewell = elizabot.bye();
console.log("机器人: " + farewell);

