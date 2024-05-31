import json
import os
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
# from selenium.webdriver.chrome.service import Service as ChromeService
# from webdriver_manager.chrome import ChromeDriverManager

baseUrl = "https://m.22shuquge.com"
indexUrl = "https://m.22shuquge.com/indexs/8530/"
book_name = "深海余烬"
# driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))


def main():
    # getIndex()
    # readOneChapter("https://m.22shuquge.com/b/0/870/698450.html")
    generate_book()
    # get_chapters()
    return


current_file_path = __file__

current_dir = os.path.dirname(current_file_path)


def getIndex():
    driver = webdriver.Chrome()
    driver.get(indexUrl)
    html_content = driver.page_source
    soup = BeautifulSoup(html_content, 'html.parser')
    # elements = driver.find_elements(by=By.CSS_SELECTOR,value=".read dd")
    # chapters = []
    # for element in elements:
    #     title = element.text
    #     href = element.get_attribute('href')
    #     chapters.append({
    #         title:title,
    #         href:href
    #     })
    page_list = soup.select('.index-container select option')
    pages = []
    for page in page_list:
        value = page["value"]
        pages.append(value)
    chapters = []
    for pageUrl in pages:
        driver.get(f"{baseUrl}{pageUrl}")
        html_content = driver.page_source
        soup = BeautifulSoup(html_content, 'html.parser')
        chapter_list = soup.select('.chapter li a')
        for chapter in chapter_list:
            a_tag_contents = chapter.contents
            title = a_tag_contents[0].text.strip()
            href = chapter["href"]
            chapters.append({
                "title": title,
                "href": f"{baseUrl}{href}"
            })
    chapters_json = json.dumps(chapters, ensure_ascii=False, indent=4)

    # 将JSON字符串保存到本地文件
    with open(os.path.join(current_dir, 'chapters.json'), 'w', encoding='utf-8') as f:
        f.write(chapters_json)
    driver.quit()


def get_chapters():
    chapters = []
    # 打开JSON文件并读取其内容
    with open(os.path.join(current_dir, 'chapters.json'), 'r', encoding='utf-8') as f:
        chapters = json.load(f)
    return chapters


def generate_book():
    driver = webdriver.Chrome()
    # 打开文件，如果文件不存在则创建，存在则清空内容 ('w' 模式)
    with open(os.path.join(current_dir, f'{book_name}.txt'), 'w', encoding="utf-8") as file:
        chapters = get_chapters()
        num = 0
        for chapter in chapters:
            bodyText = readOneChapter(driver, chapter_url=chapter["href"])
            one_text = chapter["title"] + "\n" + bodyText
            # 循环数组中的每个字符串
            # 将字符串写入文件，并添加换行符
            file.write(one_text + '\n')
            num += 1
            if (num > 5):
                break

    driver.quit()


def readOneChapter(driver, chapter_url):
    page_text = ""
    for i in range(5):
        driver.get(chapter_url)
        html_content = driver.page_source
        soup = BeautifulSoup(html_content, 'html.parser')
        remove_el = soup.select("#nr #nr1 #center_tip")
        if len(remove_el) > 0:
            for r in remove_el:
                r.decompose()
        book = soup.select("#nr #nr1")
        if(len(book)>0):
            text = book[0].text.strip()
            page_text = page_text + "\n" + text
            next_el = soup.find(id="pt_next")
            next_text = next_el.text.strip()
            if (next_text == "下一页"):
                chapter_url = baseUrl + next_el["href"]
            else:
                break
        else:
            print("当前页面未找到目标元素")
            print(html_content)
    return page_text


main()
