package com.example.webpos.db;

import com.example.webpos.model.Cart;
import com.example.webpos.model.Product;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Repository
public class JD implements PosDB {


    private List<Product> products = null;

    @Cacheable("jdproducts")
    @Override
    public List<Product> getProducts() {
        try {
            if (products == null) {
                System.out.println("Load from JD");
                products = parseJD("Java");
            }
        } catch (IOException e) {
            products = new ArrayList<>();
        }
        return products;
    }

    @Override
    public Product getProduct(String productId) {
        for (Product p : getProducts()) {
            if (p.getId().equals(productId)) {
                return p;
            }
        }
        return null;
    }

    public static List<Product> parseJD(String keyword) throws IOException {
        String rawData = ",开课吧 Java Python Web前端 课程 赠 数字化人才职场赋能系列丛书籍（8本）,451.00,https://img11.360buyimg.com/n1/s200x200_jfs/t1/124573/21/11990/96352/5f575498Ef6b6bc06/4e3cfe064e5ffe42.jpg\n" +
                "13284888,Java从入门到精通（第6版）（软件开发视频大讲堂） Java入门经典,75.80,https://img13.360buyimg.com/n1/s200x200_jfs/t1/186038/9/7947/120952/60bdd993E41eea7e2/48ab930455d7381b.jpg\n" +
                "12800420,Java核心技术 第11版 套装共2册 CoreJava从入门到精通套装,149.00,https://img10.360buyimg.com/n1/s200x200_jfs/t1/146172/4/7453/357315/5f5099a8E331a2969/e8c60e5068541c7d.jpg\n" +
                "10058164,Java编程思想（第4版） Java学习必读经典，殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622,54.00,https://img14.360buyimg.com/n1/s200x200_jfs/t2191/111/699154754/198998/32d7bfe0/5624b582Nbc01af5b.jpg\n" +
                "12185501,零基础学Java（全彩版）赠视频、源码、练习题、电子魔卡、配置开发环境教程等 【Java新手入门自学教程】31小时同步视频+138个应用实例+276个同步训练题+100个必刷题+电子魔卡+电子实战手册+简易版编程词典+在线答疑。　单册100册以上团购电话4006186622,56.70,https://img11.360buyimg.com/n1/s200x200_jfs/t1/120970/3/14944/126416/614c3972Ebafbb1f9/5feb7cccb27c9ef5.jpg\n" +
                "12602672,Java从入门到项目实战（全程视频版） 编程入门/IT计算机书籍 65小时全程视频教学,99.70,https://img12.360buyimg.com/n1/s200x200_jfs/t1/37162/11/8870/130954/5ccfe770E9ce31151/74a5a5dcd83ecc09.jpg\n" +
                ",开课吧 Java修炼指南：核心框架精讲视频教程源码赠Java书籍,55.90,https://img12.360buyimg.com/n1/s200x200_jfs/t1/182257/2/5876/166230/60acada2Ebcf7ce32/81da016340a5bc5f.jpg\n" +
                "12759308,Java核心技术 卷I 基础知识（原书第11版） CoreJava第11版,74.50,https://img13.360buyimg.com/n1/s200x200_jfs/t1/102900/26/2632/158701/5dd601a5E9ed34588/596e136d4a144cae.jpg\n" +
                "12507084,Effective Java中文版（原书第3版） Java之父力荐；Jolt大奖获奖作品升级；与Java核心技术、Java编程思想、深入理解Java虚拟机堪称Java四大名著。正版图书双色印刷,78.50,https://img14.360buyimg.com/n1/s200x200_jfs/t1/28526/24/4598/165510/5c3433c7Ea1da5694/eb0bb43a326e8709.jpg\n" +
                "10167771016,Java从入门到精通 第6版 软件开发视频大讲堂 java语言程序设计电脑编程序员计算机教程书 清华 Java入门经典,39.80,https://img14.360buyimg.com/n1/s200x200_jfs/t1/170529/40/26039/450030/619a0dacE7efe063c/b88517a36b00a645.jpg\n" +
                "13494800,IntelliJ IDEA 软件开发与应用（计算机技术开发与应用丛书） 专业、系统、全面地介绍IntelliJIDEA开发工具！配套丰富示例并涵盖项目开发中的技术体系结构,132.10,https://img10.360buyimg.com/n1/s200x200_jfs/t1/217328/28/2163/91571/617a4053E4dda99a9/318df0de59e0d681.jpg\n" +
                "12607299,深入理解Java虚拟机：JVM高级特性与最佳实践（第3版） 周志明JVM新作,85.10,https://img14.360buyimg.com/n1/s200x200_jfs/t1/88306/3/4620/259118/5de865cdE6678a233/6193b6435bb973d1.jpg\n" +
                "10100190,O'Reilly：Head First Java（中文版 第2版 涵盖Java5.0） 800万人共同学习的高效操作法,79.00,https://img10.360buyimg.com/n1/s200x200_jfs/t2680/274/3707696254/120035/6281369a/57986bbdN27e0e4fe.jpg\n" +
                "13216522,Java语言程序设计 基础篇 原书第12版 Java经典教材再推新版,98.70,https://img12.360buyimg.com/n1/s200x200_jfs/t1/158063/34/21117/158566/6080deecEe8a120f5/133314834a5093d1.jpg\n" +
                "12518025,疯狂Java讲义（第5版）（含DVD光盘一张）(博文视点出品) 800万人共同学习的高效操作法,137.60,https://img10.360buyimg.com/n1/s200x200_jfs/t1/41570/5/1180/179278/5cc54479E7522cee3/d5b50e571ccc926e.jpg\n" +
                "10020017718280,佳沃JAVA公路自行车双碟刹公路车18变速弯把男女款成人单车赛车鱼雷3 黑色DECA版 22速 50#身高173-180cm 700C 佳沃JAVA公路自行车双碟刹公路车18变速弯把男女款成人单车赛车鱼雷3 黑色DECA版 22速 50#身高173-180cm 700C,3500.00,https://img12.360buyimg.com/n1/s200x200_jfs/t1/185387/9/21908/181399/62451cddE5750aac2/6c9a5e8ea9b1b496.jpg\n" +
                "12767450,Java实战 第2版(图灵出品) 《Java,82.10,https://img10.360buyimg.com/n1/s200x200_jfs/t1/58652/2/12362/129522/5de751dcE494b5dfa/d00e13726d206e88.jpg\n" +
                "12958580,JavaScript高级程序设计 第4版(图灵出品） web前端开发教程,89.00,https://img10.360buyimg.com/n1/s200x200_jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg\n" +
                ",开课吧 2021备战金九银十Java工程师涨薪训练营 体验课,3.00,https://img12.360buyimg.com/n1/s200x200_jfs/t1/176948/9/19945/141716/611cb34aE8cc8e4ab/51041f9b91ba4701.jpg\n" +
                "12656478,Java Web从入门到精通（第3版）（软件开发视频大讲堂） 200册以上团购电话：01089111488,75.80,https://img13.360buyimg.com/n1/s200x200_jfs/t1/63193/26/4716/123499/5d2c330cEaa9d4e6e/c10ef361096c96a0.jpg\n" +
                "12759911,【包邮】labuladong的算法小抄(Python Java C++零基础)(博文视点出品) 800万人共同学习的高效操作法,100.00,https://img11.360buyimg.com/n1/s200x200_jfs/t1/222655/9/15017/109672/624d2048E989c419f/0f7db0234fd95dcc.jpg\n" +
                "11740734,Java并发编程的艺术 阿里巴巴技术专家/Java并发编程领域领军人物撰写,38.90,https://img14.360buyimg.com/n1/s200x200_jfs/t1312/364/1104231705/156699/523dc84c/55b87a5eN09430825.jpg\n" +
                "12791368,Java核心技术 卷II 高级特性（原书第11版） CoreJava第11版,74.50,https://img13.360buyimg.com/n1/s200x200_jfs/t1/92329/23/8897/158518/5e09abdcE2cd17eb5/056bbe9e4803be8d.jpg\n" +
                "12577417,Java 11官方入门教程（第8版） Java编程入门官方学习资料,94.80,https://img12.360buyimg.com/n1/s200x200_jfs/t1/68117/11/11367/197460/5d8b4901Ec51f134b/6c391f77d952f98d.jpg\n" +
                ",开课吧 Java编程大厂通用Java技术解决方案 体验课【查看客服消息获取上课链接】,3.00,https://img11.360buyimg.com/n1/s200x200_jfs/t1/214113/6/2363/247803/617bc3c7Ea43275a4/754c0b120acdcc44.png\n" +
                "10020951649181,佳沃JAVA公路自行车双碟刹公路车18变速弯把男女款成人单车赛车鱼雷3 3代黑色DECA版 22速 50#身高172-181cm 700C 佳沃JAVA公路自行车双碟刹公路车18变速弯把男女款成人单车赛车鱼雷3 3代黑色DECA版 22速 50#身高172-181cm 700C,3500.00,https://img11.360buyimg.com/n1/s200x200_jfs/t1/185387/9/21908/181399/62451cddE5750aac2/6c9a5e8ea9b1b496.jpg\n" +
                "12275164,零基础学JavaScript（全彩版）自学JavaScript 赠视频 电子书 源码 技术团队答疑 零基础自学Web前端开发的入门图书,73.60,https://img14.360buyimg.com/n1/s200x200_jfs/t1/139538/19/27055/124971/618b1fbbE8f98bfcc/21c80814703c63e7.jpg\n" +
                "12445838,码出高效：Java开发手册(博文视点出品) 800万人共同学习的高效操作法,98.00,https://img13.360buyimg.com/n1/s200x200_jfs/t30436/35/1494683199/69182/11fe5fb2/5ce20930N6d70a9f6.jpg\n" +
                "12827212,Java 11官方参考手册（第11版） Java语言专家、畅销书作者HerbertSchildt新书,188.10,https://img12.360buyimg.com/n1/s200x200_jfs/t1/103759/9/19668/133910/5ea007f7E82d73d22/c7c36a4e35d9e3b4.jpg\n" +
                "12991976,阿里巴巴Java开发手册（第2版）(博文视点出品) 800万人共同学习的高效操作法,31.00,https://img11.360buyimg.com/n1/s200x200_jfs/t1/111618/38/19052/229489/5f74b1baE3a77dfa1/d85a8401e18b5ea5.jpg\n";

        List<Product> list = new ArrayList<>();
        String[] items = rawData.split("\n");
        for(String item:items){
            String[] subs = item.split(",");
            Product product = new Product(subs[0], subs[1], Double.parseDouble(subs[2]), subs[3]);
            list.add(product);
        }
        try {
            Thread.sleep(ThreadLocalRandom.current().nextInt(1000, 3000));
        }
        catch(InterruptedException e){

        }
        return list;

/*
        //获取请求https://search.jd.com/Search?keyword=java
        String url = "https://search.jd.com/Search?keyword=" + keyword;
        //解析网页
        Document document = Jsoup.parse(new URL(url), 10000);
        //所有js的方法都能用
        Element element = document.getElementById("J_goodsList");
        //获取所有li标签
        Elements elements = element.getElementsByTag("li");
//        System.out.println(element.html());

        //获取元素的内容
        for (Element el : elements
        ) {
            //关于图片特别多的网站，所有图片都是延迟加载的
            String id = el.attr("data-spu");
            String img = "https:".concat(el.getElementsByTag("img").eq(0).attr("data-lazy-img"));
            String price = el.getElementsByAttribute("data-price").text();
            String title = el.getElementsByClass("p-name").eq(0).text();
            if (title.indexOf("，") >= 0)
                title = title.substring(0, title.indexOf("，"));

            Product product = new Product(id, title, Double.parseDouble(price), img);
            System.out.println(id + "," + title + "," + price + "," + img);

            list.add(product);
        }
        return list;*/
    }

}
