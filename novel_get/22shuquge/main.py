import json
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
# from selenium.webdriver.chrome.service import Service as ChromeService
# from webdriver_manager.chrome import ChromeDriverManager

baseUrl = "https://m.22shuquge.com"
indexUrl = "https://m.22shuquge.com/indexs/8530/"
# driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))


def main():
    # getIndex()
    # chapters = get_chapters()
    return


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
                "title":title,
                "href":f"{baseUrl}{href}"
            })
    chapters_json = json.dumps(chapters, ensure_ascii=False, indent=4)

    # 将JSON字符串保存到本地文件
    with open('22shuquge_chapters.json', 'w', encoding='utf-8') as f:
        f.write(chapters_json)
    driver.quit()

def get_chapters():
    chapters = []
    # 打开JSON文件并读取其内容
    with open('22shuquge_chapters.json', 'r', encoding='utf-8') as f:
        chapters = json.load(f)
    return chapters

main()

