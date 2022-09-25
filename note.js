// git 第一天
// 主要做代码托管（进公司第一天就要干的事）
// 版本控制软件：用来记录文件的变化（新增文件、修改文件、删除文件等等操作; 用于团队协作）

// 分类：本地 - 集中化 - 分布式（比较主流，代表性的工具 git）

// 集中化 - SVN 缺点：依赖网络（只记录变化的部分，可以节省磁盘空间）
// 分布式 - Git 优点：在没有网络的状态，依旧可以本地提交（不仅仅是记录变化的部分，把原来的也拷贝了一份，相对来说比较耗磁盘空间 [拿空间换时间]）

// 世界上最流行，最先进的版本控制系统 Git

// 特点：git 所有的操作近乎都是在本地运行的（速度会很快）

// 三个区域：工作区(就是现在处理的地方)    暂存区(刚刚已经把某个功能已经完善了，提交到暂存区)    仓库(将所有的更改全部放到总仓库里面保存 store)

// 三个状态：已修改状态 modified     已暂存状态 staged     已提交状态 committed

// 流程：对文件进行修改 -> 需要进行暂存 -> 总的提交（本地提交，提交到仓库）

// 安装软件：约定，非必要不装系统盘
// 建议：d:/software 这个位置是专门存放安装的软件的路径的
// 建议：d:/develop  workspace 专门开发的目录、资料（不要直接往桌面拖）
// 打开终端的方式有三种：1、git bash 2、windows + r  3、按着 shfit 键，同时鼠标单机右键，选择 prowershell 选项
// cd 你要进入的文件夹路径
// ls 可以列出当前路径下面的所有的文件和文件夹

// 检测git安装的版本：git --version，如果能正常输出版本号就表示安装成功

// 配置用户名和邮箱
// git config --global user.name '你的姓名的拼音'
// git config --global user.email '你的手机号@163.com'  '你的手机号126@com'  'qq.com'

// 检测配置用户名和邮箱是否配置完毕
// git config user.name
// git config user.email
// 运行这两行代码，如果能正常输出之前配置过的用户名和邮箱即代表配置成功

// 全局配置的用户名和邮箱具体配置的位置 C:\Users\用户名\.gitconfig

// 如何查看当前本机用户名

// 查看全局所有的配置项：git config --list --global

// 获取帮助信息：git config -h

// 使用 cls 可以清除之前输入的一些命令

// 获取 git仓库 的两种方式：
// 方式1：可以将本地的某个文件夹转换成 git仓库 （需要执行 git init 命令）
// 方式2：可以直接从远程服务器克隆（拷贝）一份下来

// 注意点：新建的工程名称不要是中文，名称中间不要有空格等特殊字符

// 文件所处的状态：
// 1、未被跟踪 untracked（当前文件还没有被git所管理）  2、未修改 unmodified  3、已修改 modified  4、已暂存 staged

// 查看文件的状态：git status 文件处于什么状态，都能看到
// 精简的命令：git status -s    ?? 标识当前文件处于未被跟踪的状态

// 跟踪新文件：git add 你要跟踪的文件的名称 (可以使用tab键，快速补齐路径)(使用上下左右键的上键，可以快速恢复到上一次输入的命令)

// 提交更新文件：git commit -m '此次提交的记录信息' (-m 后面的提交信息，一定不能丢)

// 对已经添加到暂存区的文件，又进行修改了的话，再次查看文件状态，依然属于已修改状态，需要再次添加到暂存区（需要 git add 文件名称）

/**
 * add 命令的作用：
 * 1、将未被跟踪的文件，添加到暂存区
 * 2、将已经处于跟踪的文件又做了修改的情况下，再次添加到暂存区
 * 3、将冲突文件解决完之后，需要再次将文件状态标识为已解决，添加到暂存区
 */

/**
 * 回顾git命令第一天的前半天
 * 
 * git init - 在本地初始化一个 git 仓库（会生成一个 .git 的隐藏文件）
 * git add 你要添加的文件 - 把文件放到到暂存区里面
 * git commit -m '提交的描述信息' - 提交更新文件
 * 
 * 查看文件状态：git status
 */

// 撤销对文件的修改（危险性较高，慎重修改）
// git checkout -- 文件名

// 向暂存区中一次性添加多个文件
// 如果暂存的文件个数比较多，可以使用如下的命令，一次性将所有的新增和未修改的文件加入暂存区
// git add .(会经常使用)

// 取消暂存的文件: 如果需要从暂存区中移出对应的文件，可以使用如下的命令
// git reset HEAD 要移出的文件名称

// 跳过使用暂存区
// git 工作的标准流程是 工作区 → 暂存区 → Git仓库，有时候这么做略显繁琐，所以可以跳过暂存区，直接将工作区的修改提交到Git仓库

// git commit -a -m '描述信息'  -a 表示跳过暂存区


// 移出文件
// 1.从git仓库和工作区中同时移出文件
// git rm -f 文件名

// 2.只从git仓库中已移出指定文件，但保留工作区中对应的文件
// git rm --cached 文件名

// gitignore文件的例子

// 查看提交历史
// git log